import {useRouter} from "next/router";
import React from "react";
import {useEffect, useState} from "react";
import {
    errorOptions,
    successOptions,
} from "../../public/appData/AppData";
import API from "../../api/Api";
import I_SINGLE_REQUEST_DETAIL, {} from "../../models/requestSitter.interface";
import {useSnackbar} from "react-simple-snackbar";
import "react-day-picker/lib/style.css";
import "rc-time-picker/assets/index.css";
import {AxiosResponse} from "axios";
import Res from "../../models/response.interface";
import {strings} from "../../public/lang/Strings";
import I_CARD_DETAILS from "../../models/requestSitter.interface";
import Cookies from "universal-cookie";
import I_BANK_DETAILS from "../../models/requestSitter.interface";
import {Modal} from "react-bootstrap";
import Link from "next/link";

const api = new API();

const PaymentScreen: React.FC<{}> = () => {
    const router = useRouter();
    const cookies = new Cookies
    const [openSuccess, closeSuccess] = useSnackbar(successOptions);
    const [openError, closeError] = useSnackbar(errorOptions);

    const [successView, setSuccessView] = useState<boolean>(false);

    const [cardData, setCardData] = useState<I_CARD_DETAILS[]>([]);
    const [bankData, setBankData] = useState<I_BANK_DETAILS[]>([]);
    const [couponCode, setCouponcode] = useState<string>('');


    const [requestData, setRequestData] = useState<I_SINGLE_REQUEST_DETAIL>();

    const [errors, setErrors] = useState<any>({});


    useEffect(() => {
        if (router.query.id) {
            getRequestDetail(router.query.id);
        }
    }, [router.query]);

    useEffect(() => {
        getCards()
        getBankAccounts()
    }, []);


    const getRequestDetail = (id: any) => {
        api
            .getSingleRequestDetail(id)
            .then((response: AxiosResponse<Res<I_SINGLE_REQUEST_DETAIL>>) => {
                let data = response.data.response;
                setRequestData(data)
                setCouponcode(data.coupon_code);
            })
            .catch((error) => console.log(error));
    };

    const getCards = () => {
        api
            .getAllCard()
            .then((json: AxiosResponse<Res<I_CARD_DETAILS[]>>) => {
                setCardData(json.data.response)
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    const getBankAccounts = () => {
        api
            .getAllBankAccount()
            .then((json: AxiosResponse<Res<I_BANK_DETAILS[]>>) => {
                setBankData(json.data.response)
            })
            .catch((error) => {
                console.log('error', error);
            });
    }

    const confirmPayment = () => {
        if (!cardData.length) {
            openError('Select bank card')
        } else {
            let card = cardData.find((val) => val.is_default == 1)
            if(card) {
                api.confirmPayment(requestData.id, {card_id: card.id}).then((res) => {
                    if (res.data.status == 200) {
                        openSuccess('Successfully paid for the job')
                        setSuccessView(true)
                    } else {
                        openError(res.data.message)
                    }

                }).catch((error) => {
                    console.log('error is', error)
                })
            }else {
                openError('Select bank card')
            }
        }

    }

    const applyCoupon = () => {
        if (!router.query.id) {
            return
        }

        if (couponCode) {
            api
                .applyCoupon({coupon_code: couponCode, booking_id: router.query.id})
                .then((json: any) => {
                    if (json.data.status == 200) {
                        getRequestDetail(router.query.id);
                        openSuccess('Successfully applied coupon')
                    } else {
                        openError(json.data.message)
                    }
                })
                .catch((error) => {

                    setErrors(error.response.data.errors);
                });
        } else {
            openError('Enter coupon code')
        }
    };

    const removeCoupon = () => {
        if (!router.query.id) {
            return
        }
        api
            .removeCoupon(router.query.id)
            .then((json: any) => {
                getRequestDetail(router.query.id);
                setCouponcode('')
                openSuccess('Successfully removed coupon')
            })
            .catch((error) => {
                console.log('error', error);
            });

    };


    return (
        <>
            <div className="main-page">
                <div className="main-wrapper bottom">
                    {/*-------------for mobile view--------------*/}
                    <div className="bg-white main-background mb-0 pl-0 d-block d-md-none d-lg-none d-xl-none">
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mob-pay">
                                    <small
                                        className="mb-1">{requestData ? requestData.pets[0].pet_name : ''}&nbsp;{requestData ? requestData.service.name : ''}&nbsp;with&nbsp;{requestData ? requestData.service.name : ''}&nbsp;{requestData ? (requestData.user.firstname + ' ' + requestData.user.lastname) : ''}</small>
                                    <p className="font-12 mb-0">For {requestData ? requestData.pets.length : 0}&nbps;{requestData ? requestData.pet_type : ''}</p>
                                </div>
                                <div className="col-2 pay-edit pr-0">
                                    <div className="spot-info chat-float">
                                        <div className="main-icon">
                                            <div className="edit-icon">
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="pencil"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    className="svg-inline--fa fa-pencil fa-w-16 fa-2x"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                                        className=""
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-------------/for mobile view-------------*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-11 col-xl-11 mx-auto">
                                <h4 className="font-semibold mb-3 d-none d-md-block d-lg-block d-xl-block">
                                    {strings.paymentInformation}
                                </h4>
                                {/*----------*/}
                                <div className="row">
                                    <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                                        <div className="bg-white main-content top-margin">
                                            <h5 className="font-medium mb-3">{strings.selectPaymentMethod}</h5>
                                            <div className="pay-tabs">
                                                <div>
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <a
                                                                className="nav-link active"
                                                                id="cards-tab"
                                                                data-toggle="tab"
                                                                href="#cards"
                                                                role="tab"
                                                            >
                                                                {strings.Cards}
                                                            </a>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <a
                                                                className="nav-link"
                                                                id="bank-tab"
                                                                data-toggle="tab"
                                                                href="#bank"
                                                                role="tab"
                                                            >
                                                                {strings.bankPayment}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tab-content" id="myTabContent">
                                                    {/*----------cards details---------*/}
                                                    <div
                                                        className="tab-pane fade show active"
                                                        id="cards"
                                                        role="tabpanel"
                                                        aria-labelledby="cards-tab"
                                                    >
                                                        <div className="cards-details">
                                                            <h5 className="font-semibold mb-3">{strings.savedCards}</h5>
                                                            {cardData.map((item, index) => <>
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                                            <div className="custom-check">
                                                                                <label className="check ">
                                                                                    <input
                                                                                        type="radio"
                                                                                        name="is_name1"
                                                                                        checked={item.is_default == 1}
                                                                                        onChange={() => {
                                                                                            let data = cardData.map((val) => {
                                                                                                let data = val
                                                                                                return {
                                                                                                    ...data,
                                                                                                    is_default: 0
                                                                                                }
                                                                                            })
                                                                                            data[index].is_default = 1
                                                                                            setCardData(data)
                                                                                        }}
                                                                                    />
                                                                                    <span className="checkmark"/>
                                                                                    {cookies.get("firstname") + ' ' + cookies.get("lastname")}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                                                                            <div className="master-card">
                                                                                <p className="mb-0">
                                                                                    Master card{" "}
                                                                                    <span className="font-14 ml-3">
                                                                                **** **** **** {item.last4}
                                  </span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr/>
                                                                </>
                                                            )}
                                                            <div className="card-button">
                                                                <button
                                                                    onClick={() => router.push('user/payments-and-payouts')}
                                                                    className="btn btn-black">
                                                                    {strings.Addnewcard}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*----------/cards details---------*/}
                                                    {/*----------bank details---------*/}
                                                    <div
                                                        className="tab-pane fade"
                                                        id="bank"
                                                        role="tabpanel"
                                                        aria-labelledby="bank-tab"
                                                    >
                                                        <div className="cards-details">
                                                            <h5 className="font-semibold mb-3">{strings.savedCards}</h5>
                                                            {bankData.map((val) => <>
                                                                <div className="row">
                                                                    <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                                                                        <div className="custom-check">
                                                                            <label className="check ">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="is_name2"
                                                                                    defaultChecked={true}
                                                                                />
                                                                                <span className="checkmark"/>
                                                                                {val.bank_name}
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 col-md-2 col-lg-2 col-xl-2 user-name">
                                                                        <div className="master-card">
                                                                            <p className="mb-0">  {cookies.get("firstname") + ' ' + cookies.get("lastname")}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 col-md-2 col-lg-2 col-xl-2 alignment">
                                                                        <div className="master-card">
                                                                            <p className="mb-0">{val.account_number}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                            </>)}
                                                            <div className="card-button">
                                                                <button
                                                                    onClick={() => router.push('user/payments-and-payouts')}
                                                                    className="btn btn-black">
                                                                    {strings.Addnewbankaccount}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*----------/bank details---------*/}
                                                </div>
                                            </div>
                                            {/*-------coupon code-----*/}
                                            <hr/>
                                            <div className="row">
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                                                    <div className="coupon-details">
                                                        <h6 className="mb-1 font-semibold text-muted">
                                                            {strings.doYouHaveCoupon}
                                                        </h6>
                                                        <p className="mb-0 font-12 text-muted">
                                                            {strings.couponDetail}
                                                        </p>
                                                    </div>
                                                </div>
                                                {requestData && <div className={'row'}>
                                                    <div className="col-auto pl-0 mt-auto">
                                                        <div className="coupon-code">
                                                            <input
                                                                className="form-control font-medium"
                                                                placeholder="Enter coupon code"
                                                                id="coupon-code"
                                                                value={couponCode}

                                                                onChange={(e) => {
                                                                    setCouponcode(e.target.value)
                                                                    setErrors({...errors, coupon_code: null})
                                                                }}
                                                            />
                                                        </div>
                                                        {errors && errors.coupon_code ? (
                                                            <span
                                                                style={{
                                                                    color: "#ff0000",
                                                                    fontSize: "12px",
                                                                }}
                                                            > {errors.coupon_code}
                                                           </span>
                                                        ) : null}
                                                    </div>
                                                    <div className="col-auto pl-0 mt-auto">
                                                        <button
                                                            onClick={() => requestData.coupon_code ? removeCoupon() : applyCoupon()}
                                                            className="btn btn-save mb-2"
                                                        >
                                                            {requestData.coupon_code ? strings.Remove : strings.apply}
                                                        </button>
                                                    </div>
                                                </div>}
                                            </div>
                                            <hr className="d-none d-md-block d-lg-block d-xl-block"/>
                                            {/*-------coupon code-----*/}
                                            <div className="alignment d-none d-md-block d-lg-block d-xl-block">
                                                <button onClick={confirmPayment} className="btn btn-primary">
                                                    {strings.confirmBooking}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12 col-md-4 col-lg-4 col-xl-4 d-none d-md-block d-lg-block d-xl-block">
                                        <div className="bg-white main-content m-0">
                                            <h5>{strings.bookingDetails}</h5>
                                            <small className="mb-3">
                                                {requestData ? requestData.pets[0].pet_name : ''}&nbsp;{requestData ? requestData.service.name : ''}&nbsp;with&nbsp;{requestData ? requestData.service.name : ''}&nbsp;{requestData ? requestData.service.name : ''}
                                            </small>
                                            <hr/>
                                            <div className="boarding-details">

                                                <div className="d-flex justify-content-between mb-3">
                                                    <div>
                                                        <p className="font-14 text-muted mb-0">
                                                            {strings.transportFee}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-14 text-muted mb-0">{`¥${requestData ? requestData.amend_amount : '0'}`}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div>
                                                        <p className="font-14 text-muted mb-0">
                                                            {strings.tax}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-14 text-muted mb-0">{`¥${requestData ? requestData.tax : '0'}`}</p>
                                                    </div>
                                                </div>
                                                {requestData && requestData.coupon_code ? <div className="d-flex justify-content-between mb-3">
                                                    <div>
                                                        <p className="font-14 text-muted mb-0">
                                                            {strings.discount}
                                                        </p>
                                                    </div>
                                                    <div><p className="font-14 text-muted mb-0">¥{requestData ? requestData.discount : ''}</p>
                                                    </div>
                                                </div>:null}
                                                <div className="d-flex justify-content-between mb-3">
                                                    <div>
                                                        <p className="font-14 text-muted mb-0">
                                                            {strings.subTotal}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-14 text-muted mb-0">{`¥${requestData ? requestData.sub_total : '0'}`}</p>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <p className="font-14 font-semibold mb-0">
                                                            {strings.totalAmount}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-14 font-semibold  mb-0">{`¥${
                                                            requestData ? requestData.total_paid_amount : "0"
                                                        }`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*----------*/}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white main-background mb-0 d-block d-md-none d-lg-none d-xl-none">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 px-0">
                                    <div className="d-flex justify-content-between button-design">
                                        <div className="proceed-btn">
                                            <a href="http://159.65.142.31/petcation-design/booking-successfully.html">
                                                <button className="btn btn-primary">{strings.confirmBooking}</button>
                                            </a>
                                        </div>
                                        <div className="payment-amt">
                                            <h6>{`¥${
                                                requestData ? requestData.total_paid_amount : "0"
                                            }`}</h6>
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="info-circle"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="svg-inline--fa fa-info-circle fa-w-16 fa-2x"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"
                                                    className=""
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={successView}
                id="successView"
                className="modal-child"
                aria-labelledby="settings"
                tabIndex="-1"
                scrollable
            >
                <div className="main-page mobile-bg">
                    <div className="main-wrapper bottom">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="bg-white main-content booking-success">
                                        <div className="booking-align">
                                            <div className="d-block d-md-none d-lg-none d-xl-none mb-2">
                                                <a className="navbar-brand logo"
                                                   href="http://159.65.142.31/petcation-design/home.html"><img
                                                    src="images/logo.png"/></a>
                                            </div>
                                            <h3 className="font-semibold">{strings.bookingSuccess}</h3>
                                            <p className="font-14 mb-0">{strings.bookingFor} {requestData ? requestData.pet_type === 1 ? 'Dog' : requestData.pet_type === 2 ? 'Cat' : requestData.pet_type === 3 ? 'Bird' : requestData.pet_type === 4 ? 'Reptiles' : 'Small animals' : 'sitting'} {strings.isSuccessful}</p>

                                        </div>
                                        <hr className="main-border"/>
                                        <div className="booking-success-details">
                                            <h5 className="font-medium mb-3">{strings.ookingDetails}</h5>
                                            <h6 className="font-medium mb-3">{strings.bookedFor}</h6>
                                            {requestData && requestData.pets.map((val, index) => (
                                                <div key={index} className="d-flex mb-2">
                                                    <div className="german-img"><img src={val.pet_image}
                                                                                     className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="my-auto">
                                                        <h6 className="font-medium mb-0">{val.pet_name}, {val.age_year + ' yr(s) ' + val.age_month + ' months'}
                                                            {/*<span className="font-12 ml-2 font-normal text-muted">Siberian Husky</span>*/}
                                                        </h6>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="additional-services">
                                            <h6 className="font-medium">Additional services</h6>
                                            {requestData && requestData.additional_services.map((item) => <div
                                                className="d-flex justify-content-between">
                                                <div><h6 className="font-14 font-medium mb-0">{item.name}</h6></div>
                                                <div><h6 className="font-14 font-medium mb-0">¥{item.price}</h6></div>
                                            </div>)}
                                        </div>
                                        <hr/>
                                        <div className="subtotal">
                                            <h6 className="font-14  font-medium">Subtotal</h6>
                                            <div className="d-flex justify-content-between mb-2">
                                                <div><p className="font-12 text-muted mb-0">Pet boarding</p></div>
                                                <div><p
                                                    className="font-12 text-muted mb-0">¥{requestData ? requestData.sub_total : ''}</p>
                                                </div>
                                            </div>
                                            {requestData && requestData.coupon_code ? <div className="d-flex justify-content-between mb-2">
                                                <div><p className="font-12 text-muted mb-0">Dicount</p></div>
                                                <div><p
                                                    className="font-12 text-muted mb-0">¥{requestData ? requestData.discount : ''}</p>
                                                </div>
                                            </div>:null}
                                            <div className="d-flex justify-content-between mb-2">
                                                <div><p className="font-12 text-muted mb-0">Transportation fee</p></div>
                                                <div><p
                                                    className="font-12 text-muted mb-0">¥{requestData ? requestData.amend_amount : ''}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <div><p className="font-12 text-muted mb-0">Tax</p></div>
                                                <div><p
                                                    className="font-12 text-muted mb-0">¥{requestData ? requestData.tax : ''}</p>
                                                </div>
                                            </div>

                                        </div>
                                        {requestData && requestData.coupon_code ? <div className="d-flex justify-content-between mb-2">
                                            <div><p className="font-12 text-muted mb-0">Dicount</p></div>
                                            <div><p
                                                className="font-12 text-muted mb-0">¥{requestData ? requestData.discount : ''}</p>
                                            </div>
                                        </div>:null}
                                        <hr/>
                                        <div className="d-flex justify-content-between">
                                            <div><p className="font-14 font-semibold mb-0">Total amount</p></div>
                                            <div><p
                                                className="font-14 font-semibold  mb-0">¥{requestData ? requestData.total_paid_amount : ''}</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="booking-button">
                                            <button onClick={() => {
                                                router.replace('/search-sitter')
                                            }} className="btn btn-primary px-4">Make another booking
                                            </button>
                                            <button onClick={() => {
                                                router.replace('/user/dashboard')
                                            }} className="btn btn-primary px-4">{'Go to dashboard'}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};


export default PaymentScreen;

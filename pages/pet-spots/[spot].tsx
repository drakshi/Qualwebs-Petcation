import React, {useEffect, useState} from "react";
import SingleSpotHeaderMobile from "../../components/petSpot/singleSpot/SingleSpotHeaderMobile";
import SingleSpotHeader from "../../components/petSpot/singleSpot/SingleSpotHeader";
import GalleryView from "../../components/sitterProfile/GalleryView";
import SpotSlider, {I_SPOT} from "../../components/petSpot/SpotSlider";
import {useRouter} from "next/router";
import API from "../../api/Api";
import I_PET from "../../models/pet.interface";
import {strings} from "../../public/lang/Strings";
import {serviceData, sitterServices} from "../../public/appData/AppData";
import {
    LightgalleryProvider,
    LightgalleryItem,
    withLightgallery,
    useLightgallery,
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import { useSnackbar } from 'react-simple-snackbar';
import SpotRating from "../../components/common/SpotRating";

let api = new API();

export interface SpotDetailInterface {
    id: number;
    category_id: number;
    address: string;
    amenities: {
        available_pets: number[];
        reservation_type_id: number;
        reservation_info: string;
        smoking_cessation_id: number;
        smoking_cessation_info: string;
        parking_id: number;
        parking_info: string;
        service_amenities_id: number;
        service_amenities_info: string;
        language_id: number;
        language_info: string;
        homepage: string;
        facebook_url: string;
        instagram_url: string;
        twitter_url: string;
        remark: string;
        languages: number[],
        services: number[]
    };
    budgets: {
        night_charge_id: number;
        noon_charge_id: number;
        payment_method_id: number;
        service_charge: number;
    };
    city: string;
    created_at: string;
    english_name: string;
    images: any;
    latitude: string;
    longitude: string;
    operations: {
        means_of_transport: string;
        business_hours: string;
        regular_holidays: string;
        is_open_on_sunday: number;
    };
    overall_rate: number;
    pets: I_PET[];
    phone_number: string;
    postal_code: number;
    spot_name: string;
    total_review: number;
}

export default function SingleSpot(props) {
    const [spotDetail, setSpotDetail] = useState<SpotDetailInterface>();
    const [reservationTypes, setReservationTypes] = useState(null);
    const [smokingCessions, setSmokingCessions] = useState<any>(null);
    const [parking, setParking] = useState<any>(null);
    const [langauges, setLanguage] = useState<any>(null);
    const [paymentMethods, setPaymentMethods] = useState<any>([]);
    const [featuredSpots, setFeaturedSpots] = useState<I_SPOT[]>([]);
    const [showModal, setShowModal] = useState(false);


    const router = useRouter();
    const [openSnackbar] = useSnackbar();

    useEffect(() => {
        getReservationTypes();
        getSmokingCession();
        getParkings();
        getLanguages();
        getPaymentMethods()
        getFeaturedPetSpot()
    }, []);


    useEffect(() => {

        if (router.query.spot) {
            getSpotDetail(router.query.spot)
        }
    }, [router.query]);

    const getFeaturedPetSpot = () => {
        api
            .getPetSpots({})
            .then((res) => {
                if (res.data.response) {
                    setFeaturedSpots(res.data.response);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getReservationTypes = () => {
        api
            .getReservationTypes()
            .then((res) => {
                setReservationTypes(res.data.response);
            })
            .catch((error) => {
            });
    };

    const getSmokingCession = () => {
        api
            .getSmokingCession()
            .then((res) => {
                setSmokingCessions(res.data.response);
            })
            .catch((error) => {
            });
    };

    const getParkings = () => {
        api
            .getParking()
            .then((res) => {
                setParking(res.data.response);
            })
            .catch((error) => {
            });
    };

    const getLanguages = () => {
        api
            .getLangauges()
            .then((res) => {
                setLanguage(res.data.response);
            })
            .catch((error) => {
            });
    };

    const getPaymentMethods = () => {
        api
            .getPaymentMethods()
            .then((res) => {
                setPaymentMethods(res.data.response);
            })
            .catch((error) => {
            });
    };


    const getSpotDetail = (id) => {
        api
            .getPetSpotDetails(id)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    setSpotDetail(res.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const horizontalView = (props) => (
        <div className="row">
            <div className="col-xl-4 my-auto">
                <div className="spot-inner-details">
                    <p className="text-muted mb-0">{props.name}</p>
                </div>
            </div>
            {props.isAward ? awardView() : <div className="col-xl-8">
                <div className="spot-inner-details">
                    <h6 className="mb-0">{props.value}</h6>
                </div>
            </div>}
        </div>
    )

    const awardView = () => (
        <div className="awards-details">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shield-check"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-shield-check fa-w-16 fa-2x"
            >
                <path
                    fill="currentColor"
                    d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z"
                />
            </svg>
            <h6 className="mb-0 font-medium d-inline">2018 GOLD</h6>
        </div>
    )

    const OpenButtonWithHook = (props: any) => {
        const {openGallery} = useLightgallery();

        console.log('spotdetail images is', spotDetail.images)
        return (
            <button
                {...props}
                onClick={(e) => {
                    openGallery(spotDetail.images, 0)
                }}
                className="btn btn-sm btn-orange"
            >
                {"Show all " + spotDetail.images.length}
            </button>
        );
    };

    const getImages = () => {
        let array = [];
        let imgArr = spotDetail.images.map((val) => val.path)
        for (let i = 0; i <= imgArr.length; i++) {
            if (imgArr[i]) {
                array.push(
                    <div
                        style={{display: i == 0 || i > 4 ? "none" : "block"}}
                        className="col-md-6 col-sm-3 col-6 image-card"
                    >
                        <LightgalleryItem group={imgArr} src={imgArr[i]} thumb={imgArr[i]}>
                            <img className="img-fluid" src={imgArr[i]} alt="img"/>
                        </LightgalleryItem>
                    </div>
                );
            }
        }
        return array;
    };


    return (
        <div className="main-wrapper bottom mt-0">
            {/*-----------for mobile view-------------*/}
            <SingleSpotHeaderMobile showModal={()=> setShowModal(true)} updateSpot={(id)=> {router.query ? getSpotDetail(id):''}} data={spotDetail}/>
            {/*-----------/for mobile view------------*/}
            {/*-------1st section----*/}
            <div className="main-image d-none d-md-block d-lg-block d-xl-block">
                <img src={spotDetail && spotDetail.images.length ? spotDetail.images[0].path : ''}
                     className="img-fluid"/>
            </div>
            {/*-------/1st section----*/}
            {/*-------2nd section----*/}
            <SingleSpotHeader showModal={()=> setShowModal(true)} updateSpot={(id)=> {router.query ? getSpotDetail(id):''}} data={spotDetail}/>
            {/*-------/2nd section----*/}
            {/*-----3rd section------*/}
            <div className="container">
                {spotDetail && <GalleryView images={spotDetail.images} />}
            </div>
            {/*-----/3rd section------*/}
            {/*-----4th section------*/}
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                        <div className="bg-white main-background">
                            {spotDetail && <LightgalleryProvider>
                                <OpenButtonWithHook/>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 card-holder">
                                        <div className="row">
                                            <div className="col-12 image-card">
                                                <LightgalleryItem
                                                    group={spotDetail.images}
                                                    src={spotDetail.images[0].path}
                                                    thumb={spotDetail.images[0].path}
                                                >
                                                    <img className="img-fluid" src={spotDetail.images[0].path}
                                                         alt="img"/>
                                                </LightgalleryItem>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 d-sm-block d-none card-holder">
                                        <div className="row">{getImages().map((value) => value)}</div>
                                    </div>
                                </div>
                            </LightgalleryProvider>}
                        </div>
                        <div className="bg-white main-background">
                            <h5 className="font-semibold font-20">Hi</h5>
                            <p>
                                {spotDetail ? '' : ''}
                            </p>
                        </div>
                        <div className="bg-white main-background">
                            <h4 className="font-semibold mb-3">Spot details</h4>
                            {horizontalView({
                                name: strings.restaurantName,
                                value: spotDetail ? (spotDetail.english_name + ' | ' + spotDetail.spot_name) : ''
                            })}
                            <hr/>
                            {horizontalView({name: strings.gener, value: 'Pet Hotels'})}
                            <hr/>
                            {horizontalView({name: strings.Address, value: spotDetail ? spotDetail.address : ''})}
                            <hr/>
                            {horizontalView({
                                name: strings.transportation,
                                value: '5 mins walk from the west Exit of JR Ebisu Station.'
                            })}
                            <hr/>
                            <div className="row">
                                <div className="col-xl-4 my-auto">
                                    <div className="spot-inner-details">
                                        <p className="text-muted mb-0">Open Hours</p>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="spot-inner-details">
                                        <div className="mb-2">
                                            {/*<p className="mb-1 font-12">[{spotDetail ? spotDetail.operations.means_of_transport:""}]</p>*/}
                                            <h6 className="mb-0 font-12">
                                                {spotDetail ? spotDetail.operations.business_hours : ''}
                                            </h6>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-14">{spotDetail ? spotDetail.operations.is_open_on_sunday ? "Open" : "Closed" : "Closed"} on
                                                Sunday</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            {horizontalView({
                                name: strings.spotHolidays,
                                value: spotDetail ? spotDetail.operations.regular_holidays : ''
                            })}
                            <hr/>
                            <div className="row">
                                <div className="col-xl-4 my-auto">
                                    <div className="spot-inner-details">
                                        <p className="text-muted mb-0">Budget</p>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="spot-inner-details">
                                        <div className="mb-3">
                                            <h6 className="mb-2 font-14">{strings.noonCharges}</h6>
                                            <h6 className="mb-0 font-14">{spotDetail && sitterServices.length > spotDetail.budgets.noon_charge_id - 1 && sitterServices[spotDetail.budgets.noon_charge_id - 1].price}</h6>
                                        </div>
                                        <div>
                                            <h6 className="mb-2 font-14">{strings.nightCharges}</h6>
                                            <h6 className="mb-0 font-14">{spotDetail && sitterServices.length > spotDetail.budgets.night_charge_id - 1 && sitterServices[spotDetail.budgets.night_charge_id - 1].price}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            {horizontalView({
                                name: strings.methodOfPayment,
                                value: spotDetail && paymentMethods && paymentMethods.find((val) => val.id == spotDetail.budgets.payment_method_id).name
                            })}
                            <hr/>
                            {horizontalView({
                                name: strings.serviceCharges,
                                value: `${spotDetail && spotDetail.budgets.service_charge}% service charge`
                            })}
                            <hr/>
                            <div className="row">
                                <div className="col-xl-4 my-auto">
                                    <div className="spot-inner-details">
                                        <p className="text-muted mb-0">{strings.reservations}</p>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="spot-inner-details">
                                        <h6 className="mb-0">{spotDetail && reservationTypes && reservationTypes.find((val) => val.id === spotDetail.amenities.reservation_type_id).name}</h6>
                                        <p className="mb-0 font-14">
                                            {spotDetail && spotDetail.amenities.reservation_info}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            {horizontalView({
                                name: strings.smoking,
                                value: spotDetail && smokingCessions && smokingCessions.find((val) => val.id === spotDetail.amenities.smoking_cessation_id).name
                            })}
                            <hr/>
                            <div className="row">
                                <div className="col-xl-4 my-auto">
                                    <div className="spot-inner-details">
                                        <p className="text-muted mb-0">{strings.parking}</p>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="spot-inner-details">
                                        <h6 className="mb-0">{spotDetail && parking && parking.find((val) => val.id === spotDetail.amenities.parking_id).name}</h6>
                                        <p className="mb-0 font-14">
                                            {spotDetail && spotDetail.amenities.parking_info}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-xl-4 my-auto">
                                    <div className="spot-inner-details">
                                        <p className="text-muted mb-0">{strings.serviceAmenities}</p>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="spot-inner-details">
                                        <h6 className="mb-0">Has {spotDetail && serviceData.find((val) => val.value === spotDetail.amenities.service_amenities_id) ? serviceData.find((val) => val.value === spotDetail.amenities.service_amenities_id).label : ''} service</h6>
                                        <p className="mb-0 font-14">
                                            {spotDetail && spotDetail.amenities.service_amenities_info}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-xl-4 my-auto">
                                    <div className="spot-inner-details">
                                        <p className="text-muted mb-0">{strings.languages}</p>
                                    </div>
                                </div>
                                {spotDetail && spotDetail.amenities ? spotDetail.amenities.languages.map((item, index)=> <div key={index} className="col-xl-8">
                                    <div className="spot-inner-details">
                                        <h6 className="mb-0">{langauges && langauges.find((val) => val.id === item) ? langauges.find((val) => val.id === item).name:''}</h6>
                                    </div>
                                </div>):null}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="bg-white main-background d-none d-md-block d-lg-block d-xl-block">
                            <h5 className="font-semibold font-20 mb-3">Rebecca can host</h5>
                            <div className="booking-for">
                                <h6 className="font-medium mb-3">Dogs</h6>
                                <div className="d-flex justify-content-between">
                                    <div className="text-center host-details">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="cat"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="svg-inline--fa fa-cat fa-w-16 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                            />
                                        </svg>
                                        <h6 className="mb-0 font-normal">2 Dogs</h6>
                                    </div>
                                    <div className="text-center  host-details">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="cat"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="svg-inline--fa fa-cat fa-w-16 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                            />
                                        </svg>
                                        <h6 className="mb-0 font-normal">0-15Kg</h6>
                                    </div>
                                    <div className="text-center  host-details">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="cat"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="svg-inline--fa fa-cat fa-w-16 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                            />
                                        </svg>
                                        <h6 className="mb-0 font-normal">16-40Kg</h6>
                                    </div>
                                </div>
                                <hr/>
                                <h6 className="font-medium mb-3">Cats</h6>
                                <div className="d-flex justify-content-between">
                                    <div className="text-center host-details">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="cat"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="svg-inline--fa fa-cat fa-w-16 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                            />
                                        </svg>
                                        <h6 className="mb-0 font-normal">2 Cats</h6>
                                    </div>
                                    <div className="text-center  host-details">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="cat"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="svg-inline--fa fa-cat fa-w-16 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                            />
                                        </svg>
                                        <h6 className="mb-0 font-normal">0-15Kg</h6>
                                    </div>
                                    <div className="text-center  host-details">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="cat"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="svg-inline--fa fa-cat fa-w-16 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                                            />
                                        </svg>
                                        <h6 className="mb-0 font-normal">16-40Kg</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white main-background d-none d-md-block d-lg-block d-xl-block">
                            <h4 className="font-semibold mb-3">Location</h4>
                            <div className="mapouter mb-3">
                                <div className="gmap_canvas">
                                    <iframe
                                        width="100%"
                                        height={199}
                                        id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=3&ie=UTF8&iwloc=&output=embed"
                                        frameBorder={0}
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                    />
                                    <a href="https://putlocker-is.org"/>
                                    <br/>
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                ".mapouter{position:relative;text-align:right;height:199px;width:100%;}",
                                        }}
                                    />
                                    <a href="https://www.embedgooglemap.net">
                                        google maps html code
                                    </a>
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                ".gmap_canvas {overflow:hidden;background:none!important;height:199px;width:100%;}",
                                        }}
                                    />
                                </div>
                            </div>
                            <h5 className="mb-2">{spotDetail && spotDetail.address} </h5>
                            {/*<p className="mb-0">*/}
                            {/*  301 Biscayne Blvd, Miami, FL 33132, United States*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*-----/4th section------*/}
            {/*----------5th section---------------*/}
            <SpotSlider spots={featuredSpots}/>
            {/*----------/5th section---------------*/}
            {showModal ? <SpotRating spotId={router.query ? router.query.spot:''} show={showModal} updateSpot={(id)=> {router.query ? getSpotDetail(id):''}} data={spotDetail}/>:null}
        </div>
    );
}

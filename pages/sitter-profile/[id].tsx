import React from "react";
import API from "../../api/Api";
import ExtraInfoLocality from "../../components/sitterProfile/ExtraInfoLocality";
import GalleryView from "../../components/sitterProfile/GalleryView";
import MyPets from "../../components/sitterProfile/MyPets";
import Reviews from "../../components/sitterProfile/Reviews";
import SitterAvailablity from "../../components/sitterProfile/SitterAvailability";
import SitterProfileHeader from "../../components/sitterProfile/SitterProfileHeader";
import SitterServices from "../../components/sitterProfile/SitterServices";
import MyMapComponent from "../../components/user/myProfile/Map";
import {I_SINGLE_SITTER} from "../../models/sitter.interface";
import {strings} from "../../public/lang/Strings";
import {deepClone} from "../../utils/Helper";
import {GOOGLE_PLACES_API} from "../../api/Constants";
import {withRouter} from "next/router";


interface Iprops {
    data: I_SINGLE_SITTER;
    openSnackbar: any,
    router: any,
    myRef: any,
}

interface Istate {
    data: I_SINGLE_SITTER;
    serviceId: string;
}

let api = new API();


class SitterProfile extends React.Component<Iprops, Istate> {
    private myRef;

    constructor(props: Iprops) {
        super(props);
        this.state = {
            data: null,
            serviceId: ''
        };

        this.myRef = React.createRef();

        this.handleBookmarkSitter = this.handleBookmarkSitter.bind(this);
        this.getSitterDetails = this.getSitterDetails.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: null,
        });

        if (this.props.data) {
            this.setState({
                data: deepClone(this.props.data),
            });
        }

        // if(router){
        //   if(router.query) {
        //     this.setState({
        //       serviceId: String(router.query.serviceId)
        //     })
        //   }
        // }

    }

    handleBookmarkSitter() {
        api.markUnmarkSitter({sitter_id: this.state.data.id}).then((res) => {
            if (res.data.status === 200) {
                if (this.state.data.is_favorite == 1) {
                    alert(strings.unmarkSitter);
                } else {

                    alert(strings.bookmarkSitter);
                }
                this.getSitterDetails(this.state.data.id);
            }
        }).catch((error) => {
            alert(strings.errorUpdatingStatus);
        })
    }

    getSitterDetails(id) {
        api
            .getSingleSitter(id)
            .then((res) => {
                this.setState({data: res.data.response})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {data} = this.state;
        const {query} = this.props.router;

        if (this.state.data) {
            return (
                <div>
                    <div className="main-wrapper bottom mt-0">
                        <div className="main-image">
                            <img src="/images/banner2.png" className="img-fluid" alt=""/>
                        </div>
                        <div className="container">
                            <SitterProfileHeader
                                location={data.address.address}
                                hide_address={data.address.hide_address}
                                name={
                                    data.firstname + " " + data.lastname
                                }
                                isVerified={data.is_verified}
                                distance={data.address.distance}
                                responseRate={data.preference.response_rate}
                                responseWithin={data.preference.response_within}
                                jobCompletion={data.preference.job_completion}
                                isFavorite={data.is_favorite}
                                rehireRate={data.preference.rehire_rate ?? 0}
                                experience={data.preference.experience}
                                petTakenCare={data.preference.pets_care}
                                happyCustomers={data.preference.happy_customers}
                                online={data.preference.online}
                                rating={data.overall_rate}
                                review={data.total_review}
                                id={data.id}
                                profile_pic={this.state.data.profile_picture}
                                markUnmark={this.handleBookmarkSitter}
                                serviceId={query.serviceId}
                                onAvailableClick={() => {
                                    this.myRef.current.scrollIntoView()
                                }}
                            />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                                    <GalleryView images={this.state.data.images}/>
                                    <div className="bg-white main-background">
                                        <h5 className="font-semibold font-20 mb-3">{`I’m ${this.state.data.firstname}`}</h5>
                                        <p>
                                            {"description"}
                                            <a href="#">&nbsp;&nbsp;Read more</a>
                                        </p>
                                    </div>

                                    <div className="bg-white main-background about-pet">
                                        <h5 className="font-semibold mb-3 font-20">
                                            {` What ${this.state.data.firstname} would like to know about your pet`}
                                        </h5>
                                        <div className="booking-for">
                                            {this.state.data.questions.map((value, index) => (
                                                <li key={index}>{value.question} </li>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="bg-white main-background about-place">
                                                <h5 className="font-semibold mb-3 font-20">
                                                    {strings.Aboutplace}
                                                </h5>
                                                <div>
                                                    {this.state.data.address.live_in_house == 1 ? (
                                                        <p>Lives in a House</p>
                                                    ) : null}
                                                    {this.state.data.address.non_smoking_household ==
                                                    1 ? (
                                                        <p>Non-Smoking Household</p>
                                                    ) : null}
                                                    {this.state.data.address.no_children_present == 1 ? (
                                                        <p>No Children Present</p>
                                                    ) : null}
                                                    {this.state.data.address.fenced_yard == 1 ? (
                                                        <p>Has a Fenced Yard</p>
                                                    ) : null}
                                                    {this.state.data.address.dog_other_pets == 1 ? (
                                                        <p>Has pet.</p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="bg-white main-background about-place">
                                                <h5 className="font-semibold mb-3 font-20">
                                                    {strings.AdditionalSkills}
                                                </h5>
                                                <div>
                                                    {this.state.data.skills.map((value, index) => (
                                                        <p key={index}>{value.skill}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {this.state.data.pets.length ? <MyPets pets={this.state.data.pets}/> : null}
                                    <Reviews data={data}/>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                    <SitterServices
                                        name={this.state.data.firstname}
                                        service={this.state.data.active_services}
                                    />
                                    <div ref={this.myRef}>
                                        <SitterAvailablity
                                            services={this.state.data.active_services}
                                        />
                                    </div>
                                    <div className="bg-white main-background policy">
                                        <h5 className="font-semibold mb-3 font-20">
                                            {strings.BoardingCancellationpolicy}
                                        </h5>
                                        {data.cancellation_policy == 1 && <>
                                            <li>You’ll get a full refund if you cancel before the day’s service is
                                                delivered.
                                            </li>
                                            <li>If you cancel after the stay or walk begins, you'll get a 50% refund for
                                                the first seven cancelled days and a 100% refund for any additional
                                                cancelled days.
                                            </li>
                                        </>
                                        }
                                        {data.cancellation_policy == 2 && <>
                                            <li>You cancel within 48 hours of booking.</li>
                                            <li>The reservation you’re cancelling doesn’t overlap with another
                                                reservation in your account When refund, any promo code (coupon) and
                                                points will be available to use immediately.
                                            </li>
                                            <li>If you cancel after 12:00 noon 3 days before the stay begins, you'll get
                                                a 50% refund for the first seven cancelled days and a 100% refund for
                                                any additional cancelled days.
                                            </li>
                                        </>
                                        }
                                        {data.cancellation_policy == 3 && <>
                                            <li>If you cancel after 12:00 noon one week before the stay begins, you'll
                                                get a 50% refund for the first seven cancelled days and a 100% refund
                                                for any additional day.
                                            </li>
                                            <li>If you cancel after 12:00 noon one week before the stay begins, you'll
                                                get a 50% refund for the first seven cancelled days and a 100% refund
                                                for any additional day.
                                            </li>
                                        </>
                                        }
                                    </div>
                                    <div className="bg-white main-background">
                                        <h5 className="font-semibold font-20 mb-3">
                                            {`${this.state.data.firstname} can host`}
                                        </h5>
                                        <div>
                                            <div className="d-flex justify-content-between mb-3">
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
                                                        ></path>
                                                    </svg>
                                                    <h6 className="mb-0 font-normal"> Dogs</h6>
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
                                                            className=""
                                                        ></path>
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
                                                            className=""
                                                        ></path>
                                                    </svg>
                                                    <h6 className="mb-0 font-normal">16-40Kg</h6>
                                                </div>
                                            </div>
                                            <div className="about-place">
                                                <p className="mb-2">Spayed and Neutered Dogs </p>
                                                <p>No Females in Heat</p>
                                            </div>
                                            <hr/>

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
                                                            className=""
                                                        ></path>
                                                    </svg>
                                                    <h6 className="mb-0 font-normal">Cats</h6>
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
                                                            className=""
                                                        ></path>
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
                                                            className=""
                                                        ></path>
                                                    </svg>
                                                    <h6 className="mb-0 font-normal">16-40Kg</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white main-background">
                                        <h4 className="font-semibold mb-3">Location</h4>
                                        <div className="mapouter mb-3">
                                            <MyMapComponent
                                                bootstrapURLKeys={{
                                                    key: GOOGLE_PLACES_API,
                                                    language: "en",
                                                }}
                                                draggable={false}
                                                onChangeLatLng={(e) => {
                                                }}
                                                isMarkerShown
                                                latlng={{
                                                    lat: Number(this.state.data.address.map_latitude),
                                                    lng: Number(this.state.data.address.map_longitude),
                                                }}
                                                googleMapURL={`https://maps.google.com/maps/api/js?key=${GOOGLE_PLACES_API}&amp;libraries=geometry,drawing,places`}
                                                loadingElement={<div style={{height: `100%`}}/>}
                                                containerElement={<div style={{height: `400px`}}/>}
                                                mapElement={<div style={{height: `100%`}}/>}
                                            />
                                        </div>
                                        {this.state.data.address && this.state.data.address.hide_address == 0 ?
                                            <h5 className="mb-2">
                                                {this.state.data.address.house_number +
                                                " " +
                                                this.state.data.address.address}{" "}
                                            </h5> : ""}
                                        {/*<p className="mb-0 font-12">*/}
                                        {/*  The circle area on map shows serviceable area sitter is*/}
                                        {/*  comfortable with.*/}
                                        {/*</p>*/}
                                    </div>
                                    <ExtraInfoLocality address={this.state.data.address}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    static async getInitialProps({query: {id}}) {

        const api = new API();
        let data = null;
        await api
            .getSingleSitter(id)
            .then((res) => {
                data = res.data.response;
            })
            .catch((error) => {
                console.log(error);
            });
        return {
            data: data,
        };
    }

}

export default withRouter(SitterProfile)

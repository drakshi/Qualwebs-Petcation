import Link from "next/link";
import React, {useState, useEffect} from "react";
import {cities, errorOptions, serviceData, sort, successOptions} from "../../public/appData/AppData";
import { strings } from "../../public/lang/Strings";
import API from "../../api/Api";
import {GOOGLE_PLACES_API} from "../../api/Constants";
import MyMapComponent from "../../components/user/myProfile/Map";
import {useSnackbar} from 'react-simple-snackbar';

let api = new API();

const FavouriteSitter: React.FC<{}> = () => {
    let [sitterData, setSitterData] = useState<any[]>([]);
    let [latlng, setLatLng] = useState<any[]>([]);
    let [filter, setFilter] = useState<any>({
        city:'',
        sort: 1
    });
    const [cities, setCities] = useState<any>([]);

    const [openSuccess, closeSuccess] = useSnackbar(successOptions);
    const [openError, closeError] = useSnackbar(errorOptions);



    useEffect(()=>{
        getCities()
    },[]);

    useEffect(()=>{
        let data = JSON.parse(JSON.stringify(filter));
        let selectedService = serviceData.find((val)=> val.label == data.service_id);
        if(selectedService){
            data.service_id = selectedService.key;
        }
        data.city = data.city == 'All Cities' ? '':data.city;
        getFavoriteSitters(data)
    },[filter]);

    const getFavoriteSitters = (data) => {
        api
            .getFavoriteSitters(data)
            .then((response: any) => {
                let address = response.data.response.map((val)=>{return { lat: Number(val.sitter.address.map_latitude), lng: Number(val.sitter.address.map_longitude) }})
                setSitterData(response.data.response);
                setLatLng(address);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getCities = () => {
        api
            .getCities(1)
            .then((json) => {
                let city = json.data.response.map((val)=> val.name)
                let data = ['All Cities'].concat(city);
                setCities(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleBookmarkSitter = (sitter:any) => {
        api.markUnmarkSitter({sitter_id: sitter.id}).then((res)=> {
            if(res.data.status ===  200) {
                openSuccess(strings.unmarkSitter);
                setFilter(filter);
            }
        }).catch((error)=>{
            console.log('eror is', error)
            //openSnackbar(strings.errorUpdatingStatus);
        })
    }

    return (
        <>
            <div className="main-wrapper my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-8 pd-right">
                            <div className="bg-white main-background">
                                <div className="content-margin">
                                    <div className="row">
                                        <div className="col-7 col-md-8 col-lg-8 col-xl-8">
                                            <div className="fav-title  d-none d-md-block d-lg-block d-xl-block">
                                                <div className="d-inline">
                                                    <a href="http://159.65.142.31/petcation-design/sitter-dashboard.html">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="far"
                                                            data-icon="chevron-left"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 256 512"
                                                            className="svg-inline--fa fa-chevron-left fa-w-8 fa-2x"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                                                                className=""
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <h5 className="d-inline font-20">My Favourites</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sort-filter d-none d-md-block d-lg-block d-xl-block">
                                        <div className="content-margin">
                                            <div className="d-flex">
                                                <div className="my-auto d-none d-md-block d-lg-block d-xl-block">
                                                    <h6 className="sort-by mb-0">Sort by</h6>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 col-sm-4">
                                                        <div className="dropdown">
                                                            <a className="dropdown-toggle"
                                                               id="dropdownMenuButton1"
                                                               data-toggle="dropdown"
                                                               aria-haspopup="true"
                                                               aria-expanded="false"
                                                            >
                                                                {filter.sort == 1 ? 'Recently Added': filter.sort == 2 ? 'New to old':'Old to new'}
                                                            </a>
                                                            <div
                                                                className="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton2"
                                                                x-placement="bottom-start"
                                                                style={{
                                                                    position: "absolute",
                                                                    transform: "translate3d(0px, 22px, 0px)",
                                                                    top: 0,
                                                                    left: 0,
                                                                    willChange: "transform"
                                                                }}
                                                            >
                                                                <a onClick={(e)=> {
                                                                    setFilter({...filter, sort: 1} )}}  className="dropdown-item">
                                                                    Recently Added
                                                                </a>
                                                                <a onClick={()=> setFilter({...filter, sort: 2} )}  className="dropdown-item">
                                                                    New to old
                                                                </a>
                                                                <a onClick={()=> setFilter({...filter, sort: 3} )} className="dropdown-item">
                                                                    Old to new
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-sm-4">
                                                        <div className="dropdown">
                                                            <a
                                                                className="dropdown-toggle"
                                                                id="dropdownMenuButton1"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                {filter.service_id ? filter.service_id:'All categories'}
                                                            </a>
                                                            <div
                                                                className="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton2"
                                                            >
                                                                {serviceData.map((val, index)=><a key={'type_' + index} className="dropdown-item" onClick={()=> setFilter({...filter, service_id: val.label} )}>
                                                                    {val.label}
                                                                </a>)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-sm-4">
                                                        <div className="dropdown">
                                                            <a
                                                                className="dropdown-toggle"
                                                                id="dropdownMenuButton1"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                {filter.city ? filter.city:'All Cities'}
                                                            </a>
                                                            <div
                                                                className="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton2"
                                                            >
                                                                {cities.map((val, index)=><a key={'type_' + index} className="dropdown-item" onClick={()=> setFilter({...filter, city: val} )}>
                                                                    {val}
                                                                </a>)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {sitterData.map((item, index)=>
                                    <>
                                        <div key={index} className="content-margin">
                                            <div className="row spot-fav-info">
                                                <div className="col-10 col-md-10 col-lg-10 col-xl-11 pr-0">
                                                    <div className="row">
                                                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                                                            <div className="fav-img">
                                                                <img src={item.sitter.profile_picture} className="img-fluid" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6 col-lg-6 col-xl-8 pd-left">
                                                            <div className="search-sitter-content">
                                                                <div className="row mb-2">
                                                                    <div className="col-10 col-md-6 col-lg-6 col-xl-7">
                                                                        <div className="d-flex">
                                                                            <div className="search-sitter-details my-auto">
                                                                                <h6 className="mb-1">{item.sitter.firstname + ' ' + item.sitter.lastname}</h6>
                                                                                <p className="font-12 mb-0">
                                                                                    {item.sitter.address.address}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-2">
                                                                    <div className="col-md-9 col-lg-9 col-xl-9">
                                                                        <div className="household-details">
                                                                            {item.sitter.address.live_in_house == 1 ? (
                                                                                <p className="mb-0 font-12 d-inline">Is an apartment</p>
                                                                            ) : null}
                                                                            {item.sitter.address.non_smoking_household == 1 ? (
                                                                                <p className="mb-0 font-12 d-inline">
                                                                                    Non-smoking Household
                                                                                </p>
                                                                            ) : null}
                                                                            {item.sitter.address.dog_other_pets == 1 ? (
                                                                                <p className="mb-0 font-12 d-inline">Has no dogs</p>
                                                                            ) : null}
                                                                            {item.sitter.address.fenced_yard ? (
                                                                                <p className="mb-0 font-12 d-inline">
                                                                                    Does not have a yard
                                                                                </p>
                                                                            ) : null}
                                                                            {item.sitter.address.dog_other_pets == 1 ? (
                                                                                <p className="mb-0 font-12 d-inline">Has pet.</p>
                                                                            ) : null}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-3 p-left">
                                                                        <div className="contact-now">
                                                                            <Link
                                                                                href={{
                                                                                    pathname: "/booking",
                                                                                    query: {
                                                                                        sitterId: item.sitter.id,
                                                                                        service: '',
                                                                                        name: item.sitter.firstname + " " + item.sitter.lastname,
                                                                                    },
                                                                                }}
                                                                                as={"/booking"}
                                                                            >
                                                                                <button className="btn btn-primary">Contact now</button>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="view-details text-left">
                                                                            <Link href={{ pathname: "/sitter-profile/" + item.sitter.id, query: {serviceId: ''} }}>
                                                                                View details
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12 col-md-9 col-lg-9 col-xl-9">
                                                                        <div className="d-flex featured-details">
                                                                            <div className="d-flex hotel-rating">
                                                                                <div className="rating-star ">
                                                                                    <div className="active">
                                                                                        <svg
                                                                                            aria-hidden="true"
                                                                                            focusable="false"
                                                                                            data-prefix="fas"
                                                                                            data-icon="star"
                                                                                            role="img"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            viewBox="0 0 576 512"
                                                                                            className="svg-inline--fa fa-star fa-w-18 fa-2x"
                                                                                        >
                                                                                            <path
                                                                                                fill="currentColor"
                                                                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                                                                className=""
                                                                                            />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="my-auto">
                                                                                    <h6 className="mb-0  font-semibold">
                                                                                        {item.sitter.overall_rate}{" "}
                                                                                        <span className="text-muted font-normal font-12">
                                    ({item.sitter.total_review} reviews)
                                  </span>
                                                                                    </h6>
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-muted px-2">|</div>
                                                                            <div className="my-auto">
                                                                                <h6 className="mb-0 font-semibold">
                                                                                    {item.sitter.repeat_clients ?? 0}{" "}
                                                                                    <span className="text-muted font-normal font-12">
                                  Repeat Clients
                                </span>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-md-3 col-lg-3 col-xl-3 my-auto p-left">
                                                                        <div className="d-none d-md-block d-lg-block d-xl-block">
                                                                            <h6 className="mb-0  font-semibold">
                                                                                ¥{item.sitter.price ?? 0}{" "}
                                                                                <span className="text-muted font-normal font-12">
                                / night
                              </span>
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*----/--*/}
                                                </div>
                                                <div className="col-2 col-md-2 col-lg-2 col-xl-1 alignment">
                                                    <a onClick={()=> handleBookmarkSitter(item.sitter)}>
                                                        <div className="delete-icon">
                                                            <svg
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fal"
                                                                data-icon="trash-alt"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 448 512"
                                                                className="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
                                                                    className=""
                                                                />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    <div className="review-icon">
                                                        <div className="vector-icon">
                                                            <div
                                                                className="ellipse"
                                                                data-toggle="modal"
                                                                data-target="#send-invite"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    focusable="false"
                                                                    data-prefix="far"
                                                                    data-icon="link"
                                                                    role="img"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 512 512"
                                                                    className="svg-inline--fa fa-link fa-w-16 fa-2x"
                                                                >
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"
                                                                        className=""
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></>)}
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4  d-none d-md-block d-lg-block d-xl-block">
                            <div className="map-info fav-map">
                                <MyMapComponent
                                    bootstrapURLKeys={{
                                        key: GOOGLE_PLACES_API,
                                        language: "en",
                                    }}
                                    draggable={false}
                                    isMarkerShown
                                    latlng={latlng}
                                    googleMapURL={`https://maps.google.com/maps/api/js?key=${GOOGLE_PLACES_API}&amp;libraries=geometry,drawing,places`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default (FavouriteSitter);





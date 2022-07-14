import React from "react";
import Select from "react-select";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {
    pet,
    petCount,
    petSize,
    prices,
    select,
    serviceData,
    ServiceTime,
    sort,
} from "../public/appData/AppData";
import SitterObject from "../components/SearchSitter/SitterObject";
import {strings} from "../public/lang/Strings";
import API from "../api/Api";
import {AxiosResponse} from "axios";
import Res from "../models/response.interface";
import Loader from "../components/common/Loader";
import Autocomplete from "react-google-autocomplete";
import {I_SEARCH_SITTER} from "../models/searchSitter.interface";
import AppContext from "../utils/AppContext";
import moment from 'moment';
import "rc-slider/assets/index.css";
import {GOOGLE_PLACES_API} from "../api/Constants";
import MyMapComponent from "../components/user/myProfile/Map";
import Cookies from "universal-cookie";
import Link from 'next/link';

interface IState {
    checkInDate: Date;
    checkOutDate: Date;
    pet: select;
    service: select;
    serviceTime: select;
    petSize: select;
    petCount: select;
    price: select;
    sitters: I_SEARCH_SITTER[];
    minPrice: number;
    maxPrice: number;
    loading: boolean;
    allPrice: boolean;
    lat: string;
    lng: string;
    defaultValue: string;
    transportation: 1 | 0;
    closest_sitter: 1 | 0;
    latlng: any[],
    user_id: number;
    serviceData:any[];
    saveSearch:boolean;
}

const api = new API();
const Slider = require("rc-slider");
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const cookies = new Cookies();


export default class SearchSitter extends React.Component<{}, IState> {
    static contextType = AppContext;
    searchData;
    constructor(props) {
        super(props);
        this.state = {
            sitters: [],
            checkInDate: new Date(),
            checkOutDate: new Date(),
            pet: pet[0],
            service: serviceData[0],
            serviceTime: ServiceTime[0],
            petSize: petSize[0],
            petCount: petCount[0],
            price: prices[0],
            minPrice: 1,
            maxPrice: 1000,
            allPrice: true,
            loading: true,
            lat: "0",
            lng: "0",
            defaultValue: "",
            transportation: 1,
            closest_sitter: 1,
            latlng: [],
            user_id: 0,
            serviceData: serviceData,
            saveSearch:false
        };
        this.handlePetChange = this.handlePetChange.bind(this);
        this.handleServiceTimeChange = this.handleServiceTimeChange.bind(this);
        this.handlePetCountChange = this.handlePetCountChange.bind(this);
        this.handlePetSizeChange = this.handlePetSizeChange.bind(this);
        this.handleServiceChange = this.handleServiceChange.bind(this);
        this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
        this.handleCheckInDayClick = this.handleCheckInDayClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.resetFilter = this.resetFilter.bind(this);
        this.getFilteredAvailableSitter();
    }

    componentDidMount() {
        this.searchData = JSON.parse(localStorage.getItem('search-data'));
        if (localStorage.getItem('search-data')) {
            this.setState({
                pet: this.searchData.pet,
                service:this.searchData.service,
                serviceTime: this.searchData.serviceTime,
                petSize: this.searchData.petSize,
                petCount:this.searchData.petCount,
                price: this.searchData.price,
                checkInDate: this.searchData.checkInDate,
                checkOutDate:this.searchData.checkOutDate,
                minPrice: this.searchData.minPrice,
                maxPrice: this.searchData.maxPrice
            })
        }else {
            this.setState({
                pet: pet[0],
                service: serviceData[0],
                serviceTime: ServiceTime[0],
                petSize: petSize[0],
                petCount: petCount[0],
                price: prices[0],
                checkInDate: new Date(),
                checkOutDate: new Date(),
                minPrice: 1,
                maxPrice: 1000
            })
        }

        let staticData = JSON.parse(JSON.stringify(serviceData));
        if(this.state.pet.value !== "1"){
            staticData.splice(4,1);
        }
        if(this.state.pet.value==="3" || this.state.pet.value === "4"){
            staticData.splice(4,1);
        }
        this.setState({
            serviceData:staticData
        });
        let id = cookies.get("id");
        if (id) {
            this.setState({user_id: id})
        }
        if (this.context.state && Object.keys(this.context.state).length !== 0) {
            this.setState(
                {
                    lat: String(this.context.state.lat),
                    lng: String(this.context.state.lng),
                    pet: pet.find((element) => element.value == this.context.state.pet),
                    service: serviceData.find(
                        (element) => element.value == this.context.state.service
                    ),
                    defaultValue: this.context.state.defaultValue
                        ? this.context.state.defaultValue
                        : "",
                    petSize: this.context.state.petSize
                        ? this.context.state.petSize
                        : petSize[0],
                    checkInDate: this.context.state.checkInDate,
                    checkOutDate: this.context.state.checkOutDate,
                },
                () => {
                    this.context.setState({});
                    this.getFilteredAvailableSitter();
                }
            );
        }
    }

    componentWillUpdate(prevState, nextState) {
    if(nextState.saveSearch === true){
        localStorage.setItem('search-data', JSON.stringify(nextState));
    }
    }
    handleCheckInDayClick(day) {
        this.setState({
            checkInDate: day,
            checkOutDate: day,
        });
    }

    handleCheckoutClick(day) {
        this.setState({checkOutDate: day});
    }

    handleServiceChange(service: select) {
        const check = service.value != 1 && service.value != 2;
        this.setState({
            service: service,
            checkOutDate: check ? this.state.checkInDate : this.state.checkOutDate,
        });
    }

    handleServiceTimeChange(petType: select) {
        this.setState({
            serviceTime: petType,
        });
    }

    handlePetSizeChange(petSize: select) {
        this.setState({
            petSize: petSize,
        });
    }

    handlePetCountChange(petCount: select) {
        this.setState({petCount});
    }

    handlePetChange(pet: select) {

        let staticData = JSON.parse(JSON.stringify(serviceData));
        if(pet.value !== "1"){
            staticData.splice(4,1);
        }
        if(pet.value==="3" || pet.value === "4"){
            staticData.splice(4,1);
        }
        this.setState({
            pet: pet,
            service:serviceData[0],
            serviceData:staticData
        });
    }

    onTextChange<T extends keyof IState>(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        this.setState({[event.target.name]: event.target.value} as {
            [P in T]: IState[P];
        });
    }

    customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: 14,
        }),

        control: (provided) => ({
            ...provided,
            width: 140,
        }),
        singleValue: (provided, state) => {
            return {...provided, fontSize: 12, color: "#383838", fontWeight: "500"};
        },
    };

    sortDropdownStyles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: 14,
        }),

        control: (provided) => ({
            ...provided,
            width: 180,
        }),
        singleValue: (provided, state) => {
            return {...provided, fontSize: 12, color: "#383838", fontWeight: "500"};
        },
    };

    getFilteredAvailableSitter() {
        this.setState({
            loading: true,
            saveSearch:true
        });

        //filtered api
        let data = JSON.stringify({
            pet_type: this.state.pet.value,
            service_id: this.state.service.value,
            availability_start: this.state.checkInDate,
            availability_end: this.state.checkOutDate,
            number_of_pets: this.state.petCount.value,
            pet_size: this.state.petSize.value,
            for_all_prices: this.state.allPrice ? 1 : 0,
            transportation: this.state.transportation,
            price: {
                max: this.state.maxPrice,
                min: this.state.minPrice,
            },
            address: {
                latitude: this.state.lat,
                longitude: this.state.lng,
            },
            closest_sitter: this.state.closest_sitter,
        });
        let that = this;
        api
            .getFilteredAvialableSitter(data)
            .then((response: AxiosResponse<Res<I_SEARCH_SITTER[]>>) => {
                let address = response.data.response.map((val) => {
                    return {lat: parseFloat(val.address.map_latitude), lng: parseFloat(val.address.map_longitude)}
                })
                let data = response.data.response.filter(val => val.id != this.state.user_id)
                that.setState({
                    sitters: data,
                    loading: false,
                    latlng: address
                });

            })
            .catch((error) => {
                console.log(error);
            });
        if (typeof window !== 'undefined'){
            //localStorage.setItem('search-data', JSON.stringify(this.state));
            //console.log(JSON.stringify(this.state));
        }

    }


    resetFilter() {
        this.setState({
            sitters: [],
            checkInDate: new Date(),
            checkOutDate: new Date(),
            minPrice: 1,
            maxPrice: 1000,
            allPrice: true,
            lat: "0",
            lng: "0",
            defaultValue: "",
            transportation: 0,
            latlng: [],
            pet: pet[0],
            service: serviceData[0],
            serviceTime: ServiceTime[0],
            petSize: petSize[0],
            petCount: petCount[0],
            price: prices[0],
            serviceData: serviceData

        })
    }


    render() {
        let date = moment(new Date(this.state.checkInDate)).format('"DD/MM/YYYY"')
console.log(this.state.sitters)
        return (
            <div className="main-wrapper search-page">
                <div className="filter-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="row filter-design">
                                    <div className="col-6 col-sm-auto col-md-auto form-group mb-0">
                                        <label>{strings.petType}</label>
                                        <Select
                                            onChange={this.handlePetChange}
                                            value={this.state.pet}
                                            isSearchable={false}
                                            options={pet}
                                            styles={this.customStyles}
                                        />
                                    </div>

                                    <div className="col-6 col-sm-auto col-md-auto form-group mb-0">
                                        <label>{strings.serviceType}</label>
                                        <Select
                                            value={this.state.service}
                                            isSearchable={false}
                                            onChange={this.handleServiceChange}
                                            options={this.state.serviceData}
                                            styles={this.customStyles}
                                        />
                                    </div>

                                    <div className="col-6 col-sm-auto col-md-auto form-group mb-0">
                                        <label>{"Start Date"}</label>
                                        <div
                                            className="input-group datepicker1 date"
                                            data-date-format="mm-dd-yyyy"
                                        >
                                            <div className="form-control">
                                                <DayPickerInput
                                                    dayPickerProps={{
                                                        modifiers: {
                                                            disabled: [
                                                                {
                                                                    before: new Date(),
                                                                },
                                                            ],
                                                        },
                                                    }}
                                                    inputProps={{
                                                        style: {
                                                            border: 0,
                                                            background: "transparent",
                                                        },
                                                        readOnly: true,
                                                    }}
                                                    placeholder="DD/MM/YYYY"
                                                    format="DD/MM/YYYY"
                                                    value={JSON.parse(moment(new Date(this.state.checkInDate)).format('"MM-DD-YYYY"'))}
                                                    onDayChange={this.handleCheckInDayClick}
                                                />
                                            </div>
                                            <span className="input-group-addon filter-point"></span>
                                        </div>
                                    </div>
                                    {this.state.service.value == 1 ||
                                    this.state.service.value == 2 ? (
                                        <div className="col-6 col-sm-auto col-md-auto form-group mb-0">
                                            <label>{"End Date"}</label>
                                            <div
                                                className="input-group datepicker1 date"
                                                data-date-format="mm-dd-yyyy"
                                            >
                                                <div className="form-control ">
                                                    <DayPickerInput
                                                        dayPickerProps={{
                                                            modifiers: {
                                                                disabled: [
                                                                    {
                                                                        before: this.state.checkInDate,
                                                                    },
                                                                ],
                                                            },
                                                        }}
                                                        inputProps={{
                                                            style: {border: 0, background: "transparent"},
                                                            readOnly: true,
                                                            disabled:
                                                                this.state.service.value != 1 &&
                                                                this.state.service.value != 2,
                                                        }}
                                                        placeholder="DD/MM/YYYY"
                                                        format="DD/MM/YYYY"
                                                        value={JSON.parse(moment(new Date(this.state.checkOutDate)).format('"MM-DD-YYYY"'))}
                                                        onDayChange={this.handleCheckoutClick}
                                                    />
                                                </div>
                                                <span className="input-group-addon filter-point"></span>
                                            </div>
                                        </div>
                                    ) : null}
                                    {this.state.service.label != "Pet grooming" && this.state.service.label != "House call" &&
                                    <div className="col-6 col-sm-auto col-md-auto form-group mb-0">
                                        <label>{"Pet Size"}</label>
                                        <Select
                                            onChange={this.handlePetSizeChange}
                                            value={this.state.petSize}
                                            isSearchable={false}
                                            options={petSize}
                                            isMulti={false}
                                            styles={this.customStyles}
                                        />
                                    </div>}
                                    <div className="col-6 col-sm-auto col-md-auto form-group mb-0">
                                        <label>{strings.Howmanypets}</label>
                                        <Select
                                            value={this.state.petCount}
                                            onChange={this.handlePetCountChange}
                                            isSearchable={false}
                                            options={petCount}
                                            styles={
                                                (this.customStyles,
                                                    {
                                                        control: (provided) => ({
                                                            ...provided,
                                                            width: 80,
                                                        }),
                                                    })
                                            }
                                        />
                                    </div>

                                    <div
                                        style={{
                                            width: "185px",
                                        }}
                                        className="col-6 col-sm-auto col-md-auto form-group  mb-0 "
                                    >
                                        <div>
                                            <label>Price</label>
                                        </div>
                                        <div>
                                            <small className="font-10 float-left">{"(Min.)"}</small>
                                            <small className="font-10 float-right">{"(Max.)"}</small>
                                        </div>

                                        <div className="mt-3 mb-1">
                                            <Range
                                                step={25}
                                                value={[this.state.minPrice, this.state.maxPrice]}
                                                min={0}
                                                max={1000}
                                                onChange={(e) =>
                                                    this.setState({
                                                        minPrice: e[0],
                                                        maxPrice: e[1],
                                                    })
                                                }
                                            />
                                        </div>
                                        <div>
                                            <small className="font-10 float-left">
                                                {this.state.minPrice}
                                            </small>
                                            <small className="font-10 float-right">
                                                {this.state.maxPrice}
                                            </small>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-auto col-md form-group mb-0">
                                        <label>{strings.Address}</label>
                                        <Autocomplete
                                            placeholder={'Search here...'}
                                            className={"form-control"}
                                            apiKey={GOOGLE_PLACES_API}
                                            onPlaceSelected={(place) => {
                                                this.setState({
                                                    lat: `${place.geometry.location.lat()}`,
                                                    lng: `${place.geometry.location.lng()}`,
                                                });
                                            }}
                                            options={{
                                                componentRestrictions: {country: "jp"},
                                            }}
                                            defaultValue={this.state.defaultValue}
                                        />
                                    </div>

                                    <div className="col-auto pl-0 mt-auto">
                                        <button
                                            onClick={this.getFilteredAvailableSitter.bind(this)}
                                            className="btn btn-save mb-2"
                                        >
                                            {strings.SaveSearch}
                                        </button>
                                    </div>

                                    <div className="col-8 col-sm-auto col-md-auto form-group mb-0 my-auto  ">
                                        <div className="custom-check">
                                            <label className="check ">
                                                <input
                                                    onChange={() =>
                                                        this.setState({
                                                            transportation:
                                                                this.state.transportation == 1 ? 0 : 1,
                                                        })
                                                    }
                                                    checked={this.state.transportation == 1}
                                                    type="checkbox"
                                                    name="is_name1"
                                                />
                                                <span className="checkmark"></span>
                                                {"should have transportation available "}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="sort-details py-2">
                        <div className="row ">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-8 ">
                                <div style={{alignItems: "center"}} className="d-flex">
                                    <div className="align-center">
                                        <div className="font-12 mb-0 align-center">
                                            {this.state.sitters.length} results per preferences{" "}
                                            <Link href="">
                                            <a onClick={this.resetFilter}>(reset)</a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        style={{alignItems: "center"}}
                                        className="d-flex  high-rating align-center"
                                    >
                                        <div className="custom-check">
                                            <label className="check ">
                                                <input
                                                    checked={this.state.closest_sitter == 1}
                                                    onChange={() => {
                                                        this.setState({
                                                            closest_sitter:
                                                                this.state.closest_sitter == 1 ? 0 : 1,
                                                        });
                                                    }}
                                                    type="checkbox"
                                                    name="is_name1"
                                                />
                                                <span className="checkmark"></span>
                                                {"Sort by Closest sitter"}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="custom-check">
                                    <label className="check ">
                                        <input type="checkbox" name="is_name1"/>
                                        <span className="checkmark"></span>
                                        {strings.updateWhenIMoveTheMap}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                            {this.state.loading ? (
                                <Loader/>
                            ) : (this.state.sitters.length > 0 ?
                                    this.state.sitters.map((value, index) => (
                                        <SitterObject
                                            key={index}
                                            props={value}
                                            petType={this.state.pet}
                                            serviceId={this.state.service.value}
                                            getSitter={() => this.getFilteredAvailableSitter()}
                                        />
                                    )) : (<>
                                        <div className="text-center padding">
                                            <p className="font-13 mb-0 font-italic">{strings.noSitterFound}</p>
                                        </div>
                                    </>)
                            )}
                        </div>
                        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <MyMapComponent
                                        bootstrapURLKeys={{
                                            key: GOOGLE_PLACES_API,
                                            language: "en",
                                        }}
                                        serviceId={this.state.service.value}
                                        data={this.state.sitters}
                                        draggable={false}
                                        isMarkerShown
                                        latlng={this.state.latlng ? this.state.latlng:''}
                                        googleMapURL={`https://maps.google.com/maps/api/js?key=${GOOGLE_PLACES_API}&amp;libraries=geometry,drawing,places`}
                                        loadingElement={<div style={{height: `100%`}}/>}
                                        containerElement={<div style={{height: `400px`}}/>}
                                        mapElement={<div style={{height: `100%`}}/>}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

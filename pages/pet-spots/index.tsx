import React from "react";
import { strings } from "../../public/lang/Strings";
import "react-multi-carousel/lib/styles.css";
import SpotSlider from "../../components/petSpot/SpotSlider";
import API from "../../api/Api";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import  Link  from 'next/link';
import {useRouter} from "next/router";




interface I_CATEGORY {
  id: number;
  name: string;
  image: string;
  status: string;
}

interface I_SPOT {
  id: number;
  user_id: number;
  category_id: number;
  spot_name: string;
  postal_code: number;
  city: string;
  address: string;
  overall_rate: number;
  total_review: number;
  images: {
    path: string;
  }[];
}


interface SpotData  {
  spotReducer: SpotReducer
}

type SpotReducer = {
  featuredSpots: [I_SPOT]
  spotCategory: [I_CATEGORY]
}


const api = new API();
export default function PetSpots() {
  const spotData = useSelector((state:SpotData) => state);
  const dispatch = useDispatch();
  const router = useRouter();


  const [categories, setCategories] = useState<I_CATEGORY[]>([]);
  const [featuredSpots, setFeaturedSpots] = useState<I_SPOT[]>([]);
  const [cities, setCities] = useState<any>([]);

  const [keyword, setKeyword] = useState<string>('');

  const getPetSpotCategories = () => {
    api
      .getPetSpotsCategory()
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((error) => {});
  };

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

  const getCities = () => {
    api
        .getCities(1)
        .then((json) => {
          setCities(json.data.response);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  useEffect(() => {
    if(!spotData.spotReducer.featuredSpots.length && !categories.length){
      getFeaturedPetSpot();
    }else {
      setFeaturedSpots(spotData.spotReducer.featuredSpots)
    }

    if(!spotData.spotReducer.spotCategory.length && !featuredSpots.length){
      getPetSpotCategories();
    }else {
      setCategories(spotData.spotReducer.spotCategory)
    }
  }, [spotData]);

  useEffect(() => {
    getCities()
  }, []);


  return (
    <div className="main-wrapper mt-0">
      <div className="main-image d-none d-md-block d-lg-block d-xl-block">
        <img src="/images/banner.png" className="img-fluid" />
      </div>
      <div className="mob-content main-banner spot-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="spot-top-details text-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="paw"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="svg-inline--fa fa-paw fa-w-16 fa-2x"
                >
                  <path
                    fill="currentColor"
                    d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
                  />
                </svg>
                <h3 className="main-title1 mb-3">
                  {strings.LookingforaPetSpot}
                </h3>
                <div className="input-group group-btn mb-3">
                  <input
                      value={keyword}
                      onChange={(e)=>setKeyword(e.target.value)}
                    type="text"
                    className="form-control bg-white"
                    placeholder="Type here to search"
                  />
                  <div className="input-group-append">

                    <span onClick={()=> {
                      router.push({
                        pathname: "/pet-spots/search-spot", query: {keyword: keyword}
                      });
                    }
                    } className="input-group-text">{strings.Search}</span>
                  </div>
                </div>
                <div className="d-block d-md-none d-lg-none d-xl-none">
                  <div className="proceed-btn">
                    <a href="http://159.65.142.31/petcation-design/single-spot-details.html">
                      <button className="btn btn-primary">
                        {strings.Providespotinformation}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block d-lg-block d-xl-block">
            <div className="spot-info">
              <div className="main-icon">
                <a href="http://159.65.142.31/petcation-design/sitter(create-new-pet-spot).html">
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
                      />
                    </svg>
                  </div>
                  <p className="font-12 mb-0 text-white">
                    {strings.Providespot} <br />
                    {strings.information}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="main-title feature-title">
                <h2 className="font-semibold">{strings.Categories}</h2>
                <p className="mb-0">{strings.Findbestpetspots}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {categories.map((value,index) => (
              <div key={`cat_${index}`} className="col-6 col-md-3 col-lg-3 col-xl-3">
                <div className="find-spot mb-3">
                  <Link href={{ pathname: "/pet-spots/search-spot", query: {id : value.id} }}>
                    <div className="spot-img mb-2">
                      <img src={value.image} className="img-fluid" />
                    </div>
                  </Link>
                  <h5 className="mb-0 font-semibold">{value.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="main-title feature-title">
              <h2 className="font-semibold">{strings.explore}</h2>
              <p className="mb-0">{strings.Youcanfindspotsinplaces}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {cities.map((item,index)=><div key={`cities_${index}`} className="col-6 col-md-3 col-lg-3 col-xl-3">
            <div className="find-spot d-flex mb-3">
              <Link href={{ pathname: "/pet-spots/search-spot", query: {city : JSON.stringify(item)} }}>
                <div className="spot-img explore-img mb-2">
                  <img src="/images/map.png" className="img-fluid" />
                </div>
              </Link>
              <div className="ml-2 my-auto">
                <h5 className="mb-0 font-semibold">{item.name}</h5>
              </div>
            </div>
          </div>)}
        </div>
      </div>
      <SpotSlider spots={featuredSpots} />
      {/*----------/4th section---------------*/}
    </div>
  );
}

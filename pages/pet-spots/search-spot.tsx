// @ts-nocheck
import React, {useEffect, useState} from "react";
import SpotObjectWeb from "../../components/petSpot/searchSpot/SpotObjectWeb";
import { strings } from "../../public/lang/Strings";
import Select from "react-select";
import { sort} from "../../public/appData/AppData";
import {useSelector} from "react-redux";
import API from "../../api/Api";
import { useRouter } from 'next/router'
import {I_SPOT} from "../../components/petSpot/SpotSlider";


import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery,
} from "react-lightgallery";


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 14,
  }),

  control: (provided) => ({
    ...provided,
    // width: 120,
  }),
  singleValue: (provided, state) => {
    return { ...provided, fontSize: 12, color: "#383838", fontWeight: "500" };
  },
};

const api = new API();


export default function SearchSpot(props) {
  const router = useRouter();

  const [categories, setCategories] = useState<I_CATEGORY[]>([]);

  const [selectedCat, setSelectedCat] = useState();
  const [city, setCity] = useState();
  const [cities, setCities] = useState<any>([]);

  const spotData = useSelector((state:SpotData) => state)


  const [spots, setSpots] = useState<I_SPOT[]>([]);
  const [filter, setFilter] = useState<I_SPOT>({
    keyword:'',
    category:'',
    city:'',
    featured:false
  });


  const resetFilter = () => {
    setFilter({
      keyword:'',
      category:'',
      city:'',
      featured:false
    })
    setCity(null);
    setSelectedCat(null)
  }


  useEffect(() => {
    if(!spotData.spotReducer.spotCategory.length){
      getPetSpotCategories();
    }else {
      let data = spotData.spotReducer.spotCategory.response.map((val,index)=>{
        if(String(val.id) === String(router.query.id)){
          setSelectedCat({id: val.id, label: val.name, value: val.name})
          getSpots();
        }
        return {id: val.id, label: val.name, value: val.name}
      })
      setCategories(data);
    }
  }, [spotData]);

  useEffect(() => {
    if(router.query.city) {
      let data = JSON.parse(router.query.city)
      if (data) {
        setFilter({...filter, city: data.id})
        setCity({
          id: data.id,
          label: data.name,
          value: data.name,
        })
        getSpots({...filter, city: data.id});
      }
    }
  }, [router.query.city]);

  useEffect(() => {
    if(router.query.keyword) {
      setFilter({...filter, keyword: router.query.keyword});
      getSpots({...filter, keyword: router.query.keyword});
    }
  }, [router.query.keyword]);

  useEffect(() => {
    if(router.query.id) {
      setFilter({...filter, category: router.query.id});
      getSpots({...filter, category: router.query.id});
    }
  }, [router.query.id]);


  useEffect(() => {
     //  setFilter({...filter,category: router.query.id});
     // getSpots();
      getCities();
  }, []);

  const getCities = () => {
    api
        .getCities(1)
        .then((json) => {
          let data = json.data.response.map((value) => {
            return {
              id: value.id,
              label: value.name,
              value: value.name,
            };
          });
          setCities(data);
        })
        .catch((error) => {
          console.log(error);
        });
  };


  //Get spot categories
  const getPetSpotCategories = () => {
    api
        .getPetSpotsCategory()
        .then((res) => {
          let data = res.data.response.map((val,index)=>{
            if(String(val.id) === String(router.query.id)){
              setSelectedCat({id: val.id, label: val.name, value: val.name})
            }
            return {id: val.id, label: val.name, value: val.name}
          })
          setCategories(data);
        })
        .catch((error) => {});
  };

  //Handle filter input change
  const handleChange = (e) => {
     setFilter({...filter, [e.target.name]:e.target.value})
  }

  const getSpots = (data) => {
    api
        .getPetSpots(data ? data:filter)
        .then((res) => {
          if (res.data.response) {
            setSpots(res.data.response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  const handleSearchSpot = () => {
    let data = filter;
    data.category = selectedCat ? selectedCat.id:'';
    data.city = city ?  city.label:'';
    setFilter(data)
    getSpots();
  }

  return (
    <div className="main-wrapper search-page">

      {/*------------------/for mobile view---------------*/}
      <div className="filter-section d-none d-md-none d-lg-none d-xl-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="form-group mb-0 search-text">
                    <label>Search text</label>
                    <input
                        name='keyword'
                        value={filter.keyword}
                        onChange={handleChange}
                      className="form-control"
                      placeholder="search"
                      id="serach-text"
                    />
                  </div>
                </div>
                <div className="col-sm px-md-0">
                  <div className="d-flex justify-content-between filter-design">
                    <div className="col-sm form-group mb-0">
                      <label>Categories</label>
                      <Select
                          className="w-100"
                        onChange={setSelectedCat}
                        value={selectedCat ? selectedCat:''}
                        isSearchable={false}
                        options={categories}
                        styles={customStyles}
                      />
                    </div>
                    <div className="col-sm-auto form-group mb-0">
                      <label>City</label>
                      <Select
                        onChange={setCity}
                        value={city ? city: ''}
                        isSearchable={false}
                        options={cities}
                        styles={customStyles}
                      />
                    </div>
                    <div className="col-sm form-group mb-0">
                      <label>Sort by reviews</label>
                      <Select
                        styles={customStyles}
                        isSearchable={false}
                        options={sort}
                      />
                    </div>
                    <div className="col-auto pl-0 mt-auto">
                      <button onClick={handleSearchSpot} className="btn btn-save px-2">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="sort-details d-none d-md-none d-lg-block d-xl-block py-2">
          <div className="row">
            <div className="col-8 col-md-8 col-lg-8 col-xl-8">
              <div className="d-flex">
                <div>
                  <p className="font-12 mb-0">
                    {spots.length} results per preferences <a onClick={resetFilter}>(reset)</a>
                  </p>
                </div>
                <div
                    style={{ alignItems: "center" }}
                    className="d-flex  high-rating align-center"
                >
                  <div className="custom-check">
                    <label className="check ">
                      <input
                          checked={true}
                          type="checkbox"
                          name="is_name1"
                      />
                      <span className="checkmark"></span>
                      {"Sort by Closest sitter"}
                    </label>
                  </div>
                </div>
                <div className="high-rating d-none">
                  <div className="form-label show show1">Sort By :</div>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <Select
                        styles={customStyles}
                        isSearchable={false}
                        options={sort}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 col-xl-4">
              <div className="custom-check">
                <label className="check ">
                  <input type="checkbox" name="is_name1" />
                  <span className="checkmark" />
                  Update when I move the map
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------code for web view------------------*/}
      <div className="container-fluid d-none d-md-block d-lg-block d-xl-block">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-7 col-xl-7">
            <div className="col-12 no-data p-0">
              <div className="bg-white search-background p-5 mt-4 col-12">
                <h3 className="text-uppercase font-weight-bold">No spots found</h3>
                <p>We are unable to locate Pet spots as per your preference, please try modifying your search to find pet spots.</p>
                <div className="d-flex align-items-center">
                  <p className="mb-0 mr-md-3">Not sure were to find</p>
                  <button className="btn btn-sm btn-save px-3">Show all spots</button>
                </div>
              </div>
            </div>
            {spots && spots.map((item,index)=>(
                <SpotObjectWeb type={2} key={index} data={item} updateSpots={()=>getSpots()} />
                ))}
            <div className="text-center load-btn d-block d-md-none d-lg-none d-xl-none">
              <button className="btn btn-primary border-btn  m-auto">
                {strings.Loadmore}
              </button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 col-xl-5 d-none d-md-block d-lg-block d-xl-block">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height={577}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=5&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
                <a href="https://fmovies-online.net">fmovies</a>
                <br />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;height:577px;width:100%;}",
                  }}
                />
                <a href="https://www.embedgooglemap.net" />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".gmap_canvas {overflow:hidden;background:none!important;height:577px;width:100%;}",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------/code for web view------------------*/}
      {/*-------------code for mobile view------------------*/}
      <div className="text-center load-btn d-block d-md-none d-lg-none d-xl-none">
        <button className="btn btn-primary border-btn  m-auto">
          {strings.Loadmore}
        </button>
      </div>
    </div>
  );
}

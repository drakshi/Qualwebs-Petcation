import React, {useEffect, useState} from "react";
import "react-multi-carousel/lib/styles.css";
import "react-day-picker/lib/style.css";
import styles from "./index.module.css";
import { petSpotsSlider, responsive } from "../public/SliderResponsive";
import SitterSliderObject from "../components/homepage/SitterSliderObject";
import Carousel from "react-multi-carousel";
import PetSpotObject from "../components/homepage/PetSpotObject";
import NewsRoomObject from "../components/homepage/NewsRoomObject";
import EventAndNews from "../components/homepage/EventAndNews";
import FAQ from "../components/homepage/FAQ";
import SitterByRegion from "../components/homepage/SitterByRegion";
import BecomePetSitter from "../components/homepage/BecomePetSitter";
import Services from "../components/homepage/Services";
import WhyChoosePetcation from "../components/homepage/WhyChoosePetcation";
import PetcationForOwners from "../components/homepage/PetcationForOwners";
import PetcationForPetsitters from "../components/homepage/PetcationForPetsitters";
import { strings } from "../public/lang/Strings";
import { MainBanner } from "../components/homepage/MainBanner";
import Link from "next/link";
import API from "../api/Api";
import Cookies from "universal-cookie";

const cookies = new Cookies();


type select = {
  key: number;
  value: string;
  label: string;
};

type SpotData = {
   id: number,
  user_id: number,
  category_id: number,
  spot_name: string,
  postal_code: number,
  city: string,
  address: string,
  overall_rate: number,
  total_review; number,
  images:any
}

interface IState {
  spotData: SpotData[],
}

interface IProps {
  featuredSpots?: any,

}

let api = new API();

class Home extends React.Component<IProps,IState> {
  constructor(props) {
    super(props);
    this.state = {
      spotData: [],

    }

    this.getSpotData = this.getSpotData.bind(this);
  }

  componentDidMount(): void {
    // this.props.getFeaturedSpots({},0)
    this.getSpotData()
  }

  getSpotData(){
    api.getPetSpots({})
        .then((res) => {
          this.setState(
              {spotData:res.data.response}
          )
        })
        .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if(prevProps.featuredSpots != this.props.featuredSpots){
      this.setState({spotData: this.props.featuredSpots})
    }
  }

  scrollToTop = () => {
    if (window) {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  render() {
    const {spotData} = this.state;
    let id = cookies.get('id');

    return (
      <div>
        <div className="main-wrapper my-0">
          <div className="main-image  d-md-block d-block d-lg-block d-xl-block">
            <img src="images/banner.png" className="img-fluid" alt="" />
          </div>
          <MainBanner />
          <div className="rating-section">
            <div className="container">
              <div className="row">
                <div className="col-auto mx-auto">
                  <div className="d-flex">
                    <div>
                      <h6 className="mb-0 text-white">{strings.Excellent} </h6>
                    </div>
                    <div className="d-flex rating-star">
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
                          ></path>
                        </svg>
                      </div>
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
                          ></path>
                        </svg>
                      </div>
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
                          ></path>
                        </svg>
                      </div>
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
                          ></path>
                        </svg>
                      </div>
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
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0 text-white">
                        based on 9745 reviews{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Services />
          <WhyChoosePetcation />
          <PetcationForOwners />
          <div className="bg-white padding">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-8 col-lg-8 col-xl-8 mx-auto">
                  <div className="text-center main-title">
                    <h2 className="font-semibold">
                      {strings.exploreOurSitter}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row carousel-slider">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    autoPlay={true}
                    showDots={true}
                    ssr={true}
                    renderDotsOutside={true}
                    arrows={false}
                    dotListClass={styles.carousel_dot}
                    className={"owl-carousel"}
                    responsive={responsive}
                  >
                    <SitterSliderObject
                      name={"Daniel"}
                      city={"tokyo"}
                      rating={4.5}
                      image={"/"}
                    />
                    <SitterSliderObject
                      name={"Daniel"}
                      city={"tokyo"}
                      rating={4.5}
                      image={"/"}
                    />
                    <SitterSliderObject
                      name={"Daniel"}
                      city={"tokyo"}
                      rating={4.5}
                      image={"/"}
                    />
                    <SitterSliderObject
                      name={"Daniel"}
                      city={"tokyo"}
                      rating={4.5}
                      image={"/"}
                    />
                    <SitterSliderObject
                      name={"Daniel"}
                      city={"tokyo"}
                      rating={4.5}
                      image={"/"}
                    />
                    <SitterSliderObject
                      name={"Daniel"}
                      city={"tokyo"}
                      rating={4.5}
                      image={"/"}
                    />
                  </Carousel>
                </div>
              </div>
              <div className="view-all mt-3 text-right">
                <Link href="/search-sitter">
                  <a className="font-14 font-medium">View all</a>
                </Link>
              </div>
            </div>
          </div>
          <PetcationForPetsitters />
          {spotData && <div className="bg-white padding">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-8 col-lg-8 col-xl-8 mx-auto">
                  <div className="text-center main-title">
                    <h2 className="font-semibold">{strings.petSpots}</h2>
                    <p className="mb-0">{strings.Exploreamazingplaces}</p>
                  </div>
                </div>
              </div>
               <div className="row carousel-slider">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    autoPlay={true}
                    showDots={true}
                    ssr={true}
                    arrows={false}
                    renderDotsOutside={true}
                    dotListClass={styles.carousel_dot}
                    className={"owl-carousel"}
                    responsive={petSpotsSlider}
                  >
                    {spotData.map((item, index)=>(<PetSpotObject key={`spots_${index}`}
                      name={item.spot_name}
                                                                 id={item.id}
                                                                 image={item.images && item.images.length ? item.images[0].path:''}
                      descriptiom={item.city + ' | ' + item.address}
                    />))}
                  </Carousel>
                </div>
              </div>
              <div className="view-all mt-3 text-right">
                <Link href="/pet-spots">
                  <a href="/pet-spots" className="font-14 font-medium">
                    View all
                  </a>
                </Link>
              </div>
            </div>
          </div>}
           <BecomePetSitter id={id} />

          <div className="booking-sitter">
            <div className="padding">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-8 col-lg-8 col-xl-8 mx-auto">
                    <div className="text-center main-title">
                      <h2 className="font-semibold">{strings.newsroom}</h2>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "10px" }}>
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    autoPlay={true}
                    ssr={true}
                    arrows={false}
                    renderDotsOutside={true}
                    responsive={petSpotsSlider}
                  >
                    <NewsRoomObject
                      date={"24 June’2021"}
                      image={"/"}
                      title={
                        "Research says a daily sunlight is needed for those paws"
                      }
                      desciption={
                        "News text is here which says about news that is added by admin this can be a post or article or blog or an actual news with image, category and clicking will redirect to the single page."
                      }
                    />

                    <NewsRoomObject
                      date={"24 June’2021"}
                      image={"/"}
                      title={
                        "Research says a daily sunlight is needed for those paws"
                      }
                      desciption={
                        "News text is here which says about news that is added by admin this can be a post or article or blog or an actual news with image, category and clicking will redirect to the single page."
                      }
                    />
                    <NewsRoomObject
                      date={"24 June’2021"}
                      image={"/"}
                      title={
                        "Research says a daily sunlight is needed for those paws"
                      }
                      desciption={
                        "News text is here which says about news that is added by admin this can be a post or article or blog or an actual news with image, category and clicking will redirect to the single page."
                      }
                    />
                    <NewsRoomObject
                      date={"24 June’2021"}
                      image={"/"}
                      title={
                        "Research says a daily sunlight is needed for those paws"
                      }
                      desciption={
                        "News text is here which says about news that is added by admin this can be a post or article or blog or an actual news with image, category and clicking will redirect to the single page."
                      }
                    />
                  </Carousel>
                </div>

                <div className="view-all mt-3 text-right">
                  <a
                    href="http://159.65.142.31/petcation-design/blog.html"
                    className="font-14 font-medium"
                  >
                    {strings.ViewAll}
                  </a>
                </div>
                <div className="row mt-4">
                  <EventAndNews />
                  <FAQ />
                </div>
              </div>
            </div>
          </div>
          <SitterByRegion />
        </div>
        <div className="col-12 text-right">
          <div onClick={this.scrollToTop} className="btn-top top-scroll">
            <div className="top-icon"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

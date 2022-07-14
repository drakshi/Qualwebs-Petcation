import React, {useEffect, useState} from 'react';
import {AxiosResponse} from "axios";
import Res from "../../models/response.interface";
import API from '../../api/Api'

const api = new API();
const Press = () => {
    const [press, setPress] = useState(true);
    const[pressData,setPressData] = useState([]);
    const[eventData,setEventData] = useState([]);
    useEffect(() => {
        console.log("useEffect ran")
        const getNews = () => {
            api.getNews()
                .then((response) => {
                    setPressData(response.data.response);
                })
                .catch((error) => console.log(error));
        }
        const getEvents = () => {
            api.getEvents()
                .then((response) => {
                    console.log(response.data.response[0].event_date);
                    setEventData(response.data.response);
                    console.log(eventData)
                })
                .catch((error) => console.log(error));
        }
        getNews();
        getEvents();
    },[])

    return(
        <>
            <div>
                <div className="main-wrapper">
                    <div className="booking-sitter py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="single-news single-service">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    {" "}
                                                    <a href="/">
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    {" "}
                                                    <a href="/static/NewsEvents">
                                                        News
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Press Releases
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="single-news-info release-padding">
                                    <h2 className="font-semibold mb-0">Press Releases</h2>
                                </div>
                                <div className="row tabs-design">
                                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                        <div className="pay-tabs news-tabs">
                                            <ul className="nav nav-tabs mb-0" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className={press === true ? "nav-link active":"nav-link"}
                                                        style={{position:"relative"}}
                                                        id="cards-tab"
                                                        data-toggle="tab"
                                                        onClick={() => {setPress(true)}}
                                                        href="http://159.65.142.31/petcation-design/news-events(press).html"
                                                        role="tab"
                                                    >
                                                        Press Releases
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className={press === false ? "nav-link active":"nav-link"}
                                                        id="bank-tab"
                                                        data-toggle="tab"
                                                        onClick={()=>{setPress(false)}}
                                                        href="http://159.65.142.31/petcation-design/events-update.html"
                                                        role="tab"
                                                    >
                                                        Events &amp; Updates
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr />
                                        {/*------------press release details--------------------*/}
                                        <div className="release-content">
                                            {press ? pressData.map((content) => <>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                                        <div className="release-date">
                                                            <h6 className="mb-0 font-14">{content.event_date}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-8 col-lg-8 col-xl-9">
                                                        <div className="news-details">
                                                            <a href="/static/Single-News-Event">
                                                                {content.title}
                                                            </a>
                                                            <div className="mt-3">
                                                                <span>{content.description}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr />
                                                </>
                                                ) : eventData.map((content) => <>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                                        <div className="release-date">
                                                            <h6 className="mb-0 font-14">{content.event_date}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-8 col-lg-8 col-xl-9">
                                                        <div className="news-details">
                                                            <a href="/static/Single-News-Event">
                                                                {content.title}
                                                            </a>
                                                            <div className="mt-3">
                                                                <span>{content.description}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </> )}
                                        </div>
                                        {/*------------/press release details--------------------*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*------------------categories section--------------------*/}
                </div>
            </div>
        </>

    )
}
export default Press

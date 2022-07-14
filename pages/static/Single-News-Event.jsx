import React, {useEffect, useState} from 'react';
import API from '../../api/Api';

const api = new API();

const SingleNewsEvent =(props)=>{
    const [newsData , setNewsData] = useState([]);
    useEffect(() => {
        const getSingleNews = (id) => {
            api.getSingleNews()
                .then((response) => {
                    setNewsData(response.data.response);
                })
                .catch((error) => console.log(error));
        }
        getSingleNews();
    },[])

    console.log(newsData);
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
                                                    <a href="http://159.65.142.31/petcation-design/home">
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    {" "}
                                                    <a href="http://159.65.142.31/petcation-design/news-events.html">
                                                        News
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    {" "}
                                                    <a href="http://159.65.142.31/petcation-design/news-events(press).html">
                                                        Press Releases
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    2021
                                                </li>
                                            </ol>
                                        </nav>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="single-news-info padding">
                                    <h6 className="mb-3 font-normal">{newsData.event_date}</h6>
                                    <h3 className="font-semibold">
                                        {newsData.title}
                                    </h3>
                                    <p>
                                        {newsData.description}
                                    </p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SingleNewsEvent;

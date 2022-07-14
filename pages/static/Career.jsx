import React from "react";

const Career = () => {
    return(
        <>
            <div className="main-wrapper mt-0">
                {/*-------1st section----*/}
                <div className="career-position">
                    <div className="main-image mb-4">
                        <img src="/images/banner.png" className="img-fluid" alt="" />
                    </div>
                    {/*-------/1st section----*/}
                    {/*---------career section--------------*/}
                    <div className="main-banner career-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-9 col-lg-8 col-xl-8 mx-auto">
                                    <div className="career-details text-center">
                                        <h3 className="font-semibold">Careers</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam.
                                        </p>
                                        <button className="btn btn-primary px-3">
                                            Search job openings
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*---------/career section--------------*/}
                {/*-------2nd section---------------------*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-11 col-xl-11 mx-auto">
                            {/*----*/}
                            <div className="career-impact">
                                <div className="row">
                                    <div className="col-12 col-md-7 col-lg-7 col-xl-7">
                                        <div className="career-image">
                                            <img src="/images/img5.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-5 col-lg-5 col-xl-5 my-auto">
                                        <div className="career-content">
                                            <h4 className="font-medium">Make a real impact</h4>
                                            <p className="font-14">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                            <button className="btn btn-primary px-3">
                                                Explore Careers
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*--/--*/}
                            {/*----*/}
                            <div className="career-impact">
                                <div className="row">
                                    <div className="col-12 col-md-5 col-lg-5 col-xl-5 my-auto">
                                        <div className="career-content">
                                            <h4 className="font-medium">Perks &amp; Culture</h4>
                                            <p className="font-14">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                            <button className="btn btn-primary px-3">
                                                Learn about life at petcation
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-7 col-lg-7 col-xl-7">
                                        <div className="career-image">
                                            <img src="/images/img5.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*--/--*/}
                        </div>
                    </div>
                </div>
                {/*-------/2nd section-------------------*/}
            </div>

        </>

    )
}
export default Career;

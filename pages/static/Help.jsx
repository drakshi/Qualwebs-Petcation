import React from "react"

const Help = () => {
    return(
        <>

            <div className="main-wrapper mt-0">
                {/*-------1st section----*/}
                <div className="main-image">
                    <img src="/images/banner2.png" className="img-fluid" alt="" />
                </div>
                <div className="main-banner help-banner">
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
                                            className=""
                                        />
                                    </svg>
                                    <h3 className="text-white mb-3">What are you looking for</h3>
                                    <div className="input-group group-btn mb-3">
                                        <input
                                            type="text"
                                            className="form-control bg-white"
                                            placeholder="Type here to search"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">Search</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-------/1st section----*/}
                {/*-------2nd section----*/}
                <div className="sitter-tabs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="pay-tabs">
                                    <ul
                                        className="nav nav-tabs border-0 mb-0 justify-content-center"
                                        id="myTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link active"
                                                id="cards-tab"
                                                data-toggle="tab"
                                                href="#cards"
                                                role="tab"
                                            >
                                                Sitters
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link"
                                                id="bank-tab"
                                                data-toggle="tab"
                                                href="#bank"
                                                role="tab"
                                            >
                                                Owners
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-11 mx-auto">
                            <div className="pay-tabs help-content">
                                <div className="tab-content" id="myTabContent">
                                    {/*----------cards details---------*/}
                                    <div
                                        className="tab-pane fade show active"
                                        id="cards"
                                        role="tabpanel"
                                        aria-labelledby="cards-tab"
                                    >
                                        <div className="row">
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="http://159.65.142.31/petcation-design/help(single-question).html">
                                                                How can i create my sitter profile ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://159.65.142.31/petcation-design/help(single-question).html">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="http://159.65.142.31/petcation-design/help(single-question).html">
                                                                How can i create my sitter profile ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="http://159.65.142.31/petcation-design/help(single-question).html">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="http://159.65.142.31/petcation-design/help(single-question).html">
                                                                How can i create my sitter profile ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="http://159.65.142.31/petcation-design/help(single-question).html">
                                                                How can i create my sitter profile ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="http://159.65.142.31/petcation-design/help(single-question).html">
                                                                How can i create my sitter profile ?
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------/cards details---------*/}
                                    {/*----------bank details---------*/}
                                    <div
                                        className="tab-pane fade"
                                        id="bank"
                                        role="tabpanel"
                                        aria-labelledby="bank-tab"
                                    >
                                        <div className="row">
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="help-details main-padding">
                                                    <h5 className="font-14 font-semibold">GETTING STARTED</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="#">How can i create my sitter profile ?</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                How can i become a verified sitter on petcation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">What are the service fees?</a>
                                                        </li>
                                                    </ul>
                                                    <div className="all-quest">
                                                        <a href="http://159.65.142.31/petcation-design/help(all-questions).html">
                                                            View all questions
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------/bank details---------*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-------/2nd section----*/}
            </div>

            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </>

    )
}

export default Help

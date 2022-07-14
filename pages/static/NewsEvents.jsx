import React from "react"

const NewsEvents =() => {
    return (
        <>

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
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    News
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
                                    <h2 className="font-semibold mb-0">News</h2>
                                </div>
                                <div className="row tabs-design border-0">
                                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                        <div className="annoucements-details">
                                            <h5>Search for announcements</h5>
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div className="form-group">

                                                        <div className="category-selection charge-select">
                                                            <div
                                                                className="dropdown bootstrap-select form-control mySelect">
                                                                <select className="form-control mySelect"
                                                                        tabIndex="-98">
                                                                    <option>All categories</option>
                                                                    <option>Press release</option>
                                                                    <option>Events &amp; Updates</option>
                                                                </select>
                                                                <button type="button"
                                                                        className="btn dropdown-toggle btn-light"
                                                                        data-toggle="dropdown" role="combobox"
                                                                        aria-owns="bs-select-1" aria-haspopup="listbox"
                                                                        aria-expanded="false" title="All categories">
                                                                    <div className="filter-option">
                                                                        <div className="filter-option-inner">
                                                                            <div
                                                                                className="filter-option-inner-inner">All
                                                                                categories
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                                <div className="dropdown-menu ">
                                                                    <div className="inner show" role="listbox"
                                                                         id="bs-select-1" tabIndex="-1">
                                                                        <ul className="dropdown-menu inner show"
                                                                            role="presentation"></ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>                                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div className="search-news form-group">
                                                        <input
                                                            className="form-control"
                                                            id="search-news"
                                                            placeholder="What are you looking for"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="search-category my-3">
                                                <div className="row">
                                                    <div className="col-12 col-md-4 col-lg-4 col-xl-2">
                                                        <h6>Sort by category</h6>
                                                    </div>
                                                    <div className="col-12 col-md-8 col-lg-8 col-xl-10">
                                                        <div className="custom-check d-inline-block">
                                                            <label className="check ">
                                                                <input
                                                                    type="radio"
                                                                    className="class1"
                                                                    name="is_name2"
                                                                    defaultChecked="checked"
                                                                    defaultValue="dog"
                                                                />
                                                                <span className="checkmark" />
                                                                All categories
                                                            </label>
                                                        </div>
                                                        <div className="custom-check d-inline-block">
                                                            <label className="check ">
                                                                <input
                                                                    type="radio"
                                                                    className="class1"
                                                                    name="is_name2"
                                                                    defaultValue="cat"
                                                                />
                                                                <span className="checkmark" />
                                                                Mobile
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        {/*------------press release details--------------------*/}
                                        <div className="release-content">
                                            <div className="row">
                                                <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                                    <div className="release-date">
                                                        <h6 className="mb-0 font-14">September 22, 2021</h6>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-9">
                                                    <div className="news-details">
                                                        <a href="http://159.65.142.31/petcation-design/single-news-events.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit,
                                                        </a>
                                                        <div className="mt-3">
                                                            <span>Mobile</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                                    <div className="release-date">
                                                        <h6 className="mb-0 font-14">September 22, 2021</h6>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-9">
                                                    <div className="news-details">
                                                        <a href="http://159.65.142.31/petcation-design/single-news-events.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit,
                                                        </a>
                                                        <div className="mt-3">
                                                            <span>Mobile</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                                    <div className="release-date">
                                                        <h6 className="mb-0 font-14">September 22, 2021</h6>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-9">
                                                    <div className="news-details">
                                                        <a href="http://159.65.142.31/petcation-design/single-news-events.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit,
                                                        </a>
                                                        <div className="mt-3">
                                                            <span>Mobile</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                                    <div className="release-date">
                                                        <h6 className="mb-0 font-14">September 22, 2021</h6>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-8 col-lg-8 col-xl-9">
                                                    <div className="news-details">
                                                        <a href="http://159.65.142.31/petcation-design/single-news-events.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit,
                                                        </a>
                                                        <div className="mt-3">
                                                            <span>Mobile</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="view-all">
                                                <a href="#">View all</a>
                                            </div>
                                        </div>
                                        {/*------------/press release details--------------------*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*------------------categories section--------------------*/}
                </div>

        </>

    )
}
export default NewsEvents

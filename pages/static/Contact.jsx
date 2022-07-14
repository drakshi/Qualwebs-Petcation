import React from "react"

const Contact = () =>{
    return (
        <>
            <div className="main-page">

                <div className="main-wrappper mt-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="bg-white main-content">
                                    <div className="contact-us">
                                        <h5 className="font-20 font-semibold">Contact us</h5>
                                        <p className="font-14">Hey, let us know how we can help you</p>
                                    </div>
                                    <div className="login-form">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-sm-6">
                                                    <label>First name</label>
                                                    <input className="form-control" id="fname" type="text" />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Last name</label>
                                                    <input className="form-control" id="lname" type="text" />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Email address</label>
                                                    <input className="form-control" id="email" type="email" />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Contact number</label>
                                                    <input className="form-control" id="contact" type="tel" />
                                                </div>
                                                <div className="form-group col-sm-12">
                                                    <label>Your message</label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={4}
                                                        id="message"
                                                        type="text"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center my-3">
                                                <button className="btn btn-primary">Join now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Contact

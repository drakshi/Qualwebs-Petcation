import {Modal} from "react-bootstrap";
import React, {useEffect} from "react";

import { useState } from "react";
import RatingStars from "./RatingStars";
import API from "../../api/Api";

const api = new API();
export default function SpotRating(props) {

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({
        spot_id: '',
        review: '',
        rating: 3
    })

    useEffect(()=>{
       setShowModal(props.showModal);
    },[props.showModal])


    useEffect(()=>{
       setData({...data, spot_id: props.spotId})
    },[props.spotId])

    const handleRating = () => {
        api
            .rateReviewSpot(data)
            .then((res) => {
                setShowModal(false);
                props.updateSpot();
            })
            .catch((error) => {
                console.log('error:-', error);
            });
    };


    return (
        <Modal show={true}>
            <div
                className="modal fade show"
                id="ratings"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-modal="true"
                style={{ display: "block" }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                onClick={()=>setShowModal(false)}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="meetup-details">
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                                            <h6 className="text-center">Provide Feed Back</h6>

                                            <fieldset className="rating star">
                                                {[1,2,3,4,5].map((val)=><><input
                                                    type="radio"
                                                    id={`field6_star${val}`}
                                                    name={`rating${val}`}

                                                    onChange={()=>setData({...data, rating: val})}

                                                />
                                                    <label className="full" htmlFor={`field6_star${val}`} />
                                                    </>
                                                )}
                                            </fieldset>
                                            <textarea
                                                className="form-control"
                                                placeholder="message"
                                                rows={4}
                                                value={data.review}
                                                onChange={(e)=>{setData({...data, review: e.target.value})}}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button onClick={()=> handleRating()} className="btn btn-primary">Rate now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

import React, {useEffect, useState} from "react";
import User from ".";
import {errorOptions, successOptions} from "../../public/appData/AppData";
import {useSnackbar} from "react-simple-snackbar";
import API from "../../api/Api";
import {strings} from "../../public/lang/Strings";



let api = new API();

interface I_STATE {
  coupons:any[];
  expiredCoupons:any[]
}

export default function PointsAndCoupon({},state:I_STATE) {
  const [coupons, setCoupons] = useState(state.coupons);
  const [expiredCoupons, setExpiredCoupons] = useState(state.coupons);

  const [openSuccess, closeSuccess] = useSnackbar(successOptions);
  const [openError, closeError] = useSnackbar(errorOptions);


  useEffect(()=>{
    api.getCoupons(0).then((res)=>{
      if(res.data.status == 200){
        setCoupons(res.data.response)
      }else {

      }

    }).catch((error)=>{
      console.log('error is', error)
    })

    api.getCoupons(1).then((res)=>{
      if(res.data.status == 200){
        setExpiredCoupons(res.data.response)
      }else {

      }

    }).catch((error)=>{
      console.log('error is', error)
    })

  },[])


  return (
      <>
    <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
      <div className="bg-white main-background">
        <div className="row">
          <div className="col-7 my">
            <h5 className="font-semibold mb-3 font-20">Points &amp; Coupon</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 col-xl-6">
            <div className="d-none d-md-block d-lg-block d-xl-block">
              <div className="pay-tabs">
                <ul
                  className="nav nav-tabs border-0 mb-0"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="unused-tab"
                      data-toggle="tab"
                      href="#unused"
                      role="tab"
                      aria-selected="true"
                    >
                      Unused Coupons
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="expired-tab"
                      data-toggle="tab"
                      href="#expired"
                      role="tab"
                      aria-selected="false"
                    >
                      Expired Coupons
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*-----unused coupons--------*/}
        <div className="tab-content" id="myTabContent">
          {/*----------*/}
          <div
            className="tab-pane fade active show"
            id="unused"
            role="tabpanel"
            aria-labelledby="unused-tab"
          >
            <div className="row">
              {coupons && coupons.length ? coupons.map((item,index)=><div key={index} className="col-sm-6">
                <div className="unused-coupons">
                  <h5 className="mb-0">¥500 OFF</h5>
                  <p className="main-amt mb-0">For order over ¥5,500</p>
                  <p className="code mb-0">Code: 123456</p>
                  <hr />
                  <ul className="coupon-list">
                    <li>23/08/2021 01:12 - 25/08/2021 01:15</li>
                    <li>For all products</li>
                  </ul>
                </div>
              </div>): <div className="text-center padding">
                <p className="font-13 mb-0 font-italic">{strings.noCoupons}</p>
                </div>}

              {/*<div className="col-12 col-md-4 col-lg-4 col-xl-6">*/}
              {/*  <button*/}
              {/*    className="btn btn-primary border-btn px-3 mt-3"*/}
              {/*    data-toggle="modal"*/}
              {/*    data-target="#coupon"*/}
              {/*  >*/}
              {/*    Add coupon*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          </div>
          {/*----------/-----------*/}
          <div
            className="tab-pane"
            id="expired"
            role="tabpanel"
            aria-labelledby="expired-tab"
          >
            <div className="row">
              {expiredCoupons && expiredCoupons.length ? expiredCoupons.map((item,index)=> <div key={index} className="col-sm-6">
                <div className="unused-coupons expired">
                  <h5 className="mb-0">¥500 OFF</h5>
                  <p className="main-amt mb-0">For order over ¥5,500</p>
                  <p className="code mb-0">Code: 123456</p>
                  <hr />
                  <ul className="coupon-list">
                    <li>23/08/2021 01:12 - 25/08/2021 01:15</li>
                    <li>For all products</li>
                  </ul>
                </div>
              </div>): <div className="text-center padding">
                <p className="font-13 mb-0 font-italic">{strings.noCoupons}</p>
              </div>}
            </div>
          </div>
        </div>
      </div>
      {/*<div*/}
      {/*  className="modal fade "*/}
      {/*  id="coupon"*/}
      {/*  tabIndex={-1}*/}
      {/*  role="dialog"*/}
      {/*  aria-labelledby="exampleModalLabel"*/}
      {/*  style={{ display: "block" }}*/}
      {/*  aria-modal="true"*/}
      {/*>*/}
      {/*  <div className="modal-dialog" role="document">*/}
      {/*    <div className="modal-content">*/}
      {/*      <div className="modal-header">*/}
      {/*        <h5 className="modal-title">Add coupon</h5>*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          className="close"*/}
      {/*          data-dismiss="modal"*/}
      {/*          aria-label="Close"*/}
      {/*        >*/}
      {/*          <span aria-hidden="true">×</span>*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*      <div className="modal-body">*/}
      {/*        <form>*/}
      {/*          <div>*/}
      {/*            <h6>My Coupons</h6>*/}
      {/*            <div className="row">*/}
      {/*              <div className="col-12 col-md-12 col-lg-12 col-xl-12">*/}
      {/*                <div className="form-group mb-0">*/}
      {/*                  <div className="category-selection charge-select">*/}
      {/*                    <select className="form-control mySelect">*/}
      {/*                      <option>Added coupons</option>*/}
      {/*                    </select>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*                <div className="number">*/}
      {/*                  <p>2</p>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <hr />*/}
      {/*          <div>*/}
      {/*            <h6>Add new coupon</h6>*/}
      {/*            <div className="row">*/}
      {/*              <div className="col-12 col-md-6 col-lg-6 col-xl-7">*/}
      {/*                <input*/}
      {/*                  className="form-control"*/}
      {/*                  placeholder="Coupon code"*/}
      {/*                  id="coupon"*/}
      {/*                />*/}
      {/*              </div>*/}
      {/*              <div className="col-12 col-md-6 col-lg-6 col-xl-5">*/}
      {/*                <button className="btn btn-primary">Add coupon</button>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </form>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
        </>
  );
}

PointsAndCoupon.getLayout = function (page) {
  return <User>{page}</User>;
};

import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {numberInput} from "../../utils/Helper";
import {strings} from "../../public/lang/Strings";
import API from "../../api/Api";

let api = new API();

export  default function TransportFeeModal(props) {
    const [charges, setCharges] = useState<string>('');

    useEffect(()=>{
        console.log('props',props)
      if(props.id ){
          api
              .getTransportChargeRequest(props.id)
              .then((res) => {
                  setCharges(res.data.response.amount);
              })
              .catch((error) => {});
      }
    },[props.id]);

  return(
      <Modal
          show={props.showModal}
          id="settings"
          className="modal-child"
          aria-labelledby="settings"
          tabIndex="-1"
          scrollable
      >
          <Modal.Header className="p-3">
              <Modal.Title as="h4" className="fw-medium">
                  Add transportation fees
              </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3">
              <div className="col-12 form-details">

                  <div className="weekly-discount mb-2">
                      <h6 className="text-muted font-14 font-semibold">
                          Enter amount*
                      </h6>
                      <input
                          className={
                              "form-control mb-1 w-100 "
                          }
                          id="weekly-discount"
                          name="discount"
                          type="number"
                          placeholder={strings.EnterHere}
                          maxLength={3}
                          value={charges}
                          onKeyPress={numberInput}
                          onChange={(e)=>setCharges(e.target.value)}
                      />
                  </div>

              </div>
              <hr />
              <div className="d-flex justify-content-between flex-row">
                  <button
                      style={{ zIndex: 1000 }}
                      onClick={()=>props.handleAddCharge(charges)}
                      className="btn btn-primary float-end"
                  >
                      Add & Accept
                  </button>
                  <button
                      style={{ zIndex: 1000 }}
                      onClick={props.hideModal}
                      className="btn float-end"
                  >
                      Cancel
                  </button>
              </div>
          </Modal.Body>
      </Modal>
  )
}

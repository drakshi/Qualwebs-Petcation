import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const UploadFileModal = (props) => {
  const [cropper, setCropper] = useState<any>();

  const getCropData = (e) => {
    e.preventDefault();
    if (typeof cropper !== "undefined") {
      props.hideModal();
      props.setImage(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <>
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
            Crop Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3">
          <hr />
          <div className="col-12 form-details">
            <Cropper
              src={props.path}
              onInitialized={(instance: any) => {
                setCropper(instance);
              }}
              zoomable={false}
              aspectRatio={props.aspectRatio ? props.aspectRatio : 1}
              preview=".img-preview"
              guides={false}
              viewMode={1}
              dragMode="move"
              cropBoxMovable={true}
            />
          </div>
          <hr />
          <div className="d-flex justify-content-between flex-row">
            <button
              style={{ zIndex: 1000 }}
              onClick={getCropData}
              className="btn btn-primary float-end"
            >
              Crop
            </button>
            <button
              style={{ zIndex: 1000 }}
              onClick={() => props.hideModal()}
              className="btn float-end"
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UploadFileModal;

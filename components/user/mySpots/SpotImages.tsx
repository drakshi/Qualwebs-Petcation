import React from "react";
import { strings } from "../../../public/lang/Strings";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import API from "../../../api/Api";
import { dataURLtoFile } from "../../../utils/Helper";
import UploadFileModal from "../../common/UploadfileModal";
import { useSnackbar } from "react-simple-snackbar";
import { errorOptions } from "../../../public/appData/AppData";

const api = new API();
export default function SpotImages(props: any) {
  const [openError, closeError] = useSnackbar(errorOptions);
  const [images, setImages] = useState<string[]>([]);
  const [openCropper, setOpenCropper] = useState<boolean>(false);
  const [cropper, setCropper] = useState<any>();
  const [uploadedFilePath, setUploadedFilePath] = useState<any>();
  const [selecteImage, setSelectedImage] = useState<string>();
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.data) {
      setImages([...props.data]);
    }
  }, [props.data]);

  const onFileChange = (event) => {
    event.preventDefault();
    if (event.dataTransfer || event.target.files) {
      let files;
      if (event.dataTransfer) {
        files = event.dataTransfer.files;
      } else if (event.target) {
        files = event.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFilePath(reader.result);
      };
      if (files[0]) {

        reader.readAsDataURL(files[0]);
        setOpenCropper(true);
      }
    }
  };

  const onSubmit = () => {
    if (images.length == 0) {
      openError("Select Atleast one image");
      return false;
    }

    props.updateImages(images);
  };

  const deleteImage = (index) => {
    let image = images.filter((val,i)=> i !=index)
    setImages(image);
  }

  return (
      <div className="select-spot-category content-padding">
        <h5 className="font-semibold mb-3">{strings.Spotimages}</h5>
        <div className="booking-for">
          <div className="spot-images">
            <div className="row">
              {images.map((value, index) => (
                  <div
                      key={index}
                      // onClick={() => {
                      //   let img = [...images];
                      //   img.splice(index, 1);
                      //   setImages([...img]);
                      // }}
                      className="col-12 col-md-4 col-lg-4 col-xl-4 position-relative"
                  >
                    <a onClick={()=>deleteImage(index)} className={'bg-danger position-absolute top-0 p-1 rounded-2'}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="mb-0" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </a>
                    <div className="spot-images">
                      <img src={value} className="img-fluid" />

                    </div>
                  </div>
              ))}
            </div>
            <input
                ref={inputRef}
                type="file"
                name="file"
                onChange={onFileChange}
                style={{ opacity: 0, width: 0, height: 0 }}
            />
            <button
                onClick={() => {
                  inputRef.current.click()}
                }
                className="btn btn-primary btn-black mt-3 py-1"
            >
              {strings.Addmore}
            </button>
          </div>
        </div>
        <div className="modal-footer px-0 pb-0 justify-content-between">
          <button className="btn btn-primary btn1 btn-edit">
            back
          </button>
          <button onClick={() => onSubmit()} className="btn btn-primary">
            {strings.Confirm}
          </button>
        </div>
        {openCropper ? <UploadFileModal
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            path={uploadedFilePath}
            showModal={openCropper}
            zoomable={false}
            aspectRatio={4/3}
            setImage={(v) => {
              var file = dataURLtoFile(v, "image");
              const formData = new FormData();
              formData.append("image", file);
              formData.append("path", "pets");
              api
                  .uploadFile(formData)
                  .then((json) => {
                    setImages([...images, json.data.response]);
                    setOpenCropper(false)
                  })
                  .catch((error) => console.log(error));
            }}
            preview=".img-preview"
            guides={false}
            viewMode={1}
            dragMode="move"
            cropBoxMovable={true}
            hideModal={() => setOpenCropper(false)}
        />:null}
      </div>
  );
}

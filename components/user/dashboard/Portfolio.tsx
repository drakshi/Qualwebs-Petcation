import { useState } from "react";
import API from "../../../api/Api";
import { strings } from "../../../public/lang/Strings";
import UploadFileModal from "../../common/UploadfileModal";
import { dataURLtoFile } from "../../../utils/Helper";
import { AxiosError, AxiosResponse } from "axios";
import Res from "../../../models/response.interface";
import IDashboardData from "../../../models/dashboard.interface";
import { useEffect } from "react";
import { useRef } from "react";

const api = new API();
export default function Portfolio() {
  const [dashboard, setDashboard] = useState<IDashboardData>();
  const [images, setImages] = useState<string[]>([]);
  const [openCropper, setOpenCropper] = useState<boolean>(false);
  const [cropper, setCropper] = useState<any>();
  const [uploadedFilePath, setUploadedFilePath] = useState<any>();
  const [selecteImage, setSelectedImage] = useState<string>();
  const inputRef = useRef(null);

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = async () => {
    api
      .getDashboard()
      .then((response: AxiosResponse<Res<IDashboardData>>) => {
        setDashboard(response.data.response);
        setImages(response.data.response.images.map((v) => v.path));
      })
      .catch((error: AxiosError) => {
        console.log(error.response.data);
      });
  };

  const savePortfolio = (data: string[]) => {
    api
      .savePortfolio({ images: data })
      .then((res) => {})
      .catch((error) => {});
  };

  const onFileChange = (event) => {
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

  return (
    <div className="bg-white main-background">
      <div className="row">
        <div className="col-6 col-md-7 col-lg-7 col-xl-8 my-auto">
          <h6 className="mb-0 font-semibold">{strings.MyPortfolio}</h6>
        </div>
        <div className="col-6 col-md-5 col-lg-5 col-xl-4 alignment">
          <input
            ref={inputRef}
            type="file"
            name="file"
            onChange={onFileChange}
            style={{ opacity: 0, width: 0, height: 0 }}
          />
          <button
            onClick={() => inputRef.current.click()}
            className="btn btn-primary btn-black py-2"
          >
            {strings.Addmoreimages}
          </button>
        </div>
      </div>
      <hr />
      <div className="row gallery-view">
        {images.map((value) => (
          <div className="gallery-image">
            <div className="dash-image">
              <img src={value} className="img-fluid" alt="" />
            </div>
          </div>
        ))}
      </div>
      <UploadFileModal
        onInitialized={(instance) => {
          setCropper(instance);
        }}
        path={uploadedFilePath}
        showModal={openCropper}
        zoomable={false}
        aspectRatio={16 / 9}
        setImage={(v) => {
          var file = dataURLtoFile(v, "image");
          const formData = new FormData();
          formData.append("image", file);
          formData.append("path", "pets");
          api
            .uploadFile(formData)
            .then((json) => {
              savePortfolio([...images, json.data.response]);
              setImages([...images, json.data.response]);
            })
            .catch((error) => console.log(error));
        }}
        preview=".img-preview"
        guides={false}
        viewMode={1}
        dragMode="move"
        cropBoxMovable={true}
        hideModal={() => setOpenCropper(false)}
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import IDashboard from "../../../models/dashboard.interface";
import { strings } from "../../../public/lang/Strings";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import parseDate from "react-day-picker/moment";
import formatDate from "react-day-picker/moment";
import API from "../../../api/Api";
import { AxiosError, AxiosResponse } from "axios";
import Res from "../../../models/response.interface";
import YearMonthForm from "../../common/YearMonthForm";
import { useSnackbar } from "react-simple-snackbar";
import { successOptions } from "../../../public/appData/AppData";
import moment from "moment";
import {dataURLtoFile, numberInput} from "../../../utils/Helper";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import UploadFileModal from "../../common/UploadfileModal";
import {useRouter} from "next/router";
import {EventEmitter} from "../../../public/EventEmitter";

let defaultState = {
  id: 0,
  firstname: "",
  lastname: "",
  description:"",
  email: "",
  email_verified_at: null,
  facebook_id: null,
  google_id: null,
  twitter_id: null,
  line_id: "",
  phone_number: null,
  dob: null,
  profile_picture: "",
  primary_contact_person: null,
  primary_contact_number: null,
  secondary_contact_person: null,
  secondary_contact_number: null,
  created_at: "",
  updated_at: "",
  passport_image: '',
  liscense_image:'',
  passport_number: '',
  is_verified: 0,
  liscense_number: '',
  user_document: [
      {
    document_number: '',
        path: '',
    document_type: 1,
        id: null,
       status: 0,
},{
      document_number: '',
      path: '',
      document_type: 1,
      id: null,
      status: 0,
    }
]
};

const api = new API();
const BasicInfo = () => {
  const router = useRouter();
  const [info, setInfo] = useState<IDashboard>(defaultState);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});
  const [month, setMonth] = useState();

  const [selectedType, setSelectedType] = useState<number>(1);
  const [openSuccess, closeSuccess] = useSnackbar(successOptions);

  const [openCropper, setOpenCropper] = useState<boolean>(false);
  const [cropper, setCropper] = useState<any>();
  const [uploadedFilePath, setUploadedFilePath] = useState<any>();

  const onTextChange = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const promiseInfo = useRef<any>({});

  useEffect(() => {
    getBasicInfo();
  }, []);

  const showModal = async () => {
    return new Promise((resolve, reject) => {
      promiseInfo.current = {
        resolve,
        reject,
      };
      setOpenModal(true);
    });
  };

  const modalAction = async () => {
    try {
      const result = await showModal();
      updateProfile();
      setOpenModal(false);
    } catch (err) {
      console.log(err);
      setOpenModal(false);
    }
  };

  const updateProfile = () => {

    let stringy = JSON.stringify(info)
    let a = JSON.parse(stringy)
    if(a.user_document.length && a.user_document.length > 1){
       a.user_document = []
      let x = info.user_document[a.user_document.length-1]
      x.document_number = info.passport_number
      x.path = info.passport_image
      let y = info.user_document[a.user_document.length-2]
      y.document_number = info.liscense_number
      y.path = info.liscense_image
      a.user_document = [x,y]
    }
    let data = JSON.stringify(a);
    api
      .saveBasicInfo(data)
      .then((json) => {
        document.cookie = `id=${json.data.response.id}; path=/`;
        document.cookie = `firstname=${json.data.response.firstname}; path=/`;
        document.cookie = `lastname=${json.data.response.lastname}; path=/`;
        document.cookie = `description=${json.data.response.description}; path=/`;
        document.cookie = `phone_number=${json.data.response.phone_number}; path=/`;
        document.cookie = `profile_picture=${json.data.response.profile_picture}; path=/`;
        document.cookie = `email=${json.data.response.email}; path=/`;
        openSuccess("Saved Successfully");
        setErrors({});
        EventEmitter.dispatch('updateUserDetail')
        console.log(data);
      })
      .catch((error: AxiosError) => {
        if (error.response.status == 422) {
          setErrors(error.response.data.errors);
        } else {
          setErrors({});
        }
      });
  };

  const getBasicInfo = async () => {
    api
      .getBasicInfo()
      .then((response: AxiosResponse<Res<IDashboard>>) => {
        if(response.data.response.user_document) {
          if (response.data.response.user_document.length > 1) {
            let userDetail = response.data.response
            userDetail.passport_number = response.data.response.user_document[0].document_number == 'undefined' ? '':response.data.response.user_document[0].document_number
            userDetail.passport_image = response.data.response.user_document[0].path ?? ''
            userDetail.liscense_number =  response.data.response.user_document[1].document_number == 'undefined' ? '':response.data.response.user_document[1].document_number
            userDetail.liscense_image = response.data.response.user_document[1].path ?? ""
            console.log('userdetail is', userDetail)
            setInfo(userDetail);
          }else {
            setInfo(response.data.response);
          }
        }else {
          setInfo(response.data.response);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleYearMonthChange = (month) => {
    setMonth(month);
  };

  const uploadDoument = (v) => {
    var file = dataURLtoFile(v, "image");
    const formData = new FormData();
    if(selectedType==1){
      if(!info.passport_number){
        setErrors("Enter passport number");
        return
      }
      formData.append("document_number", info.passport_number);
    }else {
      if(!info.liscense_number){
        setErrors("Enter liscense number");
        return
      }
      formData.append("document_number", info.liscense_number);
    }
    formData.append("document_type", String(selectedType));
    formData.append("document", file);
    api
        .uploadDocument(formData)
        .then((json) => {
          let detail = info
          if(selectedType == 1){
            detail.user_document[0] = json.data.response
            detail.passport_image = json.data.response.path
          }else if(selectedType == 2) {
            detail.user_document[1] = json.data.response
            detail.liscense_image = json.data.response.path
          }
          openSuccess('Successfully uploaded image');
          setInfo(info);
        })
        .catch((error) => console.log(error));
  }



  const onFileChange = (event, type) => {
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
      setSelectedType(type)
      if (files[0]) {
        reader.readAsDataURL(files[0]);
        setOpenCropper(true);
      }
    }
  };

  return (
    <>
      <div>
        <div>
          <div className="pay-tabs">
            <div className="basic-info">
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <h5 className="font-semibold py-3">{strings.basicinfo}</h5>

                <button onClick={modalAction} className="btn btn-primary btn1">
                  Save
                </button>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">{strings.Fullname}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      className={
                        "form-control mb-0 " +
                        (errors.firstname ? "invalid" : "")
                      }
                      name="firstname"
                      placeholder="First Name"
                      value={info.firstname}
                      onChange={onTextChange}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">{strings.Lastname}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      value={info.lastname}
                      onChange={onTextChange}
                      className={
                        "form-control mb-0 " +
                        (errors.lastname ? "invalid" : "")
                      }
                    />
                  </div>
                </div>
              </div>
              <hr /><div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">Profile description</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      name="description"
                      placeholder="Profile description"
                      value={info.description}
                      onChange={onTextChange}
                      className={
                        "form-control mb-0 " +
                        (errors.description ? "invalid" : "")
                      }
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">{strings.Emailaddress}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      placeholder="Email"
                      value={info.email}
                      readOnly={true}
                      className={
                        "form-control mb-0 " +
                        (errors.lastname ? "invalid" : "")
                      }
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">{strings.Contactnumber}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      maxLength={11}
                      onKeyPress={numberInput}
                      name="phone_number"
                      placeholder="Phone Number"
                      value={info.phone_number}
                      onChange={onTextChange}
                      className={
                        "form-control mb-0 " +
                        (errors.phone_number ? "invalid" : "")
                      }
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">{strings.Birthdate}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <div className="form-control mb-0">
                      <DayPickerInput
                        formatDate={formatDate.formatDate}
                        parseDate={parseDate.parseDate}
                        dayPickerProps={{
                          modifiers: {
                            disabled: [
                              {
                                after: new Date(),
                              },
                            ],
                          },
                          month: month,
                          captionElement: ({ date, localeUtils }) => (
                            <YearMonthForm
                                isDob={true}
                              before={true}
                              date={date ? date : new Date()}
                              localeUtils={localeUtils}
                              onChange={handleYearMonthChange}
                            />
                          ),
                        }}
                        inputProps={{
                          style: {
                            border: 0,
                            background: "transparent",
                          },
                          readOnly: true,
                        }}
                        placeholder="DD/MM/YYYY"
                        format="DD/MM/yyyy"
                        value={info.dob}
                        onDayChange={(date) =>
                          setInfo({
                            ...info,
                            dob: `${moment(date).format("DD/MM/yyyy")} `,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">Emergency Contact 1</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      maxLength={11}
                      name="primary_contact_person"
                      placeholder="Name"
                      value={info.primary_contact_person}
                      onChange={onTextChange}
                      className={
                        "form-control mb-0 " +
                        (errors.primary_contact_person ? "invalid" : "")
                      }
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">Emergency Number 1</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      maxLength={11}
                      onKeyPress={numberInput}
                      name="primary_contact_number"
                      placeholder="Number"
                      value={info.primary_contact_number}
                      onChange={onTextChange}
                      className={
                        "form-control mb-0 " +
                        (errors.primary_contact_number ? "invalid" : "")
                      }
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">Emergency Contact 2</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      maxLength={11}
                      name="secondary_contact_person"
                      placeholder="Name"
                      value={info.secondary_contact_person}
                      onChange={onTextChange}
                      className={
                        "form-control mb-0 "}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 my-auto">
                  <div className="basic-info-details">
                    <p className="mb-0">Emergency Number 2</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                  <div className="basic-info-details">
                    <input
                      type="text"
                      maxLength={11}
                      onKeyPress={numberInput}
                      name="secondary_contact_number"
                      placeholder="Number"
                      value={info.secondary_contact_number}
                      onChange={onTextChange}
                      className={"form-control mb-0 "}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*----------/cards details---------*/}
          </div>
          <div className="bg-white main-background">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="bg-white main-background">
                  <h5>{strings.Profileverification} &nbsp; ({info.user_document.length ? info.user_document[0].status == 0 ? 'Pending': info.user_document[0].status == 1 ? 'Accepted':'Rejected':'Upload'})</h5>
                  <p className="font-12 mb-0">{strings.uploadImageText}</p>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <label>{strings.passportNumber}</label>
                      <input
                          className={"form-control"}
                          placeholder={strings.EnterHere}
                          id="passport_number"
                          name="passport_number"
                          value={info.passport_number ? info.passport_number:''}
                          onChange={(e)=>setInfo({...info,['passport_number']:e.target.value})}
                      />
                    </div>
                  </div>
                  {/*<div className="form-group">*/}
                  {/*  <label>{strings.SelectIDcardtype}</label>*/}
                  {/*  <select className="form-control" id="card-type">*/}
                  {/*    <option>{strings.Passport}</option>*/}
                  {/*  </select>*/}
                  {/*</div>*/}
                  <div className="upload-doc profile-doc">
                    <div className="file">
                      <div>
                        <div>
                          <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="arrow-to-top"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              className="svg-inline--fa fa-arrow-to-top fa-w-12 fa-2x"
                          >
                            <path
                                fill="currentColor"
                                d="M35.5 279.9l148-148.4c4.7-4.7 12.3-4.7 17 0l148 148.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.1-.2L218 219.2V468c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V219.2l-93.7 97.1c-4.7 4.8-12.4 4.9-17.1.2l-19.6-19.6c-4.8-4.7-4.8-12.3-.1-17zM12 84h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v28c0 6.6 5.4 12 12 12z"
                            />
                          </svg>
                        </div>
                        {strings.clickToUpload}
                        <br />
                        {strings.idImage}
                        {/*{info.user_document.length == 0 ?  */}
                        {/*:info.user_document.length > 0 && info.user_document[0].status == 2 && <input*/}
                        {/*    type="file"*/}
                        {/*    accept=".png,.jpg,.jpeg,.doc"*/}
                        {/*    className="form-control"*/}
                        {/*    placeholder="passport_image"*/}
                        {/*    id="passport_image"*/}
                        {/*    alt="new"*/}
                        {/*    onChange={(e)=>onFileChange(e,1)}*/}
                        {/*/>}*/}
                        <input
                            accept=".png,.jpg,.jpeg,.doc,.pdf"
                            type="file"
                            className="form-control"
                            placeholder="passport_image"
                            id="passport_image"
                            alt="new"
                            onChange={(e)=>onFileChange(e,1)}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  {info.passport_image != '' && <button onClick={()=> window.open(info.passport_image,'_blank')} className="btn btn-primary">View passport</button>}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="bg-white main-background">
                  <h5>{strings.Liscenseverification} &nbsp; ({info.user_document.length > 1 ? info.user_document[1].status == 0 ? 'Pending': info.user_document[1].status == 1 ? 'Accepted':'Rejected':'Upload'})</h5>
                  <p className="font-12 mb-0">{strings.uploadliscenseText}</p>
                  <div className="form-group">
                    <div className="category-selection charge-select">
                      <label>{strings.LiscenseNumber}</label>
                      <input
                          className={"form-control"}
                          placeholder={strings.EnterHere}
                          id="liscense_number"
                          name="liscense_number"
                          value={info.liscense_number ? info.liscense_number:''}
                          onChange={(e)=>setInfo({...info,['liscense_number']:e.target.value})}
                      />
                    </div>
                  </div>
                  {/*<div className="form-group">*/}
                  {/*  <label>{strings.SelectIDcardtype}</label>*/}
                  {/*  <input*/}
                  {/*      className="form-control"*/}
                  {/*      placeholder="Liscense type"*/}
                  {/*      id="type"*/}
                  {/*      onChange={(e)=>onFileChange(e,1)}*/}
                  {/*  />*/}
                  {/*</div>*/}
                  <div className="upload-doc profile-doc">
                    <div className="file">
                      <div>
                        <div>
                          <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="far"
                              data-icon="arrow-to-top"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 384 512"
                              className="svg-inline--fa fa-arrow-to-top fa-w-12 fa-2x"
                          >
                            <path
                                fill="currentColor"
                                d="M35.5 279.9l148-148.4c4.7-4.7 12.3-4.7 17 0l148 148.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.1-.2L218 219.2V468c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V219.2l-93.7 97.1c-4.7 4.8-12.4 4.9-17.1.2l-19.6-19.6c-4.8-4.7-4.8-12.3-.1-17zM12 84h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v28c0 6.6 5.4 12 12 12z"
                            />
                          </svg>
                        </div>
                        {strings.clickToUpload}
                        <br />
                        {strings.idImage}
                        <input accept=".png,.jpg,.jpeg,.doc,.pdf" type="file" name="license_image" onChange={(e)=>onFileChange(e,2)} />
                      </div>
                    </div>
                  </div>
                  <hr />
                  {info.liscense_image != '' && <button onClick={()=> window.open(info.liscense_image,'_blank')} className="btn btn-primary">View certificate</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={openModal}
        dialogClassName="modal-dialog"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => promiseInfo.current.reject("rejected")}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <h6>Are you sure you want to save the profile details</h6>
              </div>
              <hr />
              <div className="row">
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 my-auto">
                  <div className="cancel-details" data-dismiss="modal">
                    <a onClick={() => promiseInfo.current.reject("rejected")}>
                      Cancel
                    </a>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 alignment">
                  <button
                    onClick={() => promiseInfo.current.resolve(true)}
                    className="btn btn-primary px-3 py-2 mr-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => promiseInfo.current.reject("rejected")}
                    className="btn btn-primary px-3 py-2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <UploadFileModal
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          path={uploadedFilePath}
          showModal={openCropper}
          zoomable={false}
          aspectRatio={1}
          setImage={(v) => uploadDoument(v)}
          preview=".img-preview"
          guides={false}
          viewMode={1}
          dragMode="move"
          cropBoxMovable={true}
          hideModal={() => setOpenCropper(false)}
      />
    </>
  );
};
export default BasicInfo;

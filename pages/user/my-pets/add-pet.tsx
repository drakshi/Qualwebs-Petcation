import { string } from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "..";
import { strings } from "../../../public/lang/Strings";
import CommonAction from "../../../redux/actions/CommonAction";
import { RootState } from "../../../redux/reducer";
import Select from "react-select";
import API from "../../../api/Api";
import Res from "../../../models/response.interface";
import I_BREED from "../../../models/breed.interface";
import I_PET from "../../../models/pet.interface";
import { AxiosResponse } from "axios";
import { gender, petSize, select } from "../../../public/appData/AppData";
import { useRouter } from "next/router";
import UploadFileModal from "../../../components/common/UploadfileModal";
import { dataURLtoFile } from "../../../utils/Helper";


const api = new API();
const AddPet = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pets = useSelector((state: RootState) => state.commonReducer.pets);
  const [id, setId] = useState<string | string[]>();
  const [breeds, setBreeds] = useState<I_BREED[]>([]);
  const [selectedPet, setSelectedPet] = useState<any>();
  const [selectedBreed, setSelectedBreed] = useState<I_BREED>();
  const [selectedImage, setSelectedImage] = useState<string>();
  const [selectedGender, setSelectedGender] = useState<any>();
  const [openCropper, setOpenCropper] = useState<boolean>(false);
  const [cropper, setCropper] = useState<any>();
  const [uploadedFilePath, setUploadedFilePath] = useState<any>();
  const [petDetails, setPetDetails] = useState<any>({
    pet_name: "",
    weight: "",
    age_year: "",
    age_month: "",
  });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    dispatch(CommonAction.getPets());
    if (router.query.id) {
      setId(router.query.id);
      getSinglePet(router.query.id);
    }
  }, []);

  useEffect(() => {
    if (selectedPet) {
      getBreed();
    } else {
      setBreeds([]);
    }
  }, [selectedPet]);

  useEffect(() => {
    setErrors({ ...errors, breed_id: null, sex: null });
  }, [selectedBreed, selectedGender]);

  const getBreed = () => {
    let data = JSON.stringify({ pet_type: selectedPet });
    api
      .getBreedWithType(data)
      .then((response: AxiosResponse<Res<I_BREED[]>>) => {
        setBreeds(response.data.response);
      })
      .catch((error) => console.log(error));
  };

  const setPet = (event) => {
    setSelectedPet(event.target.value);
    setErrors({ ...errors, pet_type: null });
  };

  const getOptionValue = (option) => {
    return option.id;
  };

  const getOptionLabel = (option) => {
    return option.breed;
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
      console.log("called");
      if (files[0]) {
        reader.readAsDataURL(files[0]);
        setOpenCropper(true);
      }
    }
  };

  const onTextChange = (event) => {
    setPetDetails({ ...petDetails, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: null });
  };

  const addPet = () => {
    const data = JSON.stringify({
      pet_type: selectedPet,
      pet_image: selectedImage,
      pet_name: petDetails.pet_name,
      weight: petDetails.weight.value,
      age_year: petDetails.age_year,
      age_month: petDetails.age_month,
      breed_id: selectedBreed ? selectedBreed.id : null,
      sex: selectedGender ? selectedGender.value : null,
    });

    api
      .addPet(data)
      .then((response) => {
        router.back();
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
        console.log(error.response.data.errors);
      });
  };

  const updatePet = async () => {
    const data = JSON.stringify({
      pet_type: selectedPet,
      pet_image: selectedImage,
      pet_name: petDetails.pet_name,
      weight: petDetails.weight.value,
      age_year: petDetails.age_year,
      age_month: petDetails.age_month,
      breed_id: selectedBreed ? selectedBreed.id : null,
      sex: selectedGender ? selectedGender.value : null,
    });

    api
      .updatePet(data, id)
      .then((response) => {
        router.back();
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
        console.log(error.response.data.errors);
      });
  };

  const getSinglePet = async (id) => {
    api
      .getSinglePets(id)
      .then((response: AxiosResponse<Res<I_PET>>) => {
        setPetDetails({
          pet_name: response.data.response.pet_name,
          weight: {
            value: response.data.response.weight.id,
            label: response.data.response.weight.name,
          },
          age_year: response.data.response.age_year,
          age_month: response.data.response.age_month,
        });
        setSelectedImage(response.data.response.pet_image);
        setSelectedPet(response.data.response.pet_type.id);
        setSelectedBreed(response.data.response.breed);
        setSelectedGender(
          response.data.response.sex == 0 ? gender[0] : gender[1]
        );
      })
      .catch((error) => console.log(error));
  };

  const handlePetSizeChange = (petSize: select) => {
    setErrors({ ...errors, weight: null });
    setPetDetails({ ...petDetails, weight: petSize });
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: 14,
    }),

    control: (provided) => ({
      ...provided,
      width: 140,
    }),
    singleValue: (provided, state) => {
      return { ...provided, fontSize: 12, color: "#383838", fontWeight: "500" };
    },
  };

  return (
    <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
      <div className="bg-white main-background">
        <h4 className="font-20 font-semibold mb-3">
          {id ? "Edit Pet" : strings.Addnewpet}
        </h4>
        <div className="booking-for ms-0">
          <div className="add-pet-details">
            <h5 className="font-medium">{strings.Ihave}</h5>
            {pets.map((item, index) => (
              <div key={index} className="custom-check">
                <label className="check">
                  <input
                    type="radio"
                    className="class1"
                    name="selectedPet"
                    value={item.id}
                    checked={selectedPet == item.id}
                    onClick={setPet}
                  />
                  <span className="checkmark" />
                  {item.name}
                </label>
              </div>
            ))}
            {errors.pet_type ? (
              <span
                style={{
                  color: "#ff0000",
                  fontSize: "12px",
                }}
              >
                {"Please Select Pet"}
              </span>
            ) : null}
            <div className="upload-doc">
              <div className="col-auto p-0 position-relative">
                {selectedImage ? (
                    <>
                  <img
                    className="file"
                    src={selectedImage}
                  />
                  <button className="btn btn-primary btn1 overflow-hidden position-relative">
                    Upload again
                    <input type="file" name="file" onChange={onFileChange} />
                  </button>
                  </>
                ) : (
                  <div className="file">
                    + <br />
                    Upload your pet’s picture
                    <input type="file" name="file" onChange={onFileChange} />
                  </div>
                )}
              </div>
            </div>
            {errors.pet_image ? (
              <span
                style={{
                  color: "#ff0000",
                  fontSize: "12px",
                }}
              >
                {"Please Select Pet Image"}
              </span>
            ) : null}

            <div className="upload-doc"></div>
            <hr/>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                <h6 className="font-14 mb-2">{strings.Name + "*"}</h6>
                <div className="form-group">
                  <input
                    className={
                      "form-control " + (errors.pet_name ? "invalid" : "")
                    }
                    id="pet-name"
                    value={petDetails.pet_name}
                    onChange={onTextChange}
                    name="pet_name"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-6 col-xl-3">
                <h6 className="font-14 mb-2">
                  {strings.Weight + "(kgs)*"}
                  <small className="text-danger">
                    {errors.weight ? "select Weight" : ""}
                  </small>
                </h6>
                <div className="form-group">
                  <Select
                    onChange={handlePetSizeChange}
                    value={petDetails.weight}
                    isSearchable={false}
                    options={petSize}
                    isMulti={false}
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-6 col-xl-4">
                <h6 className="font-14 mb-2">{strings.Age + "*"}</h6>
                <div className="form-row">
                  <div className="form-group col-6 col-sm-6">
                    <input
                      className={
                        "form-control " + (errors.age_year ? "invalid" : "")
                      }
                      value={petDetails.age_year}
                      onChange={onTextChange}
                      id="year"
                      maxLength={2}
                      name="age_year"
                      type="text"
                      placeholder="Yr."
                    />
                  </div>
                  <div className="form-group col-6 col-sm-6">
                    <input
                      value={petDetails.age_month}
                      onChange={onTextChange}
                      className={
                        "form-control " + (errors.age_month ? "invalid" : "")
                      }
                      maxLength={2}
                      id="month"
                      name="age_month"
                      type="text"
                      placeholder="Mo."
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-8">
                <h6 className="font-14 mb-2">{strings.Bread + "*"}</h6>
                <div className="form-group">
                  <Select
                    isSearchable={true}
                    value={selectedBreed}
                    getOptionValue={getOptionValue}
                    getOptionLabel={getOptionLabel}
                    options={breeds}
                    styles={
                      errors.breed_id
                        ? {
                            control: (provided) => ({
                              ...provided,
                              borderColor: "#ff0000",
                            }),
                          }
                        : {}
                    }
                    noOptionsMessage={() =>
                      selectedPet ? "Not Found" : "Select Pet First"
                    }
                    placeholder={"Type Here to search Breed"}
                    onChange={setSelectedBreed}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <h6 className="font-14 mb-2">{strings.Sex + "*"}</h6>
                <Select
                  value={selectedGender}
                  onChange={setSelectedGender}
                  options={gender}
                  isSearchable={false}
                  styles={
                    errors.sex
                      ? {
                          control: (provided) => ({
                            ...provided,
                            borderColor: "#ff0000",
                          }),
                        }
                      : {}
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <button onClick={id ? updatePet : addPet} className="btn btn-primary">
          {strings.Save}
        </button>
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
          setErrors({ ...errors, pet_image: null });
          formData.append("path", "pets");
          api
            .uploadFile(formData)
            .then((json) => {
              setSelectedImage(json.data.response);
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
};

AddPet.getLayout = function (page) {
  return <User>{page}</User>;
};

export default AddPet;

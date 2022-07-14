import React, { useState } from "react";
import { useEffect } from "react";
import API from "../../../api/Api";
import { strings } from "../../../public/lang/Strings";

const api = new API();
export default function Gener(props: any) {
  const [category, setCategory] = useState<string>("1");
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    getPetSpotCategories();
  }, []);

  useEffect(() => {
    if (props.data) {
      setCategory(props.data.category_id);
    }
  }, [props]);

  const getPetSpotCategories = () => {
    api
      .getPetSpotsCategory()
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((error) => {});
  };
  return (
    <div className="select-spot-category content-padding">
      <h5 className="font-semibold">
        {strings.Gener} <span className="sign">*</span>
      </h5>
      <div className="pl-1">
        <h6 className="font-medium">{strings.Selectspotcategory}</h6>
        {categories.map((value) => (
          <div className="custom-check mb-1">
            <label className="check ">
              <input
                type="radio"
                name="is_name1"
                value={value.id}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                checked={value.id == category}
              />
              <span className="checkmark" />
              {value.name}
            </label>
          </div>
        ))}
      </div>
      <a>
        <button
          onClick={() => {
            props.updateBasicInfo({ category_id: category });
            props.changePage(2);
          }}
          className="btn btn-primary mt-3"
        >
          Save &amp; proceed
        </button>
      </a>
    </div>
  );
}

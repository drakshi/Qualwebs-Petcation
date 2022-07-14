import React from "react";
import { I_SINGLE_SITTER } from "../../models/sitter.interface";
import { pet } from "../../public/appData/AppData";
import { strings } from "../../public/lang/Strings";

interface IProps {
  pets: any;
}

const MyPets: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="bg-white main-background">
      <h5 className="font-semibold mb-3 font-20">{strings.Mypets}</h5>
      <div className="row">
        {props.pets ? props.pets.map((value, index) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="mypet-details">
                <div className="mb-2">
                  <img src={value.pet_image} className="img-fluid" />
                </div>
                <h6 className="mb-0">
                  {value.pet_name + "  "}
                  <span className="text-muted">
                    {value.age_year + " years old"}
                  </span>
                </h6>
                <p className="mb-0">
                  {value.breed.breed + " , " + value.weight + "kgs"}
                </p>
              </div>
            </div>
          );
        }):<div className="text-center padding">
            <p className="font-13 mb-0 font-italic">{strings.noPets}</p>
        </div>}
      </div>
    </div>
  );
};

export default MyPets;

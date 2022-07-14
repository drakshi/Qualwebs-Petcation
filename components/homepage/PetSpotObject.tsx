import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

type IProps = {
  name: string;
  descriptiom: string;
  image?: string,
  id: number
};

const PetSpotObject: React.FC<IProps> = (props: IProps) => {
  const router = useRouter();
  return (
    <div
      style={{ width: "336.667px", marginRight: "50px" }}
      className="owl-item "
    >
      <div className="slider-item">
        <div className="slider-img">
          <img src={props.image ? props.image:"images/img2.jpg"} className="img-fluid" />
        </div>
        <div className="slider-content p-2">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
              <div className="exp-sitter-details mt-1">
                <h6 className="mb-2 font-14 font-semibold">{props.name}</h6>
                <p className="mb-0 font-10">{props.descriptiom}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href={`/pet-spots/${props.id}`}>
            <button className="btn btn-primary w-100">View spot</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PetSpotObject;

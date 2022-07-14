import { strings } from "../../public/lang/Strings";
import React from "react";

export default function ExtraInfoLocality(props: any) {
  return (
    <div className="bg-white main-background about-place locality">
      <h5 className="font-semibold mb-3 font-20">
        {strings.Extrainfoaboutlocality}
      </h5>
      <p className="locality-describe">{props.address.description}</p>
      <div>
        {props.address.live_in_house == 1 ? <p>Lives in a House</p> : null}
        {props.address.non_smoking_household == 1 ? (
          <p>Non-Smoking Household</p>
        ) : null}
        {props.address.no_children_present == 1 ? (
          <p>No Children Present</p>
        ) : null}
        {props.address.fenced_yard == 1 ? <p>Has a Fenced Yard</p> : null}
        {props.address.dog_other_pets == 1 ? <p>Has pet.</p> : null}
      </div>
    </div>
  );
}

import React from "react";
import User from "./index";
import SpotObject from "../../components/user/mySpots/SpotObject";
import { spots } from "../../public/appData/AppData";
import { strings } from "../../public/lang/Strings";
import Link from "next/dist/client/link";
import API from "../../api/Api";
import SpotObjectWeb from "../../components/petSpot/searchSpot/SpotObjectWeb";

type T_SPOT = {
  spot: {
    spot_id: number;
    id: number;
    spot_name: string;
    address: string;
    city: string;
    postal_code: number;
    created_at: string;
    overall_rate: number;
    total_review: number;
    repeat_client: number;
    images: {
      path: string;
    }[];
    user_id: number;
  }
};

const api = new API();
export default class FavoriteSpots extends React.Component<{}, { spots: T_SPOT[] }> {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
    };
  }
  componentDidMount() {
    this.getSpots();
  }

  getSpots = () => {
    api
      .getFavoriteSpots()
      .then((res) => {
        this.setState({
          spots: res.data.response,
        });
      })
      .catch((error) => {});
  };

  render() {
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8  column1">
        <div className="bg-white main-background">
          <h4 className="font-20 font-semibold mb-3">{strings.Spots}</h4>
          {this.state.spots.map((value, index) => (
            <SpotObject
                type={2}
                key={index}
                spot={value}
                updateSpot={()=>this.getSpots()}
            />
          ))}
        </div>
      </div>
    );
  }
  static getLayout(page) {
    return <User>{page}</User>;
  }
}

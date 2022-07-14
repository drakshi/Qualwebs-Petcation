import React from "react";
import User from "..";
import SpotObject from "../../../components/user/mySpots/SpotObject";
import { strings } from "../../../public/lang/Strings";
import Link from "next/dist/client/link";
import API from "../../../api/Api";
import AddPetSpot from "./add-pet-spot";


type T_SPOT = {
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

interface I_PROPS {
    openSnackbar: null;
}

const api = new API();
 export  default  class MySpots extends React.Component<I_PROPS, { spots: T_SPOT[] }> {
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
      .getAllSpots()
      .then((res) => {
        this.setState({
          spots: res.data.response,
        });
         // this.props.openSnackbar(res.data.message);
      })
      .catch((error) => {});
  };

  deletePetSpot = (val) => {
    api
      .deleteSpot(val)
      .then((res) => {
        this.getSpots();

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
                type={1}
                key={index}
              deleteSpot={this.deletePetSpot.bind(this)}
              spot={value}
                updateSpot={()=>this.getSpots()}
            />
          ))}
          {this.state.spots.length > 0 ? <Link href="/user/my-spots/add-pet-spot">
            <a href="javascript:void(0)">
              <button className="btn btn-primary">{strings.Addnewspot}</button>
            </a>
          </Link>:<AddPetSpot/>}
        </div>
      </div>
    );
  }
  static getLayout(page) {
    return <User>{page}</User>;
  }
}

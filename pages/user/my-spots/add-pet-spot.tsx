import React from "react";
import User from "..";
import API from "../../../api/Api";
import Gener from "../../../components/user/mySpots/Gener";
import SpotBasicInfo from "../../../components/user/mySpots/SpotBasicInfo";
import SpotBudget from "../../../components/user/mySpots/SpotBudget";
import SpotDetailedInfo from "../../../components/user/mySpots/SpotDetailedInfo";
import SpotImages from "../../../components/user/mySpots/SpotImages";
import SpotTransportation from "../../../components/user/mySpots/SpotTransportation";
import { strings } from "../../../public/lang/Strings";
import SuccessView from "../../../components/user/mySpots/SuccessView";

type I_BASIC_INFO = {
  category_id: number;
  spot_name: string;
  english_name: string;
  phone_number: string;
  address: string;
  postal_code: string;
  city: string;
  latitude: string;
  longitude: string;
};
interface IState {
  count: number;
  data: {
    basic_info: I_BASIC_INFO;
    operations: {
      means_of_transport: string;
      business_hours: string;
      regular_holidays: string;
      is_open_on_sunday: number;
    };
    budgets: {
      night_charge_id: number;
      noon_charge_id: number;
      payment_method_id: number;
      service_charge: number;
    };
    amenities: {
      available_pets: number[];
      reservation_type_id: number;
      reservation_info: string;
      smoking_cessation_id: number;
      smoking_cessation_info: string;
      parking_id: number;
      parking_info: string;
      service_amenities_id: number;
      service_amenities_info: string;
      language_id: number;
      language_info: string;
      homepage: string;
      facebook_url: string;
      instagram_url: string;
      twitter_url: string;
      remark: string;
    };
    images: string[];
  };
}

const api = new API();
class AddPetSpot extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: {
        basic_info: {
          category_id: 1,
          spot_name: "",
          english_name: "",
          phone_number: "",
          address: "",
          postal_code: "",
          city: "",
          latitude: "",
          longitude: "",
        },
        operations: {
          means_of_transport: "",
          business_hours: "",
          regular_holidays: "",
          is_open_on_sunday: 0,
        },
        budgets: {
          night_charge_id: 1,
          noon_charge_id: 1,
          payment_method_id: 1,
          service_charge: 0,
        },
        amenities: {
          available_pets: [],
          reservation_type_id: 1,
          reservation_info: "",
          smoking_cessation_id: 1,
          smoking_cessation_info: "",
          parking_id: 1,
          parking_info: "",
          service_amenities_id: 1,
          service_amenities_info: "",
          language_id: 1,
          language_info: "",
          homepage: "",
          facebook_url: "",
          instagram_url: "",
          twitter_url: "",
          remark: "",
        },
        images: [],
      },
    };
    this.getPageByCount = this.getPageByCount.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage = (value) => {
    this.setState({
      count: value,
    });
  };

  updateBasicInfo = (value: any) => {
    this.setState(
      {
        data: {
          ...this.state.data,
          basic_info: {
            ...this.state.data.basic_info,
            ...value,
          },
        },
      } as any,
      () => console.log(this.state.data.basic_info)
    );
  };

  updateOperations = (value: any) => {
    this.setState(
      {
        data: {
          ...this.state.data,
          operations: { ...value },
        },
      },
      () => console.log(this.state.data.operations)
    );
  };

  updateBudget = (value: any) => {
    this.setState(
      {
        data: {
          ...this.state.data,
          budgets: { ...value },
        },
      },
      () => console.log(this.state.data.budgets)
    );
  };

  updateAmenities = (value: any) => {
    this.setState({
      data: {
        ...this.state.data,
        amenities: { ...value },
      },
    });
  };

  updateImages = (value: any) => {
    this.setState(
      {
        data: {
          ...this.state.data,
          images: value,
        },
      },
      () => this.callAddSpot()
    );
  };

  callAddSpot = () => {
    let that = this;
    api
      .addSpot(this.state.data)
      .then((res) => {
        that.changePage(7);
      })
      .catch((error) => {});
  };
  getPageByCount = () => {
    switch (this.state.count) {
      case 1:
        return (
          <Gener
            updateBasicInfo={this.updateBasicInfo.bind(this)}
            changePage={this.changePage}
          />
        );
      case 2:
        return (
          <SpotBasicInfo
            updateBasicInfo={this.updateBasicInfo.bind(this)}
            changePage={this.changePage}
          />
        );
      case 3:
        return (
          <SpotTransportation
            updateOperations={this.updateOperations.bind(this)}
            changePage={this.changePage}
          />
        );
      case 4:
        return (
          <SpotBudget
            updateBudget={this.updateBudget.bind(this)}
            changePage={this.changePage}
          />
        );
      case 5:
        return (
          <SpotDetailedInfo
            updateAmenities={this.updateAmenities.bind(this)}
            changePage={this.changePage}
          />
        );
      case 6:
        return <SpotImages updateImages={this.updateImages.bind(this)} />;
      case 7:
        return <SuccessView />;
    }
  };

  render() {
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8  column1">
        <div className="bg-white main-background px-0">
          <div className="mb-4">
            <div className="row content-padding mb-1">
              <div className="col-9 col-md-6 col-lg-6 col-xl-6">
                <h5 className="font-semibold">{strings.Createnewpetspot}</h5>
              </div>
              <div className="col-3 col-md-6 col-lg-6 col-xl-6 alignment">
                <h6 className="font-16 font-semibold">{`${this.state.count} of 6`}</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          {this.getPageByCount()}
        </div>
      </div>
    );
  }

  static getLayout(page) {
    return <User>{page}</User>;
  }
}

export default AddPetSpot;

import { AxiosResponse } from "axios";
import React from "react";
import User from "..";
import API from "../../../api/Api";
import Loader from "../../../components/common/Loader";
import ServiceObject from "../../../components/user/myService/ServiceObject";
import Res from "../../../models/response.interface";
import IService from "../../../models/service.interface";
import { myServices } from "../../../public/appData/AppData";
import { strings } from "../../../public/lang/Strings";

interface IState {
  services: IService[];
  loading: boolean;
}

const api = new API();
export default class MyServices extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      loading: true,
    };

    this.updateParentState = this.updateParentState.bind(this);
    this.getServices();
  }

  updateParentState = (attribute, value, index) => {
    let services = [...this.state.services];
    let item = { ...services[index] };
    item[attribute] = value;
    services[index] = item;
    this.setState({ services });
  };

  getServices = async () => {
    let that = this;
    api
      .getService()
      .then((response: AxiosResponse<Res<IService[]>>) => {
        that.setState({
          services: response.data.response,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8  column1">
        <div className="bg-white main-background">
          <h4 className="font-20 font-semibold mb-1">
            {strings.Whichserviceswouldyouliketooffer}
          </h4>
          <p className="font-12">{strings.Setservicestocative}</p>
          {this.state.loading ? (
            <Loader />
          ) : (
            this.state.services.map((value, index) => {
              return (
                <ServiceObject
                  key={`s${index}`}
                  index={index}
                  service={value}
                />
              );
            })
          )}
          <div className="text-right mt-5">
            <button className="btn btn-primary">
              {strings.SaveandContinue}
            </button>
          </div>
        </div>
      </div>
    );
  }
  static getLayout(page) {
    return <User>{page}</User>;
  }
}

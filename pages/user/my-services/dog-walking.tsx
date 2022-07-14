import React from "react";
import User from "..";
import ServiceDiscount from "../../../components/user/myService/common/ServiceDiscount";
import ManageServiceHeader from "../../../components/user/myService/ManageServiceHeader";
import ServicePreference from "../../../components/user/myService/common/ServicePreference";
import API from "../../../api/Api";
import Tab from "react-bootstrap/Tab";
import ServiceFee from "../../../components/user/myService/common/ServiceFee";
import DropInPreference from "../../../components/user/myService/dropInVisits/DropInPreference";
import DropInServiceFee from "../../../components/user/myService/dropInVisits/DropInServiceFee";
import DropInDiscount from "../../../components/user/myService/dropInVisits/DropInDiscount";
import DogWalkingServiceFee from "../../../components/user/myService/dogWalking/DogWalkingServiceFee";
import DogWalkingDiscounts from "../../../components/user/myService/dogWalking/DogWalkingDiscounts";
import DogWalkingPreference from "../../../components/user/myService/dogWalking/DogWalkingPreference";

interface IState {
  selectedIndex: number;
}
export default class DogWalking extends React.Component<{}, IState> {
  private parent: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.parent = React.createRef();
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange = (index: number) => {
    this.setState(
      {
        selectedIndex: index,
      },
      () => {
        this.parent.current.scrollIntoView({ behavior: "smooth" });
      }
    );
  };

  render() {
    return (
      <div
        ref={this.parent}
        className="col-12 col-md-8 col-lg-8 col-xl-8 column1"
      >
        <div className="bg-white main-background single-service">
          <ManageServiceHeader
            service={"Dog Walking"}
            description={
              ""
            }
            index={this.state.selectedIndex}
            handleChangeIndex={this.handleTabChange}
          />

          <Tab.Container
            activeKey={this.state.selectedIndex}
            id="left-tabs-example"
            defaultActiveKey={0}
            transition={true}
          >
            <Tab.Content>
              <Tab.Pane eventKey={0}>
                <DogWalkingServiceFee
                  handleTabChange={this.handleTabChange.bind(this)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey={1}>
                <DogWalkingPreference
                  handleTabChange={this.handleTabChange.bind(this)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <DogWalkingDiscounts />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    );
  }

  static getLayout(page) {
    return <User>{page}</User>;
  }
}

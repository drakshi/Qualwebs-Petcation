import React from "react";
import User from "..";
import ServiceDiscount from "../../../components/user/myService/common/ServiceDiscount";
import ManageServiceHeader from "../../../components/user/myService/ManageServiceHeader";
import ServicePreference from "../../../components/user/myService/common/ServicePreference";
import Tab from "react-bootstrap/Tab";
import ServiceFee from "../../../components/user/myService/common/ServiceFee";
import HouseSittingPreference from "../../../components/user/myService/houseSitting/HouseSittingPreferences";

interface IState {
  selectedIndex: number;
}
export default class HouseSitting extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange = (index: number) => {
    this.setState({
      selectedIndex: index,
    });
  };

  render() {
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
        <div className="bg-white main-background single-service">
          <ManageServiceHeader
            service={"House Sitting"}
            description={
              "Select the pets you will be willing to service for house sitting."
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
                <ServiceFee
                  handleTabChange={this.handleTabChange}
                  serviceId={2}
                />
              </Tab.Pane>
              <Tab.Pane eventKey={1}>
                <HouseSittingPreference />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <ServiceDiscount serviceId={2} />
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

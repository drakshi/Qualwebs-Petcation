import React from "react";
import User from "..";
import ManageServiceHeader from "../../../components/user/myService/ManageServiceHeader";
import Tab from "react-bootstrap/Tab";
import GroomingServiceFee from "../../../components/user/myService/grooming/GroomingServiceFee";
import GroomingPreference from "../../../components/user/myService/grooming/GroomingPreference";
import GroomingDiscount from "../../../components/user/myService/grooming/GroomingDiscount";
import HouseCallServiceFee from "../../../components/user/myService/houseCall/HouseCallServiceFee";
import HouseCallPreference from "../../../components/user/myService/houseCall/HouseCallPreference";
import HouseCallDiscount from "../../../components/user/myService/houseCall/HouseCallDiscount";

export default class HouseCall extends React.Component<any, any> {
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
      <User>
        <div
          ref={this.parent}
          className="col-12 col-md-8 col-lg-8 col-xl-8 column1"
        >
          <div className="bg-white main-background single-service">
            <ManageServiceHeader
              service={"House call"}
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
                  <HouseCallServiceFee
                    handleTabChange={this.handleTabChange.bind(this)}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey={1}>
                  <HouseCallPreference
                    handleTabChange={this.handleTabChange.bind(this)}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey={2}>
                  <HouseCallDiscount />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </User>
    );
  }
}

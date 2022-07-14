import React from "react";
import User from ".";
import API from "../../api/Api";
import AddressInfo from "../../components/user/myProfile/AddressInfo";
import AvailabilityCalendar from "../../components/user/myProfile/AvailabilityCalendar";
import BasicInfo from "../../components/user/myProfile/BasicInfo";
import ProfileAvailability from "../../components/user/myProfile/ProfileAvailability";
import { strings } from "../../public/lang/Strings";
import { AxiosResponse } from "axios";
import Res from "../../models/response.interface";
import { deepClone } from "../../utils/Helper";
import I_AVIALABILITY, {
  availability,
} from "../../models/availability.interface";
import format from "date-fns/format";
import { addMonths, differenceInMonths, subMonths } from "date-fns";
import startOfMonth from "date-fns/startOfMonth";
import isSameMonth from "date-fns/isSameMonth";
import I_AVAILABLE_SERVICE from "../../models/availableService.interface";
import Tab from "react-bootstrap/Tab";
import AddQuestions from "../../components/user/myProfile/AddQuestion";

import Router from "next/router";

interface IState {
  selectedIndex: number;
  availableService: I_AVAILABLE_SERVICE[];
  calendarLoading: boolean;
  availability: availability[];
  currentMonth: Date;
  address: any;
  locality: any;
}

interface IProps {
}

const api = new API();
class MyProfile extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
      availableService: [],
      calendarLoading: false,
      availability: [],
      currentMonth: new Date(),
      address: null,
      locality: null,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
    this.getAvailableService();
    this.getAddress();
  }

  componentDidMount(): void {
    if(Router && Router.query.selectedIndex) {
      let index:any = Router.query.selectedIndex;
      this.setState({selectedIndex: parseInt(index)})
    }
  }

  setAvailableService = (weekID, serviceId, isAvailable, index) => {
    let that = this;
    let data = JSON.stringify({
      schedule_type: 1,
      weekday_id: weekID,
      services: [
        {
          service_id: serviceId,
          is_available: isAvailable ? 1 : 0,
          number_of_bookings: 1,
        },
      ],
    });
    let arrayData: I_AVAILABLE_SERVICE[] = deepClone(
      this.state.availableService
    );
    if (isAvailable) {
      arrayData[index].service.availability.push({ weekday_id: weekID });
    } else {
      let indexArray = arrayData[index].service.availability.findIndex(
        (value) => value.weekday_id == weekID
      );
      arrayData[index].service.availability.splice(indexArray, 1);
    }

    api
      .setAvailableService(data)
      .then((json) => {
        console.log(json.data.response);
        that.setState({
          availableService: arrayData,
        });
        that.getAvailability(format(this.state.currentMonth, "yyyy-MM"));
      })
      .catch((error) => console.log(error));
  };

  setDateAvailability = (startDate, endDate, services) => {
    let data = JSON.stringify({
      schedule_type: 2,
      start_date: format(startDate, "yyyy-MM-d"),
      end_date: format(endDate, "yyyy-MM-d"),
      services: services.map((v) => {
        v.service_id = v.service.id;
        v.is_available = 1;
        return v;
      }),
    });
    let that = this;
    api
      .setAvailableService(data)
      .then((json) => {
        console.log(json.data.response);

        that.getAvailability(format(this.state.currentMonth, "yyyy-MM"));
      })
      .catch((error) => console.log(error));
  };

  handleTabChange = (val) => {
    this.setState({
      selectedIndex: val,
    });
  };

  getAvailableService = () => {
    let that = this;
    api
      .getAvailableServices()
      .then((response: AxiosResponse<Res<I_AVAILABLE_SERVICE[]>>) => {
        that.setState({
          availableService: response.data.response,
        });
      })
      .catch((error) => console.log(error));
  };

  getAvailability = (date) => {
    let data = JSON.stringify({
      month: date,
    });
    let that = this;
    api
      .getAvailability(data)
      .then((response: AxiosResponse<Res<I_AVIALABILITY>>) => {
        that.setState({
          availability: response.data.response.data,
          calendarLoading: false,
        });
      })
      .catch((error) => {
        that.setState({
          calendarLoading: false,
        });
      });
  };

  nextMonth = () => {
    if (
      differenceInMonths(this.state.currentMonth, startOfMonth(new Date())) < 2
    ) {
      this.setState({
        currentMonth: addMonths(this.state.currentMonth, 1),
        calendarLoading: true,
      });
    }
  };

  prevMonth = () => {
    if (isSameMonth(new Date(), this.state.currentMonth) == false) {
      this.setState({
        currentMonth: subMonths(startOfMonth(this.state.currentMonth), 1),
        calendarLoading: true,
      });
    }
  };

  setUnavailble = (startDate, endDate, services) => {
    let data = JSON.stringify({
      schedule_type: 2,
      start_date: format(startDate, "yyyy-MM-d"),
      end_date: format(endDate, "yyyy-MM-d"),
      services: services.map((v) => {
        v.service_id = v.service.id;
        v.is_available = 0;
        v.number_of_bookings = 0;
        return v;
      }),
    });
    let that = this;
    api
      .setAvailableService(data)
      .then((json) => {
        console.log(json.data.response);

        that.getAvailability(format(this.state.currentMonth, "yyyy-MM"));
      })
      .catch((error) => console.log(error));
  };

  getAddress = async () => {
    let that = this;
    api
      .getAddress()
      .then((json) => {
        if (json.data.response) {
          let newData = json.data.response;
          that.setState({
            address: {
              house_number: json.data.response.house_number,
              address: json.data.response.address,
              city: json.data.response.city,
              longitude: json.data.response.longitude,
              latitude: json.data.response.latitude,
              postcode: json.data.response.postcode,
              hide_address: json.data.response.hide_address == 1 ? true : false,
              map_latitude: json.data.response.map_latitude,
              map_longitude: json.data.response.map_longitude,
            },
            locality: {
              description: newData.description,
              hide_address: newData.hide_address,
              live_in_house: newData.live_in_house,
              non_smoking_household: newData.non_smoking_household,
              no_children_present: newData.no_children_present,
              fenced_yard: newData.fenced_yard,
              dog_other_pets: newData.dog_other_pets,
            },
          });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
        <div className="bg-white main-background">
          <div className="row tabs-design">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <div className="pay-tabs">
                <ul
                  className="nav nav-tabs border-0 mb-0"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className={
                        this.state.selectedIndex === 1
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="cards-tab"
                      data-toggle="tab"
                      role="tab"
                      href="javascript:void(0)"
                      onClick={() => this.handleTabChange(1)}
                    >
                      {strings.basicinfo}
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      onClick={() => this.handleTabChange(2)}
                      className={
                        this.state.selectedIndex === 2
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="bank-tab"
                      role="tab"
                      href="javascript:void(0)"
                    >
                      {strings.AddressInfo}
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={
                        this.state.selectedIndex === 3
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="availability-tab"
                      onClick={() => this.handleTabChange(3)}
                      role="tab"
                      href="javascript:void(0)"
                    >
                      {strings.Availability}
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={
                        this.state.selectedIndex === 4
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="availability-tab"
                      onClick={() => this.handleTabChange(4)}
                      role="tab"
                      href="javascript:void(0)"
                    >
                      {"Add Questions"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Another Tab container for below components */}
          <Tab.Container
            activeKey={this.state.selectedIndex}
            id="left-tabs-example"
            defaultActiveKey={1}
            transition={true}
          >
            <Tab.Content>
              <Tab.Pane eventKey={1}>
                <BasicInfo />
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <AddressInfo
                  locality={this.state.locality}
                  address={this.state.address}
                />
              </Tab.Pane>
               <Tab.Pane mountOnEnter={true} eventKey={3}>
                <ProfileAvailability
                  availableService={this.state.availableService}
                  setAvailableService={this.setAvailableService.bind(this)}
                />
              </Tab.Pane>
              <Tab.Pane eventKey={4}>
                <AddQuestions />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <Tab.Container
          activeKey={this.state.selectedIndex}
          id="left-tabs-example"
          defaultActiveKey={1}
          transition={true}
        >
          <Tab.Content>
            <Tab.Pane eventKey={3}>
              <AvailabilityCalendar
                loading={this.state.calendarLoading}
                availability={this.state.availability}
                getAvailability={this.getAvailability.bind(this)}
                nextMonth={this.nextMonth.bind(this)}
                previousMonth={this.prevMonth.bind(this)}
                currentMonth={this.state.currentMonth}
                setUnavailable={this.setUnavailble.bind(this)}
                setDateAvailability={this.setDateAvailability.bind(this)}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
  static getLayout(page) {
    return <User>{page}</User>;
  }
}

export default MyProfile;
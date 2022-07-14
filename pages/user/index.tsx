import React from "react";
import API from "../../api/Api";
import { AxiosError, AxiosResponse } from "axios";
import IDashboardData from "../../models/dashboard.interface";
import SideBar from "../../components/user/SideBar";
import Res from "../../models/response.interface";
import { withSnackbar } from 'react-simple-snackbar'


const api = new API();
class User extends React.PureComponent<{}, IDashboardData> {
  constructor(props) {
    super(props);
    this.getDashboard();
  }


  getDashboard = async () => {
    api
      .getDashboard()
      .then((response: AxiosResponse<Res<IDashboardData>>) => {
        this.setState(response.data.response);
      })
      .catch((error: AxiosError) => {
        //console.log(error);
      });
  };

  render() {
    const { children } = this.props;

    return (
      <div className="main-page">
        <div className="main-wrapper my-3">
          <div className="container">
            <div className="row">
              <SideBar
                dashboard={this.state}
                getDashboard={this.getDashboard}
              />
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(User);

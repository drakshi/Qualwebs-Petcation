import React from "react";
import { strings } from "../../../public/lang/Strings";
import I_AVAILABLE_SERVICE from "../../../models/availableService.interface";
import { withSnackbar } from "react-simple-snackbar";

interface IState {
  availableService: I_AVAILABLE_SERVICE[];
}

interface IProps {
  availableService: I_AVAILABLE_SERVICE[];
  setAvailableService: (weekID, serviceId, isAvailable, index) => void;
  openSnackbar: withSnackbar;
}

class ProfileAvailability extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      availableService: this.props.availableService,
    };
  }

  isChecked = (id, index) => {
    return this.state.availableService[index].service.availability.some(
      (mValue) => mValue.weekday_id == id
    );
  };

  componentDidMount(): void {

     if(this.state.availableService.length == 0){
        this.props.openSnackbar(strings.addServiceFirst);
      }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.availableService !== this.props.availableService) {
      this.setState({
        availableService: this.props.availableService,
      });
    }
  }
  render() {
    return (
      <div className="pay-tabs">
        <div className="available-details">
          <h5 className="font-semibold py-3">{strings.Defaultavailability}</h5>
          <div className="accordion">
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              {this.state.availableService.map((value, index) => (
                <div key={index} className="panel panel-default availability">
                  <div className="panel-heading" role="tab" id="heading1">
                    <h3 className="panel-title mb-0">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {value.service.name}
                      </a>
                    </h3>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className="panel-collapse collapse show"
                    role="tabpanel"
                    aria-labelledby="heading1"
                    style={{}}
                  >
                    <div className="panel-body content">
                      <div className="display">
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              type="checkbox"
                              className="class1"
                              name="is_name2"
                              defaultValue="dog"
                              checked={this.isChecked(2, index)}
                              onChange={(e) =>
                                this.props.setAvailableService(
                                  2,
                                  value.service.id,
                                  e.target.checked,
                                  index
                                )
                              }
                            />
                            <span className="checkmark" /> Monday
                          </label>
                        </div>
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              type="checkbox"
                              className="class1"
                              name="is_name2"
                              defaultValue="dog"
                              checked={this.isChecked(3, index)}
                              onChange={(e) =>
                                this.props.setAvailableService(
                                  3,
                                  value.service.id,
                                  e.target.checked,
                                  index
                                )
                              }
                            />
                            <span className="checkmark" /> Tuesday
                          </label>
                        </div>
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              type="checkbox"
                              className="class1"
                              name="is_name2"
                              defaultValue="dog"
                              checked={this.isChecked(4, index)}
                              onChange={(e) =>
                                this.props.setAvailableService(
                                  4,
                                  value.service.id,
                                  e.target.checked,
                                  index
                                )
                              }
                            />
                            <span className="checkmark" /> Wednesday
                          </label>
                        </div>
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              type="checkbox"
                              className="class1"
                              name="is_name2"
                              defaultValue="dog"
                              checked={this.isChecked(5, index)}
                              onChange={(e) =>
                                this.props.setAvailableService(
                                  5,
                                  value.service.id,
                                  e.target.checked,
                                  index
                                )
                              }
                            />
                            <span className="checkmark" /> Thursday
                          </label>
                        </div>
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              type="checkbox"
                              className="class1"
                              name="is_name2"
                              defaultValue="dog"
                              checked={this.isChecked(6, index)}
                              onChange={(e) =>
                                this.props.setAvailableService(
                                  6,
                                  value.service.id,
                                  e.target.checked,
                                  index
                                )
                              }
                            />
                            <span className="checkmark" /> Friday
                          </label>
                        </div>
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              type="checkbox"
                              className="class1"
                              name="is_name2"
                              defaultValue="dog"
                              checked={this.isChecked(7, index)}
                              onChange={(e) =>
                                this.props.setAvailableService(
                                  7,
                                  value.service.id,
                                  e.target.checked,
                                  index
                                )
                              }
                            />
                            <span className="checkmark" /> Saturday
                          </label>
                        </div>
                        <div className="custom-check">
                          <label className="check ">
                            <input
                              type="checkbox"
                              className="class1"
                              name="is_name2"
                              defaultValue="dog"
                              checked={this.isChecked(1, index)}
                              onChange={(e) =>
                                this.props.setAvailableService(
                                  1,
                                  value.service.id,
                                  e.target.checked,
                                  index
                                )
                              }
                            />
                            <span className="checkmark" /> Sunday
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(ProfileAvailability);

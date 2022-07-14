import { AxiosResponse } from "axios";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import User from "..";
import API from "../../../api/Api";
import Loader from "../../../components/common/Loader";
import I_PET from "../../../models/pet.interface";
import Res from "../../../models/response.interface";
import { strings } from "../../../public/lang/Strings";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const api = new API();

interface IState {
  pets: I_PET[];
  loading: boolean;
}


interface Iprops {
  router: any,
}

class MyPetsUser extends React.Component<Iprops, IState> {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      loading: true,
    };

    this.deletePet = this.deletePet.bind(this);
    this.getPets();
  }

  getPets = async () => {
    let that = this;
    api
      .getAllPets()
      .then((response: AxiosResponse<Res<I_PET[]>>) => {
        that.setState(
          {
            pets: response.data.response,
            loading: false,
          },
          () => {
            if (this.state.pets.length == 0) {
              Router.push("/user/my-pets/add-pet");
            }
          }
        );
      })
      .catch((error) => console.log(error));
  };

  deletePet = (id) => {
    confirmAlert({
      title: strings.deletePet,
      message: strings.areYouSure,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            api
                .deletePet(id)
                .then((response) => this.getPets())
                .catch((error) => console.log(error));
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  render() {
    return (
      <div className="col-12 col-md-8 col-lg-8 col-xl-8 column1">
        <div className="bg-white main-background">
          <h4 className="font-20 font-semibold mb-3">{strings.Mypets}</h4>
          {this.state.loading ? (
            <Loader />
          ) : (
            this.state.pets.map((value) => (
              <>
                <div className="row">
                  <div className="col-12 col-md-8 col-lg-8 col-xl-10">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="images">
                          <img src={value.pet_image} className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-sm-6 p-left my-auto d-none d-md-block d-lg-block d-xl-block">
                        <div className="mypet-details">
                          <h6 className="mb-0 font-20">{value.pet_name}</h6>
                          <p>{value.breed.breed}</p>
                          <p className="mb-0">{value.age_year + " yeas old"}</p>
                          <p className="mb-0">{value.weight.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4 col-xl-2 top">
                    <div className="row">
                      <div className="col-6 col-md-12 col-lg-12 col-xl-12 p-left my-auto d-block d-md-none d-lg-none d-xl-none">
                        <div className="mypet-details">
                          <h6 className="mb-0 font-20">
                            {value.pet_name} <span>{value.breed.breed}</span>
                          </h6>
                          <h6 className="mb-0 font-20">
                            {value.age_year +
                              "years old  " +
                              value.weight +
                              " lbs"}
                          </h6>
                        </div>
                      </div>
                      <div className="col-6 col-md-12 col-lg-12 col-xl-12">
                        <div className="dropdown pet-drop mob-drop">
                          <a
                            className="menu dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <div className="ellipse">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fal"
                                data-icon="ellipsis-h"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                className="svg-inline--fa fa-ellipsis-h fa-w-10 fa-2x"
                              >
                                <path
                                  fill="currentColor"
                                  d="M192 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm88-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-240 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
                                />
                              </svg>
                            </div>
                          </a>
                          <div
                            className="dropdown-menu  animate slideIn"
                            x-placement="bottom-end"
                            style={{
                              position: "absolute",
                              transform: "translate3d(73px, 0px, 0px)",
                              top: 0,
                              left: 0,
                              willChange: "transform",
                            }}
                          >
                            <Link
                              href={{
                                pathname: "/user/my-pets/add-pet",
                                query: { id: value.id },
                              }}
                            >
                              <a className="dropdown-item">{strings.Edit}</a>
                            </Link>
                            <hr className="my-2" />
                            <a
                              onClick={() => this.deletePet(value.id)}
                              className="dropdown-item"
                            >
                              {strings.Remove}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))
          )}

          <div className="d-none d-md-block d-lg-block d-xl-block">
            <Link href="/user/my-pets/add-pet">
              <a>
                <button className="btn btn-primary">{strings.Addnewpet}</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  static getLayout(page) {
    return <User>{page}</User>;
  }
}

export default MyPetsUser
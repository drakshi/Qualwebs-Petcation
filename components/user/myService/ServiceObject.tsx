import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import API from "../../../api/Api";
import IService from "../../../models/service.interface";
import { strings } from "../../../public/lang/Strings";
import { useSnackbar } from "react-simple-snackbar";
import { errorOptions } from "../../../public/appData/AppData";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";

interface IState {
  service: IService;
  index: number;
}

const api = new API();
const ServiceObject: React.FC<IState> = ({ service, index }: IState) => {
  const router = useRouter();
  const [active, setActive] = useState<1 | 0>(service.is_active);
  const [openError, closeError] = useSnackbar(errorOptions);
  const [serviceId, setServiceId] = useState<any>();
  const promiseInfo = useRef<any>({});
  const [openModal, setOpenModal] = useState<boolean>(false);

  const changeActive = (e) => {
    setActive(e.target.checked ? 1 : 0);
    handleActive(e.target.checked ? 1 : 0);
  };

  const handleActive = (val) => {
    let data = JSON.stringify({ is_active: val });
    var toggle;
    switch (service.id) {
      case 1:
        toggle = api.activeBoarding(data);
        break;
      case 2:
        toggle = api.activeHouseSitting(data);
        break;
      case 3:
        toggle = api.activeDropInVisits(data);
        break;
      case 4:
        toggle = api.activeDayCare(data);
        break;
      case 5:
        toggle = api.activePetWalking(data);
        break;
      case 6:
        toggle = api.activeGrooming(data);
        break;
      case 7:
        toggle = api.activeHouseCall(data);
        break;
    }

    toggle
      .then((json) => {
        setServiceId(json.data.response.id);
      })
      .catch((error) => {
        setActive(val == 1 ? 0 : 1);

        setOpenModal(true);
      });
  };

  const handleManage = () => {
    if (active == 1) {
      switch (service.id) {
        case 1:
          router.push(
            {
              pathname: "/user/my-services/boarding",
              query: {
                serviceId: service.sitter_service_id
                  ? service.sitter_service_id
                  : serviceId,
              },
            },
            "/user/my-services/boarding"
          );
          break;
        case 2:
          router.push(
            {
              pathname: "/user/my-services/house-sitting",
              query: {
                serviceId: service.sitter_service_id
                  ? service.sitter_service_id
                  : serviceId,
              },
            },
            "/user/my-services/house-sitting"
          );
          break;
        case 3:
          router.push(
            {
              pathname: "/user/my-services/drop-in-visits",
              query: {
                serviceId: service.sitter_service_id
                  ? service.sitter_service_id
                  : serviceId,
              },
            },
            "/user/my-services/drop-in-visits"
          );
          break;
        case 4:
          router.push(
            {
              pathname: "/user/my-services/pet-day-care",
              query: {
                serviceId: service.sitter_service_id
                  ? service.sitter_service_id
                  : serviceId,
              },
            },
            "/user/my-services/drop-in-visits"
          );
          break;
        case 5:
          router.push(
            {
              pathname: "/user/my-services/dog-walking",
              query: {
                serviceId: service.sitter_service_id
                  ? service.sitter_service_id
                  : serviceId,
              },
            },
            "/user/my-services/dog-walking"
          );
          break;
        case 6:
          router.push(
            {
              pathname: "/user/my-services/grooming",
              query: {
                serviceId: service.sitter_service_id
                  ? service.sitter_service_id
                  : serviceId,
              },
            },
            "/user/my-services/grooming"
          );
          break;
        case 7:
          router.push(
            {
              pathname: "/user/my-services/house-call",
              query: {
                serviceId: service.sitter_service_id
                  ? service.sitter_service_id
                  : serviceId,
              },
            },
            "/user/my-services/house-call"
          );
          break;
      }
    } else {
      openError(service.name + " is not active");
    }
  };

  return (
    <>
      <div className="service-content">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-9 col-xl-10">
            <div className="row">
              <div className="col-1 col-md-2 col-lg-2 col-xl-1">
                <img src={service.icon} className="service-icons" />
              </div>
              <div className="col-10 col-md-10 col-lg-10 col-xl-11 my-auto">
                <div className="boarding-details">
                  <h6 className="mb-1">{service.name}</h6>
                  <p className="mb-2">{service.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-10 col-xl-11 offset-md-1 offset-lg-1 offset-xl-1">
                <div className="list">
                  {service.features.map((value, index) => (
                    <p key={"k" + index} className="mb-1 font-14 font-medium">
                      {value.feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 col-xl-2">
            <div className="on-off-toggle">
              <input
                name={"xya" + index}
                className="on-off-toggle__input"
                type="checkbox"
                id={`active${index}`}
                checked={active == 1}
                onChange={changeActive}
              />
              <label
                htmlFor={`active${index}`}
                className="on-off-toggle__slider"
              />
              <p className="font-8 mb-0">{strings.ACTIVE}</p>
            </div>

            <div className="manage-btn">
              <a onClick={handleManage}>
                <button className="btn btn-primary px-2 py-1 border-btn">
                  {strings.Manage}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={openModal}
        dialogClassName="modal-dialog"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Complete your profile</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setOpenModal(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div>
                <h6>To add the services please complete the profile.</h6>
              </div>
              <hr />
              <div className="row">
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 my-auto">
                  <div className="cancel-details" data-dismiss="modal">
                    <a onClick={() => setOpenModal(false)} href="#">
                      Cancel
                    </a>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-6 col-xl-6 alignment">
                  <Link href="/user/my-profile">
                    <a>
                      <button className="btn btn-primary px-3 py-2">
                        Go to profile
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default React.memo(ServiceObject);

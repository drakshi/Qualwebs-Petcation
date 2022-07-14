import Link from "next/link";
import React from "react";
import { strings } from "../../../public/lang/Strings";

interface IProps {
  service: string;
  description: string;
  index: number;
  handleChangeIndex: (number: number) => void;
}

const ManageServiceHeader: React.FC<IProps> = ({
  service,
  description,
  index,
  handleChangeIndex,
}: IProps) => {
  return (
    <div>
      <nav
        aria-label="breadcrumb"
        className="d-none d-md-block d-lg-block d-xl-block"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/user/my-services">
              <a>
                <i className="fas fa-angle-left" /> {strings.Allservices}
              </a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {service}
          </li>
        </ol>
      </nav>
      <div className="service-title d-none d-md-block d-lg-block d-xl-block">
        <h5 className="font-20 font-semibold">
          {strings.Manage + " " + service + " " + strings.Service}
        </h5>
        <p className="font-semibold text-muted font-14 mb-0">
          {strings.Whatis + " " + service + " " + strings.onPetcation}
        </p>
        <p className="mb-0 font-12">{description}</p>
      </div>
      <div className="d-none d-md-block d-lg-block d-xl-block">
        <div className="pay-tabs">
          <ul className="nav nav-tabs mb-0" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (index == 0 ? " active" : "")}
                id="cards-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-selected={index == 0 ? true : false}
                onClick={() => handleChangeIndex(0)}
              >
                {strings.ServiceAndFees}
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (index == 1 ? " active" : "")}
                id="bank-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-selected={index == 1 ? true : false}
                onClick={() => handleChangeIndex(1)}
              >
                {strings.Preferences}
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={"nav-link " + (index == 2 ? " active" : "")}
                id="availability-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-selected={index == 2 ? true : false}
                onClick={() => handleChangeIndex(2)}
              >
                {strings.Discounts}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceHeader;

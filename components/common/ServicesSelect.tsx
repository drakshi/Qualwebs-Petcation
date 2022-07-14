import React from "react";

type IProps = {
  name: string;
  description: string;
  id: number;
  innerProps: object;
  innerRef: object;
};

const ServicesSelect: React.FC<IProps> = ({ name, description, id }) => {
  return (
    <div className="row mb-2">
      <div className="col-auto my-auto">
        <div className="icons">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="briefcase"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-briefcase fa-w-16 fa-2x"
          >
            <path
              fill="currentColor"
              d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="col pd-left">
        <div className="boarding-details">
          <h6 className="font-12 mb-1 font-semibold">{name}</h6>
          {/* <p className="mb-0 font-normal font-12">{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesSelect;

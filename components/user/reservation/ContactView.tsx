import { useRouter } from "next/router";
import React from "react";
import I_SITTER_RESERVATION from "../../../models/sitterReservations.interface";

interface I_PROPS {
  data: I_SITTER_RESERVATION;
}
const ContactView: React.FC<I_PROPS> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="d-flex justify-content-end vector-icon">
      <div className="ellipse">
        <svg
          onClick={() =>
            router.push({ pathname: "/chat", query: { id: data.id } }, "/chat")
          }
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="comment-alt-lines"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-inline--fa fa-comment-alt-lines fa-w-16 fa-2x"
        >
          <path
            fill="currentColor"
            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288zm-96-216H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"
          />
        </svg>
      </div>
      <div className="ellipse">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="phone-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="svg-inline--fa fa-phone-alt fa-w-16 fa-2x"
        >
          <path
            fill="currentColor"
            d="M484.25 330l-101.59-43.55a45.86 45.86 0 0 0-53.39 13.1l-32.7 40a311.08 311.08 0 0 1-124.19-124.12l40-32.7a45.91 45.91 0 0 0 13.1-53.42L182 27.79a45.63 45.63 0 0 0-52.31-26.61L35.5 22.89A45.59 45.59 0 0 0 0 67.5C0 313.76 199.68 512.1 444.56 512a45.58 45.58 0 0 0 44.59-35.51l21.7-94.22a45.75 45.75 0 0 0-26.6-52.27zm-41.59 134.09C225.08 463.09 49 287 48 69.3l90.69-20.9 42.09 98.22-68.09 55.71c46.39 99 98.19 150.63 197 197l55.69-68.11 98.19 42.11z"
          />
        </svg>
      </div>
      <div className="ellipse">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="exclamation-triangle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="svg-inline--fa fa-exclamation-triangle fa-w-18 fa-2x"
        >
          <path
            fill="currentColor"
            d="M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ContactView;

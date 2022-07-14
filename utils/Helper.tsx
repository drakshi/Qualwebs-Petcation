import cookies from 'next-cookies'


export function deepClone(data) {
  return JSON.parse(JSON.stringify(data));
}

export function getPercent(val) {
  return val * 0.8;
}

export function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const getServiceObject = (id) => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [
      {
        capacity: 1,
        pet_size_id: 1,
        service_charge: "1000",
        earning_amount: "800",
      },
    ],
  };
};

export const getDropInServiceObject = (id) => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [
      {
        capacity: 1,
        pet_size_id: 1,
        service_charge: "1000",
        earning_amount: "800",
        duration: 30,
      },
    ],
  };
};

export const getGroomingServiceObject = (id) => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [
      {
        grooming_service_id: 1,
        service_charge: "1000",
        earning_amount: "800",
      },
    ],
  };
};

export const getHouseCallServiceObject = (id) => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [
      {
        medical_service_id: 1,
        service_charge: "1000",
        earning_amount: "800",
      },
    ],
  };
};

export const getCalendarSvg = (id) => {
  var svg;
  switch (id) {
    case 1:
      svg = (
        <h6 className="color1">
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
            ></path>
          </svg>
        </h6>
      );

      break;
    case 2:
      svg = (
        <h6 className="color2">
          <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home-lg-alt" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
               className="svg-inline--fa fa-home-lg-alt fa-w-18 fa-2x">
            <path fill="currentColor"
                  d="M573.48 219.91L310.6 8a35.85 35.85 0 0 0-45.19 0L2.53 219.91a6.71 6.71 0 0 0-1 9.5l14.2 17.5a6.82 6.82 0 0 0 9.6 1L64 216.72V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V216.82l38.8 31.29a6.83 6.83 0 0 0 9.6-1l14.19-17.5a7.14 7.14 0 0 0-1.11-9.7zM240 480V320h96v160zm240 0H368V304a16 16 0 0 0-16-16H224a16 16 0 0 0-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 0 1 8.4 0L480 191z"></path>
          </svg>
        </h6>
      );
      break;
    case 3:
      svg = (
        <h6 className="color3">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="pennant"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="svg-inline--fa fa-pennant fa-w-18 fa-2x"
          >
            <path
              fill="currentColor"
              d="M542.3 183.5c-21.9 4.8-104.7 14.1-246.4-62.8-74.6-40.4-137.5-50.4-186.7-48C121.5 33.7 90.9 0 56 0 25.1 0 0 25.1 0 56c0 22.3 13.2 41.4 32 50.4V504c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-75.6c80.8-54.3 156.4-55.7 165.8-56.2 28.2-1.4 74.5-5.9 135.1-19 4.4-1 109-24.5 188.9-124.7 16.1-20.2-1.5-50.3-27.5-45zM370.8 306.3c-57.5 12.4-101 16.6-127.4 18-69.6 3.5-125.6 26.3-163.4 47.9V124c44.1-8.6 109.6-6.3 193 38.9 101.4 54.9 177 69.8 225.9 71.5-61.8 56.6-127.4 71.7-128.1 71.9z"
            />
          </svg>
        </h6>
      );
      break;
    case 4:
      svg = (
        <h6 className="color4">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="cloud-sun-rain"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="svg-inline--fa fa-cloud-sun-rain fa-w-20 fa-2x"
          >
            <path
              fill="currentColor"
              d="M298.2 418.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zM192 140c26.4 0 48 20 51.1 45.6 4.8-3.6 9.8-6.9 15.1-9.9 1.5-8.4 3.9-16.5 6.8-24.3-14.3-25.7-41.5-43.4-73-43.4-46.2 0-83.7 37.6-83.7 83.8s37.5 83.8 83.7 83.8c.3 0 .6-.1.9-.1 1.1-11.4 3.7-22.4 7.7-32.8-2.8.5-5.6.9-8.5.9-28.5 0-51.7-23.2-51.7-51.7-.1-28.6 23.1-51.9 51.6-51.9zm-31.7 151.7c-3.6-5.3-9.9-8.1-16.4-6.8l-56 11.1L99 240c1.2-6.4-1.4-12.8-6.8-16.4l-47.4-31.8L92.2 160c5.4-3.6 8-10.1 6.8-16.4l-11.1-56 56 11.1c6.5 1.3 12.8-1.4 16.4-6.8L192 44.4l31.8 47.5c3.6 5.3 10 8.1 16.4 6.8L319.6 83c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.3-14.5-18.8-12.6l-68.9 13.6-39.2-58.5c-5.9-8.9-20.6-8.9-26.6 0l-39.1 58.5-69-13.7c-5.3-1.1-10.7.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.5l13.7 69-58.4 39.1c-4.4 3-7.1 7.9-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3l58.4 39.1-13.7 69c-1 5.3.6 10.7 4.4 14.5 3.8 3.8 9 5.5 14.4 4.4l68.9-13.7 39.1 58.5c3.1 4.6 8.2 7.1 13.3 7.1 3.1 0 6.2-.9 8.9-2.7 7.3-4.9 9.3-14.9 4.4-22.2l-44.9-67.4zm329.9 126.4c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm85.1-220.8C570 158.2 536.5 128 496 128c-8.6 0-17 1.4-25.2 4.3C451.1 109.4 422.6 96 392 96c-56.5 0-102.7 45.3-104 101.6-37.8 13.3-64 49.3-64 90.4 0 52.9 43.1 96 96 96h224c52.9 0 96-43.1 96-96 0-41.3-26.6-77.6-64.7-90.7zM560 208.8zM544 352H320c-35.3 0-64-28.7-64-64 0-30.6 21.8-57 52-62.8l14.5-2.8-2-18c-.2-1.5-.4-2.9-.4-4.4 0-39.7 32.3-72 72-72 24.3 0 46.8 12.2 60.2 32.8l8.1 12.4 13-7.1c32.7-17.8 70.7 8.2 70.8 40.4l-.2 16.2 12.8 2.6c29.8 6 51.3 32.3 51.3 62.7-.1 35.3-28.8 64-64.1 64zm42.2 66.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm-192 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8z"
            ></path>
          </svg>
        </h6>
      );
      break;
    case 5:
      svg = (
        <h6 className="color5">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="dog-leashed"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="svg-inline--fa fa-dog-leashed fa-w-18 fa-2x"
          >
            <path
              fill="currentColor"
              d="M544,112v64a64,64,0,0,1-64,64H448V480a32,32,0,0,1-32,32H352a32,32,0,0,1-32-32V384H224v96a32,32,0,0,1-32,32H128a32,32,0,0,1-32-32V320a95,95,0,0,1,13.46-48.26A80,80,0,0,1,32,192a16,16,0,0,1,32,0,48.05,48.05,0,0,0,48,48h27.05A95.48,95.48,0,0,1,192,224h79.94L34.88,26.45a8,8,0,0,1-1-11.27L44.11,2.88a8,8,0,0,1,11.27-1L304,209V48a16,16,0,0,1,16.12-16,15.67,15.67,0,0,1,11.2,4.72L358.6,64h69.62c10.92,0,23.74,7.93,28.62,17.69L464,96h64A16,16,0,0,1,544,112ZM288,256H192a64.07,64.07,0,0,0-64,64V480h64V352h96Zm128,26.48-96-24V352h32V480h64ZM512,128H444.22l-16-32H345.34L336,86.66V229.52l80,20V208h64a32,32,0,0,0,32-32Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,416,128Z"
            ></path>
          </svg>
        </h6>
      );
      break;
    case 6:
      svg = (
        <h6 className="color6">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="cut"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-cut fa-w-14 fa-2x"
          >
            <path
              fill="currentColor"
              d="M249.52 256L446.83 58.83a3.996 3.996 0 0 0 0-5.65c-12.5-12.5-32.76-12.5-45.25 0L224.06 230.56l-48.64-48.61C185.88 166.57 192 148 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c20.01 0 38.58-6.12 53.96-16.6l48.63 48.6-48.63 48.6C134.58 294.12 116.01 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-20-6.12-38.57-16.58-53.95l48.64-48.61 177.52 177.38c12.5 12.5 32.76 12.5 45.25 0a3.996 3.996 0 0 0 0-5.65L249.52 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
            ></path>
          </svg>
        </h6>
      );
      break;
    case 7:
      svg = (
        <h6 className="color7">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="house"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="svg-inline--fa fa-house fa-w-18 fa-2x"
          >
            <path
              fill="currentColor"
              d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"
            ></path>
          </svg>
        </h6>
      );
      break;
    case 8:
      svg = (
        <h6 className="">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="cut"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-cut fa-w-14 fa-2x"
          >
            <path
              fill="currentColor"
              d="M249.52 256L446.83 58.83a3.996 3.996 0 0 0 0-5.65c-12.5-12.5-32.76-12.5-45.25 0L224.06 230.56l-48.64-48.61C185.88 166.57 192 148 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c20.01 0 38.58-6.12 53.96-16.6l48.63 48.6-48.63 48.6C134.58 294.12 116.01 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-20-6.12-38.57-16.58-53.95l48.64-48.61 177.52 177.38c12.5 12.5 32.76 12.5 45.25 0a3.996 3.996 0 0 0 0-5.65L249.52 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
            />
          </svg>
        </h6>
      );
      break;
  }
  return svg;
};

export const numberInput = (event) => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export const  deleteCookie = (name) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}


export const getNameInitials = (name) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

  let initials = [...name.matchAll(rgx)] || [];

  initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();
  return initials;
};

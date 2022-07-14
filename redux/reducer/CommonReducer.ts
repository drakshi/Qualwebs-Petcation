import { R_PETS } from "../types";

let initailState = {
  pets: [],
};

let cloneObject = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

export default function reducer(state, action) {
  switch (action.type) {
    case R_PETS:
      initailState = cloneObject(state);
      if (action.data) {
        initailState = Object.assign({}, initailState, {
          pets: action.data,
        });
      }
      return initailState;
    default:
      return state || initailState;
  }
}

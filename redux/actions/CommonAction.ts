import API from "../../api/Api";
import { R_PETS } from "../types";

const api = new API();

const getPets = () => {
  return async (dispatch, getStore) => {
    const pets = getStore().commonReducer.pets;
    if (pets.length == 0) {
      api
        .getPets()
        .then((json) => {
          dispatch({
            type: R_PETS,
            data: json.data.response,
          });
        })
        .catch((error) => console.log(error));
    } else {
      return pets;
    }
  };
};

export default {
  getPets,
};

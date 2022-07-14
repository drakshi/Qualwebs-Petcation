import API from "../../api/Api";
import {K_GET_PET_SPOTS, K_GET_SPOT_CATEGORY} from "../types";
import Cookies from "universal-cookie";


const api = new API();

const getFeaturedSpots = (data,val) => {
    return async (dispatch, getStore) => {
        const pets = getStore().spotReducer.featuredSpots;
        if (pets.length == 0) {
            api.getPetSpots()
                .then((res) => {
                    dispatch({
                        type: K_GET_PET_SPOTS,
                        data: res.data.response,
                    });
                })
                .catch((error) => console.log(error));
        } else {
            return pets;
        }
    };
};

const getSpotCategory = (data,val) => {
    return async (dispatch, getStore) => {
        const category = getStore().spotReducer.spotCategory;
        if (category.length == 0) {
            api
                .getPetSpotsCategory()
                .then((res) => {
                    dispatch({
                        type: K_GET_SPOT_CATEGORY,
                        data: res.data.response,
                    });
                })
                .catch((error) => {});
        } else {
            return category;
        }
    };
};

export default {
    getFeaturedSpots,
    getSpotCategory
};

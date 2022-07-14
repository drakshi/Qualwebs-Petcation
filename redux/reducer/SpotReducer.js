import {K_GET_PET_SPOTS, K_GET_SPOT_CATEGORY} from "../types";

let initailState = {
    featuredSpots:[],
    spotCategory: []
};

let cloneObject = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};

export default function reducer(state, action) {
    switch (action.type) {
        case K_GET_PET_SPOTS:
            initailState = cloneObject(state);
            if (action.data) {
                initailState = Object.assign({}, initailState, {
                    featuredSpots: action.data,
                });
            }
            return initailState;
        case K_GET_SPOT_CATEGORY:
            initailState = cloneObject(state);
            if (action.data) {
                initailState = Object.assign({}, initailState, {
                    spotCategory: action.data,
                });
            }
            return initailState;
        default:
            return state || initailState;
    }
}

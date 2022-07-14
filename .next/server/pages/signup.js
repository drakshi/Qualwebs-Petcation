(() => {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./api/Api.ts":
/*!********************!*\
  !*** ./api/Api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ API)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./api/Constants.ts");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const baseURL = "http://54.151.160.83/petecation/public/api/"; //const baseURL = "http://192.168.1.26/petecation/public/api/";

const headers = token => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return headers;
};

const request = (method, path, body = null, ctx = null) => {
  const url = `${baseURL}${path}`;
  var token = null;
  const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_2___default())();
  token = cookies.get("token");

  if (token == null && ctx) {
    token = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);
  }

  var options = {
    method,
    url,
    headers: headers(token)
  };

  if (body) {
    options = Object.assign(options, {
      data: body
    });
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
};

class API {
  constructor() {
    _defineProperty(this, "getFormattedAddress", async id => {
      const apiUrl = `${_Constants__WEBPACK_IMPORTED_MODULE_1__.GOOGLE_PLACES_BASE_URL}/details/json?placeid=${id}&key=${_Constants__WEBPACK_IMPORTED_MODULE_1__.GOOGLE_PLACES_API}`;
      const result = await axios__WEBPACK_IMPORTED_MODULE_0___default().request({
        method: "post",
        url: apiUrl
      });
      return result;
    });
  }

  registerUser(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_USER_REGISTER, data);
  }

  loginUser(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_USER_LOGIN, data);
  }

  resetPassword(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_RESET_PASSWORD, data);
  }

  changePassword(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_CHANGE_PASSWORD, data);
  }

  forgotPassword(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_FORGOT_PASSWORD, data);
  }

  getDashboard() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_DASHBOARD);
  }

  getBasicInfo() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_BASIC_INFO);
  }

  getAddress() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_ADDRESS);
  }

  saveBasicInfo(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_SAVE_BASIC_INFO, data);
  }

  saveAddress(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_SAVE_ADDRESS, data);
  }

  addQuestion(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ADD_QUESTION, data);
  }

  deleteQuestion(val) {
    return request("DELETE", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DELETE_QUESTION + val);
  }

  getQuestions() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_QUESTIONS);
  }

  getSkills() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SKILLS);
  }

  getUserSkills() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_USER_SKILLS);
  }

  addSkill(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ADD_SKILL, data);
  }

  saveLocalityInfo(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_SAVE_LOCALITY, data);
  }

  savePortfolio(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_SAVE_PORTFOLIO, data);
  } //AVAILABILITY


  getAvailableServices() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_AVAILABLE_SERVICES);
  }

  setAvailableService(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_SET_AVAILABLE_SERVICES, data);
  }

  getAvailability(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_AVAILABILITY, data);
  }

  getAvailabilityByDate(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_AVAILABILITY_BY_DATES, data);
  } //MY PETS


  addPet(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ADD_PET, data);
  }

  getAllPets() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_ALL_PETS);
  }

  getSinglePets(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_SINGLE_PET + id);
  }

  updatePet(data, id) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_UPDATE_PET + id, data);
  }

  deletePet(id) {
    return request("DELETE", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DELETE_PET + id);
  } //Service


  getService() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SERVICES);
  }

  activeBoarding(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ACTIVE_BOARDING, data);
  }

  activeDayCare(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ACTIVE_DAY_CARE, data);
  }

  activeHouseSitting(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ACTIVE_HOUSE_SITTING, data);
  }

  activeDropInVisits(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ACTIVE_DROP_IN_VISITS, data);
  }

  activePetWalking(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ACTIVE_PET_WALKING, data);
  }

  activeGrooming(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ACTIVE_GROOMING, data);
  }

  activeHouseCall(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ACTIVE_HOUSE_CALL, data);
  } //House call


  getHouseCallInfo(val) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_HOUSE_CALL_INFO + val);
  }

  getHouseCallService(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_HOUSE_CALL_SERVICE, data);
  }

  houseCallServiceFee(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_HOUSE_CALL_SERVICE_FEE, data);
  }

  houseCallPreference(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_HOUSE_CALL_PREFERENCE, data);
  }

  houseCallDiscount(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_HOUSE_CALL_DISCOUNT, data);
  }

  getHouseCallPreview() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_HOUSE_CALL_PREVIEW);
  } //Grooming


  getGroomingService(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_PET_SERVICE, data);
  }

  getGroomingInfo(val) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_GROOMING_INFO + val);
  }

  groomingServiceFee(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GROOMING_SERVICE_FEE, data);
  }

  groomingServicePrefernce(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GROOMING_SERVICE_PREFERENCE, data);
  }

  groomingServiceDiscount(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GROOMING_SERVICE_DISCOUNT, data);
  }

  getGroomingPreview() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_GROOMING_PREVIEW);
  } //BOARDING


  boardingServiceFee(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_BOARDING_PET_SERVICE_FEE, data);
  }

  boardingPreference(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_BOARDING_PREFERENCE, data);
  }

  boardingDiscount(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_BOARDING_DISCOUNTS, data);
  }

  getBoardingInfo(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_BOARDING_INFO + id);
  }

  getBoardingPreview() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_BOARDING_PREVIEW);
  } //HOUSE SITTING


  getHouseSittingInfo(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_HOUSE_SITTING_INFO + id);
  }

  houseSittingServiceFee(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_HOUSE_SITTING_SERVICE_FEE, data);
  }

  houseSittingDiscount(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_HOUSE_SITTING_DISCOUNTS, data);
  }

  houseSittingPreference(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_HOUSE_SITTING_PREFERENCE, data);
  }

  getHouseSittingPreview() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_HOUSE_SITTING_PREVIEW);
  } //Drop in visits


  getDropInVisitsInfo(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_DROP_IN_VISITS_INFO + id);
  }

  dropInVisitsServiceFee(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DROP_IN_VISITS_SERVICE_FEE, data);
  }

  dropInVisitPreference(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DROP_IN_VISITES_PREFERENCE, data);
  }

  dropInVisitDiscounts(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DROP_IN_VISITS_DISCOUNTS, data);
  }

  getDropInVisitsPreview() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_DROP_IN_PREVIEW);
  } //Pet day care


  getPetDayCareInfo(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_DAY_CARE_INFO + id);
  }

  petDayCateServiceFee(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_DAY_CARE_SERVICE_FEES, data);
  }

  petDayCarePreference(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_DAY_CARE_PREFERENCE, data);
  }

  petDayCareDiscount(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_DAY_CARE_DISCOUNT, data);
  }

  getPetDayCarePreview() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_PET_DAY_CARE_PREVIEW);
  } //Dog walking


  getDogWalkingInfo(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DOG_WALKING_INFO + id);
  }

  DogWalkingServiceFee(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DOG_WALKING_SERVICE_FEE, data);
  }

  dogWalkingPreference(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DOG_WALKING_SERVICE_PREFERENCE, data);
  }

  dogWalkingDiscount(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DOG_WALKING_DISCOUNT, data);
  }

  getDogWalkingPreview() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_DOG_WALKING_PREVIEW);
  } //SITTER REQUEST


  petAdditionalServices(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_ADDITIONAL_REQUEST, data);
  }

  petAmountCalculation(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_AMOUNT_CALCULATION, data);
  }

  sitterRequest(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_REQUEST_SITTER, data);
  }

  changeRequestStatus(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_CHANGE_REQUEST_STATUS, data);
  }

  petServiceAvailability(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_SERVICE_AVAIALABILITY, data);
  } //DASHOBOARD


  getSitterReservetions(data, page) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SITTER_RESERVATIONS + "?page=" + page, data);
  }

  getUserReservations(data, page) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_USER_RESERVATIONS + "?page=" + page, data);
  } //CHAT


  sendMessage(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_SEND_MESSAGE, data);
  }

  chatAction(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_CHAT_ACTION, data);
  }

  getThreadBooking(val) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_THREAD_BOOKING + val);
  }

  arrangeMeetup(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ARRANG_MEETUP, data);
  }

  updateMeetupStatus(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_CHANGE_MEETUP_STATUS, data);
  }

  getMeetupRequest(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_MEETUPS + id);
  }

  getTransportChargeRequest(data) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_TRANSPORT_CHARGES + data);
  }

  addTransportChargeRequest(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ADD_TRANSPORT_CHARGES, data);
  }

  updateRequestStatus(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_UPDATE_REQUEST_STATUS, data);
  }

  updateReadStatus(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_READ_STATUS, data);
  } //COMMON


  getCoutires() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_COUTRIES);
  }

  getCities(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_CITIES + id);
  }

  getPets() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_PETS);
  }

  getBreedWithType(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_BREED_WITH_TYPE, data);
  }

  uploadFile(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_IMAGE_UPLOAD, data);
  }

  getFilteredAvialableSitter(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_FILTERED_AVAILABLE_SITTER, data);
  }

  getFavoriteSitters(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_FAVORITE_SITTER, data);
  }

  uploadProfilePicture(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_UPLOAD_PROFILE_PICTURE, data);
  }

  uploadDocument(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_UPLOAD_DOCUMENTS, data);
  } //Spots


  getPetSpotsCategory() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PET_SPOT_CATEGORIES);
  }

  getPetSpots(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_PET_SPOTS, data);
  }

  markUnmarkSpot(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_MARK_UNMARK_SPOT, data);
  }

  getPetSpotDetails(data) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_PET_SPOT_DETAILS + data);
  }

  getPaymentMethods() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_PAYMENT_METHODS);
  }

  getReservationTypes() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_RESERVATION_TYPES);
  }

  getSmokingCession() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SMOKING_CESSIONS);
  }

  getParking() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_PARKING);
  }

  getLangauges() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_LANGAUGES);
  }

  addSpot(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ADD_SPOT, data);
  }

  updateSpot(id, data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_UPDATE_SPOT + id, data);
  }

  rateSitter(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_RATE_SITTER, data);
  }

  getSingleSitter(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SINGLE_SITTER + id);
  }

  markUnmarkSitter(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_BOOKMARK_SITTER, data);
  }

  getAllSpots() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_ALL_SPOT);
  }

  getFavoriteSpots() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_FAVORITE_SPOT);
  }

  deleteSpot(val) {
    return request("DELETE", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DELETE_SPOT + val);
  }

  getSingleSpot(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SINGLE_SPOT + id);
  }

  getSitterAvailability(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SITTER_AVAILABILITY, data);
  }

  rateReviewSpot(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_REVIEW_SPOT, data);
  } //Payment and Bank account


  addNewCard(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ADD_CARD, data);
  }

  getAllCard() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_CARD);
  }

  deleteCard(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DELETE_CARD, data);
  }

  addNewBankAccount(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_ADD_BANK_ACCOUNT, data);
  }

  getAllBankAccount() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_BANK_ACCOUNT);
  }

  getAllBankAccountDetails() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_BANK_DETAILS);
  }

  markCardAsDefault(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_MAKE_CARD__DEFAULT, data);
  }

  makeBankAsDefault(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_MAKE_BANK_DEFAULT, data);
  }

  deleteBankAccount(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_DELETE_BANK_ACCOUNT + id);
  }

  getSingleRequestDetail(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_REQUEST_DETAIL + id);
  }

  confirmPayment(id, data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_CONFIRM_PAYMENT + id, data);
  }

  paymentHistory(data, page) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_PAYMENT_HISTORY + `?page=${page}`, data);
  }

  applyCoupon(data) {
    return request("POST", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_APPLY_COUPON, data);
  }

  removeCoupon(id) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_REMOVE_COUPON + id);
  }

  getCoupons(type) {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_COUPON + type);
  } //News


  getNews() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_NEWS);
  }

  getEvents() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_EVENT);
  }

  getSingleNews() {
    return request("GET", _Constants__WEBPACK_IMPORTED_MODULE_1__.U_GET_SINGLE_NEWS);
  }

}

/***/ }),

/***/ "./api/Constants.ts":
/*!**************************!*\
  !*** ./api/Constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U_USER_REGISTER": () => (/* binding */ U_USER_REGISTER),
/* harmony export */   "U_USER_LOGIN": () => (/* binding */ U_USER_LOGIN),
/* harmony export */   "U_GET_DASHBOARD": () => (/* binding */ U_GET_DASHBOARD),
/* harmony export */   "U_SAVE_BASIC_INFO": () => (/* binding */ U_SAVE_BASIC_INFO),
/* harmony export */   "U_SAVE_ADDRESS": () => (/* binding */ U_SAVE_ADDRESS),
/* harmony export */   "U_GET_BASIC_INFO": () => (/* binding */ U_GET_BASIC_INFO),
/* harmony export */   "U_GET_ADDRESS": () => (/* binding */ U_GET_ADDRESS),
/* harmony export */   "U_FORGOT_PASSWORD": () => (/* binding */ U_FORGOT_PASSWORD),
/* harmony export */   "U_CHANGE_PASSWORD": () => (/* binding */ U_CHANGE_PASSWORD),
/* harmony export */   "U_RESET_PASSWORD": () => (/* binding */ U_RESET_PASSWORD),
/* harmony export */   "U_ADD_QUESTION": () => (/* binding */ U_ADD_QUESTION),
/* harmony export */   "U_DELETE_QUESTION": () => (/* binding */ U_DELETE_QUESTION),
/* harmony export */   "U_GET_QUESTIONS": () => (/* binding */ U_GET_QUESTIONS),
/* harmony export */   "U_GET_SKILLS": () => (/* binding */ U_GET_SKILLS),
/* harmony export */   "U_GET_USER_SKILLS": () => (/* binding */ U_GET_USER_SKILLS),
/* harmony export */   "U_ADD_SKILL": () => (/* binding */ U_ADD_SKILL),
/* harmony export */   "U_SAVE_LOCALITY": () => (/* binding */ U_SAVE_LOCALITY),
/* harmony export */   "U_SAVE_PORTFOLIO": () => (/* binding */ U_SAVE_PORTFOLIO),
/* harmony export */   "GOOGLE_PLACES_BASE_URL": () => (/* binding */ GOOGLE_PLACES_BASE_URL),
/* harmony export */   "GOOGLE_PLACES_API": () => (/* binding */ GOOGLE_PLACES_API),
/* harmony export */   "U_ADD_PET": () => (/* binding */ U_ADD_PET),
/* harmony export */   "U_GET_ALL_PETS": () => (/* binding */ U_GET_ALL_PETS),
/* harmony export */   "U_SINGLE_PET": () => (/* binding */ U_SINGLE_PET),
/* harmony export */   "U_UPDATE_PET": () => (/* binding */ U_UPDATE_PET),
/* harmony export */   "U_DELETE_PET": () => (/* binding */ U_DELETE_PET),
/* harmony export */   "U_GET_SERVICES": () => (/* binding */ U_GET_SERVICES),
/* harmony export */   "U_GET_AVAILABLE_SERVICES": () => (/* binding */ U_GET_AVAILABLE_SERVICES),
/* harmony export */   "U_SET_AVAILABLE_SERVICES": () => (/* binding */ U_SET_AVAILABLE_SERVICES),
/* harmony export */   "U_GET_AVAILABILITY": () => (/* binding */ U_GET_AVAILABILITY),
/* harmony export */   "U_GET_AVAILABILITY_BY_DATES": () => (/* binding */ U_GET_AVAILABILITY_BY_DATES),
/* harmony export */   "U_BOOKMARK_SITTER": () => (/* binding */ U_BOOKMARK_SITTER),
/* harmony export */   "U_ACTIVE_BOARDING": () => (/* binding */ U_ACTIVE_BOARDING),
/* harmony export */   "U_BOARDING_PET_SERVICE_FEE": () => (/* binding */ U_BOARDING_PET_SERVICE_FEE),
/* harmony export */   "U_BOARDING_PREFERENCE": () => (/* binding */ U_BOARDING_PREFERENCE),
/* harmony export */   "U_BOARDING_DISCOUNTS": () => (/* binding */ U_BOARDING_DISCOUNTS),
/* harmony export */   "U_GET_BOARDING_INFO": () => (/* binding */ U_GET_BOARDING_INFO),
/* harmony export */   "U_GET_BOARDING_PREVIEW": () => (/* binding */ U_GET_BOARDING_PREVIEW),
/* harmony export */   "U_ACTIVE_HOUSE_SITTING": () => (/* binding */ U_ACTIVE_HOUSE_SITTING),
/* harmony export */   "U_GET_HOUSE_SITTING_INFO": () => (/* binding */ U_GET_HOUSE_SITTING_INFO),
/* harmony export */   "U_HOUSE_SITTING_SERVICE_FEE": () => (/* binding */ U_HOUSE_SITTING_SERVICE_FEE),
/* harmony export */   "U_HOUSE_SITTING_DISCOUNTS": () => (/* binding */ U_HOUSE_SITTING_DISCOUNTS),
/* harmony export */   "U_HOUSE_SITTING_PREFERENCE": () => (/* binding */ U_HOUSE_SITTING_PREFERENCE),
/* harmony export */   "U_GET_HOUSE_SITTING_PREVIEW": () => (/* binding */ U_GET_HOUSE_SITTING_PREVIEW),
/* harmony export */   "U_ACTIVE_DAY_CARE": () => (/* binding */ U_ACTIVE_DAY_CARE),
/* harmony export */   "U_ACTIVE_DROP_IN_VISITS": () => (/* binding */ U_ACTIVE_DROP_IN_VISITS),
/* harmony export */   "U_GET_DROP_IN_VISITS_INFO": () => (/* binding */ U_GET_DROP_IN_VISITS_INFO),
/* harmony export */   "U_DROP_IN_VISITS_SERVICE_FEE": () => (/* binding */ U_DROP_IN_VISITS_SERVICE_FEE),
/* harmony export */   "U_DROP_IN_VISITES_PREFERENCE": () => (/* binding */ U_DROP_IN_VISITES_PREFERENCE),
/* harmony export */   "U_DROP_IN_VISITS_DISCOUNTS": () => (/* binding */ U_DROP_IN_VISITS_DISCOUNTS),
/* harmony export */   "U_GET_DROP_IN_PREVIEW": () => (/* binding */ U_GET_DROP_IN_PREVIEW),
/* harmony export */   "U_PET_DAY_CARE_INFO": () => (/* binding */ U_PET_DAY_CARE_INFO),
/* harmony export */   "U_PET_DAY_CARE_SERVICE_FEES": () => (/* binding */ U_PET_DAY_CARE_SERVICE_FEES),
/* harmony export */   "U_PET_DAY_CARE_PREFERENCE": () => (/* binding */ U_PET_DAY_CARE_PREFERENCE),
/* harmony export */   "U_PET_DAY_CARE_DISCOUNT": () => (/* binding */ U_PET_DAY_CARE_DISCOUNT),
/* harmony export */   "U_GET_PET_DAY_CARE_PREVIEW": () => (/* binding */ U_GET_PET_DAY_CARE_PREVIEW),
/* harmony export */   "U_ACTIVE_PET_WALKING": () => (/* binding */ U_ACTIVE_PET_WALKING),
/* harmony export */   "U_DOG_WALKING_INFO": () => (/* binding */ U_DOG_WALKING_INFO),
/* harmony export */   "U_DOG_WALKING_SERVICE_FEE": () => (/* binding */ U_DOG_WALKING_SERVICE_FEE),
/* harmony export */   "U_DOG_WALKING_SERVICE_PREFERENCE": () => (/* binding */ U_DOG_WALKING_SERVICE_PREFERENCE),
/* harmony export */   "U_DOG_WALKING_DISCOUNT": () => (/* binding */ U_DOG_WALKING_DISCOUNT),
/* harmony export */   "U_GET_DOG_WALKING_PREVIEW": () => (/* binding */ U_GET_DOG_WALKING_PREVIEW),
/* harmony export */   "U_PET_ADDITIONAL_REQUEST": () => (/* binding */ U_PET_ADDITIONAL_REQUEST),
/* harmony export */   "U_PET_AMOUNT_CALCULATION": () => (/* binding */ U_PET_AMOUNT_CALCULATION),
/* harmony export */   "U_REQUEST_SITTER": () => (/* binding */ U_REQUEST_SITTER),
/* harmony export */   "U_GET_REQUEST_DETAIL": () => (/* binding */ U_GET_REQUEST_DETAIL),
/* harmony export */   "U_CHANGE_REQUEST_STATUS": () => (/* binding */ U_CHANGE_REQUEST_STATUS),
/* harmony export */   "U_PET_SERVICE_AVAIALABILITY": () => (/* binding */ U_PET_SERVICE_AVAIALABILITY),
/* harmony export */   "U_CONFIRM_PAYMENT": () => (/* binding */ U_CONFIRM_PAYMENT),
/* harmony export */   "U_PAYMENT_HISTORY": () => (/* binding */ U_PAYMENT_HISTORY),
/* harmony export */   "U_ACTIVE_GROOMING": () => (/* binding */ U_ACTIVE_GROOMING),
/* harmony export */   "U_GET_GROOMING_INFO": () => (/* binding */ U_GET_GROOMING_INFO),
/* harmony export */   "U_GET_PET_SERVICE": () => (/* binding */ U_GET_PET_SERVICE),
/* harmony export */   "U_GROOMING_SERVICE_FEE": () => (/* binding */ U_GROOMING_SERVICE_FEE),
/* harmony export */   "U_GROOMING_SERVICE_PREFERENCE": () => (/* binding */ U_GROOMING_SERVICE_PREFERENCE),
/* harmony export */   "U_GROOMING_SERVICE_DISCOUNT": () => (/* binding */ U_GROOMING_SERVICE_DISCOUNT),
/* harmony export */   "U_GET_GROOMING_PREVIEW": () => (/* binding */ U_GET_GROOMING_PREVIEW),
/* harmony export */   "U_ACTIVE_HOUSE_CALL": () => (/* binding */ U_ACTIVE_HOUSE_CALL),
/* harmony export */   "U_GET_HOUSE_CALL_INFO": () => (/* binding */ U_GET_HOUSE_CALL_INFO),
/* harmony export */   "U_GET_HOUSE_CALL_SERVICE": () => (/* binding */ U_GET_HOUSE_CALL_SERVICE),
/* harmony export */   "U_HOUSE_CALL_SERVICE_FEE": () => (/* binding */ U_HOUSE_CALL_SERVICE_FEE),
/* harmony export */   "U_HOUSE_CALL_PREFERENCE": () => (/* binding */ U_HOUSE_CALL_PREFERENCE),
/* harmony export */   "U_HOUSE_CALL_DISCOUNT": () => (/* binding */ U_HOUSE_CALL_DISCOUNT),
/* harmony export */   "U_GET_HOUSE_CALL_PREVIEW": () => (/* binding */ U_GET_HOUSE_CALL_PREVIEW),
/* harmony export */   "U_GET_SITTER_RESERVATIONS": () => (/* binding */ U_GET_SITTER_RESERVATIONS),
/* harmony export */   "U_GET_USER_RESERVATIONS": () => (/* binding */ U_GET_USER_RESERVATIONS),
/* harmony export */   "U_SEND_MESSAGE": () => (/* binding */ U_SEND_MESSAGE),
/* harmony export */   "U_READ_STATUS": () => (/* binding */ U_READ_STATUS),
/* harmony export */   "U_GET_THREAD_BOOKING": () => (/* binding */ U_GET_THREAD_BOOKING),
/* harmony export */   "U_ARRANG_MEETUP": () => (/* binding */ U_ARRANG_MEETUP),
/* harmony export */   "U_CHANGE_MEETUP_STATUS": () => (/* binding */ U_CHANGE_MEETUP_STATUS),
/* harmony export */   "U_GET_MEETUPS": () => (/* binding */ U_GET_MEETUPS),
/* harmony export */   "U_CHAT_ACTION": () => (/* binding */ U_CHAT_ACTION),
/* harmony export */   "U_GET_TRANSPORT_CHARGES": () => (/* binding */ U_GET_TRANSPORT_CHARGES),
/* harmony export */   "U_ADD_TRANSPORT_CHARGES": () => (/* binding */ U_ADD_TRANSPORT_CHARGES),
/* harmony export */   "U_UPDATE_REQUEST_STATUS": () => (/* binding */ U_UPDATE_REQUEST_STATUS),
/* harmony export */   "U_GET_ALL_SPOT": () => (/* binding */ U_GET_ALL_SPOT),
/* harmony export */   "U_GET_FAVORITE_SPOT": () => (/* binding */ U_GET_FAVORITE_SPOT),
/* harmony export */   "U_PET_SPOT_CATEGORIES": () => (/* binding */ U_PET_SPOT_CATEGORIES),
/* harmony export */   "U_GET_PET_SPOTS": () => (/* binding */ U_GET_PET_SPOTS),
/* harmony export */   "U_GET_PET_SPOT_DETAILS": () => (/* binding */ U_GET_PET_SPOT_DETAILS),
/* harmony export */   "U_GET_PAYMENT_METHODS": () => (/* binding */ U_GET_PAYMENT_METHODS),
/* harmony export */   "U_GET_RESERVATION_TYPES": () => (/* binding */ U_GET_RESERVATION_TYPES),
/* harmony export */   "U_GET_SMOKING_CESSIONS": () => (/* binding */ U_GET_SMOKING_CESSIONS),
/* harmony export */   "U_GET_PARKING": () => (/* binding */ U_GET_PARKING),
/* harmony export */   "U_GET_LANGAUGES": () => (/* binding */ U_GET_LANGAUGES),
/* harmony export */   "U_ADD_SPOT": () => (/* binding */ U_ADD_SPOT),
/* harmony export */   "U_UPDATE_SPOT": () => (/* binding */ U_UPDATE_SPOT),
/* harmony export */   "U_DELETE_SPOT": () => (/* binding */ U_DELETE_SPOT),
/* harmony export */   "U_GET_SINGLE_SPOT": () => (/* binding */ U_GET_SINGLE_SPOT),
/* harmony export */   "U_MARK_UNMARK_SPOT": () => (/* binding */ U_MARK_UNMARK_SPOT),
/* harmony export */   "U_REVIEW_SPOT": () => (/* binding */ U_REVIEW_SPOT),
/* harmony export */   "U_RATE_SITTER": () => (/* binding */ U_RATE_SITTER),
/* harmony export */   "U_GET_CITIES": () => (/* binding */ U_GET_CITIES),
/* harmony export */   "U_GET_COUTRIES": () => (/* binding */ U_GET_COUTRIES),
/* harmony export */   "U_GET_PETS": () => (/* binding */ U_GET_PETS),
/* harmony export */   "U_GET_BREED_WITH_TYPE": () => (/* binding */ U_GET_BREED_WITH_TYPE),
/* harmony export */   "U_IMAGE_UPLOAD": () => (/* binding */ U_IMAGE_UPLOAD),
/* harmony export */   "U_UPLOAD_PROFILE_PICTURE": () => (/* binding */ U_UPLOAD_PROFILE_PICTURE),
/* harmony export */   "U_FILTERED_AVAILABLE_SITTER": () => (/* binding */ U_FILTERED_AVAILABLE_SITTER),
/* harmony export */   "U_GET_SINGLE_SITTER": () => (/* binding */ U_GET_SINGLE_SITTER),
/* harmony export */   "U_GET_SITTER_AVAILABILITY": () => (/* binding */ U_GET_SITTER_AVAILABILITY),
/* harmony export */   "U_UPLOAD_DOCUMENTS": () => (/* binding */ U_UPLOAD_DOCUMENTS),
/* harmony export */   "U_GET_FAVORITE_SITTER": () => (/* binding */ U_GET_FAVORITE_SITTER),
/* harmony export */   "U_ADD_CARD": () => (/* binding */ U_ADD_CARD),
/* harmony export */   "U_GET_CARD": () => (/* binding */ U_GET_CARD),
/* harmony export */   "U_DELETE_CARD": () => (/* binding */ U_DELETE_CARD),
/* harmony export */   "U_ADD_BANK_ACCOUNT": () => (/* binding */ U_ADD_BANK_ACCOUNT),
/* harmony export */   "U_GET_BANK_ACCOUNT": () => (/* binding */ U_GET_BANK_ACCOUNT),
/* harmony export */   "U_GET_BANK_DETAILS": () => (/* binding */ U_GET_BANK_DETAILS),
/* harmony export */   "U_DELETE_BANK_ACCOUNT": () => (/* binding */ U_DELETE_BANK_ACCOUNT),
/* harmony export */   "U_MAKE_BANK_DEFAULT": () => (/* binding */ U_MAKE_BANK_DEFAULT),
/* harmony export */   "U_MAKE_CARD__DEFAULT": () => (/* binding */ U_MAKE_CARD__DEFAULT),
/* harmony export */   "U_APPLY_COUPON": () => (/* binding */ U_APPLY_COUPON),
/* harmony export */   "U_REMOVE_COUPON": () => (/* binding */ U_REMOVE_COUPON),
/* harmony export */   "U_GET_COUPON": () => (/* binding */ U_GET_COUPON),
/* harmony export */   "U_GET_NEWS": () => (/* binding */ U_GET_NEWS),
/* harmony export */   "U_GET_EVENT": () => (/* binding */ U_GET_EVENT),
/* harmony export */   "U_GET_SINGLE_NEWS": () => (/* binding */ U_GET_SINGLE_NEWS),
/* harmony export */   "SuccessOptions": () => (/* binding */ SuccessOptions),
/* harmony export */   "FailureOptions": () => (/* binding */ FailureOptions)
/* harmony export */ });
const U_USER_REGISTER = "user-register";
const U_USER_LOGIN = "user-login";
const U_GET_DASHBOARD = "user/dashboard";
const U_SAVE_BASIC_INFO = "user/save-basic-info";
const U_SAVE_ADDRESS = "user/save-address";
const U_GET_BASIC_INFO = "user/get-basic-info";
const U_GET_ADDRESS = "user/get-address";
const U_FORGOT_PASSWORD = "forget-password";
const U_CHANGE_PASSWORD = "user/change-password";
const U_RESET_PASSWORD = "reset-password";
const U_ADD_QUESTION = "user/add-questions";
const U_DELETE_QUESTION = "user/delete-question/";
const U_GET_QUESTIONS = "user/get-questions";
const U_GET_SKILLS = "get-skills";
const U_GET_USER_SKILLS = "user/get-skills";
const U_ADD_SKILL = "user/add-skills";
const U_SAVE_LOCALITY = "user/save-locality-info";
const U_SAVE_PORTFOLIO = "user/save-portfolio-images";
const GOOGLE_PLACES_BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_PLACES_API = "AIzaSyBhlm5dfswCn3ePLbHgiV1EuQ48k9SdYCw"; //export const GOOGLE_PLACES_API = "AIzaSyAGzbD-bWySCHhvpKti_40Jsvti3TljxB8";
//MY PETS

const U_ADD_PET = "user/add-new-pet";
const U_GET_ALL_PETS = "user/get-all-pets";
const U_SINGLE_PET = "user/get-single-pet/";
const U_UPDATE_PET = "user/update-pet-info/";
const U_DELETE_PET = "user/delete-pet-info/"; //MY Service

const U_GET_SERVICES = "get-services";
const U_GET_AVAILABLE_SERVICES = "sitter/services";
const U_SET_AVAILABLE_SERVICES = "sitter/service-availability";
const U_GET_AVAILABILITY = "sitter/availability-services";
const U_GET_AVAILABILITY_BY_DATES = "sitter/date-availability-services";
const U_BOOKMARK_SITTER = "mark-as-favorite"; //Boarding

const U_ACTIVE_BOARDING = "user/boarding-service-manage";
const U_BOARDING_PET_SERVICE_FEE = "user/boarding-service-fees";
const U_BOARDING_PREFERENCE = "user/boarding-service-preferences";
const U_BOARDING_DISCOUNTS = "user/boarding-service-discounts";
const U_GET_BOARDING_INFO = "user/boarding-service-info/";
const U_GET_BOARDING_PREVIEW = "user/all-boarding-service-info"; //House sitting

const U_ACTIVE_HOUSE_SITTING = "user/house-sitting-service-manage";
const U_GET_HOUSE_SITTING_INFO = "user/house-sitting-service-info/";
const U_HOUSE_SITTING_SERVICE_FEE = "user/house-sitting-service-fees";
const U_HOUSE_SITTING_DISCOUNTS = "user/house-sitting-service-discounts";
const U_HOUSE_SITTING_PREFERENCE = "user/house-sitting-service-preferences";
const U_GET_HOUSE_SITTING_PREVIEW = "user/all-house-sitting-service-info"; //DAY care

const U_ACTIVE_DAY_CARE = "user/day-care-service-manage"; //Drop-in visit

const U_ACTIVE_DROP_IN_VISITS = "user/drop-in-visit-service-manage";
const U_GET_DROP_IN_VISITS_INFO = "user/drop-in-visit-service-info/";
const U_DROP_IN_VISITS_SERVICE_FEE = "user/drop-in-visit-service-fees";
const U_DROP_IN_VISITES_PREFERENCE = "user/drop-in-visit-service-preferences";
const U_DROP_IN_VISITS_DISCOUNTS = "user/drop-in-visit-service-discounts";
const U_GET_DROP_IN_PREVIEW = "user/all-drop-in-visit-service-info"; //PET walking visits

const U_PET_DAY_CARE_INFO = "user/day-care-service-info/";
const U_PET_DAY_CARE_SERVICE_FEES = "user/day-care-service-fees";
const U_PET_DAY_CARE_PREFERENCE = "user/day-care-service-preferences";
const U_PET_DAY_CARE_DISCOUNT = "user/day-care-service-discounts";
const U_GET_PET_DAY_CARE_PREVIEW = "user/all-day-care-service-info"; //  Dog walking

const U_ACTIVE_PET_WALKING = "user/walking-service-manage";
const U_DOG_WALKING_INFO = "user/walking-service-info/";
const U_DOG_WALKING_SERVICE_FEE = "user/walking-service-fees";
const U_DOG_WALKING_SERVICE_PREFERENCE = "user/walking-service-preferences";
const U_DOG_WALKING_DISCOUNT = "user/walking-service-discounts";
const U_GET_DOG_WALKING_PREVIEW = "user/all-walking-service-info"; //Sitter Request

const U_PET_ADDITIONAL_REQUEST = "sitter/pet-additional-services";
const U_PET_AMOUNT_CALCULATION = "sitter/pet-amount-calculations";
const U_REQUEST_SITTER = "sitter/pet-request";
const U_GET_REQUEST_DETAIL = "sitter/pet-request/";
const U_CHANGE_REQUEST_STATUS = "change-sitter-request-status";
const U_PET_SERVICE_AVAIALABILITY = "sitter/pet-service-availability";
const U_CONFIRM_PAYMENT = "sitter/confirm-payment/";
const U_PAYMENT_HISTORY = "payment-history"; //GROOMING

const U_ACTIVE_GROOMING = "user/grooming-service-manage";
const U_GET_GROOMING_INFO = "user/grooming-service-info/";
const U_GET_PET_SERVICE = "get-grooming-services";
const U_GROOMING_SERVICE_FEE = "user/grooming-service-fees";
const U_GROOMING_SERVICE_PREFERENCE = "user/grooming-service-preferences";
const U_GROOMING_SERVICE_DISCOUNT = "user/grooming-service-discounts";
const U_GET_GROOMING_PREVIEW = "user/all-grooming-service-info"; //House call

const U_ACTIVE_HOUSE_CALL = "user/house-call-service-manage";
const U_GET_HOUSE_CALL_INFO = "user/house-call-service-info/";
const U_GET_HOUSE_CALL_SERVICE = "get-house-call-services";
const U_HOUSE_CALL_SERVICE_FEE = "user/house-call-service-fees";
const U_HOUSE_CALL_PREFERENCE = "user/house-call-service-preferences";
const U_HOUSE_CALL_DISCOUNT = "user/house-call-service-discounts";
const U_GET_HOUSE_CALL_PREVIEW = "user/all-house-call-service-info"; //Dashboard

const U_GET_SITTER_RESERVATIONS = "get-sitter-reservations";
const U_GET_USER_RESERVATIONS = "get-user-reservations"; //CHAT

const U_SEND_MESSAGE = "send-message";
const U_READ_STATUS = "thread-read-status";
const U_GET_THREAD_BOOKING = "get-thread-bookings/";
const U_ARRANG_MEETUP = "create-meet-up";
const U_CHANGE_MEETUP_STATUS = "meet-up-status";
const U_GET_MEETUPS = "get-meet-up/";
const U_CHAT_ACTION = "chat-thread-status";
const U_GET_TRANSPORT_CHARGES = "sitter/request-transport-amount/";
const U_ADD_TRANSPORT_CHARGES = "sitter/request-transport-amount";
const U_UPDATE_REQUEST_STATUS = "change-sitter-request-status"; //PET SPOT

const U_GET_ALL_SPOT = "sitter/spots";
const U_GET_FAVORITE_SPOT = "get-favorite-spots";
const U_PET_SPOT_CATEGORIES = "get-spot-categories";
const U_GET_PET_SPOTS = "get-spots";
const U_GET_PET_SPOT_DETAILS = "spot/";
const U_GET_PAYMENT_METHODS = "get-payment-methods";
const U_GET_RESERVATION_TYPES = "get-reservations";
const U_GET_SMOKING_CESSIONS = "get-smoking-cessions";
const U_GET_PARKING = "get-parkings";
const U_GET_LANGAUGES = "get-languages";
const U_ADD_SPOT = "sitter/create-spot";
const U_UPDATE_SPOT = "sitter/update-spot/";
const U_DELETE_SPOT = "sitter/remove-spot/";
const U_GET_SINGLE_SPOT = "sitter/spot/";
const U_MARK_UNMARK_SPOT = "mark-spot-as-favorite";
const U_REVIEW_SPOT = "spot-review-rate"; //COMMON

const U_RATE_SITTER = "sitter-review-rate";
const U_GET_CITIES = "get-cities/";
const U_GET_COUTRIES = "get-countries";
const U_GET_PETS = "get-pets";
const U_GET_BREED_WITH_TYPE = "get-breeds";
const U_IMAGE_UPLOAD = "upload";
const U_UPLOAD_PROFILE_PICTURE = "user/save-profile-pic";
const U_FILTERED_AVAILABLE_SITTER = "get-available-sitters";
const U_GET_SINGLE_SITTER = "get-sitter-profile/";
const U_GET_SITTER_AVAILABILITY = "sitter/pet-service-availability";
const U_UPLOAD_DOCUMENTS = "user/upload-document";
const U_GET_FAVORITE_SITTER = "get-favorite-sitters"; //Payment Card & Bank details

const U_ADD_CARD = "user/add-card";
const U_GET_CARD = "user/get-cards";
const U_DELETE_CARD = "user/delete-card";
const U_ADD_BANK_ACCOUNT = "user/create-bank-account";
const U_GET_BANK_ACCOUNT = "user/get-all-bank-accounts";
const U_GET_BANK_DETAILS = "user/get-bank-details/";
const U_DELETE_BANK_ACCOUNT = "user/delete-bank-account/";
const U_MAKE_BANK_DEFAULT = 'user/default-bank-account';
const U_MAKE_CARD__DEFAULT = 'user/make-default-card';
const U_APPLY_COUPON = 'sitter/apply-coupon';
const U_REMOVE_COUPON = 'sitter/remove-coupon/';
const U_GET_COUPON = 'user/get-saved-coupons/';
const U_GET_NEWS = 'get-news-events/1';
const U_GET_EVENT = 'get-news-events/2';
const U_GET_SINGLE_NEWS = "single-news-event/2";
const SuccessOptions = {
  position: 'bottom-center',
  style: {
    backgroundColor: 'midnightblue',
    color: 'midnightblue',
    fontSize: '20px',
    textAlign: 'center'
  },
  closeStyle: {
    color: 'lightcoral',
    fontSize: '16px'
  }
};
const FailureOptions = {
  position: 'bottom-center',
  style: {
    backgroundColor: 'midnightblue',
    color: 'lightblue',
    fontSize: '20px',
    textAlign: 'center'
  },
  closeStyle: {
    color: 'lightcoral',
    fontSize: '16px'
  }
};

/***/ }),

/***/ "./components/common/YearMonthForm.tsx":
/*!*********************************************!*\
  !*** ./components/common/YearMonthForm.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\common\\YearMonthForm.tsx";



function YearMonthForm({
  date,
  localeUtils,
  onChange,
  before,
  startRange = null,
  endRange = null,
  isDob
}) {
  const months = localeUtils.getMonths();
  const currentYear = new Date(before ? 0 : null).getFullYear();
  const fromMonth = startRange ? startRange : new Date(currentYear, 0);
  const toMonth = endRange ? endRange : before ? new Date() : new Date(new Date().getFullYear() + 10, 11);
  const years = [];

  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    if (isDob && i < toMonth.getFullYear() - 12) {
      years.push(i);
    } else if (!isDob) {
      years.push(i);
    }
  }

  const handleChange = function handleChange(e) {
    const {
      year,
      month
    } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "DayPicker-Caption",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
      name: "month",
      onChange: handleChange,
      value: date.getMonth(),
      children: months.map((month, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
        value: i,
        children: month
      }, month, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("select", {
      name: "year",
      onChange: handleChange,
      value: date.getFullYear(),
      children: years.map(year => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
        value: year,
        children: year
      }, year, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YearMonthForm);

/***/ }),

/***/ "./components/hoc/withAuth.tsx":
/*!*************************************!*\
  !*** ./components/hoc/withAuth.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\hoc\\withAuth.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const cookie = new (universal_cookie__WEBPACK_IMPORTED_MODULE_1___default())();

const withAuth = Component => {
  const Auth = props => {
    if (false) { var token; }

    return null;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/FacebookLogin.jsx":
/*!*********************************!*\
  !*** ./pages/FacebookLogin.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginFacebook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "react-facebook-login/dist/facebook-login-render-props");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\FacebookLogin.jsx";





function LoginFacebook(props) {
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onSuccess = res => {
    setSuccess(true);
    console.log('Login Success: currentUser:', res);
    success === true && router.push({
      pathname: '/'
    });
    alert(`Logged in successfully ${res.name} welcome See console for full profile object.`);
    success === true && router.push({
      pathname: '/'
    });
  };

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const onFailure = res => {
    console.log('Login failed: res:', res);
    setSuccess(false);
  };

  const appId = "5557010350976999";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_1___default()), {
    appId: appId // we created this, remember?
    ,
    render: renderProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "col-12 col-md-6 col-lg-6 col-xl-6",
      onClick: renderProps.onClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "signup-content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row social-icns",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "col-auto my-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "social-img",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 35
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "#",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                  src: "images/facebook.png",
                  className: "img-fluid"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 35
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "col pl-0 my-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
              className: "mb-0",
              children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.ContinuewithFacebook
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, this),
    autoLoad: true,
    fields: "name,email,picture",
    callback: onSuccess,
    onFailure: onFailure
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}
{
  /*onClick={renderProps.onClick}*/
}

/***/ }),

/***/ "./pages/GoogleLogin.jsx":
/*!*******************************!*\
  !*** ./pages/GoogleLogin.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoogleLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\GoogleLogin.jsx";





function GoogleLogin(props) {
  const onSuccess = res => {
    console.log('Login Success: currentUser:', res);
    alert(`Logged in successfully welcome ${res.profileObj.name}  See console for full profile object.`);
    router.push({
      pathname: '/'
    });
  };

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const onFailure = res => {
    console.log('Login failed: res:', res);
  };

  const clientId = '1021664644172-6q7alafvc3rhga1klpsondft47qjvv6u.apps.googleusercontent.com';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_google_login__WEBPACK_IMPORTED_MODULE_1___default()), {
    clientId: clientId,
    render: renderProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "col-12 col-md-6 col-lg-6 col-xl-6",
      onClick: renderProps.onClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "signup-content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row social-icns",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "col-auto my-auto",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "social-img",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 35
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "#",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                  src: "images/google-plus.png",
                  className: "img-fluid"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 35
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "col pl-0 my-auto",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h6", {
              className: "mb-0",
              children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_3__.strings.ContinuewithGoogle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 31
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }, this),
    buttonText: "Login",
    onSuccess: onSuccess,
    onFailure: onFailure
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/TwiiterLogin.jsx":
/*!********************************!*\
  !*** ./pages/TwiiterLogin.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TwitterLogin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_twitter_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-twitter-login */ "react-twitter-login");
/* harmony import */ var react_twitter_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_twitter_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\TwiiterLogin.jsx";




function TwitterLogin() {
  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_twitter_login__WEBPACK_IMPORTED_MODULE_1___default()), {
    authCallback: authHandler,
    consumerKey: "CEdkvn2wsjnDRwVWNX8y10epn" // We created this, remember?
    ,
    consumerSecret: "2DU9auajUWBROP0tTbColcG08yZf4BGqMCK1d00WjX2rFp1eGL" // We created this, remember?
    ,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "signup-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        href: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "row social-icns",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "col-auto my-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "social-img",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                src: "images/twitter.png",
                className: "img-fluid"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "col pl-0 my-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
            className: "mb-0",
            children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.ContinuewithTwitter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker/DayPickerInput */ "react-day-picker/DayPickerInput");
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-day-picker/moment */ "react-day-picker/moment");
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/Api */ "./api/Api.ts");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_simple_snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-simple-snackbar */ "react-simple-snackbar");
/* harmony import */ var react_simple_snackbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_simple_snackbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hoc/withAuth */ "./components/hoc/withAuth.tsx");
/* harmony import */ var _components_common_YearMonthForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/common/YearMonthForm */ "./components/common/YearMonthForm.tsx");
/* harmony import */ var _public_appData_AppData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/appData/AppData */ "./public/appData/AppData.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var feather_icons_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! feather-icons-react */ "feather-icons-react");
/* harmony import */ var feather_icons_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(feather_icons_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _GoogleLogin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GoogleLogin */ "./pages/GoogleLogin.jsx");
/* harmony import */ var _TwiiterLogin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TwiiterLogin */ "./pages/TwiiterLogin.jsx");
/* harmony import */ var _FacebookLogin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FacebookLogin */ "./pages/FacebookLogin.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\signup.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const api = new _api_Api__WEBPACK_IMPORTED_MODULE_6__.default();
const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_7___default())();

class Signup extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "passwordInput", void 0);

    _defineProperty(this, "confirmInput", void 0);

    _defineProperty(this, "onTextChange", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    _defineProperty(this, "checkboxOnChange", event => {
      this.setState({
        condition: event.target.checked
      });
    });

    _defineProperty(this, "checkboxRememberOnChange", event => {
      this.setState({
        rememberMe: !this.state.rememberMe
      });
    });

    _defineProperty(this, "registerUser", async e => {
      if (!this.state.confirmPassword) {
        let errors = this.state.errors;
        errors.confirmPassword = 'Enter confirm password';
        this.setState({
          errors: errors
        });
        console.log('a', errors);
        return;
      }

      e.preventDefault();
      let that = this;
      this.setState({
        errors: {}
      });
      let data = JSON.stringify({
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
        dob: this.state.dateOfBirth ? moment__WEBPACK_IMPORTED_MODULE_13___default()(this.state.dateOfBirth).format("DD/MM/yyyy") : null,
        password: this.state.password,
        is_agree: this.state.condition
      });
      api.registerUser(data).then(json => {
        document.cookie = `id=${json.data.response.id}; path=/`;
        document.cookie = `token=${json.data.response.token}; path=/`;
        document.cookie = `firstname=${json.data.response.firstname}; path=/`;
        document.cookie = `lastname=${json.data.response.lastname}; path=/`;
        document.cookie = `email=${json.data.response.email}; path=/`;
        document.cookie = `profile_picture=${json.data.response.profile_picture}; path=/`;
        document.cookie = `phone_number=${json.data.response.phone_number}; path=/`;

        if (this.state.rememberMe) {
          document.cookie = `rem_email=${this.state.email}; path=/`;
          document.cookie = `rem_pass=${this.state.password}; path=/`;
        }

        next_router__WEBPACK_IMPORTED_MODULE_9___default().push("/");
      }).catch(error => {
        console.log(error);

        if (error.response.status == 422) {
          that.setState({
            errors: error.response.data.errors
          });

          if (error.response.data.errors.is_agree) {
            this.props.openSnackbar("Agree to Terms and condition");
          }
        }
      });
    });

    _defineProperty(this, "handleYearMonthChange", month => {
      this.setState({
        month: month
      });
    });

    _defineProperty(this, "toggleSecurePassword", () => {
      this.setState({
        showPass: !this.state.showPass
      });
    });

    _defineProperty(this, "toggleConfirmPassword", () => {
      this.setState({
        showConfirm: !this.state.showConfirm
      });
    });

    _defineProperty(this, "onSuccess", res => {
      console.log('Login Success: currentUser:', res.profileObj);
      alert(`Logged in successfully welcome ${res.profileObj.name}  See console for full profile object.`);
    });

    _defineProperty(this, "onFailure", res => {
      console.log('Login failed: res:', res);
    });

    this.state = {
      dateOfBirth: null,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      condition: false,
      errors: {},
      month: new Date(),
      rememberMe: false,
      showConfirm: false,
      showPass: false
    };
    this.passwordInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.confirmInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.checkboxOnChange = this.checkboxOnChange.bind(this);
    this.checkboxRememberOnChange = this.checkboxRememberOnChange.bind(this);
  }

  handleDateChange(day) {
    this.setState({
      dateOfBirth: day
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
      className: "vector",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
            className: "col-12 col-md-8 col-lg-6 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
              className: "bg-white main-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                className: "login-details",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                  className: "logo-img mb-2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("img", {
                    src: "images/logo.png",
                    className: "img-fluid"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("p", {
                  className: "font-14",
                  children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Createyourfreeaccounttoday
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                className: "login-form",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("form", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                    className: "form-row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "form-group col-sm-6",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "form-label-view",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Firstname
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          className: "error-text",
                          children: this.state.errors.firstname ? this.state.errors.firstname[0] : ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("input", {
                        className: "form-control " + (this.state.errors.firstname ? "invalid" : ""),
                        id: "fname",
                        type: "text",
                        name: "firstName",
                        onChange: this.onTextChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "form-group col-sm-6",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "form-label-view",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Lastname
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          className: "error-text",
                          children: this.state.errors.lastname ? this.state.errors.lastname[0] : ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 210,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("input", {
                        className: "form-control " + (this.state.errors.lastname ? "invalid" : ""),
                        id: "lname",
                        type: "text",
                        name: "lastName",
                        onChange: this.onTextChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 216,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "form-group col-sm-6",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "form-label-view",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Emailaddress
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 229,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          className: "error-text",
                          children: this.state.errors.email ? this.state.errors.email[0] : ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 230,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("input", {
                        className: "form-control " + (this.state.errors.email ? "invalid" : ""),
                        id: "email",
                        type: "email",
                        name: "email",
                        onChange: this.onTextChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 236,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "form-group col-sm-6",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "form-label-view",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.DateofBirth
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 249,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 248,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "form-control valid-control " + (this.state.errors.dob ? "invalid" : ""),
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3___default()), {
                          formatDate: (react_day_picker_moment__WEBPACK_IMPORTED_MODULE_4___default().formatDate),
                          parseDate: (react_day_picker_moment__WEBPACK_IMPORTED_MODULE_4___default().parseDate),
                          dayPickerProps: {
                            modifiers: {
                              disabled: [{
                                after: new Date()
                              }]
                            },
                            month: this.state.month,
                            captionElement: ({
                              date,
                              localeUtils
                            }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_components_common_YearMonthForm__WEBPACK_IMPORTED_MODULE_11__.default, {
                              isDob: true,
                              before: true,
                              date: date ? date : new Date(),
                              localeUtils: localeUtils,
                              onChange: this.handleYearMonthChange.bind(this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 270,
                              columnNumber: 33
                            }, this)
                          },
                          inputProps: {
                            style: {
                              border: 0,
                              background: "transparent"
                            },
                            readOnly: true
                          },
                          placeholder: "DD/MM/YYYY",
                          format: "DD/MM/yyyy",
                          value: this.state.dateOfBirth,
                          onDayChange: this.handleDateChange
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 257,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "form-group col-sm-6",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                        children: "Password"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 296,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("input", {
                        ref: this.passwordInput,
                        className: "form-control " + (this.state.errors.password ? "invalid" : ""),
                        id: "password",
                        type: this.state.showPass ? "text" : "password",
                        name: "password",
                        onChange: this.onTextChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 298,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((feather_icons_react__WEBPACK_IMPORTED_MODULE_14___default()), {
                        className: "svg-inline--fa fa-eye fa-w-18 fa-2x eye-icon",
                        icon: this.state.showPass ? "eye-off" : "eye",
                        onClick: this.toggleSecurePassword
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 309,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                        className: "error-text",
                        children: this.state.errors.password ? this.state.errors.password[0] : ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 312,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "form-group col-sm-6",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                        children: "Confirm password"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 319,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("input", {
                        ref: this.confirmInput,
                        className: "form-control " + (this.state.errors.confirmPassword ? "invalid" : ""),
                        id: "confirm-password",
                        type: this.state.showConfirm ? "text" : "password",
                        name: "confirmPassword",
                        onChange: this.onTextChange
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 320,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((feather_icons_react__WEBPACK_IMPORTED_MODULE_14___default()), {
                        className: "svg-inline--fa fa-eye fa-w-18 fa-2x eye-icon",
                        icon: this.state.showConfirm ? "eye-off" : "eye",
                        onClick: this.toggleConfirmPassword
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 331,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 318,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "col-12 col-md-6 col-lg-6 col-xl-6 col-sm-6 mb-4",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "custom-check",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          className: "check ",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("input", {
                            onChange: this.checkboxRememberOnChange,
                            type: "checkbox",
                            name: "is_name1"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 337,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("span", {
                            className: "checkmark"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 342,
                            columnNumber: 29
                          }, this), _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Rememberme]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 336,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 335,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "custom-check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                        className: "check ",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("input", {
                          onChange: this.checkboxOnChange,
                          type: "checkbox",
                          checked: this.state.condition
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 350,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("span", {
                          className: "checkmark"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 355,
                          columnNumber: 27
                        }, this), `I agree to `, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          className: "create-account",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: '',
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                              className: "font-medium",
                              children: "Terms of Service"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 356,
                              columnNumber: 92
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 356,
                            columnNumber: 76
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 356,
                          columnNumber: 42
                        }, this), " and ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("label", {
                          className: "create-account",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: '',
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                              className: "font-medium",
                              children: "Privacy Policy"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 356,
                              columnNumber: 209
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 356,
                            columnNumber: 193
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 356,
                          columnNumber: 159
                        }, this), _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.registerTerm]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 349,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 348,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                    className: "text-center my-3",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                      onClick: this.registerUser.bind(this),
                      className: "btn btn-primary w-100",
                      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Joinnow
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                    className: "loginOr",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("hr", {
                      className: "hrOr"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 369,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("span", {
                      className: "spanOr",
                      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.or
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 370,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                    className: "my-4",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                      className: "row",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_FacebookLogin__WEBPACK_IMPORTED_MODULE_17__.default, {
                        onClick: this.registerUser.bind(this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 374,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_GoogleLogin__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 375,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "col-12 col-md-6 col-lg-6 col-xl-6",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)(_TwiiterLogin__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 377,
                          columnNumber: 25
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 376,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                        className: "col-12 col-md-6 col-lg-6 col-xl-6",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                          className: "signup-content",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                            href: "#"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 381,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                            className: "row social-icns",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                              href: "#"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 383,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                              className: "col-auto my-auto",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                                href: "#"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 385,
                                columnNumber: 33
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                                className: "social-img",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                                  href: "#"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 387,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                                  href: "#",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("img", {
                                    src: "images/line.png",
                                    className: "img-fluid"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 389,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 388,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 386,
                                columnNumber: 33
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 384,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                              className: "col pl-0 my-auto",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("h6", {
                                className: "mb-0",
                                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.ContinuewithLine
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 398,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 397,
                              columnNumber: 32
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 382,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 380,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 379,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 373,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("div", {
                    className: "text-center create-account",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("p", {
                      className: "font-12 mb-0 font-medium",
                      children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Alreadyhaveanaccount, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "./signin",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxDEV)("a", {
                          className: "font-medium",
                          children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Login
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 411,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 410,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_10__.default)((0,react_simple_snackbar__WEBPACK_IMPORTED_MODULE_8__.withSnackbar)(Signup, _public_appData_AppData__WEBPACK_IMPORTED_MODULE_12__.errorOptions)));

/***/ }),

/***/ "./public/appData/AppData.ts":
/*!***********************************!*\
  !*** ./public/appData/AppData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "successOptions": () => (/* binding */ successOptions),
/* harmony export */   "errorOptions": () => (/* binding */ errorOptions),
/* harmony export */   "serviceFeeObject": () => (/* binding */ serviceFeeObject),
/* harmony export */   "cities": () => (/* binding */ cities),
/* harmony export */   "pets": () => (/* binding */ pets),
/* harmony export */   "newsAndEvents": () => (/* binding */ newsAndEvents),
/* harmony export */   "faq": () => (/* binding */ faq),
/* harmony export */   "serviceData": () => (/* binding */ serviceData),
/* harmony export */   "petType": () => (/* binding */ petType),
/* harmony export */   "prices": () => (/* binding */ prices),
/* harmony export */   "ServiceTime": () => (/* binding */ ServiceTime),
/* harmony export */   "petSize": () => (/* binding */ petSize),
/* harmony export */   "durations": () => (/* binding */ durations),
/* harmony export */   "petCount": () => (/* binding */ petCount),
/* harmony export */   "sort": () => (/* binding */ sort),
/* harmony export */   "pet": () => (/* binding */ pet),
/* harmony export */   "myPets": () => (/* binding */ myPets),
/* harmony export */   "reviewStateData": () => (/* binding */ reviewStateData),
/* harmony export */   "reviewObjectData": () => (/* binding */ reviewObjectData),
/* harmony export */   "sitterServices": () => (/* binding */ sitterServices),
/* harmony export */   "sitterStates": () => (/* binding */ sitterStates),
/* harmony export */   "requestsArray": () => (/* binding */ requestsArray),
/* harmony export */   "meetingRequests": () => (/* binding */ meetingRequests),
/* harmony export */   "reservationRequests": () => (/* binding */ reservationRequests),
/* harmony export */   "myServices": () => (/* binding */ myServices),
/* harmony export */   "spots": () => (/* binding */ spots),
/* harmony export */   "reviews": () => (/* binding */ reviews),
/* harmony export */   "gender": () => (/* binding */ gender)
/* harmony export */ });
const successOptions = {
  position: "top-right",
  style: {
    backgroundColor: "white",
    color: "green",
    fontFamily: "Menlo, monospace",
    fontSize: "16px",
    textAlign: "center"
  },
  closeStyle: {
    color: "green",
    fontSize: "16px"
  }
};
const errorOptions = {
  position: "top-right",
  zIndex: 102,
  style: {
    backgroundColor: "white",
    color: "red",
    fontFamily: "Menlo, monospace",
    fontSize: "16px",
    textAlign: "center",
    zIndex: 102
  },
  closeStyle: {
    color: "red",
    fontSize: "16px"
  }
};
const serviceFeeObject = {
  capacity: 1,
  pet_size_id: 1,
  service_charge: "",
  earning_amount: ""
};
const cities = [{
  key: 1,
  label: "Shinjuku City",
  value: "Shinjuku City"
}, {
  key: 2,
  label: "Another City",
  value: "Another City"
}];
const pets = [{
  key: 1,
  label: "Dog",
  value: 1
}, {
  key: 2,
  label: "Cat",
  value: 2
}, {
  key: 3,
  label: "Birds",
  value: 3
}, {
  key: 4,
  label: "Reptiles",
  value: 4
}, {
  key: 5,
  label: "Small animals",
  value: 5
}];
const newsAndEvents = [{
  key: 1,
  posted: "07/10/2021, 3PM",
  post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused."
}, {
  key: 2,
  posted: "07/10/2021, 3PM",
  post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused."
}, {
  key: 3,
  posted: "07/10/2021, 3PM",
  post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused."
}, {
  key: 4,
  posted: "07/10/2021, 3PM",
  post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused."
}, {
  key: 5,
  posted: "07/10/2021, 3PM",
  post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused."
}, {
  key: 6,
  posted: "07/10/2021, 3PM",
  post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused."
}];
const faq = [{
  id: "1",
  question: "1. How do I assure pet sitter is a genuine person?",
  answer: "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application."
}, {
  id: "2",
  question: "2. How do I assure pet sitter is a genuine person?",
  answer: "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application."
}, {
  id: "3",
  question: "3. How do I assure pet sitter is a genuine person?",
  answer: "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application."
}, {
  id: "4",
  question: "4. How do I assure pet sitter is a genuine person?",
  answer: "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application."
}];
const serviceData = [{
  key: 1,
  value: 1,
  label: "Boarding"
}, {
  key: 2,
  value: 2,
  label: "House Sitting"
}, {
  key: 3,
  value: 3,
  label: "Drop-in-visits"
}, {
  key: 4,
  value: 4,
  label: "Pet Day care"
}, {
  key: 5,
  value: 5,
  label: "Dog walking"
}, {
  key: 6,
  value: 6,
  label: "Pet grooming"
}, {
  key: 7,
  value: 7,
  label: "House call"
}];
const petType = [{
  key: 1,
  value: "Dog Boarding",
  label: "Dog Boarding"
}, {
  key: 2,
  value: "House Sitting",
  label: "House Sitting"
}, {
  key: 3,
  value: "Drop-in-visits",
  label: "Drop-in-visits"
}, {
  key: 4,
  value: "Doggy Day care",
  label: "Doggy Day care"
}, {
  key: 5,
  value: "Dog walking",
  label: "Dog walking"
}];
const prices = [{
  key: 1,
  value: 1,
  label: "All Prices"
}, {
  key: 2,
  value: 2,
  label: "10000-20000"
}, {
  key: 3,
  value: 3,
  label: "20000-30000"
}, {
  key: 4,
  value: 4,
  label: "50000 - more"
}];
const ServiceTime = [{
  key: 1,
  value: "One Time",
  label: "One Time"
}, {
  key: 2,
  value: "Repeat Weekly",
  label: "Repeat Weekly"
}];
const petSize = [{
  key: 1,
  value: 1,
  label: "0 - 5 kg"
}, {
  key: 2,
  value: 2,
  label: "5 - 10 kg"
}, {
  key: 3,
  value: 3,
  label: "10 - 25 kg"
}, {
  key: 4,
  value: 4,
  label: "25 - 40 kg"
}, {
  key: 5,
  value: 5,
  label: "40+ kg"
}];
const durations = [{
  key: 1,
  value: 30,
  label: "30 mins"
}, {
  key: 2,
  value: 60,
  label: "60 mins"
}, {
  key: 3,
  value: 90,
  label: "90 mins"
}, {
  key: 4,
  value: 120,
  label: "120 mins"
}];
const petCount = [{
  key: 1,
  value: 1,
  label: "1"
}, {
  key: 2,
  value: 2,
  label: "2"
}, {
  key: 3,
  value: 3,
  label: "3"
}];
const sort = [{
  key: 1,
  value: "Distance closest to furthest",
  label: "Distance closest to furthest"
}, {
  key: 2,
  value: "Higher to lower",
  label: "Higher to lower"
}, {
  key: 3,
  value: "Lower to higher",
  label: "lower to higher"
}];
const pet = [{
  key: 1,
  label: "Dog",
  value: "1"
}, {
  key: 2,
  label: "Cat",
  value: "2"
}, {
  key: 3,
  label: "Birds",
  value: "3"
}, {
  key: 4,
  label: "Reptiles",
  value: "4"
}, {
  key: 5,
  label: "Small animals",
  value: "5"
}];
const myPets = [{
  age: 7,
  image: "/",
  name: "Milo",
  location: "Siberian husky",
  weight: 16
}, {
  age: 7,
  image: "/",
  name: "Milo",
  location: "Siberian husky",
  weight: 16
}];
const reviewStateData = {
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  checkIn: 4,
  value: 5
};
const reviewObjectData = {
  userImage: "/",
  userName: "Mark Evans",
  date: "June 10, 2021",
  time: "7:30pm",
  review: "“Abbey is the best dog mom I’ve ever known! Responsible, attentive, playful, and loving. I met her when she was volunteering to help shelter animals - her empathy for animal souls is limitless.”",
  rating: 4,
  userImages: ["/", "/", "/", "/"],
  userCount: 10,
  sitterResponse: true,
  sitterReply: "Thank you for your kind words Mark!",
  sitterImage: "/",
  sitterName: "Rebecca W."
};
const sitterServices = [{
  service: "Boarding",
  description: "in the sitter's home",
  price: "¥40",
  period: "per night"
}, {
  service: "House Sitting",
  description: "in the home",
  price: "¥40",
  period: "per night"
}, {
  service: "Drop-In Visits",
  description: "visit in your home",
  price: "¥40",
  period: "per night"
}, {
  service: "Doggy Day Care",
  description: "in the sitter's home",
  price: "¥40",
  period: "per night"
}, {
  service: "Dog Walking",
  description: "in your neighborhood",
  price: "¥40",
  period: "per night"
}];
const sitterStates = {
  bookingForMe: 100,
  bookingByMe: 50,
  pBookingForMe: 20,
  pBookingByMe: 15,
  pTotalBooking: 25,
  totalEarning: 34000,
  pTotalEarning: -25,
  totalReferral: 10,
  pTotalReferral: 10
};
const requestsArray = [{
  name: "Finch’s",
  service: "Dog Walk",
  address: "Vancouver, WA, 98686",
  from: "29 Jun 2021",
  to: "30 Jun 2021",
  total: "¥350"
}, {
  name: "Finch’s",
  service: "Dog Walk",
  address: "Vancouver, WA, 98686",
  from: "29 Jun 2021",
  to: "30 Jun 2021",
  total: "¥360"
}, {
  name: "Finch’s",
  service: "Dog Walk",
  address: "Vancouver, WA, 98686",
  from: "29 Jun 2021",
  to: "30 Jun 2021",
  total: "¥370"
}, {
  name: "Finch’s",
  service: "Dog Walk",
  address: "Vancouver, WA, 98686",
  from: "29 Jun 2021",
  to: "30 Jun 2021",
  total: "¥380"
}];
const meetingRequests = [{
  date: 0,
  service: "Day Care",
  clientName: "David T.",
  address: " Vancouver, WA, 98686"
}, {
  date: 0,
  service: "Day Care",
  clientName: "David T.",
  address: " Vancouver, WA, 98687"
}, {
  date: 0,
  service: "Day Care",
  clientName: "David T.",
  address: " Vancouver, WA, 98688"
}, {
  date: 0,
  service: "Day Care",
  clientName: "David T.",
  address: " Vancouver, WA, 98689 "
}];
const reservationRequests = [{
  id: 1,
  from: "29 Jun 2021, 3PM",
  to: "30 Jun 2021, 3PM",
  paymentStatus: "PAID",
  total: "¥350",
  name: "Molly’s - Day Care",
  clientName: "David T.",
  address: "Vancouver, WA, 98686",
  image: "/"
}, {
  id: 1,
  from: "29 Jun 2021, 3PM",
  to: "30 Jun 2021, 3PM",
  paymentStatus: "PAID",
  total: "¥350",
  name: "Molly’s - Day Care",
  clientName: "David T.",
  address: "Vancouver, WA, 98686",
  image: "/"
}, {
  id: 1,
  from: "29 Jun 2021, 3PM",
  to: "30 Jun 2021, 3PM",
  paymentStatus: "PAID",
  total: "¥350",
  name: "Molly’s - Day Care",
  clientName: "David T.",
  address: "Vancouver, WA, 98686",
  image: "/"
}, {
  id: 1,
  from: "29 Jun 2021, 3PM",
  to: "30 Jun 2021, 3PM",
  paymentStatus: "PAID",
  total: "¥350",
  name: "Molly’s - Day Care",
  clientName: "David T.",
  address: "Vancouver, WA, 98686",
  image: "/"
}, {
  id: 1,
  from: "29 Jun 2021, 3PM",
  to: "30 Jun 2021, 3PM",
  paymentStatus: "PAID",
  total: "¥350",
  name: "Molly’s - Day Care",
  clientName: "David T.",
  address: "Vancouver, WA, 98686",
  image: "/"
}]; //Important

const myServices = [{
  serviceName: "Boarding",
  description: "Your client’s pets come to your home and stay overnight.",
  active: true,
  instantBooking: false,
  specifications: ["Lives in a House", "Get your first booking sooner", "Make more money on the weekends (Thu-Sun)"],
  route: "/user/my-services/boarding"
}, {
  serviceName: "Grooming",
  description: "Your client can come or you can go for grooming services of their pets",
  active: true,
  instantBooking: true,
  specifications: [],
  route: "/user/my-services/grooming"
}, {
  serviceName: "House Sitting",
  description: "You go to your client’s home and stay overnight, taking care of their dogs and home.",
  active: false,
  instantBooking: true,
  specifications: [],
  route: "/user/my-services/boarding"
}, {
  serviceName: "Drop-In Visits",
  description: "Your clients ask you to do 60-minute home visits to feed and play with their pets",
  active: true,
  instantBooking: true,
  specifications: [],
  route: "/user/my-services/boarding"
}, {
  serviceName: "Pet Day Care",
  description: "Your client’s pets stay at your home during the day, Drop offs are around 7-9am, and pick ups are around 4-6pm.",
  active: true,
  instantBooking: true,
  specifications: [],
  route: "/user/my-services/boarding"
}, {
  serviceName: "Dog Walking",
  description: "Your clients request 30-minute dog walk in their neighborhood",
  active: true,
  instantBooking: true,
  specifications: [],
  route: "/user/my-services/boarding"
}, {
  serviceName: "House Call",
  description: "Your client’s ask you to bring veterinary care into client’s home.",
  active: true,
  instantBooking: true,
  specifications: [],
  route: "/user/my-services/boarding"
}];
const spots = [{
  images: ["/images/img9.png", "/images/img9.png", "/images/img9.png", "/images/img9.png", "/images/img9.png"],
  name: "Pets Home Stay",
  location: "Shinjuku City, Tokyo",
  availableFor: ["Dog", "Cat"],
  rating: "4.69",
  review: 10,
  repeatedClient: 43
}, {
  images: ["/images/img9.png", "/images/img9.png", "/images/img9.png", "/images/img9.png", "/images/img9.png"],
  name: "Pets Home Stay",
  location: "Shinjuku City, Tokyo",
  availableFor: ["Dog", "Cat"],
  rating: "4.69",
  review: 10,
  repeatedClient: 43
}];
const reviews = [{
  name: "Doggytales Home Stay",
  place: "Pet friendly Hotel",
  address: "Shinjuku City, Tokyo",
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  rating: 4.5,
  image: "/images/review-img1.png"
}, {
  name: "Doggytales Home Stay",
  place: "Pet friendly Hotel",
  address: "Shinjuku City, Tokyo",
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  rating: 4,
  image: "/images/review-img1.png"
}, {
  name: "Doggytales Home Stay",
  place: "Pet friendly Hotel",
  address: "Shinjuku City, Tokyo",
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  rating: 3.5,
  image: "/images/review-img1.png"
}, {
  name: "Doggytales Home Stay",
  place: "Pet friendly Hotel",
  address: "Shinjuku City, Tokyo",
  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  rating: 5,
  image: "/images/review-img1.png"
}];
const gender = [{
  label: "Male",
  value: 0
}, {
  label: "Female",
  value: 1
}];

/***/ }),

/***/ "./public/lang/Strings.js":
/*!********************************!*\
  !*** ./public/lang/Strings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "strings": () => (/* binding */ strings)
/* harmony export */ });
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-localization */ "react-localization");
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_localization__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eng */ "./public/lang/eng.js");


let strings = new (react_localization__WEBPACK_IMPORTED_MODULE_0___default())({
  eng: _eng__WEBPACK_IMPORTED_MODULE_1__.eng
});

/***/ }),

/***/ "./public/lang/eng.js":
/*!****************************!*\
  !*** ./public/lang/eng.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eng": () => (/* binding */ eng)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const eng = {
  searchSitter: "Search Sitter",
  becomeASitter: "Become a Sitter",
  ourServices: "Our Services",
  signUp: "Sign Up",
  signIn: "Sign In",
  help: "Help",
  explore: "Explore",
  company: "COMPANY",
  aboutUs: "About Us",
  contact: "Contact",
  career: "Career",
  privacyPolicy: "Privacy Policy",
  termsOfUser: "Terms of Use",
  cookiePolicy: "Cookie Policy",
  petSpots: "Pet Spots",
  blogs: "Blogs",
  faqs: "FAQs",
  safety: "Safety",
  newsAndSafety: "News & Events",
  newsroom: "Newsroom",
  eventsAndUpdates: "Events & Update",
  stayConnected: "Stay Connected",
  subscribe: "Subscribe",
  followPetcation: "Follow Petcation",
  addYourPetSpot: "Add Your pet spot",
  allRightsReserved: "© petcation.com, Inc. All rights reserved.",
  loveCareAndAllNeedsForPets: "Love, care and all needs for pets",
  bookTrustedSitters: " Book trusted sitters and dog walkers & much more with petcation.",
  yourPet: "Your pet: ",
  yaaPetLovers: "Yaa-! Pet Lovers",
  weMadeItSuperEasyTitle: " We’ve made it super easy for you to ﬁnd a lovely,trusted pet sitter, pet boarding, dog walking & much more in your neighbourhood.",
  petBoarding: "Pet Boarding",
  weMadeItSuperEazyPetBoarding: "We’ve made it super easy for you to ﬁnd a lovely,trusted pet sitter, pet boarding.",
  houseSitting: "House Sitting",
  dropInVisits: "Drop-In Visits",
  petDayCare: "Pet Day Care",
  dogWalking: "Dog Wallking",
  houseCall: "House Call",
  grooming: "Grooming",
  bookWithProfessionalPetSitter: "Book with professional pet sitters you can trust.",
  verifiedPetSitters: "Verified pet sitters",
  AllSitterPassABasicCheck: "All sitters pass a basic background check",
  knowSitterPersonally: "Know sitter personally",
  AllSittersProvide: "All sitters provide a detailed profile and personal information",
  CertifiedPetSitters: "Certified pet sitters",
  AllSittersHaveAnimalCertifications: "All sitters have animal certifications.",
  bookYourPetcationSitter: "Book your petcation sitter!",
  petcationGuarantee: "Petcation Guarantee",
  AllServicesBookedOnPetcation: "All services booked on Petcation are backed by the  Petcation Guarantee.",
  whyChoosePetcation: "Why Choose Petcation",
  findThePerfectHouseKeeper: "Find the Perfect Housekeeper near your neighborhood  anytime. Safety and Security are our top priority",
  verifiedSitters: "Verified sitters",
  allPetcationSittersHavePassedOur: "All Petcation sitters have passed our stringent selection process and had their identity verified.",
  professionalCare: "Professional Care",
  yourPetsSafetyIsOurTopPriority: "Your pet’s safety is our top priority. Every sitter is well equipped with certifications & first-aid training.",
  s247support: "24/7 support",
  WeAreHereToHelpYouAndYourPet: " We're here to help you and your pet whenever you need us. Sitters also have access to vetenary specialists.",
  petcitationforPetOwners: "Petcation for Pet Owners",
  searchAndConnectWithTrusted: "Search and connect with trusted pet sitters. It's easy  as 1, 2, 3.",
  findAVerifiedPetSitter: "Find a verified pet sitter",
  searchAndFindExperiencedLocal: "Search and find experienced local pet sitters  nearby",
  arrangeAMeetGreet: "Arrange a meet & greet",
  getToKnowYourSitter: "Get to know your sitter in person, obligation-free.",
  bookSafelyOnlinePayments: "Book safely online payments",
  bookYourSitterThroughOurSafeOnline: "Book your sitter through our safe online system,with flexible cancellations as per sitters policy.",
  properUpdates: "Proper Updates",
  onceJobCompletesYouCanRate: "Once job completes you can rate & review your sitter",
  ratingAndReviews: "Rating & Reviews",
  exploreOurSitter: "Explore Our Sitters",
  petcationForPetSitters: "Petcation for Pet Sitters",
  wannaBePartnerWithUs: "Wanna be Partner with us?",
  whatEverPetServiceYouProvide: " Whatever pet service you provide, we'll find the pet sitter, groomer, boarding or dog walker jobs you need.",
  s100Verifiedjobs: "100% Verified jobs",
  Easyprofileverifications: "Easy profile verifications",
  Instantpayouts: "Instant payouts",
  Listyourboarding: "List your boarding",
  Becomeapetsitter: "Become a pet sitter",
  updateWhenIMoveTheMap: "Update when I move the map",
  SaveSearch: "Save Search",
  apply: "Apply",
  more: "More",
  AllPrices: "All Prices",
  Howmanypets: "How many pets?",
  Dogsize: "Dog size(lbs)",
  Pettypes: "Pet type(s)",
  Howoftenyouwantservice: "How often you want service?",
  Check_out: "Check-out",
  Check_in: "Check-in",
  PetcationVerified: "Petcation Verified",
  PetcationNotVerified: "Petcation not Verified",
  Onlinenow: "Online now",
  Petstakencare: "Pets taken care",
  HappyCustomers: "Happy Customers",
  Rehirerate: "Rehire rate",
  Experience: "Experience",
  Mypets: "My pets",
  Aboutplace: "About place",
  AdditionalSkills: "Additional Skills",
  Reviews: "Reviews",
  Overallrating: "Overall rating",
  Cleanliness: "Cleanliness",
  Accuracy: "Accuracy",
  Communication: "Communication",
  Location: "Location",
  Value: "Value",
  Availability: "Availability",
  Available: "Available",
  Unavailable: "Unavailable",
  BoardingCancellationpolicy: "Boarding Cancellation policy",
  Extrainfoaboutlocality: "Extra info about locality",
  Dashboard: "Dashboard",
  Reservations: "Reservations",
  Myprofile: "My profile",
  MyServices: "My Services",
  FavouriteSitters: "Favourite Sitters",
  Myspots: "My spots",
  PasswordAndSecurity: "Password & Security",
  PaymentsAndpayouts: "Payments & payouts",
  Paymenthistory: "Payment history",
  Globalpreferences: "Global preferences",
  PointsAndcoupon: "Points & coupon",
  TotalBookings: "Total Bookings",
  Week: "Week",
  TotalEarnings: "Total Earnings",
  TotalReferral: "Total Referral",
  LatestBookingRequests: "Latest Booking Requests",
  ViewAll: "View All",
  From: "From",
  To: "To",
  Total: "Total",
  Accept: "Accept",
  Pending: "Pending",
  MakePayment: "Make payment",
  Edit: "Edit",
  Remove: "Remove",
  MeetingRequests: "Meeting Requests",
  MyPortfolio: "My Portfolio",
  deletePet: "Delete pet",
  areYouSure: 'Are you sure?',
  addAvailability: "Add availability",
  Addmoreimages: " Add more images",
  NewsFeeds: "News Feeds",
  Excellent: "Excellent",
  ViewProfile: "View Profile",
  Exploreamazingplaces: " Explore amazing places to visit with your pets",
  Petcare: "Petcare",
  Seeall: "See all",
  Kmsfromyourcurrentlocation: "from your current location",
  responserate: "response rate",
  Seeavailability: "See availability",
  SeeAdditionalServicesRates: "See Additional Services & ratingAndReviews",
  Address: "Address",
  Client: "Client",
  Meetat: "Meet at",
  Reject: "Reject",
  Cancel: "Cancel",
  Rejected: "Rejected",
  Payment: "Payment",
  Basicinfo: "Basic info",
  AddressInfo: "Address Info",
  Defaultavailability: "Default availability",
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Addslot: "Add slot",
  Saturday: "Saturday",
  Save: "Save",
  HomeAddressLine: "Home Address Line",
  AptHouseNo: "Apt./House No.",
  City: "City",
  Stateorprovince: "State or province",
  ZIPpostalpostcode: "ZIP/postal/postcode",
  Fullname: "Full name",
  Emailaddress: "Email address",
  enterEmailAddress: 'Enter your registered email address',
  enterOtp: 'Enter OTP',
  enterNewPassword: 'Enter new password',
  enterOldPassword: 'Enter current password',
  enterConfirmPassword: 'Enter confirm password',
  otp: 'OTP',
  newPassword: 'New Password',
  oldPassword: 'Old Password',
  confirmPassword: 'Confirm Password',
  Contactnumber: "Contact number",
  Birthdate: "Birth date",
  addServiceFirst: "You need to add a service first ",
  Profileverification: "Profile verification",
  uploadImageText: "Uplaod your ID images to verify your profile, make sure the deatisl you enterd on your profile should match the information in ID card",
  SelectIDcardtype: "Select ID card type",
  Passport: "Passport",
  Verifymyprofile: "Verify my profile",
  Liscenseverification: "Liscense verification",
  uploadliscenseText: "Uplaod your liscense images to verify that you are acertified sitter, these liscenses will be verified by our team for the saftey of pets.",
  Addnewpet: "Add new pet",
  Ihave: "I have",
  Dog: "Dog",
  Cat: "Cat",
  Birds: "Birds",
  Reptiles: "Reptiles",
  Smallanimals: "Small animals",
  Name: "Name",
  Weight: "Weight",
  Age: "Age",
  Bread: "Bread",
  Sex: "Sex",
  Whichserviceswouldyouliketooffer: "Which services would you like to offer",
  Setservicestocative: "Set services to cative that you want to appear in the search and receive new business for. Use away mode when you are on vacation, or can’t respond to new. requests",
  SaveandContinue: "Save & Continue",
  ACTIVE: "ACTIVE",
  INSTANTBOOKING: "INSTANT BOOKING",
  Manage: "Manage",
  Allservices: "All services",
  Boarding: "Boarding",
  Service: "Service",
  Whatis: "What is",
  onPetcation: "on Petcation?",
  ServiceAndFees: "Service & Fees",
  Preferences: "Preferences",
  Discounts: "Discounts",
  Specialdiscountforyourguests: "Special discount for your guests",
  offonfirstbookingwithyou: "20% off on first booking with you",
  Allowofonbookingamount: " Allow 20% of on booking amount for the first time guests. This offers can attract new guests and help you to earn more points and reviews",
  Noofferonthisservice: "No offer on this service",
  Lengthofstaydiscount: "Length-of-stay discount",
  Weeklydiscount: "Weekly discount",
  Thisdiscountwillapplytoanyreservation: "This discount will apply to any reservation of 7 to 12 nights",
  Monthlydiscount: " Monthly discount",
  Youravailabilitywhilepetisatboarding: "Your availability while pet is at boarding",
  Youcanselectfromtheoptionsparts: "You can select from the options part-time & fulltime selecting full-time means you are available all the time at home when boarding the pet.",
  whenhostingpetsinyourhomehowfrequentlycanyouprovidebreaks: "When hosting pets in your home, how frequently can you provide breaks?",
  howfrequentlycanyouprovidepottybreaks: "When hosting pets in your home, how frequently can you provide potty breaks, or walks, or feeds in case.",
  Canyoupickuppetfromclientplace: "Can you pickup pet from client’s place?",
  petType: "Pet type",
  serviceType: "Service Type",
  Welcomeagain: "Welcome again",
  Rememberme: "Remember me",
  Forgotpassword: "Forgot password?",
  resend: "Resent",
  Login: "Login",
  or: "or",
  ContinuewithFacebook: "Continue with Facebook",
  ContinuewithGoogle: "Continue with Google",
  ContinuewithTwitter: "Continue with Twitter",
  ContinuewithLine: "Continue with Line",
  Donthaveanaccount: "Don't have an account ? ",
  Registernow: "Register now",
  Createyourfreeaccounttoday: "Create your free account today",
  Firstname: "First name",
  Lastname: "Last name",
  DateofBirth: "Date of Birth",
  registerTerm: ", confirm that I am 13 years of age or older, and consent to receiving email communication",
  Joinnow: "Join now",
  Alreadyhaveanaccount: "Already have an account ? ",
  Forgotyourpassword: "Forgot your password?",
  Resetyourpassword: "Forgot your password?",
  forgotPasswordInstruction: "To reset your password enter your registered email address, we’ll send an email with link to reset you password",
  resetPasswordInstruction: "An otp is sent, to provided email address, please verify and reset your password",
  Submit: "Submit",
  resetPassword: "Reset Password",
  Bookingbyme: "Booking by me",
  Bookingforme: "Booking for me",
  Requestbyme: "Request by me",
  Requestforme: " Request for me",
  Sitterreservations: "Sitter reservations",
  Clientreservations: "Client reservations",
  MyFavourites: "My Favourites",
  MyReviews: "My Reviews",
  Spots: "Spots",
  Addnewspot: "Add new spot",
  Availablefor: "Available for",
  RepeatClients: "Repeat Clients",
  Sortby: "Sort by",
  RecentlyAdded: "Recently Added",
  Createnewpetspot: "Create new pet spot",
  Gener: "Genre",
  Gender: "Gender",
  idImage: "ID image (.jpeg, .jpg, .png, .doc, .pdf)",
  LiscenseNumber: "Liscense Number",
  verifyMyCertificate: "Verify my certificate",
  clickToUpload: "Click to uplaod your",
  Selectspotcategory: "Select spot category",
  basicinfo: "Basic info",
  Spotimages: "Spot images",
  Addmore: "Add more",
  Confirm: "Confirm",
  DetailedinfoAmenities: "Detailed info & Amenities",
  Reservationpossible: "Reservation possible",
  BudgetPayment: "Budget & Payment",
  Budget: "Budget",
  Cards: "Cards",
  serviceChrage: "Service Charge",
  methodOfPayment: "Method of Payment",
  BankingInfo: "Banking Info",
  DeleteCard: "Delete Card",
  SetDefault: "Set default",
  Addnewcard: "Add new card",
  bankPayment: "Bank Payment",
  EnterHere: "Enter here",
  RejectRequest: "Reject Request",
  passportNumber: "Passport Number",
  paymentNote: " Note: All payment method are secured with advanced security systems and we don’t store your card info.",
  noCardAddedTitle: "No Cards are added yet.",
  noReservation: "No reservation found!",
  noCoupons: "No coupons found!",
  noPets: "No pets found!",
  noRequest: "No requests found!",
  noBankAddedTitle: "No Bank details are added yet.",
  addCardUsingForm: "Please add a card using below form.",
  addBankUsingForm: "Please add bank info using below form.",
  noMsgYet: "No message received yet",
  enterCardNumber: "Enter card number here",
  Nameoncard: "Name on card",
  setDefaultCard: "Set as default card",
  Cardnumber: "Card number",
  Expiration: "Expiration",
  Addcard: "Add card",
  Addnewbankaccount: "Add new bank account",
  Typeofaccount: "Type of account:",
  PersonalAccount: "Personal Account",
  BusinessAccount: "Business Account",
  BankCountry: "Bank Country",
  BankCurrency: "Bank Currency",
  BankName: "Bank Name",
  BranchName: "Branch Name",
  EnterAccountNumber: "Enter Account Number",
  RoutingNumber: "Routing Number",
  EnterRoutingNumber: "Enter Routing Number",
  BankCode: "Bank Code",
  BankNameHere: "Bank name here",
  AccountHolderName: "Account Holder Name",
  AccountHolderNameHere: "Account holder name here",
  BranchCode: "Branch Code",
  AccountNumber: "Account Number",
  AccountType: "Account Type",
  BankAccountType: "Bank Account Type",
  Addnewaccount: "Add new account",
  BankAccountNumber: "Bank Account Number",
  PaymentHistory: "Payment History",
  WithdrawMoney: " Withdraw Money",
  Earnings: "Earnings",
  PendingEarnings: "Pending Earnings",
  Withdrawals: "Withdrawals",
  Payments: "Payments",
  Other: "Other",
  YourExpectedEarnings: "Your Expected Earnings",
  totalPayableAmount: "Total payable amount",
  Contactnow: "Contact now",
  Viewdetails: "View details",
  LookingforaPetSpot: "Looking for a Pet Spot",
  Search: "Search",
  Providespotinformation: "Provide spot information",
  Providespot: "Provide spot",
  information: "information",
  Categories: "Categories",
  Findbestpetspots: " Find best pet spots for your pets to spend a day.",
  RestaurantCafe: "Restaurant/Cafe",
  Dogruns: "Dog runs",
  PetGrooming: "Pet Grooming",
  LeisureOutdoor: "Leisure / Outdoor",
  PetfriendlyHotel: "Pet friendly Hotel",
  Park: "Park",
  Travel: "Travel",
  AnimalShelter: "Animal Shelter",
  Youcanfindspotsinplaces: "You can find spots in places you want.",
  Tokyo: "Tokyo",
  Osaka: "Osaka",
  Kyoto: "Kyoto",
  Sapporo: "Sapporo",
  Nagoya: "Nagoya",
  Kobe: "Kobe",
  Sendai: "Sendai",
  Chiba: "Chiba",
  FeaturedSpots: "Featured Spots",
  Loadmore: "Load more",
  Markyouravailability: " Mark your availability for user for all your services.",
  Notifications: "Notifications",
  noSitterFound: "We couldn't find any sitters that matched your criteria.",
  Receivemessagesfromhosts: "Receive messages from hosts and guests, including booking request.",
  Email: "Email",
  Textmessage: "Text message",
  Browsernotification: "Browser notification",
  Youcanmarkpickupserviceenable: " You can mark pickup service enable / disable for all service from here",
  Reminders: "Reminders",
  Receivebookingreminders: "Receive booking reminders, requests to write a review, pricing notice, and other reminders related to your activities",
  Promotionsandtips: "Promotions and tips",
  Phonecalls: "Phone calls",
  Generalpreferences: "General preferences",
  Language: "Language",
  SetyourpreferedlanguageforPetcatiaon: "Set your prefered language for Petcatiaon",
  Country: "Country",
  Currency: "Currency",
  Selectcurrencyforallyourtransactions: "Select currency for all your transactions with Petcation.",
  Passwordsettings: "Password settings",
  Whatpetswouldyoupreferforthisservice: "What pets would you prefer for this service?",
  boardingServicedescription: "Select the pets you will be willing to service for night boarding.",
  Flexible: "Flexible",
  Moderate: "Moderate",
  Strict: "Strict",
  Doyouchargetransportationfee: " Do you charge transportation fee?",
  MinPrice: "Min Price",
  MaxPrice: "Max Price",
  Makebookingwith: "Make booking with",
  Bookingfor: "Booking for",
  Needsittertopickupmypets: "Need sitter to pick up my pets",
  Questions: "Questions",
  Selectskills: "Select skills",
  restaurantName: 'Restaurant name',
  reviews: 'reviews',
  awards: 'Awards',
  gener: 'Genre',
  transportation: 'Transportation',
  spotHolidays: 'Spot holidays',
  serviceCharges: 'Service charges',
  reservations: 'Reservations',
  smoking: 'Smoking cessation / smoking',
  parking: 'Parking',
  serviceAmenities: 'Service & Amenities',
  addedBankAccount: "Added bank account",
  languages: "Languages",
  noonCharges: "Noon charges",
  nightCharges: "Night Charges",
  enterBankName: "Enter Bank name",
  branchName: "Enter Branch name",
  branchCode: "Enter Branch code",
  accountHolderName: "Enter Account holder name",
  accountNumber: "Enter Account number",
  routingNumber: "Enter Routing number",
  enterLocation: "Enter Location",
  bankCode: "Enter Bank code",
  enterZipCode: "Enter zip code",
  postalCode: "Postal code",
  locationKana: "Location Kana",
  locationKanji: "Location kanji",
  bookmarkSitter: "Successfully marked sitter as favourite",
  unmarkSitter: "Successfully unmarked sitter as favourite",
  errorUpdatingStatus: "Error updating status",
  pay: "Pay",
  acceptedBySitter: "Accepted by sitter",
  acceptedByYou: "Accepted by you",
  paymentPending: "Payment Pending",
  paymentDone: "Paid",
  status: 'Status',
  paymentInformation: 'Payment Information',
  selectPaymentMethod: "Select payment method",
  savedCards: "Saved Cards",
  doYouHaveCoupon: 'Do you have a coupon code ?',
  couponDetail: ' Enter your coupon code here to avail discount on you booking.',
  confirmBooking: 'Confirm booking',
  bookingDetails: 'Booking Details',
  totalAmount: 'Total Amount',
  transportFee: "Transportation fee",
  discount: "Discount",
  tax: 'Tax',
  subTotal: 'Subtotal',
  bookingSuccess: 'Booking Successful',
  bookedFor: 'Your booking for ',
  isSuccessful: ' is successful.',
  completed: 'Completed',
  cancelled: 'Cancelled',
  additionalService: "Additional services",
  transportationFee: 'Transportation fee'
};

/***/ }),

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "feather-icons-react":
/*!**************************************!*\
  !*** external "feather-icons-react" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("feather-icons-react");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-cookies");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-day-picker/DayPickerInput":
/*!**************************************************!*\
  !*** external "react-day-picker/DayPickerInput" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-day-picker/DayPickerInput");

/***/ }),

/***/ "react-day-picker/moment":
/*!******************************************!*\
  !*** external "react-day-picker/moment" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-day-picker/moment");

/***/ }),

/***/ "react-facebook-login/dist/facebook-login-render-props":
/*!************************************************************************!*\
  !*** external "react-facebook-login/dist/facebook-login-render-props" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-login");

/***/ }),

/***/ "react-localization":
/*!*************************************!*\
  !*** external "react-localization" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-localization");

/***/ }),

/***/ "react-simple-snackbar":
/*!****************************************!*\
  !*** external "react-simple-snackbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-simple-snackbar");

/***/ }),

/***/ "react-twitter-login":
/*!**************************************!*\
  !*** external "react-twitter-login" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-twitter-login");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL3BldGNhdGlvbi8uL2FwaS9BcGkudHMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vYXBpL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9jb21wb25lbnRzL2NvbW1vbi9ZZWFyTW9udGhGb3JtLnRzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9jb21wb25lbnRzL2hvYy93aXRoQXV0aC50c3giLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9wYWdlcy9GYWNlYm9va0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9wYWdlcy9Hb29nbGVMb2dpbi5qc3giLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vcGFnZXMvVHdpaXRlckxvZ2luLmpzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9wYWdlcy9zaWdudXAudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL3B1YmxpYy9hcHBEYXRhL0FwcERhdGEudHMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vcHVibGljL2xhbmcvU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9wdWJsaWMvbGFuZy9lbmcuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcImZlYXRoZXItaWNvbnMtcmVhY3RcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LWRheS1waWNrZXIvRGF5UGlja2VySW5wdXRcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdC1kYXktcGlja2VyL21vbWVudFwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3QtbG9jYWxpemF0aW9uXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3Qtc2ltcGxlLXNuYWNrYmFyXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1sb2dpblwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vaWdub3JlZHxDOlxceGFtcHA3XzRcXGh0ZG9jc1xccGV0Y2F0aW9uXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBVX0FDVElWRV9CT0FSRElORyxcclxuICBVX0FDVElWRV9EQVlfQ0FSRSxcclxuICBVX0FDVElWRV9EUk9QX0lOX1ZJU0lUUyxcclxuICBVX0FDVElWRV9HUk9PTUlORyxcclxuICBVX0FDVElWRV9IT1VTRV9DQUxMLFxyXG4gIFVfQUNUSVZFX0hPVVNFX1NJVFRJTkcsXHJcbiAgVV9BQ1RJVkVfUEVUX1dBTEtJTkcsXHJcbiAgVV9BRERfUEVULFxyXG4gIFVfQUREX1FVRVNUSU9OLFxyXG4gIFVfQUREX1NLSUxMLFxyXG4gIFVfQUREX1NQT1QsXHJcbiAgVV9BUlJBTkdfTUVFVFVQLFxyXG4gIFVfQk9BUkRJTkdfRElTQ09VTlRTLFxyXG4gIFVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFLFxyXG4gIFVfQk9BUkRJTkdfUFJFRkVSRU5DRSxcclxuICBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyxcclxuICBVX0RFTEVURV9QRVQsXHJcbiAgVV9ERUxFVEVfUVVFU1RJT04sXHJcbiAgVV9ERUxFVEVfU1BPVCxcclxuICBVX0RPR19XQUxLSU5HX0RJU0NPVU5ULFxyXG4gIFVfRE9HX1dBTEtJTkdfSU5GTyxcclxuICBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFLFxyXG4gIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFLFxyXG4gIFVfRFJPUF9JTl9WSVNJVEVTX1BSRUZFUkVOQ0UsXHJcbiAgVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMsXHJcbiAgVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSxcclxuICBVX0ZJTFRFUkVEX0FWQUlMQUJMRV9TSVRURVIsXHJcbiAgVV9HRVRfQUREUkVTUyxcclxuICBVX0dFVF9BTExfUEVUUyxcclxuICBVX0dFVF9BTExfU1BPVCxcclxuICBVX0dFVF9BVkFJTEFCSUxJVFksXHJcbiAgVV9HRVRfQVZBSUxBQklMSVRZX0JZX0RBVEVTLFxyXG4gIFVfR0VUX0FWQUlMQUJMRV9TRVJWSUNFUyxcclxuICBVX0dFVF9CQVNJQ19JTkZPLFxyXG4gIFVfR0VUX0JPQVJESU5HX0lORk8sXHJcbiAgVV9HRVRfQk9BUkRJTkdfUFJFVklFVyxcclxuICBVX0dFVF9CUkVFRF9XSVRIX1RZUEUsXHJcbiAgVV9HRVRfQ0lUSUVTLFxyXG4gIFVfR0VUX0NPVVRSSUVTLFxyXG4gIFVfR0VUX0RBU0hCT0FSRCxcclxuICBVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0RST1BfSU5fUFJFVklFVyxcclxuICBVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPLFxyXG4gIFVfR0VUX0dST09NSU5HX0lORk8sXHJcbiAgVV9HRVRfR1JPT01JTkdfUFJFVklFVyxcclxuICBVX0dFVF9IT1VTRV9DQUxMX0lORk8sXHJcbiAgVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXLFxyXG4gIFVfR0VUX0hPVVNFX0NBTExfU0VSVklDRSxcclxuICBVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8sXHJcbiAgVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0xBTkdBVUdFUyxcclxuICBVX0dFVF9QQVJLSU5HLFxyXG4gIFVfR0VUX1BBWU1FTlRfTUVUSE9EUyxcclxuICBVX0dFVF9QRVRTLFxyXG4gIFVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXLFxyXG4gIFVfR0VUX1BFVF9TRVJWSUNFLFxyXG4gIFVfR0VUX1BFVF9TUE9UUyxcclxuICBVX0dFVF9RVUVTVElPTlMsXHJcbiAgVV9HRVRfUkVTRVJWQVRJT05fVFlQRVMsXHJcbiAgVV9HRVRfU0VSVklDRVMsXHJcbiAgVV9HRVRfU0lOR0xFX1NJVFRFUixcclxuICBVX0dFVF9TSU5HTEVfU1BPVCxcclxuICBVX0dFVF9TSVRURVJfQVZBSUxBQklMSVRZLFxyXG4gIFVfR0VUX1NJVFRFUl9SRVNFUlZBVElPTlMsXHJcbiAgVV9HRVRfU0tJTExTLFxyXG4gIFVfR0VUX1NNT0tJTkdfQ0VTU0lPTlMsXHJcbiAgVV9HRVRfVEhSRUFEX0JPT0tJTkcsXHJcbiAgVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMsXHJcbiAgVV9HRVRfVVNFUl9TS0lMTFMsXHJcbiAgVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5ULFxyXG4gIFVfR1JPT01JTkdfU0VSVklDRV9GRUUsXHJcbiAgVV9HUk9PTUlOR19TRVJWSUNFX1BSRUZFUkVOQ0UsXHJcbiAgVV9IT1VTRV9DQUxMX0RJU0NPVU5ULFxyXG4gIFVfSE9VU0VfQ0FMTF9QUkVGRVJFTkNFLFxyXG4gIFVfSE9VU0VfQ0FMTF9TRVJWSUNFX0ZFRSxcclxuICBVX0hPVVNFX1NJVFRJTkdfRElTQ09VTlRTLFxyXG4gIFVfSE9VU0VfU0lUVElOR19QUkVGRVJFTkNFLFxyXG4gIFVfSE9VU0VfU0lUVElOR19TRVJWSUNFX0ZFRSxcclxuICBVX0lNQUdFX1VQTE9BRCxcclxuICBVX1BFVF9BRERJVElPTkFMX1JFUVVFU1QsXHJcbiAgVV9QRVRfQU1PVU5UX0NBTENVTEFUSU9OLFxyXG4gIFVfUEVUX0RBWV9DQVJFX0RJU0NPVU5ULFxyXG4gIFVfUEVUX0RBWV9DQVJFX0lORk8sXHJcbiAgVV9QRVRfREFZX0NBUkVfUFJFRkVSRU5DRSxcclxuICBVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMsXHJcbiAgVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZLFxyXG4gIFVfUEVUX1NQT1RfQ0FURUdPUklFUyxcclxuICBVX1JBVEVfU0lUVEVSLFxyXG4gIFVfUkVRVUVTVF9TSVRURVIsXHJcbiAgVV9TQVZFX0FERFJFU1MsXHJcbiAgVV9TQVZFX0JBU0lDX0lORk8sXHJcbiAgVV9TQVZFX0xPQ0FMSVRZLFxyXG4gIFVfU0FWRV9QT1JURk9MSU8sXHJcbiAgVV9TRU5EX01FU1NBR0UsXHJcbiAgVV9TRVRfQVZBSUxBQkxFX1NFUlZJQ0VTLFxyXG4gIFVfU0lOR0xFX1BFVCxcclxuICBVX1VQREFURV9QRVQsXHJcbiAgVV9VUERBVEVfU1BPVCxcclxuICBVX1VQTE9BRF9QUk9GSUxFX1BJQ1RVUkUsXHJcbiAgVV9VU0VSX0xPR0lOLFxyXG4gIFVfVVNFUl9SRUdJU1RFUixcclxuICBVX0FERF9DQVJELFxyXG4gIFVfR0VUX0NBUkQsXHJcbiAgVV9ERUxFVEVfQ0FSRCxcclxuICBVX0FERF9CQU5LX0FDQ09VTlQsXHJcbiAgVV9HRVRfQkFOS19BQ0NPVU5ULFxyXG4gIFVfR0VUX0JBTktfREVUQUlMUyxcclxuICBVX0RFTEVURV9CQU5LX0FDQ09VTlQsXHJcbiAgVV9HRVRfUEVUX1NQT1RfREVUQUlMUyxcclxuICBHT09HTEVfUExBQ0VTX0JBU0VfVVJMLFxyXG4gIEdPT0dMRV9QTEFDRVNfQVBJLFxyXG4gIFVfVVBMT0FEX0RPQ1VNRU5UUyxcclxuICBVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyxcclxuICBVX0FERF9UUkFOU1BPUlRfQ0hBUkdFUyxcclxuICBVX1VQREFURV9SRVFVRVNUX1NUQVRVUyxcclxuICBVX0JPT0tNQVJLX1NJVFRFUixcclxuICBVX0dFVF9SRVFVRVNUX0RFVEFJTCxcclxuICBVX0NPTkZJUk1fUEFZTUVOVCxcclxuICBVX1BBWU1FTlRfSElTVE9SWSxcclxuICBVX0dFVF9GQVZPUklURV9TSVRURVIsXHJcbiAgVV9DSEFOR0VfTUVFVFVQX1NUQVRVUyxcclxuICBVX0dFVF9NRUVUVVBTLFxyXG4gIFVfQ0hBVF9BQ1RJT04sXHJcbiAgVV9HRVRfRkFWT1JJVEVfU1BPVCxcclxuICBVX01BUktfVU5NQVJLX1NQT1QsXHJcbiAgVV9NQUtFX0NBUkRfX0RFRkFVTFQsXHJcbiAgVV9NQUtFX0JBTktfREVGQVVMVCxcclxuICBVX1JFU0VUX1BBU1NXT1JELFxyXG4gIFVfQ0hBTkdFX1BBU1NXT1JELFxyXG4gIFVfRk9SR09UX1BBU1NXT1JELFxyXG4gIFVfQVBQTFlfQ09VUE9OLFxyXG4gIFVfUkVNT1ZFX0NPVVBPTiwgVV9HRVRfQ09VUE9OLFxyXG4gIFVfUkVBRF9TVEFUVVMsIFVfUkVWSUVXX1NQT1QsXHJcbiAgVV9HRVRfTkVXUyxcclxuICBVX0dFVF9FVkVOVCxcclxuICBVX0dFVF9TSU5HTEVfTkVXUyxcclxuXHJcbn0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XHJcbmltcG9ydCBuZXh0Q29va2llIGZyb20gXCJuZXh0LWNvb2tpZXNcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly81NC4xNTEuMTYwLjgzL3BldGVjYXRpb24vcHVibGljL2FwaS9cIjtcclxuLy9jb25zdCBiYXNlVVJMID0gXCJodHRwOi8vMTkyLjE2OC4xLjI2L3BldGVjYXRpb24vcHVibGljL2FwaS9cIjtcclxuXHJcbmNvbnN0IGhlYWRlcnMgPSAodG9rZW4pID0+IHtcclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICB9O1xyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59O1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IChtZXRob2QsIHBhdGgsIGJvZHkgPSBudWxsLCBjdHggPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0ke3BhdGh9YDtcclxuICB2YXIgdG9rZW4gPSBudWxsO1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gIHRva2VuID0gY29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICBpZiAodG9rZW4gPT0gbnVsbCAmJiBjdHgpIHtcclxuICAgIHRva2VuID0gbmV4dENvb2tpZShjdHgpO1xyXG4gIH1cclxuICB2YXIgb3B0aW9ucyA9IHsgbWV0aG9kLCB1cmwsIGhlYWRlcnM6IGhlYWRlcnModG9rZW4pIH07XHJcblxyXG4gIGlmIChib2R5KSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7IGRhdGE6IGJvZHkgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXhpb3Mob3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xyXG4gIHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VU0VSX1JFR0lTVEVSLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VU0VSX0xPR0lOLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkVTRVRfUEFTU1dPUkQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQ0hBTkdFX1BBU1NXT1JELCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGZvcmdvdFBhc3N3b3JkKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0ZPUkdPVF9QQVNTV09SRCAsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaGJvYXJkKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfREFTSEJPQVJEKTtcclxuICB9XHJcblxyXG4gIGdldEJhc2ljSW5mbygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBU0lDX0lORk8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWRkcmVzcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0FERFJFU1MpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUJhc2ljSW5mbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TQVZFX0JBU0lDX0lORk8sIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUFkZHJlc3MoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfU0FWRV9BRERSRVNTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZFF1ZXN0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9RVUVTVElPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVRdWVzdGlvbih2YWwpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiREVMRVRFXCIsIFVfREVMRVRFX1FVRVNUSU9OICsgdmFsKTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXN0aW9ucygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1FVRVNUSU9OUyk7XHJcbiAgfVxyXG5cclxuICBnZXRTa2lsbHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TS0lMTFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclNraWxscygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1VTRVJfU0tJTExTKTtcclxuICB9XHJcblxyXG4gIGFkZFNraWxsKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9TS0lMTCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzYXZlTG9jYWxpdHlJbmZvKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1NBVkVfTE9DQUxJVFksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVBvcnRmb2xpbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TQVZFX1BPUlRGT0xJTywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0FWQUlMQUJJTElUWVxyXG4gIGdldEF2YWlsYWJsZVNlcnZpY2VzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQVZBSUxBQkxFX1NFUlZJQ0VTKTtcclxuICB9XHJcblxyXG4gIHNldEF2YWlsYWJsZVNlcnZpY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfU0VUX0FWQUlMQUJMRV9TRVJWSUNFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFiaWxpdHkoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0FWQUlMQUJJTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFiaWxpdHlCeURhdGUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0FWQUlMQUJJTElUWV9CWV9EQVRFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL01ZIFBFVFNcclxuICBhZGRQZXQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUREX1BFVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQZXRzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQUxMX1BFVFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlUGV0cyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9TSU5HTEVfUEVUICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGV0KGRhdGEsIGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUERBVEVfUEVUICsgaWQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUGV0KGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkRFTEVURVwiLCBVX0RFTEVURV9QRVQgKyBpZCk7XHJcbiAgfVxyXG5cclxuICAvL1NlcnZpY2VcclxuICBnZXRTZXJ2aWNlKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfU0VSVklDRVMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlQm9hcmRpbmcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0JPQVJESU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZURheUNhcmUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0RBWV9DQVJFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUhvdXNlU2l0dGluZyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfSE9VU0VfU0lUVElORywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVEcm9wSW5WaXNpdHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0RST1BfSU5fVklTSVRTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZVBldFdhbGtpbmcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX1BFVF9XQUxLSU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUdyb29taW5nKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FDVElWRV9HUk9PTUlORywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVIb3VzZUNhbGwoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0hPVVNFX0NBTEwsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9Ib3VzZSBjYWxsXHJcbiAgZ2V0SG91c2VDYWxsSW5mbyh2YWwpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0hPVVNFX0NBTExfSU5GTyArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VzZUNhbGxTZXJ2aWNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9IT1VTRV9DQUxMX1NFUlZJQ0UsIGRhdGEpO1xyXG4gIH1cclxuICBob3VzZUNhbGxTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX0NBTExfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VDYWxsUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9DQUxMX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VDYWxsRGlzY291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfQ0FMTF9ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VzZUNhbGxQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vR3Jvb21pbmdcclxuICBnZXRHcm9vbWluZ1NlcnZpY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX1BFVF9TRVJWSUNFLCBkYXRhKTtcclxuICB9XHJcbiAgZ2V0R3Jvb21pbmdJbmZvKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfR1JPT01JTkdfSU5GTyArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBncm9vbWluZ1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR1JPT01JTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ3Jvb21pbmdTZXJ2aWNlUHJlZmVybmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBncm9vbWluZ1NlcnZpY2VEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEdyb29taW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0dST09NSU5HX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9CT0FSRElOR1xyXG4gIGJvYXJkaW5nU2VydmljZUZlZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT0FSRElOR19QRVRfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRpbmdQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0JPQVJESU5HX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRpbmdEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT0FSRElOR19ESVNDT1VOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm9hcmRpbmdJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9CT0FSRElOR19JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm9hcmRpbmdQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQk9BUkRJTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL0hPVVNFIFNJVFRJTkdcclxuICBnZXRIb3VzZVNpdHRpbmdJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8gKyBpZCk7XHJcbiAgfVxyXG5cclxuICBob3VzZVNpdHRpbmdTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX1NJVFRJTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VTaXR0aW5nRGlzY291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfU0lUVElOR19ESVNDT1VOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VTaXR0aW5nUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9TSVRUSU5HX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91c2VTaXR0aW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0hPVVNFX1NJVFRJTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL0Ryb3AgaW4gdmlzaXRzXHJcbiAgZ2V0RHJvcEluVmlzaXRzSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRFJPUF9JTl9WSVNJVFNfSU5GTyArIGlkKTtcclxuICB9XHJcblxyXG4gIGRyb3BJblZpc2l0c1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRFJPUF9JTl9WSVNJVFNfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZHJvcEluVmlzaXRQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RST1BfSU5fVklTSVRFU19QUkVGRVJFTkNFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRyb3BJblZpc2l0RGlzY291bnRzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RST1BfSU5fVklTSVRTX0RJU0NPVU5UUywgZGF0YSk7XHJcbiAgfVxyXG4gIGdldERyb3BJblZpc2l0c1ByZXZpZXcoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9EUk9QX0lOX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9QZXQgZGF5IGNhcmVcclxuICBnZXRQZXREYXlDYXJlSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9QRVRfREFZX0NBUkVfSU5GTyArIGlkKTtcclxuICB9XHJcblxyXG4gIHBldERheUNhdGVTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGV0RGF5Q2FyZVByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEVUX0RBWV9DQVJFX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGV0RGF5Q2FyZURpc2NvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXREYXlDYXJlUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vRG9nIHdhbGtpbmdcclxuICBnZXREb2dXYWxraW5nSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9ET0dfV0FMS0lOR19JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgRG9nV2Fsa2luZ1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZG9nV2Fsa2luZ1ByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRvZ1dhbGtpbmdEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ET0dfV0FMS0lOR19ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXREb2dXYWxraW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0RPR19XQUxLSU5HX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9TSVRURVIgUkVRVUVTVFxyXG4gIHBldEFkZGl0aW9uYWxTZXJ2aWNlcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9QRVRfQURESVRJT05BTF9SRVFVRVNULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHBldEFtb3VudENhbGN1bGF0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9BTU9VTlRfQ0FMQ1VMQVRJT04sIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2l0dGVyUmVxdWVzdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRVFVRVNUX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VSZXF1ZXN0U3RhdHVzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwZXRTZXJ2aWNlQXZhaWxhYmlsaXR5KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9TRVJWSUNFX0FWQUlBTEFCSUxJVFksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9EQVNIT0JPQVJEXHJcbiAgZ2V0U2l0dGVyUmVzZXJ2ZXRpb25zKGRhdGEsIHBhZ2UpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9TSVRURVJfUkVTRVJWQVRJT05TICsgXCI/cGFnZT1cIiArIHBhZ2UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclJlc2VydmF0aW9ucyhkYXRhLCBwYWdlKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMgKyBcIj9wYWdlPVwiICsgcGFnZSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0NIQVRcclxuICBzZW5kTWVzc2FnZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TRU5EX01FU1NBR0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhdEFjdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9DSEFUX0FDVElPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRUaHJlYWRCb29raW5nKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfVEhSRUFEX0JPT0tJTkcgKyB2YWwpO1xyXG4gIH1cclxuXHJcbiAgYXJyYW5nZU1lZXR1cChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BUlJBTkdfTUVFVFVQLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU1lZXR1cFN0YXR1cyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9DSEFOR0VfTUVFVFVQX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRNZWV0dXBSZXF1ZXN0KGlkKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX01FRVRVUFMgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRUcmFuc3BvcnRDaGFyZ2VSZXF1ZXN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfVFJBTlNQT1JUX0NIQVJHRVMgKyBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZFRyYW5zcG9ydENoYXJnZVJlcXVlc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfVFJBTlNQT1JUX0NIQVJHRVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmVxdWVzdFN0YXR1cyhkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQREFURV9SRVFVRVNUX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZWFkU3RhdHVzKGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkVBRF9TVEFUVVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9DT01NT05cclxuICBnZXRDb3V0aXJlcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NPVVRSSUVTKTtcclxuICB9XHJcbiAgZ2V0Q2l0aWVzKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9DSVRJRVMgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXRzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEVUUyk7XHJcbiAgfVxyXG5cclxuICBnZXRCcmVlZFdpdGhUeXBlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9CUkVFRF9XSVRIX1RZUEUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9JTUFHRV9VUExPQUQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyZWRBdmlhbGFibGVTaXR0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRklMVEVSRURfQVZBSUxBQkxFX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0RmF2b3JpdGVTaXR0ZXJzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9GQVZPUklURV9TSVRURVIsZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRQcm9maWxlUGljdHVyZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUExPQURfUFJPRklMRV9QSUNUVVJFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZERvY3VtZW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQTE9BRF9ET0NVTUVOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9TcG90c1xyXG4gIGdldFBldFNwb3RzQ2F0ZWdvcnkoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX1BFVF9TUE9UX0NBVEVHT1JJRVMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGV0U3BvdHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX1BFVF9TUE9UUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBtYXJrVW5tYXJrU3BvdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BUktfVU5NQVJLX1NQT1QsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGV0U3BvdERldGFpbHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEVUX1NQT1RfREVUQUlMUyArIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF5bWVudE1ldGhvZHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9QQVlNRU5UX01FVEhPRFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVzZXJ2YXRpb25UeXBlcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1JFU0VSVkFUSU9OX1RZUEVTKTtcclxuICB9XHJcblxyXG4gIGdldFNtb2tpbmdDZXNzaW9uKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfU01PS0lOR19DRVNTSU9OUyk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXJraW5nKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEFSS0lORyk7XHJcbiAgfVxyXG5cclxuICBnZXRMYW5nYXVnZXMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9MQU5HQVVHRVMpO1xyXG4gIH1cclxuXHJcbiAgYWRkU3BvdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfU1BPVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTcG90KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUERBVEVfU1BPVCArIGlkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJhdGVTaXR0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkFURV9TSVRURVIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlU2l0dGVyKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfU0lUVEVSICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgbWFya1VubWFya1NpdHRlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT09LTUFSS19TSVRURVIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsU3BvdHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9BTExfU1BPVCk7XHJcbiAgfVxyXG5cclxuICBnZXRGYXZvcml0ZVNwb3RzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRkFWT1JJVEVfU1BPVCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVTcG90KHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJERUxFVEVcIiwgVV9ERUxFVEVfU1BPVCArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVTcG90KGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfU1BPVCArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFNpdHRlckF2YWlsYWJpbGl0eShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfU0lUVEVSX0FWQUlMQUJJTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByYXRlUmV2aWV3U3BvdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRVZJRVdfU1BPVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL1BheW1lbnQgYW5kIEJhbmsgYWNjb3VudFxyXG4gIGFkZE5ld0NhcmQoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfQ0FSRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxDYXJkKCl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9DQVJEKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ERUxFVEVfQ0FSRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhZGROZXdCYW5rQWNjb3VudChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9CQU5LX0FDQ09VTlQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsQmFua0FjY291bnQoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBTktfQUNDT1VOVCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxCYW5rQWNjb3VudERldGFpbHMoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBTktfREVUQUlMUyk7XHJcbiAgfVxyXG5cclxuICBtYXJrQ2FyZEFzRGVmYXVsdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BS0VfQ0FSRF9fREVGQVVMVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBtYWtlQmFua0FzRGVmYXVsdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BS0VfQkFOS19ERUZBVUxULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUJhbmtBY2NvdW50KGlkKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfREVMRVRFX0JBTktfQUNDT1VOVCArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFNpbmdsZVJlcXVlc3REZXRhaWwoaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUkVRVUVTVF9ERVRBSUwgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBjb25maXJtUGF5bWVudChpZCxkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NPTkZJUk1fUEFZTUVOVCArIGlkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHBheW1lbnRIaXN0b3J5KGRhdGEsIHBhZ2Upe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEFZTUVOVF9ISVNUT1JZICsgYD9wYWdlPSR7cGFnZX1gLGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0dGVkQWRkcmVzcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYCR7R09PR0xFX1BMQUNFU19CQVNFX1VSTH0vZGV0YWlscy9qc29uP3BsYWNlaWQ9JHtpZH0ma2V5PSR7R09PR0xFX1BMQUNFU19BUEl9YDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IGFwaVVybCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGFwcGx5Q291cG9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FQUExZX0NPVVBPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb3Vwb24oaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9SRU1PVkVfQ09VUE9OICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291cG9ucyh0eXBlKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NPVVBPTiArIHR5cGUgKTtcclxuICB9XHJcbiAgLy9OZXdzXHJcblxyXG4gIGdldE5ld3MoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX05FV1MgICk7XHJcbiAgfVxyXG5cclxuICBnZXRFdmVudHMoKVxyXG4gIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0VWRU5UICApO1xyXG4gIH1cclxuICBnZXRTaW5nbGVOZXdzKClcclxuICB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfTkVXUylcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFVfVVNFUl9SRUdJU1RFUiA9IFwidXNlci1yZWdpc3RlclwiO1xyXG5leHBvcnQgY29uc3QgVV9VU0VSX0xPR0lOID0gXCJ1c2VyLWxvZ2luXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EQVNIQk9BUkQgPSBcInVzZXIvZGFzaGJvYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NBVkVfQkFTSUNfSU5GTyA9IFwidXNlci9zYXZlLWJhc2ljLWluZm9cIjtcclxuZXhwb3J0IGNvbnN0IFVfU0FWRV9BRERSRVNTID0gXCJ1c2VyL3NhdmUtYWRkcmVzc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFTSUNfSU5GTyA9IFwidXNlci9nZXQtYmFzaWMtaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQUREUkVTUyA9IFwidXNlci9nZXQtYWRkcmVzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfRk9SR09UX1BBU1NXT1JEID0gXCJmb3JnZXQtcGFzc3dvcmRcIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBTkdFX1BBU1NXT1JEID0gXCJ1c2VyL2NoYW5nZS1wYXNzd29yZFwiO1xyXG5leHBvcnQgY29uc3QgVV9SRVNFVF9QQVNTV09SRCA9IFwicmVzZXQtcGFzc3dvcmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVX0FERF9RVUVTVElPTiA9IFwidXNlci9hZGQtcXVlc3Rpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9RVUVTVElPTiA9IFwidXNlci9kZWxldGUtcXVlc3Rpb24vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9RVUVTVElPTlMgPSBcInVzZXIvZ2V0LXF1ZXN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NLSUxMUyA9IFwiZ2V0LXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfVVNFUl9TS0lMTFMgPSBcInVzZXIvZ2V0LXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9BRERfU0tJTEwgPSBcInVzZXIvYWRkLXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9TQVZFX0xPQ0FMSVRZID0gXCJ1c2VyL3NhdmUtbG9jYWxpdHktaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVV9TQVZFX1BPUlRGT0xJTyA9IFwidXNlci9zYXZlLXBvcnRmb2xpby1pbWFnZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHT09HTEVfUExBQ0VTX0JBU0VfVVJMID0gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2VcIjtcclxuZXhwb3J0IGNvbnN0IEdPT0dMRV9QTEFDRVNfQVBJID0gXCJBSXphU3lCaGxtNWRmc3dDbjNlUExiSGdpVjFFdVE0OGs5U2RZQ3dcIjtcclxuLy9leHBvcnQgY29uc3QgR09PR0xFX1BMQUNFU19BUEkgPSBcIkFJemFTeUFHemJELWJXeVNDSGh2cEt0aV80MEpzdnRpM1RsanhCOFwiO1xyXG5cclxuLy9NWSBQRVRTXHJcbmV4cG9ydCBjb25zdCBVX0FERF9QRVQgPSBcInVzZXIvYWRkLW5ldy1wZXRcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FMTF9QRVRTID0gXCJ1c2VyL2dldC1hbGwtcGV0c1wiO1xyXG5leHBvcnQgY29uc3QgVV9TSU5HTEVfUEVUID0gXCJ1c2VyL2dldC1zaW5nbGUtcGV0L1wiO1xyXG5leHBvcnQgY29uc3QgVV9VUERBVEVfUEVUID0gXCJ1c2VyL3VwZGF0ZS1wZXQtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfREVMRVRFX1BFVCA9IFwidXNlci9kZWxldGUtcGV0LWluZm8vXCI7XHJcblxyXG4vL01ZIFNlcnZpY2VcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NFUlZJQ0VTID0gXCJnZXQtc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FWQUlMQUJMRV9TRVJWSUNFUyA9IFwic2l0dGVyL3NlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NFVF9BVkFJTEFCTEVfU0VSVklDRVMgPSBcInNpdHRlci9zZXJ2aWNlLWF2YWlsYWJpbGl0eVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQVZBSUxBQklMSVRZID0gXCJzaXR0ZXIvYXZhaWxhYmlsaXR5LXNlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BVkFJTEFCSUxJVFlfQllfREFURVMgPSBcInNpdHRlci9kYXRlLWF2YWlsYWJpbGl0eS1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9CT09LTUFSS19TSVRURVIgPSBcIm1hcmstYXMtZmF2b3JpdGVcIlxyXG5cclxuLy9Cb2FyZGluZ1xyXG5leHBvcnQgY29uc3QgVV9BQ1RJVkVfQk9BUkRJTkcgPSBcInVzZXIvYm9hcmRpbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9CT0FSRElOR19QUkVGRVJFTkNFID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfQk9BUkRJTkdfRElTQ09VTlRTID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9CT0FSRElOR19JTkZPID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0JPQVJESU5HX1BSRVZJRVcgPSBcInVzZXIvYWxsLWJvYXJkaW5nLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy9Ib3VzZSBzaXR0aW5nXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9IT1VTRV9TSVRUSU5HID0gXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0hPVVNFX1NJVFRJTkdfSU5GTyA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfU0lUVElOR19TRVJWSUNFX0ZFRSA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9TSVRUSU5HX0RJU0NPVU5UUyA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX1NJVFRJTkdfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXID1cclxuICBcInVzZXIvYWxsLWhvdXNlLXNpdHRpbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0RBWSBjYXJlXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9EQVlfQ0FSRSA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5cclxuLy9Ecm9wLWluIHZpc2l0XHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9EUk9QX0lOX1ZJU0lUUyA9IFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPID0gXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSA9IFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lURVNfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMgPVxyXG4gIFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EUk9QX0lOX1BSRVZJRVcgPSBcInVzZXIvYWxsLWRyb3AtaW4tdmlzaXQtc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL1BFVCB3YWxraW5nIHZpc2l0c1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfUEVUX0RBWV9DQVJFX0lORk8gPSBcInVzZXIvZGF5LWNhcmUtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfREFZX0NBUkVfU0VSVklDRV9GRUVTID0gXCJ1c2VyL2RheS1jYXJlLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfREFZX0NBUkVfUFJFRkVSRU5DRSA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLXByZWZlcmVuY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLWRpc2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX0RBWV9DQVJFX1BSRVZJRVcgPSBcInVzZXIvYWxsLWRheS1jYXJlLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy8gIERvZyB3YWxraW5nXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9QRVRfV0FMS0lORyA9IFwidXNlci93YWxraW5nLXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX0lORk8gPSBcInVzZXIvd2Fsa2luZy1zZXJ2aWNlLWluZm8vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL3dhbGtpbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL3dhbGtpbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9ET0dfV0FMS0lOR19ESVNDT1VOVCA9IFwidXNlci93YWxraW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXID0gXCJ1c2VyL2FsbC13YWxraW5nLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy9TaXR0ZXIgUmVxdWVzdFxyXG5leHBvcnQgY29uc3QgVV9QRVRfQURESVRJT05BTF9SRVFVRVNUID0gXCJzaXR0ZXIvcGV0LWFkZGl0aW9uYWwtc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUEVUX0FNT1VOVF9DQUxDVUxBVElPTiA9IFwic2l0dGVyL3BldC1hbW91bnQtY2FsY3VsYXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX1JFUVVFU1RfU0lUVEVSID0gXCJzaXR0ZXIvcGV0LXJlcXVlc3RcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1JFUVVFU1RfREVUQUlMID0gXCJzaXR0ZXIvcGV0LXJlcXVlc3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyA9IFwiY2hhbmdlLXNpdHRlci1yZXF1ZXN0LXN0YXR1c1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZID0gXCJzaXR0ZXIvcGV0LXNlcnZpY2UtYXZhaWxhYmlsaXR5XCI7XHJcbmV4cG9ydCBjb25zdCBVX0NPTkZJUk1fUEFZTUVOVCA9IFwic2l0dGVyL2NvbmZpcm0tcGF5bWVudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfUEFZTUVOVF9ISVNUT1JZID0gXCJwYXltZW50LWhpc3RvcnlcIjtcclxuXHJcbi8vR1JPT01JTkdcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0dST09NSU5HID0gXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9HUk9PTUlOR19JTkZPID0gXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BFVF9TRVJWSUNFID0gXCJnZXQtZ3Jvb21pbmctc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR1JPT01JTkdfU0VSVklDRV9GRUUgPSBcInVzZXIvZ3Jvb21pbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR1JPT01JTkdfU0VSVklDRV9ESVNDT1VOVCA9IFwidXNlci9ncm9vbWluZy1zZXJ2aWNlLWRpc2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfR1JPT01JTkdfUFJFVklFVyA9IFwidXNlci9hbGwtZ3Jvb21pbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0hvdXNlIGNhbGxcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0hPVVNFX0NBTEwgPSBcInVzZXIvaG91c2UtY2FsbC1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfQ0FMTF9JTkZPID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfQ0FMTF9TRVJWSUNFID0gXCJnZXQtaG91c2UtY2FsbC1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9DQUxMX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX0NBTExfUFJFRkVSRU5DRSA9IFwidXNlci9ob3VzZS1jYWxsLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfQ0FMTF9ESVNDT1VOVCA9IFwidXNlci9ob3VzZS1jYWxsLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9IT1VTRV9DQUxMX1BSRVZJRVcgPSBcInVzZXIvYWxsLWhvdXNlLWNhbGwtc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0Rhc2hib2FyZFxyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lUVEVSX1JFU0VSVkFUSU9OUyA9IFwiZ2V0LXNpdHRlci1yZXNlcnZhdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1VTRVJfUkVTRVJWQVRJT05TID0gXCJnZXQtdXNlci1yZXNlcnZhdGlvbnNcIjtcclxuXHJcbi8vQ0hBVFxyXG5leHBvcnQgY29uc3QgVV9TRU5EX01FU1NBR0UgPSBcInNlbmQtbWVzc2FnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9SRUFEX1NUQVRVUyA9IFwidGhyZWFkLXJlYWQtc3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9USFJFQURfQk9PS0lORyA9IFwiZ2V0LXRocmVhZC1ib29raW5ncy9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQVJSQU5HX01FRVRVUCA9IFwiY3JlYXRlLW1lZXQtdXBcIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBTkdFX01FRVRVUF9TVEFUVVMgPSBcIm1lZXQtdXAtc3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9NRUVUVVBTID0gXCJnZXQtbWVldC11cC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBVF9BQ1RJT04gPSBcImNoYXQtdGhyZWFkLXN0YXR1c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyA9IFwic2l0dGVyL3JlcXVlc3QtdHJhbnNwb3J0LWFtb3VudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQUREX1RSQU5TUE9SVF9DSEFSR0VTID0gXCJzaXR0ZXIvcmVxdWVzdC10cmFuc3BvcnQtYW1vdW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgIFVfVVBEQVRFX1JFUVVFU1RfU1RBVFVTID0gXCJjaGFuZ2Utc2l0dGVyLXJlcXVlc3Qtc3RhdHVzXCI7XHJcblxyXG4vL1BFVCBTUE9UXHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BTExfU1BPVCA9IFwic2l0dGVyL3Nwb3RzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9GQVZPUklURV9TUE9UID0gXCJnZXQtZmF2b3JpdGUtc3BvdHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUEVUX1NQT1RfQ0FURUdPUklFUyA9IFwiZ2V0LXNwb3QtY2F0ZWdvcmllc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX1NQT1RTID0gXCJnZXQtc3BvdHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BFVF9TUE9UX0RFVEFJTFMgPSBcInNwb3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QQVlNRU5UX01FVEhPRFMgPSBcImdldC1wYXltZW50LW1ldGhvZHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1JFU0VSVkFUSU9OX1RZUEVTID0gXCJnZXQtcmVzZXJ2YXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9TTU9LSU5HX0NFU1NJT05TID0gXCJnZXQtc21va2luZy1jZXNzaW9uc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEFSS0lORyA9IFwiZ2V0LXBhcmtpbmdzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9MQU5HQVVHRVMgPSBcImdldC1sYW5ndWFnZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfQUREX1NQT1QgPSBcInNpdHRlci9jcmVhdGUtc3BvdFwiO1xyXG5leHBvcnQgY29uc3QgVV9VUERBVEVfU1BPVCA9IFwic2l0dGVyL3VwZGF0ZS1zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9ERUxFVEVfU1BPVCA9IFwic2l0dGVyL3JlbW92ZS1zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lOR0xFX1NQT1QgPSBcInNpdHRlci9zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9NQVJLX1VOTUFSS19TUE9UID0gXCJtYXJrLXNwb3QtYXMtZmF2b3JpdGVcIjtcclxuZXhwb3J0IGNvbnN0IFVfUkVWSUVXX1NQT1QgPSBcInNwb3QtcmV2aWV3LXJhdGVcIjtcclxuXHJcbi8vQ09NTU9OXHJcbmV4cG9ydCBjb25zdCBVX1JBVEVfU0lUVEVSID0gXCJzaXR0ZXItcmV2aWV3LXJhdGVcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0NJVElFUyA9IFwiZ2V0LWNpdGllcy9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0NPVVRSSUVTID0gXCJnZXQtY291bnRyaWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QRVRTID0gXCJnZXQtcGV0c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQlJFRURfV0lUSF9UWVBFID0gXCJnZXQtYnJlZWRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0lNQUdFX1VQTE9BRCA9IFwidXBsb2FkXCI7XHJcbmV4cG9ydCBjb25zdCBVX1VQTE9BRF9QUk9GSUxFX1BJQ1RVUkUgPSBcInVzZXIvc2F2ZS1wcm9maWxlLXBpY1wiO1xyXG5leHBvcnQgY29uc3QgVV9GSUxURVJFRF9BVkFJTEFCTEVfU0lUVEVSID0gXCJnZXQtYXZhaWxhYmxlLXNpdHRlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NJTkdMRV9TSVRURVIgPSBcImdldC1zaXR0ZXItcHJvZmlsZS9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NJVFRFUl9BVkFJTEFCSUxJVFkgPSBcInNpdHRlci9wZXQtc2VydmljZS1hdmFpbGFiaWxpdHlcIjtcclxuZXhwb3J0IGNvbnN0IFVfVVBMT0FEX0RPQ1VNRU5UUyA9IFwidXNlci91cGxvYWQtZG9jdW1lbnRcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0ZBVk9SSVRFX1NJVFRFUiA9IFwiZ2V0LWZhdm9yaXRlLXNpdHRlcnNcIjtcclxuXHJcbi8vUGF5bWVudCBDYXJkICYgQmFuayBkZXRhaWxzXHJcbmV4cG9ydCBjb25zdCBVX0FERF9DQVJEID0gXCJ1c2VyL2FkZC1jYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9DQVJEID0gXCJ1c2VyL2dldC1jYXJkc1wiO1xyXG5leHBvcnQgY29uc3QgVV9ERUxFVEVfQ0FSRCA9IFwidXNlci9kZWxldGUtY2FyZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBVX0FERF9CQU5LX0FDQ09VTlQgPSBcInVzZXIvY3JlYXRlLWJhbmstYWNjb3VudFwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFOS19BQ0NPVU5UID0gXCJ1c2VyL2dldC1hbGwtYmFuay1hY2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFOS19ERVRBSUxTID0gXCJ1c2VyL2dldC1iYW5rLWRldGFpbHMvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9CQU5LX0FDQ09VTlQgPSBcInVzZXIvZGVsZXRlLWJhbmstYWNjb3VudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfTUFLRV9CQU5LX0RFRkFVTFQgPSAndXNlci9kZWZhdWx0LWJhbmstYWNjb3VudCc7XHJcbmV4cG9ydCBjb25zdCBVX01BS0VfQ0FSRF9fREVGQVVMVCA9ICd1c2VyL21ha2UtZGVmYXVsdC1jYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBVX0FQUExZX0NPVVBPTiA9ICdzaXR0ZXIvYXBwbHktY291cG9uJztcclxuZXhwb3J0IGNvbnN0IFVfUkVNT1ZFX0NPVVBPTiA9ICdzaXR0ZXIvcmVtb3ZlLWNvdXBvbi8nO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQ09VUE9OID0gJ3VzZXIvZ2V0LXNhdmVkLWNvdXBvbnMvJztcclxuZXhwb3J0IGNvbnN0IFVfR0VUX05FV1MgPSAnZ2V0LW5ld3MtZXZlbnRzLzEnO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfRVZFTlQgPSAnZ2V0LW5ld3MtZXZlbnRzLzInO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lOR0xFX05FV1M9XCJzaW5nbGUtbmV3cy1ldmVudC8yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3VjY2Vzc09wdGlvbnMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1jZW50ZXInLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdtaWRuaWdodGJsdWUnLFxyXG5cclxuICAgICAgICBjb2xvcjogJ21pZG5pZ2h0Ymx1ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGNsb3NlU3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Y29yYWwnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmFpbHVyZU9wdGlvbnMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1jZW50ZXInLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdtaWRuaWdodGJsdWUnLFxyXG5cclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Ymx1ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGNsb3NlU3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Y29yYWwnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB9LFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFllYXJNb250aEZvcm0oe1xyXG4gIGRhdGUsXHJcbiAgbG9jYWxlVXRpbHMsXHJcbiAgb25DaGFuZ2UsXHJcbiAgYmVmb3JlLFxyXG4gIHN0YXJ0UmFuZ2UgPSBudWxsLFxyXG4gIGVuZFJhbmdlID0gbnVsbCwgaXNEb2JcclxufSkge1xyXG4gIGNvbnN0IG1vbnRocyA9IGxvY2FsZVV0aWxzLmdldE1vbnRocygpO1xyXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoYmVmb3JlID8gMCA6IG51bGwpLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgZnJvbU1vbnRoID0gc3RhcnRSYW5nZSA/IHN0YXJ0UmFuZ2UgOiBuZXcgRGF0ZShjdXJyZW50WWVhciwgMCk7XHJcbiAgY29uc3QgdG9Nb250aCA9IGVuZFJhbmdlXHJcbiAgICA/IGVuZFJhbmdlXHJcbiAgICA6IGJlZm9yZVxyXG4gICAgPyBuZXcgRGF0ZSgpXHJcbiAgICA6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDEwLCAxMSk7XHJcblxyXG4gIGNvbnN0IHllYXJzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IGZyb21Nb250aC5nZXRGdWxsWWVhcigpOyBpIDw9IHRvTW9udGguZ2V0RnVsbFllYXIoKTsgaSArPSAxKSB7XHJcbiAgICBpZihpc0RvYiAmJiBpPCh0b01vbnRoLmdldEZ1bGxZZWFyKCktMTIpKXtcclxuICAgICAgeWVhcnMucHVzaChpKTtcclxuICAgIH1lbHNlIGlmKCFpc0RvYikge1xyXG4gICAgICB5ZWFycy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHsgeWVhciwgbW9udGggfSA9IGUudGFyZ2V0LmZvcm07XHJcbiAgICBvbkNoYW5nZShuZXcgRGF0ZSh5ZWFyLnZhbHVlLCBtb250aC52YWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJEYXlQaWNrZXItQ2FwdGlvblwiPlxyXG4gICAgICA8c2VsZWN0IG5hbWU9XCJtb250aFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtkYXRlLmdldE1vbnRoKCl9PlxyXG4gICAgICAgIHttb250aHMubWFwKChtb250aCwgaSkgPT4gKFxyXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e21vbnRofSB2YWx1ZT17aX0+XHJcbiAgICAgICAgICAgIHttb250aH1cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgICAgPHNlbGVjdCBuYW1lPVwieWVhclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtkYXRlLmdldEZ1bGxZZWFyKCl9PlxyXG4gICAgICAgIHt5ZWFycy5tYXAoKHllYXIpID0+IChcclxuICAgICAgICAgIDxvcHRpb24ga2V5PXt5ZWFyfSB2YWx1ZT17eWVhcn0+XHJcbiAgICAgICAgICAgIHt5ZWFyfVxyXG4gICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFllYXJNb250aEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgY29va2llID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbmNvbnN0IHdpdGhBdXRoID0gKENvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnN0IEF1dGggPSAocHJvcHMpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHZhciB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0b2tlbiA9PSBudWxsIHx8IHRva2VuID09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgICByb3V0ZXIucGF0aG5hbWUgIT0gXCIvc2lnbmluXCIgJiZcclxuICAgICAgICByb3V0ZXIucGF0aG5hbWUgIT0gXCIvc2lnbnVwXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvc2lnbmluXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIChyb3V0ZXIucGF0aG5hbWUgPT0gXCIvc2lnbmluXCIgfHwgcm91dGVyLnBhdGhuYW1lID09IFwiL3NpZ251cFwiKSAmJlxyXG4gICAgICAgIHRva2VuXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBBdXRoLmdldEluaXRpYWxQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gQXV0aDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzJ1xyXG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3B1YmxpYy9sYW5nL1N0cmluZ3NcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRmFjZWJvb2socHJvcHMpIHtcclxuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uU3VjY2Vzcz0gKHJlcykgPT4ge1xyXG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBTdWNjZXNzOiBjdXJyZW50VXNlcjonLCByZXMpO1xyXG4gICAgICAgIHN1Y2Nlc3MgPT09IHRydWUgJiYgcm91dGVyLnB1c2goe3BhdGhuYW1lOicvJ30pXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgIGBMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5ICR7cmVzLm5hbWV9IHdlbGNvbWUgU2VlIGNvbnNvbGUgZm9yIGZ1bGwgcHJvZmlsZSBvYmplY3QuYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3VjY2VzcyA9PT0gdHJ1ZSAmJiByb3V0ZXIucHVzaCh7cGF0aG5hbWU6Jy8nfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3Qgb25GYWlsdXJlID0gKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBmYWlsZWQ6IHJlczonLCByZXMpO1xyXG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFwcElkID0gXCI1NTU3MDEwMzUwOTc2OTk5XCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgICAgIGFwcElkPXthcHBJZH0gLy8gd2UgY3JlYXRlZCB0aGlzLCByZW1lbWJlcj9cclxuICAgICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02XCIgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNvY2lhbC1pY25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9mYWNlYm9vay5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBsLTAgbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5Db250aW51ZXdpdGhGYWNlYm9va31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgICAgICBjYWxsYmFjaz17b25TdWNjZXNzfVxyXG4gICAgICAgICAgICBvbkZhaWx1cmU9e29uRmFpbHVyZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG59XHJcbnsvKm9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9Ki99XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0R29vZ2xlTG9naW4gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb29nbGVMb2dpbihwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IG9uU3VjY2VzcyA9IChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gU3VjY2VzczogY3VycmVudFVzZXI6JywgcmVzKTtcclxuICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgYExvZ2dlZCBpbiBzdWNjZXNzZnVsbHkgd2VsY29tZSAke3Jlcy5wcm9maWxlT2JqLm5hbWV9ICBTZWUgY29uc29sZSBmb3IgZnVsbCBwcm9maWxlIG9iamVjdC5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICByb3V0ZXIucHVzaCh7cGF0aG5hbWU6Jy8nfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgb25GYWlsdXJlID0gKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBmYWlsZWQ6IHJlczonLCByZXMpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsaWVudElkID0gJzEwMjE2NjQ2NDQxNzItNnE3YWxhZnZjM3JoZ2Exa2xwc29uZGZ0NDdxanZ2NnUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgY2xpZW50SWQ9e2NsaWVudElkfVxyXG4gICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02XCIgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNvY2lhbC1pY25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvZ29vZ2xlLXBsdXMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGwtMCBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkNvbnRpbnVld2l0aEdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17b25TdWNjZXNzfVxyXG4gICAgICAgICAgICBvbkZhaWx1cmU9e29uRmFpbHVyZX1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RUd2l0dGVyTG9naW4gZnJvbSBcInJlYWN0LXR3aXR0ZXItbG9naW5cIjtcclxuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUd2l0dGVyTG9naW4oKSB7XHJcbiAgICBjb25zdCBhdXRoSGFuZGxlciA9IChlcnJvciwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0VHdpdHRlckxvZ2luXHJcbiAgICAgICAgICAgIGF1dGhDYWxsYmFjaz17YXV0aEhhbmRsZXJ9XHJcbiAgICAgICAgICAgIGNvbnN1bWVyS2V5PVwiQ0Vka3ZuMndzam5EUndWV05YOHkxMGVwblwiIC8vIFdlIGNyZWF0ZWQgdGhpcywgcmVtZW1iZXI/XHJcbiAgICAgICAgICAgIGNvbnN1bWVyU2VjcmV0PVwiMkRVOWF1YWpVV0JST1AwdFRiQ29sY0cwOHlaZjRCR3FNQ0sxZDAwV2pYMnJGcDFlR0xcIiAvLyBXZSBjcmVhdGVkIHRoaXMsIHJlbWVtYmVyP1xyXG4gICAgICAgICAgICBjaGlsZHJlbj17XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc29jaWFsLWljbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvdHdpdHRlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBsLTAgbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkNvbnRpbnVld2l0aFR3aXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3B1YmxpYy9sYW5nL1N0cmluZ3NcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBEYXlQaWNrZXJJbnB1dCBmcm9tIFwicmVhY3QtZGF5LXBpY2tlci9EYXlQaWNrZXJJbnB1dFwiO1xyXG5pbXBvcnQgcGFyc2VEYXRlIGZyb20gXCJyZWFjdC1kYXktcGlja2VyL21vbWVudFwiO1xyXG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tIFwicmVhY3QtZGF5LXBpY2tlci9tb21lbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQVBJIGZyb20gXCIuLi9hcGkvQXBpXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XHJcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gXCJyZWFjdC1zaW1wbGUtc25hY2tiYXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL2hvYy93aXRoQXV0aFwiO1xyXG5pbXBvcnQgWWVhck1vbnRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vWWVhck1vbnRoRm9ybVwiO1xyXG5pbXBvcnQgeyBlcnJvck9wdGlvbnMgfSBmcm9tIFwiLi4vcHVibGljL2FwcERhdGEvQXBwRGF0YVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IEZlYXRoZXJJY29uIGZyb20gXCJmZWF0aGVyLWljb25zLXJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkdvb2dsZSBmcm9tICcuL0dvb2dsZUxvZ2luJztcclxuaW1wb3J0IExvZ2luTGluZSBmcm9tICcuL0xpbmVMb2dpbic7XHJcbmltcG9ydCBUd2l0dGVyTG9naW4gZnJvbSAnLi9Ud2lpdGVyTG9naW4nO1xyXG5pbXBvcnQgTG9naW5GYWNlYm9vayBmcm9tIFwiLi9GYWNlYm9va0xvZ2luXCI7XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICBjb25kaXRpb246IGJvb2xlYW47XHJcbiAgZXJyb3JzOiBhbnk7XHJcbiAgbW9udGg6IERhdGU7XHJcbiAgc2hvd0NvbmZpcm06IGJvb2xlYW47XHJcbiAgc2hvd1Bhc3M6IGJvb2xlYW47XHJcbiAgcmVtZW1iZXJNZTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgYXBpID0gbmV3IEFQSSgpO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgSVN0YXRlPiB7XHJcbiAgcHJpdmF0ZSBwYXNzd29yZElucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XHJcbiAgcHJpdmF0ZSBjb25maXJtSW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0ZU9mQmlydGg6IG51bGwsXHJcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBjb25kaXRpb246IGZhbHNlLFxyXG4gICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICBtb250aDogbmV3IERhdGUoKSxcclxuICAgICAgcmVtZW1iZXJNZTogZmFsc2UsXHJcbiAgICAgIHNob3dDb25maXJtOiBmYWxzZSxcclxuICAgICAgc2hvd1Bhc3M6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMucGFzc3dvcmRJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5jb25maXJtSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFuZGxlRGF0ZUNoYW5nZSA9IHRoaXMuaGFuZGxlRGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRleHRDaGFuZ2UgPSB0aGlzLm9uVGV4dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaGVja2JveE9uQ2hhbmdlID0gdGhpcy5jaGVja2JveE9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoZWNrYm94UmVtZW1iZXJPbkNoYW5nZSA9IHRoaXMuY2hlY2tib3hSZW1lbWJlck9uQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEYXRlQ2hhbmdlKGRheSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVPZkJpcnRoOiBkYXkgfSk7XHJcbiAgfVxyXG5cclxuICBvblRleHRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9IGFzIHsgW0sgaW4ga2V5b2YgSVN0YXRlXTogSVN0YXRlW0tdIH0pO1xyXG4gIH07XHJcblxyXG4gIGNoZWNrYm94T25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb25kaXRpb246IGV2ZW50LnRhcmdldC5jaGVja2VkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2hlY2tib3hSZW1lbWJlck9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcmVtZW1iZXJNZTogIXRoaXMuc3RhdGUucmVtZW1iZXJNZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuICByZWdpc3RlclVzZXIgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZighdGhpcy5zdGF0ZS5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgbGV0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgICBlcnJvcnMuY29uZmlybVBhc3N3b3JkID0gJ0VudGVyIGNvbmZpcm0gcGFzc3dvcmQnO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVycm9yc30pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2EnLGVycm9ycylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3JzOiB7fSxcclxuICAgIH0pO1xyXG4gICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGZpcnN0bmFtZTogdGhpcy5zdGF0ZS5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3RuYW1lOiB0aGlzLnN0YXRlLmxhc3ROYW1lLFxyXG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgZG9iOiB0aGlzLnN0YXRlLmRhdGVPZkJpcnRoXHJcbiAgICAgICAgPyBtb21lbnQodGhpcy5zdGF0ZS5kYXRlT2ZCaXJ0aCkuZm9ybWF0KFwiREQvTU0veXl5eVwiKVxyXG4gICAgICAgIDogbnVsbCxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgIGlzX2FncmVlOiB0aGlzLnN0YXRlLmNvbmRpdGlvbixcclxuICAgIH0pO1xyXG4gICAgYXBpXHJcbiAgICAgIC5yZWdpc3RlclVzZXIoZGF0YSlcclxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgaWQ9JHtqc29uLmRhdGEucmVzcG9uc2UuaWR9OyBwYXRoPS9gO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGB0b2tlbj0ke2pzb24uZGF0YS5yZXNwb25zZS50b2tlbn07IHBhdGg9L2A7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGZpcnN0bmFtZT0ke2pzb24uZGF0YS5yZXNwb25zZS5maXJzdG5hbWV9OyBwYXRoPS9gO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBsYXN0bmFtZT0ke2pzb24uZGF0YS5yZXNwb25zZS5sYXN0bmFtZX07IHBhdGg9L2A7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGVtYWlsPSR7anNvbi5kYXRhLnJlc3BvbnNlLmVtYWlsfTsgcGF0aD0vYDtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgcHJvZmlsZV9waWN0dXJlPSR7anNvbi5kYXRhLnJlc3BvbnNlLnByb2ZpbGVfcGljdHVyZX07IHBhdGg9L2A7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHBob25lX251bWJlcj0ke2pzb24uZGF0YS5yZXNwb25zZS5waG9uZV9udW1iZXJ9OyBwYXRoPS9gO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLnJlbWVtYmVyTWUpe1xyXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHJlbV9lbWFpbD0ke3RoaXMuc3RhdGUuZW1haWx9OyBwYXRoPS9gO1xyXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHJlbV9wYXNzPSR7dGhpcy5zdGF0ZS5wYXNzd29yZH07IHBhdGg9L2A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MjIpIHtcclxuICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMuaXNfYWdyZWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vcGVuU25hY2tiYXIoXCJBZ3JlZSB0byBUZXJtcyBhbmQgY29uZGl0aW9uXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKG1vbnRoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbW9udGg6IG1vbnRoLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlU2VjdXJlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UGFzczogIXRoaXMuc3RhdGUuc2hvd1Bhc3N9KVxyXG4gIH07XHJcblxyXG4gIHRvZ2dsZUNvbmZpcm1QYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dDb25maXJtOiAhdGhpcy5zdGF0ZS5zaG93Q29uZmlybX0pXHJcbiAgfTtcclxuICBvblN1Y2Nlc3MgPSAocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTG9naW4gU3VjY2VzczogY3VycmVudFVzZXI6JywgcmVzLnByb2ZpbGVPYmopO1xyXG4gICAgYWxlcnQoXHJcbiAgICAgICAgYExvZ2dlZCBpbiBzdWNjZXNzZnVsbHkgd2VsY29tZSAke3Jlcy5wcm9maWxlT2JqLm5hbWV9ICBTZWUgY29uc29sZSBmb3IgZnVsbCBwcm9maWxlIG9iamVjdC5gXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICBvbkZhaWx1cmUgPSAocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTG9naW4gZmFpbGVkOiByZXM6JywgcmVzKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWN0b3JcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWltZyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0xNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkNyZWF0ZXlvdXJmcmVlYWNjb3VudHRvZGF5fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3N0cmluZ3MuRmlyc3RuYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17XCJlcnJvci10ZXh0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JzLmZpcnN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuZXJyb3JzLmZpcnN0bmFtZVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5lcnJvcnMuZmlyc3RuYW1lID8gXCJpbnZhbGlkXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsLXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3N0cmluZ3MuTGFzdG5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtcImVycm9yLXRleHRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMubGFzdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmVycm9ycy5sYXN0bmFtZVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5lcnJvcnMubGFzdG5hbWUgPyBcImludmFsaWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntzdHJpbmdzLkVtYWlsYWRkcmVzc308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e1wiZXJyb3ItdGV4dFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9ycy5lbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuZXJyb3JzLmVtYWlsWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmVycm9ycy5lbWFpbCA/IFwiaW52YWxpZFwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntzdHJpbmdzLkRhdGVvZkJpcnRofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIHZhbGlkLWNvbnRyb2wgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZXJyb3JzLmRvYiA/IFwiaW52YWxpZFwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5UGlja2VySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdERhdGU9e2Zvcm1hdERhdGUuZm9ybWF0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRGF0ZT17cGFyc2VEYXRlLnBhcnNlRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheVBpY2tlclByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogdGhpcy5zdGF0ZS5tb250aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ6ICh7IGRhdGUsIGxvY2FsZVV0aWxzIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WWVhck1vbnRoRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEb2I9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtkYXRlID8gZGF0ZSA6IG5ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVVdGlscz17bG9jYWxlVXRpbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiREQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlT2ZCaXJ0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5Q2hhbmdlPXt0aGlzLmhhbmRsZURhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnBhc3N3b3JkSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZCA/IFwiaW52YWxpZFwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS5zaG93UGFzcyA/IFwidGV4dFwiOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXRoZXJJY29uICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1leWUgZmEtdy0xOCBmYS0yeCBleWUtaWNvblwiIGljb249e3RoaXMuc3RhdGUuc2hvd1Bhc3MgPyBcImV5ZS1vZmZcIiA6IFwiZXllXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNlY3VyZVBhc3N3b3JkfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtcImVycm9yLXRleHRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBwYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jb25maXJtSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmVycm9ycy5jb25maXJtUGFzc3dvcmQgPyBcImludmFsaWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybS1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS5zaG93Q29uZmlybSA/IFwidGV4dFwiOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0aGVySWNvbiAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZXllIGZhLXctMTggZmEtMnggZXllLWljb25cIiBpY29uPXt0aGlzLnN0YXRlLnNob3dDb25maXJtID8gXCJleWUtb2ZmXCIgOiBcImV5ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVDb25maXJtUGFzc3dvcmR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTYgY29sLXNtLTYgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVjayBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoZWNrYm94UmVtZW1iZXJPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc19uYW1lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLlJlbWVtYmVybWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2sgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGVja2JveE9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY29uZGl0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YEkgYWdyZWUgdG8gYH08bGFiZWwgY2xhc3NOYW1lPVwiY3JlYXRlLWFjY291bnRcIj48TGluayBocmVmPXsnJ30+PGEgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPjwvTGluaz48L2xhYmVsPiBhbmQgPGxhYmVsIGNsYXNzTmFtZT1cImNyZWF0ZS1hY2NvdW50XCI+PExpbmsgaHJlZj17Jyd9PjxhIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+UHJpdmFjeSBQb2xpY3k8L2E+PC9MaW5rPjwvbGFiZWw+e3N0cmluZ3MucmVnaXN0ZXJUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlZ2lzdGVyVXNlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5Kb2lubm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5PclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyT3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbk9yXCI+e3N0cmluZ3Mub3J9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luRmFjZWJvb2sgb25DbGljaz17dGhpcy5yZWdpc3RlclVzZXIuYmluZCh0aGlzKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Hb29nbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJMb2dpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzb2NpYWwtaWNuc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2xpbmUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPExvZ2luTGluZS8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwbC0wIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuQ29udGludWV3aXRoTGluZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY3JlYXRlLWFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMCBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5BbHJlYWR5aGF2ZWFuYWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL3NpZ25pblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntzdHJpbmdzLkxvZ2lufTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgod2l0aFNuYWNrYmFyKFNpZ251cCwgZXJyb3JPcHRpb25zKSk7XHJcbiIsImltcG9ydCB7IHNlcnZpY2VzVmVyc2lvbiB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XHJcblxyXG5leHBvcnQgdHlwZSBzZWxlY3QgPSB7XHJcbiAga2V5OiBudW1iZXI7XHJcbiAgdmFsdWU6IGFueTtcclxuICBsYWJlbDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgcGV0ID0ge1xyXG4gIGFnZTogbnVtYmVyO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgd2VpZ2h0OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VjY2Vzc09wdGlvbnMgPSB7XHJcbiAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgc3R5bGU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIGZvbnRGYW1pbHk6IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgY2xvc2VTdHlsZToge1xyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yT3B0aW9ucyA9IHtcclxuICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICB6SW5kZXg6IDEwMixcclxuICBzdHlsZToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgekluZGV4OiAxMDIsXHJcbiAgfSxcclxuICBjbG9zZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VGZWVPYmplY3QgPSB7XHJcbiAgY2FwYWNpdHk6IDEsXHJcbiAgcGV0X3NpemVfaWQ6IDEsXHJcbiAgc2VydmljZV9jaGFyZ2U6IFwiXCIsXHJcbiAgZWFybmluZ19hbW91bnQ6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2l0aWVzOiBzZWxlY3RbXSA9IFtcclxuICB7IGtleTogMSwgbGFiZWw6IFwiU2hpbmp1a3UgQ2l0eVwiLCB2YWx1ZTogXCJTaGluanVrdSBDaXR5XCIgfSxcclxuICB7IGtleTogMiwgbGFiZWw6IFwiQW5vdGhlciBDaXR5XCIsIHZhbHVlOiBcIkFub3RoZXIgQ2l0eVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcGV0cyA9IFtcclxuICB7IGtleTogMSwgbGFiZWw6IFwiRG9nXCIsIHZhbHVlOiAxIH0sXHJcbiAgeyBrZXk6IDIsIGxhYmVsOiBcIkNhdFwiLCB2YWx1ZTogMiB9LFxyXG4gIHsga2V5OiAzLCBsYWJlbDogXCJCaXJkc1wiLCB2YWx1ZTogMyB9LFxyXG4gIHsga2V5OiA0LCBsYWJlbDogXCJSZXB0aWxlc1wiLCB2YWx1ZTogNCB9LFxyXG4gIHsga2V5OiA1LCBsYWJlbDogXCJTbWFsbCBhbmltYWxzXCIsIHZhbHVlOiA1IH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0FuZEV2ZW50cyA9IFtcclxuICB7XHJcbiAgICBrZXk6IDEsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDIsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDMsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDQsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDUsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDYsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYXEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgcXVlc3Rpb246IFwiMS4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMlwiLFxyXG4gICAgcXVlc3Rpb246IFwiMi4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiM1wiLFxyXG4gICAgcXVlc3Rpb246IFwiMy4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiNFwiLFxyXG4gICAgcXVlc3Rpb246IFwiNC4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG50eXBlIHNlcnZpY2UgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlRGF0YTogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCJCb2FyZGluZ1wiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiAyLCBsYWJlbDogXCJIb3VzZSBTaXR0aW5nXCIgfSxcclxuICB7IGtleTogMywgdmFsdWU6IDMsIGxhYmVsOiBcIkRyb3AtaW4tdmlzaXRzXCIgfSxcclxuICB7IGtleTogNCwgdmFsdWU6IDQsIGxhYmVsOiBcIlBldCBEYXkgY2FyZVwiIH0sXHJcbiAgeyBrZXk6IDUsIHZhbHVlOiA1LCBsYWJlbDogXCJEb2cgd2Fsa2luZ1wiIH0sXHJcbiAgeyBrZXk6IDYsIHZhbHVlOiA2LCBsYWJlbDogXCJQZXQgZ3Jvb21pbmdcIiB9LFxyXG4gIHsga2V5OiA3LCB2YWx1ZTogNywgbGFiZWw6IFwiSG91c2UgY2FsbFwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcGV0VHlwZTogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBcIkRvZyBCb2FyZGluZ1wiLCBsYWJlbDogXCJEb2cgQm9hcmRpbmdcIiB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogXCJIb3VzZSBTaXR0aW5nXCIsIGxhYmVsOiBcIkhvdXNlIFNpdHRpbmdcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogXCJEcm9wLWluLXZpc2l0c1wiLCBsYWJlbDogXCJEcm9wLWluLXZpc2l0c1wiIH0sXHJcbiAgeyBrZXk6IDQsIHZhbHVlOiBcIkRvZ2d5IERheSBjYXJlXCIsIGxhYmVsOiBcIkRvZ2d5IERheSBjYXJlXCIgfSxcclxuICB7IGtleTogNSwgdmFsdWU6IFwiRG9nIHdhbGtpbmdcIiwgbGFiZWw6IFwiRG9nIHdhbGtpbmdcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaWNlczogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCJBbGwgUHJpY2VzXCIgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IDIsIGxhYmVsOiBcIjEwMDAwLTIwMDAwXCIgfSxcclxuICB7IGtleTogMywgdmFsdWU6IDMsIGxhYmVsOiBcIjIwMDAwLTMwMDAwXCIgfSxcclxuICB7IGtleTogNCwgdmFsdWU6IDQsIGxhYmVsOiBcIjUwMDAwIC0gbW9yZVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmljZVRpbWU6IHNlbGVjdFtdID0gW1xyXG4gIHsga2V5OiAxLCB2YWx1ZTogXCJPbmUgVGltZVwiLCBsYWJlbDogXCJPbmUgVGltZVwiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBcIlJlcGVhdCBXZWVrbHlcIiwgbGFiZWw6IFwiUmVwZWF0IFdlZWtseVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcGV0U2l6ZTogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCIwIC0gNSBrZ1wiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiAyLCBsYWJlbDogXCI1IC0gMTAga2dcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogMywgbGFiZWw6IFwiMTAgLSAyNSBrZ1wiIH0sXHJcbiAgeyBrZXk6IDQsIHZhbHVlOiA0LCBsYWJlbDogXCIyNSAtIDQwIGtnXCIgfSxcclxuICB7IGtleTogNSwgdmFsdWU6IDUsIGxhYmVsOiBcIjQwKyBrZ1wiIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBkdXJhdGlvbnM6IHNlbGVjdFtdID0gW1xyXG4gIHsga2V5OiAxLCB2YWx1ZTogMzAsIGxhYmVsOiBcIjMwIG1pbnNcIiB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogNjAsIGxhYmVsOiBcIjYwIG1pbnNcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogOTAsIGxhYmVsOiBcIjkwIG1pbnNcIiB9LFxyXG4gIHsga2V5OiA0LCB2YWx1ZTogMTIwLCBsYWJlbDogXCIxMjAgbWluc1wiIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBwZXRDb3VudDogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCIxXCIgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IDIsIGxhYmVsOiBcIjJcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogMywgbGFiZWw6IFwiM1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydDogc2VsZWN0W10gPSBbXHJcbiAge1xyXG4gICAga2V5OiAxLFxyXG4gICAgdmFsdWU6IFwiRGlzdGFuY2UgY2xvc2VzdCB0byBmdXJ0aGVzdFwiLFxyXG4gICAgbGFiZWw6IFwiRGlzdGFuY2UgY2xvc2VzdCB0byBmdXJ0aGVzdFwiLFxyXG4gIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBcIkhpZ2hlciB0byBsb3dlclwiLCBsYWJlbDogXCJIaWdoZXIgdG8gbG93ZXJcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogXCJMb3dlciB0byBoaWdoZXJcIiwgbGFiZWw6IFwibG93ZXIgdG8gaGlnaGVyXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwZXQ6IHNlbGVjdFtdID0gW1xyXG4gIHsga2V5OiAxLCBsYWJlbDogXCJEb2dcIiwgdmFsdWU6IFwiMVwiIH0sXHJcbiAgeyBrZXk6IDIsIGxhYmVsOiBcIkNhdFwiLCB2YWx1ZTogXCIyXCIgfSxcclxuICB7IGtleTogMywgbGFiZWw6IFwiQmlyZHNcIiwgdmFsdWU6IFwiM1wiIH0sXHJcbiAgeyBrZXk6IDQsIGxhYmVsOiBcIlJlcHRpbGVzXCIsIHZhbHVlOiBcIjRcIiB9LFxyXG4gIHsga2V5OiA1LCBsYWJlbDogXCJTbWFsbCBhbmltYWxzXCIsIHZhbHVlOiBcIjVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG15UGV0czogcGV0W10gPSBbXHJcbiAge1xyXG4gICAgYWdlOiA3LFxyXG4gICAgaW1hZ2U6IFwiL1wiLFxyXG4gICAgbmFtZTogXCJNaWxvXCIsXHJcbiAgICBsb2NhdGlvbjogXCJTaWJlcmlhbiBodXNreVwiLFxyXG4gICAgd2VpZ2h0OiAxNixcclxuICB9LFxyXG4gIHtcclxuICAgIGFnZTogNyxcclxuICAgIGltYWdlOiBcIi9cIixcclxuICAgIG5hbWU6IFwiTWlsb1wiLFxyXG4gICAgbG9jYXRpb246IFwiU2liZXJpYW4gaHVza3lcIixcclxuICAgIHdlaWdodDogMTYsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZpZXdTdGF0ZURhdGEgPSB7XHJcbiAgcmF0aW5nOiA0LFxyXG4gIGNsZWFubGluZXNzOiA0LFxyXG4gIGFjY3VyYWN5OiA0LFxyXG4gIGNvbW11bmljYXRpb246IDQsXHJcbiAgbG9jYXRpb246IDQsXHJcbiAgY2hlY2tJbjogNCxcclxuICB2YWx1ZTogNSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZpZXdPYmplY3REYXRhID0ge1xyXG4gIHVzZXJJbWFnZTogXCIvXCIsXHJcbiAgdXNlck5hbWU6IFwiTWFyayBFdmFuc1wiLFxyXG4gIGRhdGU6IFwiSnVuZSAxMCwgMjAyMVwiLFxyXG4gIHRpbWU6IFwiNzozMHBtXCIsXHJcbiAgcmV2aWV3OlxyXG4gICAgXCLigJxBYmJleSBpcyB0aGUgYmVzdCBkb2cgbW9tIEnigJl2ZSBldmVyIGtub3duISBSZXNwb25zaWJsZSwgYXR0ZW50aXZlLCBwbGF5ZnVsLCBhbmQgbG92aW5nLiBJIG1ldCBoZXIgd2hlbiBzaGUgd2FzIHZvbHVudGVlcmluZyB0byBoZWxwIHNoZWx0ZXIgYW5pbWFscyAtIGhlciBlbXBhdGh5IGZvciBhbmltYWwgc291bHMgaXMgbGltaXRsZXNzLuKAnVwiLFxyXG4gIHJhdGluZzogNCxcclxuICB1c2VySW1hZ2VzOiBbXCIvXCIsIFwiL1wiLCBcIi9cIiwgXCIvXCJdLFxyXG4gIHVzZXJDb3VudDogMTAsXHJcbiAgc2l0dGVyUmVzcG9uc2U6IHRydWUsXHJcbiAgc2l0dGVyUmVwbHk6IFwiVGhhbmsgeW91IGZvciB5b3VyIGtpbmQgd29yZHMgTWFyayFcIixcclxuICBzaXR0ZXJJbWFnZTogXCIvXCIsXHJcbiAgc2l0dGVyTmFtZTogXCJSZWJlY2NhIFcuXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0dGVyU2VydmljZXMgPSBbXHJcbiAge1xyXG4gICAgc2VydmljZTogXCJCb2FyZGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiaW4gdGhlIHNpdHRlcidzIGhvbWVcIixcclxuICAgIHByaWNlOiBcIsKlNDBcIixcclxuICAgIHBlcmlvZDogXCJwZXIgbmlnaHRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2U6IFwiSG91c2UgU2l0dGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiaW4gdGhlIGhvbWVcIixcclxuICAgIHByaWNlOiBcIsKlNDBcIixcclxuICAgIHBlcmlvZDogXCJwZXIgbmlnaHRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2U6IFwiRHJvcC1JbiBWaXNpdHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInZpc2l0IGluIHlvdXIgaG9tZVwiLFxyXG4gICAgcHJpY2U6IFwiwqU0MFwiLFxyXG4gICAgcGVyaW9kOiBcInBlciBuaWdodFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZTogXCJEb2dneSBEYXkgQ2FyZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiaW4gdGhlIHNpdHRlcidzIGhvbWVcIixcclxuICAgIHByaWNlOiBcIsKlNDBcIixcclxuICAgIHBlcmlvZDogXCJwZXIgbmlnaHRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtpbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcImluIHlvdXIgbmVpZ2hib3Job29kXCIsXHJcbiAgICBwcmljZTogXCLCpTQwXCIsXHJcbiAgICBwZXJpb2Q6IFwicGVyIG5pZ2h0XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaXR0ZXJTdGF0ZXMgPSB7XHJcbiAgYm9va2luZ0Zvck1lOiAxMDAsXHJcbiAgYm9va2luZ0J5TWU6IDUwLFxyXG4gIHBCb29raW5nRm9yTWU6IDIwLFxyXG4gIHBCb29raW5nQnlNZTogMTUsXHJcbiAgcFRvdGFsQm9va2luZzogMjUsXHJcbiAgdG90YWxFYXJuaW5nOiAzNDAwMCxcclxuICBwVG90YWxFYXJuaW5nOiAtMjUsXHJcbiAgdG90YWxSZWZlcnJhbDogMTAsXHJcbiAgcFRvdGFsUmVmZXJyYWw6IDEwLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RzQXJyYXkgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM1MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM2MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM3MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM4MFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbWVldGluZ1JlcXVlc3RzID0gW1xyXG4gIHtcclxuICAgIGRhdGU6IDAsXHJcbiAgICBzZXJ2aWNlOiBcIkRheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIiBWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogMCxcclxuICAgIHNlcnZpY2U6IFwiRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiIFZhbmNvdXZlciwgV0EsIDk4Njg3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAwLFxyXG4gICAgc2VydmljZTogXCJEYXkgQ2FyZVwiLFxyXG4gICAgY2xpZW50TmFtZTogXCJEYXZpZCBULlwiLFxyXG4gICAgYWRkcmVzczogXCIgVmFuY291dmVyLCBXQSwgOTg2ODhcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6IDAsXHJcbiAgICBzZXJ2aWNlOiBcIkRheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIiBWYW5jb3V2ZXIsIFdBLCA5ODY4OSBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2VydmF0aW9uUmVxdWVzdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmcm9tOiBcIjI5IEp1biAyMDIxLCAzUE1cIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxLCAzUE1cIixcclxuICAgIHBheW1lbnRTdGF0dXM6IFwiUEFJRFwiLFxyXG4gICAgdG90YWw6IFwiwqUzNTBcIixcclxuICAgIG5hbWU6IFwiTW9sbHnigJlzIC0gRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGltYWdlOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICB0bzogXCIzMCBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICBwYXltZW50U3RhdHVzOiBcIlBBSURcIixcclxuICAgIHRvdGFsOiBcIsKlMzUwXCIsXHJcbiAgICBuYW1lOiBcIk1vbGx54oCZcyAtIERheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIlZhbmNvdXZlciwgV0EsIDk4Njg2XCIsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgcGF5bWVudFN0YXR1czogXCJQQUlEXCIsXHJcbiAgICB0b3RhbDogXCLCpTM1MFwiLFxyXG4gICAgbmFtZTogXCJNb2xseeKAmXMgLSBEYXkgQ2FyZVwiLFxyXG4gICAgY2xpZW50TmFtZTogXCJEYXZpZCBULlwiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgaW1hZ2U6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmcm9tOiBcIjI5IEp1biAyMDIxLCAzUE1cIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxLCAzUE1cIixcclxuICAgIHBheW1lbnRTdGF0dXM6IFwiUEFJRFwiLFxyXG4gICAgdG90YWw6IFwiwqUzNTBcIixcclxuICAgIG5hbWU6IFwiTW9sbHnigJlzIC0gRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGltYWdlOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICB0bzogXCIzMCBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICBwYXltZW50U3RhdHVzOiBcIlBBSURcIixcclxuICAgIHRvdGFsOiBcIsKlMzUwXCIsXHJcbiAgICBuYW1lOiBcIk1vbGx54oCZcyAtIERheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIlZhbmNvdXZlciwgV0EsIDk4Njg2XCIsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vSW1wb3J0YW50XHJcblxyXG5leHBvcnQgY29uc3QgbXlTZXJ2aWNlcyA9IFtcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJCb2FyZGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiWW91ciBjbGllbnTigJlzIHBldHMgY29tZSB0byB5b3VyIGhvbWUgYW5kIHN0YXkgb3Zlcm5pZ2h0LlwiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IGZhbHNlLFxyXG4gICAgc3BlY2lmaWNhdGlvbnM6IFtcclxuICAgICAgXCJMaXZlcyBpbiBhIEhvdXNlXCIsXHJcbiAgICAgIFwiR2V0IHlvdXIgZmlyc3QgYm9va2luZyBzb29uZXJcIixcclxuICAgICAgXCJNYWtlIG1vcmUgbW9uZXkgb24gdGhlIHdlZWtlbmRzIChUaHUtU3VuKVwiLFxyXG4gICAgXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJHcm9vbWluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnQgY2FuIGNvbWUgb3IgeW91IGNhbiBnbyBmb3IgZ3Jvb21pbmcgc2VydmljZXMgb2YgdGhlaXIgcGV0c1wiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IHRydWUsXHJcbiAgICBzcGVjaWZpY2F0aW9uczogW10sXHJcbiAgICByb3V0ZTogXCIvdXNlci9teS1zZXJ2aWNlcy9ncm9vbWluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZU5hbWU6IFwiSG91c2UgU2l0dGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91IGdvIHRvIHlvdXIgY2xpZW504oCZcyBob21lIGFuZCBzdGF5IG92ZXJuaWdodCwgdGFraW5nIGNhcmUgb2YgdGhlaXIgZG9ncyBhbmQgaG9tZS5cIixcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJEcm9wLUluIFZpc2l0c1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnRzIGFzayB5b3UgdG8gZG8gNjAtbWludXRlIGhvbWUgdmlzaXRzIHRvIGZlZWQgYW5kIHBsYXkgd2l0aCB0aGVpciBwZXRzXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJQZXQgRGF5IENhcmVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIllvdXIgY2xpZW504oCZcyBwZXRzIHN0YXkgYXQgeW91ciBob21lIGR1cmluZyB0aGUgZGF5LCBEcm9wIG9mZnMgYXJlIGFyb3VuZCA3LTlhbSwgYW5kIHBpY2sgdXBzIGFyZSBhcm91bmQgNC02cG0uXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJEb2cgV2Fsa2luZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnRzIHJlcXVlc3QgMzAtbWludXRlIGRvZyB3YWxrIGluIHRoZWlyIG5laWdoYm9yaG9vZFwiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IHRydWUsXHJcbiAgICBzcGVjaWZpY2F0aW9uczogW10sXHJcbiAgICByb3V0ZTogXCIvdXNlci9teS1zZXJ2aWNlcy9ib2FyZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZU5hbWU6IFwiSG91c2UgQ2FsbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnTigJlzIGFzayB5b3UgdG8gYnJpbmcgdmV0ZXJpbmFyeSBjYXJlIGludG8gY2xpZW504oCZcyBob21lLlwiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IHRydWUsXHJcbiAgICBzcGVjaWZpY2F0aW9uczogW10sXHJcbiAgICByb3V0ZTogXCIvdXNlci9teS1zZXJ2aWNlcy9ib2FyZGluZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc3BvdHMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2VzOiBbXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcIlBldHMgSG9tZSBTdGF5XCIsXHJcbiAgICBsb2NhdGlvbjogXCJTaGluanVrdSBDaXR5LCBUb2t5b1wiLFxyXG4gICAgYXZhaWxhYmxlRm9yOiBbXCJEb2dcIiwgXCJDYXRcIl0sXHJcbiAgICByYXRpbmc6IFwiNC42OVwiLFxyXG4gICAgcmV2aWV3OiAxMCxcclxuICAgIHJlcGVhdGVkQ2xpZW50OiA0MyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlczogW1xyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJQZXRzIEhvbWUgU3RheVwiLFxyXG4gICAgbG9jYXRpb246IFwiU2hpbmp1a3UgQ2l0eSwgVG9reW9cIixcclxuICAgIGF2YWlsYWJsZUZvcjogW1wiRG9nXCIsIFwiQ2F0XCJdLFxyXG4gICAgcmF0aW5nOiBcIjQuNjlcIixcclxuICAgIHJldmlldzogMTAsXHJcbiAgICByZXBlYXRlZENsaWVudDogNDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZpZXdzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiRG9nZ3l0YWxlcyBIb21lIFN0YXlcIixcclxuICAgIHBsYWNlOiBcIlBldCBmcmllbmRseSBIb3RlbFwiLFxyXG4gICAgYWRkcmVzczogXCJTaGluanVrdSBDaXR5LCBUb2t5b1wiLFxyXG4gICAgcmV2aWV3OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFxyXG4gICAgcmF0aW5nOiA0LjUsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Jldmlldy1pbWcxLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEb2dneXRhbGVzIEhvbWUgU3RheVwiLFxyXG4gICAgcGxhY2U6IFwiUGV0IGZyaWVuZGx5IEhvdGVsXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNoaW5qdWt1IENpdHksIFRva3lvXCIsXHJcbiAgICByZXZpZXc6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXHJcbiAgICByYXRpbmc6IDQsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Jldmlldy1pbWcxLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEb2dneXRhbGVzIEhvbWUgU3RheVwiLFxyXG4gICAgcGxhY2U6IFwiUGV0IGZyaWVuZGx5IEhvdGVsXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNoaW5qdWt1IENpdHksIFRva3lvXCIsXHJcbiAgICByZXZpZXc6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXHJcbiAgICByYXRpbmc6IDMuNSxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2aWV3LWltZzEucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRvZ2d5dGFsZXMgSG9tZSBTdGF5XCIsXHJcbiAgICBwbGFjZTogXCJQZXQgZnJpZW5kbHkgSG90ZWxcIixcclxuICAgIGFkZHJlc3M6IFwiU2hpbmp1a3UgQ2l0eSwgVG9reW9cIixcclxuICAgIHJldmlldzpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIixcclxuICAgIHJhdGluZzogNSxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2aWV3LWltZzEucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5kZXIgPSBbXHJcbiAgeyBsYWJlbDogXCJNYWxlXCIsIHZhbHVlOiAwIH0sXHJcbiAgeyBsYWJlbDogXCJGZW1hbGVcIiwgdmFsdWU6IDEgfSxcclxuXTtcclxuIiwiaW1wb3J0IExvY2FsaXplZFN0cmluZ3MgZnJvbSBcInJlYWN0LWxvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBlbmcgfSBmcm9tIFwiLi9lbmdcIjtcclxuXHJcbmV4cG9ydCBsZXQgc3RyaW5ncyA9IG5ldyBMb2NhbGl6ZWRTdHJpbmdzKHsgZW5nIH0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW5nID0ge1xyXG4gIHNlYXJjaFNpdHRlcjogXCJTZWFyY2ggU2l0dGVyXCIsXHJcbiAgYmVjb21lQVNpdHRlcjogXCJCZWNvbWUgYSBTaXR0ZXJcIixcclxuICBvdXJTZXJ2aWNlczogXCJPdXIgU2VydmljZXNcIixcclxuICBzaWduVXA6IFwiU2lnbiBVcFwiLFxyXG4gIHNpZ25JbjogXCJTaWduIEluXCIsXHJcbiAgaGVscDogXCJIZWxwXCIsXHJcbiAgZXhwbG9yZTogXCJFeHBsb3JlXCIsXHJcbiAgY29tcGFueTogXCJDT01QQU5ZXCIsXHJcbiAgYWJvdXRVczogXCJBYm91dCBVc1wiLFxyXG4gIGNvbnRhY3Q6IFwiQ29udGFjdFwiLFxyXG4gIGNhcmVlcjogXCJDYXJlZXJcIixcclxuICBwcml2YWN5UG9saWN5OiBcIlByaXZhY3kgUG9saWN5XCIsXHJcbiAgdGVybXNPZlVzZXI6IFwiVGVybXMgb2YgVXNlXCIsXHJcbiAgY29va2llUG9saWN5OiBcIkNvb2tpZSBQb2xpY3lcIixcclxuICBwZXRTcG90czogXCJQZXQgU3BvdHNcIixcclxuICBibG9nczogXCJCbG9nc1wiLFxyXG4gIGZhcXM6IFwiRkFRc1wiLFxyXG4gIHNhZmV0eTogXCJTYWZldHlcIixcclxuICBuZXdzQW5kU2FmZXR5OiBcIk5ld3MgJiBFdmVudHNcIixcclxuICBuZXdzcm9vbTogXCJOZXdzcm9vbVwiLFxyXG4gIGV2ZW50c0FuZFVwZGF0ZXM6IFwiRXZlbnRzICYgVXBkYXRlXCIsXHJcbiAgc3RheUNvbm5lY3RlZDogXCJTdGF5IENvbm5lY3RlZFwiLFxyXG4gIHN1YnNjcmliZTogXCJTdWJzY3JpYmVcIixcclxuICBmb2xsb3dQZXRjYXRpb246IFwiRm9sbG93IFBldGNhdGlvblwiLFxyXG4gIGFkZFlvdXJQZXRTcG90OiBcIkFkZCBZb3VyIHBldCBzcG90XCIsXHJcbiAgYWxsUmlnaHRzUmVzZXJ2ZWQ6IFwiwqkgcGV0Y2F0aW9uLmNvbSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlwiLFxyXG4gIGxvdmVDYXJlQW5kQWxsTmVlZHNGb3JQZXRzOiBcIkxvdmUsIGNhcmUgYW5kIGFsbCBuZWVkcyBmb3IgcGV0c1wiLFxyXG4gIGJvb2tUcnVzdGVkU2l0dGVyczpcclxuICAgIFwiIEJvb2sgdHJ1c3RlZCBzaXR0ZXJzIGFuZCBkb2cgd2Fsa2VycyAmIG11Y2ggbW9yZSB3aXRoIHBldGNhdGlvbi5cIixcclxuICB5b3VyUGV0OiBcIllvdXIgcGV0OiBcIixcclxuICB5YWFQZXRMb3ZlcnM6IFwiWWFhLSEgUGV0IExvdmVyc1wiLFxyXG4gIHdlTWFkZUl0U3VwZXJFYXN5VGl0bGU6XHJcbiAgICBcIiBXZeKAmXZlIG1hZGUgaXQgc3VwZXIgZWFzeSBmb3IgeW91IHRvIO+sgW5kIGEgbG92ZWx5LHRydXN0ZWQgcGV0IHNpdHRlciwgcGV0IGJvYXJkaW5nLCBkb2cgd2Fsa2luZyAmIG11Y2ggbW9yZSBpbiB5b3VyIG5laWdoYm91cmhvb2QuXCIsXHJcbiAgcGV0Qm9hcmRpbmc6IFwiUGV0IEJvYXJkaW5nXCIsXHJcbiAgd2VNYWRlSXRTdXBlckVhenlQZXRCb2FyZGluZzpcclxuICAgIFwiV2XigJl2ZSBtYWRlIGl0IHN1cGVyIGVhc3kgZm9yIHlvdSB0byDvrIFuZCBhIGxvdmVseSx0cnVzdGVkIHBldCBzaXR0ZXIsIHBldCBib2FyZGluZy5cIixcclxuICBob3VzZVNpdHRpbmc6IFwiSG91c2UgU2l0dGluZ1wiLFxyXG4gIGRyb3BJblZpc2l0czogXCJEcm9wLUluIFZpc2l0c1wiLFxyXG4gIHBldERheUNhcmU6IFwiUGV0IERheSBDYXJlXCIsXHJcbiAgZG9nV2Fsa2luZzogXCJEb2cgV2FsbGtpbmdcIixcclxuICBob3VzZUNhbGw6IFwiSG91c2UgQ2FsbFwiLFxyXG4gIGdyb29taW5nOiBcIkdyb29taW5nXCIsXHJcbiAgYm9va1dpdGhQcm9mZXNzaW9uYWxQZXRTaXR0ZXI6XHJcbiAgICBcIkJvb2sgd2l0aCBwcm9mZXNzaW9uYWwgcGV0IHNpdHRlcnMgeW91IGNhbiB0cnVzdC5cIixcclxuICB2ZXJpZmllZFBldFNpdHRlcnM6IFwiVmVyaWZpZWQgcGV0IHNpdHRlcnNcIixcclxuICBBbGxTaXR0ZXJQYXNzQUJhc2ljQ2hlY2s6IFwiQWxsIHNpdHRlcnMgcGFzcyBhIGJhc2ljIGJhY2tncm91bmQgY2hlY2tcIixcclxuICBrbm93U2l0dGVyUGVyc29uYWxseTogXCJLbm93IHNpdHRlciBwZXJzb25hbGx5XCIsXHJcbiAgQWxsU2l0dGVyc1Byb3ZpZGU6XHJcbiAgICBcIkFsbCBzaXR0ZXJzIHByb3ZpZGUgYSBkZXRhaWxlZCBwcm9maWxlIGFuZCBwZXJzb25hbCBpbmZvcm1hdGlvblwiLFxyXG4gIENlcnRpZmllZFBldFNpdHRlcnM6IFwiQ2VydGlmaWVkIHBldCBzaXR0ZXJzXCIsXHJcbiAgQWxsU2l0dGVyc0hhdmVBbmltYWxDZXJ0aWZpY2F0aW9uczogXCJBbGwgc2l0dGVycyBoYXZlIGFuaW1hbCBjZXJ0aWZpY2F0aW9ucy5cIixcclxuICBib29rWW91clBldGNhdGlvblNpdHRlcjogXCJCb29rIHlvdXIgcGV0Y2F0aW9uIHNpdHRlciFcIixcclxuICBwZXRjYXRpb25HdWFyYW50ZWU6IFwiUGV0Y2F0aW9uIEd1YXJhbnRlZVwiLFxyXG4gIEFsbFNlcnZpY2VzQm9va2VkT25QZXRjYXRpb246XHJcbiAgICBcIkFsbCBzZXJ2aWNlcyBib29rZWQgb24gUGV0Y2F0aW9uIGFyZSBiYWNrZWQgYnkgdGhlICBQZXRjYXRpb24gR3VhcmFudGVlLlwiLFxyXG4gIHdoeUNob29zZVBldGNhdGlvbjogXCJXaHkgQ2hvb3NlIFBldGNhdGlvblwiLFxyXG4gIGZpbmRUaGVQZXJmZWN0SG91c2VLZWVwZXI6XHJcbiAgICBcIkZpbmQgdGhlIFBlcmZlY3QgSG91c2VrZWVwZXIgbmVhciB5b3VyIG5laWdoYm9yaG9vZCAgYW55dGltZS4gU2FmZXR5IGFuZCBTZWN1cml0eSBhcmUgb3VyIHRvcCBwcmlvcml0eVwiLFxyXG4gIHZlcmlmaWVkU2l0dGVyczogXCJWZXJpZmllZCBzaXR0ZXJzXCIsXHJcbiAgYWxsUGV0Y2F0aW9uU2l0dGVyc0hhdmVQYXNzZWRPdXI6XHJcbiAgICBcIkFsbCBQZXRjYXRpb24gc2l0dGVycyBoYXZlIHBhc3NlZCBvdXIgc3RyaW5nZW50IHNlbGVjdGlvbiBwcm9jZXNzIGFuZCBoYWQgdGhlaXIgaWRlbnRpdHkgdmVyaWZpZWQuXCIsXHJcbiAgcHJvZmVzc2lvbmFsQ2FyZTogXCJQcm9mZXNzaW9uYWwgQ2FyZVwiLFxyXG4gIHlvdXJQZXRzU2FmZXR5SXNPdXJUb3BQcmlvcml0eTpcclxuICAgIFwiWW91ciBwZXTigJlzIHNhZmV0eSBpcyBvdXIgdG9wIHByaW9yaXR5LiBFdmVyeSBzaXR0ZXIgaXMgd2VsbCBlcXVpcHBlZCB3aXRoIGNlcnRpZmljYXRpb25zICYgZmlyc3QtYWlkIHRyYWluaW5nLlwiLFxyXG4gIHMyNDdzdXBwb3J0OiBcIjI0Lzcgc3VwcG9ydFwiLFxyXG4gIFdlQXJlSGVyZVRvSGVscFlvdUFuZFlvdXJQZXQ6XHJcbiAgICBcIiBXZSdyZSBoZXJlIHRvIGhlbHAgeW91IGFuZCB5b3VyIHBldCB3aGVuZXZlciB5b3UgbmVlZCB1cy4gU2l0dGVycyBhbHNvIGhhdmUgYWNjZXNzIHRvIHZldGVuYXJ5IHNwZWNpYWxpc3RzLlwiLFxyXG4gIHBldGNpdGF0aW9uZm9yUGV0T3duZXJzOiBcIlBldGNhdGlvbiBmb3IgUGV0IE93bmVyc1wiLFxyXG4gIHNlYXJjaEFuZENvbm5lY3RXaXRoVHJ1c3RlZDpcclxuICAgIFwiU2VhcmNoIGFuZCBjb25uZWN0IHdpdGggdHJ1c3RlZCBwZXQgc2l0dGVycy4gSXQncyBlYXN5ICBhcyAxLCAyLCAzLlwiLFxyXG4gIGZpbmRBVmVyaWZpZWRQZXRTaXR0ZXI6IFwiRmluZCBhIHZlcmlmaWVkIHBldCBzaXR0ZXJcIixcclxuICBzZWFyY2hBbmRGaW5kRXhwZXJpZW5jZWRMb2NhbDpcclxuICAgIFwiU2VhcmNoIGFuZCBmaW5kIGV4cGVyaWVuY2VkIGxvY2FsIHBldCBzaXR0ZXJzICBuZWFyYnlcIixcclxuICBhcnJhbmdlQU1lZXRHcmVldDogXCJBcnJhbmdlIGEgbWVldCAmIGdyZWV0XCIsXHJcbiAgZ2V0VG9Lbm93WW91clNpdHRlcjogXCJHZXQgdG8ga25vdyB5b3VyIHNpdHRlciBpbiBwZXJzb24sIG9ibGlnYXRpb24tZnJlZS5cIixcclxuICBib29rU2FmZWx5T25saW5lUGF5bWVudHM6IFwiQm9vayBzYWZlbHkgb25saW5lIHBheW1lbnRzXCIsXHJcbiAgYm9va1lvdXJTaXR0ZXJUaHJvdWdoT3VyU2FmZU9ubGluZTpcclxuICAgIFwiQm9vayB5b3VyIHNpdHRlciB0aHJvdWdoIG91ciBzYWZlIG9ubGluZSBzeXN0ZW0sd2l0aCBmbGV4aWJsZSBjYW5jZWxsYXRpb25zIGFzIHBlciBzaXR0ZXJzIHBvbGljeS5cIixcclxuICBwcm9wZXJVcGRhdGVzOiBcIlByb3BlciBVcGRhdGVzXCIsXHJcbiAgb25jZUpvYkNvbXBsZXRlc1lvdUNhblJhdGU6XHJcbiAgICBcIk9uY2Ugam9iIGNvbXBsZXRlcyB5b3UgY2FuIHJhdGUgJiByZXZpZXcgeW91ciBzaXR0ZXJcIixcclxuICByYXRpbmdBbmRSZXZpZXdzOiBcIlJhdGluZyAmIFJldmlld3NcIixcclxuICBleHBsb3JlT3VyU2l0dGVyOiBcIkV4cGxvcmUgT3VyIFNpdHRlcnNcIixcclxuICBwZXRjYXRpb25Gb3JQZXRTaXR0ZXJzOiBcIlBldGNhdGlvbiBmb3IgUGV0IFNpdHRlcnNcIixcclxuICB3YW5uYUJlUGFydG5lcldpdGhVczogXCJXYW5uYSBiZSBQYXJ0bmVyIHdpdGggdXM/XCIsXHJcbiAgd2hhdEV2ZXJQZXRTZXJ2aWNlWW91UHJvdmlkZTpcclxuICAgIFwiIFdoYXRldmVyIHBldCBzZXJ2aWNlIHlvdSBwcm92aWRlLCB3ZSdsbCBmaW5kIHRoZSBwZXQgc2l0dGVyLCBncm9vbWVyLCBib2FyZGluZyBvciBkb2cgd2Fsa2VyIGpvYnMgeW91IG5lZWQuXCIsXHJcbiAgczEwMFZlcmlmaWVkam9iczogXCIxMDAlIFZlcmlmaWVkIGpvYnNcIixcclxuICBFYXN5cHJvZmlsZXZlcmlmaWNhdGlvbnM6IFwiRWFzeSBwcm9maWxlIHZlcmlmaWNhdGlvbnNcIixcclxuICBJbnN0YW50cGF5b3V0czogXCJJbnN0YW50IHBheW91dHNcIixcclxuICBMaXN0eW91cmJvYXJkaW5nOiBcIkxpc3QgeW91ciBib2FyZGluZ1wiLFxyXG4gIEJlY29tZWFwZXRzaXR0ZXI6IFwiQmVjb21lIGEgcGV0IHNpdHRlclwiLFxyXG4gIHVwZGF0ZVdoZW5JTW92ZVRoZU1hcDogXCJVcGRhdGUgd2hlbiBJIG1vdmUgdGhlIG1hcFwiLFxyXG4gIFNhdmVTZWFyY2g6IFwiU2F2ZSBTZWFyY2hcIixcclxuICBhcHBseTogXCJBcHBseVwiLFxyXG5cclxuICBtb3JlOiBcIk1vcmVcIixcclxuICBBbGxQcmljZXM6IFwiQWxsIFByaWNlc1wiLFxyXG4gIEhvd21hbnlwZXRzOiBcIkhvdyBtYW55IHBldHM/XCIsXHJcbiAgRG9nc2l6ZTogXCJEb2cgc2l6ZShsYnMpXCIsXHJcbiAgUGV0dHlwZXM6IFwiUGV0IHR5cGUocylcIixcclxuICBIb3dvZnRlbnlvdXdhbnRzZXJ2aWNlOiBcIkhvdyBvZnRlbiB5b3Ugd2FudCBzZXJ2aWNlP1wiLFxyXG4gIENoZWNrX291dDogXCJDaGVjay1vdXRcIixcclxuICBDaGVja19pbjogXCJDaGVjay1pblwiLFxyXG4gIFBldGNhdGlvblZlcmlmaWVkOiBcIlBldGNhdGlvbiBWZXJpZmllZFwiLFxyXG4gIFBldGNhdGlvbk5vdFZlcmlmaWVkOiBcIlBldGNhdGlvbiBub3QgVmVyaWZpZWRcIixcclxuICBPbmxpbmVub3c6IFwiT25saW5lIG5vd1wiLFxyXG4gIFBldHN0YWtlbmNhcmU6IFwiUGV0cyB0YWtlbiBjYXJlXCIsXHJcbiAgSGFwcHlDdXN0b21lcnM6IFwiSGFwcHkgQ3VzdG9tZXJzXCIsXHJcbiAgUmVoaXJlcmF0ZTogXCJSZWhpcmUgcmF0ZVwiLFxyXG4gIEV4cGVyaWVuY2U6IFwiRXhwZXJpZW5jZVwiLFxyXG4gIE15cGV0czogXCJNeSBwZXRzXCIsXHJcbiAgQWJvdXRwbGFjZTogXCJBYm91dCBwbGFjZVwiLFxyXG4gIEFkZGl0aW9uYWxTa2lsbHM6IFwiQWRkaXRpb25hbCBTa2lsbHNcIixcclxuICBSZXZpZXdzOiBcIlJldmlld3NcIixcclxuICBPdmVyYWxscmF0aW5nOiBcIk92ZXJhbGwgcmF0aW5nXCIsXHJcbiAgQ2xlYW5saW5lc3M6IFwiQ2xlYW5saW5lc3NcIixcclxuICBBY2N1cmFjeTogXCJBY2N1cmFjeVwiLFxyXG4gIENvbW11bmljYXRpb246IFwiQ29tbXVuaWNhdGlvblwiLFxyXG4gIExvY2F0aW9uOiBcIkxvY2F0aW9uXCIsXHJcbiAgVmFsdWU6IFwiVmFsdWVcIixcclxuICBBdmFpbGFiaWxpdHk6IFwiQXZhaWxhYmlsaXR5XCIsXHJcbiAgQXZhaWxhYmxlOiBcIkF2YWlsYWJsZVwiLFxyXG4gIFVuYXZhaWxhYmxlOiBcIlVuYXZhaWxhYmxlXCIsXHJcbiAgQm9hcmRpbmdDYW5jZWxsYXRpb25wb2xpY3k6IFwiQm9hcmRpbmcgQ2FuY2VsbGF0aW9uIHBvbGljeVwiLFxyXG4gIEV4dHJhaW5mb2Fib3V0bG9jYWxpdHk6IFwiRXh0cmEgaW5mbyBhYm91dCBsb2NhbGl0eVwiLFxyXG4gIERhc2hib2FyZDogXCJEYXNoYm9hcmRcIixcclxuICBSZXNlcnZhdGlvbnM6IFwiUmVzZXJ2YXRpb25zXCIsXHJcbiAgTXlwcm9maWxlOiBcIk15IHByb2ZpbGVcIixcclxuICBNeVNlcnZpY2VzOiBcIk15IFNlcnZpY2VzXCIsXHJcbiAgRmF2b3VyaXRlU2l0dGVyczogXCJGYXZvdXJpdGUgU2l0dGVyc1wiLFxyXG4gIE15c3BvdHM6IFwiTXkgc3BvdHNcIixcclxuICBQYXNzd29yZEFuZFNlY3VyaXR5OiBcIlBhc3N3b3JkICYgU2VjdXJpdHlcIixcclxuICBQYXltZW50c0FuZHBheW91dHM6IFwiUGF5bWVudHMgJiBwYXlvdXRzXCIsXHJcbiAgUGF5bWVudGhpc3Rvcnk6IFwiUGF5bWVudCBoaXN0b3J5XCIsXHJcbiAgR2xvYmFscHJlZmVyZW5jZXM6IFwiR2xvYmFsIHByZWZlcmVuY2VzXCIsXHJcbiAgUG9pbnRzQW5kY291cG9uOiBcIlBvaW50cyAmIGNvdXBvblwiLFxyXG4gIFRvdGFsQm9va2luZ3M6IFwiVG90YWwgQm9va2luZ3NcIixcclxuICBXZWVrOiBcIldlZWtcIixcclxuICBUb3RhbEVhcm5pbmdzOiBcIlRvdGFsIEVhcm5pbmdzXCIsXHJcbiAgVG90YWxSZWZlcnJhbDogXCJUb3RhbCBSZWZlcnJhbFwiLFxyXG4gIExhdGVzdEJvb2tpbmdSZXF1ZXN0czogXCJMYXRlc3QgQm9va2luZyBSZXF1ZXN0c1wiLFxyXG4gIFZpZXdBbGw6IFwiVmlldyBBbGxcIixcclxuICBGcm9tOiBcIkZyb21cIixcclxuICBUbzogXCJUb1wiLFxyXG4gIFRvdGFsOiBcIlRvdGFsXCIsXHJcbiAgQWNjZXB0OiBcIkFjY2VwdFwiLFxyXG4gIFBlbmRpbmc6IFwiUGVuZGluZ1wiLFxyXG4gIE1ha2VQYXltZW50OiBcIk1ha2UgcGF5bWVudFwiLFxyXG4gIEVkaXQ6IFwiRWRpdFwiLFxyXG4gIFJlbW92ZTogXCJSZW1vdmVcIixcclxuICBNZWV0aW5nUmVxdWVzdHM6IFwiTWVldGluZyBSZXF1ZXN0c1wiLFxyXG4gIE15UG9ydGZvbGlvOiBcIk15IFBvcnRmb2xpb1wiLFxyXG4gIGRlbGV0ZVBldDogXCJEZWxldGUgcGV0XCIsXHJcbiAgYXJlWW91U3VyZTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gIGFkZEF2YWlsYWJpbGl0eTogXCJBZGQgYXZhaWxhYmlsaXR5XCIsXHJcbiAgQWRkbW9yZWltYWdlczogXCIgQWRkIG1vcmUgaW1hZ2VzXCIsXHJcbiAgTmV3c0ZlZWRzOiBcIk5ld3MgRmVlZHNcIixcclxuICBFeGNlbGxlbnQ6IFwiRXhjZWxsZW50XCIsXHJcbiAgVmlld1Byb2ZpbGU6IFwiVmlldyBQcm9maWxlXCIsXHJcbiAgRXhwbG9yZWFtYXppbmdwbGFjZXM6IFwiIEV4cGxvcmUgYW1hemluZyBwbGFjZXMgdG8gdmlzaXQgd2l0aCB5b3VyIHBldHNcIixcclxuICBQZXRjYXJlOiBcIlBldGNhcmVcIixcclxuICBTZWVhbGw6IFwiU2VlIGFsbFwiLFxyXG4gIEttc2Zyb215b3VyY3VycmVudGxvY2F0aW9uOiBcImZyb20geW91ciBjdXJyZW50IGxvY2F0aW9uXCIsXHJcbiAgcmVzcG9uc2VyYXRlOiBcInJlc3BvbnNlIHJhdGVcIixcclxuICBTZWVhdmFpbGFiaWxpdHk6IFwiU2VlIGF2YWlsYWJpbGl0eVwiLFxyXG4gIFNlZUFkZGl0aW9uYWxTZXJ2aWNlc1JhdGVzOiBcIlNlZSBBZGRpdGlvbmFsIFNlcnZpY2VzICYgcmF0aW5nQW5kUmV2aWV3c1wiLFxyXG4gIEFkZHJlc3M6IFwiQWRkcmVzc1wiLFxyXG4gIENsaWVudDogXCJDbGllbnRcIixcclxuICBNZWV0YXQ6IFwiTWVldCBhdFwiLFxyXG4gIFJlamVjdDogXCJSZWplY3RcIixcclxuICBDYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgUmVqZWN0ZWQ6IFwiUmVqZWN0ZWRcIixcclxuICBQYXltZW50OiBcIlBheW1lbnRcIixcclxuICBCYXNpY2luZm86IFwiQmFzaWMgaW5mb1wiLFxyXG4gIEFkZHJlc3NJbmZvOiBcIkFkZHJlc3MgSW5mb1wiLFxyXG4gIERlZmF1bHRhdmFpbGFiaWxpdHk6IFwiRGVmYXVsdCBhdmFpbGFiaWxpdHlcIixcclxuICBNb25kYXk6IFwiTW9uZGF5XCIsXHJcbiAgVHVlc2RheTogXCJUdWVzZGF5XCIsXHJcbiAgV2VkbmVzZGF5OiBcIldlZG5lc2RheVwiLFxyXG4gIFRodXJzZGF5OiBcIlRodXJzZGF5XCIsXHJcbiAgRnJpZGF5OiBcIkZyaWRheVwiLFxyXG4gIEFkZHNsb3Q6IFwiQWRkIHNsb3RcIixcclxuICBTYXR1cmRheTogXCJTYXR1cmRheVwiLFxyXG4gIFNhdmU6IFwiU2F2ZVwiLFxyXG4gIEhvbWVBZGRyZXNzTGluZTogXCJIb21lIEFkZHJlc3MgTGluZVwiLFxyXG4gIEFwdEhvdXNlTm86IFwiQXB0Li9Ib3VzZSBOby5cIixcclxuICBDaXR5OiBcIkNpdHlcIixcclxuICBTdGF0ZW9ycHJvdmluY2U6IFwiU3RhdGUgb3IgcHJvdmluY2VcIixcclxuICBaSVBwb3N0YWxwb3N0Y29kZTogXCJaSVAvcG9zdGFsL3Bvc3Rjb2RlXCIsXHJcbiAgRnVsbG5hbWU6IFwiRnVsbCBuYW1lXCIsXHJcbiAgRW1haWxhZGRyZXNzOiBcIkVtYWlsIGFkZHJlc3NcIixcclxuICBlbnRlckVtYWlsQWRkcmVzczogJ0VudGVyIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbCBhZGRyZXNzJyxcclxuICBlbnRlck90cDogJ0VudGVyIE9UUCcsXHJcbiAgZW50ZXJOZXdQYXNzd29yZDogJ0VudGVyIG5ldyBwYXNzd29yZCcsXHJcbiAgZW50ZXJPbGRQYXNzd29yZDogJ0VudGVyIGN1cnJlbnQgcGFzc3dvcmQnLFxyXG4gIGVudGVyQ29uZmlybVBhc3N3b3JkOiAnRW50ZXIgY29uZmlybSBwYXNzd29yZCcsXHJcbiAgb3RwOiAnT1RQJyxcclxuICBuZXdQYXNzd29yZDogJ05ldyBQYXNzd29yZCcsXHJcbiAgb2xkUGFzc3dvcmQ6ICdPbGQgUGFzc3dvcmQnLFxyXG4gIGNvbmZpcm1QYXNzd29yZDogJ0NvbmZpcm0gUGFzc3dvcmQnLFxyXG5cclxuICBDb250YWN0bnVtYmVyOiBcIkNvbnRhY3QgbnVtYmVyXCIsXHJcbiAgQmlydGhkYXRlOiBcIkJpcnRoIGRhdGVcIixcclxuICBhZGRTZXJ2aWNlRmlyc3Q6IFwiWW91IG5lZWQgdG8gYWRkIGEgc2VydmljZSBmaXJzdCBcIixcclxuICBQcm9maWxldmVyaWZpY2F0aW9uOiBcIlByb2ZpbGUgdmVyaWZpY2F0aW9uXCIsXHJcbiAgdXBsb2FkSW1hZ2VUZXh0OlxyXG4gICAgXCJVcGxhb2QgeW91ciBJRCBpbWFnZXMgdG8gdmVyaWZ5IHlvdXIgcHJvZmlsZSwgbWFrZSBzdXJlIHRoZSBkZWF0aXNsIHlvdSBlbnRlcmQgb24geW91ciBwcm9maWxlIHNob3VsZCBtYXRjaCB0aGUgaW5mb3JtYXRpb24gaW4gSUQgY2FyZFwiLFxyXG4gIFNlbGVjdElEY2FyZHR5cGU6IFwiU2VsZWN0IElEIGNhcmQgdHlwZVwiLFxyXG4gIFBhc3Nwb3J0OiBcIlBhc3Nwb3J0XCIsXHJcbiAgVmVyaWZ5bXlwcm9maWxlOiBcIlZlcmlmeSBteSBwcm9maWxlXCIsXHJcbiAgTGlzY2Vuc2V2ZXJpZmljYXRpb246IFwiTGlzY2Vuc2UgdmVyaWZpY2F0aW9uXCIsXHJcbiAgdXBsb2FkbGlzY2Vuc2VUZXh0OlxyXG4gICAgXCJVcGxhb2QgeW91ciBsaXNjZW5zZSBpbWFnZXMgdG8gdmVyaWZ5IHRoYXQgeW91IGFyZSBhY2VydGlmaWVkIHNpdHRlciwgdGhlc2UgbGlzY2Vuc2VzIHdpbGwgYmUgdmVyaWZpZWQgYnkgb3VyIHRlYW0gZm9yIHRoZSBzYWZ0ZXkgb2YgcGV0cy5cIixcclxuICBBZGRuZXdwZXQ6IFwiQWRkIG5ldyBwZXRcIixcclxuICBJaGF2ZTogXCJJIGhhdmVcIixcclxuICBEb2c6IFwiRG9nXCIsXHJcbiAgQ2F0OiBcIkNhdFwiLFxyXG4gIEJpcmRzOiBcIkJpcmRzXCIsXHJcbiAgUmVwdGlsZXM6IFwiUmVwdGlsZXNcIixcclxuICBTbWFsbGFuaW1hbHM6IFwiU21hbGwgYW5pbWFsc1wiLFxyXG4gIE5hbWU6IFwiTmFtZVwiLFxyXG4gIFdlaWdodDogXCJXZWlnaHRcIixcclxuICBBZ2U6IFwiQWdlXCIsXHJcbiAgQnJlYWQ6IFwiQnJlYWRcIixcclxuICBTZXg6IFwiU2V4XCIsXHJcbiAgV2hpY2hzZXJ2aWNlc3dvdWxkeW91bGlrZXRvb2ZmZXI6IFwiV2hpY2ggc2VydmljZXMgd291bGQgeW91IGxpa2UgdG8gb2ZmZXJcIixcclxuICBTZXRzZXJ2aWNlc3RvY2F0aXZlOlxyXG4gICAgXCJTZXQgc2VydmljZXMgdG8gY2F0aXZlIHRoYXQgeW91IHdhbnQgdG8gYXBwZWFyIGluIHRoZSBzZWFyY2ggYW5kIHJlY2VpdmUgbmV3IGJ1c2luZXNzIGZvci4gVXNlIGF3YXkgbW9kZSB3aGVuIHlvdSBhcmUgb24gdmFjYXRpb24sIG9yIGNhbuKAmXQgcmVzcG9uZCB0byBuZXcuIHJlcXVlc3RzXCIsXHJcbiAgU2F2ZWFuZENvbnRpbnVlOiBcIlNhdmUgJiBDb250aW51ZVwiLFxyXG4gIEFDVElWRTogXCJBQ1RJVkVcIixcclxuICBJTlNUQU5UQk9PS0lORzogXCJJTlNUQU5UIEJPT0tJTkdcIixcclxuICBNYW5hZ2U6IFwiTWFuYWdlXCIsXHJcbiAgQWxsc2VydmljZXM6IFwiQWxsIHNlcnZpY2VzXCIsXHJcbiAgQm9hcmRpbmc6IFwiQm9hcmRpbmdcIixcclxuICBTZXJ2aWNlOiBcIlNlcnZpY2VcIixcclxuICBXaGF0aXM6IFwiV2hhdCBpc1wiLFxyXG4gIG9uUGV0Y2F0aW9uOiBcIm9uIFBldGNhdGlvbj9cIixcclxuICBTZXJ2aWNlQW5kRmVlczogXCJTZXJ2aWNlICYgRmVlc1wiLFxyXG4gIFByZWZlcmVuY2VzOiBcIlByZWZlcmVuY2VzXCIsXHJcbiAgRGlzY291bnRzOiBcIkRpc2NvdW50c1wiLFxyXG4gIFNwZWNpYWxkaXNjb3VudGZvcnlvdXJndWVzdHM6IFwiU3BlY2lhbCBkaXNjb3VudCBmb3IgeW91ciBndWVzdHNcIixcclxuICBvZmZvbmZpcnN0Ym9va2luZ3dpdGh5b3U6IFwiMjAlIG9mZiBvbiBmaXJzdCBib29raW5nIHdpdGggeW91XCIsXHJcbiAgQWxsb3dvZm9uYm9va2luZ2Ftb3VudDpcclxuICAgIFwiIEFsbG93IDIwJSBvZiBvbiBib29raW5nIGFtb3VudCBmb3IgdGhlIGZpcnN0IHRpbWUgZ3Vlc3RzLiBUaGlzIG9mZmVycyBjYW4gYXR0cmFjdCBuZXcgZ3Vlc3RzIGFuZCBoZWxwIHlvdSB0byBlYXJuIG1vcmUgcG9pbnRzIGFuZCByZXZpZXdzXCIsXHJcbiAgTm9vZmZlcm9udGhpc3NlcnZpY2U6IFwiTm8gb2ZmZXIgb24gdGhpcyBzZXJ2aWNlXCIsXHJcbiAgTGVuZ3Rob2ZzdGF5ZGlzY291bnQ6IFwiTGVuZ3RoLW9mLXN0YXkgZGlzY291bnRcIixcclxuICBXZWVrbHlkaXNjb3VudDogXCJXZWVrbHkgZGlzY291bnRcIixcclxuICBUaGlzZGlzY291bnR3aWxsYXBwbHl0b2FueXJlc2VydmF0aW9uOlxyXG4gICAgXCJUaGlzIGRpc2NvdW50IHdpbGwgYXBwbHkgdG8gYW55IHJlc2VydmF0aW9uIG9mIDcgdG8gMTIgbmlnaHRzXCIsXHJcbiAgTW9udGhseWRpc2NvdW50OiBcIiBNb250aGx5IGRpc2NvdW50XCIsXHJcbiAgWW91cmF2YWlsYWJpbGl0eXdoaWxlcGV0aXNhdGJvYXJkaW5nOlxyXG4gICAgXCJZb3VyIGF2YWlsYWJpbGl0eSB3aGlsZSBwZXQgaXMgYXQgYm9hcmRpbmdcIixcclxuICBZb3VjYW5zZWxlY3Rmcm9tdGhlb3B0aW9uc3BhcnRzOlxyXG4gICAgXCJZb3UgY2FuIHNlbGVjdCBmcm9tIHRoZSBvcHRpb25zIHBhcnQtdGltZSAmIGZ1bGx0aW1lIHNlbGVjdGluZyBmdWxsLXRpbWUgbWVhbnMgeW91IGFyZSBhdmFpbGFibGUgYWxsIHRoZSB0aW1lIGF0IGhvbWUgd2hlbiBib2FyZGluZyB0aGUgcGV0LlwiLFxyXG4gIHdoZW5ob3N0aW5ncGV0c2lueW91cmhvbWVob3dmcmVxdWVudGx5Y2FueW91cHJvdmlkZWJyZWFrczpcclxuICAgIFwiV2hlbiBob3N0aW5nIHBldHMgaW4geW91ciBob21lLCBob3cgZnJlcXVlbnRseSBjYW4geW91IHByb3ZpZGUgYnJlYWtzP1wiLFxyXG4gIGhvd2ZyZXF1ZW50bHljYW55b3Vwcm92aWRlcG90dHlicmVha3M6XHJcbiAgICBcIldoZW4gaG9zdGluZyBwZXRzIGluIHlvdXIgaG9tZSwgaG93IGZyZXF1ZW50bHkgY2FuIHlvdSBwcm92aWRlIHBvdHR5IGJyZWFrcywgb3Igd2Fsa3MsIG9yIGZlZWRzIGluIGNhc2UuXCIsXHJcbiAgQ2FueW91cGlja3VwcGV0ZnJvbWNsaWVudHBsYWNlOiBcIkNhbiB5b3UgcGlja3VwIHBldCBmcm9tIGNsaWVudOKAmXMgcGxhY2U/XCIsXHJcbiAgcGV0VHlwZTogXCJQZXQgdHlwZVwiLFxyXG4gIHNlcnZpY2VUeXBlOiBcIlNlcnZpY2UgVHlwZVwiLFxyXG4gIFdlbGNvbWVhZ2FpbjogXCJXZWxjb21lIGFnYWluXCIsXHJcbiAgUmVtZW1iZXJtZTogXCJSZW1lbWJlciBtZVwiLFxyXG4gIEZvcmdvdHBhc3N3b3JkOiBcIkZvcmdvdCBwYXNzd29yZD9cIixcclxuICByZXNlbmQ6IFwiUmVzZW50XCIsXHJcbiAgTG9naW46IFwiTG9naW5cIixcclxuICBvcjogXCJvclwiLFxyXG4gIENvbnRpbnVld2l0aEZhY2Vib29rOiBcIkNvbnRpbnVlIHdpdGggRmFjZWJvb2tcIixcclxuICBDb250aW51ZXdpdGhHb29nbGU6IFwiQ29udGludWUgd2l0aCBHb29nbGVcIixcclxuICBDb250aW51ZXdpdGhUd2l0dGVyOiBcIkNvbnRpbnVlIHdpdGggVHdpdHRlclwiLFxyXG4gIENvbnRpbnVld2l0aExpbmU6IFwiQ29udGludWUgd2l0aCBMaW5lXCIsXHJcbiAgRG9udGhhdmVhbmFjY291bnQ6IFwiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50ID8gXCIsXHJcbiAgUmVnaXN0ZXJub3c6IFwiUmVnaXN0ZXIgbm93XCIsXHJcbiAgQ3JlYXRleW91cmZyZWVhY2NvdW50dG9kYXk6IFwiQ3JlYXRlIHlvdXIgZnJlZSBhY2NvdW50IHRvZGF5XCIsXHJcbiAgRmlyc3RuYW1lOiBcIkZpcnN0IG5hbWVcIixcclxuICBMYXN0bmFtZTogXCJMYXN0IG5hbWVcIixcclxuICBEYXRlb2ZCaXJ0aDogXCJEYXRlIG9mIEJpcnRoXCIsXHJcbiAgcmVnaXN0ZXJUZXJtOlxyXG4gICAgXCIsIGNvbmZpcm0gdGhhdCBJIGFtIDEzIHllYXJzIG9mIGFnZSBvciBvbGRlciwgYW5kIGNvbnNlbnQgdG8gcmVjZWl2aW5nIGVtYWlsIGNvbW11bmljYXRpb25cIixcclxuICBKb2lubm93OiBcIkpvaW4gbm93XCIsXHJcbiAgQWxyZWFkeWhhdmVhbmFjY291bnQ6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQgPyBcIixcclxuICBGb3Jnb3R5b3VycGFzc3dvcmQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIsXHJcbiAgUmVzZXR5b3VycGFzc3dvcmQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIsXHJcbiAgZm9yZ290UGFzc3dvcmRJbnN0cnVjdGlvbjpcclxuICAgIFwiVG8gcmVzZXQgeW91ciBwYXNzd29yZCBlbnRlciB5b3VyIHJlZ2lzdGVyZWQgZW1haWwgYWRkcmVzcywgd2XigJlsbCBzZW5kIGFuIGVtYWlsIHdpdGggbGluayB0byByZXNldCB5b3UgcGFzc3dvcmRcIixcclxuICByZXNldFBhc3N3b3JkSW5zdHJ1Y3Rpb246IFwiQW4gb3RwIGlzIHNlbnQsIHRvIHByb3ZpZGVkIGVtYWlsIGFkZHJlc3MsIHBsZWFzZSB2ZXJpZnkgYW5kIHJlc2V0IHlvdXIgcGFzc3dvcmRcIixcclxuICBTdWJtaXQ6IFwiU3VibWl0XCIsXHJcbiAgcmVzZXRQYXNzd29yZDogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gIEJvb2tpbmdieW1lOiBcIkJvb2tpbmcgYnkgbWVcIixcclxuICBCb29raW5nZm9ybWU6IFwiQm9va2luZyBmb3IgbWVcIixcclxuICBSZXF1ZXN0YnltZTogXCJSZXF1ZXN0IGJ5IG1lXCIsXHJcbiAgUmVxdWVzdGZvcm1lOiBcIiBSZXF1ZXN0IGZvciBtZVwiLFxyXG4gIFNpdHRlcnJlc2VydmF0aW9uczogXCJTaXR0ZXIgcmVzZXJ2YXRpb25zXCIsXHJcbiAgQ2xpZW50cmVzZXJ2YXRpb25zOiBcIkNsaWVudCByZXNlcnZhdGlvbnNcIixcclxuICBNeUZhdm91cml0ZXM6IFwiTXkgRmF2b3VyaXRlc1wiLFxyXG4gIE15UmV2aWV3czogXCJNeSBSZXZpZXdzXCIsXHJcbiAgU3BvdHM6IFwiU3BvdHNcIixcclxuICBBZGRuZXdzcG90OiBcIkFkZCBuZXcgc3BvdFwiLFxyXG4gIEF2YWlsYWJsZWZvcjogXCJBdmFpbGFibGUgZm9yXCIsXHJcbiAgUmVwZWF0Q2xpZW50czogXCJSZXBlYXQgQ2xpZW50c1wiLFxyXG4gIFNvcnRieTogXCJTb3J0IGJ5XCIsXHJcbiAgUmVjZW50bHlBZGRlZDogXCJSZWNlbnRseSBBZGRlZFwiLFxyXG4gIENyZWF0ZW5ld3BldHNwb3Q6IFwiQ3JlYXRlIG5ldyBwZXQgc3BvdFwiLFxyXG4gIEdlbmVyOiBcIkdlbnJlXCIsXHJcbiAgR2VuZGVyOiBcIkdlbmRlclwiLFxyXG4gIGlkSW1hZ2U6IFwiSUQgaW1hZ2UgKC5qcGVnLCAuanBnLCAucG5nLCAuZG9jLCAucGRmKVwiLFxyXG4gIExpc2NlbnNlTnVtYmVyOiBcIkxpc2NlbnNlIE51bWJlclwiLFxyXG4gIHZlcmlmeU15Q2VydGlmaWNhdGU6IFwiVmVyaWZ5IG15IGNlcnRpZmljYXRlXCIsXHJcbiAgY2xpY2tUb1VwbG9hZDogXCJDbGljayB0byB1cGxhb2QgeW91clwiLFxyXG4gIFNlbGVjdHNwb3RjYXRlZ29yeTogXCJTZWxlY3Qgc3BvdCBjYXRlZ29yeVwiLFxyXG4gIGJhc2ljaW5mbzogXCJCYXNpYyBpbmZvXCIsXHJcbiAgU3BvdGltYWdlczogXCJTcG90IGltYWdlc1wiLFxyXG4gIEFkZG1vcmU6IFwiQWRkIG1vcmVcIixcclxuICBDb25maXJtOiBcIkNvbmZpcm1cIixcclxuICBEZXRhaWxlZGluZm9BbWVuaXRpZXM6IFwiRGV0YWlsZWQgaW5mbyAmIEFtZW5pdGllc1wiLFxyXG4gIFJlc2VydmF0aW9ucG9zc2libGU6IFwiUmVzZXJ2YXRpb24gcG9zc2libGVcIixcclxuICBCdWRnZXRQYXltZW50OiBcIkJ1ZGdldCAmIFBheW1lbnRcIixcclxuICBCdWRnZXQ6IFwiQnVkZ2V0XCIsXHJcbiAgQ2FyZHM6IFwiQ2FyZHNcIixcclxuICBzZXJ2aWNlQ2hyYWdlOiBcIlNlcnZpY2UgQ2hhcmdlXCIsXHJcbiAgbWV0aG9kT2ZQYXltZW50OiBcIk1ldGhvZCBvZiBQYXltZW50XCIsXHJcbiAgQmFua2luZ0luZm86IFwiQmFua2luZyBJbmZvXCIsXHJcbiAgRGVsZXRlQ2FyZDogXCJEZWxldGUgQ2FyZFwiLFxyXG4gIFNldERlZmF1bHQ6IFwiU2V0IGRlZmF1bHRcIixcclxuICBBZGRuZXdjYXJkOiBcIkFkZCBuZXcgY2FyZFwiLFxyXG4gIGJhbmtQYXltZW50OiBcIkJhbmsgUGF5bWVudFwiLFxyXG4gIEVudGVySGVyZTogXCJFbnRlciBoZXJlXCIsXHJcbiAgUmVqZWN0UmVxdWVzdDogXCJSZWplY3QgUmVxdWVzdFwiLFxyXG4gIHBhc3Nwb3J0TnVtYmVyIDpcIlBhc3Nwb3J0IE51bWJlclwiLFxyXG4gIHBheW1lbnROb3RlOlxyXG4gICAgXCIgTm90ZTogQWxsIHBheW1lbnQgbWV0aG9kIGFyZSBzZWN1cmVkIHdpdGggYWR2YW5jZWQgc2VjdXJpdHkgc3lzdGVtcyBhbmQgd2UgZG9u4oCZdCBzdG9yZSB5b3VyIGNhcmQgaW5mby5cIixcclxuICBub0NhcmRBZGRlZFRpdGxlOlwiTm8gQ2FyZHMgYXJlIGFkZGVkIHlldC5cIixcclxuICBub1Jlc2VydmF0aW9uOiBcIk5vIHJlc2VydmF0aW9uIGZvdW5kIVwiLFxyXG4gIG5vQ291cG9uczogXCJObyBjb3Vwb25zIGZvdW5kIVwiLFxyXG4gIG5vUGV0czogXCJObyBwZXRzIGZvdW5kIVwiLFxyXG4gIG5vUmVxdWVzdDogXCJObyByZXF1ZXN0cyBmb3VuZCFcIixcclxuICBub0JhbmtBZGRlZFRpdGxlOlwiTm8gQmFuayBkZXRhaWxzIGFyZSBhZGRlZCB5ZXQuXCIsXHJcbiAgYWRkQ2FyZFVzaW5nRm9ybTogXCJQbGVhc2UgYWRkIGEgY2FyZCB1c2luZyBiZWxvdyBmb3JtLlwiLFxyXG4gIGFkZEJhbmtVc2luZ0Zvcm06IFwiUGxlYXNlIGFkZCBiYW5rIGluZm8gdXNpbmcgYmVsb3cgZm9ybS5cIixcclxuICBub01zZ1lldDogXCJObyBtZXNzYWdlIHJlY2VpdmVkIHlldFwiLFxyXG4gIGVudGVyQ2FyZE51bWJlcjogXCJFbnRlciBjYXJkIG51bWJlciBoZXJlXCIsXHJcbiAgTmFtZW9uY2FyZDogXCJOYW1lIG9uIGNhcmRcIixcclxuICBzZXREZWZhdWx0Q2FyZDogXCJTZXQgYXMgZGVmYXVsdCBjYXJkXCIsXHJcbiAgQ2FyZG51bWJlcjogXCJDYXJkIG51bWJlclwiLFxyXG4gIEV4cGlyYXRpb246IFwiRXhwaXJhdGlvblwiLFxyXG4gIEFkZGNhcmQ6IFwiQWRkIGNhcmRcIixcclxuICBBZGRuZXdiYW5rYWNjb3VudDogXCJBZGQgbmV3IGJhbmsgYWNjb3VudFwiLFxyXG4gIFR5cGVvZmFjY291bnQ6IFwiVHlwZSBvZiBhY2NvdW50OlwiLFxyXG4gIFBlcnNvbmFsQWNjb3VudDogXCJQZXJzb25hbCBBY2NvdW50XCIsXHJcbiAgQnVzaW5lc3NBY2NvdW50OiBcIkJ1c2luZXNzIEFjY291bnRcIixcclxuICBCYW5rQ291bnRyeTogXCJCYW5rIENvdW50cnlcIixcclxuICBCYW5rQ3VycmVuY3k6IFwiQmFuayBDdXJyZW5jeVwiLFxyXG4gIEJhbmtOYW1lOiBcIkJhbmsgTmFtZVwiLFxyXG4gIEJyYW5jaE5hbWU6IFwiQnJhbmNoIE5hbWVcIixcclxuICBFbnRlckFjY291bnROdW1iZXI6XCJFbnRlciBBY2NvdW50IE51bWJlclwiLFxyXG4gIFJvdXRpbmdOdW1iZXI6XCJSb3V0aW5nIE51bWJlclwiLFxyXG4gIEVudGVyUm91dGluZ051bWJlcjogXCJFbnRlciBSb3V0aW5nIE51bWJlclwiLFxyXG4gIEJhbmtDb2RlOiBcIkJhbmsgQ29kZVwiLFxyXG4gIEJhbmtOYW1lSGVyZTogXCJCYW5rIG5hbWUgaGVyZVwiLFxyXG4gIEFjY291bnRIb2xkZXJOYW1lOiBcIkFjY291bnQgSG9sZGVyIE5hbWVcIixcclxuICBBY2NvdW50SG9sZGVyTmFtZUhlcmU6IFwiQWNjb3VudCBob2xkZXIgbmFtZSBoZXJlXCIsXHJcbiAgQnJhbmNoQ29kZTogXCJCcmFuY2ggQ29kZVwiLFxyXG4gIEFjY291bnROdW1iZXI6IFwiQWNjb3VudCBOdW1iZXJcIixcclxuICBBY2NvdW50VHlwZTogXCJBY2NvdW50IFR5cGVcIixcclxuICBCYW5rQWNjb3VudFR5cGU6IFwiQmFuayBBY2NvdW50IFR5cGVcIixcclxuICBBZGRuZXdhY2NvdW50OiBcIkFkZCBuZXcgYWNjb3VudFwiLFxyXG4gIEJhbmtBY2NvdW50TnVtYmVyOiBcIkJhbmsgQWNjb3VudCBOdW1iZXJcIixcclxuICBQYXltZW50SGlzdG9yeTogXCJQYXltZW50IEhpc3RvcnlcIixcclxuICBXaXRoZHJhd01vbmV5OiBcIiBXaXRoZHJhdyBNb25leVwiLFxyXG4gIEVhcm5pbmdzOiBcIkVhcm5pbmdzXCIsXHJcbiAgUGVuZGluZ0Vhcm5pbmdzOiBcIlBlbmRpbmcgRWFybmluZ3NcIixcclxuICBXaXRoZHJhd2FsczogXCJXaXRoZHJhd2Fsc1wiLFxyXG4gIFBheW1lbnRzOiBcIlBheW1lbnRzXCIsXHJcbiAgT3RoZXI6IFwiT3RoZXJcIixcclxuICBZb3VyRXhwZWN0ZWRFYXJuaW5nczogXCJZb3VyIEV4cGVjdGVkIEVhcm5pbmdzXCIsXHJcbiAgdG90YWxQYXlhYmxlQW1vdW50OiBcIlRvdGFsIHBheWFibGUgYW1vdW50XCIsXHJcbiAgQ29udGFjdG5vdzogXCJDb250YWN0IG5vd1wiLFxyXG4gIFZpZXdkZXRhaWxzOiBcIlZpZXcgZGV0YWlsc1wiLFxyXG4gIExvb2tpbmdmb3JhUGV0U3BvdDogXCJMb29raW5nIGZvciBhIFBldCBTcG90XCIsXHJcbiAgU2VhcmNoOiBcIlNlYXJjaFwiLFxyXG4gIFByb3ZpZGVzcG90aW5mb3JtYXRpb246IFwiUHJvdmlkZSBzcG90IGluZm9ybWF0aW9uXCIsXHJcbiAgUHJvdmlkZXNwb3Q6IFwiUHJvdmlkZSBzcG90XCIsXHJcbiAgaW5mb3JtYXRpb246IFwiaW5mb3JtYXRpb25cIixcclxuICBDYXRlZ29yaWVzOiBcIkNhdGVnb3JpZXNcIixcclxuICBGaW5kYmVzdHBldHNwb3RzOiBcIiBGaW5kIGJlc3QgcGV0IHNwb3RzIGZvciB5b3VyIHBldHMgdG8gc3BlbmQgYSBkYXkuXCIsXHJcbiAgUmVzdGF1cmFudENhZmU6IFwiUmVzdGF1cmFudC9DYWZlXCIsXHJcbiAgRG9ncnVuczogXCJEb2cgcnVuc1wiLFxyXG4gIFBldEdyb29taW5nOiBcIlBldCBHcm9vbWluZ1wiLFxyXG4gIExlaXN1cmVPdXRkb29yOiBcIkxlaXN1cmUgLyBPdXRkb29yXCIsXHJcbiAgUGV0ZnJpZW5kbHlIb3RlbDogXCJQZXQgZnJpZW5kbHkgSG90ZWxcIixcclxuICBQYXJrOiBcIlBhcmtcIixcclxuICBUcmF2ZWw6IFwiVHJhdmVsXCIsXHJcbiAgQW5pbWFsU2hlbHRlcjogXCJBbmltYWwgU2hlbHRlclwiLFxyXG4gIFlvdWNhbmZpbmRzcG90c2lucGxhY2VzOiBcIllvdSBjYW4gZmluZCBzcG90cyBpbiBwbGFjZXMgeW91IHdhbnQuXCIsXHJcbiAgVG9reW86IFwiVG9reW9cIixcclxuICBPc2FrYTogXCJPc2FrYVwiLFxyXG4gIEt5b3RvOiBcIkt5b3RvXCIsXHJcbiAgU2FwcG9ybzogXCJTYXBwb3JvXCIsXHJcbiAgTmFnb3lhOiBcIk5hZ295YVwiLFxyXG4gIEtvYmU6IFwiS29iZVwiLFxyXG4gIFNlbmRhaTogXCJTZW5kYWlcIixcclxuICBDaGliYTogXCJDaGliYVwiLFxyXG4gIEZlYXR1cmVkU3BvdHM6IFwiRmVhdHVyZWQgU3BvdHNcIixcclxuICBMb2FkbW9yZTogXCJMb2FkIG1vcmVcIixcclxuICBNYXJreW91cmF2YWlsYWJpbGl0eTpcclxuICAgIFwiIE1hcmsgeW91ciBhdmFpbGFiaWxpdHkgZm9yIHVzZXIgZm9yIGFsbCB5b3VyIHNlcnZpY2VzLlwiLFxyXG4gIE5vdGlmaWNhdGlvbnM6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gIG5vU2l0dGVyRm91bmQ6IFwiV2UgY291bGRuJ3QgZmluZCBhbnkgc2l0dGVycyB0aGF0IG1hdGNoZWQgeW91ciBjcml0ZXJpYS5cIixcclxuICBSZWNlaXZlbWVzc2FnZXNmcm9taG9zdHM6XHJcbiAgICBcIlJlY2VpdmUgbWVzc2FnZXMgZnJvbSBob3N0cyBhbmQgZ3Vlc3RzLCBpbmNsdWRpbmcgYm9va2luZyByZXF1ZXN0LlwiLFxyXG4gIEVtYWlsOiBcIkVtYWlsXCIsXHJcbiAgVGV4dG1lc3NhZ2U6IFwiVGV4dCBtZXNzYWdlXCIsXHJcbiAgQnJvd3Nlcm5vdGlmaWNhdGlvbjogXCJCcm93c2VyIG5vdGlmaWNhdGlvblwiLFxyXG4gIFlvdWNhbm1hcmtwaWNrdXBzZXJ2aWNlZW5hYmxlOlxyXG4gICAgXCIgWW91IGNhbiBtYXJrIHBpY2t1cCBzZXJ2aWNlIGVuYWJsZSAvIGRpc2FibGUgZm9yIGFsbCBzZXJ2aWNlIGZyb20gaGVyZVwiLFxyXG4gIFJlbWluZGVyczogXCJSZW1pbmRlcnNcIixcclxuICBSZWNlaXZlYm9va2luZ3JlbWluZGVyczpcclxuICAgIFwiUmVjZWl2ZSBib29raW5nIHJlbWluZGVycywgcmVxdWVzdHMgdG8gd3JpdGUgYSByZXZpZXcsIHByaWNpbmcgbm90aWNlLCBhbmQgb3RoZXIgcmVtaW5kZXJzIHJlbGF0ZWQgdG8geW91ciBhY3Rpdml0aWVzXCIsXHJcbiAgUHJvbW90aW9uc2FuZHRpcHM6IFwiUHJvbW90aW9ucyBhbmQgdGlwc1wiLFxyXG4gIFBob25lY2FsbHM6IFwiUGhvbmUgY2FsbHNcIixcclxuICBHZW5lcmFscHJlZmVyZW5jZXM6IFwiR2VuZXJhbCBwcmVmZXJlbmNlc1wiLFxyXG4gIExhbmd1YWdlOiBcIkxhbmd1YWdlXCIsXHJcbiAgU2V0eW91cnByZWZlcmVkbGFuZ3VhZ2Vmb3JQZXRjYXRpYW9uOlxyXG4gICAgXCJTZXQgeW91ciBwcmVmZXJlZCBsYW5ndWFnZSBmb3IgUGV0Y2F0aWFvblwiLFxyXG4gIENvdW50cnk6IFwiQ291bnRyeVwiLFxyXG4gIEN1cnJlbmN5OiBcIkN1cnJlbmN5XCIsXHJcbiAgU2VsZWN0Y3VycmVuY3lmb3JhbGx5b3VydHJhbnNhY3Rpb25zOlxyXG4gICAgXCJTZWxlY3QgY3VycmVuY3kgZm9yIGFsbCB5b3VyIHRyYW5zYWN0aW9ucyB3aXRoIFBldGNhdGlvbi5cIixcclxuICBQYXNzd29yZHNldHRpbmdzOiBcIlBhc3N3b3JkIHNldHRpbmdzXCIsXHJcbiAgV2hhdHBldHN3b3VsZHlvdXByZWZlcmZvcnRoaXNzZXJ2aWNlOlxyXG4gICAgXCJXaGF0IHBldHMgd291bGQgeW91IHByZWZlciBmb3IgdGhpcyBzZXJ2aWNlP1wiLFxyXG4gIGJvYXJkaW5nU2VydmljZWRlc2NyaXB0aW9uOlxyXG4gICAgXCJTZWxlY3QgdGhlIHBldHMgeW91IHdpbGwgYmUgd2lsbGluZyB0byBzZXJ2aWNlIGZvciBuaWdodCBib2FyZGluZy5cIixcclxuICBGbGV4aWJsZTogXCJGbGV4aWJsZVwiLFxyXG4gIE1vZGVyYXRlOiBcIk1vZGVyYXRlXCIsXHJcbiAgU3RyaWN0OiBcIlN0cmljdFwiLFxyXG4gIERveW91Y2hhcmdldHJhbnNwb3J0YXRpb25mZWU6IFwiIERvIHlvdSBjaGFyZ2UgdHJhbnNwb3J0YXRpb24gZmVlP1wiLFxyXG4gIE1pblByaWNlOiBcIk1pbiBQcmljZVwiLFxyXG4gIE1heFByaWNlOiBcIk1heCBQcmljZVwiLFxyXG4gIE1ha2Vib29raW5nd2l0aDogXCJNYWtlIGJvb2tpbmcgd2l0aFwiLFxyXG4gIEJvb2tpbmdmb3I6IFwiQm9va2luZyBmb3JcIixcclxuICBOZWVkc2l0dGVydG9waWNrdXBteXBldHM6IFwiTmVlZCBzaXR0ZXIgdG8gcGljayB1cCBteSBwZXRzXCIsXHJcbiAgUXVlc3Rpb25zOiBcIlF1ZXN0aW9uc1wiLFxyXG4gIFNlbGVjdHNraWxsczogXCJTZWxlY3Qgc2tpbGxzXCIsXHJcbiAgcmVzdGF1cmFudE5hbWU6ICdSZXN0YXVyYW50IG5hbWUnLFxyXG4gIHJldmlld3M6ICdyZXZpZXdzJyxcclxuICBhd2FyZHM6ICdBd2FyZHMnLFxyXG4gIGdlbmVyOiAnR2VucmUnLFxyXG4gIHRyYW5zcG9ydGF0aW9uOiAnVHJhbnNwb3J0YXRpb24nLFxyXG4gIHNwb3RIb2xpZGF5czogJ1Nwb3QgaG9saWRheXMnLFxyXG4gIHNlcnZpY2VDaGFyZ2VzOiAnU2VydmljZSBjaGFyZ2VzJyxcclxuICByZXNlcnZhdGlvbnM6ICdSZXNlcnZhdGlvbnMnLFxyXG4gIHNtb2tpbmc6ICdTbW9raW5nIGNlc3NhdGlvbiAvIHNtb2tpbmcnLFxyXG4gIHBhcmtpbmc6ICdQYXJraW5nJyxcclxuICBzZXJ2aWNlQW1lbml0aWVzOiAnU2VydmljZSAmIEFtZW5pdGllcycsXHJcbiAgYWRkZWRCYW5rQWNjb3VudDogXCJBZGRlZCBiYW5rIGFjY291bnRcIixcclxuICBsYW5ndWFnZXM6IFwiTGFuZ3VhZ2VzXCIsXHJcbiAgbm9vbkNoYXJnZXM6IFwiTm9vbiBjaGFyZ2VzXCIsXHJcbiAgbmlnaHRDaGFyZ2VzOiBcIk5pZ2h0IENoYXJnZXNcIixcclxuICBlbnRlckJhbmtOYW1lOiBcIkVudGVyIEJhbmsgbmFtZVwiLFxyXG4gIGJyYW5jaE5hbWU6IFwiRW50ZXIgQnJhbmNoIG5hbWVcIixcclxuICBicmFuY2hDb2RlOiBcIkVudGVyIEJyYW5jaCBjb2RlXCIsXHJcbiAgYWNjb3VudEhvbGRlck5hbWU6IFwiRW50ZXIgQWNjb3VudCBob2xkZXIgbmFtZVwiLFxyXG4gIGFjY291bnROdW1iZXI6IFwiRW50ZXIgQWNjb3VudCBudW1iZXJcIixcclxuICByb3V0aW5nTnVtYmVyOiBcIkVudGVyIFJvdXRpbmcgbnVtYmVyXCIsXHJcbiAgZW50ZXJMb2NhdGlvbjogXCJFbnRlciBMb2NhdGlvblwiLFxyXG4gIGJhbmtDb2RlOiBcIkVudGVyIEJhbmsgY29kZVwiLFxyXG4gIGVudGVyWmlwQ29kZTogXCJFbnRlciB6aXAgY29kZVwiLFxyXG4gIHBvc3RhbENvZGU6IFwiUG9zdGFsIGNvZGVcIixcclxuICBsb2NhdGlvbkthbmE6IFwiTG9jYXRpb24gS2FuYVwiLFxyXG4gIGxvY2F0aW9uS2Fuamk6IFwiTG9jYXRpb24ga2FuamlcIixcclxuICBib29rbWFya1NpdHRlcjogXCJTdWNjZXNzZnVsbHkgbWFya2VkIHNpdHRlciBhcyBmYXZvdXJpdGVcIixcclxuICB1bm1hcmtTaXR0ZXI6IFwiU3VjY2Vzc2Z1bGx5IHVubWFya2VkIHNpdHRlciBhcyBmYXZvdXJpdGVcIixcclxuICBlcnJvclVwZGF0aW5nU3RhdHVzOlwiRXJyb3IgdXBkYXRpbmcgc3RhdHVzXCIsXHJcbiAgcGF5OiBcIlBheVwiLFxyXG4gIGFjY2VwdGVkQnlTaXR0ZXI6IFwiQWNjZXB0ZWQgYnkgc2l0dGVyXCIsXHJcbiAgYWNjZXB0ZWRCeVlvdTogXCJBY2NlcHRlZCBieSB5b3VcIixcclxuICBwYXltZW50UGVuZGluZzogXCJQYXltZW50IFBlbmRpbmdcIixcclxuICBwYXltZW50RG9uZTogXCJQYWlkXCIsXHJcbiAgc3RhdHVzOiAnU3RhdHVzJyxcclxuICBwYXltZW50SW5mb3JtYXRpb246ICdQYXltZW50IEluZm9ybWF0aW9uJyxcclxuICBzZWxlY3RQYXltZW50TWV0aG9kOiBcIlNlbGVjdCBwYXltZW50IG1ldGhvZFwiLFxyXG4gIHNhdmVkQ2FyZHM6IFwiU2F2ZWQgQ2FyZHNcIixcclxuICBkb1lvdUhhdmVDb3Vwb246ICdEbyB5b3UgaGF2ZSBhIGNvdXBvbiBjb2RlID8nLFxyXG4gIGNvdXBvbkRldGFpbDogJyBFbnRlciB5b3VyIGNvdXBvbiBjb2RlIGhlcmUgdG8gYXZhaWwgZGlzY291bnQgb24geW91IGJvb2tpbmcuJyxcclxuICBjb25maXJtQm9va2luZzogJ0NvbmZpcm0gYm9va2luZycsXHJcbiAgYm9va2luZ0RldGFpbHM6ICdCb29raW5nIERldGFpbHMnLFxyXG4gIHRvdGFsQW1vdW50OiAnVG90YWwgQW1vdW50JyxcclxuICB0cmFuc3BvcnRGZWU6IFwiVHJhbnNwb3J0YXRpb24gZmVlXCIsXHJcbiAgZGlzY291bnQ6IFwiRGlzY291bnRcIixcclxuICB0YXg6ICdUYXgnLFxyXG4gIHN1YlRvdGFsOiAnU3VidG90YWwnLFxyXG4gIGJvb2tpbmdTdWNjZXNzOiAnQm9va2luZyBTdWNjZXNzZnVsJyxcclxuICBib29rZWRGb3I6ICdZb3VyIGJvb2tpbmcgZm9yICcsXHJcbiAgaXNTdWNjZXNzZnVsOiAnIGlzIHN1Y2Nlc3NmdWwuJyxcclxuICBjb21wbGV0ZWQ6ICdDb21wbGV0ZWQnLFxyXG4gIGNhbmNlbGxlZDogJ0NhbmNlbGxlZCcsXHJcbiAgYWRkaXRpb25hbFNlcnZpY2U6IFwiQWRkaXRpb25hbCBzZXJ2aWNlc1wiLFxyXG4gIHRyYW5zcG9ydGF0aW9uRmVlOiAnVHJhbnNwb3J0YXRpb24gZmVlJ1xyXG59O1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmVhdGhlci1pY29ucy1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRheS1waWNrZXIvRGF5UGlja2VySW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF5LXBpY2tlci9tb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmFjZWJvb2stbG9naW4vZGlzdC9mYWNlYm9vay1sb2dpbi1yZW5kZXItcHJvcHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvY2FsaXphdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaW1wbGUtc25hY2tiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHdpdHRlci1sb2dpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiYXhpb3MiLCJVX0FDVElWRV9CT0FSRElORyIsIlVfQUNUSVZFX0RBWV9DQVJFIiwiVV9BQ1RJVkVfRFJPUF9JTl9WSVNJVFMiLCJVX0FDVElWRV9HUk9PTUlORyIsIlVfQUNUSVZFX0hPVVNFX0NBTEwiLCJVX0FDVElWRV9IT1VTRV9TSVRUSU5HIiwiVV9BQ1RJVkVfUEVUX1dBTEtJTkciLCJVX0FERF9QRVQiLCJVX0FERF9RVUVTVElPTiIsIlVfQUREX1NLSUxMIiwiVV9BRERfU1BPVCIsIlVfQVJSQU5HX01FRVRVUCIsIlVfQk9BUkRJTkdfRElTQ09VTlRTIiwiVV9CT0FSRElOR19QRVRfU0VSVklDRV9GRUUiLCJVX0JPQVJESU5HX1BSRUZFUkVOQ0UiLCJVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyIsIlVfREVMRVRFX1BFVCIsIlVfREVMRVRFX1FVRVNUSU9OIiwiVV9ERUxFVEVfU1BPVCIsIlVfRE9HX1dBTEtJTkdfRElTQ09VTlQiLCJVX0RPR19XQUxLSU5HX0lORk8iLCJVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFIiwiVV9ET0dfV0FMS0lOR19TRVJWSUNFX1BSRUZFUkVOQ0UiLCJVX0RST1BfSU5fVklTSVRFU19QUkVGRVJFTkNFIiwiVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMiLCJVX0RST1BfSU5fVklTSVRTX1NFUlZJQ0VfRkVFIiwiVV9GSUxURVJFRF9BVkFJTEFCTEVfU0lUVEVSIiwiVV9HRVRfQUREUkVTUyIsIlVfR0VUX0FMTF9QRVRTIiwiVV9HRVRfQUxMX1NQT1QiLCJVX0dFVF9BVkFJTEFCSUxJVFkiLCJVX0dFVF9BVkFJTEFCSUxJVFlfQllfREFURVMiLCJVX0dFVF9BVkFJTEFCTEVfU0VSVklDRVMiLCJVX0dFVF9CQVNJQ19JTkZPIiwiVV9HRVRfQk9BUkRJTkdfSU5GTyIsIlVfR0VUX0JPQVJESU5HX1BSRVZJRVciLCJVX0dFVF9CUkVFRF9XSVRIX1RZUEUiLCJVX0dFVF9DSVRJRVMiLCJVX0dFVF9DT1VUUklFUyIsIlVfR0VUX0RBU0hCT0FSRCIsIlVfR0VUX0RPR19XQUxLSU5HX1BSRVZJRVciLCJVX0dFVF9EUk9QX0lOX1BSRVZJRVciLCJVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPIiwiVV9HRVRfR1JPT01JTkdfSU5GTyIsIlVfR0VUX0dST09NSU5HX1BSRVZJRVciLCJVX0dFVF9IT1VTRV9DQUxMX0lORk8iLCJVX0dFVF9IT1VTRV9DQUxMX1BSRVZJRVciLCJVX0dFVF9IT1VTRV9DQUxMX1NFUlZJQ0UiLCJVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8iLCJVX0dFVF9IT1VTRV9TSVRUSU5HX1BSRVZJRVciLCJVX0dFVF9MQU5HQVVHRVMiLCJVX0dFVF9QQVJLSU5HIiwiVV9HRVRfUEFZTUVOVF9NRVRIT0RTIiwiVV9HRVRfUEVUUyIsIlVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXIiwiVV9HRVRfUEVUX1NFUlZJQ0UiLCJVX0dFVF9QRVRfU1BPVFMiLCJVX0dFVF9RVUVTVElPTlMiLCJVX0dFVF9SRVNFUlZBVElPTl9UWVBFUyIsIlVfR0VUX1NFUlZJQ0VTIiwiVV9HRVRfU0lOR0xFX1NJVFRFUiIsIlVfR0VUX1NJTkdMRV9TUE9UIiwiVV9HRVRfU0lUVEVSX0FWQUlMQUJJTElUWSIsIlVfR0VUX1NJVFRFUl9SRVNFUlZBVElPTlMiLCJVX0dFVF9TS0lMTFMiLCJVX0dFVF9TTU9LSU5HX0NFU1NJT05TIiwiVV9HRVRfVEhSRUFEX0JPT0tJTkciLCJVX0dFVF9VU0VSX1JFU0VSVkFUSU9OUyIsIlVfR0VUX1VTRVJfU0tJTExTIiwiVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5UIiwiVV9HUk9PTUlOR19TRVJWSUNFX0ZFRSIsIlVfR1JPT01JTkdfU0VSVklDRV9QUkVGRVJFTkNFIiwiVV9IT1VTRV9DQUxMX0RJU0NPVU5UIiwiVV9IT1VTRV9DQUxMX1BSRUZFUkVOQ0UiLCJVX0hPVVNFX0NBTExfU0VSVklDRV9GRUUiLCJVX0hPVVNFX1NJVFRJTkdfRElTQ09VTlRTIiwiVV9IT1VTRV9TSVRUSU5HX1BSRUZFUkVOQ0UiLCJVX0hPVVNFX1NJVFRJTkdfU0VSVklDRV9GRUUiLCJVX0lNQUdFX1VQTE9BRCIsIlVfUEVUX0FERElUSU9OQUxfUkVRVUVTVCIsIlVfUEVUX0FNT1VOVF9DQUxDVUxBVElPTiIsIlVfUEVUX0RBWV9DQVJFX0RJU0NPVU5UIiwiVV9QRVRfREFZX0NBUkVfSU5GTyIsIlVfUEVUX0RBWV9DQVJFX1BSRUZFUkVOQ0UiLCJVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMiLCJVX1BFVF9TRVJWSUNFX0FWQUlBTEFCSUxJVFkiLCJVX1BFVF9TUE9UX0NBVEVHT1JJRVMiLCJVX1JBVEVfU0lUVEVSIiwiVV9SRVFVRVNUX1NJVFRFUiIsIlVfU0FWRV9BRERSRVNTIiwiVV9TQVZFX0JBU0lDX0lORk8iLCJVX1NBVkVfTE9DQUxJVFkiLCJVX1NBVkVfUE9SVEZPTElPIiwiVV9TRU5EX01FU1NBR0UiLCJVX1NFVF9BVkFJTEFCTEVfU0VSVklDRVMiLCJVX1NJTkdMRV9QRVQiLCJVX1VQREFURV9QRVQiLCJVX1VQREFURV9TUE9UIiwiVV9VUExPQURfUFJPRklMRV9QSUNUVVJFIiwiVV9VU0VSX0xPR0lOIiwiVV9VU0VSX1JFR0lTVEVSIiwiVV9BRERfQ0FSRCIsIlVfR0VUX0NBUkQiLCJVX0RFTEVURV9DQVJEIiwiVV9BRERfQkFOS19BQ0NPVU5UIiwiVV9HRVRfQkFOS19BQ0NPVU5UIiwiVV9HRVRfQkFOS19ERVRBSUxTIiwiVV9ERUxFVEVfQkFOS19BQ0NPVU5UIiwiVV9HRVRfUEVUX1NQT1RfREVUQUlMUyIsIkdPT0dMRV9QTEFDRVNfQkFTRV9VUkwiLCJHT09HTEVfUExBQ0VTX0FQSSIsIlVfVVBMT0FEX0RPQ1VNRU5UUyIsIlVfR0VUX1RSQU5TUE9SVF9DSEFSR0VTIiwiVV9BRERfVFJBTlNQT1JUX0NIQVJHRVMiLCJVX1VQREFURV9SRVFVRVNUX1NUQVRVUyIsIlVfQk9PS01BUktfU0lUVEVSIiwiVV9HRVRfUkVRVUVTVF9ERVRBSUwiLCJVX0NPTkZJUk1fUEFZTUVOVCIsIlVfUEFZTUVOVF9ISVNUT1JZIiwiVV9HRVRfRkFWT1JJVEVfU0lUVEVSIiwiVV9DSEFOR0VfTUVFVFVQX1NUQVRVUyIsIlVfR0VUX01FRVRVUFMiLCJVX0NIQVRfQUNUSU9OIiwiVV9HRVRfRkFWT1JJVEVfU1BPVCIsIlVfTUFSS19VTk1BUktfU1BPVCIsIlVfTUFLRV9DQVJEX19ERUZBVUxUIiwiVV9NQUtFX0JBTktfREVGQVVMVCIsIlVfUkVTRVRfUEFTU1dPUkQiLCJVX0NIQU5HRV9QQVNTV09SRCIsIlVfRk9SR09UX1BBU1NXT1JEIiwiVV9BUFBMWV9DT1VQT04iLCJVX1JFTU9WRV9DT1VQT04iLCJVX0dFVF9DT1VQT04iLCJVX1JFQURfU1RBVFVTIiwiVV9SRVZJRVdfU1BPVCIsIlVfR0VUX05FV1MiLCJVX0dFVF9FVkVOVCIsIlVfR0VUX1NJTkdMRV9ORVdTIiwiQ29va2llcyIsIm5leHRDb29raWUiLCJiYXNlVVJMIiwiaGVhZGVycyIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXRoIiwiYm9keSIsImN0eCIsInVybCIsImNvb2tpZXMiLCJnZXQiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsIkFQSSIsImlkIiwiYXBpVXJsIiwicmVzdWx0IiwicmVnaXN0ZXJVc2VyIiwibG9naW5Vc2VyIiwicmVzZXRQYXNzd29yZCIsImNoYW5nZVBhc3N3b3JkIiwiZm9yZ290UGFzc3dvcmQiLCJnZXREYXNoYm9hcmQiLCJnZXRCYXNpY0luZm8iLCJnZXRBZGRyZXNzIiwic2F2ZUJhc2ljSW5mbyIsInNhdmVBZGRyZXNzIiwiYWRkUXVlc3Rpb24iLCJkZWxldGVRdWVzdGlvbiIsInZhbCIsImdldFF1ZXN0aW9ucyIsImdldFNraWxscyIsImdldFVzZXJTa2lsbHMiLCJhZGRTa2lsbCIsInNhdmVMb2NhbGl0eUluZm8iLCJzYXZlUG9ydGZvbGlvIiwiZ2V0QXZhaWxhYmxlU2VydmljZXMiLCJzZXRBdmFpbGFibGVTZXJ2aWNlIiwiZ2V0QXZhaWxhYmlsaXR5IiwiZ2V0QXZhaWxhYmlsaXR5QnlEYXRlIiwiYWRkUGV0IiwiZ2V0QWxsUGV0cyIsImdldFNpbmdsZVBldHMiLCJ1cGRhdGVQZXQiLCJkZWxldGVQZXQiLCJnZXRTZXJ2aWNlIiwiYWN0aXZlQm9hcmRpbmciLCJhY3RpdmVEYXlDYXJlIiwiYWN0aXZlSG91c2VTaXR0aW5nIiwiYWN0aXZlRHJvcEluVmlzaXRzIiwiYWN0aXZlUGV0V2Fsa2luZyIsImFjdGl2ZUdyb29taW5nIiwiYWN0aXZlSG91c2VDYWxsIiwiZ2V0SG91c2VDYWxsSW5mbyIsImdldEhvdXNlQ2FsbFNlcnZpY2UiLCJob3VzZUNhbGxTZXJ2aWNlRmVlIiwiaG91c2VDYWxsUHJlZmVyZW5jZSIsImhvdXNlQ2FsbERpc2NvdW50IiwiZ2V0SG91c2VDYWxsUHJldmlldyIsImdldEdyb29taW5nU2VydmljZSIsImdldEdyb29taW5nSW5mbyIsImdyb29taW5nU2VydmljZUZlZSIsImdyb29taW5nU2VydmljZVByZWZlcm5jZSIsImdyb29taW5nU2VydmljZURpc2NvdW50IiwiZ2V0R3Jvb21pbmdQcmV2aWV3IiwiYm9hcmRpbmdTZXJ2aWNlRmVlIiwiYm9hcmRpbmdQcmVmZXJlbmNlIiwiYm9hcmRpbmdEaXNjb3VudCIsImdldEJvYXJkaW5nSW5mbyIsImdldEJvYXJkaW5nUHJldmlldyIsImdldEhvdXNlU2l0dGluZ0luZm8iLCJob3VzZVNpdHRpbmdTZXJ2aWNlRmVlIiwiaG91c2VTaXR0aW5nRGlzY291bnQiLCJob3VzZVNpdHRpbmdQcmVmZXJlbmNlIiwiZ2V0SG91c2VTaXR0aW5nUHJldmlldyIsImdldERyb3BJblZpc2l0c0luZm8iLCJkcm9wSW5WaXNpdHNTZXJ2aWNlRmVlIiwiZHJvcEluVmlzaXRQcmVmZXJlbmNlIiwiZHJvcEluVmlzaXREaXNjb3VudHMiLCJnZXREcm9wSW5WaXNpdHNQcmV2aWV3IiwiZ2V0UGV0RGF5Q2FyZUluZm8iLCJwZXREYXlDYXRlU2VydmljZUZlZSIsInBldERheUNhcmVQcmVmZXJlbmNlIiwicGV0RGF5Q2FyZURpc2NvdW50IiwiZ2V0UGV0RGF5Q2FyZVByZXZpZXciLCJnZXREb2dXYWxraW5nSW5mbyIsIkRvZ1dhbGtpbmdTZXJ2aWNlRmVlIiwiZG9nV2Fsa2luZ1ByZWZlcmVuY2UiLCJkb2dXYWxraW5nRGlzY291bnQiLCJnZXREb2dXYWxraW5nUHJldmlldyIsInBldEFkZGl0aW9uYWxTZXJ2aWNlcyIsInBldEFtb3VudENhbGN1bGF0aW9uIiwic2l0dGVyUmVxdWVzdCIsImNoYW5nZVJlcXVlc3RTdGF0dXMiLCJwZXRTZXJ2aWNlQXZhaWxhYmlsaXR5IiwiZ2V0U2l0dGVyUmVzZXJ2ZXRpb25zIiwicGFnZSIsImdldFVzZXJSZXNlcnZhdGlvbnMiLCJzZW5kTWVzc2FnZSIsImNoYXRBY3Rpb24iLCJnZXRUaHJlYWRCb29raW5nIiwiYXJyYW5nZU1lZXR1cCIsInVwZGF0ZU1lZXR1cFN0YXR1cyIsImdldE1lZXR1cFJlcXVlc3QiLCJnZXRUcmFuc3BvcnRDaGFyZ2VSZXF1ZXN0IiwiYWRkVHJhbnNwb3J0Q2hhcmdlUmVxdWVzdCIsInVwZGF0ZVJlcXVlc3RTdGF0dXMiLCJ1cGRhdGVSZWFkU3RhdHVzIiwiZ2V0Q291dGlyZXMiLCJnZXRDaXRpZXMiLCJnZXRQZXRzIiwiZ2V0QnJlZWRXaXRoVHlwZSIsInVwbG9hZEZpbGUiLCJnZXRGaWx0ZXJlZEF2aWFsYWJsZVNpdHRlciIsImdldEZhdm9yaXRlU2l0dGVycyIsInVwbG9hZFByb2ZpbGVQaWN0dXJlIiwidXBsb2FkRG9jdW1lbnQiLCJnZXRQZXRTcG90c0NhdGVnb3J5IiwiZ2V0UGV0U3BvdHMiLCJtYXJrVW5tYXJrU3BvdCIsImdldFBldFNwb3REZXRhaWxzIiwiZ2V0UGF5bWVudE1ldGhvZHMiLCJnZXRSZXNlcnZhdGlvblR5cGVzIiwiZ2V0U21va2luZ0Nlc3Npb24iLCJnZXRQYXJraW5nIiwiZ2V0TGFuZ2F1Z2VzIiwiYWRkU3BvdCIsInVwZGF0ZVNwb3QiLCJyYXRlU2l0dGVyIiwiZ2V0U2luZ2xlU2l0dGVyIiwibWFya1VubWFya1NpdHRlciIsImdldEFsbFNwb3RzIiwiZ2V0RmF2b3JpdGVTcG90cyIsImRlbGV0ZVNwb3QiLCJnZXRTaW5nbGVTcG90IiwiZ2V0U2l0dGVyQXZhaWxhYmlsaXR5IiwicmF0ZVJldmlld1Nwb3QiLCJhZGROZXdDYXJkIiwiZ2V0QWxsQ2FyZCIsImRlbGV0ZUNhcmQiLCJhZGROZXdCYW5rQWNjb3VudCIsImdldEFsbEJhbmtBY2NvdW50IiwiZ2V0QWxsQmFua0FjY291bnREZXRhaWxzIiwibWFya0NhcmRBc0RlZmF1bHQiLCJtYWtlQmFua0FzRGVmYXVsdCIsImRlbGV0ZUJhbmtBY2NvdW50IiwiZ2V0U2luZ2xlUmVxdWVzdERldGFpbCIsImNvbmZpcm1QYXltZW50IiwicGF5bWVudEhpc3RvcnkiLCJhcHBseUNvdXBvbiIsInJlbW92ZUNvdXBvbiIsImdldENvdXBvbnMiLCJ0eXBlIiwiZ2V0TmV3cyIsImdldEV2ZW50cyIsImdldFNpbmdsZU5ld3MiLCJTdWNjZXNzT3B0aW9ucyIsInBvc2l0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiY2xvc2VTdHlsZSIsIkZhaWx1cmVPcHRpb25zIiwiUmVhY3QiLCJZZWFyTW9udGhGb3JtIiwiZGF0ZSIsImxvY2FsZVV0aWxzIiwib25DaGFuZ2UiLCJiZWZvcmUiLCJzdGFydFJhbmdlIiwiZW5kUmFuZ2UiLCJpc0RvYiIsIm1vbnRocyIsImdldE1vbnRocyIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZnJvbU1vbnRoIiwidG9Nb250aCIsInllYXJzIiwiaSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwieWVhciIsIm1vbnRoIiwidGFyZ2V0IiwiZm9ybSIsInZhbHVlIiwiZ2V0TW9udGgiLCJtYXAiLCJyb3V0ZXIiLCJjb29raWUiLCJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsIkF1dGgiLCJwcm9wcyIsInVuZGVmaW5lZCIsInBhdGhuYW1lIiwicmVwbGFjZSIsImdldEluaXRpYWxQcm9wcyIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwic2xpY2UiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkZhY2Vib29rTG9naW4iLCJzdHJpbmdzIiwiTG9naW5GYWNlYm9vayIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwib25TdWNjZXNzIiwibG9nIiwiYWxlcnQiLCJvbkZhaWx1cmUiLCJhcHBJZCIsInJlbmRlclByb3BzIiwiQ29udGludWV3aXRoRmFjZWJvb2siLCJSZWFjdEdvb2dsZUxvZ2luIiwiR29vZ2xlTG9naW4iLCJwcm9maWxlT2JqIiwiY2xpZW50SWQiLCJDb250aW51ZXdpdGhHb29nbGUiLCJSZWFjdFR3aXR0ZXJMb2dpbiIsIlR3aXR0ZXJMb2dpbiIsImF1dGhIYW5kbGVyIiwiQ29udGludWV3aXRoVHdpdHRlciIsIkRheVBpY2tlcklucHV0IiwicGFyc2VEYXRlIiwiZm9ybWF0RGF0ZSIsIndpdGhTbmFja2JhciIsImVycm9yT3B0aW9ucyIsIm1vbWVudCIsIkZlYXRoZXJJY29uIiwiTG9naW5Hb29nbGUiLCJhcGkiLCJTaWdudXAiLCJzZXRTdGF0ZSIsImNvbmRpdGlvbiIsImNoZWNrZWQiLCJyZW1lbWJlck1lIiwiY29uZmlybVBhc3N3b3JkIiwiZXJyb3JzIiwidGhhdCIsImZpcnN0bmFtZSIsImZpcnN0TmFtZSIsImxhc3RuYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImRvYiIsImRhdGVPZkJpcnRoIiwiZm9ybWF0IiwicGFzc3dvcmQiLCJpc19hZ3JlZSIsInJlc3BvbnNlIiwicHJvZmlsZV9waWN0dXJlIiwicGhvbmVfbnVtYmVyIiwib3BlblNuYWNrYmFyIiwic2hvd1Bhc3MiLCJzaG93Q29uZmlybSIsInBhc3N3b3JkSW5wdXQiLCJjcmVhdGVSZWYiLCJjb25maXJtSW5wdXQiLCJoYW5kbGVEYXRlQ2hhbmdlIiwib25UZXh0Q2hhbmdlIiwiY2hlY2tib3hPbkNoYW5nZSIsImNoZWNrYm94UmVtZW1iZXJPbkNoYW5nZSIsImRheSIsInJlbmRlciIsIkNyZWF0ZXlvdXJmcmVlYWNjb3VudHRvZGF5IiwiRmlyc3RuYW1lIiwiTGFzdG5hbWUiLCJFbWFpbGFkZHJlc3MiLCJEYXRlb2ZCaXJ0aCIsIm1vZGlmaWVycyIsImFmdGVyIiwiY2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwicmVhZE9ubHkiLCJ0b2dnbGVTZWN1cmVQYXNzd29yZCIsInRvZ2dsZUNvbmZpcm1QYXNzd29yZCIsIlJlbWVtYmVybWUiLCJyZWdpc3RlclRlcm0iLCJKb2lubm93Iiwib3IiLCJDb250aW51ZXdpdGhMaW5lIiwiQWxyZWFkeWhhdmVhbmFjY291bnQiLCJMb2dpbiIsInN1Y2Nlc3NPcHRpb25zIiwiZm9udEZhbWlseSIsInpJbmRleCIsInNlcnZpY2VGZWVPYmplY3QiLCJjYXBhY2l0eSIsInBldF9zaXplX2lkIiwic2VydmljZV9jaGFyZ2UiLCJlYXJuaW5nX2Ftb3VudCIsImNpdGllcyIsImxhYmVsIiwicGV0cyIsIm5ld3NBbmRFdmVudHMiLCJwb3N0ZWQiLCJwb3N0IiwiZmFxIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJzZXJ2aWNlRGF0YSIsInBldFR5cGUiLCJwcmljZXMiLCJTZXJ2aWNlVGltZSIsInBldFNpemUiLCJkdXJhdGlvbnMiLCJwZXRDb3VudCIsInNvcnQiLCJwZXQiLCJteVBldHMiLCJhZ2UiLCJpbWFnZSIsIndlaWdodCIsInJldmlld1N0YXRlRGF0YSIsInJhdGluZyIsImNsZWFubGluZXNzIiwiYWNjdXJhY3kiLCJjb21tdW5pY2F0aW9uIiwiY2hlY2tJbiIsInJldmlld09iamVjdERhdGEiLCJ1c2VySW1hZ2UiLCJ1c2VyTmFtZSIsInRpbWUiLCJyZXZpZXciLCJ1c2VySW1hZ2VzIiwidXNlckNvdW50Iiwic2l0dGVyUmVzcG9uc2UiLCJzaXR0ZXJSZXBseSIsInNpdHRlckltYWdlIiwic2l0dGVyTmFtZSIsInNpdHRlclNlcnZpY2VzIiwic2VydmljZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwZXJpb2QiLCJzaXR0ZXJTdGF0ZXMiLCJib29raW5nRm9yTWUiLCJib29raW5nQnlNZSIsInBCb29raW5nRm9yTWUiLCJwQm9va2luZ0J5TWUiLCJwVG90YWxCb29raW5nIiwidG90YWxFYXJuaW5nIiwicFRvdGFsRWFybmluZyIsInRvdGFsUmVmZXJyYWwiLCJwVG90YWxSZWZlcnJhbCIsInJlcXVlc3RzQXJyYXkiLCJhZGRyZXNzIiwiZnJvbSIsInRvIiwidG90YWwiLCJtZWV0aW5nUmVxdWVzdHMiLCJjbGllbnROYW1lIiwicmVzZXJ2YXRpb25SZXF1ZXN0cyIsInBheW1lbnRTdGF0dXMiLCJteVNlcnZpY2VzIiwic2VydmljZU5hbWUiLCJhY3RpdmUiLCJpbnN0YW50Qm9va2luZyIsInNwZWNpZmljYXRpb25zIiwic3BvdHMiLCJpbWFnZXMiLCJhdmFpbGFibGVGb3IiLCJyZXBlYXRlZENsaWVudCIsInJldmlld3MiLCJwbGFjZSIsImdlbmRlciIsIkxvY2FsaXplZFN0cmluZ3MiLCJlbmciLCJzZWFyY2hTaXR0ZXIiLCJiZWNvbWVBU2l0dGVyIiwib3VyU2VydmljZXMiLCJzaWduVXAiLCJzaWduSW4iLCJoZWxwIiwiZXhwbG9yZSIsImNvbXBhbnkiLCJhYm91dFVzIiwiY29udGFjdCIsImNhcmVlciIsInByaXZhY3lQb2xpY3kiLCJ0ZXJtc09mVXNlciIsImNvb2tpZVBvbGljeSIsInBldFNwb3RzIiwiYmxvZ3MiLCJmYXFzIiwic2FmZXR5IiwibmV3c0FuZFNhZmV0eSIsIm5ld3Nyb29tIiwiZXZlbnRzQW5kVXBkYXRlcyIsInN0YXlDb25uZWN0ZWQiLCJzdWJzY3JpYmUiLCJmb2xsb3dQZXRjYXRpb24iLCJhZGRZb3VyUGV0U3BvdCIsImFsbFJpZ2h0c1Jlc2VydmVkIiwibG92ZUNhcmVBbmRBbGxOZWVkc0ZvclBldHMiLCJib29rVHJ1c3RlZFNpdHRlcnMiLCJ5b3VyUGV0IiwieWFhUGV0TG92ZXJzIiwid2VNYWRlSXRTdXBlckVhc3lUaXRsZSIsInBldEJvYXJkaW5nIiwid2VNYWRlSXRTdXBlckVhenlQZXRCb2FyZGluZyIsImhvdXNlU2l0dGluZyIsImRyb3BJblZpc2l0cyIsInBldERheUNhcmUiLCJkb2dXYWxraW5nIiwiaG91c2VDYWxsIiwiZ3Jvb21pbmciLCJib29rV2l0aFByb2Zlc3Npb25hbFBldFNpdHRlciIsInZlcmlmaWVkUGV0U2l0dGVycyIsIkFsbFNpdHRlclBhc3NBQmFzaWNDaGVjayIsImtub3dTaXR0ZXJQZXJzb25hbGx5IiwiQWxsU2l0dGVyc1Byb3ZpZGUiLCJDZXJ0aWZpZWRQZXRTaXR0ZXJzIiwiQWxsU2l0dGVyc0hhdmVBbmltYWxDZXJ0aWZpY2F0aW9ucyIsImJvb2tZb3VyUGV0Y2F0aW9uU2l0dGVyIiwicGV0Y2F0aW9uR3VhcmFudGVlIiwiQWxsU2VydmljZXNCb29rZWRPblBldGNhdGlvbiIsIndoeUNob29zZVBldGNhdGlvbiIsImZpbmRUaGVQZXJmZWN0SG91c2VLZWVwZXIiLCJ2ZXJpZmllZFNpdHRlcnMiLCJhbGxQZXRjYXRpb25TaXR0ZXJzSGF2ZVBhc3NlZE91ciIsInByb2Zlc3Npb25hbENhcmUiLCJ5b3VyUGV0c1NhZmV0eUlzT3VyVG9wUHJpb3JpdHkiLCJzMjQ3c3VwcG9ydCIsIldlQXJlSGVyZVRvSGVscFlvdUFuZFlvdXJQZXQiLCJwZXRjaXRhdGlvbmZvclBldE93bmVycyIsInNlYXJjaEFuZENvbm5lY3RXaXRoVHJ1c3RlZCIsImZpbmRBVmVyaWZpZWRQZXRTaXR0ZXIiLCJzZWFyY2hBbmRGaW5kRXhwZXJpZW5jZWRMb2NhbCIsImFycmFuZ2VBTWVldEdyZWV0IiwiZ2V0VG9Lbm93WW91clNpdHRlciIsImJvb2tTYWZlbHlPbmxpbmVQYXltZW50cyIsImJvb2tZb3VyU2l0dGVyVGhyb3VnaE91clNhZmVPbmxpbmUiLCJwcm9wZXJVcGRhdGVzIiwib25jZUpvYkNvbXBsZXRlc1lvdUNhblJhdGUiLCJyYXRpbmdBbmRSZXZpZXdzIiwiZXhwbG9yZU91clNpdHRlciIsInBldGNhdGlvbkZvclBldFNpdHRlcnMiLCJ3YW5uYUJlUGFydG5lcldpdGhVcyIsIndoYXRFdmVyUGV0U2VydmljZVlvdVByb3ZpZGUiLCJzMTAwVmVyaWZpZWRqb2JzIiwiRWFzeXByb2ZpbGV2ZXJpZmljYXRpb25zIiwiSW5zdGFudHBheW91dHMiLCJMaXN0eW91cmJvYXJkaW5nIiwiQmVjb21lYXBldHNpdHRlciIsInVwZGF0ZVdoZW5JTW92ZVRoZU1hcCIsIlNhdmVTZWFyY2giLCJhcHBseSIsIm1vcmUiLCJBbGxQcmljZXMiLCJIb3dtYW55cGV0cyIsIkRvZ3NpemUiLCJQZXR0eXBlcyIsIkhvd29mdGVueW91d2FudHNlcnZpY2UiLCJDaGVja19vdXQiLCJDaGVja19pbiIsIlBldGNhdGlvblZlcmlmaWVkIiwiUGV0Y2F0aW9uTm90VmVyaWZpZWQiLCJPbmxpbmVub3ciLCJQZXRzdGFrZW5jYXJlIiwiSGFwcHlDdXN0b21lcnMiLCJSZWhpcmVyYXRlIiwiRXhwZXJpZW5jZSIsIk15cGV0cyIsIkFib3V0cGxhY2UiLCJBZGRpdGlvbmFsU2tpbGxzIiwiUmV2aWV3cyIsIk92ZXJhbGxyYXRpbmciLCJDbGVhbmxpbmVzcyIsIkFjY3VyYWN5IiwiQ29tbXVuaWNhdGlvbiIsIkxvY2F0aW9uIiwiVmFsdWUiLCJBdmFpbGFiaWxpdHkiLCJBdmFpbGFibGUiLCJVbmF2YWlsYWJsZSIsIkJvYXJkaW5nQ2FuY2VsbGF0aW9ucG9saWN5IiwiRXh0cmFpbmZvYWJvdXRsb2NhbGl0eSIsIkRhc2hib2FyZCIsIlJlc2VydmF0aW9ucyIsIk15cHJvZmlsZSIsIk15U2VydmljZXMiLCJGYXZvdXJpdGVTaXR0ZXJzIiwiTXlzcG90cyIsIlBhc3N3b3JkQW5kU2VjdXJpdHkiLCJQYXltZW50c0FuZHBheW91dHMiLCJQYXltZW50aGlzdG9yeSIsIkdsb2JhbHByZWZlcmVuY2VzIiwiUG9pbnRzQW5kY291cG9uIiwiVG90YWxCb29raW5ncyIsIldlZWsiLCJUb3RhbEVhcm5pbmdzIiwiVG90YWxSZWZlcnJhbCIsIkxhdGVzdEJvb2tpbmdSZXF1ZXN0cyIsIlZpZXdBbGwiLCJGcm9tIiwiVG8iLCJUb3RhbCIsIkFjY2VwdCIsIlBlbmRpbmciLCJNYWtlUGF5bWVudCIsIkVkaXQiLCJSZW1vdmUiLCJNZWV0aW5nUmVxdWVzdHMiLCJNeVBvcnRmb2xpbyIsImFyZVlvdVN1cmUiLCJhZGRBdmFpbGFiaWxpdHkiLCJBZGRtb3JlaW1hZ2VzIiwiTmV3c0ZlZWRzIiwiRXhjZWxsZW50IiwiVmlld1Byb2ZpbGUiLCJFeHBsb3JlYW1hemluZ3BsYWNlcyIsIlBldGNhcmUiLCJTZWVhbGwiLCJLbXNmcm9teW91cmN1cnJlbnRsb2NhdGlvbiIsInJlc3BvbnNlcmF0ZSIsIlNlZWF2YWlsYWJpbGl0eSIsIlNlZUFkZGl0aW9uYWxTZXJ2aWNlc1JhdGVzIiwiQWRkcmVzcyIsIkNsaWVudCIsIk1lZXRhdCIsIlJlamVjdCIsIkNhbmNlbCIsIlJlamVjdGVkIiwiUGF5bWVudCIsIkJhc2ljaW5mbyIsIkFkZHJlc3NJbmZvIiwiRGVmYXVsdGF2YWlsYWJpbGl0eSIsIk1vbmRheSIsIlR1ZXNkYXkiLCJXZWRuZXNkYXkiLCJUaHVyc2RheSIsIkZyaWRheSIsIkFkZHNsb3QiLCJTYXR1cmRheSIsIlNhdmUiLCJIb21lQWRkcmVzc0xpbmUiLCJBcHRIb3VzZU5vIiwiQ2l0eSIsIlN0YXRlb3Jwcm92aW5jZSIsIlpJUHBvc3RhbHBvc3Rjb2RlIiwiRnVsbG5hbWUiLCJlbnRlckVtYWlsQWRkcmVzcyIsImVudGVyT3RwIiwiZW50ZXJOZXdQYXNzd29yZCIsImVudGVyT2xkUGFzc3dvcmQiLCJlbnRlckNvbmZpcm1QYXNzd29yZCIsIm90cCIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJDb250YWN0bnVtYmVyIiwiQmlydGhkYXRlIiwiYWRkU2VydmljZUZpcnN0IiwiUHJvZmlsZXZlcmlmaWNhdGlvbiIsInVwbG9hZEltYWdlVGV4dCIsIlNlbGVjdElEY2FyZHR5cGUiLCJQYXNzcG9ydCIsIlZlcmlmeW15cHJvZmlsZSIsIkxpc2NlbnNldmVyaWZpY2F0aW9uIiwidXBsb2FkbGlzY2Vuc2VUZXh0IiwiQWRkbmV3cGV0IiwiSWhhdmUiLCJEb2ciLCJDYXQiLCJCaXJkcyIsIlJlcHRpbGVzIiwiU21hbGxhbmltYWxzIiwiTmFtZSIsIldlaWdodCIsIkFnZSIsIkJyZWFkIiwiU2V4IiwiV2hpY2hzZXJ2aWNlc3dvdWxkeW91bGlrZXRvb2ZmZXIiLCJTZXRzZXJ2aWNlc3RvY2F0aXZlIiwiU2F2ZWFuZENvbnRpbnVlIiwiQUNUSVZFIiwiSU5TVEFOVEJPT0tJTkciLCJNYW5hZ2UiLCJBbGxzZXJ2aWNlcyIsIkJvYXJkaW5nIiwiU2VydmljZSIsIldoYXRpcyIsIm9uUGV0Y2F0aW9uIiwiU2VydmljZUFuZEZlZXMiLCJQcmVmZXJlbmNlcyIsIkRpc2NvdW50cyIsIlNwZWNpYWxkaXNjb3VudGZvcnlvdXJndWVzdHMiLCJvZmZvbmZpcnN0Ym9va2luZ3dpdGh5b3UiLCJBbGxvd29mb25ib29raW5nYW1vdW50IiwiTm9vZmZlcm9udGhpc3NlcnZpY2UiLCJMZW5ndGhvZnN0YXlkaXNjb3VudCIsIldlZWtseWRpc2NvdW50IiwiVGhpc2Rpc2NvdW50d2lsbGFwcGx5dG9hbnlyZXNlcnZhdGlvbiIsIk1vbnRobHlkaXNjb3VudCIsIllvdXJhdmFpbGFiaWxpdHl3aGlsZXBldGlzYXRib2FyZGluZyIsIllvdWNhbnNlbGVjdGZyb210aGVvcHRpb25zcGFydHMiLCJ3aGVuaG9zdGluZ3BldHNpbnlvdXJob21laG93ZnJlcXVlbnRseWNhbnlvdXByb3ZpZGVicmVha3MiLCJob3dmcmVxdWVudGx5Y2FueW91cHJvdmlkZXBvdHR5YnJlYWtzIiwiQ2FueW91cGlja3VwcGV0ZnJvbWNsaWVudHBsYWNlIiwic2VydmljZVR5cGUiLCJXZWxjb21lYWdhaW4iLCJGb3Jnb3RwYXNzd29yZCIsInJlc2VuZCIsIkRvbnRoYXZlYW5hY2NvdW50IiwiUmVnaXN0ZXJub3ciLCJGb3Jnb3R5b3VycGFzc3dvcmQiLCJSZXNldHlvdXJwYXNzd29yZCIsImZvcmdvdFBhc3N3b3JkSW5zdHJ1Y3Rpb24iLCJyZXNldFBhc3N3b3JkSW5zdHJ1Y3Rpb24iLCJTdWJtaXQiLCJCb29raW5nYnltZSIsIkJvb2tpbmdmb3JtZSIsIlJlcXVlc3RieW1lIiwiUmVxdWVzdGZvcm1lIiwiU2l0dGVycmVzZXJ2YXRpb25zIiwiQ2xpZW50cmVzZXJ2YXRpb25zIiwiTXlGYXZvdXJpdGVzIiwiTXlSZXZpZXdzIiwiU3BvdHMiLCJBZGRuZXdzcG90IiwiQXZhaWxhYmxlZm9yIiwiUmVwZWF0Q2xpZW50cyIsIlNvcnRieSIsIlJlY2VudGx5QWRkZWQiLCJDcmVhdGVuZXdwZXRzcG90IiwiR2VuZXIiLCJHZW5kZXIiLCJpZEltYWdlIiwiTGlzY2Vuc2VOdW1iZXIiLCJ2ZXJpZnlNeUNlcnRpZmljYXRlIiwiY2xpY2tUb1VwbG9hZCIsIlNlbGVjdHNwb3RjYXRlZ29yeSIsImJhc2ljaW5mbyIsIlNwb3RpbWFnZXMiLCJBZGRtb3JlIiwiQ29uZmlybSIsIkRldGFpbGVkaW5mb0FtZW5pdGllcyIsIlJlc2VydmF0aW9ucG9zc2libGUiLCJCdWRnZXRQYXltZW50IiwiQnVkZ2V0IiwiQ2FyZHMiLCJzZXJ2aWNlQ2hyYWdlIiwibWV0aG9kT2ZQYXltZW50IiwiQmFua2luZ0luZm8iLCJEZWxldGVDYXJkIiwiU2V0RGVmYXVsdCIsIkFkZG5ld2NhcmQiLCJiYW5rUGF5bWVudCIsIkVudGVySGVyZSIsIlJlamVjdFJlcXVlc3QiLCJwYXNzcG9ydE51bWJlciIsInBheW1lbnROb3RlIiwibm9DYXJkQWRkZWRUaXRsZSIsIm5vUmVzZXJ2YXRpb24iLCJub0NvdXBvbnMiLCJub1BldHMiLCJub1JlcXVlc3QiLCJub0JhbmtBZGRlZFRpdGxlIiwiYWRkQ2FyZFVzaW5nRm9ybSIsImFkZEJhbmtVc2luZ0Zvcm0iLCJub01zZ1lldCIsImVudGVyQ2FyZE51bWJlciIsIk5hbWVvbmNhcmQiLCJzZXREZWZhdWx0Q2FyZCIsIkNhcmRudW1iZXIiLCJFeHBpcmF0aW9uIiwiQWRkY2FyZCIsIkFkZG5ld2JhbmthY2NvdW50IiwiVHlwZW9mYWNjb3VudCIsIlBlcnNvbmFsQWNjb3VudCIsIkJ1c2luZXNzQWNjb3VudCIsIkJhbmtDb3VudHJ5IiwiQmFua0N1cnJlbmN5IiwiQmFua05hbWUiLCJCcmFuY2hOYW1lIiwiRW50ZXJBY2NvdW50TnVtYmVyIiwiUm91dGluZ051bWJlciIsIkVudGVyUm91dGluZ051bWJlciIsIkJhbmtDb2RlIiwiQmFua05hbWVIZXJlIiwiQWNjb3VudEhvbGRlck5hbWUiLCJBY2NvdW50SG9sZGVyTmFtZUhlcmUiLCJCcmFuY2hDb2RlIiwiQWNjb3VudE51bWJlciIsIkFjY291bnRUeXBlIiwiQmFua0FjY291bnRUeXBlIiwiQWRkbmV3YWNjb3VudCIsIkJhbmtBY2NvdW50TnVtYmVyIiwiUGF5bWVudEhpc3RvcnkiLCJXaXRoZHJhd01vbmV5IiwiRWFybmluZ3MiLCJQZW5kaW5nRWFybmluZ3MiLCJXaXRoZHJhd2FscyIsIlBheW1lbnRzIiwiT3RoZXIiLCJZb3VyRXhwZWN0ZWRFYXJuaW5ncyIsInRvdGFsUGF5YWJsZUFtb3VudCIsIkNvbnRhY3Rub3ciLCJWaWV3ZGV0YWlscyIsIkxvb2tpbmdmb3JhUGV0U3BvdCIsIlNlYXJjaCIsIlByb3ZpZGVzcG90aW5mb3JtYXRpb24iLCJQcm92aWRlc3BvdCIsImluZm9ybWF0aW9uIiwiQ2F0ZWdvcmllcyIsIkZpbmRiZXN0cGV0c3BvdHMiLCJSZXN0YXVyYW50Q2FmZSIsIkRvZ3J1bnMiLCJQZXRHcm9vbWluZyIsIkxlaXN1cmVPdXRkb29yIiwiUGV0ZnJpZW5kbHlIb3RlbCIsIlBhcmsiLCJUcmF2ZWwiLCJBbmltYWxTaGVsdGVyIiwiWW91Y2FuZmluZHNwb3RzaW5wbGFjZXMiLCJUb2t5byIsIk9zYWthIiwiS3lvdG8iLCJTYXBwb3JvIiwiTmFnb3lhIiwiS29iZSIsIlNlbmRhaSIsIkNoaWJhIiwiRmVhdHVyZWRTcG90cyIsIkxvYWRtb3JlIiwiTWFya3lvdXJhdmFpbGFiaWxpdHkiLCJOb3RpZmljYXRpb25zIiwibm9TaXR0ZXJGb3VuZCIsIlJlY2VpdmVtZXNzYWdlc2Zyb21ob3N0cyIsIkVtYWlsIiwiVGV4dG1lc3NhZ2UiLCJCcm93c2Vybm90aWZpY2F0aW9uIiwiWW91Y2FubWFya3BpY2t1cHNlcnZpY2VlbmFibGUiLCJSZW1pbmRlcnMiLCJSZWNlaXZlYm9va2luZ3JlbWluZGVycyIsIlByb21vdGlvbnNhbmR0aXBzIiwiUGhvbmVjYWxscyIsIkdlbmVyYWxwcmVmZXJlbmNlcyIsIkxhbmd1YWdlIiwiU2V0eW91cnByZWZlcmVkbGFuZ3VhZ2Vmb3JQZXRjYXRpYW9uIiwiQ291bnRyeSIsIkN1cnJlbmN5IiwiU2VsZWN0Y3VycmVuY3lmb3JhbGx5b3VydHJhbnNhY3Rpb25zIiwiUGFzc3dvcmRzZXR0aW5ncyIsIldoYXRwZXRzd291bGR5b3VwcmVmZXJmb3J0aGlzc2VydmljZSIsImJvYXJkaW5nU2VydmljZWRlc2NyaXB0aW9uIiwiRmxleGlibGUiLCJNb2RlcmF0ZSIsIlN0cmljdCIsIkRveW91Y2hhcmdldHJhbnNwb3J0YXRpb25mZWUiLCJNaW5QcmljZSIsIk1heFByaWNlIiwiTWFrZWJvb2tpbmd3aXRoIiwiQm9va2luZ2ZvciIsIk5lZWRzaXR0ZXJ0b3BpY2t1cG15cGV0cyIsIlF1ZXN0aW9ucyIsIlNlbGVjdHNraWxscyIsInJlc3RhdXJhbnROYW1lIiwiYXdhcmRzIiwiZ2VuZXIiLCJ0cmFuc3BvcnRhdGlvbiIsInNwb3RIb2xpZGF5cyIsInNlcnZpY2VDaGFyZ2VzIiwicmVzZXJ2YXRpb25zIiwic21va2luZyIsInBhcmtpbmciLCJzZXJ2aWNlQW1lbml0aWVzIiwiYWRkZWRCYW5rQWNjb3VudCIsImxhbmd1YWdlcyIsIm5vb25DaGFyZ2VzIiwibmlnaHRDaGFyZ2VzIiwiZW50ZXJCYW5rTmFtZSIsImJyYW5jaE5hbWUiLCJicmFuY2hDb2RlIiwiYWNjb3VudEhvbGRlck5hbWUiLCJhY2NvdW50TnVtYmVyIiwicm91dGluZ051bWJlciIsImVudGVyTG9jYXRpb24iLCJiYW5rQ29kZSIsImVudGVyWmlwQ29kZSIsInBvc3RhbENvZGUiLCJsb2NhdGlvbkthbmEiLCJsb2NhdGlvbkthbmppIiwiYm9va21hcmtTaXR0ZXIiLCJ1bm1hcmtTaXR0ZXIiLCJlcnJvclVwZGF0aW5nU3RhdHVzIiwicGF5IiwiYWNjZXB0ZWRCeVNpdHRlciIsImFjY2VwdGVkQnlZb3UiLCJwYXltZW50UGVuZGluZyIsInBheW1lbnREb25lIiwicGF5bWVudEluZm9ybWF0aW9uIiwic2VsZWN0UGF5bWVudE1ldGhvZCIsInNhdmVkQ2FyZHMiLCJkb1lvdUhhdmVDb3Vwb24iLCJjb3Vwb25EZXRhaWwiLCJjb25maXJtQm9va2luZyIsImJvb2tpbmdEZXRhaWxzIiwidG90YWxBbW91bnQiLCJ0cmFuc3BvcnRGZWUiLCJkaXNjb3VudCIsInRheCIsInN1YlRvdGFsIiwiYm9va2luZ1N1Y2Nlc3MiLCJib29rZWRGb3IiLCJpc1N1Y2Nlc3NmdWwiLCJjb21wbGV0ZWQiLCJhZGRpdGlvbmFsU2VydmljZSIsInRyYW5zcG9ydGF0aW9uRmVlIl0sInNvdXJjZVJvb3QiOiIifQ==
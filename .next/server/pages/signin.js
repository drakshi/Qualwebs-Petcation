(() => {
var exports = {};
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
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

/***/ "./pages/signin/index.tsx":
/*!********************************!*\
  !*** ./pages/signin/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/Api */ "./api/Api.ts");
/* harmony import */ var _utils_Helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Helper */ "./utils/Helper.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hoc/withAuth */ "./components/hoc/withAuth.tsx");
/* harmony import */ var feather_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! feather-icons-react */ "feather-icons-react");
/* harmony import */ var feather_icons_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(feather_icons_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\signin\\index.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_6___default())();
const api = new _api_Api__WEBPACK_IMPORTED_MODULE_3__.default();

class SignIn extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "passwordInput", void 0);

    _defineProperty(this, "onTextChange", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });

    _defineProperty(this, "toggleSecurePassword", () => {
      this.setState({
        showPass: !this.state.showPass
      });
    });

    _defineProperty(this, "checkboxOnChange", event => {
      this.setState({
        rememberMe: event.target.value
      });
    });

    _defineProperty(this, "loginUser", async () => {
      let that = this;
      this.setState({
        errors: {}
      });
      let data = JSON.stringify({
        email: this.state.email,
        password: this.state.password
      });
      api.loginUser(data).then(json => {
        document.cookie = `id=${json.data.response.id}; path=/`;
        document.cookie = `token=${json.data.response.token}; path=/`;
        document.cookie = `firstname=${json.data.response.firstname}; path=/`;
        document.cookie = `lastname=${json.data.response.lastname}; path=/`;
        document.cookie = `phone_number=${json.data.response.phone_number}; path=/`;
        document.cookie = `profile_picture=${json.data.response.profile_picture}; path=/`;
        document.cookie = `email=${json.data.response.email}; path=/`;

        if (this.state.rememberMe) {
          document.cookie = `rem_email=${json.data.response.phone_number}; path=/`;
          document.cookie = `rem_pass=${json.data.response.profile_picture}; path=/`;
        } else {
          (0,_utils_Helper__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('rem_email');
          (0,_utils_Helper__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)('rem_pass');
        }

        next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/");
      }).catch(error => {
        console.log(error.response);

        if (error.response.status == 422) {
          that.setState({
            errors: error.response.data.errors
          });
        }

        if (error.response.status == 400) {
          that.setState({
            errors: {
              email: [error.response.data.message]
            }
          });
        }
      });
    });

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      errors: {},
      showPass: false
    };
    this.passwordInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.onTextChange = this.onTextChange.bind(this);
    this.toggleSecurePassword = this.toggleSecurePassword.bind(this);
    this.checkboxOnChange = this.checkboxOnChange.bind(this);
  }

  componentDidMount() {
    let email = cookies.get('rem_email');
    let pass = cookies.get('rem_pass');

    if (email && pass) {
      this.setState({
        email: email,
        password: pass,
        rememberMe: true
      });
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "vector",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "col-12 col-md-8 col-lg-6 col-xl-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "bg-white main-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "login-details",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                  className: "logo-img mb-2",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                    src: "images/logo.png",
                    className: "img-fluid",
                    alt: "logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
                  className: "font-14",
                  children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Welcomeagain
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "login-form",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("form", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                      className: "col-12 col-md-12 col-lg-12 col-xl-12 col-sm-12",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "form-group",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                          className: "form-label-view",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                            children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Emailaddress
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 135,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                            className: "error-text",
                            children: this.state.errors.email ? this.state.errors.email[0] : ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 136,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 134,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                          className: "form-control " + (this.state.errors.email ? "invalid" : ""),
                          id: "email",
                          type: "email",
                          name: "email",
                          placeholder: "Enter your registered email ID",
                          onChange: this.onTextChange
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 142,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                      className: "col-12 col-md-12 col-lg-12 col-xl-12 col-sm-12",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "form-group login-password",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                          className: "form-label-view",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                            children: "Password"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 158,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                            className: "error-text",
                            children: this.state.errors.password ? this.state.errors.password[0] : ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 159,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 157,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                          ref: this.passwordInput,
                          className: "form-control " + (this.state.errors.password ? "invalid" : ""),
                          id: "password",
                          type: this.state.showPass ? "text" : "password",
                          name: "password",
                          placeholder: "Enter your password",
                          onChange: this.onTextChange
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 165,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((feather_icons_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                          className: "svg-inline--fa fa-eye fa-w-18 fa-2x eye-icon",
                          icon: this.state.showPass ? "eye-off" : "eye",
                          onClick: this.toggleSecurePassword
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "row",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                      className: "col-12 col-md-6 col-lg-6 col-xl-6 col-sm-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "custom-check",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                          className: "check ",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
                            onChange: this.checkboxOnChange,
                            type: "checkbox",
                            name: "is_name1"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 186,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                            className: "checkmark"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 191,
                            columnNumber: 29
                          }, this), _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Rememberme]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 185,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                      className: "col-12 col-md-6 col-lg-6 col-xl-6 col-sm-6",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "forget-password",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: "/forgot-password",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                            className: "font-14 font-medium",
                            children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Forgotpassword
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 199,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 198,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 197,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "text-center my-3",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                      onClick: this.loginUser.bind(this),
                      className: "btn btn-primary w-100",
                      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Login
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "loginOr",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
                      className: "hrOr"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                      className: "spanOr",
                      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.or
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                    className: "my-4",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                      className: "row",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "col-12 col-md-6 col-lg-6 col-xl-6",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                          className: "signup-content",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                            href: "#"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 224,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                            className: "row social-icns",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                              href: "#"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 226,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col-auto my-auto",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                href: "#"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 228,
                                columnNumber: 33
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                                className: "social-img",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 230,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                                    src: "images/facebook.png",
                                    className: "img-fluid"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 232,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 231,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 229,
                                columnNumber: 33
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 227,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col pl-0 my-auto",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h6", {
                                className: "mb-0",
                                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.ContinuewithFacebook
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 240,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 239,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 225,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 223,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "col-12 col-md-6 col-lg-6 col-xl-6",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                          className: "signup-content",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                            href: "#"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 249,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                            className: "row social-icns",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                              href: "#"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 251,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col-auto my-auto",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                href: "#"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 253,
                                columnNumber: 33
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                                className: "social-img",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 255,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                                    src: "images/google-plus.png",
                                    className: "img-fluid"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 257,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 256,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 254,
                                columnNumber: 33
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 252,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col pl-0 my-auto",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h6", {
                                className: "mb-0",
                                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.ContinuewithGoogle
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 265,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 264,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 250,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 248,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 247,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "col-12 col-md-6 col-lg-6 col-xl-6",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                          className: "signup-content",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                            href: "#"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 274,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                            className: "row social-icns",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                              href: "#"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 276,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col-auto my-auto",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                href: "#"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 278,
                                columnNumber: 33
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                                className: "social-img",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 280,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                                    src: "images/twitter.png",
                                    className: "img-fluid"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 282,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 281,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 279,
                                columnNumber: 33
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 277,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col pl-0 my-auto",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h6", {
                                className: "mb-0",
                                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.ContinuewithTwitter
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 290,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 289,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 275,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 273,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 272,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                        className: "col-12 col-md-6 col-lg-6 col-xl-6",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                          className: "signup-content",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                            href: "#"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 299,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                            className: "row social-icns",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                              href: "#"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 301,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col-auto my-auto",
                              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                href: "#"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 303,
                                columnNumber: 33
                              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                                className: "social-img",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 305,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                                  href: "#",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                                    src: "images/line.png",
                                    className: "img-fluid"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 307,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 306,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 304,
                                columnNumber: 33
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 302,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                              className: "col pl-0 my-auto",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h6", {
                                className: "mb-0",
                                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.ContinuewithLine
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 315,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 314,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 300,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 298,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "text-center create-account mt-3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
                  className: "font-12 mb-0 font-medium",
                  children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Donthaveanaccount, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/signup",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
                      style: {
                        textDecoration: "underline"
                      },
                      className: "font-medium ",
                      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Registernow
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_7__.default)(SignIn));

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

/***/ "./utils/Helper.tsx":
/*!**************************!*\
  !*** ./utils/Helper.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepClone": () => (/* binding */ deepClone),
/* harmony export */   "getPercent": () => (/* binding */ getPercent),
/* harmony export */   "validateEmail": () => (/* binding */ validateEmail),
/* harmony export */   "getServiceObject": () => (/* binding */ getServiceObject),
/* harmony export */   "getDropInServiceObject": () => (/* binding */ getDropInServiceObject),
/* harmony export */   "getGroomingServiceObject": () => (/* binding */ getGroomingServiceObject),
/* harmony export */   "getHouseCallServiceObject": () => (/* binding */ getHouseCallServiceObject),
/* harmony export */   "getCalendarSvg": () => (/* binding */ getCalendarSvg),
/* harmony export */   "numberInput": () => (/* binding */ numberInput),
/* harmony export */   "dataURLtoFile": () => (/* binding */ dataURLtoFile),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie),
/* harmony export */   "getNameInitials": () => (/* binding */ getNameInitials)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\utils\\Helper.tsx";

function deepClone(data) {
  return JSON.parse(JSON.stringify(data));
}
function getPercent(val) {
  return val * 0.8;
}
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
const getServiceObject = id => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [{
      capacity: 1,
      pet_size_id: 1,
      service_charge: "1000",
      earning_amount: "800"
    }]
  };
};
const getDropInServiceObject = id => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [{
      capacity: 1,
      pet_size_id: 1,
      service_charge: "1000",
      earning_amount: "800",
      duration: 30
    }]
  };
};
const getGroomingServiceObject = id => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [{
      grooming_service_id: 1,
      service_charge: "1000",
      earning_amount: "800"
    }]
  };
};
const getHouseCallServiceObject = id => {
  return {
    pet_type: id,
    custom_services: [],
    fees: [{
      medical_service_id: 1,
      service_charge: "1000",
      earning_amount: "800"
    }]
  };
};
const getCalendarSvg = id => {
  var svg;

  switch (id) {
    case 1:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "color1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fal",
          "data-icon": "briefcase",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          className: "svg-inline--fa fa-briefcase fa-w-16 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined);
      break;

    case 2:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "color2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fal",
          "data-icon": "home-lg-alt",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512",
          className: "svg-inline--fa fa-home-lg-alt fa-w-18 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M573.48 219.91L310.6 8a35.85 35.85 0 0 0-45.19 0L2.53 219.91a6.71 6.71 0 0 0-1 9.5l14.2 17.5a6.82 6.82 0 0 0 9.6 1L64 216.72V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V216.82l38.8 31.29a6.83 6.83 0 0 0 9.6-1l14.19-17.5a7.14 7.14 0 0 0-1.11-9.7zM240 480V320h96v160zm240 0H368V304a16 16 0 0 0-16-16H224a16 16 0 0 0-16 16v176H96V190.92l187.71-151.4a6.63 6.63 0 0 1 8.4 0L480 191z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined);
      break;

    case 3:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "color3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "far",
          "data-icon": "pennant",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512",
          className: "svg-inline--fa fa-pennant fa-w-18 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M542.3 183.5c-21.9 4.8-104.7 14.1-246.4-62.8-74.6-40.4-137.5-50.4-186.7-48C121.5 33.7 90.9 0 56 0 25.1 0 0 25.1 0 56c0 22.3 13.2 41.4 32 50.4V504c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-75.6c80.8-54.3 156.4-55.7 165.8-56.2 28.2-1.4 74.5-5.9 135.1-19 4.4-1 109-24.5 188.9-124.7 16.1-20.2-1.5-50.3-27.5-45zM370.8 306.3c-57.5 12.4-101 16.6-127.4 18-69.6 3.5-125.6 26.3-163.4 47.9V124c44.1-8.6 109.6-6.3 193 38.9 101.4 54.9 177 69.8 225.9 71.5-61.8 56.6-127.4 71.7-128.1 71.9z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined);
      break;

    case 4:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "color4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fal",
          "data-icon": "cloud-sun-rain",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 640 512",
          className: "svg-inline--fa fa-cloud-sun-rain fa-w-20 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M298.2 418.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zM192 140c26.4 0 48 20 51.1 45.6 4.8-3.6 9.8-6.9 15.1-9.9 1.5-8.4 3.9-16.5 6.8-24.3-14.3-25.7-41.5-43.4-73-43.4-46.2 0-83.7 37.6-83.7 83.8s37.5 83.8 83.7 83.8c.3 0 .6-.1.9-.1 1.1-11.4 3.7-22.4 7.7-32.8-2.8.5-5.6.9-8.5.9-28.5 0-51.7-23.2-51.7-51.7-.1-28.6 23.1-51.9 51.6-51.9zm-31.7 151.7c-3.6-5.3-9.9-8.1-16.4-6.8l-56 11.1L99 240c1.2-6.4-1.4-12.8-6.8-16.4l-47.4-31.8L92.2 160c5.4-3.6 8-10.1 6.8-16.4l-11.1-56 56 11.1c6.5 1.3 12.8-1.4 16.4-6.8L192 44.4l31.8 47.5c3.6 5.3 10 8.1 16.4 6.8L319.6 83c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.3-14.5-18.8-12.6l-68.9 13.6-39.2-58.5c-5.9-8.9-20.6-8.9-26.6 0l-39.1 58.5-69-13.7c-5.3-1.1-10.7.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.5l13.7 69-58.4 39.1c-4.4 3-7.1 7.9-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3l58.4 39.1-13.7 69c-1 5.3.6 10.7 4.4 14.5 3.8 3.8 9 5.5 14.4 4.4l68.9-13.7 39.1 58.5c3.1 4.6 8.2 7.1 13.3 7.1 3.1 0 6.2-.9 8.9-2.7 7.3-4.9 9.3-14.9 4.4-22.2l-44.9-67.4zm329.9 126.4c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm85.1-220.8C570 158.2 536.5 128 496 128c-8.6 0-17 1.4-25.2 4.3C451.1 109.4 422.6 96 392 96c-56.5 0-102.7 45.3-104 101.6-37.8 13.3-64 49.3-64 90.4 0 52.9 43.1 96 96 96h224c52.9 0 96-43.1 96-96 0-41.3-26.6-77.6-64.7-90.7zM560 208.8zM544 352H320c-35.3 0-64-28.7-64-64 0-30.6 21.8-57 52-62.8l14.5-2.8-2-18c-.2-1.5-.4-2.9-.4-4.4 0-39.7 32.3-72 72-72 24.3 0 46.8 12.2 60.2 32.8l8.1 12.4 13-7.1c32.7-17.8 70.7 8.2 70.8 40.4l-.2 16.2 12.8 2.6c29.8 6 51.3 32.3 51.3 62.7-.1 35.3-28.8 64-64.1 64zm42.2 66.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm-192 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined);
      break;

    case 5:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "color5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fal",
          "data-icon": "dog-leashed",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512",
          className: "svg-inline--fa fa-dog-leashed fa-w-18 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M544,112v64a64,64,0,0,1-64,64H448V480a32,32,0,0,1-32,32H352a32,32,0,0,1-32-32V384H224v96a32,32,0,0,1-32,32H128a32,32,0,0,1-32-32V320a95,95,0,0,1,13.46-48.26A80,80,0,0,1,32,192a16,16,0,0,1,32,0,48.05,48.05,0,0,0,48,48h27.05A95.48,95.48,0,0,1,192,224h79.94L34.88,26.45a8,8,0,0,1-1-11.27L44.11,2.88a8,8,0,0,1,11.27-1L304,209V48a16,16,0,0,1,16.12-16,15.67,15.67,0,0,1,11.2,4.72L358.6,64h69.62c10.92,0,23.74,7.93,28.62,17.69L464,96h64A16,16,0,0,1,544,112ZM288,256H192a64.07,64.07,0,0,0-64,64V480h64V352h96Zm128,26.48-96-24V352h32V480h64ZM512,128H444.22l-16-32H345.34L336,86.66V229.52l80,20V208h64a32,32,0,0,0,32-32Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,416,128Z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined);
      break;

    case 6:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "color6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fal",
          "data-icon": "cut",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512",
          className: "svg-inline--fa fa-cut fa-w-14 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M249.52 256L446.83 58.83a3.996 3.996 0 0 0 0-5.65c-12.5-12.5-32.76-12.5-45.25 0L224.06 230.56l-48.64-48.61C185.88 166.57 192 148 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c20.01 0 38.58-6.12 53.96-16.6l48.63 48.6-48.63 48.6C134.58 294.12 116.01 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-20-6.12-38.57-16.58-53.95l48.64-48.61 177.52 177.38c12.5 12.5 32.76 12.5 45.25 0a3.996 3.996 0 0 0 0-5.65L249.52 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, undefined);
      break;

    case 7:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "color7",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fal",
          "data-icon": "house",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512",
          className: "svg-inline--fa fa-house fa-w-18 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, undefined);
      break;

    case 8:
      svg = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        className: "",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fal",
          "data-icon": "cut",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512",
          className: "svg-inline--fa fa-cut fa-w-14 fa-2x",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            fill: "currentColor",
            d: "M249.52 256L446.83 58.83a3.996 3.996 0 0 0 0-5.65c-12.5-12.5-32.76-12.5-45.25 0L224.06 230.56l-48.64-48.61C185.88 166.57 192 148 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c20.01 0 38.58-6.12 53.96-16.6l48.63 48.6-48.63 48.6C134.58 294.12 116.01 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-20-6.12-38.57-16.58-53.95l48.64-48.61 177.52 177.38c12.5 12.5 32.76 12.5 45.25 0a3.996 3.996 0 0 0 0-5.65L249.52 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, undefined);
      break;
  }

  return svg;
};
const numberInput = event => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: mime
  });
}
const deleteCookie = name => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
const getNameInitials = name => {
  var _initials$shift, _initials$pop;

  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
  let initials = [...name.matchAll(rgx)] || [];
  initials = ((((_initials$shift = initials.shift()) === null || _initials$shift === void 0 ? void 0 : _initials$shift[1]) || "") + (((_initials$pop = initials.pop()) === null || _initials$pop === void 0 ? void 0 : _initials$pop[1]) || "")).toUpperCase();
  return initials;
};

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

/***/ "react-localization":
/*!*************************************!*\
  !*** external "react-localization" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-localization");

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
var __webpack_exports__ = (__webpack_exec__("./pages/signin/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BldGNhdGlvbi8uL2FwaS9BcGkudHMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vYXBpL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9jb21wb25lbnRzL2hvYy93aXRoQXV0aC50c3giLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9wYWdlcy9zaWduaW4vaW5kZXgudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL3B1YmxpYy9sYW5nL1N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vcHVibGljL2xhbmcvZW5nLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL3V0aWxzL0hlbHBlci50c3giLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcImZlYXRoZXItaWNvbnMtcmVhY3RcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LWxvY2FsaXphdGlvblwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vaWdub3JlZHxDOlxceGFtcHA3XzRcXGh0ZG9jc1xccGV0Y2F0aW9uXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBVX0FDVElWRV9CT0FSRElORyxcclxuICBVX0FDVElWRV9EQVlfQ0FSRSxcclxuICBVX0FDVElWRV9EUk9QX0lOX1ZJU0lUUyxcclxuICBVX0FDVElWRV9HUk9PTUlORyxcclxuICBVX0FDVElWRV9IT1VTRV9DQUxMLFxyXG4gIFVfQUNUSVZFX0hPVVNFX1NJVFRJTkcsXHJcbiAgVV9BQ1RJVkVfUEVUX1dBTEtJTkcsXHJcbiAgVV9BRERfUEVULFxyXG4gIFVfQUREX1FVRVNUSU9OLFxyXG4gIFVfQUREX1NLSUxMLFxyXG4gIFVfQUREX1NQT1QsXHJcbiAgVV9BUlJBTkdfTUVFVFVQLFxyXG4gIFVfQk9BUkRJTkdfRElTQ09VTlRTLFxyXG4gIFVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFLFxyXG4gIFVfQk9BUkRJTkdfUFJFRkVSRU5DRSxcclxuICBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyxcclxuICBVX0RFTEVURV9QRVQsXHJcbiAgVV9ERUxFVEVfUVVFU1RJT04sXHJcbiAgVV9ERUxFVEVfU1BPVCxcclxuICBVX0RPR19XQUxLSU5HX0RJU0NPVU5ULFxyXG4gIFVfRE9HX1dBTEtJTkdfSU5GTyxcclxuICBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFLFxyXG4gIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFLFxyXG4gIFVfRFJPUF9JTl9WSVNJVEVTX1BSRUZFUkVOQ0UsXHJcbiAgVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMsXHJcbiAgVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSxcclxuICBVX0ZJTFRFUkVEX0FWQUlMQUJMRV9TSVRURVIsXHJcbiAgVV9HRVRfQUREUkVTUyxcclxuICBVX0dFVF9BTExfUEVUUyxcclxuICBVX0dFVF9BTExfU1BPVCxcclxuICBVX0dFVF9BVkFJTEFCSUxJVFksXHJcbiAgVV9HRVRfQVZBSUxBQklMSVRZX0JZX0RBVEVTLFxyXG4gIFVfR0VUX0FWQUlMQUJMRV9TRVJWSUNFUyxcclxuICBVX0dFVF9CQVNJQ19JTkZPLFxyXG4gIFVfR0VUX0JPQVJESU5HX0lORk8sXHJcbiAgVV9HRVRfQk9BUkRJTkdfUFJFVklFVyxcclxuICBVX0dFVF9CUkVFRF9XSVRIX1RZUEUsXHJcbiAgVV9HRVRfQ0lUSUVTLFxyXG4gIFVfR0VUX0NPVVRSSUVTLFxyXG4gIFVfR0VUX0RBU0hCT0FSRCxcclxuICBVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0RST1BfSU5fUFJFVklFVyxcclxuICBVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPLFxyXG4gIFVfR0VUX0dST09NSU5HX0lORk8sXHJcbiAgVV9HRVRfR1JPT01JTkdfUFJFVklFVyxcclxuICBVX0dFVF9IT1VTRV9DQUxMX0lORk8sXHJcbiAgVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXLFxyXG4gIFVfR0VUX0hPVVNFX0NBTExfU0VSVklDRSxcclxuICBVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8sXHJcbiAgVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0xBTkdBVUdFUyxcclxuICBVX0dFVF9QQVJLSU5HLFxyXG4gIFVfR0VUX1BBWU1FTlRfTUVUSE9EUyxcclxuICBVX0dFVF9QRVRTLFxyXG4gIFVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXLFxyXG4gIFVfR0VUX1BFVF9TRVJWSUNFLFxyXG4gIFVfR0VUX1BFVF9TUE9UUyxcclxuICBVX0dFVF9RVUVTVElPTlMsXHJcbiAgVV9HRVRfUkVTRVJWQVRJT05fVFlQRVMsXHJcbiAgVV9HRVRfU0VSVklDRVMsXHJcbiAgVV9HRVRfU0lOR0xFX1NJVFRFUixcclxuICBVX0dFVF9TSU5HTEVfU1BPVCxcclxuICBVX0dFVF9TSVRURVJfQVZBSUxBQklMSVRZLFxyXG4gIFVfR0VUX1NJVFRFUl9SRVNFUlZBVElPTlMsXHJcbiAgVV9HRVRfU0tJTExTLFxyXG4gIFVfR0VUX1NNT0tJTkdfQ0VTU0lPTlMsXHJcbiAgVV9HRVRfVEhSRUFEX0JPT0tJTkcsXHJcbiAgVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMsXHJcbiAgVV9HRVRfVVNFUl9TS0lMTFMsXHJcbiAgVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5ULFxyXG4gIFVfR1JPT01JTkdfU0VSVklDRV9GRUUsXHJcbiAgVV9HUk9PTUlOR19TRVJWSUNFX1BSRUZFUkVOQ0UsXHJcbiAgVV9IT1VTRV9DQUxMX0RJU0NPVU5ULFxyXG4gIFVfSE9VU0VfQ0FMTF9QUkVGRVJFTkNFLFxyXG4gIFVfSE9VU0VfQ0FMTF9TRVJWSUNFX0ZFRSxcclxuICBVX0hPVVNFX1NJVFRJTkdfRElTQ09VTlRTLFxyXG4gIFVfSE9VU0VfU0lUVElOR19QUkVGRVJFTkNFLFxyXG4gIFVfSE9VU0VfU0lUVElOR19TRVJWSUNFX0ZFRSxcclxuICBVX0lNQUdFX1VQTE9BRCxcclxuICBVX1BFVF9BRERJVElPTkFMX1JFUVVFU1QsXHJcbiAgVV9QRVRfQU1PVU5UX0NBTENVTEFUSU9OLFxyXG4gIFVfUEVUX0RBWV9DQVJFX0RJU0NPVU5ULFxyXG4gIFVfUEVUX0RBWV9DQVJFX0lORk8sXHJcbiAgVV9QRVRfREFZX0NBUkVfUFJFRkVSRU5DRSxcclxuICBVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMsXHJcbiAgVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZLFxyXG4gIFVfUEVUX1NQT1RfQ0FURUdPUklFUyxcclxuICBVX1JBVEVfU0lUVEVSLFxyXG4gIFVfUkVRVUVTVF9TSVRURVIsXHJcbiAgVV9TQVZFX0FERFJFU1MsXHJcbiAgVV9TQVZFX0JBU0lDX0lORk8sXHJcbiAgVV9TQVZFX0xPQ0FMSVRZLFxyXG4gIFVfU0FWRV9QT1JURk9MSU8sXHJcbiAgVV9TRU5EX01FU1NBR0UsXHJcbiAgVV9TRVRfQVZBSUxBQkxFX1NFUlZJQ0VTLFxyXG4gIFVfU0lOR0xFX1BFVCxcclxuICBVX1VQREFURV9QRVQsXHJcbiAgVV9VUERBVEVfU1BPVCxcclxuICBVX1VQTE9BRF9QUk9GSUxFX1BJQ1RVUkUsXHJcbiAgVV9VU0VSX0xPR0lOLFxyXG4gIFVfVVNFUl9SRUdJU1RFUixcclxuICBVX0FERF9DQVJELFxyXG4gIFVfR0VUX0NBUkQsXHJcbiAgVV9ERUxFVEVfQ0FSRCxcclxuICBVX0FERF9CQU5LX0FDQ09VTlQsXHJcbiAgVV9HRVRfQkFOS19BQ0NPVU5ULFxyXG4gIFVfR0VUX0JBTktfREVUQUlMUyxcclxuICBVX0RFTEVURV9CQU5LX0FDQ09VTlQsXHJcbiAgVV9HRVRfUEVUX1NQT1RfREVUQUlMUyxcclxuICBHT09HTEVfUExBQ0VTX0JBU0VfVVJMLFxyXG4gIEdPT0dMRV9QTEFDRVNfQVBJLFxyXG4gIFVfVVBMT0FEX0RPQ1VNRU5UUyxcclxuICBVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyxcclxuICBVX0FERF9UUkFOU1BPUlRfQ0hBUkdFUyxcclxuICBVX1VQREFURV9SRVFVRVNUX1NUQVRVUyxcclxuICBVX0JPT0tNQVJLX1NJVFRFUixcclxuICBVX0dFVF9SRVFVRVNUX0RFVEFJTCxcclxuICBVX0NPTkZJUk1fUEFZTUVOVCxcclxuICBVX1BBWU1FTlRfSElTVE9SWSxcclxuICBVX0dFVF9GQVZPUklURV9TSVRURVIsXHJcbiAgVV9DSEFOR0VfTUVFVFVQX1NUQVRVUyxcclxuICBVX0dFVF9NRUVUVVBTLFxyXG4gIFVfQ0hBVF9BQ1RJT04sXHJcbiAgVV9HRVRfRkFWT1JJVEVfU1BPVCxcclxuICBVX01BUktfVU5NQVJLX1NQT1QsXHJcbiAgVV9NQUtFX0NBUkRfX0RFRkFVTFQsXHJcbiAgVV9NQUtFX0JBTktfREVGQVVMVCxcclxuICBVX1JFU0VUX1BBU1NXT1JELFxyXG4gIFVfQ0hBTkdFX1BBU1NXT1JELFxyXG4gIFVfRk9SR09UX1BBU1NXT1JELFxyXG4gIFVfQVBQTFlfQ09VUE9OLFxyXG4gIFVfUkVNT1ZFX0NPVVBPTiwgVV9HRVRfQ09VUE9OLFxyXG4gIFVfUkVBRF9TVEFUVVMsIFVfUkVWSUVXX1NQT1QsXHJcbiAgVV9HRVRfTkVXUyxcclxuICBVX0dFVF9FVkVOVCxcclxuICBVX0dFVF9TSU5HTEVfTkVXUyxcclxuXHJcbn0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XHJcbmltcG9ydCBuZXh0Q29va2llIGZyb20gXCJuZXh0LWNvb2tpZXNcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly81NC4xNTEuMTYwLjgzL3BldGVjYXRpb24vcHVibGljL2FwaS9cIjtcclxuLy9jb25zdCBiYXNlVVJMID0gXCJodHRwOi8vMTkyLjE2OC4xLjI2L3BldGVjYXRpb24vcHVibGljL2FwaS9cIjtcclxuXHJcbmNvbnN0IGhlYWRlcnMgPSAodG9rZW4pID0+IHtcclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICB9O1xyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59O1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IChtZXRob2QsIHBhdGgsIGJvZHkgPSBudWxsLCBjdHggPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0ke3BhdGh9YDtcclxuICB2YXIgdG9rZW4gPSBudWxsO1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gIHRva2VuID0gY29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICBpZiAodG9rZW4gPT0gbnVsbCAmJiBjdHgpIHtcclxuICAgIHRva2VuID0gbmV4dENvb2tpZShjdHgpO1xyXG4gIH1cclxuICB2YXIgb3B0aW9ucyA9IHsgbWV0aG9kLCB1cmwsIGhlYWRlcnM6IGhlYWRlcnModG9rZW4pIH07XHJcblxyXG4gIGlmIChib2R5KSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7IGRhdGE6IGJvZHkgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXhpb3Mob3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xyXG4gIHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VU0VSX1JFR0lTVEVSLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VU0VSX0xPR0lOLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkVTRVRfUEFTU1dPUkQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQ0hBTkdFX1BBU1NXT1JELCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGZvcmdvdFBhc3N3b3JkKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0ZPUkdPVF9QQVNTV09SRCAsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaGJvYXJkKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfREFTSEJPQVJEKTtcclxuICB9XHJcblxyXG4gIGdldEJhc2ljSW5mbygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBU0lDX0lORk8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWRkcmVzcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0FERFJFU1MpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUJhc2ljSW5mbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TQVZFX0JBU0lDX0lORk8sIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUFkZHJlc3MoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfU0FWRV9BRERSRVNTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZFF1ZXN0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9RVUVTVElPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVRdWVzdGlvbih2YWwpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiREVMRVRFXCIsIFVfREVMRVRFX1FVRVNUSU9OICsgdmFsKTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXN0aW9ucygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1FVRVNUSU9OUyk7XHJcbiAgfVxyXG5cclxuICBnZXRTa2lsbHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TS0lMTFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclNraWxscygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1VTRVJfU0tJTExTKTtcclxuICB9XHJcblxyXG4gIGFkZFNraWxsKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9TS0lMTCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzYXZlTG9jYWxpdHlJbmZvKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1NBVkVfTE9DQUxJVFksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVBvcnRmb2xpbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TQVZFX1BPUlRGT0xJTywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0FWQUlMQUJJTElUWVxyXG4gIGdldEF2YWlsYWJsZVNlcnZpY2VzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQVZBSUxBQkxFX1NFUlZJQ0VTKTtcclxuICB9XHJcblxyXG4gIHNldEF2YWlsYWJsZVNlcnZpY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfU0VUX0FWQUlMQUJMRV9TRVJWSUNFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFiaWxpdHkoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0FWQUlMQUJJTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFiaWxpdHlCeURhdGUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0FWQUlMQUJJTElUWV9CWV9EQVRFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL01ZIFBFVFNcclxuICBhZGRQZXQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUREX1BFVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQZXRzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQUxMX1BFVFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlUGV0cyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9TSU5HTEVfUEVUICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGV0KGRhdGEsIGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUERBVEVfUEVUICsgaWQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUGV0KGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkRFTEVURVwiLCBVX0RFTEVURV9QRVQgKyBpZCk7XHJcbiAgfVxyXG5cclxuICAvL1NlcnZpY2VcclxuICBnZXRTZXJ2aWNlKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfU0VSVklDRVMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlQm9hcmRpbmcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0JPQVJESU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZURheUNhcmUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0RBWV9DQVJFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUhvdXNlU2l0dGluZyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfSE9VU0VfU0lUVElORywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVEcm9wSW5WaXNpdHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0RST1BfSU5fVklTSVRTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZVBldFdhbGtpbmcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX1BFVF9XQUxLSU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUdyb29taW5nKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FDVElWRV9HUk9PTUlORywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVIb3VzZUNhbGwoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0hPVVNFX0NBTEwsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9Ib3VzZSBjYWxsXHJcbiAgZ2V0SG91c2VDYWxsSW5mbyh2YWwpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0hPVVNFX0NBTExfSU5GTyArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VzZUNhbGxTZXJ2aWNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9IT1VTRV9DQUxMX1NFUlZJQ0UsIGRhdGEpO1xyXG4gIH1cclxuICBob3VzZUNhbGxTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX0NBTExfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VDYWxsUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9DQUxMX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VDYWxsRGlzY291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfQ0FMTF9ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VzZUNhbGxQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vR3Jvb21pbmdcclxuICBnZXRHcm9vbWluZ1NlcnZpY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX1BFVF9TRVJWSUNFLCBkYXRhKTtcclxuICB9XHJcbiAgZ2V0R3Jvb21pbmdJbmZvKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfR1JPT01JTkdfSU5GTyArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBncm9vbWluZ1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR1JPT01JTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ3Jvb21pbmdTZXJ2aWNlUHJlZmVybmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBncm9vbWluZ1NlcnZpY2VEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEdyb29taW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0dST09NSU5HX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9CT0FSRElOR1xyXG4gIGJvYXJkaW5nU2VydmljZUZlZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT0FSRElOR19QRVRfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRpbmdQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0JPQVJESU5HX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRpbmdEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT0FSRElOR19ESVNDT1VOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm9hcmRpbmdJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9CT0FSRElOR19JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm9hcmRpbmdQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQk9BUkRJTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL0hPVVNFIFNJVFRJTkdcclxuICBnZXRIb3VzZVNpdHRpbmdJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8gKyBpZCk7XHJcbiAgfVxyXG5cclxuICBob3VzZVNpdHRpbmdTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX1NJVFRJTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VTaXR0aW5nRGlzY291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfU0lUVElOR19ESVNDT1VOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VTaXR0aW5nUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9TSVRUSU5HX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91c2VTaXR0aW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0hPVVNFX1NJVFRJTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL0Ryb3AgaW4gdmlzaXRzXHJcbiAgZ2V0RHJvcEluVmlzaXRzSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRFJPUF9JTl9WSVNJVFNfSU5GTyArIGlkKTtcclxuICB9XHJcblxyXG4gIGRyb3BJblZpc2l0c1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRFJPUF9JTl9WSVNJVFNfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZHJvcEluVmlzaXRQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RST1BfSU5fVklTSVRFU19QUkVGRVJFTkNFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRyb3BJblZpc2l0RGlzY291bnRzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RST1BfSU5fVklTSVRTX0RJU0NPVU5UUywgZGF0YSk7XHJcbiAgfVxyXG4gIGdldERyb3BJblZpc2l0c1ByZXZpZXcoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9EUk9QX0lOX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9QZXQgZGF5IGNhcmVcclxuICBnZXRQZXREYXlDYXJlSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9QRVRfREFZX0NBUkVfSU5GTyArIGlkKTtcclxuICB9XHJcblxyXG4gIHBldERheUNhdGVTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGV0RGF5Q2FyZVByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEVUX0RBWV9DQVJFX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGV0RGF5Q2FyZURpc2NvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXREYXlDYXJlUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vRG9nIHdhbGtpbmdcclxuICBnZXREb2dXYWxraW5nSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9ET0dfV0FMS0lOR19JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgRG9nV2Fsa2luZ1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZG9nV2Fsa2luZ1ByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRvZ1dhbGtpbmdEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ET0dfV0FMS0lOR19ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXREb2dXYWxraW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0RPR19XQUxLSU5HX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9TSVRURVIgUkVRVUVTVFxyXG4gIHBldEFkZGl0aW9uYWxTZXJ2aWNlcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9QRVRfQURESVRJT05BTF9SRVFVRVNULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHBldEFtb3VudENhbGN1bGF0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9BTU9VTlRfQ0FMQ1VMQVRJT04sIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2l0dGVyUmVxdWVzdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRVFVRVNUX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VSZXF1ZXN0U3RhdHVzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwZXRTZXJ2aWNlQXZhaWxhYmlsaXR5KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9TRVJWSUNFX0FWQUlBTEFCSUxJVFksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9EQVNIT0JPQVJEXHJcbiAgZ2V0U2l0dGVyUmVzZXJ2ZXRpb25zKGRhdGEsIHBhZ2UpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9TSVRURVJfUkVTRVJWQVRJT05TICsgXCI/cGFnZT1cIiArIHBhZ2UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclJlc2VydmF0aW9ucyhkYXRhLCBwYWdlKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMgKyBcIj9wYWdlPVwiICsgcGFnZSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0NIQVRcclxuICBzZW5kTWVzc2FnZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TRU5EX01FU1NBR0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhdEFjdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9DSEFUX0FDVElPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRUaHJlYWRCb29raW5nKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfVEhSRUFEX0JPT0tJTkcgKyB2YWwpO1xyXG4gIH1cclxuXHJcbiAgYXJyYW5nZU1lZXR1cChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BUlJBTkdfTUVFVFVQLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU1lZXR1cFN0YXR1cyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9DSEFOR0VfTUVFVFVQX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRNZWV0dXBSZXF1ZXN0KGlkKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX01FRVRVUFMgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRUcmFuc3BvcnRDaGFyZ2VSZXF1ZXN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfVFJBTlNQT1JUX0NIQVJHRVMgKyBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZFRyYW5zcG9ydENoYXJnZVJlcXVlc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfVFJBTlNQT1JUX0NIQVJHRVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmVxdWVzdFN0YXR1cyhkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQREFURV9SRVFVRVNUX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZWFkU3RhdHVzKGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkVBRF9TVEFUVVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9DT01NT05cclxuICBnZXRDb3V0aXJlcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NPVVRSSUVTKTtcclxuICB9XHJcbiAgZ2V0Q2l0aWVzKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9DSVRJRVMgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXRzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEVUUyk7XHJcbiAgfVxyXG5cclxuICBnZXRCcmVlZFdpdGhUeXBlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9CUkVFRF9XSVRIX1RZUEUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9JTUFHRV9VUExPQUQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyZWRBdmlhbGFibGVTaXR0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRklMVEVSRURfQVZBSUxBQkxFX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0RmF2b3JpdGVTaXR0ZXJzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9GQVZPUklURV9TSVRURVIsZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRQcm9maWxlUGljdHVyZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUExPQURfUFJPRklMRV9QSUNUVVJFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZERvY3VtZW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQTE9BRF9ET0NVTUVOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9TcG90c1xyXG4gIGdldFBldFNwb3RzQ2F0ZWdvcnkoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX1BFVF9TUE9UX0NBVEVHT1JJRVMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGV0U3BvdHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX1BFVF9TUE9UUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBtYXJrVW5tYXJrU3BvdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BUktfVU5NQVJLX1NQT1QsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGV0U3BvdERldGFpbHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEVUX1NQT1RfREVUQUlMUyArIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF5bWVudE1ldGhvZHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9QQVlNRU5UX01FVEhPRFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVzZXJ2YXRpb25UeXBlcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1JFU0VSVkFUSU9OX1RZUEVTKTtcclxuICB9XHJcblxyXG4gIGdldFNtb2tpbmdDZXNzaW9uKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfU01PS0lOR19DRVNTSU9OUyk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXJraW5nKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEFSS0lORyk7XHJcbiAgfVxyXG5cclxuICBnZXRMYW5nYXVnZXMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9MQU5HQVVHRVMpO1xyXG4gIH1cclxuXHJcbiAgYWRkU3BvdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfU1BPVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTcG90KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUERBVEVfU1BPVCArIGlkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJhdGVTaXR0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkFURV9TSVRURVIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlU2l0dGVyKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfU0lUVEVSICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgbWFya1VubWFya1NpdHRlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT09LTUFSS19TSVRURVIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsU3BvdHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9BTExfU1BPVCk7XHJcbiAgfVxyXG5cclxuICBnZXRGYXZvcml0ZVNwb3RzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRkFWT1JJVEVfU1BPVCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVTcG90KHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJERUxFVEVcIiwgVV9ERUxFVEVfU1BPVCArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVTcG90KGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfU1BPVCArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFNpdHRlckF2YWlsYWJpbGl0eShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfU0lUVEVSX0FWQUlMQUJJTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByYXRlUmV2aWV3U3BvdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRVZJRVdfU1BPVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL1BheW1lbnQgYW5kIEJhbmsgYWNjb3VudFxyXG4gIGFkZE5ld0NhcmQoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfQ0FSRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxDYXJkKCl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9DQVJEKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ERUxFVEVfQ0FSRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhZGROZXdCYW5rQWNjb3VudChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9CQU5LX0FDQ09VTlQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsQmFua0FjY291bnQoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBTktfQUNDT1VOVCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxCYW5rQWNjb3VudERldGFpbHMoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBTktfREVUQUlMUyk7XHJcbiAgfVxyXG5cclxuICBtYXJrQ2FyZEFzRGVmYXVsdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BS0VfQ0FSRF9fREVGQVVMVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBtYWtlQmFua0FzRGVmYXVsdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BS0VfQkFOS19ERUZBVUxULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUJhbmtBY2NvdW50KGlkKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfREVMRVRFX0JBTktfQUNDT1VOVCArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFNpbmdsZVJlcXVlc3REZXRhaWwoaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUkVRVUVTVF9ERVRBSUwgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBjb25maXJtUGF5bWVudChpZCxkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NPTkZJUk1fUEFZTUVOVCArIGlkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHBheW1lbnRIaXN0b3J5KGRhdGEsIHBhZ2Upe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEFZTUVOVF9ISVNUT1JZICsgYD9wYWdlPSR7cGFnZX1gLGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0dGVkQWRkcmVzcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYCR7R09PR0xFX1BMQUNFU19CQVNFX1VSTH0vZGV0YWlscy9qc29uP3BsYWNlaWQ9JHtpZH0ma2V5PSR7R09PR0xFX1BMQUNFU19BUEl9YDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IGFwaVVybCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGFwcGx5Q291cG9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FQUExZX0NPVVBPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb3Vwb24oaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9SRU1PVkVfQ09VUE9OICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291cG9ucyh0eXBlKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NPVVBPTiArIHR5cGUgKTtcclxuICB9XHJcbiAgLy9OZXdzXHJcblxyXG4gIGdldE5ld3MoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX05FV1MgICk7XHJcbiAgfVxyXG5cclxuICBnZXRFdmVudHMoKVxyXG4gIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0VWRU5UICApO1xyXG4gIH1cclxuICBnZXRTaW5nbGVOZXdzKClcclxuICB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfTkVXUylcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFVfVVNFUl9SRUdJU1RFUiA9IFwidXNlci1yZWdpc3RlclwiO1xyXG5leHBvcnQgY29uc3QgVV9VU0VSX0xPR0lOID0gXCJ1c2VyLWxvZ2luXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EQVNIQk9BUkQgPSBcInVzZXIvZGFzaGJvYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NBVkVfQkFTSUNfSU5GTyA9IFwidXNlci9zYXZlLWJhc2ljLWluZm9cIjtcclxuZXhwb3J0IGNvbnN0IFVfU0FWRV9BRERSRVNTID0gXCJ1c2VyL3NhdmUtYWRkcmVzc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFTSUNfSU5GTyA9IFwidXNlci9nZXQtYmFzaWMtaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQUREUkVTUyA9IFwidXNlci9nZXQtYWRkcmVzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfRk9SR09UX1BBU1NXT1JEID0gXCJmb3JnZXQtcGFzc3dvcmRcIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBTkdFX1BBU1NXT1JEID0gXCJ1c2VyL2NoYW5nZS1wYXNzd29yZFwiO1xyXG5leHBvcnQgY29uc3QgVV9SRVNFVF9QQVNTV09SRCA9IFwicmVzZXQtcGFzc3dvcmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVX0FERF9RVUVTVElPTiA9IFwidXNlci9hZGQtcXVlc3Rpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9RVUVTVElPTiA9IFwidXNlci9kZWxldGUtcXVlc3Rpb24vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9RVUVTVElPTlMgPSBcInVzZXIvZ2V0LXF1ZXN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NLSUxMUyA9IFwiZ2V0LXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfVVNFUl9TS0lMTFMgPSBcInVzZXIvZ2V0LXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9BRERfU0tJTEwgPSBcInVzZXIvYWRkLXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9TQVZFX0xPQ0FMSVRZID0gXCJ1c2VyL3NhdmUtbG9jYWxpdHktaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVV9TQVZFX1BPUlRGT0xJTyA9IFwidXNlci9zYXZlLXBvcnRmb2xpby1pbWFnZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHT09HTEVfUExBQ0VTX0JBU0VfVVJMID0gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2VcIjtcclxuZXhwb3J0IGNvbnN0IEdPT0dMRV9QTEFDRVNfQVBJID0gXCJBSXphU3lCaGxtNWRmc3dDbjNlUExiSGdpVjFFdVE0OGs5U2RZQ3dcIjtcclxuLy9leHBvcnQgY29uc3QgR09PR0xFX1BMQUNFU19BUEkgPSBcIkFJemFTeUFHemJELWJXeVNDSGh2cEt0aV80MEpzdnRpM1RsanhCOFwiO1xyXG5cclxuLy9NWSBQRVRTXHJcbmV4cG9ydCBjb25zdCBVX0FERF9QRVQgPSBcInVzZXIvYWRkLW5ldy1wZXRcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FMTF9QRVRTID0gXCJ1c2VyL2dldC1hbGwtcGV0c1wiO1xyXG5leHBvcnQgY29uc3QgVV9TSU5HTEVfUEVUID0gXCJ1c2VyL2dldC1zaW5nbGUtcGV0L1wiO1xyXG5leHBvcnQgY29uc3QgVV9VUERBVEVfUEVUID0gXCJ1c2VyL3VwZGF0ZS1wZXQtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfREVMRVRFX1BFVCA9IFwidXNlci9kZWxldGUtcGV0LWluZm8vXCI7XHJcblxyXG4vL01ZIFNlcnZpY2VcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NFUlZJQ0VTID0gXCJnZXQtc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FWQUlMQUJMRV9TRVJWSUNFUyA9IFwic2l0dGVyL3NlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NFVF9BVkFJTEFCTEVfU0VSVklDRVMgPSBcInNpdHRlci9zZXJ2aWNlLWF2YWlsYWJpbGl0eVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQVZBSUxBQklMSVRZID0gXCJzaXR0ZXIvYXZhaWxhYmlsaXR5LXNlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BVkFJTEFCSUxJVFlfQllfREFURVMgPSBcInNpdHRlci9kYXRlLWF2YWlsYWJpbGl0eS1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9CT09LTUFSS19TSVRURVIgPSBcIm1hcmstYXMtZmF2b3JpdGVcIlxyXG5cclxuLy9Cb2FyZGluZ1xyXG5leHBvcnQgY29uc3QgVV9BQ1RJVkVfQk9BUkRJTkcgPSBcInVzZXIvYm9hcmRpbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9CT0FSRElOR19QUkVGRVJFTkNFID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfQk9BUkRJTkdfRElTQ09VTlRTID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9CT0FSRElOR19JTkZPID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0JPQVJESU5HX1BSRVZJRVcgPSBcInVzZXIvYWxsLWJvYXJkaW5nLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy9Ib3VzZSBzaXR0aW5nXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9IT1VTRV9TSVRUSU5HID0gXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0hPVVNFX1NJVFRJTkdfSU5GTyA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfU0lUVElOR19TRVJWSUNFX0ZFRSA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9TSVRUSU5HX0RJU0NPVU5UUyA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX1NJVFRJTkdfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXID1cclxuICBcInVzZXIvYWxsLWhvdXNlLXNpdHRpbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0RBWSBjYXJlXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9EQVlfQ0FSRSA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5cclxuLy9Ecm9wLWluIHZpc2l0XHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9EUk9QX0lOX1ZJU0lUUyA9IFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPID0gXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSA9IFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lURVNfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMgPVxyXG4gIFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EUk9QX0lOX1BSRVZJRVcgPSBcInVzZXIvYWxsLWRyb3AtaW4tdmlzaXQtc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL1BFVCB3YWxraW5nIHZpc2l0c1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfUEVUX0RBWV9DQVJFX0lORk8gPSBcInVzZXIvZGF5LWNhcmUtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfREFZX0NBUkVfU0VSVklDRV9GRUVTID0gXCJ1c2VyL2RheS1jYXJlLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfREFZX0NBUkVfUFJFRkVSRU5DRSA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLXByZWZlcmVuY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLWRpc2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX0RBWV9DQVJFX1BSRVZJRVcgPSBcInVzZXIvYWxsLWRheS1jYXJlLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy8gIERvZyB3YWxraW5nXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9QRVRfV0FMS0lORyA9IFwidXNlci93YWxraW5nLXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX0lORk8gPSBcInVzZXIvd2Fsa2luZy1zZXJ2aWNlLWluZm8vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL3dhbGtpbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL3dhbGtpbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9ET0dfV0FMS0lOR19ESVNDT1VOVCA9IFwidXNlci93YWxraW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXID0gXCJ1c2VyL2FsbC13YWxraW5nLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy9TaXR0ZXIgUmVxdWVzdFxyXG5leHBvcnQgY29uc3QgVV9QRVRfQURESVRJT05BTF9SRVFVRVNUID0gXCJzaXR0ZXIvcGV0LWFkZGl0aW9uYWwtc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUEVUX0FNT1VOVF9DQUxDVUxBVElPTiA9IFwic2l0dGVyL3BldC1hbW91bnQtY2FsY3VsYXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX1JFUVVFU1RfU0lUVEVSID0gXCJzaXR0ZXIvcGV0LXJlcXVlc3RcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1JFUVVFU1RfREVUQUlMID0gXCJzaXR0ZXIvcGV0LXJlcXVlc3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyA9IFwiY2hhbmdlLXNpdHRlci1yZXF1ZXN0LXN0YXR1c1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZID0gXCJzaXR0ZXIvcGV0LXNlcnZpY2UtYXZhaWxhYmlsaXR5XCI7XHJcbmV4cG9ydCBjb25zdCBVX0NPTkZJUk1fUEFZTUVOVCA9IFwic2l0dGVyL2NvbmZpcm0tcGF5bWVudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfUEFZTUVOVF9ISVNUT1JZID0gXCJwYXltZW50LWhpc3RvcnlcIjtcclxuXHJcbi8vR1JPT01JTkdcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0dST09NSU5HID0gXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9HUk9PTUlOR19JTkZPID0gXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BFVF9TRVJWSUNFID0gXCJnZXQtZ3Jvb21pbmctc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR1JPT01JTkdfU0VSVklDRV9GRUUgPSBcInVzZXIvZ3Jvb21pbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR1JPT01JTkdfU0VSVklDRV9ESVNDT1VOVCA9IFwidXNlci9ncm9vbWluZy1zZXJ2aWNlLWRpc2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfR1JPT01JTkdfUFJFVklFVyA9IFwidXNlci9hbGwtZ3Jvb21pbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0hvdXNlIGNhbGxcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0hPVVNFX0NBTEwgPSBcInVzZXIvaG91c2UtY2FsbC1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfQ0FMTF9JTkZPID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfQ0FMTF9TRVJWSUNFID0gXCJnZXQtaG91c2UtY2FsbC1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9DQUxMX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX0NBTExfUFJFRkVSRU5DRSA9IFwidXNlci9ob3VzZS1jYWxsLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfQ0FMTF9ESVNDT1VOVCA9IFwidXNlci9ob3VzZS1jYWxsLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9IT1VTRV9DQUxMX1BSRVZJRVcgPSBcInVzZXIvYWxsLWhvdXNlLWNhbGwtc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0Rhc2hib2FyZFxyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lUVEVSX1JFU0VSVkFUSU9OUyA9IFwiZ2V0LXNpdHRlci1yZXNlcnZhdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1VTRVJfUkVTRVJWQVRJT05TID0gXCJnZXQtdXNlci1yZXNlcnZhdGlvbnNcIjtcclxuXHJcbi8vQ0hBVFxyXG5leHBvcnQgY29uc3QgVV9TRU5EX01FU1NBR0UgPSBcInNlbmQtbWVzc2FnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9SRUFEX1NUQVRVUyA9IFwidGhyZWFkLXJlYWQtc3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9USFJFQURfQk9PS0lORyA9IFwiZ2V0LXRocmVhZC1ib29raW5ncy9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQVJSQU5HX01FRVRVUCA9IFwiY3JlYXRlLW1lZXQtdXBcIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBTkdFX01FRVRVUF9TVEFUVVMgPSBcIm1lZXQtdXAtc3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9NRUVUVVBTID0gXCJnZXQtbWVldC11cC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBVF9BQ1RJT04gPSBcImNoYXQtdGhyZWFkLXN0YXR1c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyA9IFwic2l0dGVyL3JlcXVlc3QtdHJhbnNwb3J0LWFtb3VudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQUREX1RSQU5TUE9SVF9DSEFSR0VTID0gXCJzaXR0ZXIvcmVxdWVzdC10cmFuc3BvcnQtYW1vdW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgIFVfVVBEQVRFX1JFUVVFU1RfU1RBVFVTID0gXCJjaGFuZ2Utc2l0dGVyLXJlcXVlc3Qtc3RhdHVzXCI7XHJcblxyXG4vL1BFVCBTUE9UXHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BTExfU1BPVCA9IFwic2l0dGVyL3Nwb3RzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9GQVZPUklURV9TUE9UID0gXCJnZXQtZmF2b3JpdGUtc3BvdHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUEVUX1NQT1RfQ0FURUdPUklFUyA9IFwiZ2V0LXNwb3QtY2F0ZWdvcmllc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX1NQT1RTID0gXCJnZXQtc3BvdHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BFVF9TUE9UX0RFVEFJTFMgPSBcInNwb3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QQVlNRU5UX01FVEhPRFMgPSBcImdldC1wYXltZW50LW1ldGhvZHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1JFU0VSVkFUSU9OX1RZUEVTID0gXCJnZXQtcmVzZXJ2YXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9TTU9LSU5HX0NFU1NJT05TID0gXCJnZXQtc21va2luZy1jZXNzaW9uc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEFSS0lORyA9IFwiZ2V0LXBhcmtpbmdzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9MQU5HQVVHRVMgPSBcImdldC1sYW5ndWFnZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfQUREX1NQT1QgPSBcInNpdHRlci9jcmVhdGUtc3BvdFwiO1xyXG5leHBvcnQgY29uc3QgVV9VUERBVEVfU1BPVCA9IFwic2l0dGVyL3VwZGF0ZS1zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9ERUxFVEVfU1BPVCA9IFwic2l0dGVyL3JlbW92ZS1zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lOR0xFX1NQT1QgPSBcInNpdHRlci9zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9NQVJLX1VOTUFSS19TUE9UID0gXCJtYXJrLXNwb3QtYXMtZmF2b3JpdGVcIjtcclxuZXhwb3J0IGNvbnN0IFVfUkVWSUVXX1NQT1QgPSBcInNwb3QtcmV2aWV3LXJhdGVcIjtcclxuXHJcbi8vQ09NTU9OXHJcbmV4cG9ydCBjb25zdCBVX1JBVEVfU0lUVEVSID0gXCJzaXR0ZXItcmV2aWV3LXJhdGVcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0NJVElFUyA9IFwiZ2V0LWNpdGllcy9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0NPVVRSSUVTID0gXCJnZXQtY291bnRyaWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QRVRTID0gXCJnZXQtcGV0c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQlJFRURfV0lUSF9UWVBFID0gXCJnZXQtYnJlZWRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0lNQUdFX1VQTE9BRCA9IFwidXBsb2FkXCI7XHJcbmV4cG9ydCBjb25zdCBVX1VQTE9BRF9QUk9GSUxFX1BJQ1RVUkUgPSBcInVzZXIvc2F2ZS1wcm9maWxlLXBpY1wiO1xyXG5leHBvcnQgY29uc3QgVV9GSUxURVJFRF9BVkFJTEFCTEVfU0lUVEVSID0gXCJnZXQtYXZhaWxhYmxlLXNpdHRlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NJTkdMRV9TSVRURVIgPSBcImdldC1zaXR0ZXItcHJvZmlsZS9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NJVFRFUl9BVkFJTEFCSUxJVFkgPSBcInNpdHRlci9wZXQtc2VydmljZS1hdmFpbGFiaWxpdHlcIjtcclxuZXhwb3J0IGNvbnN0IFVfVVBMT0FEX0RPQ1VNRU5UUyA9IFwidXNlci91cGxvYWQtZG9jdW1lbnRcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0ZBVk9SSVRFX1NJVFRFUiA9IFwiZ2V0LWZhdm9yaXRlLXNpdHRlcnNcIjtcclxuXHJcbi8vUGF5bWVudCBDYXJkICYgQmFuayBkZXRhaWxzXHJcbmV4cG9ydCBjb25zdCBVX0FERF9DQVJEID0gXCJ1c2VyL2FkZC1jYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9DQVJEID0gXCJ1c2VyL2dldC1jYXJkc1wiO1xyXG5leHBvcnQgY29uc3QgVV9ERUxFVEVfQ0FSRCA9IFwidXNlci9kZWxldGUtY2FyZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBVX0FERF9CQU5LX0FDQ09VTlQgPSBcInVzZXIvY3JlYXRlLWJhbmstYWNjb3VudFwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFOS19BQ0NPVU5UID0gXCJ1c2VyL2dldC1hbGwtYmFuay1hY2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFOS19ERVRBSUxTID0gXCJ1c2VyL2dldC1iYW5rLWRldGFpbHMvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9CQU5LX0FDQ09VTlQgPSBcInVzZXIvZGVsZXRlLWJhbmstYWNjb3VudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfTUFLRV9CQU5LX0RFRkFVTFQgPSAndXNlci9kZWZhdWx0LWJhbmstYWNjb3VudCc7XHJcbmV4cG9ydCBjb25zdCBVX01BS0VfQ0FSRF9fREVGQVVMVCA9ICd1c2VyL21ha2UtZGVmYXVsdC1jYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBVX0FQUExZX0NPVVBPTiA9ICdzaXR0ZXIvYXBwbHktY291cG9uJztcclxuZXhwb3J0IGNvbnN0IFVfUkVNT1ZFX0NPVVBPTiA9ICdzaXR0ZXIvcmVtb3ZlLWNvdXBvbi8nO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQ09VUE9OID0gJ3VzZXIvZ2V0LXNhdmVkLWNvdXBvbnMvJztcclxuZXhwb3J0IGNvbnN0IFVfR0VUX05FV1MgPSAnZ2V0LW5ld3MtZXZlbnRzLzEnO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfRVZFTlQgPSAnZ2V0LW5ld3MtZXZlbnRzLzInO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lOR0xFX05FV1M9XCJzaW5nbGUtbmV3cy1ldmVudC8yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3VjY2Vzc09wdGlvbnMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1jZW50ZXInLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdtaWRuaWdodGJsdWUnLFxyXG5cclxuICAgICAgICBjb2xvcjogJ21pZG5pZ2h0Ymx1ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGNsb3NlU3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Y29yYWwnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmFpbHVyZU9wdGlvbnMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1jZW50ZXInLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdtaWRuaWdodGJsdWUnLFxyXG5cclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Ymx1ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGNsb3NlU3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Y29yYWwnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB9LFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgY29va2llID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbmNvbnN0IHdpdGhBdXRoID0gKENvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnN0IEF1dGggPSAocHJvcHMpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHZhciB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICh0b2tlbiA9PSBudWxsIHx8IHRva2VuID09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgICByb3V0ZXIucGF0aG5hbWUgIT0gXCIvc2lnbmluXCIgJiZcclxuICAgICAgICByb3V0ZXIucGF0aG5hbWUgIT0gXCIvc2lnbnVwXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvc2lnbmluXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIChyb3V0ZXIucGF0aG5hbWUgPT0gXCIvc2lnbmluXCIgfHwgcm91dGVyLnBhdGhuYW1lID09IFwiL3NpZ251cFwiKSAmJlxyXG4gICAgICAgIHRva2VuXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBBdXRoLmdldEluaXRpYWxQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gQXV0aDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tIFwiLi4vLi4vcHVibGljL2xhbmcvU3RyaW5nc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4uLy4uL2FwaS9BcGlcIjtcclxuaW1wb3J0IHtkZWxldGVDb29raWUsIHZhbGlkYXRlRW1haWx9IGZyb20gXCIuLi8uLi91dGlscy9IZWxwZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvYy93aXRoQXV0aFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NpZ25pbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBGZWF0aGVySWNvbiBmcm9tIFwiZmVhdGhlci1pY29ucy1yZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIHJlbWVtYmVyTWU6IGJvb2xlYW47XHJcbiAgZXJyb3JzOiBhbnk7XHJcbiAgc2hvd1Bhc3M6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5jb25zdCBhcGkgPSBuZXcgQVBJKCk7XHJcbmNsYXNzIFNpZ25JbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSVN0YXRlPiB7XHJcbiAgcHJpdmF0ZSBwYXNzd29yZElucHV0OiBSZWFjdC5SZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIHJlbWVtYmVyTWU6IGZhbHNlLFxyXG4gICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICBzaG93UGFzczogZmFsc2VcclxuICAgIH07XHJcbiAgICB0aGlzLnBhc3N3b3JkSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMub25UZXh0Q2hhbmdlID0gdGhpcy5vblRleHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudG9nZ2xlU2VjdXJlUGFzc3dvcmQgPSB0aGlzLnRvZ2dsZVNlY3VyZVBhc3N3b3JkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoZWNrYm94T25DaGFuZ2UgPSB0aGlzLmNoZWNrYm94T25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xyXG4gICAgbGV0IGVtYWlsID0gY29va2llcy5nZXQoJ3JlbV9lbWFpbCcpO1xyXG4gICAgbGV0IHBhc3MgPSBjb29raWVzLmdldCgncmVtX3Bhc3MnKTtcclxuICAgIGlmKGVtYWlsICYmIHBhc3Mpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzLCByZW1lbWJlck1lOiB0cnVlfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVGV4dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0gYXMgeyBbSyBpbiBrZXlvZiBJU3RhdGVdOiBJU3RhdGVbS10gfSk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlU2VjdXJlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93UGFzczogIXRoaXMuc3RhdGUuc2hvd1Bhc3N9KVxyXG4gIH07XHJcblxyXG4gIGNoZWNrYm94T25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICByZW1lbWJlck1lOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBsb2dpblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3JzOiB7fSxcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICAgIGFwaVxyXG4gICAgICAubG9naW5Vc2VyKGRhdGEpXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGlkPSR7anNvbi5kYXRhLnJlc3BvbnNlLmlkfTsgcGF0aD0vYDtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdG9rZW49JHtqc29uLmRhdGEucmVzcG9uc2UudG9rZW59OyBwYXRoPS9gO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBmaXJzdG5hbWU9JHtqc29uLmRhdGEucmVzcG9uc2UuZmlyc3RuYW1lfTsgcGF0aD0vYDtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgbGFzdG5hbWU9JHtqc29uLmRhdGEucmVzcG9uc2UubGFzdG5hbWV9OyBwYXRoPS9gO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBwaG9uZV9udW1iZXI9JHtqc29uLmRhdGEucmVzcG9uc2UucGhvbmVfbnVtYmVyfTsgcGF0aD0vYDtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgcHJvZmlsZV9waWN0dXJlPSR7anNvbi5kYXRhLnJlc3BvbnNlLnByb2ZpbGVfcGljdHVyZX07IHBhdGg9L2A7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGVtYWlsPSR7anNvbi5kYXRhLnJlc3BvbnNlLmVtYWlsfTsgcGF0aD0vYDtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZW1lbWJlck1lKXtcclxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGByZW1fZW1haWw9JHtqc29uLmRhdGEucmVzcG9uc2UucGhvbmVfbnVtYmVyfTsgcGF0aD0vYDtcclxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGByZW1fcGFzcz0ke2pzb24uZGF0YS5yZXNwb25zZS5wcm9maWxlX3BpY3R1cmV9OyBwYXRoPS9gO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICBkZWxldGVDb29raWUoJ3JlbV9lbWFpbCcpO1xyXG4gICAgICAgICAgIGRlbGV0ZUNvb2tpZSgncmVtX3Bhc3MnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQyMikge1xyXG4gICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yczogZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAwKSB7XHJcbiAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgICAgZW1haWw6IFtlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlY3RvclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taW1nIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJsb2dvXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTRcIj57c3RyaW5ncy5XZWxjb21lYWdhaW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMiBjb2wtbGctMTIgY29sLXhsLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntzdHJpbmdzLkVtYWlsYWRkcmVzc308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17XCJlcnJvci10ZXh0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuZXJyb3JzLmVtYWlsWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZXJyb3JzLmVtYWlsID8gXCJpbnZhbGlkXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciByZWdpc3RlcmVkIGVtYWlsIElEXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEyIGNvbC1sZy0xMiBjb2wteGwtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBsb2dpbi1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17XCJlcnJvci10ZXh0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmQgPyBcImludmFsaWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUuc2hvd1Bhc3MgPyBcInRleHRcIjpcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0aGVySWNvbiAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZXllIGZhLXctMTggZmEtMnggZXllLWljb25cIiBpY29uPXt0aGlzLnN0YXRlLnNob3dQYXNzID8gXCJleWUtb2ZmXCIgOiBcImV5ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVTZWN1cmVQYXNzd29yZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVjayBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGVja2JveE9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXNfbmFtZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5SZW1lbWJlcm1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcmdldC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LTE0IGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkZvcmdvdHBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2luVXNlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5Mb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbk9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJPclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuT3JcIj57c3RyaW5ncy5vcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNvY2lhbC1pY25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvZmFjZWJvb2sucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGwtMCBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkNvbnRpbnVld2l0aEZhY2Vib29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNvY2lhbC1pY25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvZ29vZ2xlLXBsdXMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGwtMCBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkNvbnRpbnVld2l0aEdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzb2NpYWwtaWNuc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3R3aXR0ZXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcGwtMCBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkNvbnRpbnVld2l0aFR3aXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc29jaWFsLWljbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9saW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHBsLTAgbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5Db250aW51ZXdpdGhMaW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjcmVhdGUtYWNjb3VudCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMCBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkRvbnRoYXZlYW5hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5SZWdpc3Rlcm5vd31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChTaWduSW4pO1xyXG4iLCJpbXBvcnQgTG9jYWxpemVkU3RyaW5ncyBmcm9tIFwicmVhY3QtbG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IGVuZyB9IGZyb20gXCIuL2VuZ1wiO1xyXG5cclxuZXhwb3J0IGxldCBzdHJpbmdzID0gbmV3IExvY2FsaXplZFN0cmluZ3MoeyBlbmcgfSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbmcgPSB7XHJcbiAgc2VhcmNoU2l0dGVyOiBcIlNlYXJjaCBTaXR0ZXJcIixcclxuICBiZWNvbWVBU2l0dGVyOiBcIkJlY29tZSBhIFNpdHRlclwiLFxyXG4gIG91clNlcnZpY2VzOiBcIk91ciBTZXJ2aWNlc1wiLFxyXG4gIHNpZ25VcDogXCJTaWduIFVwXCIsXHJcbiAgc2lnbkluOiBcIlNpZ24gSW5cIixcclxuICBoZWxwOiBcIkhlbHBcIixcclxuICBleHBsb3JlOiBcIkV4cGxvcmVcIixcclxuICBjb21wYW55OiBcIkNPTVBBTllcIixcclxuICBhYm91dFVzOiBcIkFib3V0IFVzXCIsXHJcbiAgY29udGFjdDogXCJDb250YWN0XCIsXHJcbiAgY2FyZWVyOiBcIkNhcmVlclwiLFxyXG4gIHByaXZhY3lQb2xpY3k6IFwiUHJpdmFjeSBQb2xpY3lcIixcclxuICB0ZXJtc09mVXNlcjogXCJUZXJtcyBvZiBVc2VcIixcclxuICBjb29raWVQb2xpY3k6IFwiQ29va2llIFBvbGljeVwiLFxyXG4gIHBldFNwb3RzOiBcIlBldCBTcG90c1wiLFxyXG4gIGJsb2dzOiBcIkJsb2dzXCIsXHJcbiAgZmFxczogXCJGQVFzXCIsXHJcbiAgc2FmZXR5OiBcIlNhZmV0eVwiLFxyXG4gIG5ld3NBbmRTYWZldHk6IFwiTmV3cyAmIEV2ZW50c1wiLFxyXG4gIG5ld3Nyb29tOiBcIk5ld3Nyb29tXCIsXHJcbiAgZXZlbnRzQW5kVXBkYXRlczogXCJFdmVudHMgJiBVcGRhdGVcIixcclxuICBzdGF5Q29ubmVjdGVkOiBcIlN0YXkgQ29ubmVjdGVkXCIsXHJcbiAgc3Vic2NyaWJlOiBcIlN1YnNjcmliZVwiLFxyXG4gIGZvbGxvd1BldGNhdGlvbjogXCJGb2xsb3cgUGV0Y2F0aW9uXCIsXHJcbiAgYWRkWW91clBldFNwb3Q6IFwiQWRkIFlvdXIgcGV0IHNwb3RcIixcclxuICBhbGxSaWdodHNSZXNlcnZlZDogXCLCqSBwZXRjYXRpb24uY29tLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXCIsXHJcbiAgbG92ZUNhcmVBbmRBbGxOZWVkc0ZvclBldHM6IFwiTG92ZSwgY2FyZSBhbmQgYWxsIG5lZWRzIGZvciBwZXRzXCIsXHJcbiAgYm9va1RydXN0ZWRTaXR0ZXJzOlxyXG4gICAgXCIgQm9vayB0cnVzdGVkIHNpdHRlcnMgYW5kIGRvZyB3YWxrZXJzICYgbXVjaCBtb3JlIHdpdGggcGV0Y2F0aW9uLlwiLFxyXG4gIHlvdXJQZXQ6IFwiWW91ciBwZXQ6IFwiLFxyXG4gIHlhYVBldExvdmVyczogXCJZYWEtISBQZXQgTG92ZXJzXCIsXHJcbiAgd2VNYWRlSXRTdXBlckVhc3lUaXRsZTpcclxuICAgIFwiIFdl4oCZdmUgbWFkZSBpdCBzdXBlciBlYXN5IGZvciB5b3UgdG8g76yBbmQgYSBsb3ZlbHksdHJ1c3RlZCBwZXQgc2l0dGVyLCBwZXQgYm9hcmRpbmcsIGRvZyB3YWxraW5nICYgbXVjaCBtb3JlIGluIHlvdXIgbmVpZ2hib3VyaG9vZC5cIixcclxuICBwZXRCb2FyZGluZzogXCJQZXQgQm9hcmRpbmdcIixcclxuICB3ZU1hZGVJdFN1cGVyRWF6eVBldEJvYXJkaW5nOlxyXG4gICAgXCJXZeKAmXZlIG1hZGUgaXQgc3VwZXIgZWFzeSBmb3IgeW91IHRvIO+sgW5kIGEgbG92ZWx5LHRydXN0ZWQgcGV0IHNpdHRlciwgcGV0IGJvYXJkaW5nLlwiLFxyXG4gIGhvdXNlU2l0dGluZzogXCJIb3VzZSBTaXR0aW5nXCIsXHJcbiAgZHJvcEluVmlzaXRzOiBcIkRyb3AtSW4gVmlzaXRzXCIsXHJcbiAgcGV0RGF5Q2FyZTogXCJQZXQgRGF5IENhcmVcIixcclxuICBkb2dXYWxraW5nOiBcIkRvZyBXYWxsa2luZ1wiLFxyXG4gIGhvdXNlQ2FsbDogXCJIb3VzZSBDYWxsXCIsXHJcbiAgZ3Jvb21pbmc6IFwiR3Jvb21pbmdcIixcclxuICBib29rV2l0aFByb2Zlc3Npb25hbFBldFNpdHRlcjpcclxuICAgIFwiQm9vayB3aXRoIHByb2Zlc3Npb25hbCBwZXQgc2l0dGVycyB5b3UgY2FuIHRydXN0LlwiLFxyXG4gIHZlcmlmaWVkUGV0U2l0dGVyczogXCJWZXJpZmllZCBwZXQgc2l0dGVyc1wiLFxyXG4gIEFsbFNpdHRlclBhc3NBQmFzaWNDaGVjazogXCJBbGwgc2l0dGVycyBwYXNzIGEgYmFzaWMgYmFja2dyb3VuZCBjaGVja1wiLFxyXG4gIGtub3dTaXR0ZXJQZXJzb25hbGx5OiBcIktub3cgc2l0dGVyIHBlcnNvbmFsbHlcIixcclxuICBBbGxTaXR0ZXJzUHJvdmlkZTpcclxuICAgIFwiQWxsIHNpdHRlcnMgcHJvdmlkZSBhIGRldGFpbGVkIHByb2ZpbGUgYW5kIHBlcnNvbmFsIGluZm9ybWF0aW9uXCIsXHJcbiAgQ2VydGlmaWVkUGV0U2l0dGVyczogXCJDZXJ0aWZpZWQgcGV0IHNpdHRlcnNcIixcclxuICBBbGxTaXR0ZXJzSGF2ZUFuaW1hbENlcnRpZmljYXRpb25zOiBcIkFsbCBzaXR0ZXJzIGhhdmUgYW5pbWFsIGNlcnRpZmljYXRpb25zLlwiLFxyXG4gIGJvb2tZb3VyUGV0Y2F0aW9uU2l0dGVyOiBcIkJvb2sgeW91ciBwZXRjYXRpb24gc2l0dGVyIVwiLFxyXG4gIHBldGNhdGlvbkd1YXJhbnRlZTogXCJQZXRjYXRpb24gR3VhcmFudGVlXCIsXHJcbiAgQWxsU2VydmljZXNCb29rZWRPblBldGNhdGlvbjpcclxuICAgIFwiQWxsIHNlcnZpY2VzIGJvb2tlZCBvbiBQZXRjYXRpb24gYXJlIGJhY2tlZCBieSB0aGUgIFBldGNhdGlvbiBHdWFyYW50ZWUuXCIsXHJcbiAgd2h5Q2hvb3NlUGV0Y2F0aW9uOiBcIldoeSBDaG9vc2UgUGV0Y2F0aW9uXCIsXHJcbiAgZmluZFRoZVBlcmZlY3RIb3VzZUtlZXBlcjpcclxuICAgIFwiRmluZCB0aGUgUGVyZmVjdCBIb3VzZWtlZXBlciBuZWFyIHlvdXIgbmVpZ2hib3Job29kICBhbnl0aW1lLiBTYWZldHkgYW5kIFNlY3VyaXR5IGFyZSBvdXIgdG9wIHByaW9yaXR5XCIsXHJcbiAgdmVyaWZpZWRTaXR0ZXJzOiBcIlZlcmlmaWVkIHNpdHRlcnNcIixcclxuICBhbGxQZXRjYXRpb25TaXR0ZXJzSGF2ZVBhc3NlZE91cjpcclxuICAgIFwiQWxsIFBldGNhdGlvbiBzaXR0ZXJzIGhhdmUgcGFzc2VkIG91ciBzdHJpbmdlbnQgc2VsZWN0aW9uIHByb2Nlc3MgYW5kIGhhZCB0aGVpciBpZGVudGl0eSB2ZXJpZmllZC5cIixcclxuICBwcm9mZXNzaW9uYWxDYXJlOiBcIlByb2Zlc3Npb25hbCBDYXJlXCIsXHJcbiAgeW91clBldHNTYWZldHlJc091clRvcFByaW9yaXR5OlxyXG4gICAgXCJZb3VyIHBldOKAmXMgc2FmZXR5IGlzIG91ciB0b3AgcHJpb3JpdHkuIEV2ZXJ5IHNpdHRlciBpcyB3ZWxsIGVxdWlwcGVkIHdpdGggY2VydGlmaWNhdGlvbnMgJiBmaXJzdC1haWQgdHJhaW5pbmcuXCIsXHJcbiAgczI0N3N1cHBvcnQ6IFwiMjQvNyBzdXBwb3J0XCIsXHJcbiAgV2VBcmVIZXJlVG9IZWxwWW91QW5kWW91clBldDpcclxuICAgIFwiIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgYW5kIHlvdXIgcGV0IHdoZW5ldmVyIHlvdSBuZWVkIHVzLiBTaXR0ZXJzIGFsc28gaGF2ZSBhY2Nlc3MgdG8gdmV0ZW5hcnkgc3BlY2lhbGlzdHMuXCIsXHJcbiAgcGV0Y2l0YXRpb25mb3JQZXRPd25lcnM6IFwiUGV0Y2F0aW9uIGZvciBQZXQgT3duZXJzXCIsXHJcbiAgc2VhcmNoQW5kQ29ubmVjdFdpdGhUcnVzdGVkOlxyXG4gICAgXCJTZWFyY2ggYW5kIGNvbm5lY3Qgd2l0aCB0cnVzdGVkIHBldCBzaXR0ZXJzLiBJdCdzIGVhc3kgIGFzIDEsIDIsIDMuXCIsXHJcbiAgZmluZEFWZXJpZmllZFBldFNpdHRlcjogXCJGaW5kIGEgdmVyaWZpZWQgcGV0IHNpdHRlclwiLFxyXG4gIHNlYXJjaEFuZEZpbmRFeHBlcmllbmNlZExvY2FsOlxyXG4gICAgXCJTZWFyY2ggYW5kIGZpbmQgZXhwZXJpZW5jZWQgbG9jYWwgcGV0IHNpdHRlcnMgIG5lYXJieVwiLFxyXG4gIGFycmFuZ2VBTWVldEdyZWV0OiBcIkFycmFuZ2UgYSBtZWV0ICYgZ3JlZXRcIixcclxuICBnZXRUb0tub3dZb3VyU2l0dGVyOiBcIkdldCB0byBrbm93IHlvdXIgc2l0dGVyIGluIHBlcnNvbiwgb2JsaWdhdGlvbi1mcmVlLlwiLFxyXG4gIGJvb2tTYWZlbHlPbmxpbmVQYXltZW50czogXCJCb29rIHNhZmVseSBvbmxpbmUgcGF5bWVudHNcIixcclxuICBib29rWW91clNpdHRlclRocm91Z2hPdXJTYWZlT25saW5lOlxyXG4gICAgXCJCb29rIHlvdXIgc2l0dGVyIHRocm91Z2ggb3VyIHNhZmUgb25saW5lIHN5c3RlbSx3aXRoIGZsZXhpYmxlIGNhbmNlbGxhdGlvbnMgYXMgcGVyIHNpdHRlcnMgcG9saWN5LlwiLFxyXG4gIHByb3BlclVwZGF0ZXM6IFwiUHJvcGVyIFVwZGF0ZXNcIixcclxuICBvbmNlSm9iQ29tcGxldGVzWW91Q2FuUmF0ZTpcclxuICAgIFwiT25jZSBqb2IgY29tcGxldGVzIHlvdSBjYW4gcmF0ZSAmIHJldmlldyB5b3VyIHNpdHRlclwiLFxyXG4gIHJhdGluZ0FuZFJldmlld3M6IFwiUmF0aW5nICYgUmV2aWV3c1wiLFxyXG4gIGV4cGxvcmVPdXJTaXR0ZXI6IFwiRXhwbG9yZSBPdXIgU2l0dGVyc1wiLFxyXG4gIHBldGNhdGlvbkZvclBldFNpdHRlcnM6IFwiUGV0Y2F0aW9uIGZvciBQZXQgU2l0dGVyc1wiLFxyXG4gIHdhbm5hQmVQYXJ0bmVyV2l0aFVzOiBcIldhbm5hIGJlIFBhcnRuZXIgd2l0aCB1cz9cIixcclxuICB3aGF0RXZlclBldFNlcnZpY2VZb3VQcm92aWRlOlxyXG4gICAgXCIgV2hhdGV2ZXIgcGV0IHNlcnZpY2UgeW91IHByb3ZpZGUsIHdlJ2xsIGZpbmQgdGhlIHBldCBzaXR0ZXIsIGdyb29tZXIsIGJvYXJkaW5nIG9yIGRvZyB3YWxrZXIgam9icyB5b3UgbmVlZC5cIixcclxuICBzMTAwVmVyaWZpZWRqb2JzOiBcIjEwMCUgVmVyaWZpZWQgam9ic1wiLFxyXG4gIEVhc3lwcm9maWxldmVyaWZpY2F0aW9uczogXCJFYXN5IHByb2ZpbGUgdmVyaWZpY2F0aW9uc1wiLFxyXG4gIEluc3RhbnRwYXlvdXRzOiBcIkluc3RhbnQgcGF5b3V0c1wiLFxyXG4gIExpc3R5b3VyYm9hcmRpbmc6IFwiTGlzdCB5b3VyIGJvYXJkaW5nXCIsXHJcbiAgQmVjb21lYXBldHNpdHRlcjogXCJCZWNvbWUgYSBwZXQgc2l0dGVyXCIsXHJcbiAgdXBkYXRlV2hlbklNb3ZlVGhlTWFwOiBcIlVwZGF0ZSB3aGVuIEkgbW92ZSB0aGUgbWFwXCIsXHJcbiAgU2F2ZVNlYXJjaDogXCJTYXZlIFNlYXJjaFwiLFxyXG4gIGFwcGx5OiBcIkFwcGx5XCIsXHJcblxyXG4gIG1vcmU6IFwiTW9yZVwiLFxyXG4gIEFsbFByaWNlczogXCJBbGwgUHJpY2VzXCIsXHJcbiAgSG93bWFueXBldHM6IFwiSG93IG1hbnkgcGV0cz9cIixcclxuICBEb2dzaXplOiBcIkRvZyBzaXplKGxicylcIixcclxuICBQZXR0eXBlczogXCJQZXQgdHlwZShzKVwiLFxyXG4gIEhvd29mdGVueW91d2FudHNlcnZpY2U6IFwiSG93IG9mdGVuIHlvdSB3YW50IHNlcnZpY2U/XCIsXHJcbiAgQ2hlY2tfb3V0OiBcIkNoZWNrLW91dFwiLFxyXG4gIENoZWNrX2luOiBcIkNoZWNrLWluXCIsXHJcbiAgUGV0Y2F0aW9uVmVyaWZpZWQ6IFwiUGV0Y2F0aW9uIFZlcmlmaWVkXCIsXHJcbiAgUGV0Y2F0aW9uTm90VmVyaWZpZWQ6IFwiUGV0Y2F0aW9uIG5vdCBWZXJpZmllZFwiLFxyXG4gIE9ubGluZW5vdzogXCJPbmxpbmUgbm93XCIsXHJcbiAgUGV0c3Rha2VuY2FyZTogXCJQZXRzIHRha2VuIGNhcmVcIixcclxuICBIYXBweUN1c3RvbWVyczogXCJIYXBweSBDdXN0b21lcnNcIixcclxuICBSZWhpcmVyYXRlOiBcIlJlaGlyZSByYXRlXCIsXHJcbiAgRXhwZXJpZW5jZTogXCJFeHBlcmllbmNlXCIsXHJcbiAgTXlwZXRzOiBcIk15IHBldHNcIixcclxuICBBYm91dHBsYWNlOiBcIkFib3V0IHBsYWNlXCIsXHJcbiAgQWRkaXRpb25hbFNraWxsczogXCJBZGRpdGlvbmFsIFNraWxsc1wiLFxyXG4gIFJldmlld3M6IFwiUmV2aWV3c1wiLFxyXG4gIE92ZXJhbGxyYXRpbmc6IFwiT3ZlcmFsbCByYXRpbmdcIixcclxuICBDbGVhbmxpbmVzczogXCJDbGVhbmxpbmVzc1wiLFxyXG4gIEFjY3VyYWN5OiBcIkFjY3VyYWN5XCIsXHJcbiAgQ29tbXVuaWNhdGlvbjogXCJDb21tdW5pY2F0aW9uXCIsXHJcbiAgTG9jYXRpb246IFwiTG9jYXRpb25cIixcclxuICBWYWx1ZTogXCJWYWx1ZVwiLFxyXG4gIEF2YWlsYWJpbGl0eTogXCJBdmFpbGFiaWxpdHlcIixcclxuICBBdmFpbGFibGU6IFwiQXZhaWxhYmxlXCIsXHJcbiAgVW5hdmFpbGFibGU6IFwiVW5hdmFpbGFibGVcIixcclxuICBCb2FyZGluZ0NhbmNlbGxhdGlvbnBvbGljeTogXCJCb2FyZGluZyBDYW5jZWxsYXRpb24gcG9saWN5XCIsXHJcbiAgRXh0cmFpbmZvYWJvdXRsb2NhbGl0eTogXCJFeHRyYSBpbmZvIGFib3V0IGxvY2FsaXR5XCIsXHJcbiAgRGFzaGJvYXJkOiBcIkRhc2hib2FyZFwiLFxyXG4gIFJlc2VydmF0aW9uczogXCJSZXNlcnZhdGlvbnNcIixcclxuICBNeXByb2ZpbGU6IFwiTXkgcHJvZmlsZVwiLFxyXG4gIE15U2VydmljZXM6IFwiTXkgU2VydmljZXNcIixcclxuICBGYXZvdXJpdGVTaXR0ZXJzOiBcIkZhdm91cml0ZSBTaXR0ZXJzXCIsXHJcbiAgTXlzcG90czogXCJNeSBzcG90c1wiLFxyXG4gIFBhc3N3b3JkQW5kU2VjdXJpdHk6IFwiUGFzc3dvcmQgJiBTZWN1cml0eVwiLFxyXG4gIFBheW1lbnRzQW5kcGF5b3V0czogXCJQYXltZW50cyAmIHBheW91dHNcIixcclxuICBQYXltZW50aGlzdG9yeTogXCJQYXltZW50IGhpc3RvcnlcIixcclxuICBHbG9iYWxwcmVmZXJlbmNlczogXCJHbG9iYWwgcHJlZmVyZW5jZXNcIixcclxuICBQb2ludHNBbmRjb3Vwb246IFwiUG9pbnRzICYgY291cG9uXCIsXHJcbiAgVG90YWxCb29raW5nczogXCJUb3RhbCBCb29raW5nc1wiLFxyXG4gIFdlZWs6IFwiV2Vla1wiLFxyXG4gIFRvdGFsRWFybmluZ3M6IFwiVG90YWwgRWFybmluZ3NcIixcclxuICBUb3RhbFJlZmVycmFsOiBcIlRvdGFsIFJlZmVycmFsXCIsXHJcbiAgTGF0ZXN0Qm9va2luZ1JlcXVlc3RzOiBcIkxhdGVzdCBCb29raW5nIFJlcXVlc3RzXCIsXHJcbiAgVmlld0FsbDogXCJWaWV3IEFsbFwiLFxyXG4gIEZyb206IFwiRnJvbVwiLFxyXG4gIFRvOiBcIlRvXCIsXHJcbiAgVG90YWw6IFwiVG90YWxcIixcclxuICBBY2NlcHQ6IFwiQWNjZXB0XCIsXHJcbiAgUGVuZGluZzogXCJQZW5kaW5nXCIsXHJcbiAgTWFrZVBheW1lbnQ6IFwiTWFrZSBwYXltZW50XCIsXHJcbiAgRWRpdDogXCJFZGl0XCIsXHJcbiAgUmVtb3ZlOiBcIlJlbW92ZVwiLFxyXG4gIE1lZXRpbmdSZXF1ZXN0czogXCJNZWV0aW5nIFJlcXVlc3RzXCIsXHJcbiAgTXlQb3J0Zm9saW86IFwiTXkgUG9ydGZvbGlvXCIsXHJcbiAgZGVsZXRlUGV0OiBcIkRlbGV0ZSBwZXRcIixcclxuICBhcmVZb3VTdXJlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgYWRkQXZhaWxhYmlsaXR5OiBcIkFkZCBhdmFpbGFiaWxpdHlcIixcclxuICBBZGRtb3JlaW1hZ2VzOiBcIiBBZGQgbW9yZSBpbWFnZXNcIixcclxuICBOZXdzRmVlZHM6IFwiTmV3cyBGZWVkc1wiLFxyXG4gIEV4Y2VsbGVudDogXCJFeGNlbGxlbnRcIixcclxuICBWaWV3UHJvZmlsZTogXCJWaWV3IFByb2ZpbGVcIixcclxuICBFeHBsb3JlYW1hemluZ3BsYWNlczogXCIgRXhwbG9yZSBhbWF6aW5nIHBsYWNlcyB0byB2aXNpdCB3aXRoIHlvdXIgcGV0c1wiLFxyXG4gIFBldGNhcmU6IFwiUGV0Y2FyZVwiLFxyXG4gIFNlZWFsbDogXCJTZWUgYWxsXCIsXHJcbiAgS21zZnJvbXlvdXJjdXJyZW50bG9jYXRpb246IFwiZnJvbSB5b3VyIGN1cnJlbnQgbG9jYXRpb25cIixcclxuICByZXNwb25zZXJhdGU6IFwicmVzcG9uc2UgcmF0ZVwiLFxyXG4gIFNlZWF2YWlsYWJpbGl0eTogXCJTZWUgYXZhaWxhYmlsaXR5XCIsXHJcbiAgU2VlQWRkaXRpb25hbFNlcnZpY2VzUmF0ZXM6IFwiU2VlIEFkZGl0aW9uYWwgU2VydmljZXMgJiByYXRpbmdBbmRSZXZpZXdzXCIsXHJcbiAgQWRkcmVzczogXCJBZGRyZXNzXCIsXHJcbiAgQ2xpZW50OiBcIkNsaWVudFwiLFxyXG4gIE1lZXRhdDogXCJNZWV0IGF0XCIsXHJcbiAgUmVqZWN0OiBcIlJlamVjdFwiLFxyXG4gIENhbmNlbDogXCJDYW5jZWxcIixcclxuICBSZWplY3RlZDogXCJSZWplY3RlZFwiLFxyXG4gIFBheW1lbnQ6IFwiUGF5bWVudFwiLFxyXG4gIEJhc2ljaW5mbzogXCJCYXNpYyBpbmZvXCIsXHJcbiAgQWRkcmVzc0luZm86IFwiQWRkcmVzcyBJbmZvXCIsXHJcbiAgRGVmYXVsdGF2YWlsYWJpbGl0eTogXCJEZWZhdWx0IGF2YWlsYWJpbGl0eVwiLFxyXG4gIE1vbmRheTogXCJNb25kYXlcIixcclxuICBUdWVzZGF5OiBcIlR1ZXNkYXlcIixcclxuICBXZWRuZXNkYXk6IFwiV2VkbmVzZGF5XCIsXHJcbiAgVGh1cnNkYXk6IFwiVGh1cnNkYXlcIixcclxuICBGcmlkYXk6IFwiRnJpZGF5XCIsXHJcbiAgQWRkc2xvdDogXCJBZGQgc2xvdFwiLFxyXG4gIFNhdHVyZGF5OiBcIlNhdHVyZGF5XCIsXHJcbiAgU2F2ZTogXCJTYXZlXCIsXHJcbiAgSG9tZUFkZHJlc3NMaW5lOiBcIkhvbWUgQWRkcmVzcyBMaW5lXCIsXHJcbiAgQXB0SG91c2VObzogXCJBcHQuL0hvdXNlIE5vLlwiLFxyXG4gIENpdHk6IFwiQ2l0eVwiLFxyXG4gIFN0YXRlb3Jwcm92aW5jZTogXCJTdGF0ZSBvciBwcm92aW5jZVwiLFxyXG4gIFpJUHBvc3RhbHBvc3Rjb2RlOiBcIlpJUC9wb3N0YWwvcG9zdGNvZGVcIixcclxuICBGdWxsbmFtZTogXCJGdWxsIG5hbWVcIixcclxuICBFbWFpbGFkZHJlc3M6IFwiRW1haWwgYWRkcmVzc1wiLFxyXG4gIGVudGVyRW1haWxBZGRyZXNzOiAnRW50ZXIgeW91ciByZWdpc3RlcmVkIGVtYWlsIGFkZHJlc3MnLFxyXG4gIGVudGVyT3RwOiAnRW50ZXIgT1RQJyxcclxuICBlbnRlck5ld1Bhc3N3b3JkOiAnRW50ZXIgbmV3IHBhc3N3b3JkJyxcclxuICBlbnRlck9sZFBhc3N3b3JkOiAnRW50ZXIgY3VycmVudCBwYXNzd29yZCcsXHJcbiAgZW50ZXJDb25maXJtUGFzc3dvcmQ6ICdFbnRlciBjb25maXJtIHBhc3N3b3JkJyxcclxuICBvdHA6ICdPVFAnLFxyXG4gIG5ld1Bhc3N3b3JkOiAnTmV3IFBhc3N3b3JkJyxcclxuICBvbGRQYXNzd29yZDogJ09sZCBQYXNzd29yZCcsXHJcbiAgY29uZmlybVBhc3N3b3JkOiAnQ29uZmlybSBQYXNzd29yZCcsXHJcblxyXG4gIENvbnRhY3RudW1iZXI6IFwiQ29udGFjdCBudW1iZXJcIixcclxuICBCaXJ0aGRhdGU6IFwiQmlydGggZGF0ZVwiLFxyXG4gIGFkZFNlcnZpY2VGaXJzdDogXCJZb3UgbmVlZCB0byBhZGQgYSBzZXJ2aWNlIGZpcnN0IFwiLFxyXG4gIFByb2ZpbGV2ZXJpZmljYXRpb246IFwiUHJvZmlsZSB2ZXJpZmljYXRpb25cIixcclxuICB1cGxvYWRJbWFnZVRleHQ6XHJcbiAgICBcIlVwbGFvZCB5b3VyIElEIGltYWdlcyB0byB2ZXJpZnkgeW91ciBwcm9maWxlLCBtYWtlIHN1cmUgdGhlIGRlYXRpc2wgeW91IGVudGVyZCBvbiB5b3VyIHByb2ZpbGUgc2hvdWxkIG1hdGNoIHRoZSBpbmZvcm1hdGlvbiBpbiBJRCBjYXJkXCIsXHJcbiAgU2VsZWN0SURjYXJkdHlwZTogXCJTZWxlY3QgSUQgY2FyZCB0eXBlXCIsXHJcbiAgUGFzc3BvcnQ6IFwiUGFzc3BvcnRcIixcclxuICBWZXJpZnlteXByb2ZpbGU6IFwiVmVyaWZ5IG15IHByb2ZpbGVcIixcclxuICBMaXNjZW5zZXZlcmlmaWNhdGlvbjogXCJMaXNjZW5zZSB2ZXJpZmljYXRpb25cIixcclxuICB1cGxvYWRsaXNjZW5zZVRleHQ6XHJcbiAgICBcIlVwbGFvZCB5b3VyIGxpc2NlbnNlIGltYWdlcyB0byB2ZXJpZnkgdGhhdCB5b3UgYXJlIGFjZXJ0aWZpZWQgc2l0dGVyLCB0aGVzZSBsaXNjZW5zZXMgd2lsbCBiZSB2ZXJpZmllZCBieSBvdXIgdGVhbSBmb3IgdGhlIHNhZnRleSBvZiBwZXRzLlwiLFxyXG4gIEFkZG5ld3BldDogXCJBZGQgbmV3IHBldFwiLFxyXG4gIEloYXZlOiBcIkkgaGF2ZVwiLFxyXG4gIERvZzogXCJEb2dcIixcclxuICBDYXQ6IFwiQ2F0XCIsXHJcbiAgQmlyZHM6IFwiQmlyZHNcIixcclxuICBSZXB0aWxlczogXCJSZXB0aWxlc1wiLFxyXG4gIFNtYWxsYW5pbWFsczogXCJTbWFsbCBhbmltYWxzXCIsXHJcbiAgTmFtZTogXCJOYW1lXCIsXHJcbiAgV2VpZ2h0OiBcIldlaWdodFwiLFxyXG4gIEFnZTogXCJBZ2VcIixcclxuICBCcmVhZDogXCJCcmVhZFwiLFxyXG4gIFNleDogXCJTZXhcIixcclxuICBXaGljaHNlcnZpY2Vzd291bGR5b3VsaWtldG9vZmZlcjogXCJXaGljaCBzZXJ2aWNlcyB3b3VsZCB5b3UgbGlrZSB0byBvZmZlclwiLFxyXG4gIFNldHNlcnZpY2VzdG9jYXRpdmU6XHJcbiAgICBcIlNldCBzZXJ2aWNlcyB0byBjYXRpdmUgdGhhdCB5b3Ugd2FudCB0byBhcHBlYXIgaW4gdGhlIHNlYXJjaCBhbmQgcmVjZWl2ZSBuZXcgYnVzaW5lc3MgZm9yLiBVc2UgYXdheSBtb2RlIHdoZW4geW91IGFyZSBvbiB2YWNhdGlvbiwgb3IgY2Fu4oCZdCByZXNwb25kIHRvIG5ldy4gcmVxdWVzdHNcIixcclxuICBTYXZlYW5kQ29udGludWU6IFwiU2F2ZSAmIENvbnRpbnVlXCIsXHJcbiAgQUNUSVZFOiBcIkFDVElWRVwiLFxyXG4gIElOU1RBTlRCT09LSU5HOiBcIklOU1RBTlQgQk9PS0lOR1wiLFxyXG4gIE1hbmFnZTogXCJNYW5hZ2VcIixcclxuICBBbGxzZXJ2aWNlczogXCJBbGwgc2VydmljZXNcIixcclxuICBCb2FyZGluZzogXCJCb2FyZGluZ1wiLFxyXG4gIFNlcnZpY2U6IFwiU2VydmljZVwiLFxyXG4gIFdoYXRpczogXCJXaGF0IGlzXCIsXHJcbiAgb25QZXRjYXRpb246IFwib24gUGV0Y2F0aW9uP1wiLFxyXG4gIFNlcnZpY2VBbmRGZWVzOiBcIlNlcnZpY2UgJiBGZWVzXCIsXHJcbiAgUHJlZmVyZW5jZXM6IFwiUHJlZmVyZW5jZXNcIixcclxuICBEaXNjb3VudHM6IFwiRGlzY291bnRzXCIsXHJcbiAgU3BlY2lhbGRpc2NvdW50Zm9yeW91cmd1ZXN0czogXCJTcGVjaWFsIGRpc2NvdW50IGZvciB5b3VyIGd1ZXN0c1wiLFxyXG4gIG9mZm9uZmlyc3Rib29raW5nd2l0aHlvdTogXCIyMCUgb2ZmIG9uIGZpcnN0IGJvb2tpbmcgd2l0aCB5b3VcIixcclxuICBBbGxvd29mb25ib29raW5nYW1vdW50OlxyXG4gICAgXCIgQWxsb3cgMjAlIG9mIG9uIGJvb2tpbmcgYW1vdW50IGZvciB0aGUgZmlyc3QgdGltZSBndWVzdHMuIFRoaXMgb2ZmZXJzIGNhbiBhdHRyYWN0IG5ldyBndWVzdHMgYW5kIGhlbHAgeW91IHRvIGVhcm4gbW9yZSBwb2ludHMgYW5kIHJldmlld3NcIixcclxuICBOb29mZmVyb250aGlzc2VydmljZTogXCJObyBvZmZlciBvbiB0aGlzIHNlcnZpY2VcIixcclxuICBMZW5ndGhvZnN0YXlkaXNjb3VudDogXCJMZW5ndGgtb2Ytc3RheSBkaXNjb3VudFwiLFxyXG4gIFdlZWtseWRpc2NvdW50OiBcIldlZWtseSBkaXNjb3VudFwiLFxyXG4gIFRoaXNkaXNjb3VudHdpbGxhcHBseXRvYW55cmVzZXJ2YXRpb246XHJcbiAgICBcIlRoaXMgZGlzY291bnQgd2lsbCBhcHBseSB0byBhbnkgcmVzZXJ2YXRpb24gb2YgNyB0byAxMiBuaWdodHNcIixcclxuICBNb250aGx5ZGlzY291bnQ6IFwiIE1vbnRobHkgZGlzY291bnRcIixcclxuICBZb3VyYXZhaWxhYmlsaXR5d2hpbGVwZXRpc2F0Ym9hcmRpbmc6XHJcbiAgICBcIllvdXIgYXZhaWxhYmlsaXR5IHdoaWxlIHBldCBpcyBhdCBib2FyZGluZ1wiLFxyXG4gIFlvdWNhbnNlbGVjdGZyb210aGVvcHRpb25zcGFydHM6XHJcbiAgICBcIllvdSBjYW4gc2VsZWN0IGZyb20gdGhlIG9wdGlvbnMgcGFydC10aW1lICYgZnVsbHRpbWUgc2VsZWN0aW5nIGZ1bGwtdGltZSBtZWFucyB5b3UgYXJlIGF2YWlsYWJsZSBhbGwgdGhlIHRpbWUgYXQgaG9tZSB3aGVuIGJvYXJkaW5nIHRoZSBwZXQuXCIsXHJcbiAgd2hlbmhvc3RpbmdwZXRzaW55b3VyaG9tZWhvd2ZyZXF1ZW50bHljYW55b3Vwcm92aWRlYnJlYWtzOlxyXG4gICAgXCJXaGVuIGhvc3RpbmcgcGV0cyBpbiB5b3VyIGhvbWUsIGhvdyBmcmVxdWVudGx5IGNhbiB5b3UgcHJvdmlkZSBicmVha3M/XCIsXHJcbiAgaG93ZnJlcXVlbnRseWNhbnlvdXByb3ZpZGVwb3R0eWJyZWFrczpcclxuICAgIFwiV2hlbiBob3N0aW5nIHBldHMgaW4geW91ciBob21lLCBob3cgZnJlcXVlbnRseSBjYW4geW91IHByb3ZpZGUgcG90dHkgYnJlYWtzLCBvciB3YWxrcywgb3IgZmVlZHMgaW4gY2FzZS5cIixcclxuICBDYW55b3VwaWNrdXBwZXRmcm9tY2xpZW50cGxhY2U6IFwiQ2FuIHlvdSBwaWNrdXAgcGV0IGZyb20gY2xpZW504oCZcyBwbGFjZT9cIixcclxuICBwZXRUeXBlOiBcIlBldCB0eXBlXCIsXHJcbiAgc2VydmljZVR5cGU6IFwiU2VydmljZSBUeXBlXCIsXHJcbiAgV2VsY29tZWFnYWluOiBcIldlbGNvbWUgYWdhaW5cIixcclxuICBSZW1lbWJlcm1lOiBcIlJlbWVtYmVyIG1lXCIsXHJcbiAgRm9yZ290cGFzc3dvcmQ6IFwiRm9yZ290IHBhc3N3b3JkP1wiLFxyXG4gIHJlc2VuZDogXCJSZXNlbnRcIixcclxuICBMb2dpbjogXCJMb2dpblwiLFxyXG4gIG9yOiBcIm9yXCIsXHJcbiAgQ29udGludWV3aXRoRmFjZWJvb2s6IFwiQ29udGludWUgd2l0aCBGYWNlYm9va1wiLFxyXG4gIENvbnRpbnVld2l0aEdvb2dsZTogXCJDb250aW51ZSB3aXRoIEdvb2dsZVwiLFxyXG4gIENvbnRpbnVld2l0aFR3aXR0ZXI6IFwiQ29udGludWUgd2l0aCBUd2l0dGVyXCIsXHJcbiAgQ29udGludWV3aXRoTGluZTogXCJDb250aW51ZSB3aXRoIExpbmVcIixcclxuICBEb250aGF2ZWFuYWNjb3VudDogXCJEb24ndCBoYXZlIGFuIGFjY291bnQgPyBcIixcclxuICBSZWdpc3Rlcm5vdzogXCJSZWdpc3RlciBub3dcIixcclxuICBDcmVhdGV5b3VyZnJlZWFjY291bnR0b2RheTogXCJDcmVhdGUgeW91ciBmcmVlIGFjY291bnQgdG9kYXlcIixcclxuICBGaXJzdG5hbWU6IFwiRmlyc3QgbmFtZVwiLFxyXG4gIExhc3RuYW1lOiBcIkxhc3QgbmFtZVwiLFxyXG4gIERhdGVvZkJpcnRoOiBcIkRhdGUgb2YgQmlydGhcIixcclxuICByZWdpc3RlclRlcm06XHJcbiAgICBcIiwgY29uZmlybSB0aGF0IEkgYW0gMTMgeWVhcnMgb2YgYWdlIG9yIG9sZGVyLCBhbmQgY29uc2VudCB0byByZWNlaXZpbmcgZW1haWwgY29tbXVuaWNhdGlvblwiLFxyXG4gIEpvaW5ub3c6IFwiSm9pbiBub3dcIixcclxuICBBbHJlYWR5aGF2ZWFuYWNjb3VudDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudCA/IFwiLFxyXG4gIEZvcmdvdHlvdXJwYXNzd29yZDogXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIixcclxuICBSZXNldHlvdXJwYXNzd29yZDogXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIixcclxuICBmb3Jnb3RQYXNzd29yZEluc3RydWN0aW9uOlxyXG4gICAgXCJUbyByZXNldCB5b3VyIHBhc3N3b3JkIGVudGVyIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbCBhZGRyZXNzLCB3ZeKAmWxsIHNlbmQgYW4gZW1haWwgd2l0aCBsaW5rIHRvIHJlc2V0IHlvdSBwYXNzd29yZFwiLFxyXG4gIHJlc2V0UGFzc3dvcmRJbnN0cnVjdGlvbjogXCJBbiBvdHAgaXMgc2VudCwgdG8gcHJvdmlkZWQgZW1haWwgYWRkcmVzcywgcGxlYXNlIHZlcmlmeSBhbmQgcmVzZXQgeW91ciBwYXNzd29yZFwiLFxyXG4gIFN1Ym1pdDogXCJTdWJtaXRcIixcclxuICByZXNldFBhc3N3b3JkOiBcIlJlc2V0IFBhc3N3b3JkXCIsXHJcbiAgQm9va2luZ2J5bWU6IFwiQm9va2luZyBieSBtZVwiLFxyXG4gIEJvb2tpbmdmb3JtZTogXCJCb29raW5nIGZvciBtZVwiLFxyXG4gIFJlcXVlc3RieW1lOiBcIlJlcXVlc3QgYnkgbWVcIixcclxuICBSZXF1ZXN0Zm9ybWU6IFwiIFJlcXVlc3QgZm9yIG1lXCIsXHJcbiAgU2l0dGVycmVzZXJ2YXRpb25zOiBcIlNpdHRlciByZXNlcnZhdGlvbnNcIixcclxuICBDbGllbnRyZXNlcnZhdGlvbnM6IFwiQ2xpZW50IHJlc2VydmF0aW9uc1wiLFxyXG4gIE15RmF2b3VyaXRlczogXCJNeSBGYXZvdXJpdGVzXCIsXHJcbiAgTXlSZXZpZXdzOiBcIk15IFJldmlld3NcIixcclxuICBTcG90czogXCJTcG90c1wiLFxyXG4gIEFkZG5ld3Nwb3Q6IFwiQWRkIG5ldyBzcG90XCIsXHJcbiAgQXZhaWxhYmxlZm9yOiBcIkF2YWlsYWJsZSBmb3JcIixcclxuICBSZXBlYXRDbGllbnRzOiBcIlJlcGVhdCBDbGllbnRzXCIsXHJcbiAgU29ydGJ5OiBcIlNvcnQgYnlcIixcclxuICBSZWNlbnRseUFkZGVkOiBcIlJlY2VudGx5IEFkZGVkXCIsXHJcbiAgQ3JlYXRlbmV3cGV0c3BvdDogXCJDcmVhdGUgbmV3IHBldCBzcG90XCIsXHJcbiAgR2VuZXI6IFwiR2VucmVcIixcclxuICBHZW5kZXI6IFwiR2VuZGVyXCIsXHJcbiAgaWRJbWFnZTogXCJJRCBpbWFnZSAoLmpwZWcsIC5qcGcsIC5wbmcsIC5kb2MsIC5wZGYpXCIsXHJcbiAgTGlzY2Vuc2VOdW1iZXI6IFwiTGlzY2Vuc2UgTnVtYmVyXCIsXHJcbiAgdmVyaWZ5TXlDZXJ0aWZpY2F0ZTogXCJWZXJpZnkgbXkgY2VydGlmaWNhdGVcIixcclxuICBjbGlja1RvVXBsb2FkOiBcIkNsaWNrIHRvIHVwbGFvZCB5b3VyXCIsXHJcbiAgU2VsZWN0c3BvdGNhdGVnb3J5OiBcIlNlbGVjdCBzcG90IGNhdGVnb3J5XCIsXHJcbiAgYmFzaWNpbmZvOiBcIkJhc2ljIGluZm9cIixcclxuICBTcG90aW1hZ2VzOiBcIlNwb3QgaW1hZ2VzXCIsXHJcbiAgQWRkbW9yZTogXCJBZGQgbW9yZVwiLFxyXG4gIENvbmZpcm06IFwiQ29uZmlybVwiLFxyXG4gIERldGFpbGVkaW5mb0FtZW5pdGllczogXCJEZXRhaWxlZCBpbmZvICYgQW1lbml0aWVzXCIsXHJcbiAgUmVzZXJ2YXRpb25wb3NzaWJsZTogXCJSZXNlcnZhdGlvbiBwb3NzaWJsZVwiLFxyXG4gIEJ1ZGdldFBheW1lbnQ6IFwiQnVkZ2V0ICYgUGF5bWVudFwiLFxyXG4gIEJ1ZGdldDogXCJCdWRnZXRcIixcclxuICBDYXJkczogXCJDYXJkc1wiLFxyXG4gIHNlcnZpY2VDaHJhZ2U6IFwiU2VydmljZSBDaGFyZ2VcIixcclxuICBtZXRob2RPZlBheW1lbnQ6IFwiTWV0aG9kIG9mIFBheW1lbnRcIixcclxuICBCYW5raW5nSW5mbzogXCJCYW5raW5nIEluZm9cIixcclxuICBEZWxldGVDYXJkOiBcIkRlbGV0ZSBDYXJkXCIsXHJcbiAgU2V0RGVmYXVsdDogXCJTZXQgZGVmYXVsdFwiLFxyXG4gIEFkZG5ld2NhcmQ6IFwiQWRkIG5ldyBjYXJkXCIsXHJcbiAgYmFua1BheW1lbnQ6IFwiQmFuayBQYXltZW50XCIsXHJcbiAgRW50ZXJIZXJlOiBcIkVudGVyIGhlcmVcIixcclxuICBSZWplY3RSZXF1ZXN0OiBcIlJlamVjdCBSZXF1ZXN0XCIsXHJcbiAgcGFzc3BvcnROdW1iZXIgOlwiUGFzc3BvcnQgTnVtYmVyXCIsXHJcbiAgcGF5bWVudE5vdGU6XHJcbiAgICBcIiBOb3RlOiBBbGwgcGF5bWVudCBtZXRob2QgYXJlIHNlY3VyZWQgd2l0aCBhZHZhbmNlZCBzZWN1cml0eSBzeXN0ZW1zIGFuZCB3ZSBkb27igJl0IHN0b3JlIHlvdXIgY2FyZCBpbmZvLlwiLFxyXG4gIG5vQ2FyZEFkZGVkVGl0bGU6XCJObyBDYXJkcyBhcmUgYWRkZWQgeWV0LlwiLFxyXG4gIG5vUmVzZXJ2YXRpb246IFwiTm8gcmVzZXJ2YXRpb24gZm91bmQhXCIsXHJcbiAgbm9Db3Vwb25zOiBcIk5vIGNvdXBvbnMgZm91bmQhXCIsXHJcbiAgbm9QZXRzOiBcIk5vIHBldHMgZm91bmQhXCIsXHJcbiAgbm9SZXF1ZXN0OiBcIk5vIHJlcXVlc3RzIGZvdW5kIVwiLFxyXG4gIG5vQmFua0FkZGVkVGl0bGU6XCJObyBCYW5rIGRldGFpbHMgYXJlIGFkZGVkIHlldC5cIixcclxuICBhZGRDYXJkVXNpbmdGb3JtOiBcIlBsZWFzZSBhZGQgYSBjYXJkIHVzaW5nIGJlbG93IGZvcm0uXCIsXHJcbiAgYWRkQmFua1VzaW5nRm9ybTogXCJQbGVhc2UgYWRkIGJhbmsgaW5mbyB1c2luZyBiZWxvdyBmb3JtLlwiLFxyXG4gIG5vTXNnWWV0OiBcIk5vIG1lc3NhZ2UgcmVjZWl2ZWQgeWV0XCIsXHJcbiAgZW50ZXJDYXJkTnVtYmVyOiBcIkVudGVyIGNhcmQgbnVtYmVyIGhlcmVcIixcclxuICBOYW1lb25jYXJkOiBcIk5hbWUgb24gY2FyZFwiLFxyXG4gIHNldERlZmF1bHRDYXJkOiBcIlNldCBhcyBkZWZhdWx0IGNhcmRcIixcclxuICBDYXJkbnVtYmVyOiBcIkNhcmQgbnVtYmVyXCIsXHJcbiAgRXhwaXJhdGlvbjogXCJFeHBpcmF0aW9uXCIsXHJcbiAgQWRkY2FyZDogXCJBZGQgY2FyZFwiLFxyXG4gIEFkZG5ld2JhbmthY2NvdW50OiBcIkFkZCBuZXcgYmFuayBhY2NvdW50XCIsXHJcbiAgVHlwZW9mYWNjb3VudDogXCJUeXBlIG9mIGFjY291bnQ6XCIsXHJcbiAgUGVyc29uYWxBY2NvdW50OiBcIlBlcnNvbmFsIEFjY291bnRcIixcclxuICBCdXNpbmVzc0FjY291bnQ6IFwiQnVzaW5lc3MgQWNjb3VudFwiLFxyXG4gIEJhbmtDb3VudHJ5OiBcIkJhbmsgQ291bnRyeVwiLFxyXG4gIEJhbmtDdXJyZW5jeTogXCJCYW5rIEN1cnJlbmN5XCIsXHJcbiAgQmFua05hbWU6IFwiQmFuayBOYW1lXCIsXHJcbiAgQnJhbmNoTmFtZTogXCJCcmFuY2ggTmFtZVwiLFxyXG4gIEVudGVyQWNjb3VudE51bWJlcjpcIkVudGVyIEFjY291bnQgTnVtYmVyXCIsXHJcbiAgUm91dGluZ051bWJlcjpcIlJvdXRpbmcgTnVtYmVyXCIsXHJcbiAgRW50ZXJSb3V0aW5nTnVtYmVyOiBcIkVudGVyIFJvdXRpbmcgTnVtYmVyXCIsXHJcbiAgQmFua0NvZGU6IFwiQmFuayBDb2RlXCIsXHJcbiAgQmFua05hbWVIZXJlOiBcIkJhbmsgbmFtZSBoZXJlXCIsXHJcbiAgQWNjb3VudEhvbGRlck5hbWU6IFwiQWNjb3VudCBIb2xkZXIgTmFtZVwiLFxyXG4gIEFjY291bnRIb2xkZXJOYW1lSGVyZTogXCJBY2NvdW50IGhvbGRlciBuYW1lIGhlcmVcIixcclxuICBCcmFuY2hDb2RlOiBcIkJyYW5jaCBDb2RlXCIsXHJcbiAgQWNjb3VudE51bWJlcjogXCJBY2NvdW50IE51bWJlclwiLFxyXG4gIEFjY291bnRUeXBlOiBcIkFjY291bnQgVHlwZVwiLFxyXG4gIEJhbmtBY2NvdW50VHlwZTogXCJCYW5rIEFjY291bnQgVHlwZVwiLFxyXG4gIEFkZG5ld2FjY291bnQ6IFwiQWRkIG5ldyBhY2NvdW50XCIsXHJcbiAgQmFua0FjY291bnROdW1iZXI6IFwiQmFuayBBY2NvdW50IE51bWJlclwiLFxyXG4gIFBheW1lbnRIaXN0b3J5OiBcIlBheW1lbnQgSGlzdG9yeVwiLFxyXG4gIFdpdGhkcmF3TW9uZXk6IFwiIFdpdGhkcmF3IE1vbmV5XCIsXHJcbiAgRWFybmluZ3M6IFwiRWFybmluZ3NcIixcclxuICBQZW5kaW5nRWFybmluZ3M6IFwiUGVuZGluZyBFYXJuaW5nc1wiLFxyXG4gIFdpdGhkcmF3YWxzOiBcIldpdGhkcmF3YWxzXCIsXHJcbiAgUGF5bWVudHM6IFwiUGF5bWVudHNcIixcclxuICBPdGhlcjogXCJPdGhlclwiLFxyXG4gIFlvdXJFeHBlY3RlZEVhcm5pbmdzOiBcIllvdXIgRXhwZWN0ZWQgRWFybmluZ3NcIixcclxuICB0b3RhbFBheWFibGVBbW91bnQ6IFwiVG90YWwgcGF5YWJsZSBhbW91bnRcIixcclxuICBDb250YWN0bm93OiBcIkNvbnRhY3Qgbm93XCIsXHJcbiAgVmlld2RldGFpbHM6IFwiVmlldyBkZXRhaWxzXCIsXHJcbiAgTG9va2luZ2ZvcmFQZXRTcG90OiBcIkxvb2tpbmcgZm9yIGEgUGV0IFNwb3RcIixcclxuICBTZWFyY2g6IFwiU2VhcmNoXCIsXHJcbiAgUHJvdmlkZXNwb3RpbmZvcm1hdGlvbjogXCJQcm92aWRlIHNwb3QgaW5mb3JtYXRpb25cIixcclxuICBQcm92aWRlc3BvdDogXCJQcm92aWRlIHNwb3RcIixcclxuICBpbmZvcm1hdGlvbjogXCJpbmZvcm1hdGlvblwiLFxyXG4gIENhdGVnb3JpZXM6IFwiQ2F0ZWdvcmllc1wiLFxyXG4gIEZpbmRiZXN0cGV0c3BvdHM6IFwiIEZpbmQgYmVzdCBwZXQgc3BvdHMgZm9yIHlvdXIgcGV0cyB0byBzcGVuZCBhIGRheS5cIixcclxuICBSZXN0YXVyYW50Q2FmZTogXCJSZXN0YXVyYW50L0NhZmVcIixcclxuICBEb2dydW5zOiBcIkRvZyBydW5zXCIsXHJcbiAgUGV0R3Jvb21pbmc6IFwiUGV0IEdyb29taW5nXCIsXHJcbiAgTGVpc3VyZU91dGRvb3I6IFwiTGVpc3VyZSAvIE91dGRvb3JcIixcclxuICBQZXRmcmllbmRseUhvdGVsOiBcIlBldCBmcmllbmRseSBIb3RlbFwiLFxyXG4gIFBhcms6IFwiUGFya1wiLFxyXG4gIFRyYXZlbDogXCJUcmF2ZWxcIixcclxuICBBbmltYWxTaGVsdGVyOiBcIkFuaW1hbCBTaGVsdGVyXCIsXHJcbiAgWW91Y2FuZmluZHNwb3RzaW5wbGFjZXM6IFwiWW91IGNhbiBmaW5kIHNwb3RzIGluIHBsYWNlcyB5b3Ugd2FudC5cIixcclxuICBUb2t5bzogXCJUb2t5b1wiLFxyXG4gIE9zYWthOiBcIk9zYWthXCIsXHJcbiAgS3lvdG86IFwiS3lvdG9cIixcclxuICBTYXBwb3JvOiBcIlNhcHBvcm9cIixcclxuICBOYWdveWE6IFwiTmFnb3lhXCIsXHJcbiAgS29iZTogXCJLb2JlXCIsXHJcbiAgU2VuZGFpOiBcIlNlbmRhaVwiLFxyXG4gIENoaWJhOiBcIkNoaWJhXCIsXHJcbiAgRmVhdHVyZWRTcG90czogXCJGZWF0dXJlZCBTcG90c1wiLFxyXG4gIExvYWRtb3JlOiBcIkxvYWQgbW9yZVwiLFxyXG4gIE1hcmt5b3VyYXZhaWxhYmlsaXR5OlxyXG4gICAgXCIgTWFyayB5b3VyIGF2YWlsYWJpbGl0eSBmb3IgdXNlciBmb3IgYWxsIHlvdXIgc2VydmljZXMuXCIsXHJcbiAgTm90aWZpY2F0aW9uczogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgbm9TaXR0ZXJGb3VuZDogXCJXZSBjb3VsZG4ndCBmaW5kIGFueSBzaXR0ZXJzIHRoYXQgbWF0Y2hlZCB5b3VyIGNyaXRlcmlhLlwiLFxyXG4gIFJlY2VpdmVtZXNzYWdlc2Zyb21ob3N0czpcclxuICAgIFwiUmVjZWl2ZSBtZXNzYWdlcyBmcm9tIGhvc3RzIGFuZCBndWVzdHMsIGluY2x1ZGluZyBib29raW5nIHJlcXVlc3QuXCIsXHJcbiAgRW1haWw6IFwiRW1haWxcIixcclxuICBUZXh0bWVzc2FnZTogXCJUZXh0IG1lc3NhZ2VcIixcclxuICBCcm93c2Vybm90aWZpY2F0aW9uOiBcIkJyb3dzZXIgbm90aWZpY2F0aW9uXCIsXHJcbiAgWW91Y2FubWFya3BpY2t1cHNlcnZpY2VlbmFibGU6XHJcbiAgICBcIiBZb3UgY2FuIG1hcmsgcGlja3VwIHNlcnZpY2UgZW5hYmxlIC8gZGlzYWJsZSBmb3IgYWxsIHNlcnZpY2UgZnJvbSBoZXJlXCIsXHJcbiAgUmVtaW5kZXJzOiBcIlJlbWluZGVyc1wiLFxyXG4gIFJlY2VpdmVib29raW5ncmVtaW5kZXJzOlxyXG4gICAgXCJSZWNlaXZlIGJvb2tpbmcgcmVtaW5kZXJzLCByZXF1ZXN0cyB0byB3cml0ZSBhIHJldmlldywgcHJpY2luZyBub3RpY2UsIGFuZCBvdGhlciByZW1pbmRlcnMgcmVsYXRlZCB0byB5b3VyIGFjdGl2aXRpZXNcIixcclxuICBQcm9tb3Rpb25zYW5kdGlwczogXCJQcm9tb3Rpb25zIGFuZCB0aXBzXCIsXHJcbiAgUGhvbmVjYWxsczogXCJQaG9uZSBjYWxsc1wiLFxyXG4gIEdlbmVyYWxwcmVmZXJlbmNlczogXCJHZW5lcmFsIHByZWZlcmVuY2VzXCIsXHJcbiAgTGFuZ3VhZ2U6IFwiTGFuZ3VhZ2VcIixcclxuICBTZXR5b3VycHJlZmVyZWRsYW5ndWFnZWZvclBldGNhdGlhb246XHJcbiAgICBcIlNldCB5b3VyIHByZWZlcmVkIGxhbmd1YWdlIGZvciBQZXRjYXRpYW9uXCIsXHJcbiAgQ291bnRyeTogXCJDb3VudHJ5XCIsXHJcbiAgQ3VycmVuY3k6IFwiQ3VycmVuY3lcIixcclxuICBTZWxlY3RjdXJyZW5jeWZvcmFsbHlvdXJ0cmFuc2FjdGlvbnM6XHJcbiAgICBcIlNlbGVjdCBjdXJyZW5jeSBmb3IgYWxsIHlvdXIgdHJhbnNhY3Rpb25zIHdpdGggUGV0Y2F0aW9uLlwiLFxyXG4gIFBhc3N3b3Jkc2V0dGluZ3M6IFwiUGFzc3dvcmQgc2V0dGluZ3NcIixcclxuICBXaGF0cGV0c3dvdWxkeW91cHJlZmVyZm9ydGhpc3NlcnZpY2U6XHJcbiAgICBcIldoYXQgcGV0cyB3b3VsZCB5b3UgcHJlZmVyIGZvciB0aGlzIHNlcnZpY2U/XCIsXHJcbiAgYm9hcmRpbmdTZXJ2aWNlZGVzY3JpcHRpb246XHJcbiAgICBcIlNlbGVjdCB0aGUgcGV0cyB5b3Ugd2lsbCBiZSB3aWxsaW5nIHRvIHNlcnZpY2UgZm9yIG5pZ2h0IGJvYXJkaW5nLlwiLFxyXG4gIEZsZXhpYmxlOiBcIkZsZXhpYmxlXCIsXHJcbiAgTW9kZXJhdGU6IFwiTW9kZXJhdGVcIixcclxuICBTdHJpY3Q6IFwiU3RyaWN0XCIsXHJcbiAgRG95b3VjaGFyZ2V0cmFuc3BvcnRhdGlvbmZlZTogXCIgRG8geW91IGNoYXJnZSB0cmFuc3BvcnRhdGlvbiBmZWU/XCIsXHJcbiAgTWluUHJpY2U6IFwiTWluIFByaWNlXCIsXHJcbiAgTWF4UHJpY2U6IFwiTWF4IFByaWNlXCIsXHJcbiAgTWFrZWJvb2tpbmd3aXRoOiBcIk1ha2UgYm9va2luZyB3aXRoXCIsXHJcbiAgQm9va2luZ2ZvcjogXCJCb29raW5nIGZvclwiLFxyXG4gIE5lZWRzaXR0ZXJ0b3BpY2t1cG15cGV0czogXCJOZWVkIHNpdHRlciB0byBwaWNrIHVwIG15IHBldHNcIixcclxuICBRdWVzdGlvbnM6IFwiUXVlc3Rpb25zXCIsXHJcbiAgU2VsZWN0c2tpbGxzOiBcIlNlbGVjdCBza2lsbHNcIixcclxuICByZXN0YXVyYW50TmFtZTogJ1Jlc3RhdXJhbnQgbmFtZScsXHJcbiAgcmV2aWV3czogJ3Jldmlld3MnLFxyXG4gIGF3YXJkczogJ0F3YXJkcycsXHJcbiAgZ2VuZXI6ICdHZW5yZScsXHJcbiAgdHJhbnNwb3J0YXRpb246ICdUcmFuc3BvcnRhdGlvbicsXHJcbiAgc3BvdEhvbGlkYXlzOiAnU3BvdCBob2xpZGF5cycsXHJcbiAgc2VydmljZUNoYXJnZXM6ICdTZXJ2aWNlIGNoYXJnZXMnLFxyXG4gIHJlc2VydmF0aW9uczogJ1Jlc2VydmF0aW9ucycsXHJcbiAgc21va2luZzogJ1Ntb2tpbmcgY2Vzc2F0aW9uIC8gc21va2luZycsXHJcbiAgcGFya2luZzogJ1BhcmtpbmcnLFxyXG4gIHNlcnZpY2VBbWVuaXRpZXM6ICdTZXJ2aWNlICYgQW1lbml0aWVzJyxcclxuICBhZGRlZEJhbmtBY2NvdW50OiBcIkFkZGVkIGJhbmsgYWNjb3VudFwiLFxyXG4gIGxhbmd1YWdlczogXCJMYW5ndWFnZXNcIixcclxuICBub29uQ2hhcmdlczogXCJOb29uIGNoYXJnZXNcIixcclxuICBuaWdodENoYXJnZXM6IFwiTmlnaHQgQ2hhcmdlc1wiLFxyXG4gIGVudGVyQmFua05hbWU6IFwiRW50ZXIgQmFuayBuYW1lXCIsXHJcbiAgYnJhbmNoTmFtZTogXCJFbnRlciBCcmFuY2ggbmFtZVwiLFxyXG4gIGJyYW5jaENvZGU6IFwiRW50ZXIgQnJhbmNoIGNvZGVcIixcclxuICBhY2NvdW50SG9sZGVyTmFtZTogXCJFbnRlciBBY2NvdW50IGhvbGRlciBuYW1lXCIsXHJcbiAgYWNjb3VudE51bWJlcjogXCJFbnRlciBBY2NvdW50IG51bWJlclwiLFxyXG4gIHJvdXRpbmdOdW1iZXI6IFwiRW50ZXIgUm91dGluZyBudW1iZXJcIixcclxuICBlbnRlckxvY2F0aW9uOiBcIkVudGVyIExvY2F0aW9uXCIsXHJcbiAgYmFua0NvZGU6IFwiRW50ZXIgQmFuayBjb2RlXCIsXHJcbiAgZW50ZXJaaXBDb2RlOiBcIkVudGVyIHppcCBjb2RlXCIsXHJcbiAgcG9zdGFsQ29kZTogXCJQb3N0YWwgY29kZVwiLFxyXG4gIGxvY2F0aW9uS2FuYTogXCJMb2NhdGlvbiBLYW5hXCIsXHJcbiAgbG9jYXRpb25LYW5qaTogXCJMb2NhdGlvbiBrYW5qaVwiLFxyXG4gIGJvb2ttYXJrU2l0dGVyOiBcIlN1Y2Nlc3NmdWxseSBtYXJrZWQgc2l0dGVyIGFzIGZhdm91cml0ZVwiLFxyXG4gIHVubWFya1NpdHRlcjogXCJTdWNjZXNzZnVsbHkgdW5tYXJrZWQgc2l0dGVyIGFzIGZhdm91cml0ZVwiLFxyXG4gIGVycm9yVXBkYXRpbmdTdGF0dXM6XCJFcnJvciB1cGRhdGluZyBzdGF0dXNcIixcclxuICBwYXk6IFwiUGF5XCIsXHJcbiAgYWNjZXB0ZWRCeVNpdHRlcjogXCJBY2NlcHRlZCBieSBzaXR0ZXJcIixcclxuICBhY2NlcHRlZEJ5WW91OiBcIkFjY2VwdGVkIGJ5IHlvdVwiLFxyXG4gIHBheW1lbnRQZW5kaW5nOiBcIlBheW1lbnQgUGVuZGluZ1wiLFxyXG4gIHBheW1lbnREb25lOiBcIlBhaWRcIixcclxuICBzdGF0dXM6ICdTdGF0dXMnLFxyXG4gIHBheW1lbnRJbmZvcm1hdGlvbjogJ1BheW1lbnQgSW5mb3JtYXRpb24nLFxyXG4gIHNlbGVjdFBheW1lbnRNZXRob2Q6IFwiU2VsZWN0IHBheW1lbnQgbWV0aG9kXCIsXHJcbiAgc2F2ZWRDYXJkczogXCJTYXZlZCBDYXJkc1wiLFxyXG4gIGRvWW91SGF2ZUNvdXBvbjogJ0RvIHlvdSBoYXZlIGEgY291cG9uIGNvZGUgPycsXHJcbiAgY291cG9uRGV0YWlsOiAnIEVudGVyIHlvdXIgY291cG9uIGNvZGUgaGVyZSB0byBhdmFpbCBkaXNjb3VudCBvbiB5b3UgYm9va2luZy4nLFxyXG4gIGNvbmZpcm1Cb29raW5nOiAnQ29uZmlybSBib29raW5nJyxcclxuICBib29raW5nRGV0YWlsczogJ0Jvb2tpbmcgRGV0YWlscycsXHJcbiAgdG90YWxBbW91bnQ6ICdUb3RhbCBBbW91bnQnLFxyXG4gIHRyYW5zcG9ydEZlZTogXCJUcmFuc3BvcnRhdGlvbiBmZWVcIixcclxuICBkaXNjb3VudDogXCJEaXNjb3VudFwiLFxyXG4gIHRheDogJ1RheCcsXHJcbiAgc3ViVG90YWw6ICdTdWJ0b3RhbCcsXHJcbiAgYm9va2luZ1N1Y2Nlc3M6ICdCb29raW5nIFN1Y2Nlc3NmdWwnLFxyXG4gIGJvb2tlZEZvcjogJ1lvdXIgYm9va2luZyBmb3IgJyxcclxuICBpc1N1Y2Nlc3NmdWw6ICcgaXMgc3VjY2Vzc2Z1bC4nLFxyXG4gIGNvbXBsZXRlZDogJ0NvbXBsZXRlZCcsXHJcbiAgY2FuY2VsbGVkOiAnQ2FuY2VsbGVkJyxcclxuICBhZGRpdGlvbmFsU2VydmljZTogXCJBZGRpdGlvbmFsIHNlcnZpY2VzXCIsXHJcbiAgdHJhbnNwb3J0YXRpb25GZWU6ICdUcmFuc3BvcnRhdGlvbiBmZWUnXHJcbn07XHJcblxyXG4iLCJpbXBvcnQgY29va2llcyBmcm9tICduZXh0LWNvb2tpZXMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZShkYXRhKSB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyY2VudCh2YWwpIHtcclxuICByZXR1cm4gdmFsICogMC44O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xyXG4gIHZhciByZSA9XHJcbiAgICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlT2JqZWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBldF90eXBlOiBpZCxcclxuICAgIGN1c3RvbV9zZXJ2aWNlczogW10sXHJcbiAgICBmZWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjYXBhY2l0eTogMSxcclxuICAgICAgICBwZXRfc2l6ZV9pZDogMSxcclxuICAgICAgICBzZXJ2aWNlX2NoYXJnZTogXCIxMDAwXCIsXHJcbiAgICAgICAgZWFybmluZ19hbW91bnQ6IFwiODAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RHJvcEluU2VydmljZU9iamVjdCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwZXRfdHlwZTogaWQsXHJcbiAgICBjdXN0b21fc2VydmljZXM6IFtdLFxyXG4gICAgZmVlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2FwYWNpdHk6IDEsXHJcbiAgICAgICAgcGV0X3NpemVfaWQ6IDEsXHJcbiAgICAgICAgc2VydmljZV9jaGFyZ2U6IFwiMTAwMFwiLFxyXG4gICAgICAgIGVhcm5pbmdfYW1vdW50OiBcIjgwMFwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzMCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHcm9vbWluZ1NlcnZpY2VPYmplY3QgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGV0X3R5cGU6IGlkLFxyXG4gICAgY3VzdG9tX3NlcnZpY2VzOiBbXSxcclxuICAgIGZlZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGdyb29taW5nX3NlcnZpY2VfaWQ6IDEsXHJcbiAgICAgICAgc2VydmljZV9jaGFyZ2U6IFwiMTAwMFwiLFxyXG4gICAgICAgIGVhcm5pbmdfYW1vdW50OiBcIjgwMFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvdXNlQ2FsbFNlcnZpY2VPYmplY3QgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGV0X3R5cGU6IGlkLFxyXG4gICAgY3VzdG9tX3NlcnZpY2VzOiBbXSxcclxuICAgIGZlZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG1lZGljYWxfc2VydmljZV9pZDogMSxcclxuICAgICAgICBzZXJ2aWNlX2NoYXJnZTogXCIxMDAwXCIsXHJcbiAgICAgICAgZWFybmluZ19hbW91bnQ6IFwiODAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FsZW5kYXJTdmcgPSAoaWQpID0+IHtcclxuICB2YXIgc3ZnO1xyXG4gIHN3aXRjaCAoaWQpIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgc3ZnID0gKFxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xvcjFcIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhbFwiXHJcbiAgICAgICAgICAgIGRhdGEtaWNvbj1cImJyaWVmY2FzZVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtYnJpZWZjYXNlIGZhLXctMTYgZmEtMnhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNNDY0IDEyOEgzNTJWNTZjMC0xMy4yNi0xMC43NC0yNC0yNC0yNEgxODRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2NzJINDhjLTI2LjUxIDAtNDggMjEuNDktNDggNDh2MjU2YzAgMjYuNTEgMjEuNDkgNDggNDggNDhoNDE2YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMTc2YzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6TTE5MiA2NGgxMjh2NjRIMTkyVjY0em0yODggMzY4YzAgOC44Mi03LjE4IDE2LTE2IDE2SDQ4Yy04LjgyIDAtMTYtNy4xOC0xNi0xNlYyODhoMTYwdjQwYzAgMTMuMjUgMTAuNzUgMjQgMjQgMjRoODBjMTMuMjUgMCAyNC0xMC43NSAyNC0yNHYtNDBoMTYwdjE0NHpNMjI0IDMyMHYtMzJoNjR2MzJoLTY0em0yNTYtNjRIMzJ2LTgwYzAtOC44MiA3LjE4LTE2IDE2LTE2aDQxNmM4LjgyIDAgMTYgNy4xOCAxNiAxNnY4MHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICBzdmcgPSAoXHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNvbG9yMlwiPlxyXG4gICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFsXCIgZGF0YS1pY29uPVwiaG9tZS1sZy1hbHRcIiByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWhvbWUtbGctYWx0IGZhLXctMTggZmEtMnhcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNTczLjQ4IDIxOS45MUwzMTAuNiA4YTM1Ljg1IDM1Ljg1IDAgMCAwLTQ1LjE5IDBMMi41MyAyMTkuOTFhNi43MSA2LjcxIDAgMCAwLTEgOS41bDE0LjIgMTcuNWE2LjgyIDYuODIgMCAwIDAgOS42IDFMNjQgMjE2LjcyVjQ5NmExNiAxNiAwIDAgMCAxNiAxNmg0MTZhMTYgMTYgMCAwIDAgMTYtMTZWMjE2LjgybDM4LjggMzEuMjlhNi44MyA2LjgzIDAgMCAwIDkuNi0xbDE0LjE5LTE3LjVhNy4xNCA3LjE0IDAgMCAwLTEuMTEtOS43ek0yNDAgNDgwVjMyMGg5NnYxNjB6bTI0MCAwSDM2OFYzMDRhMTYgMTYgMCAwIDAtMTYtMTZIMjI0YTE2IDE2IDAgMCAwLTE2IDE2djE3Nkg5NlYxOTAuOTJsMTg3LjcxLTE1MS40YTYuNjMgNi42MyAwIDAgMSA4LjQgMEw0ODAgMTkxelwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICBzdmcgPSAoXHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNvbG9yM1wiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFyXCJcclxuICAgICAgICAgICAgZGF0YS1pY29uPVwicGVubmFudFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NzYgNTEyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtcGVubmFudCBmYS13LTE4IGZhLTJ4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwiTTU0Mi4zIDE4My41Yy0yMS45IDQuOC0xMDQuNyAxNC4xLTI0Ni40LTYyLjgtNzQuNi00MC40LTEzNy41LTUwLjQtMTg2LjctNDhDMTIxLjUgMzMuNyA5MC45IDAgNTYgMCAyNS4xIDAgMCAyNS4xIDAgNTZjMCAyMi4zIDEzLjIgNDEuNCAzMiA1MC40VjUwNGMwIDQuNCAzLjYgOCA4IDhoMzJjNC40IDAgOC0zLjYgOC04di03NS42YzgwLjgtNTQuMyAxNTYuNC01NS43IDE2NS44LTU2LjIgMjguMi0xLjQgNzQuNS01LjkgMTM1LjEtMTkgNC40LTEgMTA5LTI0LjUgMTg4LjktMTI0LjcgMTYuMS0yMC4yLTEuNS01MC4zLTI3LjUtNDV6TTM3MC44IDMwNi4zYy01Ny41IDEyLjQtMTAxIDE2LjYtMTI3LjQgMTgtNjkuNiAzLjUtMTI1LjYgMjYuMy0xNjMuNCA0Ny45VjEyNGM0NC4xLTguNiAxMDkuNi02LjMgMTkzIDM4LjkgMTAxLjQgNTQuOSAxNzcgNjkuOCAyMjUuOSA3MS41LTYxLjggNTYuNi0xMjcuNCA3MS43LTEyOC4xIDcxLjl6XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICBzdmcgPSAoXHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNvbG9yNFwiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFsXCJcclxuICAgICAgICAgICAgZGF0YS1pY29uPVwiY2xvdWQtc3VuLXJhaW5cIlxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQwIDUxMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNsb3VkLXN1bi1yYWluIGZhLXctMjAgZmEtMnhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMjk4LjIgNDE4LjFjLTcuNi00LjMtMTcuNC0xLjgtMjEuOCA2bC0zNi42IDY0Yy00LjQgNy43LTEuNyAxNy40IDYgMjEuOCAyLjUgMS40IDUuMiAyLjEgNy45IDIuMSA1LjUgMCAxMC45LTIuOSAxMy45LTguMWwzNi42LTY0YzQuNC03LjcgMS43LTE3LjQtNi0yMS44ek0xOTIgMTQwYzI2LjQgMCA0OCAyMCA1MS4xIDQ1LjYgNC44LTMuNiA5LjgtNi45IDE1LjEtOS45IDEuNS04LjQgMy45LTE2LjUgNi44LTI0LjMtMTQuMy0yNS43LTQxLjUtNDMuNC03My00My40LTQ2LjIgMC04My43IDM3LjYtODMuNyA4My44czM3LjUgODMuOCA4My43IDgzLjhjLjMgMCAuNi0uMS45LS4xIDEuMS0xMS40IDMuNy0yMi40IDcuNy0zMi44LTIuOC41LTUuNi45LTguNS45LTI4LjUgMC01MS43LTIzLjItNTEuNy01MS43LS4xLTI4LjYgMjMuMS01MS45IDUxLjYtNTEuOXptLTMxLjcgMTUxLjdjLTMuNi01LjMtOS45LTguMS0xNi40LTYuOGwtNTYgMTEuMUw5OSAyNDBjMS4yLTYuNC0xLjQtMTIuOC02LjgtMTYuNGwtNDcuNC0zMS44TDkyLjIgMTYwYzUuNC0zLjYgOC0xMC4xIDYuOC0xNi40bC0xMS4xLTU2IDU2IDExLjFjNi41IDEuMyAxMi44LTEuNCAxNi40LTYuOEwxOTIgNDQuNGwzMS44IDQ3LjVjMy42IDUuMyAxMCA4LjEgMTYuNCA2LjhMMzE5LjYgODNjOC43LTEuNyAxNC4zLTEwLjEgMTIuNi0xOC44LTEuNy04LjctMTAuMy0xNC41LTE4LjgtMTIuNmwtNjguOSAxMy42LTM5LjItNTguNWMtNS45LTguOS0yMC42LTguOS0yNi42IDBsLTM5LjEgNTguNS02OS0xMy43Yy01LjMtMS4xLTEwLjcuNi0xNC40IDQuNC0zLjggMy44LTUuNCA5LjItNC40IDE0LjVsMTMuNyA2OS01OC40IDM5LjFjLTQuNCAzLTcuMSA3LjktNy4xIDEzLjMgMCA1LjMgMi43IDEwLjMgNy4xIDEzLjNsNTguNCAzOS4xLTEzLjcgNjljLTEgNS4zLjYgMTAuNyA0LjQgMTQuNSAzLjggMy44IDkgNS41IDE0LjQgNC40bDY4LjktMTMuNyAzOS4xIDU4LjVjMy4xIDQuNiA4LjIgNy4xIDEzLjMgNy4xIDMuMSAwIDYuMi0uOSA4LjktMi43IDcuMy00LjkgOS4zLTE0LjkgNC40LTIyLjJsLTQ0LjktNjcuNHptMzI5LjkgMTI2LjRjLTcuNi00LjMtMTcuNC0xLjgtMjEuOCA2bC0zNi42IDY0Yy00LjQgNy43LTEuNyAxNy40IDYgMjEuOCAyLjUgMS40IDUuMiAyLjEgNy45IDIuMSA1LjUgMCAxMC45LTIuOSAxMy45LTguMWwzNi42LTY0YzQuNC03LjcgMS43LTE3LjQtNi0yMS44em04NS4xLTIyMC44QzU3MCAxNTguMiA1MzYuNSAxMjggNDk2IDEyOGMtOC42IDAtMTcgMS40LTI1LjIgNC4zQzQ1MS4xIDEwOS40IDQyMi42IDk2IDM5MiA5NmMtNTYuNSAwLTEwMi43IDQ1LjMtMTA0IDEwMS42LTM3LjggMTMuMy02NCA0OS4zLTY0IDkwLjQgMCA1Mi45IDQzLjEgOTYgOTYgOTZoMjI0YzUyLjkgMCA5Ni00My4xIDk2LTk2IDAtNDEuMy0yNi42LTc3LjYtNjQuNy05MC43ek01NjAgMjA4Ljh6TTU0NCAzNTJIMzIwYy0zNS4zIDAtNjQtMjguNy02NC02NCAwLTMwLjYgMjEuOC01NyA1Mi02Mi44bDE0LjUtMi44LTItMThjLS4yLTEuNS0uNC0yLjktLjQtNC40IDAtMzkuNyAzMi4zLTcyIDcyLTcyIDI0LjMgMCA0Ni44IDEyLjIgNjAuMiAzMi44bDguMSAxMi40IDEzLTcuMWMzMi43LTE3LjggNzAuNyA4LjIgNzAuOCA0MC40bC0uMiAxNi4yIDEyLjggMi42YzI5LjggNiA1MS4zIDMyLjMgNTEuMyA2Mi43LS4xIDM1LjMtMjguOCA2NC02NC4xIDY0em00Mi4yIDY2LjFjLTcuNi00LjMtMTcuNC0xLjgtMjEuOCA2bC0zNi42IDY0Yy00LjQgNy43LTEuNyAxNy40IDYgMjEuOCAyLjUgMS40IDUuMiAyLjEgNy45IDIuMSA1LjUgMCAxMC45LTIuOSAxMy45LTguMWwzNi42LTY0YzQuNC03LjcgMS43LTE3LjQtNi0yMS44em0tMTkyIDBjLTcuNi00LjMtMTcuNC0xLjgtMjEuOCA2bC0zNi42IDY0Yy00LjQgNy43LTEuNyAxNy40IDYgMjEuOCAyLjUgMS40IDUuMiAyLjEgNy45IDIuMSA1LjUgMCAxMC45LTIuOSAxMy45LTguMWwzNi42LTY0YzQuNC03LjcgMS43LTE3LjQtNi0yMS44elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNTpcclxuICAgICAgc3ZnID0gKFxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xvcjVcIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhbFwiXHJcbiAgICAgICAgICAgIGRhdGEtaWNvbj1cImRvZy1sZWFzaGVkXCJcclxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1kb2ctbGVhc2hlZCBmYS13LTE4IGZhLTJ4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwiTTU0NCwxMTJ2NjRhNjQsNjQsMCwwLDEtNjQsNjRINDQ4VjQ4MGEzMiwzMiwwLDAsMS0zMiwzMkgzNTJhMzIsMzIsMCwwLDEtMzItMzJWMzg0SDIyNHY5NmEzMiwzMiwwLDAsMS0zMiwzMkgxMjhhMzIsMzIsMCwwLDEtMzItMzJWMzIwYTk1LDk1LDAsMCwxLDEzLjQ2LTQ4LjI2QTgwLDgwLDAsMCwxLDMyLDE5MmExNiwxNiwwLDAsMSwzMiwwLDQ4LjA1LDQ4LjA1LDAsMCwwLDQ4LDQ4aDI3LjA1QTk1LjQ4LDk1LjQ4LDAsMCwxLDE5MiwyMjRoNzkuOTRMMzQuODgsMjYuNDVhOCw4LDAsMCwxLTEtMTEuMjdMNDQuMTEsMi44OGE4LDgsMCwwLDEsMTEuMjctMUwzMDQsMjA5VjQ4YTE2LDE2LDAsMCwxLDE2LjEyLTE2LDE1LjY3LDE1LjY3LDAsMCwxLDExLjIsNC43MkwzNTguNiw2NGg2OS42MmMxMC45MiwwLDIzLjc0LDcuOTMsMjguNjIsMTcuNjlMNDY0LDk2aDY0QTE2LDE2LDAsMCwxLDU0NCwxMTJaTTI4OCwyNTZIMTkyYTY0LjA3LDY0LjA3LDAsMCwwLTY0LDY0VjQ4MGg2NFYzNTJoOTZabTEyOCwyNi40OC05Ni0yNFYzNTJoMzJWNDgwaDY0Wk01MTIsMTI4SDQ0NC4yMmwtMTYtMzJIMzQ1LjM0TDMzNiw4Ni42NlYyMjkuNTJsODAsMjBWMjA4aDY0YTMyLDMyLDAsMCwwLDMyLTMyWm0tOTYsMGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSw0MTYsMTI4WlwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNjpcclxuICAgICAgc3ZnID0gKFxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xvcjZcIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhbFwiXHJcbiAgICAgICAgICAgIGRhdGEtaWNvbj1cImN1dFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY3V0IGZhLXctMTQgZmEtMnhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMjQ5LjUyIDI1Nkw0NDYuODMgNTguODNhMy45OTYgMy45OTYgMCAwIDAgMC01LjY1Yy0xMi41LTEyLjUtMzIuNzYtMTIuNS00NS4yNSAwTDIyNC4wNiAyMzAuNTZsLTQ4LjY0LTQ4LjYxQzE4NS44OCAxNjYuNTcgMTkyIDE0OCAxOTIgMTI4YzAtNTMuMDItNDIuOTgtOTYtOTYtOTZTMCA3NC45OCAwIDEyOHM0Mi45OCA5NiA5NiA5NmMyMC4wMSAwIDM4LjU4LTYuMTIgNTMuOTYtMTYuNmw0OC42MyA0OC42LTQ4LjYzIDQ4LjZDMTM0LjU4IDI5NC4xMiAxMTYuMDEgMjg4IDk2IDI4OGMtNTMuMDIgMC05NiA0Mi45OC05NiA5NnM0Mi45OCA5NiA5NiA5NiA5Ni00Mi45OCA5Ni05NmMwLTIwLTYuMTItMzguNTctMTYuNTgtNTMuOTVsNDguNjQtNDguNjEgMTc3LjUyIDE3Ny4zOGMxMi41IDEyLjUgMzIuNzYgMTIuNSA0NS4yNSAwYTMuOTk2IDMuOTk2IDAgMCAwIDAtNS42NUwyNDkuNTIgMjU2ek05NiAxOTJjLTM1LjI5IDAtNjQtMjguNzEtNjQtNjRzMjguNzEtNjQgNjQtNjQgNjQgMjguNzEgNjQgNjQtMjguNzEgNjQtNjQgNjR6bTAgMjU2Yy0zNS4yOSAwLTY0LTI4LjcxLTY0LTY0czI4LjcxLTY0IDY0LTY0IDY0IDI4LjcxIDY0IDY0LTI4LjcxIDY0LTY0IDY0elwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNzpcclxuICAgICAgc3ZnID0gKFxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xvcjdcIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhbFwiXHJcbiAgICAgICAgICAgIGRhdGEtaWNvbj1cImhvdXNlXCJcclxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1ob3VzZSBmYS13LTE4IGZhLTJ4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwiTTU3MC41MywyNDIsNTEyLDE5MC43NVY0OGExNiwxNiwwLDAsMC0xNi0xNkg0MDBhMTYsMTYsMCwwLDAtMTYsMTZWNzguNzVMMjk4LjUzLDRhMTYsMTYsMCwwLDAtMjEuMDYsMEw1LjQ3LDI0MmExNiwxNiwwLDAsMCwyMS4wNywyNC4wOUw2NCwyMzMuMjdWNDY0YTQ4LjA1LDQ4LjA1LDAsMCwwLDQ4LDQ4SDQ2NGE0OC4wNSw0OC4wNSwwLDAsMCw0OC00OFYyMzMuMjdsMzcuNDYsMzIuNzlBMTYsMTYsMCwwLDAsNTcwLjUzLDI0MlpNNDgwLDQ2NGExNiwxNiwwLDAsMS0xNiwxNkgxMTJhMTYsMTYsMCwwLDEtMTYtMTZWMjA1LjI3bDE5Mi0xNjgsMTkyLDE2OFptMC0zMDEuMjUtNjQtNTZWNjRoNjRaTTIwOCwyMTguNjdWMzI1LjM0QTI2Ljc1LDI2Ljc1LDAsMCwwLDIzNC42NiwzNTJIMzQxLjNBMjYuNzYsMjYuNzYsMCwwLDAsMzY4LDMyNS4zNFYyMTguNjdBMjYuNzUsMjYuNzUsMCwwLDAsMzQxLjMsMTkySDIzNC42NkEyNi43NCwyNi43NCwwLDAsMCwyMDgsMjE4LjY3Wk0yNDAsMjI0aDk2djk2SDI0MFpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDg6XHJcbiAgICAgIHN2ZyA9IChcclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWxcIlxyXG4gICAgICAgICAgICBkYXRhLWljb249XCJjdXRcIlxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWN1dCBmYS13LTE0IGZhLTJ4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwiTTI0OS41MiAyNTZMNDQ2LjgzIDU4LjgzYTMuOTk2IDMuOTk2IDAgMCAwIDAtNS42NWMtMTIuNS0xMi41LTMyLjc2LTEyLjUtNDUuMjUgMEwyMjQuMDYgMjMwLjU2bC00OC42NC00OC42MUMxODUuODggMTY2LjU3IDE5MiAxNDggMTkyIDEyOGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2UzAgNzQuOTggMCAxMjhzNDIuOTggOTYgOTYgOTZjMjAuMDEgMCAzOC41OC02LjEyIDUzLjk2LTE2LjZsNDguNjMgNDguNi00OC42MyA0OC42QzEzNC41OCAyOTQuMTIgMTE2LjAxIDI4OCA5NiAyODhjLTUzLjAyIDAtOTYgNDIuOTgtOTYgOTZzNDIuOTggOTYgOTYgOTYgOTYtNDIuOTggOTYtOTZjMC0yMC02LjEyLTM4LjU3LTE2LjU4LTUzLjk1bDQ4LjY0LTQ4LjYxIDE3Ny41MiAxNzcuMzhjMTIuNSAxMi41IDMyLjc2IDEyLjUgNDUuMjUgMGEzLjk5NiAzLjk5NiAwIDAgMCAwLTUuNjVMMjQ5LjUyIDI1NnpNOTYgMTkyYy0zNS4yOSAwLTY0LTI4LjcxLTY0LTY0czI4LjcxLTY0IDY0LTY0IDY0IDI4LjcxIDY0IDY0LTI4LjcxIDY0LTY0IDY0em0wIDI1NmMtMzUuMjkgMC02NC0yOC43MS02NC02NHMyOC43MS02NCA2NC02NCA2NCAyOC43MSA2NCA2NC0yOC43MSA2NC02NCA2NHpcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBzdmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbnVtYmVySW5wdXQgPSAoZXZlbnQpID0+IHtcclxuICBpZiAoIS9bMC05XS8udGVzdChldmVudC5rZXkpKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhVVJMdG9GaWxlKGRhdGF1cmwsIGZpbGVuYW1lKSB7XHJcbiAgdmFyIGFyciA9IGRhdGF1cmwuc3BsaXQoXCIsXCIpLFxyXG4gICAgbWltZSA9IGFyclswXS5tYXRjaCgvOiguKj8pOy8pWzFdLFxyXG4gICAgYnN0ciA9IGF0b2IoYXJyWzFdKSxcclxuICAgIG4gPSBic3RyLmxlbmd0aCxcclxuICAgIHU4YXJyID0gbmV3IFVpbnQ4QXJyYXkobik7XHJcblxyXG4gIHdoaWxlIChuLS0pIHtcclxuICAgIHU4YXJyW25dID0gYnN0ci5jaGFyQ29kZUF0KG4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBGaWxlKFt1OGFycl0sIGZpbGVuYW1lLCB7IHR5cGU6IG1pbWUgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCAgZGVsZXRlQ29va2llID0gKG5hbWUpID0+IHtcclxuICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT07IHBhdGg9LzsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVGA7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TmFtZUluaXRpYWxzID0gKG5hbWUpID0+IHtcclxuICBsZXQgcmd4ID0gbmV3IFJlZ0V4cCgvKFxccHtMfXsxfSlcXHB7TH0rLywgXCJndVwiKTtcclxuXHJcbiAgbGV0IGluaXRpYWxzID0gWy4uLm5hbWUubWF0Y2hBbGwocmd4KV0gfHwgW107XHJcblxyXG4gIGluaXRpYWxzID0gKFxyXG4gICAgICAoaW5pdGlhbHMuc2hpZnQoKT8uWzFdIHx8IFwiXCIpICsgKGluaXRpYWxzLnBvcCgpPy5bMV0gfHwgXCJcIilcclxuICApLnRvVXBwZXJDYXNlKCk7XHJcbiAgcmV0dXJuIGluaXRpYWxzO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmZWF0aGVyLWljb25zLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2NhbGl6YXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbImF4aW9zIiwiVV9BQ1RJVkVfQk9BUkRJTkciLCJVX0FDVElWRV9EQVlfQ0FSRSIsIlVfQUNUSVZFX0RST1BfSU5fVklTSVRTIiwiVV9BQ1RJVkVfR1JPT01JTkciLCJVX0FDVElWRV9IT1VTRV9DQUxMIiwiVV9BQ1RJVkVfSE9VU0VfU0lUVElORyIsIlVfQUNUSVZFX1BFVF9XQUxLSU5HIiwiVV9BRERfUEVUIiwiVV9BRERfUVVFU1RJT04iLCJVX0FERF9TS0lMTCIsIlVfQUREX1NQT1QiLCJVX0FSUkFOR19NRUVUVVAiLCJVX0JPQVJESU5HX0RJU0NPVU5UUyIsIlVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFIiwiVV9CT0FSRElOR19QUkVGRVJFTkNFIiwiVV9DSEFOR0VfUkVRVUVTVF9TVEFUVVMiLCJVX0RFTEVURV9QRVQiLCJVX0RFTEVURV9RVUVTVElPTiIsIlVfREVMRVRFX1NQT1QiLCJVX0RPR19XQUxLSU5HX0RJU0NPVU5UIiwiVV9ET0dfV0FMS0lOR19JTkZPIiwiVV9ET0dfV0FMS0lOR19TRVJWSUNFX0ZFRSIsIlVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFIiwiVV9EUk9QX0lOX1ZJU0lURVNfUFJFRkVSRU5DRSIsIlVfRFJPUF9JTl9WSVNJVFNfRElTQ09VTlRTIiwiVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSIsIlVfRklMVEVSRURfQVZBSUxBQkxFX1NJVFRFUiIsIlVfR0VUX0FERFJFU1MiLCJVX0dFVF9BTExfUEVUUyIsIlVfR0VUX0FMTF9TUE9UIiwiVV9HRVRfQVZBSUxBQklMSVRZIiwiVV9HRVRfQVZBSUxBQklMSVRZX0JZX0RBVEVTIiwiVV9HRVRfQVZBSUxBQkxFX1NFUlZJQ0VTIiwiVV9HRVRfQkFTSUNfSU5GTyIsIlVfR0VUX0JPQVJESU5HX0lORk8iLCJVX0dFVF9CT0FSRElOR19QUkVWSUVXIiwiVV9HRVRfQlJFRURfV0lUSF9UWVBFIiwiVV9HRVRfQ0lUSUVTIiwiVV9HRVRfQ09VVFJJRVMiLCJVX0dFVF9EQVNIQk9BUkQiLCJVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXIiwiVV9HRVRfRFJPUF9JTl9QUkVWSUVXIiwiVV9HRVRfRFJPUF9JTl9WSVNJVFNfSU5GTyIsIlVfR0VUX0dST09NSU5HX0lORk8iLCJVX0dFVF9HUk9PTUlOR19QUkVWSUVXIiwiVV9HRVRfSE9VU0VfQ0FMTF9JTkZPIiwiVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXIiwiVV9HRVRfSE9VU0VfQ0FMTF9TRVJWSUNFIiwiVV9HRVRfSE9VU0VfU0lUVElOR19JTkZPIiwiVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXIiwiVV9HRVRfTEFOR0FVR0VTIiwiVV9HRVRfUEFSS0lORyIsIlVfR0VUX1BBWU1FTlRfTUVUSE9EUyIsIlVfR0VUX1BFVFMiLCJVX0dFVF9QRVRfREFZX0NBUkVfUFJFVklFVyIsIlVfR0VUX1BFVF9TRVJWSUNFIiwiVV9HRVRfUEVUX1NQT1RTIiwiVV9HRVRfUVVFU1RJT05TIiwiVV9HRVRfUkVTRVJWQVRJT05fVFlQRVMiLCJVX0dFVF9TRVJWSUNFUyIsIlVfR0VUX1NJTkdMRV9TSVRURVIiLCJVX0dFVF9TSU5HTEVfU1BPVCIsIlVfR0VUX1NJVFRFUl9BVkFJTEFCSUxJVFkiLCJVX0dFVF9TSVRURVJfUkVTRVJWQVRJT05TIiwiVV9HRVRfU0tJTExTIiwiVV9HRVRfU01PS0lOR19DRVNTSU9OUyIsIlVfR0VUX1RIUkVBRF9CT09LSU5HIiwiVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMiLCJVX0dFVF9VU0VSX1NLSUxMUyIsIlVfR1JPT01JTkdfU0VSVklDRV9ESVNDT1VOVCIsIlVfR1JPT01JTkdfU0VSVklDRV9GRUUiLCJVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSIsIlVfSE9VU0VfQ0FMTF9ESVNDT1VOVCIsIlVfSE9VU0VfQ0FMTF9QUkVGRVJFTkNFIiwiVV9IT1VTRV9DQUxMX1NFUlZJQ0VfRkVFIiwiVV9IT1VTRV9TSVRUSU5HX0RJU0NPVU5UUyIsIlVfSE9VU0VfU0lUVElOR19QUkVGRVJFTkNFIiwiVV9IT1VTRV9TSVRUSU5HX1NFUlZJQ0VfRkVFIiwiVV9JTUFHRV9VUExPQUQiLCJVX1BFVF9BRERJVElPTkFMX1JFUVVFU1QiLCJVX1BFVF9BTU9VTlRfQ0FMQ1VMQVRJT04iLCJVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCIsIlVfUEVUX0RBWV9DQVJFX0lORk8iLCJVX1BFVF9EQVlfQ0FSRV9QUkVGRVJFTkNFIiwiVV9QRVRfREFZX0NBUkVfU0VSVklDRV9GRUVTIiwiVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZIiwiVV9QRVRfU1BPVF9DQVRFR09SSUVTIiwiVV9SQVRFX1NJVFRFUiIsIlVfUkVRVUVTVF9TSVRURVIiLCJVX1NBVkVfQUREUkVTUyIsIlVfU0FWRV9CQVNJQ19JTkZPIiwiVV9TQVZFX0xPQ0FMSVRZIiwiVV9TQVZFX1BPUlRGT0xJTyIsIlVfU0VORF9NRVNTQUdFIiwiVV9TRVRfQVZBSUxBQkxFX1NFUlZJQ0VTIiwiVV9TSU5HTEVfUEVUIiwiVV9VUERBVEVfUEVUIiwiVV9VUERBVEVfU1BPVCIsIlVfVVBMT0FEX1BST0ZJTEVfUElDVFVSRSIsIlVfVVNFUl9MT0dJTiIsIlVfVVNFUl9SRUdJU1RFUiIsIlVfQUREX0NBUkQiLCJVX0dFVF9DQVJEIiwiVV9ERUxFVEVfQ0FSRCIsIlVfQUREX0JBTktfQUNDT1VOVCIsIlVfR0VUX0JBTktfQUNDT1VOVCIsIlVfR0VUX0JBTktfREVUQUlMUyIsIlVfREVMRVRFX0JBTktfQUNDT1VOVCIsIlVfR0VUX1BFVF9TUE9UX0RFVEFJTFMiLCJHT09HTEVfUExBQ0VTX0JBU0VfVVJMIiwiR09PR0xFX1BMQUNFU19BUEkiLCJVX1VQTE9BRF9ET0NVTUVOVFMiLCJVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyIsIlVfQUREX1RSQU5TUE9SVF9DSEFSR0VTIiwiVV9VUERBVEVfUkVRVUVTVF9TVEFUVVMiLCJVX0JPT0tNQVJLX1NJVFRFUiIsIlVfR0VUX1JFUVVFU1RfREVUQUlMIiwiVV9DT05GSVJNX1BBWU1FTlQiLCJVX1BBWU1FTlRfSElTVE9SWSIsIlVfR0VUX0ZBVk9SSVRFX1NJVFRFUiIsIlVfQ0hBTkdFX01FRVRVUF9TVEFUVVMiLCJVX0dFVF9NRUVUVVBTIiwiVV9DSEFUX0FDVElPTiIsIlVfR0VUX0ZBVk9SSVRFX1NQT1QiLCJVX01BUktfVU5NQVJLX1NQT1QiLCJVX01BS0VfQ0FSRF9fREVGQVVMVCIsIlVfTUFLRV9CQU5LX0RFRkFVTFQiLCJVX1JFU0VUX1BBU1NXT1JEIiwiVV9DSEFOR0VfUEFTU1dPUkQiLCJVX0ZPUkdPVF9QQVNTV09SRCIsIlVfQVBQTFlfQ09VUE9OIiwiVV9SRU1PVkVfQ09VUE9OIiwiVV9HRVRfQ09VUE9OIiwiVV9SRUFEX1NUQVRVUyIsIlVfUkVWSUVXX1NQT1QiLCJVX0dFVF9ORVdTIiwiVV9HRVRfRVZFTlQiLCJVX0dFVF9TSU5HTEVfTkVXUyIsIkNvb2tpZXMiLCJuZXh0Q29va2llIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJ0b2tlbiIsIkF1dGhvcml6YXRpb24iLCJyZXF1ZXN0IiwibWV0aG9kIiwicGF0aCIsImJvZHkiLCJjdHgiLCJ1cmwiLCJjb29raWVzIiwiZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJBUEkiLCJpZCIsImFwaVVybCIsInJlc3VsdCIsInJlZ2lzdGVyVXNlciIsImxvZ2luVXNlciIsInJlc2V0UGFzc3dvcmQiLCJjaGFuZ2VQYXNzd29yZCIsImZvcmdvdFBhc3N3b3JkIiwiZ2V0RGFzaGJvYXJkIiwiZ2V0QmFzaWNJbmZvIiwiZ2V0QWRkcmVzcyIsInNhdmVCYXNpY0luZm8iLCJzYXZlQWRkcmVzcyIsImFkZFF1ZXN0aW9uIiwiZGVsZXRlUXVlc3Rpb24iLCJ2YWwiLCJnZXRRdWVzdGlvbnMiLCJnZXRTa2lsbHMiLCJnZXRVc2VyU2tpbGxzIiwiYWRkU2tpbGwiLCJzYXZlTG9jYWxpdHlJbmZvIiwic2F2ZVBvcnRmb2xpbyIsImdldEF2YWlsYWJsZVNlcnZpY2VzIiwic2V0QXZhaWxhYmxlU2VydmljZSIsImdldEF2YWlsYWJpbGl0eSIsImdldEF2YWlsYWJpbGl0eUJ5RGF0ZSIsImFkZFBldCIsImdldEFsbFBldHMiLCJnZXRTaW5nbGVQZXRzIiwidXBkYXRlUGV0IiwiZGVsZXRlUGV0IiwiZ2V0U2VydmljZSIsImFjdGl2ZUJvYXJkaW5nIiwiYWN0aXZlRGF5Q2FyZSIsImFjdGl2ZUhvdXNlU2l0dGluZyIsImFjdGl2ZURyb3BJblZpc2l0cyIsImFjdGl2ZVBldFdhbGtpbmciLCJhY3RpdmVHcm9vbWluZyIsImFjdGl2ZUhvdXNlQ2FsbCIsImdldEhvdXNlQ2FsbEluZm8iLCJnZXRIb3VzZUNhbGxTZXJ2aWNlIiwiaG91c2VDYWxsU2VydmljZUZlZSIsImhvdXNlQ2FsbFByZWZlcmVuY2UiLCJob3VzZUNhbGxEaXNjb3VudCIsImdldEhvdXNlQ2FsbFByZXZpZXciLCJnZXRHcm9vbWluZ1NlcnZpY2UiLCJnZXRHcm9vbWluZ0luZm8iLCJncm9vbWluZ1NlcnZpY2VGZWUiLCJncm9vbWluZ1NlcnZpY2VQcmVmZXJuY2UiLCJncm9vbWluZ1NlcnZpY2VEaXNjb3VudCIsImdldEdyb29taW5nUHJldmlldyIsImJvYXJkaW5nU2VydmljZUZlZSIsImJvYXJkaW5nUHJlZmVyZW5jZSIsImJvYXJkaW5nRGlzY291bnQiLCJnZXRCb2FyZGluZ0luZm8iLCJnZXRCb2FyZGluZ1ByZXZpZXciLCJnZXRIb3VzZVNpdHRpbmdJbmZvIiwiaG91c2VTaXR0aW5nU2VydmljZUZlZSIsImhvdXNlU2l0dGluZ0Rpc2NvdW50IiwiaG91c2VTaXR0aW5nUHJlZmVyZW5jZSIsImdldEhvdXNlU2l0dGluZ1ByZXZpZXciLCJnZXREcm9wSW5WaXNpdHNJbmZvIiwiZHJvcEluVmlzaXRzU2VydmljZUZlZSIsImRyb3BJblZpc2l0UHJlZmVyZW5jZSIsImRyb3BJblZpc2l0RGlzY291bnRzIiwiZ2V0RHJvcEluVmlzaXRzUHJldmlldyIsImdldFBldERheUNhcmVJbmZvIiwicGV0RGF5Q2F0ZVNlcnZpY2VGZWUiLCJwZXREYXlDYXJlUHJlZmVyZW5jZSIsInBldERheUNhcmVEaXNjb3VudCIsImdldFBldERheUNhcmVQcmV2aWV3IiwiZ2V0RG9nV2Fsa2luZ0luZm8iLCJEb2dXYWxraW5nU2VydmljZUZlZSIsImRvZ1dhbGtpbmdQcmVmZXJlbmNlIiwiZG9nV2Fsa2luZ0Rpc2NvdW50IiwiZ2V0RG9nV2Fsa2luZ1ByZXZpZXciLCJwZXRBZGRpdGlvbmFsU2VydmljZXMiLCJwZXRBbW91bnRDYWxjdWxhdGlvbiIsInNpdHRlclJlcXVlc3QiLCJjaGFuZ2VSZXF1ZXN0U3RhdHVzIiwicGV0U2VydmljZUF2YWlsYWJpbGl0eSIsImdldFNpdHRlclJlc2VydmV0aW9ucyIsInBhZ2UiLCJnZXRVc2VyUmVzZXJ2YXRpb25zIiwic2VuZE1lc3NhZ2UiLCJjaGF0QWN0aW9uIiwiZ2V0VGhyZWFkQm9va2luZyIsImFycmFuZ2VNZWV0dXAiLCJ1cGRhdGVNZWV0dXBTdGF0dXMiLCJnZXRNZWV0dXBSZXF1ZXN0IiwiZ2V0VHJhbnNwb3J0Q2hhcmdlUmVxdWVzdCIsImFkZFRyYW5zcG9ydENoYXJnZVJlcXVlc3QiLCJ1cGRhdGVSZXF1ZXN0U3RhdHVzIiwidXBkYXRlUmVhZFN0YXR1cyIsImdldENvdXRpcmVzIiwiZ2V0Q2l0aWVzIiwiZ2V0UGV0cyIsImdldEJyZWVkV2l0aFR5cGUiLCJ1cGxvYWRGaWxlIiwiZ2V0RmlsdGVyZWRBdmlhbGFibGVTaXR0ZXIiLCJnZXRGYXZvcml0ZVNpdHRlcnMiLCJ1cGxvYWRQcm9maWxlUGljdHVyZSIsInVwbG9hZERvY3VtZW50IiwiZ2V0UGV0U3BvdHNDYXRlZ29yeSIsImdldFBldFNwb3RzIiwibWFya1VubWFya1Nwb3QiLCJnZXRQZXRTcG90RGV0YWlscyIsImdldFBheW1lbnRNZXRob2RzIiwiZ2V0UmVzZXJ2YXRpb25UeXBlcyIsImdldFNtb2tpbmdDZXNzaW9uIiwiZ2V0UGFya2luZyIsImdldExhbmdhdWdlcyIsImFkZFNwb3QiLCJ1cGRhdGVTcG90IiwicmF0ZVNpdHRlciIsImdldFNpbmdsZVNpdHRlciIsIm1hcmtVbm1hcmtTaXR0ZXIiLCJnZXRBbGxTcG90cyIsImdldEZhdm9yaXRlU3BvdHMiLCJkZWxldGVTcG90IiwiZ2V0U2luZ2xlU3BvdCIsImdldFNpdHRlckF2YWlsYWJpbGl0eSIsInJhdGVSZXZpZXdTcG90IiwiYWRkTmV3Q2FyZCIsImdldEFsbENhcmQiLCJkZWxldGVDYXJkIiwiYWRkTmV3QmFua0FjY291bnQiLCJnZXRBbGxCYW5rQWNjb3VudCIsImdldEFsbEJhbmtBY2NvdW50RGV0YWlscyIsIm1hcmtDYXJkQXNEZWZhdWx0IiwibWFrZUJhbmtBc0RlZmF1bHQiLCJkZWxldGVCYW5rQWNjb3VudCIsImdldFNpbmdsZVJlcXVlc3REZXRhaWwiLCJjb25maXJtUGF5bWVudCIsInBheW1lbnRIaXN0b3J5IiwiYXBwbHlDb3Vwb24iLCJyZW1vdmVDb3Vwb24iLCJnZXRDb3Vwb25zIiwidHlwZSIsImdldE5ld3MiLCJnZXRFdmVudHMiLCJnZXRTaW5nbGVOZXdzIiwiU3VjY2Vzc09wdGlvbnMiLCJwb3NpdGlvbiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImNsb3NlU3R5bGUiLCJGYWlsdXJlT3B0aW9ucyIsIlJlYWN0Iiwicm91dGVyIiwiY29va2llIiwid2l0aEF1dGgiLCJDb21wb25lbnQiLCJBdXRoIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJnZXRJbml0aWFsUHJvcHMiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsInN0cmluZ3MiLCJkZWxldGVDb29raWUiLCJGZWF0aGVySWNvbiIsImFwaSIsIlNpZ25JbiIsInNldFN0YXRlIiwic2hvd1Bhc3MiLCJyZW1lbWJlck1lIiwidGhhdCIsImVycm9ycyIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicGhvbmVfbnVtYmVyIiwicHJvZmlsZV9waWN0dXJlIiwibG9nIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVJlZiIsIm9uVGV4dENoYW5nZSIsInRvZ2dsZVNlY3VyZVBhc3N3b3JkIiwiY2hlY2tib3hPbkNoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwicGFzcyIsInJlbmRlciIsIldlbGNvbWVhZ2FpbiIsIkVtYWlsYWRkcmVzcyIsIlJlbWVtYmVybWUiLCJGb3Jnb3RwYXNzd29yZCIsIkxvZ2luIiwib3IiLCJDb250aW51ZXdpdGhGYWNlYm9vayIsIkNvbnRpbnVld2l0aEdvb2dsZSIsIkNvbnRpbnVld2l0aFR3aXR0ZXIiLCJDb250aW51ZXdpdGhMaW5lIiwiRG9udGhhdmVhbmFjY291bnQiLCJ0ZXh0RGVjb3JhdGlvbiIsIlJlZ2lzdGVybm93IiwiTG9jYWxpemVkU3RyaW5ncyIsImVuZyIsInNlYXJjaFNpdHRlciIsImJlY29tZUFTaXR0ZXIiLCJvdXJTZXJ2aWNlcyIsInNpZ25VcCIsInNpZ25JbiIsImhlbHAiLCJleHBsb3JlIiwiY29tcGFueSIsImFib3V0VXMiLCJjb250YWN0IiwiY2FyZWVyIiwicHJpdmFjeVBvbGljeSIsInRlcm1zT2ZVc2VyIiwiY29va2llUG9saWN5IiwicGV0U3BvdHMiLCJibG9ncyIsImZhcXMiLCJzYWZldHkiLCJuZXdzQW5kU2FmZXR5IiwibmV3c3Jvb20iLCJldmVudHNBbmRVcGRhdGVzIiwic3RheUNvbm5lY3RlZCIsInN1YnNjcmliZSIsImZvbGxvd1BldGNhdGlvbiIsImFkZFlvdXJQZXRTcG90IiwiYWxsUmlnaHRzUmVzZXJ2ZWQiLCJsb3ZlQ2FyZUFuZEFsbE5lZWRzRm9yUGV0cyIsImJvb2tUcnVzdGVkU2l0dGVycyIsInlvdXJQZXQiLCJ5YWFQZXRMb3ZlcnMiLCJ3ZU1hZGVJdFN1cGVyRWFzeVRpdGxlIiwicGV0Qm9hcmRpbmciLCJ3ZU1hZGVJdFN1cGVyRWF6eVBldEJvYXJkaW5nIiwiaG91c2VTaXR0aW5nIiwiZHJvcEluVmlzaXRzIiwicGV0RGF5Q2FyZSIsImRvZ1dhbGtpbmciLCJob3VzZUNhbGwiLCJncm9vbWluZyIsImJvb2tXaXRoUHJvZmVzc2lvbmFsUGV0U2l0dGVyIiwidmVyaWZpZWRQZXRTaXR0ZXJzIiwiQWxsU2l0dGVyUGFzc0FCYXNpY0NoZWNrIiwia25vd1NpdHRlclBlcnNvbmFsbHkiLCJBbGxTaXR0ZXJzUHJvdmlkZSIsIkNlcnRpZmllZFBldFNpdHRlcnMiLCJBbGxTaXR0ZXJzSGF2ZUFuaW1hbENlcnRpZmljYXRpb25zIiwiYm9va1lvdXJQZXRjYXRpb25TaXR0ZXIiLCJwZXRjYXRpb25HdWFyYW50ZWUiLCJBbGxTZXJ2aWNlc0Jvb2tlZE9uUGV0Y2F0aW9uIiwid2h5Q2hvb3NlUGV0Y2F0aW9uIiwiZmluZFRoZVBlcmZlY3RIb3VzZUtlZXBlciIsInZlcmlmaWVkU2l0dGVycyIsImFsbFBldGNhdGlvblNpdHRlcnNIYXZlUGFzc2VkT3VyIiwicHJvZmVzc2lvbmFsQ2FyZSIsInlvdXJQZXRzU2FmZXR5SXNPdXJUb3BQcmlvcml0eSIsInMyNDdzdXBwb3J0IiwiV2VBcmVIZXJlVG9IZWxwWW91QW5kWW91clBldCIsInBldGNpdGF0aW9uZm9yUGV0T3duZXJzIiwic2VhcmNoQW5kQ29ubmVjdFdpdGhUcnVzdGVkIiwiZmluZEFWZXJpZmllZFBldFNpdHRlciIsInNlYXJjaEFuZEZpbmRFeHBlcmllbmNlZExvY2FsIiwiYXJyYW5nZUFNZWV0R3JlZXQiLCJnZXRUb0tub3dZb3VyU2l0dGVyIiwiYm9va1NhZmVseU9ubGluZVBheW1lbnRzIiwiYm9va1lvdXJTaXR0ZXJUaHJvdWdoT3VyU2FmZU9ubGluZSIsInByb3BlclVwZGF0ZXMiLCJvbmNlSm9iQ29tcGxldGVzWW91Q2FuUmF0ZSIsInJhdGluZ0FuZFJldmlld3MiLCJleHBsb3JlT3VyU2l0dGVyIiwicGV0Y2F0aW9uRm9yUGV0U2l0dGVycyIsIndhbm5hQmVQYXJ0bmVyV2l0aFVzIiwid2hhdEV2ZXJQZXRTZXJ2aWNlWW91UHJvdmlkZSIsInMxMDBWZXJpZmllZGpvYnMiLCJFYXN5cHJvZmlsZXZlcmlmaWNhdGlvbnMiLCJJbnN0YW50cGF5b3V0cyIsIkxpc3R5b3VyYm9hcmRpbmciLCJCZWNvbWVhcGV0c2l0dGVyIiwidXBkYXRlV2hlbklNb3ZlVGhlTWFwIiwiU2F2ZVNlYXJjaCIsImFwcGx5IiwibW9yZSIsIkFsbFByaWNlcyIsIkhvd21hbnlwZXRzIiwiRG9nc2l6ZSIsIlBldHR5cGVzIiwiSG93b2Z0ZW55b3V3YW50c2VydmljZSIsIkNoZWNrX291dCIsIkNoZWNrX2luIiwiUGV0Y2F0aW9uVmVyaWZpZWQiLCJQZXRjYXRpb25Ob3RWZXJpZmllZCIsIk9ubGluZW5vdyIsIlBldHN0YWtlbmNhcmUiLCJIYXBweUN1c3RvbWVycyIsIlJlaGlyZXJhdGUiLCJFeHBlcmllbmNlIiwiTXlwZXRzIiwiQWJvdXRwbGFjZSIsIkFkZGl0aW9uYWxTa2lsbHMiLCJSZXZpZXdzIiwiT3ZlcmFsbHJhdGluZyIsIkNsZWFubGluZXNzIiwiQWNjdXJhY3kiLCJDb21tdW5pY2F0aW9uIiwiTG9jYXRpb24iLCJWYWx1ZSIsIkF2YWlsYWJpbGl0eSIsIkF2YWlsYWJsZSIsIlVuYXZhaWxhYmxlIiwiQm9hcmRpbmdDYW5jZWxsYXRpb25wb2xpY3kiLCJFeHRyYWluZm9hYm91dGxvY2FsaXR5IiwiRGFzaGJvYXJkIiwiUmVzZXJ2YXRpb25zIiwiTXlwcm9maWxlIiwiTXlTZXJ2aWNlcyIsIkZhdm91cml0ZVNpdHRlcnMiLCJNeXNwb3RzIiwiUGFzc3dvcmRBbmRTZWN1cml0eSIsIlBheW1lbnRzQW5kcGF5b3V0cyIsIlBheW1lbnRoaXN0b3J5IiwiR2xvYmFscHJlZmVyZW5jZXMiLCJQb2ludHNBbmRjb3Vwb24iLCJUb3RhbEJvb2tpbmdzIiwiV2VlayIsIlRvdGFsRWFybmluZ3MiLCJUb3RhbFJlZmVycmFsIiwiTGF0ZXN0Qm9va2luZ1JlcXVlc3RzIiwiVmlld0FsbCIsIkZyb20iLCJUbyIsIlRvdGFsIiwiQWNjZXB0IiwiUGVuZGluZyIsIk1ha2VQYXltZW50IiwiRWRpdCIsIlJlbW92ZSIsIk1lZXRpbmdSZXF1ZXN0cyIsIk15UG9ydGZvbGlvIiwiYXJlWW91U3VyZSIsImFkZEF2YWlsYWJpbGl0eSIsIkFkZG1vcmVpbWFnZXMiLCJOZXdzRmVlZHMiLCJFeGNlbGxlbnQiLCJWaWV3UHJvZmlsZSIsIkV4cGxvcmVhbWF6aW5ncGxhY2VzIiwiUGV0Y2FyZSIsIlNlZWFsbCIsIkttc2Zyb215b3VyY3VycmVudGxvY2F0aW9uIiwicmVzcG9uc2VyYXRlIiwiU2VlYXZhaWxhYmlsaXR5IiwiU2VlQWRkaXRpb25hbFNlcnZpY2VzUmF0ZXMiLCJBZGRyZXNzIiwiQ2xpZW50IiwiTWVldGF0IiwiUmVqZWN0IiwiQ2FuY2VsIiwiUmVqZWN0ZWQiLCJQYXltZW50IiwiQmFzaWNpbmZvIiwiQWRkcmVzc0luZm8iLCJEZWZhdWx0YXZhaWxhYmlsaXR5IiwiTW9uZGF5IiwiVHVlc2RheSIsIldlZG5lc2RheSIsIlRodXJzZGF5IiwiRnJpZGF5IiwiQWRkc2xvdCIsIlNhdHVyZGF5IiwiU2F2ZSIsIkhvbWVBZGRyZXNzTGluZSIsIkFwdEhvdXNlTm8iLCJDaXR5IiwiU3RhdGVvcnByb3ZpbmNlIiwiWklQcG9zdGFscG9zdGNvZGUiLCJGdWxsbmFtZSIsImVudGVyRW1haWxBZGRyZXNzIiwiZW50ZXJPdHAiLCJlbnRlck5ld1Bhc3N3b3JkIiwiZW50ZXJPbGRQYXNzd29yZCIsImVudGVyQ29uZmlybVBhc3N3b3JkIiwib3RwIiwibmV3UGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsIkNvbnRhY3RudW1iZXIiLCJCaXJ0aGRhdGUiLCJhZGRTZXJ2aWNlRmlyc3QiLCJQcm9maWxldmVyaWZpY2F0aW9uIiwidXBsb2FkSW1hZ2VUZXh0IiwiU2VsZWN0SURjYXJkdHlwZSIsIlBhc3Nwb3J0IiwiVmVyaWZ5bXlwcm9maWxlIiwiTGlzY2Vuc2V2ZXJpZmljYXRpb24iLCJ1cGxvYWRsaXNjZW5zZVRleHQiLCJBZGRuZXdwZXQiLCJJaGF2ZSIsIkRvZyIsIkNhdCIsIkJpcmRzIiwiUmVwdGlsZXMiLCJTbWFsbGFuaW1hbHMiLCJOYW1lIiwiV2VpZ2h0IiwiQWdlIiwiQnJlYWQiLCJTZXgiLCJXaGljaHNlcnZpY2Vzd291bGR5b3VsaWtldG9vZmZlciIsIlNldHNlcnZpY2VzdG9jYXRpdmUiLCJTYXZlYW5kQ29udGludWUiLCJBQ1RJVkUiLCJJTlNUQU5UQk9PS0lORyIsIk1hbmFnZSIsIkFsbHNlcnZpY2VzIiwiQm9hcmRpbmciLCJTZXJ2aWNlIiwiV2hhdGlzIiwib25QZXRjYXRpb24iLCJTZXJ2aWNlQW5kRmVlcyIsIlByZWZlcmVuY2VzIiwiRGlzY291bnRzIiwiU3BlY2lhbGRpc2NvdW50Zm9yeW91cmd1ZXN0cyIsIm9mZm9uZmlyc3Rib29raW5nd2l0aHlvdSIsIkFsbG93b2ZvbmJvb2tpbmdhbW91bnQiLCJOb29mZmVyb250aGlzc2VydmljZSIsIkxlbmd0aG9mc3RheWRpc2NvdW50IiwiV2Vla2x5ZGlzY291bnQiLCJUaGlzZGlzY291bnR3aWxsYXBwbHl0b2FueXJlc2VydmF0aW9uIiwiTW9udGhseWRpc2NvdW50IiwiWW91cmF2YWlsYWJpbGl0eXdoaWxlcGV0aXNhdGJvYXJkaW5nIiwiWW91Y2Fuc2VsZWN0ZnJvbXRoZW9wdGlvbnNwYXJ0cyIsIndoZW5ob3N0aW5ncGV0c2lueW91cmhvbWVob3dmcmVxdWVudGx5Y2FueW91cHJvdmlkZWJyZWFrcyIsImhvd2ZyZXF1ZW50bHljYW55b3Vwcm92aWRlcG90dHlicmVha3MiLCJDYW55b3VwaWNrdXBwZXRmcm9tY2xpZW50cGxhY2UiLCJwZXRUeXBlIiwic2VydmljZVR5cGUiLCJyZXNlbmQiLCJDcmVhdGV5b3VyZnJlZWFjY291bnR0b2RheSIsIkZpcnN0bmFtZSIsIkxhc3RuYW1lIiwiRGF0ZW9mQmlydGgiLCJyZWdpc3RlclRlcm0iLCJKb2lubm93IiwiQWxyZWFkeWhhdmVhbmFjY291bnQiLCJGb3Jnb3R5b3VycGFzc3dvcmQiLCJSZXNldHlvdXJwYXNzd29yZCIsImZvcmdvdFBhc3N3b3JkSW5zdHJ1Y3Rpb24iLCJyZXNldFBhc3N3b3JkSW5zdHJ1Y3Rpb24iLCJTdWJtaXQiLCJCb29raW5nYnltZSIsIkJvb2tpbmdmb3JtZSIsIlJlcXVlc3RieW1lIiwiUmVxdWVzdGZvcm1lIiwiU2l0dGVycmVzZXJ2YXRpb25zIiwiQ2xpZW50cmVzZXJ2YXRpb25zIiwiTXlGYXZvdXJpdGVzIiwiTXlSZXZpZXdzIiwiU3BvdHMiLCJBZGRuZXdzcG90IiwiQXZhaWxhYmxlZm9yIiwiUmVwZWF0Q2xpZW50cyIsIlNvcnRieSIsIlJlY2VudGx5QWRkZWQiLCJDcmVhdGVuZXdwZXRzcG90IiwiR2VuZXIiLCJHZW5kZXIiLCJpZEltYWdlIiwiTGlzY2Vuc2VOdW1iZXIiLCJ2ZXJpZnlNeUNlcnRpZmljYXRlIiwiY2xpY2tUb1VwbG9hZCIsIlNlbGVjdHNwb3RjYXRlZ29yeSIsImJhc2ljaW5mbyIsIlNwb3RpbWFnZXMiLCJBZGRtb3JlIiwiQ29uZmlybSIsIkRldGFpbGVkaW5mb0FtZW5pdGllcyIsIlJlc2VydmF0aW9ucG9zc2libGUiLCJCdWRnZXRQYXltZW50IiwiQnVkZ2V0IiwiQ2FyZHMiLCJzZXJ2aWNlQ2hyYWdlIiwibWV0aG9kT2ZQYXltZW50IiwiQmFua2luZ0luZm8iLCJEZWxldGVDYXJkIiwiU2V0RGVmYXVsdCIsIkFkZG5ld2NhcmQiLCJiYW5rUGF5bWVudCIsIkVudGVySGVyZSIsIlJlamVjdFJlcXVlc3QiLCJwYXNzcG9ydE51bWJlciIsInBheW1lbnROb3RlIiwibm9DYXJkQWRkZWRUaXRsZSIsIm5vUmVzZXJ2YXRpb24iLCJub0NvdXBvbnMiLCJub1BldHMiLCJub1JlcXVlc3QiLCJub0JhbmtBZGRlZFRpdGxlIiwiYWRkQ2FyZFVzaW5nRm9ybSIsImFkZEJhbmtVc2luZ0Zvcm0iLCJub01zZ1lldCIsImVudGVyQ2FyZE51bWJlciIsIk5hbWVvbmNhcmQiLCJzZXREZWZhdWx0Q2FyZCIsIkNhcmRudW1iZXIiLCJFeHBpcmF0aW9uIiwiQWRkY2FyZCIsIkFkZG5ld2JhbmthY2NvdW50IiwiVHlwZW9mYWNjb3VudCIsIlBlcnNvbmFsQWNjb3VudCIsIkJ1c2luZXNzQWNjb3VudCIsIkJhbmtDb3VudHJ5IiwiQmFua0N1cnJlbmN5IiwiQmFua05hbWUiLCJCcmFuY2hOYW1lIiwiRW50ZXJBY2NvdW50TnVtYmVyIiwiUm91dGluZ051bWJlciIsIkVudGVyUm91dGluZ051bWJlciIsIkJhbmtDb2RlIiwiQmFua05hbWVIZXJlIiwiQWNjb3VudEhvbGRlck5hbWUiLCJBY2NvdW50SG9sZGVyTmFtZUhlcmUiLCJCcmFuY2hDb2RlIiwiQWNjb3VudE51bWJlciIsIkFjY291bnRUeXBlIiwiQmFua0FjY291bnRUeXBlIiwiQWRkbmV3YWNjb3VudCIsIkJhbmtBY2NvdW50TnVtYmVyIiwiUGF5bWVudEhpc3RvcnkiLCJXaXRoZHJhd01vbmV5IiwiRWFybmluZ3MiLCJQZW5kaW5nRWFybmluZ3MiLCJXaXRoZHJhd2FscyIsIlBheW1lbnRzIiwiT3RoZXIiLCJZb3VyRXhwZWN0ZWRFYXJuaW5ncyIsInRvdGFsUGF5YWJsZUFtb3VudCIsIkNvbnRhY3Rub3ciLCJWaWV3ZGV0YWlscyIsIkxvb2tpbmdmb3JhUGV0U3BvdCIsIlNlYXJjaCIsIlByb3ZpZGVzcG90aW5mb3JtYXRpb24iLCJQcm92aWRlc3BvdCIsImluZm9ybWF0aW9uIiwiQ2F0ZWdvcmllcyIsIkZpbmRiZXN0cGV0c3BvdHMiLCJSZXN0YXVyYW50Q2FmZSIsIkRvZ3J1bnMiLCJQZXRHcm9vbWluZyIsIkxlaXN1cmVPdXRkb29yIiwiUGV0ZnJpZW5kbHlIb3RlbCIsIlBhcmsiLCJUcmF2ZWwiLCJBbmltYWxTaGVsdGVyIiwiWW91Y2FuZmluZHNwb3RzaW5wbGFjZXMiLCJUb2t5byIsIk9zYWthIiwiS3lvdG8iLCJTYXBwb3JvIiwiTmFnb3lhIiwiS29iZSIsIlNlbmRhaSIsIkNoaWJhIiwiRmVhdHVyZWRTcG90cyIsIkxvYWRtb3JlIiwiTWFya3lvdXJhdmFpbGFiaWxpdHkiLCJOb3RpZmljYXRpb25zIiwibm9TaXR0ZXJGb3VuZCIsIlJlY2VpdmVtZXNzYWdlc2Zyb21ob3N0cyIsIkVtYWlsIiwiVGV4dG1lc3NhZ2UiLCJCcm93c2Vybm90aWZpY2F0aW9uIiwiWW91Y2FubWFya3BpY2t1cHNlcnZpY2VlbmFibGUiLCJSZW1pbmRlcnMiLCJSZWNlaXZlYm9va2luZ3JlbWluZGVycyIsIlByb21vdGlvbnNhbmR0aXBzIiwiUGhvbmVjYWxscyIsIkdlbmVyYWxwcmVmZXJlbmNlcyIsIkxhbmd1YWdlIiwiU2V0eW91cnByZWZlcmVkbGFuZ3VhZ2Vmb3JQZXRjYXRpYW9uIiwiQ291bnRyeSIsIkN1cnJlbmN5IiwiU2VsZWN0Y3VycmVuY3lmb3JhbGx5b3VydHJhbnNhY3Rpb25zIiwiUGFzc3dvcmRzZXR0aW5ncyIsIldoYXRwZXRzd291bGR5b3VwcmVmZXJmb3J0aGlzc2VydmljZSIsImJvYXJkaW5nU2VydmljZWRlc2NyaXB0aW9uIiwiRmxleGlibGUiLCJNb2RlcmF0ZSIsIlN0cmljdCIsIkRveW91Y2hhcmdldHJhbnNwb3J0YXRpb25mZWUiLCJNaW5QcmljZSIsIk1heFByaWNlIiwiTWFrZWJvb2tpbmd3aXRoIiwiQm9va2luZ2ZvciIsIk5lZWRzaXR0ZXJ0b3BpY2t1cG15cGV0cyIsIlF1ZXN0aW9ucyIsIlNlbGVjdHNraWxscyIsInJlc3RhdXJhbnROYW1lIiwicmV2aWV3cyIsImF3YXJkcyIsImdlbmVyIiwidHJhbnNwb3J0YXRpb24iLCJzcG90SG9saWRheXMiLCJzZXJ2aWNlQ2hhcmdlcyIsInJlc2VydmF0aW9ucyIsInNtb2tpbmciLCJwYXJraW5nIiwic2VydmljZUFtZW5pdGllcyIsImFkZGVkQmFua0FjY291bnQiLCJsYW5ndWFnZXMiLCJub29uQ2hhcmdlcyIsIm5pZ2h0Q2hhcmdlcyIsImVudGVyQmFua05hbWUiLCJicmFuY2hOYW1lIiwiYnJhbmNoQ29kZSIsImFjY291bnRIb2xkZXJOYW1lIiwiYWNjb3VudE51bWJlciIsInJvdXRpbmdOdW1iZXIiLCJlbnRlckxvY2F0aW9uIiwiYmFua0NvZGUiLCJlbnRlclppcENvZGUiLCJwb3N0YWxDb2RlIiwibG9jYXRpb25LYW5hIiwibG9jYXRpb25LYW5qaSIsImJvb2ttYXJrU2l0dGVyIiwidW5tYXJrU2l0dGVyIiwiZXJyb3JVcGRhdGluZ1N0YXR1cyIsInBheSIsImFjY2VwdGVkQnlTaXR0ZXIiLCJhY2NlcHRlZEJ5WW91IiwicGF5bWVudFBlbmRpbmciLCJwYXltZW50RG9uZSIsInBheW1lbnRJbmZvcm1hdGlvbiIsInNlbGVjdFBheW1lbnRNZXRob2QiLCJzYXZlZENhcmRzIiwiZG9Zb3VIYXZlQ291cG9uIiwiY291cG9uRGV0YWlsIiwiY29uZmlybUJvb2tpbmciLCJib29raW5nRGV0YWlscyIsInRvdGFsQW1vdW50IiwidHJhbnNwb3J0RmVlIiwiZGlzY291bnQiLCJ0YXgiLCJzdWJUb3RhbCIsImJvb2tpbmdTdWNjZXNzIiwiYm9va2VkRm9yIiwiaXNTdWNjZXNzZnVsIiwiY29tcGxldGVkIiwiYWRkaXRpb25hbFNlcnZpY2UiLCJ0cmFuc3BvcnRhdGlvbkZlZSIsImRlZXBDbG9uZSIsImdldFBlcmNlbnQiLCJ2YWxpZGF0ZUVtYWlsIiwiZ2V0U2VydmljZU9iamVjdCIsInBldF90eXBlIiwiY3VzdG9tX3NlcnZpY2VzIiwiZmVlcyIsImNhcGFjaXR5IiwicGV0X3NpemVfaWQiLCJzZXJ2aWNlX2NoYXJnZSIsImVhcm5pbmdfYW1vdW50IiwiZ2V0RHJvcEluU2VydmljZU9iamVjdCIsImR1cmF0aW9uIiwiZ2V0R3Jvb21pbmdTZXJ2aWNlT2JqZWN0IiwiZ3Jvb21pbmdfc2VydmljZV9pZCIsImdldEhvdXNlQ2FsbFNlcnZpY2VPYmplY3QiLCJtZWRpY2FsX3NlcnZpY2VfaWQiLCJnZXRDYWxlbmRhclN2ZyIsInN2ZyIsIm51bWJlcklucHV0IiwiZGF0YVVSTHRvRmlsZSIsImRhdGF1cmwiLCJmaWxlbmFtZSIsImFyciIsIm1pbWUiLCJic3RyIiwiYXRvYiIsInU4YXJyIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJGaWxlIiwiZ2V0TmFtZUluaXRpYWxzIiwicmd4IiwiUmVnRXhwIiwiaW5pdGlhbHMiLCJtYXRjaEFsbCIsInNoaWZ0IiwicG9wIl0sInNvdXJjZVJvb3QiOiIifQ==
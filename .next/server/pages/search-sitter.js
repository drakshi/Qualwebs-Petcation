(() => {
var exports = {};
exports.id = "pages/search-sitter";
exports.ids = ["pages/search-sitter"];
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

/***/ "./components/SearchSitter/SitterObject.tsx":
/*!**************************************************!*\
  !*** ./components/SearchSitter/SitterObject.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/Api */ "./api/Api.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/appData/AppData */ "./public/appData/AppData.ts");
/* harmony import */ var react_simple_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-simple-snackbar */ "react-simple-snackbar");
/* harmony import */ var react_simple_snackbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_simple_snackbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\SearchSitter\\SitterObject.tsx";








let api = new _api_Api__WEBPACK_IMPORTED_MODULE_2__.default();

const SitterObject = ({
  props,
  serviceId,
  getSitter,
  petType
}) => {
  const [openSuccess, closeSuccess] = (0,react_simple_snackbar__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)(_public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.successOptions);
  const [openError, closeError] = (0,react_simple_snackbar__WEBPACK_IMPORTED_MODULE_5__.useSnackbar)(_public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.errorOptions);

  const getTrimmedAddress = address => {
    if (address.length > 12) {
      let newString = address.substring(0, 12) + "...";
      return newString;
    } else {
      return address;
    }
  };

  const handleBookmarkSitter = () => {
    api.markUnmarkSitter({
      sitter_id: props.id
    }).then(res => {
      if (res.data.status === 200) {
        if (props.is_favorite) {
          openSuccess(_public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.unmarkSitter);
        } else {
          openSuccess(_public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.bookmarkSitter);
        }

        getSitter();
      }
    }).catch(error => {
      console.log('eror is', error); //openSnackbar(strings.errorUpdatingStatus);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "bg-white search-background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "search-sitter-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "row mb-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: {
            pathname: "/sitter-profile/" + props.id
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "col-12 col-md-6 col-lg-6 col-xl-7",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "d-flex",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "search-sitter-img",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                  src: props.profile_picture,
                  alt: "",
                  className: "img-fluid"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "search-sitter-details my-auto",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
                  className: "mb-1",
                  children: props.firstname + " " + props.lastname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  className: "font-12 mb-0",
                  children: props.address ? props.address.hide_address == 0 ? getTrimmedAddress(props.address.address) + " " + props.address.city + " ," + props.address.postcode : "" : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "col-12 col-md-6 col-lg-6 col-xl-5 my-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "d-flex profile-share-icon",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "profile-share-drop",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "dropdown",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                  onClick: handleBookmarkSitter,
                  children: [props.is_favorite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
                    viewBox: "0 0 512 512",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("path", {
                      fill: "#ffc107",
                      d: "M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 43
                  }, undefined), !props.is_favorite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("path", {
                      d: "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 44
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dropdown-menu",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                    href: "#",
                    className: "shares",
                    children: "Share this profile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "py-3",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                        src: "/images/social-img4.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined), " via email"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                        src: "/images/social-img3.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 25
                      }, undefined), " via whatsapp"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                        src: "/images/social-img2.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 25
                      }, undefined), " via line"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                        src: "/images/social-img1.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 25
                      }, undefined), " via messenger"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("hr", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                      className: "dropdown-item",
                      href: "#",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                        src: "/images/social-img1.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined), " Copy link"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: {
          pathname: "/sitter-profile/" + props.id
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "row mb-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "col-xl-9",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "household-details",
                children: [props.address.live_in_house == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  className: "mb-0 font-12 d-inline",
                  children: "Is an apartment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, undefined) : null, props.address.non_smoking_household == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  className: "mb-0 font-12 d-inline",
                  children: "Non-smoking Household"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, undefined) : null, props.address.dog_other_pets == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  className: "mb-0 font-12 d-inline",
                  children: "Has no dogs"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, undefined) : null, props.address.fenced_yard ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  className: "mb-0 font-12 d-inline",
                  children: "Does not have a yard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 21
                }, undefined) : null, props.address.dog_other_pets == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  className: "mb-0 font-12 d-inline",
                  children: "Has pet."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 23
                }, undefined) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "col-xl-3 p-left",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "contact-now",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: {
                    pathname: "/booking",
                    query: {
                      sitterId: props.id,
                      service: serviceId,
                      name: props.firstname + " " + props.lastname,
                      petType: JSON.stringify(petType)
                    }
                  },
                  as: "/booking",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                    className: "btn btn-primary",
                    children: "Contact now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "view-details",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                  href: {
                    pathname: "/sitter-profile/" + props.id,
                    query: {
                      serviceId: serviceId
                    }
                  },
                  children: "View details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "col-12 col-md-9 col-lg-9 col-xl-9",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "d-flex featured-details",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "d-flex hotel-rating",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "rating-star ",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                      className: "active",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("svg", {
                        "aria-hidden": "true",
                        focusable: "false",
                        "data-prefix": "fas",
                        "data-icon": "star",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 576 512",
                        className: "svg-inline--fa fa-star fa-w-18 fa-2x",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("path", {
                          fill: "currentColor",
                          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
                          className: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 195,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "my-auto",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
                      className: "mb-0  font-semibold",
                      children: [props.overall_rate, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                        className: "text-muted font-normal font-12",
                        children: `(${props.total_review} reviews)`
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "text-muted px-2",
                  children: "|"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "my-auto",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
                    className: "mb-0 font-semibold",
                    children: ["0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                      className: "text-muted font-normal font-12",
                      children: [' ', "Repeat Clients"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "col-12 col-md-3 col-lg-3 col-xl-3 my-auto p-left",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
                  className: "mb-0  font-semibold",
                  children: [`¥${props.price}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                    className: "text-muted font-normal font-12",
                    children: "/ night"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, undefined)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitterObject);

/***/ }),

/***/ "./components/common/Loader.tsx":
/*!**************************************!*\
  !*** ./components/common/Loader.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Loader.module.css */ "./styles/Loader.module.css");
/* harmony import */ var _styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\common\\Loader.tsx";



function Loader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: {
      alignSelf: "center",
      flex: 1,
      display: "flex"
    },
    className: (_styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default().loader),
    title: "0",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
      style: {
        height: 50,
        width: 50,
        alignSelf: "center"
      },
      className: (_styles_Loader_module_css__WEBPACK_IMPORTED_MODULE_2___default().svg),
      version: "1.1",
      id: "loader-1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      width: "200px",
      height: "200px",
      viewBox: "0 0 40 40",
      enableBackground: "new 0 0 40 40",
      xmlSpace: "preserve",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        opacity: "0.2",
        fill: "#000",
        d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        fill: "#000",
        d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r C22.32,8.481,24.301,9.057,26.013,10.047z",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("animateTransform", {
          attributeType: "xml",
          attributeName: "transform",
          type: "rotate",
          from: "0 20 20",
          to: "360 20 20",
          dur: "0.5s",
          repeatCount: "indefinite"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/user/myProfile/Map.tsx":
/*!*******************************************!*\
  !*** ./components/user/myProfile/Map.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\user\\myProfile\\Map.tsx";






const {
  StandaloneSearchBox
} = __webpack_require__(/*! react-google-maps/lib/components/places/StandaloneSearchBox */ "react-google-maps/lib/components/places/StandaloneSearchBox");

const MyMapComponent = (0,react_google_maps__WEBPACK_IMPORTED_MODULE_0__.withScriptjs)((0,react_google_maps__WEBPACK_IMPORTED_MODULE_0__.withGoogleMap)(props => {
  let latlong = JSON.parse(JSON.stringify(props.latlng ? props.latlng.length ? props.latlng[0] : props.latlng : {
    lat: -34.397,
    lng: 150.644
  }));
  const {
    0: showInfo,
    1: setShowInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: info,
    1: setInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const handleClick = index => {
    let path = {
      pathname: "/sitter-profile/" + props.data[index].id,
      query: {
        serviceId: props.serviceId
      }
    };
    router.push(path);
  };

  const handleMouseOver = index => {
    setShowInfo(true);
    setInfo(props.data[index].firstname + props.data[index].lastname);
  };

  const handleMouseExit = () => {
    setShowInfo(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_google_maps__WEBPACK_IMPORTED_MODULE_0__.GoogleMap, {
    defaultZoom: 15,
    zoom: 15,
    center: latlong,
    onClick: props.onChangeLatLng,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [props.latlng && props.latlng.length ? props.latlng.map((val, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_google_maps__WEBPACK_IMPORTED_MODULE_0__.Marker, {
        onDragEnd: props.onChangeLatLng,
        animation: 2,
        draggable: props.draggable,
        position: val,
        onMouseOver: e => handleMouseOver(index),
        onMouseOut: handleMouseExit,
        onClick: e => {
          handleClick(index);
        }
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }, undefined)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_google_maps__WEBPACK_IMPORTED_MODULE_0__.Marker, {
        onDragEnd: props.onChangeLatLng,
        animation: 2,
        draggable: props.draggable,
        position: latlong
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined), showInfo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        style: {
          position: "relative",
          display: "inline-block",
          borderBottom: "1px dotted black"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          style: {
            width: "120px",
            backgroundColor: "lightgray",
            top: "-330px",
            left: "330px",
            color: "black",
            textAlign: "center",
            padding: "5px 0",
            borderRadius: "6px",
            position: "absolute",
            zIndex: "1"
          },
          children: [" ", info]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 26
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, undefined);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyMapComponent);

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

/***/ "./pages/search-sitter.tsx":
/*!*********************************!*\
  !*** ./pages/search-sitter.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchSitter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker/DayPickerInput */ "react-day-picker/DayPickerInput");
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/appData/AppData */ "./public/appData/AppData.ts");
/* harmony import */ var _components_SearchSitter_SitterObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchSitter/SitterObject */ "./components/SearchSitter/SitterObject.tsx");
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/Api */ "./api/Api.ts");
/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common/Loader */ "./components/common/Loader.tsx");
/* harmony import */ var react_google_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-google-autocomplete */ "react-google-autocomplete");
/* harmony import */ var react_google_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_google_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_AppContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/AppContext */ "./utils/AppContext.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_Constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/Constants */ "./api/Constants.ts");
/* harmony import */ var _components_user_myProfile_Map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/user/myProfile/Map */ "./components/user/myProfile/Map.tsx");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\search-sitter.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const api = new _api_Api__WEBPACK_IMPORTED_MODULE_7__.default();

const Slider = __webpack_require__(/*! rc-slider */ "rc-slider");

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_15___default())();
class SearchSitter extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "searchData", void 0);

    _defineProperty(this, "customStyles", {
      option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
        fontSize: 14
      }),
      control: provided => _objectSpread(_objectSpread({}, provided), {}, {
        width: 140
      }),
      singleValue: (provided, state) => {
        return _objectSpread(_objectSpread({}, provided), {}, {
          fontSize: 12,
          color: "#383838",
          fontWeight: "500"
        });
      }
    });

    _defineProperty(this, "sortDropdownStyles", {
      option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
        fontSize: 14
      }),
      control: provided => _objectSpread(_objectSpread({}, provided), {}, {
        width: 180
      }),
      singleValue: (provided, state) => {
        return _objectSpread(_objectSpread({}, provided), {}, {
          fontSize: 12,
          color: "#383838",
          fontWeight: "500"
        });
      }
    });

    this.state = {
      sitters: [],
      checkInDate: new Date(),
      checkOutDate: new Date(),
      pet: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.pet[0],
      service: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData[0],
      serviceTime: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.ServiceTime[0],
      petSize: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petSize[0],
      petCount: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petCount[0],
      price: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.prices[0],
      minPrice: 1,
      maxPrice: 1000,
      allPrice: true,
      loading: true,
      lat: "0",
      lng: "0",
      defaultValue: "",
      transportation: 1,
      closest_sitter: 1,
      latlng: [],
      user_id: 0,
      serviceData: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData,
      saveSearch: false
    };
    this.handlePetChange = this.handlePetChange.bind(this);
    this.handleServiceTimeChange = this.handleServiceTimeChange.bind(this);
    this.handlePetCountChange = this.handlePetCountChange.bind(this);
    this.handlePetSizeChange = this.handlePetSizeChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleCheckInDayClick = this.handleCheckInDayClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.getFilteredAvailableSitter();
  }

  componentDidMount() {
    this.searchData = JSON.parse(localStorage.getItem('search-data'));

    if (localStorage.getItem('search-data')) {
      this.setState({
        pet: this.searchData.pet,
        service: this.searchData.service,
        serviceTime: this.searchData.serviceTime,
        petSize: this.searchData.petSize,
        petCount: this.searchData.petCount,
        price: this.searchData.price,
        checkInDate: this.searchData.checkInDate,
        checkOutDate: this.searchData.checkOutDate,
        minPrice: this.searchData.minPrice,
        maxPrice: this.searchData.maxPrice
      });
    } else {
      this.setState({
        pet: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.pet[0],
        service: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData[0],
        serviceTime: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.ServiceTime[0],
        petSize: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petSize[0],
        petCount: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petCount[0],
        price: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.prices[0],
        checkInDate: new Date(),
        checkOutDate: new Date(),
        minPrice: 1,
        maxPrice: 1000
      });
    }

    let staticData = JSON.parse(JSON.stringify(_public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData));

    if (this.state.pet.value !== "1") {
      staticData.splice(4, 1);
    }

    if (this.state.pet.value === "3" || this.state.pet.value === "4") {
      staticData.splice(4, 1);
    }

    this.setState({
      serviceData: staticData
    });
    let id = cookies.get("id");

    if (id) {
      this.setState({
        user_id: id
      });
    }

    if (this.context.state && Object.keys(this.context.state).length !== 0) {
      this.setState({
        lat: String(this.context.state.lat),
        lng: String(this.context.state.lng),
        pet: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.pet.find(element => element.value == this.context.state.pet),
        service: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData.find(element => element.value == this.context.state.service),
        defaultValue: this.context.state.defaultValue ? this.context.state.defaultValue : "",
        petSize: this.context.state.petSize ? this.context.state.petSize : _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petSize[0],
        checkInDate: this.context.state.checkInDate,
        checkOutDate: this.context.state.checkOutDate
      }, () => {
        this.context.setState({});
        this.getFilteredAvailableSitter();
      });
    }
  }

  componentWillUpdate(prevState, nextState) {
    if (nextState.saveSearch === true) {
      localStorage.setItem('search-data', JSON.stringify(nextState));
    }
  }

  handleCheckInDayClick(day) {
    this.setState({
      checkInDate: day,
      checkOutDate: day
    });
  }

  handleCheckoutClick(day) {
    this.setState({
      checkOutDate: day
    });
  }

  handleServiceChange(service) {
    const check = service.value != 1 && service.value != 2;
    this.setState({
      service: service,
      checkOutDate: check ? this.state.checkInDate : this.state.checkOutDate
    });
  }

  handleServiceTimeChange(petType) {
    this.setState({
      serviceTime: petType
    });
  }

  handlePetSizeChange(petSize) {
    this.setState({
      petSize: petSize
    });
  }

  handlePetCountChange(petCount) {
    this.setState({
      petCount
    });
  }

  handlePetChange(pet) {
    let staticData = JSON.parse(JSON.stringify(_public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData));

    if (pet.value !== "1") {
      staticData.splice(4, 1);
    }

    if (pet.value === "3" || pet.value === "4") {
      staticData.splice(4, 1);
    }

    this.setState({
      pet: pet,
      service: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData[0],
      serviceData: staticData
    });
  }

  onTextChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getFilteredAvailableSitter() {
    this.setState({
      loading: true,
      saveSearch: true
    }); //filtered api

    let data = JSON.stringify({
      pet_type: this.state.pet.value,
      service_id: this.state.service.value,
      availability_start: this.state.checkInDate,
      availability_end: this.state.checkOutDate,
      number_of_pets: this.state.petCount.value,
      pet_size: this.state.petSize.value,
      for_all_prices: this.state.allPrice ? 1 : 0,
      transportation: this.state.transportation,
      price: {
        max: this.state.maxPrice,
        min: this.state.minPrice
      },
      address: {
        latitude: this.state.lat,
        longitude: this.state.lng
      },
      closest_sitter: this.state.closest_sitter
    });
    let that = this;
    api.getFilteredAvialableSitter(data).then(response => {
      let address = response.data.response.map(val => {
        return {
          lat: parseFloat(val.address.map_latitude),
          lng: parseFloat(val.address.map_longitude)
        };
      });
      let data = response.data.response.filter(val => val.id != this.state.user_id);
      that.setState({
        sitters: data,
        loading: false,
        latlng: address
      });
    }).catch(error => {
      console.log(error);
    });

    if (false) {}
  }

  resetFilter() {
    this.setState({
      sitters: [],
      checkInDate: new Date(),
      checkOutDate: new Date(),
      minPrice: 1,
      maxPrice: 1000,
      allPrice: true,
      lat: "0",
      lng: "0",
      defaultValue: "",
      transportation: 0,
      latlng: [],
      pet: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.pet[0],
      service: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData[0],
      serviceTime: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.ServiceTime[0],
      petSize: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petSize[0],
      petCount: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petCount[0],
      price: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.prices[0],
      serviceData: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.serviceData
    });
  }

  render() {
    let date = moment__WEBPACK_IMPORTED_MODULE_11___default()(new Date(this.state.checkInDate)).format('"DD/MM/YYYY"');
    console.log(this.state.sitters);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
      className: "main-wrapper search-page",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "filter-section",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
              className: "col-12 col-md-12 col-lg-12 col-xl-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                className: "row filter-design",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-6 col-sm-auto col-md-auto form-group mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                    children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__.strings.petType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
                    onChange: this.handlePetChange,
                    value: this.state.pet,
                    isSearchable: false,
                    options: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.pet,
                    styles: this.customStyles
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-6 col-sm-auto col-md-auto form-group mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                    children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__.strings.serviceType
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
                    value: this.state.service,
                    isSearchable: false,
                    onChange: this.handleServiceChange,
                    options: this.state.serviceData,
                    styles: this.customStyles
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 368,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-6 col-sm-auto col-md-auto form-group mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                    children: "Start Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 378,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    className: "input-group datepicker1 date",
                    "data-date-format": "mm-dd-yyyy",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                      className: "form-control",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3___default()), {
                        dayPickerProps: {
                          modifiers: {
                            disabled: [{
                              before: new Date()
                            }]
                          }
                        },
                        inputProps: {
                          style: {
                            border: 0,
                            background: "transparent"
                          },
                          readOnly: true
                        },
                        placeholder: "DD/MM/YYYY",
                        format: "DD/MM/YYYY",
                        value: JSON.parse(moment__WEBPACK_IMPORTED_MODULE_11___default()(new Date(this.state.checkInDate)).format('"MM-DD-YYYY"')),
                        onDayChange: this.handleCheckInDayClick
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 384,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 383,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
                      className: "input-group-addon filter-point"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 407,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 379,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 377,
                  columnNumber: 37
                }, this), this.state.service.value == 1 || this.state.service.value == 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-6 col-sm-auto col-md-auto form-group mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                    children: "End Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 413,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    className: "input-group datepicker1 date",
                    "data-date-format": "mm-dd-yyyy",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                      className: "form-control ",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_3___default()), {
                        dayPickerProps: {
                          modifiers: {
                            disabled: [{
                              before: this.state.checkInDate
                            }]
                          }
                        },
                        inputProps: {
                          style: {
                            border: 0,
                            background: "transparent"
                          },
                          readOnly: true,
                          disabled: this.state.service.value != 1 && this.state.service.value != 2
                        },
                        placeholder: "DD/MM/YYYY",
                        format: "DD/MM/YYYY",
                        value: JSON.parse(moment__WEBPACK_IMPORTED_MODULE_11___default()(new Date(this.state.checkOutDate)).format('"MM-DD-YYYY"')),
                        onDayChange: this.handleCheckoutClick
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 419,
                        columnNumber: 53
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 418,
                      columnNumber: 49
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
                      className: "input-group-addon filter-point"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 442,
                      columnNumber: 49
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 414,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 41
                }, this) : null, this.state.service.label != "Pet grooming" && this.state.service.label != "House call" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-6 col-sm-auto col-md-auto form-group mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                    children: "Pet Size"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 448,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
                    onChange: this.handlePetSizeChange,
                    value: this.state.petSize,
                    isSearchable: false,
                    options: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petSize,
                    isMulti: false,
                    styles: this.customStyles
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 449,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 447,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-6 col-sm-auto col-md-auto form-group mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                    children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__.strings.Howmanypets
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 459,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
                    value: this.state.petCount,
                    onChange: this.handlePetCountChange,
                    isSearchable: false,
                    options: _public_appData_AppData__WEBPACK_IMPORTED_MODULE_4__.petCount,
                    styles: (this.customStyles, {
                      control: provided => _objectSpread(_objectSpread({}, provided), {}, {
                        width: 80
                      })
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 460,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 458,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  style: {
                    width: "185px"
                  },
                  className: "col-6 col-sm-auto col-md-auto form-group  mb-0 ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                      children: "Price"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 484,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 483,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("small", {
                      className: "font-10 float-left",
                      children: "(Min.)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 487,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("small", {
                      className: "font-10 float-right",
                      children: "(Max.)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 488,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 486,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    className: "mt-3 mb-1",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(Range, {
                      step: 25,
                      value: [this.state.minPrice, this.state.maxPrice],
                      min: 0,
                      max: 1000,
                      onChange: e => this.setState({
                        minPrice: e[0],
                        maxPrice: e[1]
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 492,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 491,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("small", {
                      className: "font-10 float-left",
                      children: this.state.minPrice
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 506,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("small", {
                      className: "font-10 float-right",
                      children: this.state.maxPrice
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 509,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 505,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 477,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-6 col-sm-auto col-md form-group mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                    children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__.strings.Address
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 516,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react_google_autocomplete__WEBPACK_IMPORTED_MODULE_9___default()), {
                    placeholder: 'Search here...',
                    className: "form-control",
                    apiKey: _api_Constants__WEBPACK_IMPORTED_MODULE_13__.GOOGLE_PLACES_API,
                    onPlaceSelected: place => {
                      this.setState({
                        lat: `${place.geometry.location.lat()}`,
                        lng: `${place.geometry.location.lng()}`
                      });
                    },
                    options: {
                      componentRestrictions: {
                        country: "jp"
                      }
                    },
                    defaultValue: this.state.defaultValue
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 517,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 515,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-auto pl-0 mt-auto",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("button", {
                    onClick: this.getFilteredAvailableSitter.bind(this),
                    className: "btn btn-save mb-2",
                    children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__.strings.SaveSearch
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 535,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 534,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "col-8 col-sm-auto col-md-auto form-group mb-0 my-auto  ",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    className: "custom-check",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                      className: "check ",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("input", {
                        onChange: () => this.setState({
                          transportation: this.state.transportation == 1 ? 0 : 1
                        }),
                        checked: this.state.transportation == 1,
                        type: "checkbox",
                        name: "is_name1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 546,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
                        className: "checkmark"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 557,
                        columnNumber: 49
                      }, this), "should have transportation available "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 545,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 544,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 543,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "sort-details py-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
            className: "row ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
              className: "col-12 col-md-8 col-lg-8 col-xl-8 ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                style: {
                  alignItems: "center"
                },
                className: "d-flex",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  className: "align-center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    className: "font-12 mb-0 align-center",
                    children: [this.state.sitters.length, " results per preferences", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_16___default()), {
                      href: "",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("a", {
                        onClick: this.resetFilter,
                        children: "(reset)"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 577,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 576,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 574,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 573,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                  style: {
                    alignItems: "center"
                  },
                  className: "d-flex  high-rating align-center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    className: "custom-check",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                      className: "check ",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("input", {
                        checked: this.state.closest_sitter == 1,
                        onChange: () => {
                          this.setState({
                            closest_sitter: this.state.closest_sitter == 1 ? 0 : 1
                          });
                        },
                        type: "checkbox",
                        name: "is_name1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 587,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
                        className: "checkmark"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 598,
                        columnNumber: 49
                      }, this), "Sort by Closest sitter"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 586,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 585,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 581,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 572,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
              className: "col-12 col-md-4 col-lg-4 col-xl-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                className: "custom-check",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("label", {
                  className: "check ",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("input", {
                    type: "checkbox",
                    name: "is_name1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 608,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
                    className: "checkmark"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 609,
                    columnNumber: 41
                  }, this), _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__.strings.updateWhenIMoveTheMap]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 607,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 606,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 570,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
            className: "col-12 col-md-4 col-lg-4 col-xl-4",
            children: this.state.loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_common_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 622,
              columnNumber: 33
            }, this) : this.state.sitters.length > 0 ? this.state.sitters.map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_SearchSitter_SitterObject__WEBPACK_IMPORTED_MODULE_5__.default, {
              props: value,
              petType: this.state.pet,
              serviceId: this.state.service.value,
              getSitter: () => this.getFilteredAvailableSitter()
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 625,
              columnNumber: 41
            }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                className: "text-center padding",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("p", {
                  className: "font-13 mb-0 font-italic",
                  children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_6__.strings.noSitterFound
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 634,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 633,
                columnNumber: 41
              }, this)
            }, void 0, false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 620,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
            className: "col-12 col-md-8 col-lg-8 col-xl-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
              className: "mapouter",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                className: "gmap_canvas",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_user_myProfile_Map__WEBPACK_IMPORTED_MODULE_14__.default, {
                  bootstrapURLKeys: {
                    key: _api_Constants__WEBPACK_IMPORTED_MODULE_13__.GOOGLE_PLACES_API,
                    language: "en"
                  },
                  serviceId: this.state.service.value,
                  data: this.state.sitters,
                  draggable: false,
                  isMarkerShown: true,
                  latlng: this.state.latlng ? this.state.latlng : '',
                  googleMapURL: `https://maps.google.com/maps/api/js?key=${_api_Constants__WEBPACK_IMPORTED_MODULE_13__.GOOGLE_PLACES_API}&amp;libraries=geometry,drawing,places`,
                  loadingElement: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    style: {
                      height: `100%`
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 653,
                    columnNumber: 57
                  }, this),
                  containerElement: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    style: {
                      height: `400px`
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 654,
                    columnNumber: 59
                  }, this),
                  mapElement: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                    style: {
                      height: `100%`
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 655,
                    columnNumber: 53
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 642,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 641,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 640,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 639,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }, this);
  }

}

_defineProperty(SearchSitter, "contextType", _utils_AppContext__WEBPACK_IMPORTED_MODULE_10__.default);

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

/***/ "./utils/AppContext.tsx":
/*!******************************!*\
  !*** ./utils/AppContext.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);

/***/ }),

/***/ "./styles/Loader.module.css":
/*!**********************************!*\
  !*** ./styles/Loader.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__Caip7",
	"svg": "Loader_svg__bahCt"
};


/***/ }),

/***/ "./node_modules/rc-slider/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-slider/assets/index.css ***!
  \*************************************************/
/***/ (() => {



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

/***/ "rc-slider":
/*!****************************!*\
  !*** external "rc-slider" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("rc-slider");

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

/***/ "react-google-autocomplete":
/*!********************************************!*\
  !*** external "react-google-autocomplete" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-autocomplete");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-maps");

/***/ }),

/***/ "react-google-maps/lib/components/places/StandaloneSearchBox":
/*!******************************************************************************!*\
  !*** external "react-google-maps/lib/components/places/StandaloneSearchBox" ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-google-maps/lib/components/places/StandaloneSearchBox");

/***/ }),

/***/ "react-localization":
/*!*************************************!*\
  !*** external "react-localization" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-localization");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ "react-simple-snackbar":
/*!****************************************!*\
  !*** external "react-simple-snackbar" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-simple-snackbar");

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
var __webpack_exports__ = (__webpack_exec__("./pages/search-sitter.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9wZXRjYXRpb24vLi9hcGkvQXBpLnRzIiwid2VicGFjazovL3BldGNhdGlvbi8uL2FwaS9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vY29tcG9uZW50cy9TZWFyY2hTaXR0ZXIvU2l0dGVyT2JqZWN0LnRzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXIudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL2NvbXBvbmVudHMvdXNlci9teVByb2ZpbGUvTWFwLnRzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL3BhZ2VzL3NlYXJjaC1zaXR0ZXIudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL3B1YmxpYy9hcHBEYXRhL0FwcERhdGEudHMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vcHVibGljL2xhbmcvU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9wdWJsaWMvbGFuZy9lbmcuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vdXRpbHMvQXBwQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vc3R5bGVzL0xvYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyYy1zbGlkZXJcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LWRheS1waWNrZXIvRGF5UGlja2VySW5wdXRcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtYXV0b2NvbXBsZXRlXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLW1hcHNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9wbGFjZXMvU3RhbmRhbG9uZVNlYXJjaEJveFwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LWxvY2FsaXphdGlvblwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LXNpbXBsZS1zbmFja2JhclwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vaWdub3JlZHxDOlxceGFtcHA3XzRcXGh0ZG9jc1xccGV0Y2F0aW9uXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBVX0FDVElWRV9CT0FSRElORyxcclxuICBVX0FDVElWRV9EQVlfQ0FSRSxcclxuICBVX0FDVElWRV9EUk9QX0lOX1ZJU0lUUyxcclxuICBVX0FDVElWRV9HUk9PTUlORyxcclxuICBVX0FDVElWRV9IT1VTRV9DQUxMLFxyXG4gIFVfQUNUSVZFX0hPVVNFX1NJVFRJTkcsXHJcbiAgVV9BQ1RJVkVfUEVUX1dBTEtJTkcsXHJcbiAgVV9BRERfUEVULFxyXG4gIFVfQUREX1FVRVNUSU9OLFxyXG4gIFVfQUREX1NLSUxMLFxyXG4gIFVfQUREX1NQT1QsXHJcbiAgVV9BUlJBTkdfTUVFVFVQLFxyXG4gIFVfQk9BUkRJTkdfRElTQ09VTlRTLFxyXG4gIFVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFLFxyXG4gIFVfQk9BUkRJTkdfUFJFRkVSRU5DRSxcclxuICBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyxcclxuICBVX0RFTEVURV9QRVQsXHJcbiAgVV9ERUxFVEVfUVVFU1RJT04sXHJcbiAgVV9ERUxFVEVfU1BPVCxcclxuICBVX0RPR19XQUxLSU5HX0RJU0NPVU5ULFxyXG4gIFVfRE9HX1dBTEtJTkdfSU5GTyxcclxuICBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFLFxyXG4gIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFLFxyXG4gIFVfRFJPUF9JTl9WSVNJVEVTX1BSRUZFUkVOQ0UsXHJcbiAgVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMsXHJcbiAgVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSxcclxuICBVX0ZJTFRFUkVEX0FWQUlMQUJMRV9TSVRURVIsXHJcbiAgVV9HRVRfQUREUkVTUyxcclxuICBVX0dFVF9BTExfUEVUUyxcclxuICBVX0dFVF9BTExfU1BPVCxcclxuICBVX0dFVF9BVkFJTEFCSUxJVFksXHJcbiAgVV9HRVRfQVZBSUxBQklMSVRZX0JZX0RBVEVTLFxyXG4gIFVfR0VUX0FWQUlMQUJMRV9TRVJWSUNFUyxcclxuICBVX0dFVF9CQVNJQ19JTkZPLFxyXG4gIFVfR0VUX0JPQVJESU5HX0lORk8sXHJcbiAgVV9HRVRfQk9BUkRJTkdfUFJFVklFVyxcclxuICBVX0dFVF9CUkVFRF9XSVRIX1RZUEUsXHJcbiAgVV9HRVRfQ0lUSUVTLFxyXG4gIFVfR0VUX0NPVVRSSUVTLFxyXG4gIFVfR0VUX0RBU0hCT0FSRCxcclxuICBVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0RST1BfSU5fUFJFVklFVyxcclxuICBVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPLFxyXG4gIFVfR0VUX0dST09NSU5HX0lORk8sXHJcbiAgVV9HRVRfR1JPT01JTkdfUFJFVklFVyxcclxuICBVX0dFVF9IT1VTRV9DQUxMX0lORk8sXHJcbiAgVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXLFxyXG4gIFVfR0VUX0hPVVNFX0NBTExfU0VSVklDRSxcclxuICBVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8sXHJcbiAgVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0xBTkdBVUdFUyxcclxuICBVX0dFVF9QQVJLSU5HLFxyXG4gIFVfR0VUX1BBWU1FTlRfTUVUSE9EUyxcclxuICBVX0dFVF9QRVRTLFxyXG4gIFVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXLFxyXG4gIFVfR0VUX1BFVF9TRVJWSUNFLFxyXG4gIFVfR0VUX1BFVF9TUE9UUyxcclxuICBVX0dFVF9RVUVTVElPTlMsXHJcbiAgVV9HRVRfUkVTRVJWQVRJT05fVFlQRVMsXHJcbiAgVV9HRVRfU0VSVklDRVMsXHJcbiAgVV9HRVRfU0lOR0xFX1NJVFRFUixcclxuICBVX0dFVF9TSU5HTEVfU1BPVCxcclxuICBVX0dFVF9TSVRURVJfQVZBSUxBQklMSVRZLFxyXG4gIFVfR0VUX1NJVFRFUl9SRVNFUlZBVElPTlMsXHJcbiAgVV9HRVRfU0tJTExTLFxyXG4gIFVfR0VUX1NNT0tJTkdfQ0VTU0lPTlMsXHJcbiAgVV9HRVRfVEhSRUFEX0JPT0tJTkcsXHJcbiAgVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMsXHJcbiAgVV9HRVRfVVNFUl9TS0lMTFMsXHJcbiAgVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5ULFxyXG4gIFVfR1JPT01JTkdfU0VSVklDRV9GRUUsXHJcbiAgVV9HUk9PTUlOR19TRVJWSUNFX1BSRUZFUkVOQ0UsXHJcbiAgVV9IT1VTRV9DQUxMX0RJU0NPVU5ULFxyXG4gIFVfSE9VU0VfQ0FMTF9QUkVGRVJFTkNFLFxyXG4gIFVfSE9VU0VfQ0FMTF9TRVJWSUNFX0ZFRSxcclxuICBVX0hPVVNFX1NJVFRJTkdfRElTQ09VTlRTLFxyXG4gIFVfSE9VU0VfU0lUVElOR19QUkVGRVJFTkNFLFxyXG4gIFVfSE9VU0VfU0lUVElOR19TRVJWSUNFX0ZFRSxcclxuICBVX0lNQUdFX1VQTE9BRCxcclxuICBVX1BFVF9BRERJVElPTkFMX1JFUVVFU1QsXHJcbiAgVV9QRVRfQU1PVU5UX0NBTENVTEFUSU9OLFxyXG4gIFVfUEVUX0RBWV9DQVJFX0RJU0NPVU5ULFxyXG4gIFVfUEVUX0RBWV9DQVJFX0lORk8sXHJcbiAgVV9QRVRfREFZX0NBUkVfUFJFRkVSRU5DRSxcclxuICBVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMsXHJcbiAgVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZLFxyXG4gIFVfUEVUX1NQT1RfQ0FURUdPUklFUyxcclxuICBVX1JBVEVfU0lUVEVSLFxyXG4gIFVfUkVRVUVTVF9TSVRURVIsXHJcbiAgVV9TQVZFX0FERFJFU1MsXHJcbiAgVV9TQVZFX0JBU0lDX0lORk8sXHJcbiAgVV9TQVZFX0xPQ0FMSVRZLFxyXG4gIFVfU0FWRV9QT1JURk9MSU8sXHJcbiAgVV9TRU5EX01FU1NBR0UsXHJcbiAgVV9TRVRfQVZBSUxBQkxFX1NFUlZJQ0VTLFxyXG4gIFVfU0lOR0xFX1BFVCxcclxuICBVX1VQREFURV9QRVQsXHJcbiAgVV9VUERBVEVfU1BPVCxcclxuICBVX1VQTE9BRF9QUk9GSUxFX1BJQ1RVUkUsXHJcbiAgVV9VU0VSX0xPR0lOLFxyXG4gIFVfVVNFUl9SRUdJU1RFUixcclxuICBVX0FERF9DQVJELFxyXG4gIFVfR0VUX0NBUkQsXHJcbiAgVV9ERUxFVEVfQ0FSRCxcclxuICBVX0FERF9CQU5LX0FDQ09VTlQsXHJcbiAgVV9HRVRfQkFOS19BQ0NPVU5ULFxyXG4gIFVfR0VUX0JBTktfREVUQUlMUyxcclxuICBVX0RFTEVURV9CQU5LX0FDQ09VTlQsXHJcbiAgVV9HRVRfUEVUX1NQT1RfREVUQUlMUyxcclxuICBHT09HTEVfUExBQ0VTX0JBU0VfVVJMLFxyXG4gIEdPT0dMRV9QTEFDRVNfQVBJLFxyXG4gIFVfVVBMT0FEX0RPQ1VNRU5UUyxcclxuICBVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyxcclxuICBVX0FERF9UUkFOU1BPUlRfQ0hBUkdFUyxcclxuICBVX1VQREFURV9SRVFVRVNUX1NUQVRVUyxcclxuICBVX0JPT0tNQVJLX1NJVFRFUixcclxuICBVX0dFVF9SRVFVRVNUX0RFVEFJTCxcclxuICBVX0NPTkZJUk1fUEFZTUVOVCxcclxuICBVX1BBWU1FTlRfSElTVE9SWSxcclxuICBVX0dFVF9GQVZPUklURV9TSVRURVIsXHJcbiAgVV9DSEFOR0VfTUVFVFVQX1NUQVRVUyxcclxuICBVX0dFVF9NRUVUVVBTLFxyXG4gIFVfQ0hBVF9BQ1RJT04sXHJcbiAgVV9HRVRfRkFWT1JJVEVfU1BPVCxcclxuICBVX01BUktfVU5NQVJLX1NQT1QsXHJcbiAgVV9NQUtFX0NBUkRfX0RFRkFVTFQsXHJcbiAgVV9NQUtFX0JBTktfREVGQVVMVCxcclxuICBVX1JFU0VUX1BBU1NXT1JELFxyXG4gIFVfQ0hBTkdFX1BBU1NXT1JELFxyXG4gIFVfRk9SR09UX1BBU1NXT1JELFxyXG4gIFVfQVBQTFlfQ09VUE9OLFxyXG4gIFVfUkVNT1ZFX0NPVVBPTiwgVV9HRVRfQ09VUE9OLFxyXG4gIFVfUkVBRF9TVEFUVVMsIFVfUkVWSUVXX1NQT1QsXHJcbiAgVV9HRVRfTkVXUyxcclxuICBVX0dFVF9FVkVOVCxcclxuICBVX0dFVF9TSU5HTEVfTkVXUyxcclxuXHJcbn0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJ1bml2ZXJzYWwtY29va2llXCI7XHJcbmltcG9ydCBuZXh0Q29va2llIGZyb20gXCJuZXh0LWNvb2tpZXNcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly81NC4xNTEuMTYwLjgzL3BldGVjYXRpb24vcHVibGljL2FwaS9cIjtcclxuLy9jb25zdCBiYXNlVVJMID0gXCJodHRwOi8vMTkyLjE2OC4xLjI2L3BldGVjYXRpb24vcHVibGljL2FwaS9cIjtcclxuXHJcbmNvbnN0IGhlYWRlcnMgPSAodG9rZW4pID0+IHtcclxuICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICB9O1xyXG4gIHJldHVybiBoZWFkZXJzO1xyXG59O1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IChtZXRob2QsIHBhdGgsIGJvZHkgPSBudWxsLCBjdHggPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0ke3BhdGh9YDtcclxuICB2YXIgdG9rZW4gPSBudWxsO1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG4gIHRva2VuID0gY29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICBpZiAodG9rZW4gPT0gbnVsbCAmJiBjdHgpIHtcclxuICAgIHRva2VuID0gbmV4dENvb2tpZShjdHgpO1xyXG4gIH1cclxuICB2YXIgb3B0aW9ucyA9IHsgbWV0aG9kLCB1cmwsIGhlYWRlcnM6IGhlYWRlcnModG9rZW4pIH07XHJcblxyXG4gIGlmIChib2R5KSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7IGRhdGE6IGJvZHkgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXhpb3Mob3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xyXG4gIHJlZ2lzdGVyVXNlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VU0VSX1JFR0lTVEVSLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VU0VSX0xPR0lOLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkVTRVRfUEFTU1dPUkQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQ0hBTkdFX1BBU1NXT1JELCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGZvcmdvdFBhc3N3b3JkKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0ZPUkdPVF9QQVNTV09SRCAsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaGJvYXJkKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfREFTSEJPQVJEKTtcclxuICB9XHJcblxyXG4gIGdldEJhc2ljSW5mbygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBU0lDX0lORk8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWRkcmVzcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0FERFJFU1MpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUJhc2ljSW5mbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TQVZFX0JBU0lDX0lORk8sIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUFkZHJlc3MoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfU0FWRV9BRERSRVNTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZFF1ZXN0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9RVUVTVElPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVRdWVzdGlvbih2YWwpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiREVMRVRFXCIsIFVfREVMRVRFX1FVRVNUSU9OICsgdmFsKTtcclxuICB9XHJcblxyXG4gIGdldFF1ZXN0aW9ucygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1FVRVNUSU9OUyk7XHJcbiAgfVxyXG5cclxuICBnZXRTa2lsbHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TS0lMTFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclNraWxscygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1VTRVJfU0tJTExTKTtcclxuICB9XHJcblxyXG4gIGFkZFNraWxsKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9TS0lMTCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzYXZlTG9jYWxpdHlJbmZvKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1NBVkVfTE9DQUxJVFksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVBvcnRmb2xpbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TQVZFX1BPUlRGT0xJTywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0FWQUlMQUJJTElUWVxyXG4gIGdldEF2YWlsYWJsZVNlcnZpY2VzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQVZBSUxBQkxFX1NFUlZJQ0VTKTtcclxuICB9XHJcblxyXG4gIHNldEF2YWlsYWJsZVNlcnZpY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfU0VUX0FWQUlMQUJMRV9TRVJWSUNFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFiaWxpdHkoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0FWQUlMQUJJTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmFpbGFiaWxpdHlCeURhdGUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0FWQUlMQUJJTElUWV9CWV9EQVRFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL01ZIFBFVFNcclxuICBhZGRQZXQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUREX1BFVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQZXRzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQUxMX1BFVFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlUGV0cyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9TSU5HTEVfUEVUICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGV0KGRhdGEsIGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUERBVEVfUEVUICsgaWQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUGV0KGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkRFTEVURVwiLCBVX0RFTEVURV9QRVQgKyBpZCk7XHJcbiAgfVxyXG5cclxuICAvL1NlcnZpY2VcclxuICBnZXRTZXJ2aWNlKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfU0VSVklDRVMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlQm9hcmRpbmcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0JPQVJESU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZURheUNhcmUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0RBWV9DQVJFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUhvdXNlU2l0dGluZyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfSE9VU0VfU0lUVElORywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVEcm9wSW5WaXNpdHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0RST1BfSU5fVklTSVRTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZVBldFdhbGtpbmcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX1BFVF9XQUxLSU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUdyb29taW5nKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FDVElWRV9HUk9PTUlORywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVIb3VzZUNhbGwoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0hPVVNFX0NBTEwsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9Ib3VzZSBjYWxsXHJcbiAgZ2V0SG91c2VDYWxsSW5mbyh2YWwpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0hPVVNFX0NBTExfSU5GTyArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VzZUNhbGxTZXJ2aWNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9IT1VTRV9DQUxMX1NFUlZJQ0UsIGRhdGEpO1xyXG4gIH1cclxuICBob3VzZUNhbGxTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX0NBTExfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VDYWxsUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9DQUxMX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VDYWxsRGlzY291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfQ0FMTF9ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VzZUNhbGxQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vR3Jvb21pbmdcclxuICBnZXRHcm9vbWluZ1NlcnZpY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX1BFVF9TRVJWSUNFLCBkYXRhKTtcclxuICB9XHJcbiAgZ2V0R3Jvb21pbmdJbmZvKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfR1JPT01JTkdfSU5GTyArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBncm9vbWluZ1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR1JPT01JTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ3Jvb21pbmdTZXJ2aWNlUHJlZmVybmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBncm9vbWluZ1NlcnZpY2VEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEdyb29taW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0dST09NSU5HX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9CT0FSRElOR1xyXG4gIGJvYXJkaW5nU2VydmljZUZlZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT0FSRElOR19QRVRfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRpbmdQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0JPQVJESU5HX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRpbmdEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT0FSRElOR19ESVNDT1VOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm9hcmRpbmdJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9CT0FSRElOR19JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Qm9hcmRpbmdQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQk9BUkRJTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL0hPVVNFIFNJVFRJTkdcclxuICBnZXRIb3VzZVNpdHRpbmdJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8gKyBpZCk7XHJcbiAgfVxyXG5cclxuICBob3VzZVNpdHRpbmdTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX1NJVFRJTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VTaXR0aW5nRGlzY291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfU0lUVElOR19ESVNDT1VOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaG91c2VTaXR0aW5nUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9TSVRUSU5HX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91c2VTaXR0aW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0hPVVNFX1NJVFRJTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL0Ryb3AgaW4gdmlzaXRzXHJcbiAgZ2V0RHJvcEluVmlzaXRzSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRFJPUF9JTl9WSVNJVFNfSU5GTyArIGlkKTtcclxuICB9XHJcblxyXG4gIGRyb3BJblZpc2l0c1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRFJPUF9JTl9WSVNJVFNfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZHJvcEluVmlzaXRQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RST1BfSU5fVklTSVRFU19QUkVGRVJFTkNFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRyb3BJblZpc2l0RGlzY291bnRzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RST1BfSU5fVklTSVRTX0RJU0NPVU5UUywgZGF0YSk7XHJcbiAgfVxyXG4gIGdldERyb3BJblZpc2l0c1ByZXZpZXcoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9EUk9QX0lOX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9QZXQgZGF5IGNhcmVcclxuICBnZXRQZXREYXlDYXJlSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9QRVRfREFZX0NBUkVfSU5GTyArIGlkKTtcclxuICB9XHJcblxyXG4gIHBldERheUNhdGVTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGV0RGF5Q2FyZVByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEVUX0RBWV9DQVJFX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGV0RGF5Q2FyZURpc2NvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXREYXlDYXJlUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vRG9nIHdhbGtpbmdcclxuICBnZXREb2dXYWxraW5nSW5mbyhpZCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9ET0dfV0FMS0lOR19JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgRG9nV2Fsa2luZ1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9GRUUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZG9nV2Fsa2luZ1ByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRvZ1dhbGtpbmdEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ET0dfV0FMS0lOR19ESVNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXREb2dXYWxraW5nUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0RPR19XQUxLSU5HX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9TSVRURVIgUkVRVUVTVFxyXG4gIHBldEFkZGl0aW9uYWxTZXJ2aWNlcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9QRVRfQURESVRJT05BTF9SRVFVRVNULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHBldEFtb3VudENhbGN1bGF0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9BTU9VTlRfQ0FMQ1VMQVRJT04sIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2l0dGVyUmVxdWVzdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRVFVRVNUX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VSZXF1ZXN0U3RhdHVzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwZXRTZXJ2aWNlQXZhaWxhYmlsaXR5KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9TRVJWSUNFX0FWQUlBTEFCSUxJVFksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9EQVNIT0JPQVJEXHJcbiAgZ2V0U2l0dGVyUmVzZXJ2ZXRpb25zKGRhdGEsIHBhZ2UpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9TSVRURVJfUkVTRVJWQVRJT05TICsgXCI/cGFnZT1cIiArIHBhZ2UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclJlc2VydmF0aW9ucyhkYXRhLCBwYWdlKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMgKyBcIj9wYWdlPVwiICsgcGFnZSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0NIQVRcclxuICBzZW5kTWVzc2FnZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TRU5EX01FU1NBR0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhdEFjdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9DSEFUX0FDVElPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRUaHJlYWRCb29raW5nKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfVEhSRUFEX0JPT0tJTkcgKyB2YWwpO1xyXG4gIH1cclxuXHJcbiAgYXJyYW5nZU1lZXR1cChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BUlJBTkdfTUVFVFVQLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU1lZXR1cFN0YXR1cyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9DSEFOR0VfTUVFVFVQX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRNZWV0dXBSZXF1ZXN0KGlkKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX01FRVRVUFMgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRUcmFuc3BvcnRDaGFyZ2VSZXF1ZXN0KGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfVFJBTlNQT1JUX0NIQVJHRVMgKyBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZFRyYW5zcG9ydENoYXJnZVJlcXVlc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfVFJBTlNQT1JUX0NIQVJHRVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmVxdWVzdFN0YXR1cyhkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQREFURV9SRVFVRVNUX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZWFkU3RhdHVzKGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkVBRF9TVEFUVVMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9DT01NT05cclxuICBnZXRDb3V0aXJlcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NPVVRSSUVTKTtcclxuICB9XHJcbiAgZ2V0Q2l0aWVzKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9DSVRJRVMgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXRzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEVUUyk7XHJcbiAgfVxyXG5cclxuICBnZXRCcmVlZFdpdGhUeXBlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9CUkVFRF9XSVRIX1RZUEUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9JTUFHRV9VUExPQUQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyZWRBdmlhbGFibGVTaXR0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRklMVEVSRURfQVZBSUxBQkxFX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0RmF2b3JpdGVTaXR0ZXJzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9GQVZPUklURV9TSVRURVIsZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRQcm9maWxlUGljdHVyZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUExPQURfUFJPRklMRV9QSUNUVVJFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZERvY3VtZW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQTE9BRF9ET0NVTUVOVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy9TcG90c1xyXG4gIGdldFBldFNwb3RzQ2F0ZWdvcnkoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX1BFVF9TUE9UX0NBVEVHT1JJRVMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGV0U3BvdHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX1BFVF9TUE9UUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBtYXJrVW5tYXJrU3BvdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BUktfVU5NQVJLX1NQT1QsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGV0U3BvdERldGFpbHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEVUX1NQT1RfREVUQUlMUyArIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGF5bWVudE1ldGhvZHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9QQVlNRU5UX01FVEhPRFMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVzZXJ2YXRpb25UeXBlcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1JFU0VSVkFUSU9OX1RZUEVTKTtcclxuICB9XHJcblxyXG4gIGdldFNtb2tpbmdDZXNzaW9uKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfU01PS0lOR19DRVNTSU9OUyk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXJraW5nKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEFSS0lORyk7XHJcbiAgfVxyXG5cclxuICBnZXRMYW5nYXVnZXMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9MQU5HQVVHRVMpO1xyXG4gIH1cclxuXHJcbiAgYWRkU3BvdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfU1BPVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTcG90KGlkLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9VUERBVEVfU1BPVCArIGlkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJhdGVTaXR0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUkFURV9TSVRURVIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlU2l0dGVyKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfU0lUVEVSICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgbWFya1VubWFya1NpdHRlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9CT09LTUFSS19TSVRURVIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsU3BvdHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9BTExfU1BPVCk7XHJcbiAgfVxyXG5cclxuICBnZXRGYXZvcml0ZVNwb3RzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRkFWT1JJVEVfU1BPVCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVTcG90KHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJERUxFVEVcIiwgVV9ERUxFVEVfU1BPVCArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVTcG90KGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfU1BPVCArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFNpdHRlckF2YWlsYWJpbGl0eShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfU0lUVEVSX0FWQUlMQUJJTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByYXRlUmV2aWV3U3BvdChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRVZJRVdfU1BPVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL1BheW1lbnQgYW5kIEJhbmsgYWNjb3VudFxyXG4gIGFkZE5ld0NhcmQoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfQ0FSRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxDYXJkKCl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9DQVJEKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ERUxFVEVfQ0FSRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBhZGROZXdCYW5rQWNjb3VudChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9CQU5LX0FDQ09VTlQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsQmFua0FjY291bnQoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBTktfQUNDT1VOVCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxCYW5rQWNjb3VudERldGFpbHMoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JBTktfREVUQUlMUyk7XHJcbiAgfVxyXG5cclxuICBtYXJrQ2FyZEFzRGVmYXVsdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BS0VfQ0FSRF9fREVGQVVMVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBtYWtlQmFua0FzRGVmYXVsdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX01BS0VfQkFOS19ERUZBVUxULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUJhbmtBY2NvdW50KGlkKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfREVMRVRFX0JBTktfQUNDT1VOVCArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFNpbmdsZVJlcXVlc3REZXRhaWwoaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUkVRVUVTVF9ERVRBSUwgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBjb25maXJtUGF5bWVudChpZCxkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NPTkZJUk1fUEFZTUVOVCArIGlkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHBheW1lbnRIaXN0b3J5KGRhdGEsIHBhZ2Upe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEFZTUVOVF9ISVNUT1JZICsgYD9wYWdlPSR7cGFnZX1gLGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0dGVkQWRkcmVzcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYCR7R09PR0xFX1BMQUNFU19CQVNFX1VSTH0vZGV0YWlscy9qc29uP3BsYWNlaWQ9JHtpZH0ma2V5PSR7R09PR0xFX1BMQUNFU19BUEl9YDtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IGFwaVVybCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGFwcGx5Q291cG9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FQUExZX0NPVVBPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDb3Vwb24oaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9SRU1PVkVfQ09VUE9OICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291cG9ucyh0eXBlKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NPVVBPTiArIHR5cGUgKTtcclxuICB9XHJcbiAgLy9OZXdzXHJcblxyXG4gIGdldE5ld3MoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX05FV1MgICk7XHJcbiAgfVxyXG5cclxuICBnZXRFdmVudHMoKVxyXG4gIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0VWRU5UICApO1xyXG4gIH1cclxuICBnZXRTaW5nbGVOZXdzKClcclxuICB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TSU5HTEVfTkVXUylcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFVfVVNFUl9SRUdJU1RFUiA9IFwidXNlci1yZWdpc3RlclwiO1xyXG5leHBvcnQgY29uc3QgVV9VU0VSX0xPR0lOID0gXCJ1c2VyLWxvZ2luXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EQVNIQk9BUkQgPSBcInVzZXIvZGFzaGJvYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NBVkVfQkFTSUNfSU5GTyA9IFwidXNlci9zYXZlLWJhc2ljLWluZm9cIjtcclxuZXhwb3J0IGNvbnN0IFVfU0FWRV9BRERSRVNTID0gXCJ1c2VyL3NhdmUtYWRkcmVzc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFTSUNfSU5GTyA9IFwidXNlci9nZXQtYmFzaWMtaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQUREUkVTUyA9IFwidXNlci9nZXQtYWRkcmVzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfRk9SR09UX1BBU1NXT1JEID0gXCJmb3JnZXQtcGFzc3dvcmRcIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBTkdFX1BBU1NXT1JEID0gXCJ1c2VyL2NoYW5nZS1wYXNzd29yZFwiO1xyXG5leHBvcnQgY29uc3QgVV9SRVNFVF9QQVNTV09SRCA9IFwicmVzZXQtcGFzc3dvcmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVX0FERF9RVUVTVElPTiA9IFwidXNlci9hZGQtcXVlc3Rpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9RVUVTVElPTiA9IFwidXNlci9kZWxldGUtcXVlc3Rpb24vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9RVUVTVElPTlMgPSBcInVzZXIvZ2V0LXF1ZXN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NLSUxMUyA9IFwiZ2V0LXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfVVNFUl9TS0lMTFMgPSBcInVzZXIvZ2V0LXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9BRERfU0tJTEwgPSBcInVzZXIvYWRkLXNraWxsc1wiO1xyXG5leHBvcnQgY29uc3QgVV9TQVZFX0xPQ0FMSVRZID0gXCJ1c2VyL3NhdmUtbG9jYWxpdHktaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVV9TQVZFX1BPUlRGT0xJTyA9IFwidXNlci9zYXZlLXBvcnRmb2xpby1pbWFnZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHT09HTEVfUExBQ0VTX0JBU0VfVVJMID0gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2VcIjtcclxuZXhwb3J0IGNvbnN0IEdPT0dMRV9QTEFDRVNfQVBJID0gXCJBSXphU3lCaGxtNWRmc3dDbjNlUExiSGdpVjFFdVE0OGs5U2RZQ3dcIjtcclxuLy9leHBvcnQgY29uc3QgR09PR0xFX1BMQUNFU19BUEkgPSBcIkFJemFTeUFHemJELWJXeVNDSGh2cEt0aV80MEpzdnRpM1RsanhCOFwiO1xyXG5cclxuLy9NWSBQRVRTXHJcbmV4cG9ydCBjb25zdCBVX0FERF9QRVQgPSBcInVzZXIvYWRkLW5ldy1wZXRcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FMTF9QRVRTID0gXCJ1c2VyL2dldC1hbGwtcGV0c1wiO1xyXG5leHBvcnQgY29uc3QgVV9TSU5HTEVfUEVUID0gXCJ1c2VyL2dldC1zaW5nbGUtcGV0L1wiO1xyXG5leHBvcnQgY29uc3QgVV9VUERBVEVfUEVUID0gXCJ1c2VyL3VwZGF0ZS1wZXQtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfREVMRVRFX1BFVCA9IFwidXNlci9kZWxldGUtcGV0LWluZm8vXCI7XHJcblxyXG4vL01ZIFNlcnZpY2VcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NFUlZJQ0VTID0gXCJnZXQtc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FWQUlMQUJMRV9TRVJWSUNFUyA9IFwic2l0dGVyL3NlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NFVF9BVkFJTEFCTEVfU0VSVklDRVMgPSBcInNpdHRlci9zZXJ2aWNlLWF2YWlsYWJpbGl0eVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQVZBSUxBQklMSVRZID0gXCJzaXR0ZXIvYXZhaWxhYmlsaXR5LXNlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BVkFJTEFCSUxJVFlfQllfREFURVMgPSBcInNpdHRlci9kYXRlLWF2YWlsYWJpbGl0eS1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9CT09LTUFSS19TSVRURVIgPSBcIm1hcmstYXMtZmF2b3JpdGVcIlxyXG5cclxuLy9Cb2FyZGluZ1xyXG5leHBvcnQgY29uc3QgVV9BQ1RJVkVfQk9BUkRJTkcgPSBcInVzZXIvYm9hcmRpbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9CT0FSRElOR19QUkVGRVJFTkNFID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfQk9BUkRJTkdfRElTQ09VTlRTID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9CT0FSRElOR19JTkZPID0gXCJ1c2VyL2JvYXJkaW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0JPQVJESU5HX1BSRVZJRVcgPSBcInVzZXIvYWxsLWJvYXJkaW5nLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy9Ib3VzZSBzaXR0aW5nXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9IT1VTRV9TSVRUSU5HID0gXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0hPVVNFX1NJVFRJTkdfSU5GTyA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfU0lUVElOR19TRVJWSUNFX0ZFRSA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9TSVRUSU5HX0RJU0NPVU5UUyA9IFwidXNlci9ob3VzZS1zaXR0aW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX1NJVFRJTkdfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXID1cclxuICBcInVzZXIvYWxsLWhvdXNlLXNpdHRpbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0RBWSBjYXJlXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9EQVlfQ0FSRSA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5cclxuLy9Ecm9wLWluIHZpc2l0XHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9EUk9QX0lOX1ZJU0lUUyA9IFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPID0gXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSA9IFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lURVNfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMgPVxyXG4gIFwidXNlci9kcm9wLWluLXZpc2l0LXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9EUk9QX0lOX1BSRVZJRVcgPSBcInVzZXIvYWxsLWRyb3AtaW4tdmlzaXQtc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL1BFVCB3YWxraW5nIHZpc2l0c1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfUEVUX0RBWV9DQVJFX0lORk8gPSBcInVzZXIvZGF5LWNhcmUtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfREFZX0NBUkVfU0VSVklDRV9GRUVTID0gXCJ1c2VyL2RheS1jYXJlLXNlcnZpY2UtZmVlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfREFZX0NBUkVfUFJFRkVSRU5DRSA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLXByZWZlcmVuY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLWRpc2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX0RBWV9DQVJFX1BSRVZJRVcgPSBcInVzZXIvYWxsLWRheS1jYXJlLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy8gIERvZyB3YWxraW5nXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9QRVRfV0FMS0lORyA9IFwidXNlci93YWxraW5nLXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX0lORk8gPSBcInVzZXIvd2Fsa2luZy1zZXJ2aWNlLWluZm8vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL3dhbGtpbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL3dhbGtpbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9ET0dfV0FMS0lOR19ESVNDT1VOVCA9IFwidXNlci93YWxraW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXID0gXCJ1c2VyL2FsbC13YWxraW5nLXNlcnZpY2UtaW5mb1wiO1xyXG5cclxuLy9TaXR0ZXIgUmVxdWVzdFxyXG5leHBvcnQgY29uc3QgVV9QRVRfQURESVRJT05BTF9SRVFVRVNUID0gXCJzaXR0ZXIvcGV0LWFkZGl0aW9uYWwtc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUEVUX0FNT1VOVF9DQUxDVUxBVElPTiA9IFwic2l0dGVyL3BldC1hbW91bnQtY2FsY3VsYXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX1JFUVVFU1RfU0lUVEVSID0gXCJzaXR0ZXIvcGV0LXJlcXVlc3RcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1JFUVVFU1RfREVUQUlMID0gXCJzaXR0ZXIvcGV0LXJlcXVlc3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyA9IFwiY2hhbmdlLXNpdHRlci1yZXF1ZXN0LXN0YXR1c1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZID0gXCJzaXR0ZXIvcGV0LXNlcnZpY2UtYXZhaWxhYmlsaXR5XCI7XHJcbmV4cG9ydCBjb25zdCBVX0NPTkZJUk1fUEFZTUVOVCA9IFwic2l0dGVyL2NvbmZpcm0tcGF5bWVudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfUEFZTUVOVF9ISVNUT1JZID0gXCJwYXltZW50LWhpc3RvcnlcIjtcclxuXHJcbi8vR1JPT01JTkdcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0dST09NSU5HID0gXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9HUk9PTUlOR19JTkZPID0gXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BFVF9TRVJWSUNFID0gXCJnZXQtZ3Jvb21pbmctc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR1JPT01JTkdfU0VSVklDRV9GRUUgPSBcInVzZXIvZ3Jvb21pbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSA9XHJcbiAgXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR1JPT01JTkdfU0VSVklDRV9ESVNDT1VOVCA9IFwidXNlci9ncm9vbWluZy1zZXJ2aWNlLWRpc2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfR1JPT01JTkdfUFJFVklFVyA9IFwidXNlci9hbGwtZ3Jvb21pbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0hvdXNlIGNhbGxcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0hPVVNFX0NBTEwgPSBcInVzZXIvaG91c2UtY2FsbC1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfQ0FMTF9JTkZPID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfQ0FMTF9TRVJWSUNFID0gXCJnZXQtaG91c2UtY2FsbC1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9DQUxMX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX0NBTExfUFJFRkVSRU5DRSA9IFwidXNlci9ob3VzZS1jYWxsLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfQ0FMTF9ESVNDT1VOVCA9IFwidXNlci9ob3VzZS1jYWxsLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9IT1VTRV9DQUxMX1BSRVZJRVcgPSBcInVzZXIvYWxsLWhvdXNlLWNhbGwtc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0Rhc2hib2FyZFxyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lUVEVSX1JFU0VSVkFUSU9OUyA9IFwiZ2V0LXNpdHRlci1yZXNlcnZhdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1VTRVJfUkVTRVJWQVRJT05TID0gXCJnZXQtdXNlci1yZXNlcnZhdGlvbnNcIjtcclxuXHJcbi8vQ0hBVFxyXG5leHBvcnQgY29uc3QgVV9TRU5EX01FU1NBR0UgPSBcInNlbmQtbWVzc2FnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9SRUFEX1NUQVRVUyA9IFwidGhyZWFkLXJlYWQtc3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9USFJFQURfQk9PS0lORyA9IFwiZ2V0LXRocmVhZC1ib29raW5ncy9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQVJSQU5HX01FRVRVUCA9IFwiY3JlYXRlLW1lZXQtdXBcIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBTkdFX01FRVRVUF9TVEFUVVMgPSBcIm1lZXQtdXAtc3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9NRUVUVVBTID0gXCJnZXQtbWVldC11cC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBVF9BQ1RJT04gPSBcImNoYXQtdGhyZWFkLXN0YXR1c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyA9IFwic2l0dGVyL3JlcXVlc3QtdHJhbnNwb3J0LWFtb3VudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQUREX1RSQU5TUE9SVF9DSEFSR0VTID0gXCJzaXR0ZXIvcmVxdWVzdC10cmFuc3BvcnQtYW1vdW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgIFVfVVBEQVRFX1JFUVVFU1RfU1RBVFVTID0gXCJjaGFuZ2Utc2l0dGVyLXJlcXVlc3Qtc3RhdHVzXCI7XHJcblxyXG4vL1BFVCBTUE9UXHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BTExfU1BPVCA9IFwic2l0dGVyL3Nwb3RzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9GQVZPUklURV9TUE9UID0gXCJnZXQtZmF2b3JpdGUtc3BvdHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUEVUX1NQT1RfQ0FURUdPUklFUyA9IFwiZ2V0LXNwb3QtY2F0ZWdvcmllc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX1NQT1RTID0gXCJnZXQtc3BvdHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BFVF9TUE9UX0RFVEFJTFMgPSBcInNwb3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QQVlNRU5UX01FVEhPRFMgPSBcImdldC1wYXltZW50LW1ldGhvZHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1JFU0VSVkFUSU9OX1RZUEVTID0gXCJnZXQtcmVzZXJ2YXRpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9TTU9LSU5HX0NFU1NJT05TID0gXCJnZXQtc21va2luZy1jZXNzaW9uc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEFSS0lORyA9IFwiZ2V0LXBhcmtpbmdzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9MQU5HQVVHRVMgPSBcImdldC1sYW5ndWFnZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfQUREX1NQT1QgPSBcInNpdHRlci9jcmVhdGUtc3BvdFwiO1xyXG5leHBvcnQgY29uc3QgVV9VUERBVEVfU1BPVCA9IFwic2l0dGVyL3VwZGF0ZS1zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9ERUxFVEVfU1BPVCA9IFwic2l0dGVyL3JlbW92ZS1zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lOR0xFX1NQT1QgPSBcInNpdHRlci9zcG90L1wiO1xyXG5leHBvcnQgY29uc3QgVV9NQVJLX1VOTUFSS19TUE9UID0gXCJtYXJrLXNwb3QtYXMtZmF2b3JpdGVcIjtcclxuZXhwb3J0IGNvbnN0IFVfUkVWSUVXX1NQT1QgPSBcInNwb3QtcmV2aWV3LXJhdGVcIjtcclxuXHJcbi8vQ09NTU9OXHJcbmV4cG9ydCBjb25zdCBVX1JBVEVfU0lUVEVSID0gXCJzaXR0ZXItcmV2aWV3LXJhdGVcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0NJVElFUyA9IFwiZ2V0LWNpdGllcy9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0NPVVRSSUVTID0gXCJnZXQtY291bnRyaWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QRVRTID0gXCJnZXQtcGV0c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQlJFRURfV0lUSF9UWVBFID0gXCJnZXQtYnJlZWRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0lNQUdFX1VQTE9BRCA9IFwidXBsb2FkXCI7XHJcbmV4cG9ydCBjb25zdCBVX1VQTE9BRF9QUk9GSUxFX1BJQ1RVUkUgPSBcInVzZXIvc2F2ZS1wcm9maWxlLXBpY1wiO1xyXG5leHBvcnQgY29uc3QgVV9GSUxURVJFRF9BVkFJTEFCTEVfU0lUVEVSID0gXCJnZXQtYXZhaWxhYmxlLXNpdHRlcnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NJTkdMRV9TSVRURVIgPSBcImdldC1zaXR0ZXItcHJvZmlsZS9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NJVFRFUl9BVkFJTEFCSUxJVFkgPSBcInNpdHRlci9wZXQtc2VydmljZS1hdmFpbGFiaWxpdHlcIjtcclxuZXhwb3J0IGNvbnN0IFVfVVBMT0FEX0RPQ1VNRU5UUyA9IFwidXNlci91cGxvYWQtZG9jdW1lbnRcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0ZBVk9SSVRFX1NJVFRFUiA9IFwiZ2V0LWZhdm9yaXRlLXNpdHRlcnNcIjtcclxuXHJcbi8vUGF5bWVudCBDYXJkICYgQmFuayBkZXRhaWxzXHJcbmV4cG9ydCBjb25zdCBVX0FERF9DQVJEID0gXCJ1c2VyL2FkZC1jYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9DQVJEID0gXCJ1c2VyL2dldC1jYXJkc1wiO1xyXG5leHBvcnQgY29uc3QgVV9ERUxFVEVfQ0FSRCA9IFwidXNlci9kZWxldGUtY2FyZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBVX0FERF9CQU5LX0FDQ09VTlQgPSBcInVzZXIvY3JlYXRlLWJhbmstYWNjb3VudFwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFOS19BQ0NPVU5UID0gXCJ1c2VyL2dldC1hbGwtYmFuay1hY2NvdW50c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQkFOS19ERVRBSUxTID0gXCJ1c2VyL2dldC1iYW5rLWRldGFpbHMvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9CQU5LX0FDQ09VTlQgPSBcInVzZXIvZGVsZXRlLWJhbmstYWNjb3VudC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfTUFLRV9CQU5LX0RFRkFVTFQgPSAndXNlci9kZWZhdWx0LWJhbmstYWNjb3VudCc7XHJcbmV4cG9ydCBjb25zdCBVX01BS0VfQ0FSRF9fREVGQVVMVCA9ICd1c2VyL21ha2UtZGVmYXVsdC1jYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBVX0FQUExZX0NPVVBPTiA9ICdzaXR0ZXIvYXBwbHktY291cG9uJztcclxuZXhwb3J0IGNvbnN0IFVfUkVNT1ZFX0NPVVBPTiA9ICdzaXR0ZXIvcmVtb3ZlLWNvdXBvbi8nO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQ09VUE9OID0gJ3VzZXIvZ2V0LXNhdmVkLWNvdXBvbnMvJztcclxuZXhwb3J0IGNvbnN0IFVfR0VUX05FV1MgPSAnZ2V0LW5ld3MtZXZlbnRzLzEnO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfRVZFTlQgPSAnZ2V0LW5ld3MtZXZlbnRzLzInO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lOR0xFX05FV1M9XCJzaW5nbGUtbmV3cy1ldmVudC8yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3VjY2Vzc09wdGlvbnMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1jZW50ZXInLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdtaWRuaWdodGJsdWUnLFxyXG5cclxuICAgICAgICBjb2xvcjogJ21pZG5pZ2h0Ymx1ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGNsb3NlU3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Y29yYWwnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmFpbHVyZU9wdGlvbnMgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1jZW50ZXInLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdtaWRuaWdodGJsdWUnLFxyXG5cclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Ymx1ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGNsb3NlU3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2xpZ2h0Y29yYWwnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICB9LFxyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSV9TRUFSQ0hfU0lUVEVSIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zZWFyY2hTaXR0ZXIuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4uLy4uL3B1YmxpYy9sYW5nL1N0cmluZ3NcIjtcclxuaW1wb3J0IEFQSSBmcm9tIFwiLi4vLi4vYXBpL0FwaVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZXJyb3JPcHRpb25zLCBzdWNjZXNzT3B0aW9uc30gZnJvbSBcIi4uLy4uL3B1YmxpYy9hcHBEYXRhL0FwcERhdGFcIjtcclxuaW1wb3J0IHt1c2VTbmFja2Jhcn0gZnJvbSAncmVhY3Qtc2ltcGxlLXNuYWNrYmFyJztcclxuXHJcbmludGVyZmFjZSBJX1BST1BTIHtcclxuICBwcm9wczogSV9TRUFSQ0hfU0lUVEVSO1xyXG4gIHNlcnZpY2VJZDogYW55O1xyXG4gIGdldFNpdHRlcjogYW55O1xyXG4gIHBldFR5cGU6IGFueTtcclxuXHJcbn1cclxuXHJcbmxldCBhcGkgPSBuZXcgQVBJKCk7XHJcblxyXG5jb25zdCBTaXR0ZXJPYmplY3Q6IFJlYWN0LkZDPElfUFJPUFM+ID0gKHsgcHJvcHMsIHNlcnZpY2VJZCwgZ2V0U2l0dGVyLCBwZXRUeXBlIH06IElfUFJPUFMpID0+IHtcclxuICBjb25zdCBbb3BlblN1Y2Nlc3MsIGNsb3NlU3VjY2Vzc10gPSB1c2VTbmFja2JhcihzdWNjZXNzT3B0aW9ucyk7XHJcbiAgY29uc3QgW29wZW5FcnJvciwgY2xvc2VFcnJvcl0gPSB1c2VTbmFja2JhcihlcnJvck9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBnZXRUcmltbWVkQWRkcmVzcyA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDEyKSB7XHJcbiAgICAgIGxldCBuZXdTdHJpbmcgPSBhZGRyZXNzLnN1YnN0cmluZygwLCAxMikgKyBcIi4uLlwiO1xyXG4gICAgICByZXR1cm4gbmV3U3RyaW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGFkZHJlc3M7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiBjb25zdCBoYW5kbGVCb29rbWFya1NpdHRlciA9ICgpID0+IHtcclxuICAgIGFwaS5tYXJrVW5tYXJrU2l0dGVyKHtzaXR0ZXJfaWQ6IHByb3BzLmlkfSkudGhlbigocmVzKT0+IHtcclxuICAgICAgaWYocmVzLmRhdGEuc3RhdHVzID09PSAgMjAwKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLmlzX2Zhdm9yaXRlKSB7XHJcbiAgICAgICAgICBvcGVuU3VjY2VzcyhzdHJpbmdzLnVubWFya1NpdHRlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9wZW5TdWNjZXNzKHN0cmluZ3MuYm9va21hcmtTaXR0ZXIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U2l0dGVyKClcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJvciBpcycsIGVycm9yKVxyXG4gICAgICAgIC8vb3BlblNuYWNrYmFyKHN0cmluZ3MuZXJyb3JVcGRhdGluZ1N0YXR1cyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNlYXJjaC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXNpdHRlci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMlwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvc2l0dGVyLXByb2ZpbGUvXCIgKyBwcm9wcy5pZCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtc2l0dGVyLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5wcm9maWxlX3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1zaXR0ZXItZGV0YWlscyBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZpcnN0bmFtZSArIFwiIFwiICsgcHJvcHMubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5hZGRyZXNzID8gcHJvcHMuYWRkcmVzcy5oaWRlX2FkZHJlc3MgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICBnZXRUcmltbWVkQWRkcmVzcyhwcm9wcy5hZGRyZXNzLmFkZHJlc3MpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5hZGRyZXNzLmNpdHkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5hZGRyZXNzLnBvc3Rjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCI6XCJcIn1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTUgbXktYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBwcm9maWxlLXNoYXJlLWljb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2hhcmUtZHJvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVCb29rbWFya1NpdHRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzX2Zhdm9yaXRlICYmIDxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1wiI2ZmYzEwN1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCAxOTAuOVYxODUuMUMwIDExNS4yIDUwLjUyIDU1LjU4IDExOS40IDQ0LjFDMTY0LjEgMzYuNTEgMjExLjQgNTEuMzcgMjQ0IDg0LjAyTDI1NiA5NkwyNjcuMSA4NC4wMkMzMDAuNiA1MS4zNyAzNDcgMzYuNTEgMzkyLjYgNDQuMUM0NjEuNSA1NS41OCA1MTIgMTE1LjIgNTEyIDE4NS4xVjE5MC45QzUxMiAyMzIuNCA0OTQuOCAyNzIuMSA0NjQuNCAzMDAuNEwyODMuNyA0NjkuMUMyNzYuMiA0NzYuMSAyNjYuMyA0ODAgMjU2IDQ4MEMyNDUuNyA0ODAgMjM1LjggNDc2LjEgMjI4LjMgNDY5LjFMNDcuNTkgMzAwLjRDMTcuMjMgMjcyLjEgLjAwMDMgMjMyLjQgLjAwMDMgMTkwLjlMMCAxOTAuOXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz59XHJcbiAgICAgICAgICAgICAgICAgICAgeyFwcm9wcy5pc19mYXZvcml0ZSAmJiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQ0IDg0TDI1NS4xIDk2TDI2Ny4xIDg0LjAyQzMwMC42IDUxLjM3IDM0NyAzNi41MSAzOTIuNiA0NC4xQzQ2MS41IDU1LjU4IDUxMiAxMTUuMiA1MTIgMTg1LjFWMTkwLjlDNTEyIDIzMi40IDQ5NC44IDI3Mi4xIDQ2NC40IDMwMC40TDI4My43IDQ2OS4xQzI3Ni4yIDQ3Ni4xIDI2Ni4zIDQ4MCAyNTYgNDgwQzI0NS43IDQ4MCAyMzUuOCA0NzYuMSAyMjguMyA0NjkuMUw0Ny41OSAzMDAuNEMxNy4yMyAyNzIuMSAwIDIzMi40IDAgMTkwLjlWMTg1LjFDMCAxMTUuMiA1MC41MiA1NS41OCAxMTkuNCA0NC4xQzE2NC4xIDM2LjUxIDIxMS40IDUxLjM3IDI0NCA4NEMyNDMuMSA4NCAyNDQgODQuMDEgMjQ0IDg0TDI0NCA4NHpNMjU1LjEgMTYzLjlMMjEwLjEgMTE3LjFDMTg4LjQgOTYuMjggMTU3LjYgODYuNCAxMjcuMyA5MS40NEM4MS41NSA5OS4wNyA0OCAxMzguNyA0OCAxODUuMVYxOTAuOUM0OCAyMTkuMSA1OS43MSAyNDYuMSA4MC4zNCAyNjUuM0wyNTYgNDI5LjNMNDMxLjcgMjY1LjNDNDUyLjMgMjQ2LjEgNDY0IDIxOS4xIDQ2NCAxOTAuOVYxODUuMUM0NjQgMTM4LjcgNDMwLjQgOTkuMDcgMzg0LjcgOTEuNDRDMzU0LjQgODYuNCAzMjMuNiA5Ni4yOCAzMDEuOSAxMTcuMUwyNTUuMSAxNjMuOXpcIi8+PC9zdmc+fVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2hhcmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaGFyZSB0aGlzIHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NvY2lhbC1pbWc0LnBuZ1wiIC8+IHZpYSBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NvY2lhbC1pbWczLnBuZ1wiIC8+IHZpYSB3aGF0c2FwcFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NvY2lhbC1pbWcyLnBuZ1wiIC8+IHZpYSBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29jaWFsLWltZzEucG5nXCIgLz4gdmlhIG1lc3NlbmdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NvY2lhbC1pbWcxLnBuZ1wiIC8+IENvcHkgbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvc2l0dGVyLXByb2ZpbGUvXCIgKyBwcm9wcy5pZCB9fT5cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC05XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdXNlaG9sZC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5hZGRyZXNzLmxpdmVfaW5faG91c2UgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIGZvbnQtMTIgZC1pbmxpbmVcIj5JcyBhbiBhcGFydG1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuYWRkcmVzcy5ub25fc21va2luZ19ob3VzZWhvbGQgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIGZvbnQtMTIgZC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vbi1zbW9raW5nIEhvdXNlaG9sZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5hZGRyZXNzLmRvZ19vdGhlcl9wZXRzID09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LTEyIGQtaW5saW5lXCI+SGFzIG5vIGRvZ3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuYWRkcmVzcy5mZW5jZWRfeWFyZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIGZvbnQtMTIgZC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERvZXMgbm90IGhhdmUgYSB5YXJkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmFkZHJlc3MuZG9nX290aGVyX3BldHMgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgZm9udC0xMiBkLWlubGluZVwiPkhhcyBwZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgcC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Qtbm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2Jvb2tpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdHRlcklkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZTogc2VydmljZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9wcy5maXJzdG5hbWUgKyBcIiBcIiArIHByb3BzLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXRUeXBlOiBKU09OLnN0cmluZ2lmeShwZXRUeXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtcIi9ib29raW5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkNvbnRhY3Qgbm93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogXCIvc2l0dGVyLXByb2ZpbGUvXCIgKyBwcm9wcy5pZCwgcXVlcnk6IHtzZXJ2aWNlSWQ6IHNlcnZpY2VJZH0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyBkZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTkgY29sLWxnLTkgY29sLXhsLTlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZlYXR1cmVkLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggaG90ZWwtcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctc3RhciBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwic3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NzYgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1zdGFyIGZhLXctMTggZmEtMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTAgIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm92ZXJhbGxfcmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBmb250LW5vcm1hbCBmb250LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2AoJHtwcm9wcy50b3RhbF9yZXZpZXd9IHJldmlld3MpYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBweC0yXCI+fDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtbm9ybWFsIGZvbnQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31SZXBlYXQgQ2xpZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTMgY29sLWxnLTMgY29sLXhsLTMgbXktYXV0byBwLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wICBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2DCpSR7cHJvcHMucHJpY2V9YH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtbm9ybWFsIGZvbnQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIC8gbmlnaHRcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChTaXR0ZXJPYmplY3QpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Mb2FkZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgZmxleDogMSwgZGlzcGxheTogXCJmbGV4XCIgfX1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfVxyXG4gICAgICB0aXRsZT17XCIwXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxzdmdcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MCxcclxuICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN2Z31cclxuICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICBpZD1cImxvYWRlci0xXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbiAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgd2lkdGg9XCIyMDBweFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDAgNDBcIlxyXG4gICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDQwIDQwXCJcclxuICAgICAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBvcGFjaXR5PVwiMC4yXCJcclxuICAgICAgICAgIGZpbGw9XCIjMDAwXCJcclxuICAgICAgICAgIGQ9XCJNMjAuMjAxLDUuMTY5Yy04LjI1NCwwLTE0Ljk0Niw2LjY5Mi0xNC45NDYsMTQuOTQ2YzAsOC4yNTUsNi42OTIsMTQuOTQ2LDE0Ljk0NiwxNC45NDZcclxuICAgIHMxNC45NDYtNi42OTEsMTQuOTQ2LTE0Ljk0NkMzNS4xNDYsMTEuODYxLDI4LjQ1NSw1LjE2OSwyMC4yMDEsNS4xNjl6IE0yMC4yMDEsMzEuNzQ5Yy02LjQyNSwwLTExLjYzNC01LjIwOC0xMS42MzQtMTEuNjM0XHJcbiAgICBjMC02LjQyNSw1LjIwOS0xMS42MzQsMTEuNjM0LTExLjYzNGM2LjQyNSwwLDExLjYzMyw1LjIwOSwxMS42MzMsMTEuNjM0QzMxLjgzNCwyNi41NDEsMjYuNjI2LDMxLjc0OSwyMC4yMDEsMzEuNzQ5elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgICAgICAgZD1cIk0yNi4wMTMsMTAuMDQ3bDEuNjU0LTIuODY2Yy0yLjE5OC0xLjI3Mi00Ljc0My0yLjAxMi03LjQ2Ni0yLjAxMmgwdjMuMzEyaDBcclxuICAgIEMyMi4zMiw4LjQ4MSwyNC4zMDEsOS4wNTcsMjYuMDEzLDEwLjA0N3pcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJ4bWxcIlxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXHJcbiAgICAgICAgICAgIGZyb209XCIwIDIwIDIwXCJcclxuICAgICAgICAgICAgdG89XCIzNjAgMjAgMjBcIlxyXG4gICAgICAgICAgICBkdXI9XCIwLjVzXCJcclxuICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9wYXRoPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgd2l0aEdvb2dsZU1hcCxcclxuICBHb29nbGVNYXAsXHJcbiAgTWFya2VyLFxyXG59IGZyb20gXCJyZWFjdC1nb29nbGUtbWFwc1wiO1xyXG5pbXBvcnQgUmVhY3QgLCB7IHVzZVN0YXRlICB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3Bvc2l0aW9ufSBmcm9tIFwiZG9tLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7SV9TRUFSQ0hfU0lUVEVSfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3NlYXJjaFNpdHRlci5pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IHtcclxuICBTdGFuZGFsb25lU2VhcmNoQm94LFxyXG59ID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94XCIpO1xyXG5pbnRlcmZhY2UgSV9QUk9QUyB7XHJcbiAgICBwcm9wczogSV9TRUFSQ0hfU0lUVEVSO1xyXG4gICAgc2VydmljZUlkOiBhbnk7XHJcbiAgICBnZXRTaXR0ZXI6IGFueTtcclxuICAgIHBldFR5cGU6IGFueTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBNeU1hcENvbXBvbmVudCA9IHdpdGhTY3JpcHRqcyhcclxuICB3aXRoR29vZ2xlTWFwKChwcm9wczogYW55KSA9PiB7XHJcbiAgICBsZXQgbGF0bG9uZyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvcHMubGF0bG5nID8gcHJvcHMubGF0bG5nLmxlbmd0aCA/IHByb3BzLmxhdGxuZ1swXSA6IHByb3BzLmxhdGxuZzogeyBsYXQ6IC0zNC4zOTcsIGxuZzogMTUwLjY0NCB9KSk7XHJcbiAgICBjb25zdCBbc2hvd0luZm8gLCBzZXRTaG93SW5mb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgICAgY29uc3QgW2luZm8gLCBzZXRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT57XHJcbiAgICAgICBsZXQgcGF0aCA9IHsgcGF0aG5hbWU6IFwiL3NpdHRlci1wcm9maWxlL1wiICsgcHJvcHMuZGF0YVtpbmRleF0uaWQsIHF1ZXJ5OiB7c2VydmljZUlkOiBwcm9wcy5zZXJ2aWNlSWR9ICB9XHJcbiAgICAgICByb3V0ZXIucHVzaChwYXRoKVxyXG4gICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93SW5mbyh0cnVlKVxyXG4gICAgICAgIHNldEluZm8ocHJvcHMuZGF0YVtpbmRleF0uZmlyc3RuYW1lK3Byb3BzLmRhdGFbaW5kZXhdLmxhc3RuYW1lKVxyXG5cclxuICAgICAgfVxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VFeGl0ID0gKCkgPT57XHJcbiAgICAgICAgc2V0U2hvd0luZm8oZmFsc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgZGVmYXVsdFpvb209ezE1fVxyXG4gICAgICAgIHpvb209ezE1fVxyXG4gICAgICAgIGNlbnRlcj17bGF0bG9uZ31cclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNoYW5nZUxhdExuZ31cclxuICAgICAgPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7cHJvcHMubGF0bG5nICYmIHByb3BzLmxhdGxuZy5sZW5ndGggPyBwcm9wcy5sYXRsbmcubWFwKCh2YWwsIGluZGV4KT0+XHJcbiAgICAgICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uRHJhZ0VuZD17cHJvcHMub25DaGFuZ2VMYXRMbmd9XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uPXsyfVxyXG4gICAgICAgICAgICAgIGRyYWdnYWJsZT17cHJvcHMuZHJhZ2dhYmxlfVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXt2YWx9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhlKT0+aGFuZGxlTW91c2VPdmVyKGluZGV4KX1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtoYW5kbGVNb3VzZUV4aXR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpPT57aGFuZGxlQ2xpY2soaW5kZXgpfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTo8TWFya2VyXHJcbiAgICAgICAgICAgICAgb25EcmFnRW5kPXtwcm9wcy5vbkNoYW5nZUxhdExuZ31cclxuICAgICAgICAgICAgICBhbmltYXRpb249ezJ9XHJcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtwcm9wcy5kcmFnZ2FibGV9XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249e2xhdGxvbmd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICB7c2hvd0luZm8gJiYgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggZG90dGVkIGJsYWNrXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7d2lkdGg6IFwiMTIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRncmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOlwiLTMzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDpcIjMzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxXCJ9fT4ge2luZm99PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgKTtcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNYXBDb21wb25lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBcInJlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgRGF5UGlja2VySW5wdXQgZnJvbSBcInJlYWN0LWRheS1waWNrZXIvRGF5UGlja2VySW5wdXRcIjtcclxuaW1wb3J0IHtcclxuICAgIHBldCxcclxuICAgIHBldENvdW50LFxyXG4gICAgcGV0U2l6ZSxcclxuICAgIHByaWNlcyxcclxuICAgIHNlbGVjdCxcclxuICAgIHNlcnZpY2VEYXRhLFxyXG4gICAgU2VydmljZVRpbWUsXHJcbiAgICBzb3J0LFxyXG59IGZyb20gXCIuLi9wdWJsaWMvYXBwRGF0YS9BcHBEYXRhXCI7XHJcbmltcG9ydCBTaXR0ZXJPYmplY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoU2l0dGVyL1NpdHRlck9iamVjdFwiO1xyXG5pbXBvcnQge3N0cmluZ3N9IGZyb20gXCIuLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4uL2FwaS9BcGlcIjtcclxuaW1wb3J0IHtBeGlvc1Jlc3BvbnNlfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi4vbW9kZWxzL3Jlc3BvbnNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9Mb2FkZXJcIjtcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwicmVhY3QtZ29vZ2xlLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQge0lfU0VBUkNIX1NJVFRFUn0gZnJvbSBcIi4uL21vZGVscy9zZWFyY2hTaXR0ZXIuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi91dGlscy9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IFwicmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHtHT09HTEVfUExBQ0VTX0FQSX0gZnJvbSBcIi4uL2FwaS9Db25zdGFudHNcIjtcclxuaW1wb3J0IE15TWFwQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXIvbXlQcm9maWxlL01hcFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwidW5pdmVyc2FsLWNvb2tpZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICBjaGVja0luRGF0ZTogRGF0ZTtcclxuICAgIGNoZWNrT3V0RGF0ZTogRGF0ZTtcclxuICAgIHBldDogc2VsZWN0O1xyXG4gICAgc2VydmljZTogc2VsZWN0O1xyXG4gICAgc2VydmljZVRpbWU6IHNlbGVjdDtcclxuICAgIHBldFNpemU6IHNlbGVjdDtcclxuICAgIHBldENvdW50OiBzZWxlY3Q7XHJcbiAgICBwcmljZTogc2VsZWN0O1xyXG4gICAgc2l0dGVyczogSV9TRUFSQ0hfU0lUVEVSW107XHJcbiAgICBtaW5QcmljZTogbnVtYmVyO1xyXG4gICAgbWF4UHJpY2U6IG51bWJlcjtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBhbGxQcmljZTogYm9vbGVhbjtcclxuICAgIGxhdDogc3RyaW5nO1xyXG4gICAgbG5nOiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0VmFsdWU6IHN0cmluZztcclxuICAgIHRyYW5zcG9ydGF0aW9uOiAxIHwgMDtcclxuICAgIGNsb3Nlc3Rfc2l0dGVyOiAxIHwgMDtcclxuICAgIGxhdGxuZzogYW55W10sXHJcbiAgICB1c2VyX2lkOiBudW1iZXI7XHJcbiAgICBzZXJ2aWNlRGF0YTphbnlbXTtcclxuICAgIHNhdmVTZWFyY2g6Ym9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgYXBpID0gbmV3IEFQSSgpO1xyXG5jb25zdCBTbGlkZXIgPSByZXF1aXJlKFwicmMtc2xpZGVyXCIpO1xyXG5jb25zdCBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcCA9IFNsaWRlci5jcmVhdGVTbGlkZXJXaXRoVG9vbHRpcDtcclxuY29uc3QgUmFuZ2UgPSBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcChTbGlkZXIuUmFuZ2UpO1xyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hTaXR0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElTdGF0ZT4ge1xyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuICAgIHNlYXJjaERhdGE7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaXR0ZXJzOiBbXSxcclxuICAgICAgICAgICAgY2hlY2tJbkRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGNoZWNrT3V0RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgcGV0OiBwZXRbMF0sXHJcbiAgICAgICAgICAgIHNlcnZpY2U6IHNlcnZpY2VEYXRhWzBdLFxyXG4gICAgICAgICAgICBzZXJ2aWNlVGltZTogU2VydmljZVRpbWVbMF0sXHJcbiAgICAgICAgICAgIHBldFNpemU6IHBldFNpemVbMF0sXHJcbiAgICAgICAgICAgIHBldENvdW50OiBwZXRDb3VudFswXSxcclxuICAgICAgICAgICAgcHJpY2U6IHByaWNlc1swXSxcclxuICAgICAgICAgICAgbWluUHJpY2U6IDEsXHJcbiAgICAgICAgICAgIG1heFByaWNlOiAxMDAwLFxyXG4gICAgICAgICAgICBhbGxQcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgbGF0OiBcIjBcIixcclxuICAgICAgICAgICAgbG5nOiBcIjBcIixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICB0cmFuc3BvcnRhdGlvbjogMSxcclxuICAgICAgICAgICAgY2xvc2VzdF9zaXR0ZXI6IDEsXHJcbiAgICAgICAgICAgIGxhdGxuZzogW10sXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IDAsXHJcbiAgICAgICAgICAgIHNlcnZpY2VEYXRhOiBzZXJ2aWNlRGF0YSxcclxuICAgICAgICAgICAgc2F2ZVNlYXJjaDpmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQZXRDaGFuZ2UgPSB0aGlzLmhhbmRsZVBldENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VydmljZVRpbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlcnZpY2VUaW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQZXRDb3VudENoYW5nZSA9IHRoaXMuaGFuZGxlUGV0Q291bnRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBldFNpemVDaGFuZ2UgPSB0aGlzLmhhbmRsZVBldFNpemVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlcnZpY2VDaGFuZ2UgPSB0aGlzLmhhbmRsZVNlcnZpY2VDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoZWNrSW5EYXlDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tJbkRheUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblRleHRDaGFuZ2UgPSB0aGlzLm9uVGV4dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVzZXRGaWx0ZXIgPSB0aGlzLnJlc2V0RmlsdGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRGaWx0ZXJlZEF2YWlsYWJsZVNpdHRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlYXJjaC1kYXRhJykpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VhcmNoLWRhdGEnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBldDogdGhpcy5zZWFyY2hEYXRhLnBldCxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2U6dGhpcy5zZWFyY2hEYXRhLnNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlVGltZTogdGhpcy5zZWFyY2hEYXRhLnNlcnZpY2VUaW1lLFxyXG4gICAgICAgICAgICAgICAgcGV0U2l6ZTogdGhpcy5zZWFyY2hEYXRhLnBldFNpemUsXHJcbiAgICAgICAgICAgICAgICBwZXRDb3VudDp0aGlzLnNlYXJjaERhdGEucGV0Q291bnQsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogdGhpcy5zZWFyY2hEYXRhLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tJbkRhdGU6IHRoaXMuc2VhcmNoRGF0YS5jaGVja0luRGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoZWNrT3V0RGF0ZTp0aGlzLnNlYXJjaERhdGEuY2hlY2tPdXREYXRlLFxyXG4gICAgICAgICAgICAgICAgbWluUHJpY2U6IHRoaXMuc2VhcmNoRGF0YS5taW5QcmljZSxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlOiB0aGlzLnNlYXJjaERhdGEubWF4UHJpY2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGV0OiBwZXRbMF0sXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlRGF0YVswXSxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VUaW1lOiBTZXJ2aWNlVGltZVswXSxcclxuICAgICAgICAgICAgICAgIHBldFNpemU6IHBldFNpemVbMF0sXHJcbiAgICAgICAgICAgICAgICBwZXRDb3VudDogcGV0Q291bnRbMF0sXHJcbiAgICAgICAgICAgICAgICBwcmljZTogcHJpY2VzWzBdLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tJbkRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjaGVja091dERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZTogMSxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlOiAxMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RhdGljRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VydmljZURhdGEpKTtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnBldC52YWx1ZSAhPT0gXCIxXCIpe1xyXG4gICAgICAgICAgICBzdGF0aWNEYXRhLnNwbGljZSg0LDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnN0YXRlLnBldC52YWx1ZT09PVwiM1wiIHx8IHRoaXMuc3RhdGUucGV0LnZhbHVlID09PSBcIjRcIil7XHJcbiAgICAgICAgICAgIHN0YXRpY0RhdGEuc3BsaWNlKDQsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZXJ2aWNlRGF0YTpzdGF0aWNEYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGlkID0gY29va2llcy5nZXQoXCJpZFwiKTtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcl9pZDogaWR9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnN0YXRlICYmIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dC5zdGF0ZSkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBTdHJpbmcodGhpcy5jb250ZXh0LnN0YXRlLmxhdCksXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBTdHJpbmcodGhpcy5jb250ZXh0LnN0YXRlLmxuZyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGV0OiBwZXQuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSA9PSB0aGlzLmNvbnRleHQuc3RhdGUucGV0KSxcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlRGF0YS5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSA9PSB0aGlzLmNvbnRleHQuc3RhdGUuc2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmNvbnRleHQuc3RhdGUuZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5jb250ZXh0LnN0YXRlLmRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGV0U2l6ZTogdGhpcy5jb250ZXh0LnN0YXRlLnBldFNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbnRleHQuc3RhdGUucGV0U2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBldFNpemVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJbkRhdGU6IHRoaXMuY29udGV4dC5zdGF0ZS5jaGVja0luRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjaGVja091dERhdGU6IHRoaXMuY29udGV4dC5zdGF0ZS5jaGVja091dERhdGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRTdGF0ZSh7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRGaWx0ZXJlZEF2YWlsYWJsZVNpdHRlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKHByZXZTdGF0ZSwgbmV4dFN0YXRlKSB7XHJcbiAgICBpZihuZXh0U3RhdGUuc2F2ZVNlYXJjaCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaC1kYXRhJywgSlNPTi5zdHJpbmdpZnkobmV4dFN0YXRlKSk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGVja0luRGF5Q2xpY2soZGF5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNoZWNrSW5EYXRlOiBkYXksXHJcbiAgICAgICAgICAgIGNoZWNrT3V0RGF0ZTogZGF5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoZWNrb3V0Q2xpY2soZGF5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tPdXREYXRlOiBkYXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZXJ2aWNlQ2hhbmdlKHNlcnZpY2U6IHNlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc2VydmljZS52YWx1ZSAhPSAxICYmIHNlcnZpY2UudmFsdWUgIT0gMjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VydmljZTogc2VydmljZSxcclxuICAgICAgICAgICAgY2hlY2tPdXREYXRlOiBjaGVjayA/IHRoaXMuc3RhdGUuY2hlY2tJbkRhdGUgOiB0aGlzLnN0YXRlLmNoZWNrT3V0RGF0ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZXJ2aWNlVGltZUNoYW5nZShwZXRUeXBlOiBzZWxlY3QpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VydmljZVRpbWU6IHBldFR5cGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGV0U2l6ZUNoYW5nZShwZXRTaXplOiBzZWxlY3QpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGV0U2l6ZTogcGV0U2l6ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQZXRDb3VudENoYW5nZShwZXRDb3VudDogc2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGV0Q291bnR9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQZXRDaGFuZ2UocGV0OiBzZWxlY3QpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRpY0RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNlcnZpY2VEYXRhKSk7XHJcbiAgICAgICAgaWYocGV0LnZhbHVlICE9PSBcIjFcIil7XHJcbiAgICAgICAgICAgIHN0YXRpY0RhdGEuc3BsaWNlKDQsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBldC52YWx1ZT09PVwiM1wiIHx8IHBldC52YWx1ZSA9PT0gXCI0XCIpe1xyXG4gICAgICAgICAgICBzdGF0aWNEYXRhLnNwbGljZSg0LDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcGV0OiBwZXQsXHJcbiAgICAgICAgICAgIHNlcnZpY2U6c2VydmljZURhdGFbMF0sXHJcbiAgICAgICAgICAgIHNlcnZpY2VEYXRhOnN0YXRpY0RhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRleHRDaGFuZ2U8VCBleHRlbmRzIGtleW9mIElTdGF0ZT4oXHJcbiAgICAgICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9IGFzIHtcclxuICAgICAgICAgICAgW1AgaW4gVF06IElTdGF0ZVtQXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21TdHlsZXMgPSB7XHJcbiAgICAgICAgb3B0aW9uOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBjb250cm9sOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICAgICAgICB3aWR0aDogMTQwLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQsIHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJvdmlkZWQsIGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzM4MzgzOFwiLCBmb250V2VpZ2h0OiBcIjUwMFwifTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBzb3J0RHJvcGRvd25TdHlsZXMgPSB7XHJcbiAgICAgICAgb3B0aW9uOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBjb250cm9sOiAocHJvdmlkZWQpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICAgICAgICB3aWR0aDogMTgwLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHNpbmdsZVZhbHVlOiAocHJvdmlkZWQsIHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJvdmlkZWQsIGZvbnRTaXplOiAxMiwgY29sb3I6IFwiIzM4MzgzOFwiLCBmb250V2VpZ2h0OiBcIjUwMFwifTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRGaWx0ZXJlZEF2YWlsYWJsZVNpdHRlcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgc2F2ZVNlYXJjaDp0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vZmlsdGVyZWQgYXBpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHBldF90eXBlOiB0aGlzLnN0YXRlLnBldC52YWx1ZSxcclxuICAgICAgICAgICAgc2VydmljZV9pZDogdGhpcy5zdGF0ZS5zZXJ2aWNlLnZhbHVlLFxyXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHlfc3RhcnQ6IHRoaXMuc3RhdGUuY2hlY2tJbkRhdGUsXHJcbiAgICAgICAgICAgIGF2YWlsYWJpbGl0eV9lbmQ6IHRoaXMuc3RhdGUuY2hlY2tPdXREYXRlLFxyXG4gICAgICAgICAgICBudW1iZXJfb2ZfcGV0czogdGhpcy5zdGF0ZS5wZXRDb3VudC52YWx1ZSxcclxuICAgICAgICAgICAgcGV0X3NpemU6IHRoaXMuc3RhdGUucGV0U2l6ZS52YWx1ZSxcclxuICAgICAgICAgICAgZm9yX2FsbF9wcmljZXM6IHRoaXMuc3RhdGUuYWxsUHJpY2UgPyAxIDogMCxcclxuICAgICAgICAgICAgdHJhbnNwb3J0YXRpb246IHRoaXMuc3RhdGUudHJhbnNwb3J0YXRpb24sXHJcbiAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICBtYXg6IHRoaXMuc3RhdGUubWF4UHJpY2UsXHJcbiAgICAgICAgICAgICAgICBtaW46IHRoaXMuc3RhdGUubWluUHJpY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHtcclxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiB0aGlzLnN0YXRlLmxhdCxcclxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogdGhpcy5zdGF0ZS5sbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb3Nlc3Rfc2l0dGVyOiB0aGlzLnN0YXRlLmNsb3Nlc3Rfc2l0dGVyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBhcGlcclxuICAgICAgICAgICAgLmdldEZpbHRlcmVkQXZpYWxhYmxlU2l0dGVyKGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTogQXhpb3NSZXNwb25zZTxSZXM8SV9TRUFSQ0hfU0lUVEVSW10+PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSByZXNwb25zZS5kYXRhLnJlc3BvbnNlLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtsYXQ6IHBhcnNlRmxvYXQodmFsLmFkZHJlc3MubWFwX2xhdGl0dWRlKSwgbG5nOiBwYXJzZUZsb2F0KHZhbC5hZGRyZXNzLm1hcF9sb25naXR1ZGUpfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5yZXNwb25zZS5maWx0ZXIodmFsID0+IHZhbC5pZCAhPSB0aGlzLnN0YXRlLnVzZXJfaWQpXHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzaXR0ZXJzOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdGxuZzogYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaC1kYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXNldEZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2l0dGVyczogW10sXHJcbiAgICAgICAgICAgIGNoZWNrSW5EYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBjaGVja091dERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIG1pblByaWNlOiAxLFxyXG4gICAgICAgICAgICBtYXhQcmljZTogMTAwMCxcclxuICAgICAgICAgICAgYWxsUHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgIGxhdDogXCIwXCIsXHJcbiAgICAgICAgICAgIGxuZzogXCIwXCIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgdHJhbnNwb3J0YXRpb246IDAsXHJcbiAgICAgICAgICAgIGxhdGxuZzogW10sXHJcbiAgICAgICAgICAgIHBldDogcGV0WzBdLFxyXG4gICAgICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlRGF0YVswXSxcclxuICAgICAgICAgICAgc2VydmljZVRpbWU6IFNlcnZpY2VUaW1lWzBdLFxyXG4gICAgICAgICAgICBwZXRTaXplOiBwZXRTaXplWzBdLFxyXG4gICAgICAgICAgICBwZXRDb3VudDogcGV0Q291bnRbMF0sXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZXNbMF0sXHJcbiAgICAgICAgICAgIHNlcnZpY2VEYXRhOiBzZXJ2aWNlRGF0YVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zdGF0ZS5jaGVja0luRGF0ZSkpLmZvcm1hdCgnXCJERC9NTS9ZWVlZXCInKVxyXG5jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNpdHRlcnMpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXIgc2VhcmNoLXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEyIGNvbC1sZy0xMiBjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmaWx0ZXItZGVzaWduXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLXNtLWF1dG8gY29sLW1kLWF1dG8gZm9ybS1ncm91cCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3N0cmluZ3MucGV0VHlwZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBldENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt0aGlzLmN1c3RvbVN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtc20tYXV0byBjb2wtbWQtYXV0byBmb3JtLWdyb3VwIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57c3RyaW5ncy5zZXJ2aWNlVHlwZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlcnZpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZXJ2aWNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuc2VydmljZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt0aGlzLmN1c3RvbVN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtc20tYXV0byBjb2wtbWQtYXV0byBmb3JtLWdyb3VwIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57XCJTdGFydCBEYXRlXCJ9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBkYXRlcGlja2VyMSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRhdGUtZm9ybWF0PVwibW0tZGQteXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheVBpY2tlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlQaWNrZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiREQvTU0vWVlZWVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SlNPTi5wYXJzZShtb21lbnQobmV3IERhdGUodGhpcy5zdGF0ZS5jaGVja0luRGF0ZSkpLmZvcm1hdCgnXCJNTS1ERC1ZWVlZXCInKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRheUNoYW5nZT17dGhpcy5oYW5kbGVDaGVja0luRGF5Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb24gZmlsdGVyLXBvaW50XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZXJ2aWNlLnZhbHVlID09IDEgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXJ2aWNlLnZhbHVlID09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1zbS1hdXRvIGNvbC1tZC1hdXRvIGZvcm0tZ3JvdXAgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57XCJFbmQgRGF0ZVwifTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBkYXRlcGlja2VyMSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kYXRlLWZvcm1hdD1cIm1tLWRkLXl5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5UGlja2VySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlQaWNrZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IHRoaXMuc3RhdGUuY2hlY2tJbkRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Ym9yZGVyOiAwLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlcnZpY2UudmFsdWUgIT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXJ2aWNlLnZhbHVlICE9IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtKU09OLnBhcnNlKG1vbWVudChuZXcgRGF0ZSh0aGlzLnN0YXRlLmNoZWNrT3V0RGF0ZSkpLmZvcm1hdCgnXCJNTS1ERC1ZWVlZXCInKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EYXlDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hZGRvbiBmaWx0ZXItcG9pbnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZpY2UubGFiZWwgIT0gXCJQZXQgZ3Jvb21pbmdcIiAmJiB0aGlzLnN0YXRlLnNlcnZpY2UubGFiZWwgIT0gXCJIb3VzZSBjYWxsXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtc20tYXV0byBjb2wtbWQtYXV0byBmb3JtLWdyb3VwIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57XCJQZXQgU2l6ZVwifTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGV0U2l6ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXRTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cGV0U2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc011bHRpPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3RoaXMuY3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1zbS1hdXRvIGNvbC1tZC1hdXRvIGZvcm0tZ3JvdXAgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntzdHJpbmdzLkhvd21hbnlwZXRzfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGV0Q291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGV0Q291bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwZXRDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5jdXN0b21TdHlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbDogKHByb3ZpZGVkKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTg1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtNiBjb2wtc20tYXV0byBjb2wtbWQtYXV0byBmb3JtLWdyb3VwICBtYi0wIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udC0xMCBmbG9hdC1sZWZ0XCI+e1wiKE1pbi4pXCJ9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udC0xMCBmbG9hdC1yaWdodFwiPntcIihNYXguKVwifTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1t0aGlzLnN0YXRlLm1pblByaWNlLCB0aGlzLnN0YXRlLm1heFByaWNlXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblByaWNlOiBlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFByaWNlOiBlWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQtMTAgZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5taW5QcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250LTEwIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1heFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGNvbC1zbS1hdXRvIGNvbC1tZCBmb3JtLWdyb3VwIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57c3RyaW5ncy5BZGRyZXNzfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2ggaGVyZS4uLid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleT17R09PR0xFX1BMQUNFU19BUEl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QbGFjZVNlbGVjdGVkPXsocGxhY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGAke3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IGAke3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHtjb3VudHJ5OiBcImpwXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmRlZmF1bHRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBwbC0wIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdldEZpbHRlcmVkQXZhaWxhYmxlU2l0dGVyLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zYXZlIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLlNhdmVTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IGNvbC1zbS1hdXRvIGNvbC1tZC1hdXRvIGZvcm0tZ3JvdXAgbWItMCBteS1hdXRvICBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnRhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHJhbnNwb3J0YXRpb24gPT0gMSA/IDAgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnRyYW5zcG9ydGF0aW9uID09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlzX25hbWUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJzaG91bGQgaGF2ZSB0cmFuc3BvcnRhdGlvbiBhdmFpbGFibGUgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWRldGFpbHMgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy04IGNvbC14bC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3thbGlnbkl0ZW1zOiBcImNlbnRlclwifX0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMCBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaXR0ZXJzLmxlbmd0aH0gcmVzdWx0cyBwZXIgcHJlZmVyZW5jZXN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMucmVzZXRGaWx0ZXJ9PihyZXNldCk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2FsaWduSXRlbXM6IFwiY2VudGVyXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4ICBoaWdoLXJhdGluZyBhbGlnbi1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVjayBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNsb3Nlc3Rfc2l0dGVyID09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0X3NpdHRlcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xvc2VzdF9zaXR0ZXIgPT0gMSA/IDAgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXNfbmFtZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIlNvcnQgYnkgQ2xvc2VzdCBzaXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVjayBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaXNfbmFtZTFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja21hcmtcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy51cGRhdGVXaGVuSU1vdmVUaGVNYXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IGNvbC1sZy00IGNvbC14bC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICh0aGlzLnN0YXRlLnNpdHRlcnMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2l0dGVycy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpdHRlck9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBldFR5cGU9e3RoaXMuc3RhdGUucGV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJZD17dGhpcy5zdGF0ZS5zZXJ2aWNlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFNpdHRlcj17KCkgPT4gdGhpcy5nZXRGaWx0ZXJlZEF2YWlsYWJsZVNpdHRlcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiAoPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTMgbWItMCBmb250LWl0YWxpY1wiPntzdHJpbmdzLm5vU2l0dGVyRm91bmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctOCBjb2wteGwtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBvdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ21hcF9jYW52YXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15TWFwQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBHT09HTEVfUExBQ0VTX0FQSSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJZD17dGhpcy5zdGF0ZS5zZXJ2aWNlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5zaXR0ZXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTWFya2VyU2hvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGxuZz17dGhpcy5zdGF0ZS5sYXRsbmcgPyB0aGlzLnN0YXRlLmxhdGxuZzonJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZU1hcFVSTD17YGh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvYXBpL2pzP2tleT0ke0dPT0dMRV9QTEFDRVNfQVBJfSZhbXA7bGlicmFyaWVzPWdlb21ldHJ5LGRyYXdpbmcscGxhY2VzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBgMTAwJWB9fS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17e2hlaWdodDogYDQwMHB4YH19Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBgMTAwJWB9fS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2VydmljZXNWZXJzaW9uIH0gZnJvbSBcInR5cGVzY3JpcHRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIHNlbGVjdCA9IHtcclxuICBrZXk6IG51bWJlcjtcclxuICB2YWx1ZTogYW55O1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBwZXQgPSB7XHJcbiAgYWdlOiBudW1iZXI7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICB3ZWlnaHQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzT3B0aW9ucyA9IHtcclxuICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICBzdHlsZToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgZm9udEZhbWlseTogXCJNZW5sbywgbW9ub3NwYWNlXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBjbG9zZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCJncmVlblwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JPcHRpb25zID0ge1xyXG4gIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxyXG4gIHpJbmRleDogMTAyLFxyXG4gIHN0eWxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgZm9udEZhbWlseTogXCJNZW5sbywgbW9ub3NwYWNlXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB6SW5kZXg6IDEwMixcclxuICB9LFxyXG4gIGNsb3NlU3R5bGU6IHtcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZUZlZU9iamVjdCA9IHtcclxuICBjYXBhY2l0eTogMSxcclxuICBwZXRfc2l6ZV9pZDogMSxcclxuICBzZXJ2aWNlX2NoYXJnZTogXCJcIixcclxuICBlYXJuaW5nX2Ftb3VudDogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaXRpZXM6IHNlbGVjdFtdID0gW1xyXG4gIHsga2V5OiAxLCBsYWJlbDogXCJTaGluanVrdSBDaXR5XCIsIHZhbHVlOiBcIlNoaW5qdWt1IENpdHlcIiB9LFxyXG4gIHsga2V5OiAyLCBsYWJlbDogXCJBbm90aGVyIENpdHlcIiwgdmFsdWU6IFwiQW5vdGhlciBDaXR5XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwZXRzID0gW1xyXG4gIHsga2V5OiAxLCBsYWJlbDogXCJEb2dcIiwgdmFsdWU6IDEgfSxcclxuICB7IGtleTogMiwgbGFiZWw6IFwiQ2F0XCIsIHZhbHVlOiAyIH0sXHJcbiAgeyBrZXk6IDMsIGxhYmVsOiBcIkJpcmRzXCIsIHZhbHVlOiAzIH0sXHJcbiAgeyBrZXk6IDQsIGxhYmVsOiBcIlJlcHRpbGVzXCIsIHZhbHVlOiA0IH0sXHJcbiAgeyBrZXk6IDUsIGxhYmVsOiBcIlNtYWxsIGFuaW1hbHNcIiwgdmFsdWU6IDUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzQW5kRXZlbnRzID0gW1xyXG4gIHtcclxuICAgIGtleTogMSxcclxuICAgIHBvc3RlZDogXCIwNy8xMC8yMDIxLCAzUE1cIixcclxuICAgIHBvc3Q6IFwiUGV0Y2l0YXRpb24gd2Vic2l0ZSB3aWxsIGJlIG9uIG1haW50ZW5hbmNlIGZyb20gM1BNIHRvIDZQTSBvbiAyMUp1bHkgMjAyMShKYXBhbiBUaW1lKS5XZSBhcG9sb2dpc2UgZm9yIHRoZSBpbmNvbnZpbmllbmNlIGNhdXNlZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogMixcclxuICAgIHBvc3RlZDogXCIwNy8xMC8yMDIxLCAzUE1cIixcclxuICAgIHBvc3Q6IFwiUGV0Y2l0YXRpb24gd2Vic2l0ZSB3aWxsIGJlIG9uIG1haW50ZW5hbmNlIGZyb20gM1BNIHRvIDZQTSBvbiAyMUp1bHkgMjAyMShKYXBhbiBUaW1lKS5XZSBhcG9sb2dpc2UgZm9yIHRoZSBpbmNvbnZpbmllbmNlIGNhdXNlZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogMyxcclxuICAgIHBvc3RlZDogXCIwNy8xMC8yMDIxLCAzUE1cIixcclxuICAgIHBvc3Q6IFwiUGV0Y2l0YXRpb24gd2Vic2l0ZSB3aWxsIGJlIG9uIG1haW50ZW5hbmNlIGZyb20gM1BNIHRvIDZQTSBvbiAyMUp1bHkgMjAyMShKYXBhbiBUaW1lKS5XZSBhcG9sb2dpc2UgZm9yIHRoZSBpbmNvbnZpbmllbmNlIGNhdXNlZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogNCxcclxuICAgIHBvc3RlZDogXCIwNy8xMC8yMDIxLCAzUE1cIixcclxuICAgIHBvc3Q6IFwiUGV0Y2l0YXRpb24gd2Vic2l0ZSB3aWxsIGJlIG9uIG1haW50ZW5hbmNlIGZyb20gM1BNIHRvIDZQTSBvbiAyMUp1bHkgMjAyMShKYXBhbiBUaW1lKS5XZSBhcG9sb2dpc2UgZm9yIHRoZSBpbmNvbnZpbmllbmNlIGNhdXNlZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogNSxcclxuICAgIHBvc3RlZDogXCIwNy8xMC8yMDIxLCAzUE1cIixcclxuICAgIHBvc3Q6IFwiUGV0Y2l0YXRpb24gd2Vic2l0ZSB3aWxsIGJlIG9uIG1haW50ZW5hbmNlIGZyb20gM1BNIHRvIDZQTSBvbiAyMUp1bHkgMjAyMShKYXBhbiBUaW1lKS5XZSBhcG9sb2dpc2UgZm9yIHRoZSBpbmNvbnZpbmllbmNlIGNhdXNlZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogNixcclxuICAgIHBvc3RlZDogXCIwNy8xMC8yMDIxLCAzUE1cIixcclxuICAgIHBvc3Q6IFwiUGV0Y2l0YXRpb24gd2Vic2l0ZSB3aWxsIGJlIG9uIG1haW50ZW5hbmNlIGZyb20gM1BNIHRvIDZQTSBvbiAyMUp1bHkgMjAyMShKYXBhbiBUaW1lKS5XZSBhcG9sb2dpc2UgZm9yIHRoZSBpbmNvbnZpbmllbmNlIGNhdXNlZC5cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhcSA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBxdWVzdGlvbjogXCIxLiBIb3cgZG8gSSBhc3N1cmUgcGV0IHNpdHRlciBpcyBhIGdlbnVpbmUgcGVyc29uP1wiLFxyXG4gICAgYW5zd2VyOlxyXG4gICAgICBcIldlIGFkdmlzZSBvdXIgc3R1ZGVudHMgdG8gc3RhcnQgYXQgbGVhc3QgMTUgbW9udGhzIHByaW9yIHRvIHRoZSBpbnRha2UgcGVyaW9kIG9mIGFuIGVkdWNhdGlvbmFsIGluc3RpdHV0ZS4gVGhpcyBhbGxvd3Mgc3VmZmNpZW50IHRpbWUgdG8gYnVpbGQgYW4gaWRlYWwgcHJvZmlsZSBhbmQgcHJvY2VzcyB0aGUgYXBwbGljYXRpb24uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBxdWVzdGlvbjogXCIyLiBIb3cgZG8gSSBhc3N1cmUgcGV0IHNpdHRlciBpcyBhIGdlbnVpbmUgcGVyc29uP1wiLFxyXG4gICAgYW5zd2VyOlxyXG4gICAgICBcIldlIGFkdmlzZSBvdXIgc3R1ZGVudHMgdG8gc3RhcnQgYXQgbGVhc3QgMTUgbW9udGhzIHByaW9yIHRvIHRoZSBpbnRha2UgcGVyaW9kIG9mIGFuIGVkdWNhdGlvbmFsIGluc3RpdHV0ZS4gVGhpcyBhbGxvd3Mgc3VmZmNpZW50IHRpbWUgdG8gYnVpbGQgYW4gaWRlYWwgcHJvZmlsZSBhbmQgcHJvY2VzcyB0aGUgYXBwbGljYXRpb24uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIzXCIsXHJcbiAgICBxdWVzdGlvbjogXCIzLiBIb3cgZG8gSSBhc3N1cmUgcGV0IHNpdHRlciBpcyBhIGdlbnVpbmUgcGVyc29uP1wiLFxyXG4gICAgYW5zd2VyOlxyXG4gICAgICBcIldlIGFkdmlzZSBvdXIgc3R1ZGVudHMgdG8gc3RhcnQgYXQgbGVhc3QgMTUgbW9udGhzIHByaW9yIHRvIHRoZSBpbnRha2UgcGVyaW9kIG9mIGFuIGVkdWNhdGlvbmFsIGluc3RpdHV0ZS4gVGhpcyBhbGxvd3Mgc3VmZmNpZW50IHRpbWUgdG8gYnVpbGQgYW4gaWRlYWwgcHJvZmlsZSBhbmQgcHJvY2VzcyB0aGUgYXBwbGljYXRpb24uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI0XCIsXHJcbiAgICBxdWVzdGlvbjogXCI0LiBIb3cgZG8gSSBhc3N1cmUgcGV0IHNpdHRlciBpcyBhIGdlbnVpbmUgcGVyc29uP1wiLFxyXG4gICAgYW5zd2VyOlxyXG4gICAgICBcIldlIGFkdmlzZSBvdXIgc3R1ZGVudHMgdG8gc3RhcnQgYXQgbGVhc3QgMTUgbW9udGhzIHByaW9yIHRvIHRoZSBpbnRha2UgcGVyaW9kIG9mIGFuIGVkdWNhdGlvbmFsIGluc3RpdHV0ZS4gVGhpcyBhbGxvd3Mgc3VmZmNpZW50IHRpbWUgdG8gYnVpbGQgYW4gaWRlYWwgcHJvZmlsZSBhbmQgcHJvY2VzcyB0aGUgYXBwbGljYXRpb24uXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbnR5cGUgc2VydmljZSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBpZDogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VEYXRhOiBzZWxlY3RbXSA9IFtcclxuICB7IGtleTogMSwgdmFsdWU6IDEsIGxhYmVsOiBcIkJvYXJkaW5nXCIgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IDIsIGxhYmVsOiBcIkhvdXNlIFNpdHRpbmdcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogMywgbGFiZWw6IFwiRHJvcC1pbi12aXNpdHNcIiB9LFxyXG4gIHsga2V5OiA0LCB2YWx1ZTogNCwgbGFiZWw6IFwiUGV0IERheSBjYXJlXCIgfSxcclxuICB7IGtleTogNSwgdmFsdWU6IDUsIGxhYmVsOiBcIkRvZyB3YWxraW5nXCIgfSxcclxuICB7IGtleTogNiwgdmFsdWU6IDYsIGxhYmVsOiBcIlBldCBncm9vbWluZ1wiIH0sXHJcbiAgeyBrZXk6IDcsIHZhbHVlOiA3LCBsYWJlbDogXCJIb3VzZSBjYWxsXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwZXRUeXBlOiBzZWxlY3RbXSA9IFtcclxuICB7IGtleTogMSwgdmFsdWU6IFwiRG9nIEJvYXJkaW5nXCIsIGxhYmVsOiBcIkRvZyBCb2FyZGluZ1wiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBcIkhvdXNlIFNpdHRpbmdcIiwgbGFiZWw6IFwiSG91c2UgU2l0dGluZ1wiIH0sXHJcbiAgeyBrZXk6IDMsIHZhbHVlOiBcIkRyb3AtaW4tdmlzaXRzXCIsIGxhYmVsOiBcIkRyb3AtaW4tdmlzaXRzXCIgfSxcclxuICB7IGtleTogNCwgdmFsdWU6IFwiRG9nZ3kgRGF5IGNhcmVcIiwgbGFiZWw6IFwiRG9nZ3kgRGF5IGNhcmVcIiB9LFxyXG4gIHsga2V5OiA1LCB2YWx1ZTogXCJEb2cgd2Fsa2luZ1wiLCBsYWJlbDogXCJEb2cgd2Fsa2luZ1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpY2VzOiBzZWxlY3RbXSA9IFtcclxuICB7IGtleTogMSwgdmFsdWU6IDEsIGxhYmVsOiBcIkFsbCBQcmljZXNcIiB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogMiwgbGFiZWw6IFwiMTAwMDAtMjAwMDBcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogMywgbGFiZWw6IFwiMjAwMDAtMzAwMDBcIiB9LFxyXG4gIHsga2V5OiA0LCB2YWx1ZTogNCwgbGFiZWw6IFwiNTAwMDAgLSBtb3JlXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXJ2aWNlVGltZTogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBcIk9uZSBUaW1lXCIsIGxhYmVsOiBcIk9uZSBUaW1lXCIgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IFwiUmVwZWF0IFdlZWtseVwiLCBsYWJlbDogXCJSZXBlYXQgV2Vla2x5XCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwZXRTaXplOiBzZWxlY3RbXSA9IFtcclxuICB7IGtleTogMSwgdmFsdWU6IDEsIGxhYmVsOiBcIjAgLSA1IGtnXCIgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IDIsIGxhYmVsOiBcIjUgLSAxMCBrZ1wiIH0sXHJcbiAgeyBrZXk6IDMsIHZhbHVlOiAzLCBsYWJlbDogXCIxMCAtIDI1IGtnXCIgfSxcclxuICB7IGtleTogNCwgdmFsdWU6IDQsIGxhYmVsOiBcIjI1IC0gNDAga2dcIiB9LFxyXG4gIHsga2V5OiA1LCB2YWx1ZTogNSwgbGFiZWw6IFwiNDArIGtnXCIgfSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IGR1cmF0aW9uczogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAzMCwgbGFiZWw6IFwiMzAgbWluc1wiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiA2MCwgbGFiZWw6IFwiNjAgbWluc1wiIH0sXHJcbiAgeyBrZXk6IDMsIHZhbHVlOiA5MCwgbGFiZWw6IFwiOTAgbWluc1wiIH0sXHJcbiAgeyBrZXk6IDQsIHZhbHVlOiAxMjAsIGxhYmVsOiBcIjEyMCBtaW5zXCIgfSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHBldENvdW50OiBzZWxlY3RbXSA9IFtcclxuICB7IGtleTogMSwgdmFsdWU6IDEsIGxhYmVsOiBcIjFcIiB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogMiwgbGFiZWw6IFwiMlwiIH0sXHJcbiAgeyBrZXk6IDMsIHZhbHVlOiAzLCBsYWJlbDogXCIzXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb3J0OiBzZWxlY3RbXSA9IFtcclxuICB7XHJcbiAgICBrZXk6IDEsXHJcbiAgICB2YWx1ZTogXCJEaXN0YW5jZSBjbG9zZXN0IHRvIGZ1cnRoZXN0XCIsXHJcbiAgICBsYWJlbDogXCJEaXN0YW5jZSBjbG9zZXN0IHRvIGZ1cnRoZXN0XCIsXHJcbiAgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IFwiSGlnaGVyIHRvIGxvd2VyXCIsIGxhYmVsOiBcIkhpZ2hlciB0byBsb3dlclwiIH0sXHJcbiAgeyBrZXk6IDMsIHZhbHVlOiBcIkxvd2VyIHRvIGhpZ2hlclwiLCBsYWJlbDogXCJsb3dlciB0byBoaWdoZXJcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBldDogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIGxhYmVsOiBcIkRvZ1wiLCB2YWx1ZTogXCIxXCIgfSxcclxuICB7IGtleTogMiwgbGFiZWw6IFwiQ2F0XCIsIHZhbHVlOiBcIjJcIiB9LFxyXG4gIHsga2V5OiAzLCBsYWJlbDogXCJCaXJkc1wiLCB2YWx1ZTogXCIzXCIgfSxcclxuICB7IGtleTogNCwgbGFiZWw6IFwiUmVwdGlsZXNcIiwgdmFsdWU6IFwiNFwiIH0sXHJcbiAgeyBrZXk6IDUsIGxhYmVsOiBcIlNtYWxsIGFuaW1hbHNcIiwgdmFsdWU6IFwiNVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbXlQZXRzOiBwZXRbXSA9IFtcclxuICB7XHJcbiAgICBhZ2U6IDcsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgICBuYW1lOiBcIk1pbG9cIixcclxuICAgIGxvY2F0aW9uOiBcIlNpYmVyaWFuIGh1c2t5XCIsXHJcbiAgICB3ZWlnaHQ6IDE2LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYWdlOiA3LFxyXG4gICAgaW1hZ2U6IFwiL1wiLFxyXG4gICAgbmFtZTogXCJNaWxvXCIsXHJcbiAgICBsb2NhdGlvbjogXCJTaWJlcmlhbiBodXNreVwiLFxyXG4gICAgd2VpZ2h0OiAxNixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmlld1N0YXRlRGF0YSA9IHtcclxuICByYXRpbmc6IDQsXHJcbiAgY2xlYW5saW5lc3M6IDQsXHJcbiAgYWNjdXJhY3k6IDQsXHJcbiAgY29tbXVuaWNhdGlvbjogNCxcclxuICBsb2NhdGlvbjogNCxcclxuICBjaGVja0luOiA0LFxyXG4gIHZhbHVlOiA1LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmlld09iamVjdERhdGEgPSB7XHJcbiAgdXNlckltYWdlOiBcIi9cIixcclxuICB1c2VyTmFtZTogXCJNYXJrIEV2YW5zXCIsXHJcbiAgZGF0ZTogXCJKdW5lIDEwLCAyMDIxXCIsXHJcbiAgdGltZTogXCI3OjMwcG1cIixcclxuICByZXZpZXc6XHJcbiAgICBcIuKAnEFiYmV5IGlzIHRoZSBiZXN0IGRvZyBtb20gSeKAmXZlIGV2ZXIga25vd24hIFJlc3BvbnNpYmxlLCBhdHRlbnRpdmUsIHBsYXlmdWwsIGFuZCBsb3ZpbmcuIEkgbWV0IGhlciB3aGVuIHNoZSB3YXMgdm9sdW50ZWVyaW5nIHRvIGhlbHAgc2hlbHRlciBhbmltYWxzIC0gaGVyIGVtcGF0aHkgZm9yIGFuaW1hbCBzb3VscyBpcyBsaW1pdGxlc3Mu4oCdXCIsXHJcbiAgcmF0aW5nOiA0LFxyXG4gIHVzZXJJbWFnZXM6IFtcIi9cIiwgXCIvXCIsIFwiL1wiLCBcIi9cIl0sXHJcbiAgdXNlckNvdW50OiAxMCxcclxuICBzaXR0ZXJSZXNwb25zZTogdHJ1ZSxcclxuICBzaXR0ZXJSZXBseTogXCJUaGFuayB5b3UgZm9yIHlvdXIga2luZCB3b3JkcyBNYXJrIVwiLFxyXG4gIHNpdHRlckltYWdlOiBcIi9cIixcclxuICBzaXR0ZXJOYW1lOiBcIlJlYmVjY2EgVy5cIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaXR0ZXJTZXJ2aWNlcyA9IFtcclxuICB7XHJcbiAgICBzZXJ2aWNlOiBcIkJvYXJkaW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJpbiB0aGUgc2l0dGVyJ3MgaG9tZVwiLFxyXG4gICAgcHJpY2U6IFwiwqU0MFwiLFxyXG4gICAgcGVyaW9kOiBcInBlciBuaWdodFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZTogXCJIb3VzZSBTaXR0aW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJpbiB0aGUgaG9tZVwiLFxyXG4gICAgcHJpY2U6IFwiwqU0MFwiLFxyXG4gICAgcGVyaW9kOiBcInBlciBuaWdodFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZTogXCJEcm9wLUluIFZpc2l0c1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwidmlzaXQgaW4geW91ciBob21lXCIsXHJcbiAgICBwcmljZTogXCLCpTQwXCIsXHJcbiAgICBwZXJpb2Q6IFwicGVyIG5pZ2h0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlOiBcIkRvZ2d5IERheSBDYXJlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJpbiB0aGUgc2l0dGVyJ3MgaG9tZVwiLFxyXG4gICAgcHJpY2U6IFwiwqU0MFwiLFxyXG4gICAgcGVyaW9kOiBcInBlciBuaWdodFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZTogXCJEb2cgV2Fsa2luZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiaW4geW91ciBuZWlnaGJvcmhvb2RcIixcclxuICAgIHByaWNlOiBcIsKlNDBcIixcclxuICAgIHBlcmlvZDogXCJwZXIgbmlnaHRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdHRlclN0YXRlcyA9IHtcclxuICBib29raW5nRm9yTWU6IDEwMCxcclxuICBib29raW5nQnlNZTogNTAsXHJcbiAgcEJvb2tpbmdGb3JNZTogMjAsXHJcbiAgcEJvb2tpbmdCeU1lOiAxNSxcclxuICBwVG90YWxCb29raW5nOiAyNSxcclxuICB0b3RhbEVhcm5pbmc6IDM0MDAwLFxyXG4gIHBUb3RhbEVhcm5pbmc6IC0yNSxcclxuICB0b3RhbFJlZmVycmFsOiAxMCxcclxuICBwVG90YWxSZWZlcnJhbDogMTAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdHNBcnJheSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkZpbmNo4oCZc1wiLFxyXG4gICAgc2VydmljZTogXCJEb2cgV2Fsa1wiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjFcIixcclxuICAgIHRvdGFsOiBcIsKlMzUwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZpbmNo4oCZc1wiLFxyXG4gICAgc2VydmljZTogXCJEb2cgV2Fsa1wiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjFcIixcclxuICAgIHRvdGFsOiBcIsKlMzYwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZpbmNo4oCZc1wiLFxyXG4gICAgc2VydmljZTogXCJEb2cgV2Fsa1wiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjFcIixcclxuICAgIHRvdGFsOiBcIsKlMzcwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZpbmNo4oCZc1wiLFxyXG4gICAgc2VydmljZTogXCJEb2cgV2Fsa1wiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjFcIixcclxuICAgIHRvdGFsOiBcIsKlMzgwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBtZWV0aW5nUmVxdWVzdHMgPSBbXHJcbiAge1xyXG4gICAgZGF0ZTogMCxcclxuICAgIHNlcnZpY2U6IFwiRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiIFZhbmNvdXZlciwgV0EsIDk4Njg2XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAwLFxyXG4gICAgc2VydmljZTogXCJEYXkgQ2FyZVwiLFxyXG4gICAgY2xpZW50TmFtZTogXCJEYXZpZCBULlwiLFxyXG4gICAgYWRkcmVzczogXCIgVmFuY291dmVyLCBXQSwgOTg2ODdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6IDAsXHJcbiAgICBzZXJ2aWNlOiBcIkRheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIiBWYW5jb3V2ZXIsIFdBLCA5ODY4OFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogMCxcclxuICAgIHNlcnZpY2U6IFwiRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiIFZhbmNvdXZlciwgV0EsIDk4Njg5IFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXJ2YXRpb25SZXF1ZXN0cyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgcGF5bWVudFN0YXR1czogXCJQQUlEXCIsXHJcbiAgICB0b3RhbDogXCLCpTM1MFwiLFxyXG4gICAgbmFtZTogXCJNb2xseeKAmXMgLSBEYXkgQ2FyZVwiLFxyXG4gICAgY2xpZW50TmFtZTogXCJEYXZpZCBULlwiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgaW1hZ2U6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmcm9tOiBcIjI5IEp1biAyMDIxLCAzUE1cIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxLCAzUE1cIixcclxuICAgIHBheW1lbnRTdGF0dXM6IFwiUEFJRFwiLFxyXG4gICAgdG90YWw6IFwiwqUzNTBcIixcclxuICAgIG5hbWU6IFwiTW9sbHnigJlzIC0gRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGltYWdlOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICB0bzogXCIzMCBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICBwYXltZW50U3RhdHVzOiBcIlBBSURcIixcclxuICAgIHRvdGFsOiBcIsKlMzUwXCIsXHJcbiAgICBuYW1lOiBcIk1vbGx54oCZcyAtIERheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIlZhbmNvdXZlciwgV0EsIDk4Njg2XCIsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgcGF5bWVudFN0YXR1czogXCJQQUlEXCIsXHJcbiAgICB0b3RhbDogXCLCpTM1MFwiLFxyXG4gICAgbmFtZTogXCJNb2xseeKAmXMgLSBEYXkgQ2FyZVwiLFxyXG4gICAgY2xpZW50TmFtZTogXCJEYXZpZCBULlwiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgaW1hZ2U6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmcm9tOiBcIjI5IEp1biAyMDIxLCAzUE1cIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxLCAzUE1cIixcclxuICAgIHBheW1lbnRTdGF0dXM6IFwiUEFJRFwiLFxyXG4gICAgdG90YWw6IFwiwqUzNTBcIixcclxuICAgIG5hbWU6IFwiTW9sbHnigJlzIC0gRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGltYWdlOiBcIi9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuLy9JbXBvcnRhbnRcclxuXHJcbmV4cG9ydCBjb25zdCBteVNlcnZpY2VzID0gW1xyXG4gIHtcclxuICAgIHNlcnZpY2VOYW1lOiBcIkJvYXJkaW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJZb3VyIGNsaWVudOKAmXMgcGV0cyBjb21lIHRvIHlvdXIgaG9tZSBhbmQgc3RheSBvdmVybmlnaHQuXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogZmFsc2UsXHJcbiAgICBzcGVjaWZpY2F0aW9uczogW1xyXG4gICAgICBcIkxpdmVzIGluIGEgSG91c2VcIixcclxuICAgICAgXCJHZXQgeW91ciBmaXJzdCBib29raW5nIHNvb25lclwiLFxyXG4gICAgICBcIk1ha2UgbW9yZSBtb25leSBvbiB0aGUgd2Vla2VuZHMgKFRodS1TdW4pXCIsXHJcbiAgICBdLFxyXG4gICAgcm91dGU6IFwiL3VzZXIvbXktc2VydmljZXMvYm9hcmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2VOYW1lOiBcIkdyb29taW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJZb3VyIGNsaWVudCBjYW4gY29tZSBvciB5b3UgY2FuIGdvIGZvciBncm9vbWluZyBzZXJ2aWNlcyBvZiB0aGVpciBwZXRzXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2dyb29taW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJIb3VzZSBTaXR0aW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJZb3UgZ28gdG8geW91ciBjbGllbnTigJlzIGhvbWUgYW5kIHN0YXkgb3Zlcm5pZ2h0LCB0YWtpbmcgY2FyZSBvZiB0aGVpciBkb2dzIGFuZCBob21lLlwiLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGluc3RhbnRCb29raW5nOiB0cnVlLFxyXG4gICAgc3BlY2lmaWNhdGlvbnM6IFtdLFxyXG4gICAgcm91dGU6IFwiL3VzZXIvbXktc2VydmljZXMvYm9hcmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2VOYW1lOiBcIkRyb3AtSW4gVmlzaXRzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJZb3VyIGNsaWVudHMgYXNrIHlvdSB0byBkbyA2MC1taW51dGUgaG9tZSB2aXNpdHMgdG8gZmVlZCBhbmQgcGxheSB3aXRoIHRoZWlyIHBldHNcIixcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIGluc3RhbnRCb29raW5nOiB0cnVlLFxyXG4gICAgc3BlY2lmaWNhdGlvbnM6IFtdLFxyXG4gICAgcm91dGU6IFwiL3VzZXIvbXktc2VydmljZXMvYm9hcmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2VOYW1lOiBcIlBldCBEYXkgQ2FyZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnTigJlzIHBldHMgc3RheSBhdCB5b3VyIGhvbWUgZHVyaW5nIHRoZSBkYXksIERyb3Agb2ZmcyBhcmUgYXJvdW5kIDctOWFtLCBhbmQgcGljayB1cHMgYXJlIGFyb3VuZCA0LTZwbS5cIixcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIGluc3RhbnRCb29raW5nOiB0cnVlLFxyXG4gICAgc3BlY2lmaWNhdGlvbnM6IFtdLFxyXG4gICAgcm91dGU6IFwiL3VzZXIvbXktc2VydmljZXMvYm9hcmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2VOYW1lOiBcIkRvZyBXYWxraW5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJZb3VyIGNsaWVudHMgcmVxdWVzdCAzMC1taW51dGUgZG9nIHdhbGsgaW4gdGhlaXIgbmVpZ2hib3Job29kXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJIb3VzZSBDYWxsXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJZb3VyIGNsaWVudOKAmXMgYXNrIHlvdSB0byBicmluZyB2ZXRlcmluYXJ5IGNhcmUgaW50byBjbGllbnTigJlzIGhvbWUuXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzcG90cyA9IFtcclxuICB7XHJcbiAgICBpbWFnZXM6IFtcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgXSxcclxuICAgIG5hbWU6IFwiUGV0cyBIb21lIFN0YXlcIixcclxuICAgIGxvY2F0aW9uOiBcIlNoaW5qdWt1IENpdHksIFRva3lvXCIsXHJcbiAgICBhdmFpbGFibGVGb3I6IFtcIkRvZ1wiLCBcIkNhdFwiXSxcclxuICAgIHJhdGluZzogXCI0LjY5XCIsXHJcbiAgICByZXZpZXc6IDEwLFxyXG4gICAgcmVwZWF0ZWRDbGllbnQ6IDQzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2VzOiBbXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcIlBldHMgSG9tZSBTdGF5XCIsXHJcbiAgICBsb2NhdGlvbjogXCJTaGluanVrdSBDaXR5LCBUb2t5b1wiLFxyXG4gICAgYXZhaWxhYmxlRm9yOiBbXCJEb2dcIiwgXCJDYXRcIl0sXHJcbiAgICByYXRpbmc6IFwiNC42OVwiLFxyXG4gICAgcmV2aWV3OiAxMCxcclxuICAgIHJlcGVhdGVkQ2xpZW50OiA0MyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmlld3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJEb2dneXRhbGVzIEhvbWUgU3RheVwiLFxyXG4gICAgcGxhY2U6IFwiUGV0IGZyaWVuZGx5IEhvdGVsXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNoaW5qdWt1IENpdHksIFRva3lvXCIsXHJcbiAgICByZXZpZXc6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXHJcbiAgICByYXRpbmc6IDQuNSxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2aWV3LWltZzEucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRvZ2d5dGFsZXMgSG9tZSBTdGF5XCIsXHJcbiAgICBwbGFjZTogXCJQZXQgZnJpZW5kbHkgSG90ZWxcIixcclxuICAgIGFkZHJlc3M6IFwiU2hpbmp1a3UgQ2l0eSwgVG9reW9cIixcclxuICAgIHJldmlldzpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIixcclxuICAgIHJhdGluZzogNCxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2aWV3LWltZzEucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRvZ2d5dGFsZXMgSG9tZSBTdGF5XCIsXHJcbiAgICBwbGFjZTogXCJQZXQgZnJpZW5kbHkgSG90ZWxcIixcclxuICAgIGFkZHJlc3M6IFwiU2hpbmp1a3UgQ2l0eSwgVG9reW9cIixcclxuICAgIHJldmlldzpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIixcclxuICAgIHJhdGluZzogMy41LFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9yZXZpZXctaW1nMS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRG9nZ3l0YWxlcyBIb21lIFN0YXlcIixcclxuICAgIHBsYWNlOiBcIlBldCBmcmllbmRseSBIb3RlbFwiLFxyXG4gICAgYWRkcmVzczogXCJTaGluanVrdSBDaXR5LCBUb2t5b1wiLFxyXG4gICAgcmV2aWV3OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFxyXG4gICAgcmF0aW5nOiA1LFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9yZXZpZXctaW1nMS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmRlciA9IFtcclxuICB7IGxhYmVsOiBcIk1hbGVcIiwgdmFsdWU6IDAgfSxcclxuICB7IGxhYmVsOiBcIkZlbWFsZVwiLCB2YWx1ZTogMSB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgTG9jYWxpemVkU3RyaW5ncyBmcm9tIFwicmVhY3QtbG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IGVuZyB9IGZyb20gXCIuL2VuZ1wiO1xyXG5cclxuZXhwb3J0IGxldCBzdHJpbmdzID0gbmV3IExvY2FsaXplZFN0cmluZ3MoeyBlbmcgfSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbmcgPSB7XHJcbiAgc2VhcmNoU2l0dGVyOiBcIlNlYXJjaCBTaXR0ZXJcIixcclxuICBiZWNvbWVBU2l0dGVyOiBcIkJlY29tZSBhIFNpdHRlclwiLFxyXG4gIG91clNlcnZpY2VzOiBcIk91ciBTZXJ2aWNlc1wiLFxyXG4gIHNpZ25VcDogXCJTaWduIFVwXCIsXHJcbiAgc2lnbkluOiBcIlNpZ24gSW5cIixcclxuICBoZWxwOiBcIkhlbHBcIixcclxuICBleHBsb3JlOiBcIkV4cGxvcmVcIixcclxuICBjb21wYW55OiBcIkNPTVBBTllcIixcclxuICBhYm91dFVzOiBcIkFib3V0IFVzXCIsXHJcbiAgY29udGFjdDogXCJDb250YWN0XCIsXHJcbiAgY2FyZWVyOiBcIkNhcmVlclwiLFxyXG4gIHByaXZhY3lQb2xpY3k6IFwiUHJpdmFjeSBQb2xpY3lcIixcclxuICB0ZXJtc09mVXNlcjogXCJUZXJtcyBvZiBVc2VcIixcclxuICBjb29raWVQb2xpY3k6IFwiQ29va2llIFBvbGljeVwiLFxyXG4gIHBldFNwb3RzOiBcIlBldCBTcG90c1wiLFxyXG4gIGJsb2dzOiBcIkJsb2dzXCIsXHJcbiAgZmFxczogXCJGQVFzXCIsXHJcbiAgc2FmZXR5OiBcIlNhZmV0eVwiLFxyXG4gIG5ld3NBbmRTYWZldHk6IFwiTmV3cyAmIEV2ZW50c1wiLFxyXG4gIG5ld3Nyb29tOiBcIk5ld3Nyb29tXCIsXHJcbiAgZXZlbnRzQW5kVXBkYXRlczogXCJFdmVudHMgJiBVcGRhdGVcIixcclxuICBzdGF5Q29ubmVjdGVkOiBcIlN0YXkgQ29ubmVjdGVkXCIsXHJcbiAgc3Vic2NyaWJlOiBcIlN1YnNjcmliZVwiLFxyXG4gIGZvbGxvd1BldGNhdGlvbjogXCJGb2xsb3cgUGV0Y2F0aW9uXCIsXHJcbiAgYWRkWW91clBldFNwb3Q6IFwiQWRkIFlvdXIgcGV0IHNwb3RcIixcclxuICBhbGxSaWdodHNSZXNlcnZlZDogXCLCqSBwZXRjYXRpb24uY29tLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXCIsXHJcbiAgbG92ZUNhcmVBbmRBbGxOZWVkc0ZvclBldHM6IFwiTG92ZSwgY2FyZSBhbmQgYWxsIG5lZWRzIGZvciBwZXRzXCIsXHJcbiAgYm9va1RydXN0ZWRTaXR0ZXJzOlxyXG4gICAgXCIgQm9vayB0cnVzdGVkIHNpdHRlcnMgYW5kIGRvZyB3YWxrZXJzICYgbXVjaCBtb3JlIHdpdGggcGV0Y2F0aW9uLlwiLFxyXG4gIHlvdXJQZXQ6IFwiWW91ciBwZXQ6IFwiLFxyXG4gIHlhYVBldExvdmVyczogXCJZYWEtISBQZXQgTG92ZXJzXCIsXHJcbiAgd2VNYWRlSXRTdXBlckVhc3lUaXRsZTpcclxuICAgIFwiIFdl4oCZdmUgbWFkZSBpdCBzdXBlciBlYXN5IGZvciB5b3UgdG8g76yBbmQgYSBsb3ZlbHksdHJ1c3RlZCBwZXQgc2l0dGVyLCBwZXQgYm9hcmRpbmcsIGRvZyB3YWxraW5nICYgbXVjaCBtb3JlIGluIHlvdXIgbmVpZ2hib3VyaG9vZC5cIixcclxuICBwZXRCb2FyZGluZzogXCJQZXQgQm9hcmRpbmdcIixcclxuICB3ZU1hZGVJdFN1cGVyRWF6eVBldEJvYXJkaW5nOlxyXG4gICAgXCJXZeKAmXZlIG1hZGUgaXQgc3VwZXIgZWFzeSBmb3IgeW91IHRvIO+sgW5kIGEgbG92ZWx5LHRydXN0ZWQgcGV0IHNpdHRlciwgcGV0IGJvYXJkaW5nLlwiLFxyXG4gIGhvdXNlU2l0dGluZzogXCJIb3VzZSBTaXR0aW5nXCIsXHJcbiAgZHJvcEluVmlzaXRzOiBcIkRyb3AtSW4gVmlzaXRzXCIsXHJcbiAgcGV0RGF5Q2FyZTogXCJQZXQgRGF5IENhcmVcIixcclxuICBkb2dXYWxraW5nOiBcIkRvZyBXYWxsa2luZ1wiLFxyXG4gIGhvdXNlQ2FsbDogXCJIb3VzZSBDYWxsXCIsXHJcbiAgZ3Jvb21pbmc6IFwiR3Jvb21pbmdcIixcclxuICBib29rV2l0aFByb2Zlc3Npb25hbFBldFNpdHRlcjpcclxuICAgIFwiQm9vayB3aXRoIHByb2Zlc3Npb25hbCBwZXQgc2l0dGVycyB5b3UgY2FuIHRydXN0LlwiLFxyXG4gIHZlcmlmaWVkUGV0U2l0dGVyczogXCJWZXJpZmllZCBwZXQgc2l0dGVyc1wiLFxyXG4gIEFsbFNpdHRlclBhc3NBQmFzaWNDaGVjazogXCJBbGwgc2l0dGVycyBwYXNzIGEgYmFzaWMgYmFja2dyb3VuZCBjaGVja1wiLFxyXG4gIGtub3dTaXR0ZXJQZXJzb25hbGx5OiBcIktub3cgc2l0dGVyIHBlcnNvbmFsbHlcIixcclxuICBBbGxTaXR0ZXJzUHJvdmlkZTpcclxuICAgIFwiQWxsIHNpdHRlcnMgcHJvdmlkZSBhIGRldGFpbGVkIHByb2ZpbGUgYW5kIHBlcnNvbmFsIGluZm9ybWF0aW9uXCIsXHJcbiAgQ2VydGlmaWVkUGV0U2l0dGVyczogXCJDZXJ0aWZpZWQgcGV0IHNpdHRlcnNcIixcclxuICBBbGxTaXR0ZXJzSGF2ZUFuaW1hbENlcnRpZmljYXRpb25zOiBcIkFsbCBzaXR0ZXJzIGhhdmUgYW5pbWFsIGNlcnRpZmljYXRpb25zLlwiLFxyXG4gIGJvb2tZb3VyUGV0Y2F0aW9uU2l0dGVyOiBcIkJvb2sgeW91ciBwZXRjYXRpb24gc2l0dGVyIVwiLFxyXG4gIHBldGNhdGlvbkd1YXJhbnRlZTogXCJQZXRjYXRpb24gR3VhcmFudGVlXCIsXHJcbiAgQWxsU2VydmljZXNCb29rZWRPblBldGNhdGlvbjpcclxuICAgIFwiQWxsIHNlcnZpY2VzIGJvb2tlZCBvbiBQZXRjYXRpb24gYXJlIGJhY2tlZCBieSB0aGUgIFBldGNhdGlvbiBHdWFyYW50ZWUuXCIsXHJcbiAgd2h5Q2hvb3NlUGV0Y2F0aW9uOiBcIldoeSBDaG9vc2UgUGV0Y2F0aW9uXCIsXHJcbiAgZmluZFRoZVBlcmZlY3RIb3VzZUtlZXBlcjpcclxuICAgIFwiRmluZCB0aGUgUGVyZmVjdCBIb3VzZWtlZXBlciBuZWFyIHlvdXIgbmVpZ2hib3Job29kICBhbnl0aW1lLiBTYWZldHkgYW5kIFNlY3VyaXR5IGFyZSBvdXIgdG9wIHByaW9yaXR5XCIsXHJcbiAgdmVyaWZpZWRTaXR0ZXJzOiBcIlZlcmlmaWVkIHNpdHRlcnNcIixcclxuICBhbGxQZXRjYXRpb25TaXR0ZXJzSGF2ZVBhc3NlZE91cjpcclxuICAgIFwiQWxsIFBldGNhdGlvbiBzaXR0ZXJzIGhhdmUgcGFzc2VkIG91ciBzdHJpbmdlbnQgc2VsZWN0aW9uIHByb2Nlc3MgYW5kIGhhZCB0aGVpciBpZGVudGl0eSB2ZXJpZmllZC5cIixcclxuICBwcm9mZXNzaW9uYWxDYXJlOiBcIlByb2Zlc3Npb25hbCBDYXJlXCIsXHJcbiAgeW91clBldHNTYWZldHlJc091clRvcFByaW9yaXR5OlxyXG4gICAgXCJZb3VyIHBldOKAmXMgc2FmZXR5IGlzIG91ciB0b3AgcHJpb3JpdHkuIEV2ZXJ5IHNpdHRlciBpcyB3ZWxsIGVxdWlwcGVkIHdpdGggY2VydGlmaWNhdGlvbnMgJiBmaXJzdC1haWQgdHJhaW5pbmcuXCIsXHJcbiAgczI0N3N1cHBvcnQ6IFwiMjQvNyBzdXBwb3J0XCIsXHJcbiAgV2VBcmVIZXJlVG9IZWxwWW91QW5kWW91clBldDpcclxuICAgIFwiIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgYW5kIHlvdXIgcGV0IHdoZW5ldmVyIHlvdSBuZWVkIHVzLiBTaXR0ZXJzIGFsc28gaGF2ZSBhY2Nlc3MgdG8gdmV0ZW5hcnkgc3BlY2lhbGlzdHMuXCIsXHJcbiAgcGV0Y2l0YXRpb25mb3JQZXRPd25lcnM6IFwiUGV0Y2F0aW9uIGZvciBQZXQgT3duZXJzXCIsXHJcbiAgc2VhcmNoQW5kQ29ubmVjdFdpdGhUcnVzdGVkOlxyXG4gICAgXCJTZWFyY2ggYW5kIGNvbm5lY3Qgd2l0aCB0cnVzdGVkIHBldCBzaXR0ZXJzLiBJdCdzIGVhc3kgIGFzIDEsIDIsIDMuXCIsXHJcbiAgZmluZEFWZXJpZmllZFBldFNpdHRlcjogXCJGaW5kIGEgdmVyaWZpZWQgcGV0IHNpdHRlclwiLFxyXG4gIHNlYXJjaEFuZEZpbmRFeHBlcmllbmNlZExvY2FsOlxyXG4gICAgXCJTZWFyY2ggYW5kIGZpbmQgZXhwZXJpZW5jZWQgbG9jYWwgcGV0IHNpdHRlcnMgIG5lYXJieVwiLFxyXG4gIGFycmFuZ2VBTWVldEdyZWV0OiBcIkFycmFuZ2UgYSBtZWV0ICYgZ3JlZXRcIixcclxuICBnZXRUb0tub3dZb3VyU2l0dGVyOiBcIkdldCB0byBrbm93IHlvdXIgc2l0dGVyIGluIHBlcnNvbiwgb2JsaWdhdGlvbi1mcmVlLlwiLFxyXG4gIGJvb2tTYWZlbHlPbmxpbmVQYXltZW50czogXCJCb29rIHNhZmVseSBvbmxpbmUgcGF5bWVudHNcIixcclxuICBib29rWW91clNpdHRlclRocm91Z2hPdXJTYWZlT25saW5lOlxyXG4gICAgXCJCb29rIHlvdXIgc2l0dGVyIHRocm91Z2ggb3VyIHNhZmUgb25saW5lIHN5c3RlbSx3aXRoIGZsZXhpYmxlIGNhbmNlbGxhdGlvbnMgYXMgcGVyIHNpdHRlcnMgcG9saWN5LlwiLFxyXG4gIHByb3BlclVwZGF0ZXM6IFwiUHJvcGVyIFVwZGF0ZXNcIixcclxuICBvbmNlSm9iQ29tcGxldGVzWW91Q2FuUmF0ZTpcclxuICAgIFwiT25jZSBqb2IgY29tcGxldGVzIHlvdSBjYW4gcmF0ZSAmIHJldmlldyB5b3VyIHNpdHRlclwiLFxyXG4gIHJhdGluZ0FuZFJldmlld3M6IFwiUmF0aW5nICYgUmV2aWV3c1wiLFxyXG4gIGV4cGxvcmVPdXJTaXR0ZXI6IFwiRXhwbG9yZSBPdXIgU2l0dGVyc1wiLFxyXG4gIHBldGNhdGlvbkZvclBldFNpdHRlcnM6IFwiUGV0Y2F0aW9uIGZvciBQZXQgU2l0dGVyc1wiLFxyXG4gIHdhbm5hQmVQYXJ0bmVyV2l0aFVzOiBcIldhbm5hIGJlIFBhcnRuZXIgd2l0aCB1cz9cIixcclxuICB3aGF0RXZlclBldFNlcnZpY2VZb3VQcm92aWRlOlxyXG4gICAgXCIgV2hhdGV2ZXIgcGV0IHNlcnZpY2UgeW91IHByb3ZpZGUsIHdlJ2xsIGZpbmQgdGhlIHBldCBzaXR0ZXIsIGdyb29tZXIsIGJvYXJkaW5nIG9yIGRvZyB3YWxrZXIgam9icyB5b3UgbmVlZC5cIixcclxuICBzMTAwVmVyaWZpZWRqb2JzOiBcIjEwMCUgVmVyaWZpZWQgam9ic1wiLFxyXG4gIEVhc3lwcm9maWxldmVyaWZpY2F0aW9uczogXCJFYXN5IHByb2ZpbGUgdmVyaWZpY2F0aW9uc1wiLFxyXG4gIEluc3RhbnRwYXlvdXRzOiBcIkluc3RhbnQgcGF5b3V0c1wiLFxyXG4gIExpc3R5b3VyYm9hcmRpbmc6IFwiTGlzdCB5b3VyIGJvYXJkaW5nXCIsXHJcbiAgQmVjb21lYXBldHNpdHRlcjogXCJCZWNvbWUgYSBwZXQgc2l0dGVyXCIsXHJcbiAgdXBkYXRlV2hlbklNb3ZlVGhlTWFwOiBcIlVwZGF0ZSB3aGVuIEkgbW92ZSB0aGUgbWFwXCIsXHJcbiAgU2F2ZVNlYXJjaDogXCJTYXZlIFNlYXJjaFwiLFxyXG4gIGFwcGx5OiBcIkFwcGx5XCIsXHJcblxyXG4gIG1vcmU6IFwiTW9yZVwiLFxyXG4gIEFsbFByaWNlczogXCJBbGwgUHJpY2VzXCIsXHJcbiAgSG93bWFueXBldHM6IFwiSG93IG1hbnkgcGV0cz9cIixcclxuICBEb2dzaXplOiBcIkRvZyBzaXplKGxicylcIixcclxuICBQZXR0eXBlczogXCJQZXQgdHlwZShzKVwiLFxyXG4gIEhvd29mdGVueW91d2FudHNlcnZpY2U6IFwiSG93IG9mdGVuIHlvdSB3YW50IHNlcnZpY2U/XCIsXHJcbiAgQ2hlY2tfb3V0OiBcIkNoZWNrLW91dFwiLFxyXG4gIENoZWNrX2luOiBcIkNoZWNrLWluXCIsXHJcbiAgUGV0Y2F0aW9uVmVyaWZpZWQ6IFwiUGV0Y2F0aW9uIFZlcmlmaWVkXCIsXHJcbiAgUGV0Y2F0aW9uTm90VmVyaWZpZWQ6IFwiUGV0Y2F0aW9uIG5vdCBWZXJpZmllZFwiLFxyXG4gIE9ubGluZW5vdzogXCJPbmxpbmUgbm93XCIsXHJcbiAgUGV0c3Rha2VuY2FyZTogXCJQZXRzIHRha2VuIGNhcmVcIixcclxuICBIYXBweUN1c3RvbWVyczogXCJIYXBweSBDdXN0b21lcnNcIixcclxuICBSZWhpcmVyYXRlOiBcIlJlaGlyZSByYXRlXCIsXHJcbiAgRXhwZXJpZW5jZTogXCJFeHBlcmllbmNlXCIsXHJcbiAgTXlwZXRzOiBcIk15IHBldHNcIixcclxuICBBYm91dHBsYWNlOiBcIkFib3V0IHBsYWNlXCIsXHJcbiAgQWRkaXRpb25hbFNraWxsczogXCJBZGRpdGlvbmFsIFNraWxsc1wiLFxyXG4gIFJldmlld3M6IFwiUmV2aWV3c1wiLFxyXG4gIE92ZXJhbGxyYXRpbmc6IFwiT3ZlcmFsbCByYXRpbmdcIixcclxuICBDbGVhbmxpbmVzczogXCJDbGVhbmxpbmVzc1wiLFxyXG4gIEFjY3VyYWN5OiBcIkFjY3VyYWN5XCIsXHJcbiAgQ29tbXVuaWNhdGlvbjogXCJDb21tdW5pY2F0aW9uXCIsXHJcbiAgTG9jYXRpb246IFwiTG9jYXRpb25cIixcclxuICBWYWx1ZTogXCJWYWx1ZVwiLFxyXG4gIEF2YWlsYWJpbGl0eTogXCJBdmFpbGFiaWxpdHlcIixcclxuICBBdmFpbGFibGU6IFwiQXZhaWxhYmxlXCIsXHJcbiAgVW5hdmFpbGFibGU6IFwiVW5hdmFpbGFibGVcIixcclxuICBCb2FyZGluZ0NhbmNlbGxhdGlvbnBvbGljeTogXCJCb2FyZGluZyBDYW5jZWxsYXRpb24gcG9saWN5XCIsXHJcbiAgRXh0cmFpbmZvYWJvdXRsb2NhbGl0eTogXCJFeHRyYSBpbmZvIGFib3V0IGxvY2FsaXR5XCIsXHJcbiAgRGFzaGJvYXJkOiBcIkRhc2hib2FyZFwiLFxyXG4gIFJlc2VydmF0aW9uczogXCJSZXNlcnZhdGlvbnNcIixcclxuICBNeXByb2ZpbGU6IFwiTXkgcHJvZmlsZVwiLFxyXG4gIE15U2VydmljZXM6IFwiTXkgU2VydmljZXNcIixcclxuICBGYXZvdXJpdGVTaXR0ZXJzOiBcIkZhdm91cml0ZSBTaXR0ZXJzXCIsXHJcbiAgTXlzcG90czogXCJNeSBzcG90c1wiLFxyXG4gIFBhc3N3b3JkQW5kU2VjdXJpdHk6IFwiUGFzc3dvcmQgJiBTZWN1cml0eVwiLFxyXG4gIFBheW1lbnRzQW5kcGF5b3V0czogXCJQYXltZW50cyAmIHBheW91dHNcIixcclxuICBQYXltZW50aGlzdG9yeTogXCJQYXltZW50IGhpc3RvcnlcIixcclxuICBHbG9iYWxwcmVmZXJlbmNlczogXCJHbG9iYWwgcHJlZmVyZW5jZXNcIixcclxuICBQb2ludHNBbmRjb3Vwb246IFwiUG9pbnRzICYgY291cG9uXCIsXHJcbiAgVG90YWxCb29raW5nczogXCJUb3RhbCBCb29raW5nc1wiLFxyXG4gIFdlZWs6IFwiV2Vla1wiLFxyXG4gIFRvdGFsRWFybmluZ3M6IFwiVG90YWwgRWFybmluZ3NcIixcclxuICBUb3RhbFJlZmVycmFsOiBcIlRvdGFsIFJlZmVycmFsXCIsXHJcbiAgTGF0ZXN0Qm9va2luZ1JlcXVlc3RzOiBcIkxhdGVzdCBCb29raW5nIFJlcXVlc3RzXCIsXHJcbiAgVmlld0FsbDogXCJWaWV3IEFsbFwiLFxyXG4gIEZyb206IFwiRnJvbVwiLFxyXG4gIFRvOiBcIlRvXCIsXHJcbiAgVG90YWw6IFwiVG90YWxcIixcclxuICBBY2NlcHQ6IFwiQWNjZXB0XCIsXHJcbiAgUGVuZGluZzogXCJQZW5kaW5nXCIsXHJcbiAgTWFrZVBheW1lbnQ6IFwiTWFrZSBwYXltZW50XCIsXHJcbiAgRWRpdDogXCJFZGl0XCIsXHJcbiAgUmVtb3ZlOiBcIlJlbW92ZVwiLFxyXG4gIE1lZXRpbmdSZXF1ZXN0czogXCJNZWV0aW5nIFJlcXVlc3RzXCIsXHJcbiAgTXlQb3J0Zm9saW86IFwiTXkgUG9ydGZvbGlvXCIsXHJcbiAgZGVsZXRlUGV0OiBcIkRlbGV0ZSBwZXRcIixcclxuICBhcmVZb3VTdXJlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgYWRkQXZhaWxhYmlsaXR5OiBcIkFkZCBhdmFpbGFiaWxpdHlcIixcclxuICBBZGRtb3JlaW1hZ2VzOiBcIiBBZGQgbW9yZSBpbWFnZXNcIixcclxuICBOZXdzRmVlZHM6IFwiTmV3cyBGZWVkc1wiLFxyXG4gIEV4Y2VsbGVudDogXCJFeGNlbGxlbnRcIixcclxuICBWaWV3UHJvZmlsZTogXCJWaWV3IFByb2ZpbGVcIixcclxuICBFeHBsb3JlYW1hemluZ3BsYWNlczogXCIgRXhwbG9yZSBhbWF6aW5nIHBsYWNlcyB0byB2aXNpdCB3aXRoIHlvdXIgcGV0c1wiLFxyXG4gIFBldGNhcmU6IFwiUGV0Y2FyZVwiLFxyXG4gIFNlZWFsbDogXCJTZWUgYWxsXCIsXHJcbiAgS21zZnJvbXlvdXJjdXJyZW50bG9jYXRpb246IFwiZnJvbSB5b3VyIGN1cnJlbnQgbG9jYXRpb25cIixcclxuICByZXNwb25zZXJhdGU6IFwicmVzcG9uc2UgcmF0ZVwiLFxyXG4gIFNlZWF2YWlsYWJpbGl0eTogXCJTZWUgYXZhaWxhYmlsaXR5XCIsXHJcbiAgU2VlQWRkaXRpb25hbFNlcnZpY2VzUmF0ZXM6IFwiU2VlIEFkZGl0aW9uYWwgU2VydmljZXMgJiByYXRpbmdBbmRSZXZpZXdzXCIsXHJcbiAgQWRkcmVzczogXCJBZGRyZXNzXCIsXHJcbiAgQ2xpZW50OiBcIkNsaWVudFwiLFxyXG4gIE1lZXRhdDogXCJNZWV0IGF0XCIsXHJcbiAgUmVqZWN0OiBcIlJlamVjdFwiLFxyXG4gIENhbmNlbDogXCJDYW5jZWxcIixcclxuICBSZWplY3RlZDogXCJSZWplY3RlZFwiLFxyXG4gIFBheW1lbnQ6IFwiUGF5bWVudFwiLFxyXG4gIEJhc2ljaW5mbzogXCJCYXNpYyBpbmZvXCIsXHJcbiAgQWRkcmVzc0luZm86IFwiQWRkcmVzcyBJbmZvXCIsXHJcbiAgRGVmYXVsdGF2YWlsYWJpbGl0eTogXCJEZWZhdWx0IGF2YWlsYWJpbGl0eVwiLFxyXG4gIE1vbmRheTogXCJNb25kYXlcIixcclxuICBUdWVzZGF5OiBcIlR1ZXNkYXlcIixcclxuICBXZWRuZXNkYXk6IFwiV2VkbmVzZGF5XCIsXHJcbiAgVGh1cnNkYXk6IFwiVGh1cnNkYXlcIixcclxuICBGcmlkYXk6IFwiRnJpZGF5XCIsXHJcbiAgQWRkc2xvdDogXCJBZGQgc2xvdFwiLFxyXG4gIFNhdHVyZGF5OiBcIlNhdHVyZGF5XCIsXHJcbiAgU2F2ZTogXCJTYXZlXCIsXHJcbiAgSG9tZUFkZHJlc3NMaW5lOiBcIkhvbWUgQWRkcmVzcyBMaW5lXCIsXHJcbiAgQXB0SG91c2VObzogXCJBcHQuL0hvdXNlIE5vLlwiLFxyXG4gIENpdHk6IFwiQ2l0eVwiLFxyXG4gIFN0YXRlb3Jwcm92aW5jZTogXCJTdGF0ZSBvciBwcm92aW5jZVwiLFxyXG4gIFpJUHBvc3RhbHBvc3Rjb2RlOiBcIlpJUC9wb3N0YWwvcG9zdGNvZGVcIixcclxuICBGdWxsbmFtZTogXCJGdWxsIG5hbWVcIixcclxuICBFbWFpbGFkZHJlc3M6IFwiRW1haWwgYWRkcmVzc1wiLFxyXG4gIGVudGVyRW1haWxBZGRyZXNzOiAnRW50ZXIgeW91ciByZWdpc3RlcmVkIGVtYWlsIGFkZHJlc3MnLFxyXG4gIGVudGVyT3RwOiAnRW50ZXIgT1RQJyxcclxuICBlbnRlck5ld1Bhc3N3b3JkOiAnRW50ZXIgbmV3IHBhc3N3b3JkJyxcclxuICBlbnRlck9sZFBhc3N3b3JkOiAnRW50ZXIgY3VycmVudCBwYXNzd29yZCcsXHJcbiAgZW50ZXJDb25maXJtUGFzc3dvcmQ6ICdFbnRlciBjb25maXJtIHBhc3N3b3JkJyxcclxuICBvdHA6ICdPVFAnLFxyXG4gIG5ld1Bhc3N3b3JkOiAnTmV3IFBhc3N3b3JkJyxcclxuICBvbGRQYXNzd29yZDogJ09sZCBQYXNzd29yZCcsXHJcbiAgY29uZmlybVBhc3N3b3JkOiAnQ29uZmlybSBQYXNzd29yZCcsXHJcblxyXG4gIENvbnRhY3RudW1iZXI6IFwiQ29udGFjdCBudW1iZXJcIixcclxuICBCaXJ0aGRhdGU6IFwiQmlydGggZGF0ZVwiLFxyXG4gIGFkZFNlcnZpY2VGaXJzdDogXCJZb3UgbmVlZCB0byBhZGQgYSBzZXJ2aWNlIGZpcnN0IFwiLFxyXG4gIFByb2ZpbGV2ZXJpZmljYXRpb246IFwiUHJvZmlsZSB2ZXJpZmljYXRpb25cIixcclxuICB1cGxvYWRJbWFnZVRleHQ6XHJcbiAgICBcIlVwbGFvZCB5b3VyIElEIGltYWdlcyB0byB2ZXJpZnkgeW91ciBwcm9maWxlLCBtYWtlIHN1cmUgdGhlIGRlYXRpc2wgeW91IGVudGVyZCBvbiB5b3VyIHByb2ZpbGUgc2hvdWxkIG1hdGNoIHRoZSBpbmZvcm1hdGlvbiBpbiBJRCBjYXJkXCIsXHJcbiAgU2VsZWN0SURjYXJkdHlwZTogXCJTZWxlY3QgSUQgY2FyZCB0eXBlXCIsXHJcbiAgUGFzc3BvcnQ6IFwiUGFzc3BvcnRcIixcclxuICBWZXJpZnlteXByb2ZpbGU6IFwiVmVyaWZ5IG15IHByb2ZpbGVcIixcclxuICBMaXNjZW5zZXZlcmlmaWNhdGlvbjogXCJMaXNjZW5zZSB2ZXJpZmljYXRpb25cIixcclxuICB1cGxvYWRsaXNjZW5zZVRleHQ6XHJcbiAgICBcIlVwbGFvZCB5b3VyIGxpc2NlbnNlIGltYWdlcyB0byB2ZXJpZnkgdGhhdCB5b3UgYXJlIGFjZXJ0aWZpZWQgc2l0dGVyLCB0aGVzZSBsaXNjZW5zZXMgd2lsbCBiZSB2ZXJpZmllZCBieSBvdXIgdGVhbSBmb3IgdGhlIHNhZnRleSBvZiBwZXRzLlwiLFxyXG4gIEFkZG5ld3BldDogXCJBZGQgbmV3IHBldFwiLFxyXG4gIEloYXZlOiBcIkkgaGF2ZVwiLFxyXG4gIERvZzogXCJEb2dcIixcclxuICBDYXQ6IFwiQ2F0XCIsXHJcbiAgQmlyZHM6IFwiQmlyZHNcIixcclxuICBSZXB0aWxlczogXCJSZXB0aWxlc1wiLFxyXG4gIFNtYWxsYW5pbWFsczogXCJTbWFsbCBhbmltYWxzXCIsXHJcbiAgTmFtZTogXCJOYW1lXCIsXHJcbiAgV2VpZ2h0OiBcIldlaWdodFwiLFxyXG4gIEFnZTogXCJBZ2VcIixcclxuICBCcmVhZDogXCJCcmVhZFwiLFxyXG4gIFNleDogXCJTZXhcIixcclxuICBXaGljaHNlcnZpY2Vzd291bGR5b3VsaWtldG9vZmZlcjogXCJXaGljaCBzZXJ2aWNlcyB3b3VsZCB5b3UgbGlrZSB0byBvZmZlclwiLFxyXG4gIFNldHNlcnZpY2VzdG9jYXRpdmU6XHJcbiAgICBcIlNldCBzZXJ2aWNlcyB0byBjYXRpdmUgdGhhdCB5b3Ugd2FudCB0byBhcHBlYXIgaW4gdGhlIHNlYXJjaCBhbmQgcmVjZWl2ZSBuZXcgYnVzaW5lc3MgZm9yLiBVc2UgYXdheSBtb2RlIHdoZW4geW91IGFyZSBvbiB2YWNhdGlvbiwgb3IgY2Fu4oCZdCByZXNwb25kIHRvIG5ldy4gcmVxdWVzdHNcIixcclxuICBTYXZlYW5kQ29udGludWU6IFwiU2F2ZSAmIENvbnRpbnVlXCIsXHJcbiAgQUNUSVZFOiBcIkFDVElWRVwiLFxyXG4gIElOU1RBTlRCT09LSU5HOiBcIklOU1RBTlQgQk9PS0lOR1wiLFxyXG4gIE1hbmFnZTogXCJNYW5hZ2VcIixcclxuICBBbGxzZXJ2aWNlczogXCJBbGwgc2VydmljZXNcIixcclxuICBCb2FyZGluZzogXCJCb2FyZGluZ1wiLFxyXG4gIFNlcnZpY2U6IFwiU2VydmljZVwiLFxyXG4gIFdoYXRpczogXCJXaGF0IGlzXCIsXHJcbiAgb25QZXRjYXRpb246IFwib24gUGV0Y2F0aW9uP1wiLFxyXG4gIFNlcnZpY2VBbmRGZWVzOiBcIlNlcnZpY2UgJiBGZWVzXCIsXHJcbiAgUHJlZmVyZW5jZXM6IFwiUHJlZmVyZW5jZXNcIixcclxuICBEaXNjb3VudHM6IFwiRGlzY291bnRzXCIsXHJcbiAgU3BlY2lhbGRpc2NvdW50Zm9yeW91cmd1ZXN0czogXCJTcGVjaWFsIGRpc2NvdW50IGZvciB5b3VyIGd1ZXN0c1wiLFxyXG4gIG9mZm9uZmlyc3Rib29raW5nd2l0aHlvdTogXCIyMCUgb2ZmIG9uIGZpcnN0IGJvb2tpbmcgd2l0aCB5b3VcIixcclxuICBBbGxvd29mb25ib29raW5nYW1vdW50OlxyXG4gICAgXCIgQWxsb3cgMjAlIG9mIG9uIGJvb2tpbmcgYW1vdW50IGZvciB0aGUgZmlyc3QgdGltZSBndWVzdHMuIFRoaXMgb2ZmZXJzIGNhbiBhdHRyYWN0IG5ldyBndWVzdHMgYW5kIGhlbHAgeW91IHRvIGVhcm4gbW9yZSBwb2ludHMgYW5kIHJldmlld3NcIixcclxuICBOb29mZmVyb250aGlzc2VydmljZTogXCJObyBvZmZlciBvbiB0aGlzIHNlcnZpY2VcIixcclxuICBMZW5ndGhvZnN0YXlkaXNjb3VudDogXCJMZW5ndGgtb2Ytc3RheSBkaXNjb3VudFwiLFxyXG4gIFdlZWtseWRpc2NvdW50OiBcIldlZWtseSBkaXNjb3VudFwiLFxyXG4gIFRoaXNkaXNjb3VudHdpbGxhcHBseXRvYW55cmVzZXJ2YXRpb246XHJcbiAgICBcIlRoaXMgZGlzY291bnQgd2lsbCBhcHBseSB0byBhbnkgcmVzZXJ2YXRpb24gb2YgNyB0byAxMiBuaWdodHNcIixcclxuICBNb250aGx5ZGlzY291bnQ6IFwiIE1vbnRobHkgZGlzY291bnRcIixcclxuICBZb3VyYXZhaWxhYmlsaXR5d2hpbGVwZXRpc2F0Ym9hcmRpbmc6XHJcbiAgICBcIllvdXIgYXZhaWxhYmlsaXR5IHdoaWxlIHBldCBpcyBhdCBib2FyZGluZ1wiLFxyXG4gIFlvdWNhbnNlbGVjdGZyb210aGVvcHRpb25zcGFydHM6XHJcbiAgICBcIllvdSBjYW4gc2VsZWN0IGZyb20gdGhlIG9wdGlvbnMgcGFydC10aW1lICYgZnVsbHRpbWUgc2VsZWN0aW5nIGZ1bGwtdGltZSBtZWFucyB5b3UgYXJlIGF2YWlsYWJsZSBhbGwgdGhlIHRpbWUgYXQgaG9tZSB3aGVuIGJvYXJkaW5nIHRoZSBwZXQuXCIsXHJcbiAgd2hlbmhvc3RpbmdwZXRzaW55b3VyaG9tZWhvd2ZyZXF1ZW50bHljYW55b3Vwcm92aWRlYnJlYWtzOlxyXG4gICAgXCJXaGVuIGhvc3RpbmcgcGV0cyBpbiB5b3VyIGhvbWUsIGhvdyBmcmVxdWVudGx5IGNhbiB5b3UgcHJvdmlkZSBicmVha3M/XCIsXHJcbiAgaG93ZnJlcXVlbnRseWNhbnlvdXByb3ZpZGVwb3R0eWJyZWFrczpcclxuICAgIFwiV2hlbiBob3N0aW5nIHBldHMgaW4geW91ciBob21lLCBob3cgZnJlcXVlbnRseSBjYW4geW91IHByb3ZpZGUgcG90dHkgYnJlYWtzLCBvciB3YWxrcywgb3IgZmVlZHMgaW4gY2FzZS5cIixcclxuICBDYW55b3VwaWNrdXBwZXRmcm9tY2xpZW50cGxhY2U6IFwiQ2FuIHlvdSBwaWNrdXAgcGV0IGZyb20gY2xpZW504oCZcyBwbGFjZT9cIixcclxuICBwZXRUeXBlOiBcIlBldCB0eXBlXCIsXHJcbiAgc2VydmljZVR5cGU6IFwiU2VydmljZSBUeXBlXCIsXHJcbiAgV2VsY29tZWFnYWluOiBcIldlbGNvbWUgYWdhaW5cIixcclxuICBSZW1lbWJlcm1lOiBcIlJlbWVtYmVyIG1lXCIsXHJcbiAgRm9yZ290cGFzc3dvcmQ6IFwiRm9yZ290IHBhc3N3b3JkP1wiLFxyXG4gIHJlc2VuZDogXCJSZXNlbnRcIixcclxuICBMb2dpbjogXCJMb2dpblwiLFxyXG4gIG9yOiBcIm9yXCIsXHJcbiAgQ29udGludWV3aXRoRmFjZWJvb2s6IFwiQ29udGludWUgd2l0aCBGYWNlYm9va1wiLFxyXG4gIENvbnRpbnVld2l0aEdvb2dsZTogXCJDb250aW51ZSB3aXRoIEdvb2dsZVwiLFxyXG4gIENvbnRpbnVld2l0aFR3aXR0ZXI6IFwiQ29udGludWUgd2l0aCBUd2l0dGVyXCIsXHJcbiAgQ29udGludWV3aXRoTGluZTogXCJDb250aW51ZSB3aXRoIExpbmVcIixcclxuICBEb250aGF2ZWFuYWNjb3VudDogXCJEb24ndCBoYXZlIGFuIGFjY291bnQgPyBcIixcclxuICBSZWdpc3Rlcm5vdzogXCJSZWdpc3RlciBub3dcIixcclxuICBDcmVhdGV5b3VyZnJlZWFjY291bnR0b2RheTogXCJDcmVhdGUgeW91ciBmcmVlIGFjY291bnQgdG9kYXlcIixcclxuICBGaXJzdG5hbWU6IFwiRmlyc3QgbmFtZVwiLFxyXG4gIExhc3RuYW1lOiBcIkxhc3QgbmFtZVwiLFxyXG4gIERhdGVvZkJpcnRoOiBcIkRhdGUgb2YgQmlydGhcIixcclxuICByZWdpc3RlclRlcm06XHJcbiAgICBcIiwgY29uZmlybSB0aGF0IEkgYW0gMTMgeWVhcnMgb2YgYWdlIG9yIG9sZGVyLCBhbmQgY29uc2VudCB0byByZWNlaXZpbmcgZW1haWwgY29tbXVuaWNhdGlvblwiLFxyXG4gIEpvaW5ub3c6IFwiSm9pbiBub3dcIixcclxuICBBbHJlYWR5aGF2ZWFuYWNjb3VudDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudCA/IFwiLFxyXG4gIEZvcmdvdHlvdXJwYXNzd29yZDogXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIixcclxuICBSZXNldHlvdXJwYXNzd29yZDogXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIixcclxuICBmb3Jnb3RQYXNzd29yZEluc3RydWN0aW9uOlxyXG4gICAgXCJUbyByZXNldCB5b3VyIHBhc3N3b3JkIGVudGVyIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbCBhZGRyZXNzLCB3ZeKAmWxsIHNlbmQgYW4gZW1haWwgd2l0aCBsaW5rIHRvIHJlc2V0IHlvdSBwYXNzd29yZFwiLFxyXG4gIHJlc2V0UGFzc3dvcmRJbnN0cnVjdGlvbjogXCJBbiBvdHAgaXMgc2VudCwgdG8gcHJvdmlkZWQgZW1haWwgYWRkcmVzcywgcGxlYXNlIHZlcmlmeSBhbmQgcmVzZXQgeW91ciBwYXNzd29yZFwiLFxyXG4gIFN1Ym1pdDogXCJTdWJtaXRcIixcclxuICByZXNldFBhc3N3b3JkOiBcIlJlc2V0IFBhc3N3b3JkXCIsXHJcbiAgQm9va2luZ2J5bWU6IFwiQm9va2luZyBieSBtZVwiLFxyXG4gIEJvb2tpbmdmb3JtZTogXCJCb29raW5nIGZvciBtZVwiLFxyXG4gIFJlcXVlc3RieW1lOiBcIlJlcXVlc3QgYnkgbWVcIixcclxuICBSZXF1ZXN0Zm9ybWU6IFwiIFJlcXVlc3QgZm9yIG1lXCIsXHJcbiAgU2l0dGVycmVzZXJ2YXRpb25zOiBcIlNpdHRlciByZXNlcnZhdGlvbnNcIixcclxuICBDbGllbnRyZXNlcnZhdGlvbnM6IFwiQ2xpZW50IHJlc2VydmF0aW9uc1wiLFxyXG4gIE15RmF2b3VyaXRlczogXCJNeSBGYXZvdXJpdGVzXCIsXHJcbiAgTXlSZXZpZXdzOiBcIk15IFJldmlld3NcIixcclxuICBTcG90czogXCJTcG90c1wiLFxyXG4gIEFkZG5ld3Nwb3Q6IFwiQWRkIG5ldyBzcG90XCIsXHJcbiAgQXZhaWxhYmxlZm9yOiBcIkF2YWlsYWJsZSBmb3JcIixcclxuICBSZXBlYXRDbGllbnRzOiBcIlJlcGVhdCBDbGllbnRzXCIsXHJcbiAgU29ydGJ5OiBcIlNvcnQgYnlcIixcclxuICBSZWNlbnRseUFkZGVkOiBcIlJlY2VudGx5IEFkZGVkXCIsXHJcbiAgQ3JlYXRlbmV3cGV0c3BvdDogXCJDcmVhdGUgbmV3IHBldCBzcG90XCIsXHJcbiAgR2VuZXI6IFwiR2VucmVcIixcclxuICBHZW5kZXI6IFwiR2VuZGVyXCIsXHJcbiAgaWRJbWFnZTogXCJJRCBpbWFnZSAoLmpwZWcsIC5qcGcsIC5wbmcsIC5kb2MsIC5wZGYpXCIsXHJcbiAgTGlzY2Vuc2VOdW1iZXI6IFwiTGlzY2Vuc2UgTnVtYmVyXCIsXHJcbiAgdmVyaWZ5TXlDZXJ0aWZpY2F0ZTogXCJWZXJpZnkgbXkgY2VydGlmaWNhdGVcIixcclxuICBjbGlja1RvVXBsb2FkOiBcIkNsaWNrIHRvIHVwbGFvZCB5b3VyXCIsXHJcbiAgU2VsZWN0c3BvdGNhdGVnb3J5OiBcIlNlbGVjdCBzcG90IGNhdGVnb3J5XCIsXHJcbiAgYmFzaWNpbmZvOiBcIkJhc2ljIGluZm9cIixcclxuICBTcG90aW1hZ2VzOiBcIlNwb3QgaW1hZ2VzXCIsXHJcbiAgQWRkbW9yZTogXCJBZGQgbW9yZVwiLFxyXG4gIENvbmZpcm06IFwiQ29uZmlybVwiLFxyXG4gIERldGFpbGVkaW5mb0FtZW5pdGllczogXCJEZXRhaWxlZCBpbmZvICYgQW1lbml0aWVzXCIsXHJcbiAgUmVzZXJ2YXRpb25wb3NzaWJsZTogXCJSZXNlcnZhdGlvbiBwb3NzaWJsZVwiLFxyXG4gIEJ1ZGdldFBheW1lbnQ6IFwiQnVkZ2V0ICYgUGF5bWVudFwiLFxyXG4gIEJ1ZGdldDogXCJCdWRnZXRcIixcclxuICBDYXJkczogXCJDYXJkc1wiLFxyXG4gIHNlcnZpY2VDaHJhZ2U6IFwiU2VydmljZSBDaGFyZ2VcIixcclxuICBtZXRob2RPZlBheW1lbnQ6IFwiTWV0aG9kIG9mIFBheW1lbnRcIixcclxuICBCYW5raW5nSW5mbzogXCJCYW5raW5nIEluZm9cIixcclxuICBEZWxldGVDYXJkOiBcIkRlbGV0ZSBDYXJkXCIsXHJcbiAgU2V0RGVmYXVsdDogXCJTZXQgZGVmYXVsdFwiLFxyXG4gIEFkZG5ld2NhcmQ6IFwiQWRkIG5ldyBjYXJkXCIsXHJcbiAgYmFua1BheW1lbnQ6IFwiQmFuayBQYXltZW50XCIsXHJcbiAgRW50ZXJIZXJlOiBcIkVudGVyIGhlcmVcIixcclxuICBSZWplY3RSZXF1ZXN0OiBcIlJlamVjdCBSZXF1ZXN0XCIsXHJcbiAgcGFzc3BvcnROdW1iZXIgOlwiUGFzc3BvcnQgTnVtYmVyXCIsXHJcbiAgcGF5bWVudE5vdGU6XHJcbiAgICBcIiBOb3RlOiBBbGwgcGF5bWVudCBtZXRob2QgYXJlIHNlY3VyZWQgd2l0aCBhZHZhbmNlZCBzZWN1cml0eSBzeXN0ZW1zIGFuZCB3ZSBkb27igJl0IHN0b3JlIHlvdXIgY2FyZCBpbmZvLlwiLFxyXG4gIG5vQ2FyZEFkZGVkVGl0bGU6XCJObyBDYXJkcyBhcmUgYWRkZWQgeWV0LlwiLFxyXG4gIG5vUmVzZXJ2YXRpb246IFwiTm8gcmVzZXJ2YXRpb24gZm91bmQhXCIsXHJcbiAgbm9Db3Vwb25zOiBcIk5vIGNvdXBvbnMgZm91bmQhXCIsXHJcbiAgbm9QZXRzOiBcIk5vIHBldHMgZm91bmQhXCIsXHJcbiAgbm9SZXF1ZXN0OiBcIk5vIHJlcXVlc3RzIGZvdW5kIVwiLFxyXG4gIG5vQmFua0FkZGVkVGl0bGU6XCJObyBCYW5rIGRldGFpbHMgYXJlIGFkZGVkIHlldC5cIixcclxuICBhZGRDYXJkVXNpbmdGb3JtOiBcIlBsZWFzZSBhZGQgYSBjYXJkIHVzaW5nIGJlbG93IGZvcm0uXCIsXHJcbiAgYWRkQmFua1VzaW5nRm9ybTogXCJQbGVhc2UgYWRkIGJhbmsgaW5mbyB1c2luZyBiZWxvdyBmb3JtLlwiLFxyXG4gIG5vTXNnWWV0OiBcIk5vIG1lc3NhZ2UgcmVjZWl2ZWQgeWV0XCIsXHJcbiAgZW50ZXJDYXJkTnVtYmVyOiBcIkVudGVyIGNhcmQgbnVtYmVyIGhlcmVcIixcclxuICBOYW1lb25jYXJkOiBcIk5hbWUgb24gY2FyZFwiLFxyXG4gIHNldERlZmF1bHRDYXJkOiBcIlNldCBhcyBkZWZhdWx0IGNhcmRcIixcclxuICBDYXJkbnVtYmVyOiBcIkNhcmQgbnVtYmVyXCIsXHJcbiAgRXhwaXJhdGlvbjogXCJFeHBpcmF0aW9uXCIsXHJcbiAgQWRkY2FyZDogXCJBZGQgY2FyZFwiLFxyXG4gIEFkZG5ld2JhbmthY2NvdW50OiBcIkFkZCBuZXcgYmFuayBhY2NvdW50XCIsXHJcbiAgVHlwZW9mYWNjb3VudDogXCJUeXBlIG9mIGFjY291bnQ6XCIsXHJcbiAgUGVyc29uYWxBY2NvdW50OiBcIlBlcnNvbmFsIEFjY291bnRcIixcclxuICBCdXNpbmVzc0FjY291bnQ6IFwiQnVzaW5lc3MgQWNjb3VudFwiLFxyXG4gIEJhbmtDb3VudHJ5OiBcIkJhbmsgQ291bnRyeVwiLFxyXG4gIEJhbmtDdXJyZW5jeTogXCJCYW5rIEN1cnJlbmN5XCIsXHJcbiAgQmFua05hbWU6IFwiQmFuayBOYW1lXCIsXHJcbiAgQnJhbmNoTmFtZTogXCJCcmFuY2ggTmFtZVwiLFxyXG4gIEVudGVyQWNjb3VudE51bWJlcjpcIkVudGVyIEFjY291bnQgTnVtYmVyXCIsXHJcbiAgUm91dGluZ051bWJlcjpcIlJvdXRpbmcgTnVtYmVyXCIsXHJcbiAgRW50ZXJSb3V0aW5nTnVtYmVyOiBcIkVudGVyIFJvdXRpbmcgTnVtYmVyXCIsXHJcbiAgQmFua0NvZGU6IFwiQmFuayBDb2RlXCIsXHJcbiAgQmFua05hbWVIZXJlOiBcIkJhbmsgbmFtZSBoZXJlXCIsXHJcbiAgQWNjb3VudEhvbGRlck5hbWU6IFwiQWNjb3VudCBIb2xkZXIgTmFtZVwiLFxyXG4gIEFjY291bnRIb2xkZXJOYW1lSGVyZTogXCJBY2NvdW50IGhvbGRlciBuYW1lIGhlcmVcIixcclxuICBCcmFuY2hDb2RlOiBcIkJyYW5jaCBDb2RlXCIsXHJcbiAgQWNjb3VudE51bWJlcjogXCJBY2NvdW50IE51bWJlclwiLFxyXG4gIEFjY291bnRUeXBlOiBcIkFjY291bnQgVHlwZVwiLFxyXG4gIEJhbmtBY2NvdW50VHlwZTogXCJCYW5rIEFjY291bnQgVHlwZVwiLFxyXG4gIEFkZG5ld2FjY291bnQ6IFwiQWRkIG5ldyBhY2NvdW50XCIsXHJcbiAgQmFua0FjY291bnROdW1iZXI6IFwiQmFuayBBY2NvdW50IE51bWJlclwiLFxyXG4gIFBheW1lbnRIaXN0b3J5OiBcIlBheW1lbnQgSGlzdG9yeVwiLFxyXG4gIFdpdGhkcmF3TW9uZXk6IFwiIFdpdGhkcmF3IE1vbmV5XCIsXHJcbiAgRWFybmluZ3M6IFwiRWFybmluZ3NcIixcclxuICBQZW5kaW5nRWFybmluZ3M6IFwiUGVuZGluZyBFYXJuaW5nc1wiLFxyXG4gIFdpdGhkcmF3YWxzOiBcIldpdGhkcmF3YWxzXCIsXHJcbiAgUGF5bWVudHM6IFwiUGF5bWVudHNcIixcclxuICBPdGhlcjogXCJPdGhlclwiLFxyXG4gIFlvdXJFeHBlY3RlZEVhcm5pbmdzOiBcIllvdXIgRXhwZWN0ZWQgRWFybmluZ3NcIixcclxuICB0b3RhbFBheWFibGVBbW91bnQ6IFwiVG90YWwgcGF5YWJsZSBhbW91bnRcIixcclxuICBDb250YWN0bm93OiBcIkNvbnRhY3Qgbm93XCIsXHJcbiAgVmlld2RldGFpbHM6IFwiVmlldyBkZXRhaWxzXCIsXHJcbiAgTG9va2luZ2ZvcmFQZXRTcG90OiBcIkxvb2tpbmcgZm9yIGEgUGV0IFNwb3RcIixcclxuICBTZWFyY2g6IFwiU2VhcmNoXCIsXHJcbiAgUHJvdmlkZXNwb3RpbmZvcm1hdGlvbjogXCJQcm92aWRlIHNwb3QgaW5mb3JtYXRpb25cIixcclxuICBQcm92aWRlc3BvdDogXCJQcm92aWRlIHNwb3RcIixcclxuICBpbmZvcm1hdGlvbjogXCJpbmZvcm1hdGlvblwiLFxyXG4gIENhdGVnb3JpZXM6IFwiQ2F0ZWdvcmllc1wiLFxyXG4gIEZpbmRiZXN0cGV0c3BvdHM6IFwiIEZpbmQgYmVzdCBwZXQgc3BvdHMgZm9yIHlvdXIgcGV0cyB0byBzcGVuZCBhIGRheS5cIixcclxuICBSZXN0YXVyYW50Q2FmZTogXCJSZXN0YXVyYW50L0NhZmVcIixcclxuICBEb2dydW5zOiBcIkRvZyBydW5zXCIsXHJcbiAgUGV0R3Jvb21pbmc6IFwiUGV0IEdyb29taW5nXCIsXHJcbiAgTGVpc3VyZU91dGRvb3I6IFwiTGVpc3VyZSAvIE91dGRvb3JcIixcclxuICBQZXRmcmllbmRseUhvdGVsOiBcIlBldCBmcmllbmRseSBIb3RlbFwiLFxyXG4gIFBhcms6IFwiUGFya1wiLFxyXG4gIFRyYXZlbDogXCJUcmF2ZWxcIixcclxuICBBbmltYWxTaGVsdGVyOiBcIkFuaW1hbCBTaGVsdGVyXCIsXHJcbiAgWW91Y2FuZmluZHNwb3RzaW5wbGFjZXM6IFwiWW91IGNhbiBmaW5kIHNwb3RzIGluIHBsYWNlcyB5b3Ugd2FudC5cIixcclxuICBUb2t5bzogXCJUb2t5b1wiLFxyXG4gIE9zYWthOiBcIk9zYWthXCIsXHJcbiAgS3lvdG86IFwiS3lvdG9cIixcclxuICBTYXBwb3JvOiBcIlNhcHBvcm9cIixcclxuICBOYWdveWE6IFwiTmFnb3lhXCIsXHJcbiAgS29iZTogXCJLb2JlXCIsXHJcbiAgU2VuZGFpOiBcIlNlbmRhaVwiLFxyXG4gIENoaWJhOiBcIkNoaWJhXCIsXHJcbiAgRmVhdHVyZWRTcG90czogXCJGZWF0dXJlZCBTcG90c1wiLFxyXG4gIExvYWRtb3JlOiBcIkxvYWQgbW9yZVwiLFxyXG4gIE1hcmt5b3VyYXZhaWxhYmlsaXR5OlxyXG4gICAgXCIgTWFyayB5b3VyIGF2YWlsYWJpbGl0eSBmb3IgdXNlciBmb3IgYWxsIHlvdXIgc2VydmljZXMuXCIsXHJcbiAgTm90aWZpY2F0aW9uczogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgbm9TaXR0ZXJGb3VuZDogXCJXZSBjb3VsZG4ndCBmaW5kIGFueSBzaXR0ZXJzIHRoYXQgbWF0Y2hlZCB5b3VyIGNyaXRlcmlhLlwiLFxyXG4gIFJlY2VpdmVtZXNzYWdlc2Zyb21ob3N0czpcclxuICAgIFwiUmVjZWl2ZSBtZXNzYWdlcyBmcm9tIGhvc3RzIGFuZCBndWVzdHMsIGluY2x1ZGluZyBib29raW5nIHJlcXVlc3QuXCIsXHJcbiAgRW1haWw6IFwiRW1haWxcIixcclxuICBUZXh0bWVzc2FnZTogXCJUZXh0IG1lc3NhZ2VcIixcclxuICBCcm93c2Vybm90aWZpY2F0aW9uOiBcIkJyb3dzZXIgbm90aWZpY2F0aW9uXCIsXHJcbiAgWW91Y2FubWFya3BpY2t1cHNlcnZpY2VlbmFibGU6XHJcbiAgICBcIiBZb3UgY2FuIG1hcmsgcGlja3VwIHNlcnZpY2UgZW5hYmxlIC8gZGlzYWJsZSBmb3IgYWxsIHNlcnZpY2UgZnJvbSBoZXJlXCIsXHJcbiAgUmVtaW5kZXJzOiBcIlJlbWluZGVyc1wiLFxyXG4gIFJlY2VpdmVib29raW5ncmVtaW5kZXJzOlxyXG4gICAgXCJSZWNlaXZlIGJvb2tpbmcgcmVtaW5kZXJzLCByZXF1ZXN0cyB0byB3cml0ZSBhIHJldmlldywgcHJpY2luZyBub3RpY2UsIGFuZCBvdGhlciByZW1pbmRlcnMgcmVsYXRlZCB0byB5b3VyIGFjdGl2aXRpZXNcIixcclxuICBQcm9tb3Rpb25zYW5kdGlwczogXCJQcm9tb3Rpb25zIGFuZCB0aXBzXCIsXHJcbiAgUGhvbmVjYWxsczogXCJQaG9uZSBjYWxsc1wiLFxyXG4gIEdlbmVyYWxwcmVmZXJlbmNlczogXCJHZW5lcmFsIHByZWZlcmVuY2VzXCIsXHJcbiAgTGFuZ3VhZ2U6IFwiTGFuZ3VhZ2VcIixcclxuICBTZXR5b3VycHJlZmVyZWRsYW5ndWFnZWZvclBldGNhdGlhb246XHJcbiAgICBcIlNldCB5b3VyIHByZWZlcmVkIGxhbmd1YWdlIGZvciBQZXRjYXRpYW9uXCIsXHJcbiAgQ291bnRyeTogXCJDb3VudHJ5XCIsXHJcbiAgQ3VycmVuY3k6IFwiQ3VycmVuY3lcIixcclxuICBTZWxlY3RjdXJyZW5jeWZvcmFsbHlvdXJ0cmFuc2FjdGlvbnM6XHJcbiAgICBcIlNlbGVjdCBjdXJyZW5jeSBmb3IgYWxsIHlvdXIgdHJhbnNhY3Rpb25zIHdpdGggUGV0Y2F0aW9uLlwiLFxyXG4gIFBhc3N3b3Jkc2V0dGluZ3M6IFwiUGFzc3dvcmQgc2V0dGluZ3NcIixcclxuICBXaGF0cGV0c3dvdWxkeW91cHJlZmVyZm9ydGhpc3NlcnZpY2U6XHJcbiAgICBcIldoYXQgcGV0cyB3b3VsZCB5b3UgcHJlZmVyIGZvciB0aGlzIHNlcnZpY2U/XCIsXHJcbiAgYm9hcmRpbmdTZXJ2aWNlZGVzY3JpcHRpb246XHJcbiAgICBcIlNlbGVjdCB0aGUgcGV0cyB5b3Ugd2lsbCBiZSB3aWxsaW5nIHRvIHNlcnZpY2UgZm9yIG5pZ2h0IGJvYXJkaW5nLlwiLFxyXG4gIEZsZXhpYmxlOiBcIkZsZXhpYmxlXCIsXHJcbiAgTW9kZXJhdGU6IFwiTW9kZXJhdGVcIixcclxuICBTdHJpY3Q6IFwiU3RyaWN0XCIsXHJcbiAgRG95b3VjaGFyZ2V0cmFuc3BvcnRhdGlvbmZlZTogXCIgRG8geW91IGNoYXJnZSB0cmFuc3BvcnRhdGlvbiBmZWU/XCIsXHJcbiAgTWluUHJpY2U6IFwiTWluIFByaWNlXCIsXHJcbiAgTWF4UHJpY2U6IFwiTWF4IFByaWNlXCIsXHJcbiAgTWFrZWJvb2tpbmd3aXRoOiBcIk1ha2UgYm9va2luZyB3aXRoXCIsXHJcbiAgQm9va2luZ2ZvcjogXCJCb29raW5nIGZvclwiLFxyXG4gIE5lZWRzaXR0ZXJ0b3BpY2t1cG15cGV0czogXCJOZWVkIHNpdHRlciB0byBwaWNrIHVwIG15IHBldHNcIixcclxuICBRdWVzdGlvbnM6IFwiUXVlc3Rpb25zXCIsXHJcbiAgU2VsZWN0c2tpbGxzOiBcIlNlbGVjdCBza2lsbHNcIixcclxuICByZXN0YXVyYW50TmFtZTogJ1Jlc3RhdXJhbnQgbmFtZScsXHJcbiAgcmV2aWV3czogJ3Jldmlld3MnLFxyXG4gIGF3YXJkczogJ0F3YXJkcycsXHJcbiAgZ2VuZXI6ICdHZW5yZScsXHJcbiAgdHJhbnNwb3J0YXRpb246ICdUcmFuc3BvcnRhdGlvbicsXHJcbiAgc3BvdEhvbGlkYXlzOiAnU3BvdCBob2xpZGF5cycsXHJcbiAgc2VydmljZUNoYXJnZXM6ICdTZXJ2aWNlIGNoYXJnZXMnLFxyXG4gIHJlc2VydmF0aW9uczogJ1Jlc2VydmF0aW9ucycsXHJcbiAgc21va2luZzogJ1Ntb2tpbmcgY2Vzc2F0aW9uIC8gc21va2luZycsXHJcbiAgcGFya2luZzogJ1BhcmtpbmcnLFxyXG4gIHNlcnZpY2VBbWVuaXRpZXM6ICdTZXJ2aWNlICYgQW1lbml0aWVzJyxcclxuICBhZGRlZEJhbmtBY2NvdW50OiBcIkFkZGVkIGJhbmsgYWNjb3VudFwiLFxyXG4gIGxhbmd1YWdlczogXCJMYW5ndWFnZXNcIixcclxuICBub29uQ2hhcmdlczogXCJOb29uIGNoYXJnZXNcIixcclxuICBuaWdodENoYXJnZXM6IFwiTmlnaHQgQ2hhcmdlc1wiLFxyXG4gIGVudGVyQmFua05hbWU6IFwiRW50ZXIgQmFuayBuYW1lXCIsXHJcbiAgYnJhbmNoTmFtZTogXCJFbnRlciBCcmFuY2ggbmFtZVwiLFxyXG4gIGJyYW5jaENvZGU6IFwiRW50ZXIgQnJhbmNoIGNvZGVcIixcclxuICBhY2NvdW50SG9sZGVyTmFtZTogXCJFbnRlciBBY2NvdW50IGhvbGRlciBuYW1lXCIsXHJcbiAgYWNjb3VudE51bWJlcjogXCJFbnRlciBBY2NvdW50IG51bWJlclwiLFxyXG4gIHJvdXRpbmdOdW1iZXI6IFwiRW50ZXIgUm91dGluZyBudW1iZXJcIixcclxuICBlbnRlckxvY2F0aW9uOiBcIkVudGVyIExvY2F0aW9uXCIsXHJcbiAgYmFua0NvZGU6IFwiRW50ZXIgQmFuayBjb2RlXCIsXHJcbiAgZW50ZXJaaXBDb2RlOiBcIkVudGVyIHppcCBjb2RlXCIsXHJcbiAgcG9zdGFsQ29kZTogXCJQb3N0YWwgY29kZVwiLFxyXG4gIGxvY2F0aW9uS2FuYTogXCJMb2NhdGlvbiBLYW5hXCIsXHJcbiAgbG9jYXRpb25LYW5qaTogXCJMb2NhdGlvbiBrYW5qaVwiLFxyXG4gIGJvb2ttYXJrU2l0dGVyOiBcIlN1Y2Nlc3NmdWxseSBtYXJrZWQgc2l0dGVyIGFzIGZhdm91cml0ZVwiLFxyXG4gIHVubWFya1NpdHRlcjogXCJTdWNjZXNzZnVsbHkgdW5tYXJrZWQgc2l0dGVyIGFzIGZhdm91cml0ZVwiLFxyXG4gIGVycm9yVXBkYXRpbmdTdGF0dXM6XCJFcnJvciB1cGRhdGluZyBzdGF0dXNcIixcclxuICBwYXk6IFwiUGF5XCIsXHJcbiAgYWNjZXB0ZWRCeVNpdHRlcjogXCJBY2NlcHRlZCBieSBzaXR0ZXJcIixcclxuICBhY2NlcHRlZEJ5WW91OiBcIkFjY2VwdGVkIGJ5IHlvdVwiLFxyXG4gIHBheW1lbnRQZW5kaW5nOiBcIlBheW1lbnQgUGVuZGluZ1wiLFxyXG4gIHBheW1lbnREb25lOiBcIlBhaWRcIixcclxuICBzdGF0dXM6ICdTdGF0dXMnLFxyXG4gIHBheW1lbnRJbmZvcm1hdGlvbjogJ1BheW1lbnQgSW5mb3JtYXRpb24nLFxyXG4gIHNlbGVjdFBheW1lbnRNZXRob2Q6IFwiU2VsZWN0IHBheW1lbnQgbWV0aG9kXCIsXHJcbiAgc2F2ZWRDYXJkczogXCJTYXZlZCBDYXJkc1wiLFxyXG4gIGRvWW91SGF2ZUNvdXBvbjogJ0RvIHlvdSBoYXZlIGEgY291cG9uIGNvZGUgPycsXHJcbiAgY291cG9uRGV0YWlsOiAnIEVudGVyIHlvdXIgY291cG9uIGNvZGUgaGVyZSB0byBhdmFpbCBkaXNjb3VudCBvbiB5b3UgYm9va2luZy4nLFxyXG4gIGNvbmZpcm1Cb29raW5nOiAnQ29uZmlybSBib29raW5nJyxcclxuICBib29raW5nRGV0YWlsczogJ0Jvb2tpbmcgRGV0YWlscycsXHJcbiAgdG90YWxBbW91bnQ6ICdUb3RhbCBBbW91bnQnLFxyXG4gIHRyYW5zcG9ydEZlZTogXCJUcmFuc3BvcnRhdGlvbiBmZWVcIixcclxuICBkaXNjb3VudDogXCJEaXNjb3VudFwiLFxyXG4gIHRheDogJ1RheCcsXHJcbiAgc3ViVG90YWw6ICdTdWJ0b3RhbCcsXHJcbiAgYm9va2luZ1N1Y2Nlc3M6ICdCb29raW5nIFN1Y2Nlc3NmdWwnLFxyXG4gIGJvb2tlZEZvcjogJ1lvdXIgYm9va2luZyBmb3IgJyxcclxuICBpc1N1Y2Nlc3NmdWw6ICcgaXMgc3VjY2Vzc2Z1bC4nLFxyXG4gIGNvbXBsZXRlZDogJ0NvbXBsZXRlZCcsXHJcbiAgY2FuY2VsbGVkOiAnQ2FuY2VsbGVkJyxcclxuICBhZGRpdGlvbmFsU2VydmljZTogXCJBZGRpdGlvbmFsIHNlcnZpY2VzXCIsXHJcbiAgdHJhbnNwb3J0YXRpb25GZWU6ICdUcmFuc3BvcnRhdGlvbiBmZWUnXHJcbn07XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkZXJcIjogXCJMb2FkZXJfbG9hZGVyX19DYWlwN1wiLFxuXHRcInN2Z1wiOiBcIkxvYWRlcl9zdmdfX2JhaEN0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLXNsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kYXktcGlja2VyL0RheVBpY2tlcklucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1hdXRvY29tcGxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvcGxhY2VzL1N0YW5kYWxvbmVTZWFyY2hCb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9jYWxpemF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaW1wbGUtc25hY2tiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbImF4aW9zIiwiVV9BQ1RJVkVfQk9BUkRJTkciLCJVX0FDVElWRV9EQVlfQ0FSRSIsIlVfQUNUSVZFX0RST1BfSU5fVklTSVRTIiwiVV9BQ1RJVkVfR1JPT01JTkciLCJVX0FDVElWRV9IT1VTRV9DQUxMIiwiVV9BQ1RJVkVfSE9VU0VfU0lUVElORyIsIlVfQUNUSVZFX1BFVF9XQUxLSU5HIiwiVV9BRERfUEVUIiwiVV9BRERfUVVFU1RJT04iLCJVX0FERF9TS0lMTCIsIlVfQUREX1NQT1QiLCJVX0FSUkFOR19NRUVUVVAiLCJVX0JPQVJESU5HX0RJU0NPVU5UUyIsIlVfQk9BUkRJTkdfUEVUX1NFUlZJQ0VfRkVFIiwiVV9CT0FSRElOR19QUkVGRVJFTkNFIiwiVV9DSEFOR0VfUkVRVUVTVF9TVEFUVVMiLCJVX0RFTEVURV9QRVQiLCJVX0RFTEVURV9RVUVTVElPTiIsIlVfREVMRVRFX1NQT1QiLCJVX0RPR19XQUxLSU5HX0RJU0NPVU5UIiwiVV9ET0dfV0FMS0lOR19JTkZPIiwiVV9ET0dfV0FMS0lOR19TRVJWSUNFX0ZFRSIsIlVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFIiwiVV9EUk9QX0lOX1ZJU0lURVNfUFJFRkVSRU5DRSIsIlVfRFJPUF9JTl9WSVNJVFNfRElTQ09VTlRTIiwiVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSIsIlVfRklMVEVSRURfQVZBSUxBQkxFX1NJVFRFUiIsIlVfR0VUX0FERFJFU1MiLCJVX0dFVF9BTExfUEVUUyIsIlVfR0VUX0FMTF9TUE9UIiwiVV9HRVRfQVZBSUxBQklMSVRZIiwiVV9HRVRfQVZBSUxBQklMSVRZX0JZX0RBVEVTIiwiVV9HRVRfQVZBSUxBQkxFX1NFUlZJQ0VTIiwiVV9HRVRfQkFTSUNfSU5GTyIsIlVfR0VUX0JPQVJESU5HX0lORk8iLCJVX0dFVF9CT0FSRElOR19QUkVWSUVXIiwiVV9HRVRfQlJFRURfV0lUSF9UWVBFIiwiVV9HRVRfQ0lUSUVTIiwiVV9HRVRfQ09VVFJJRVMiLCJVX0dFVF9EQVNIQk9BUkQiLCJVX0dFVF9ET0dfV0FMS0lOR19QUkVWSUVXIiwiVV9HRVRfRFJPUF9JTl9QUkVWSUVXIiwiVV9HRVRfRFJPUF9JTl9WSVNJVFNfSU5GTyIsIlVfR0VUX0dST09NSU5HX0lORk8iLCJVX0dFVF9HUk9PTUlOR19QUkVWSUVXIiwiVV9HRVRfSE9VU0VfQ0FMTF9JTkZPIiwiVV9HRVRfSE9VU0VfQ0FMTF9QUkVWSUVXIiwiVV9HRVRfSE9VU0VfQ0FMTF9TRVJWSUNFIiwiVV9HRVRfSE9VU0VfU0lUVElOR19JTkZPIiwiVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXIiwiVV9HRVRfTEFOR0FVR0VTIiwiVV9HRVRfUEFSS0lORyIsIlVfR0VUX1BBWU1FTlRfTUVUSE9EUyIsIlVfR0VUX1BFVFMiLCJVX0dFVF9QRVRfREFZX0NBUkVfUFJFVklFVyIsIlVfR0VUX1BFVF9TRVJWSUNFIiwiVV9HRVRfUEVUX1NQT1RTIiwiVV9HRVRfUVVFU1RJT05TIiwiVV9HRVRfUkVTRVJWQVRJT05fVFlQRVMiLCJVX0dFVF9TRVJWSUNFUyIsIlVfR0VUX1NJTkdMRV9TSVRURVIiLCJVX0dFVF9TSU5HTEVfU1BPVCIsIlVfR0VUX1NJVFRFUl9BVkFJTEFCSUxJVFkiLCJVX0dFVF9TSVRURVJfUkVTRVJWQVRJT05TIiwiVV9HRVRfU0tJTExTIiwiVV9HRVRfU01PS0lOR19DRVNTSU9OUyIsIlVfR0VUX1RIUkVBRF9CT09LSU5HIiwiVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMiLCJVX0dFVF9VU0VSX1NLSUxMUyIsIlVfR1JPT01JTkdfU0VSVklDRV9ESVNDT1VOVCIsIlVfR1JPT01JTkdfU0VSVklDRV9GRUUiLCJVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSIsIlVfSE9VU0VfQ0FMTF9ESVNDT1VOVCIsIlVfSE9VU0VfQ0FMTF9QUkVGRVJFTkNFIiwiVV9IT1VTRV9DQUxMX1NFUlZJQ0VfRkVFIiwiVV9IT1VTRV9TSVRUSU5HX0RJU0NPVU5UUyIsIlVfSE9VU0VfU0lUVElOR19QUkVGRVJFTkNFIiwiVV9IT1VTRV9TSVRUSU5HX1NFUlZJQ0VfRkVFIiwiVV9JTUFHRV9VUExPQUQiLCJVX1BFVF9BRERJVElPTkFMX1JFUVVFU1QiLCJVX1BFVF9BTU9VTlRfQ0FMQ1VMQVRJT04iLCJVX1BFVF9EQVlfQ0FSRV9ESVNDT1VOVCIsIlVfUEVUX0RBWV9DQVJFX0lORk8iLCJVX1BFVF9EQVlfQ0FSRV9QUkVGRVJFTkNFIiwiVV9QRVRfREFZX0NBUkVfU0VSVklDRV9GRUVTIiwiVV9QRVRfU0VSVklDRV9BVkFJQUxBQklMSVRZIiwiVV9QRVRfU1BPVF9DQVRFR09SSUVTIiwiVV9SQVRFX1NJVFRFUiIsIlVfUkVRVUVTVF9TSVRURVIiLCJVX1NBVkVfQUREUkVTUyIsIlVfU0FWRV9CQVNJQ19JTkZPIiwiVV9TQVZFX0xPQ0FMSVRZIiwiVV9TQVZFX1BPUlRGT0xJTyIsIlVfU0VORF9NRVNTQUdFIiwiVV9TRVRfQVZBSUxBQkxFX1NFUlZJQ0VTIiwiVV9TSU5HTEVfUEVUIiwiVV9VUERBVEVfUEVUIiwiVV9VUERBVEVfU1BPVCIsIlVfVVBMT0FEX1BST0ZJTEVfUElDVFVSRSIsIlVfVVNFUl9MT0dJTiIsIlVfVVNFUl9SRUdJU1RFUiIsIlVfQUREX0NBUkQiLCJVX0dFVF9DQVJEIiwiVV9ERUxFVEVfQ0FSRCIsIlVfQUREX0JBTktfQUNDT1VOVCIsIlVfR0VUX0JBTktfQUNDT1VOVCIsIlVfR0VUX0JBTktfREVUQUlMUyIsIlVfREVMRVRFX0JBTktfQUNDT1VOVCIsIlVfR0VUX1BFVF9TUE9UX0RFVEFJTFMiLCJHT09HTEVfUExBQ0VTX0JBU0VfVVJMIiwiR09PR0xFX1BMQUNFU19BUEkiLCJVX1VQTE9BRF9ET0NVTUVOVFMiLCJVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyIsIlVfQUREX1RSQU5TUE9SVF9DSEFSR0VTIiwiVV9VUERBVEVfUkVRVUVTVF9TVEFUVVMiLCJVX0JPT0tNQVJLX1NJVFRFUiIsIlVfR0VUX1JFUVVFU1RfREVUQUlMIiwiVV9DT05GSVJNX1BBWU1FTlQiLCJVX1BBWU1FTlRfSElTVE9SWSIsIlVfR0VUX0ZBVk9SSVRFX1NJVFRFUiIsIlVfQ0hBTkdFX01FRVRVUF9TVEFUVVMiLCJVX0dFVF9NRUVUVVBTIiwiVV9DSEFUX0FDVElPTiIsIlVfR0VUX0ZBVk9SSVRFX1NQT1QiLCJVX01BUktfVU5NQVJLX1NQT1QiLCJVX01BS0VfQ0FSRF9fREVGQVVMVCIsIlVfTUFLRV9CQU5LX0RFRkFVTFQiLCJVX1JFU0VUX1BBU1NXT1JEIiwiVV9DSEFOR0VfUEFTU1dPUkQiLCJVX0ZPUkdPVF9QQVNTV09SRCIsIlVfQVBQTFlfQ09VUE9OIiwiVV9SRU1PVkVfQ09VUE9OIiwiVV9HRVRfQ09VUE9OIiwiVV9SRUFEX1NUQVRVUyIsIlVfUkVWSUVXX1NQT1QiLCJVX0dFVF9ORVdTIiwiVV9HRVRfRVZFTlQiLCJVX0dFVF9TSU5HTEVfTkVXUyIsIkNvb2tpZXMiLCJuZXh0Q29va2llIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJ0b2tlbiIsIkF1dGhvcml6YXRpb24iLCJyZXF1ZXN0IiwibWV0aG9kIiwicGF0aCIsImJvZHkiLCJjdHgiLCJ1cmwiLCJjb29raWVzIiwiZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJBUEkiLCJpZCIsImFwaVVybCIsInJlc3VsdCIsInJlZ2lzdGVyVXNlciIsImxvZ2luVXNlciIsInJlc2V0UGFzc3dvcmQiLCJjaGFuZ2VQYXNzd29yZCIsImZvcmdvdFBhc3N3b3JkIiwiZ2V0RGFzaGJvYXJkIiwiZ2V0QmFzaWNJbmZvIiwiZ2V0QWRkcmVzcyIsInNhdmVCYXNpY0luZm8iLCJzYXZlQWRkcmVzcyIsImFkZFF1ZXN0aW9uIiwiZGVsZXRlUXVlc3Rpb24iLCJ2YWwiLCJnZXRRdWVzdGlvbnMiLCJnZXRTa2lsbHMiLCJnZXRVc2VyU2tpbGxzIiwiYWRkU2tpbGwiLCJzYXZlTG9jYWxpdHlJbmZvIiwic2F2ZVBvcnRmb2xpbyIsImdldEF2YWlsYWJsZVNlcnZpY2VzIiwic2V0QXZhaWxhYmxlU2VydmljZSIsImdldEF2YWlsYWJpbGl0eSIsImdldEF2YWlsYWJpbGl0eUJ5RGF0ZSIsImFkZFBldCIsImdldEFsbFBldHMiLCJnZXRTaW5nbGVQZXRzIiwidXBkYXRlUGV0IiwiZGVsZXRlUGV0IiwiZ2V0U2VydmljZSIsImFjdGl2ZUJvYXJkaW5nIiwiYWN0aXZlRGF5Q2FyZSIsImFjdGl2ZUhvdXNlU2l0dGluZyIsImFjdGl2ZURyb3BJblZpc2l0cyIsImFjdGl2ZVBldFdhbGtpbmciLCJhY3RpdmVHcm9vbWluZyIsImFjdGl2ZUhvdXNlQ2FsbCIsImdldEhvdXNlQ2FsbEluZm8iLCJnZXRIb3VzZUNhbGxTZXJ2aWNlIiwiaG91c2VDYWxsU2VydmljZUZlZSIsImhvdXNlQ2FsbFByZWZlcmVuY2UiLCJob3VzZUNhbGxEaXNjb3VudCIsImdldEhvdXNlQ2FsbFByZXZpZXciLCJnZXRHcm9vbWluZ1NlcnZpY2UiLCJnZXRHcm9vbWluZ0luZm8iLCJncm9vbWluZ1NlcnZpY2VGZWUiLCJncm9vbWluZ1NlcnZpY2VQcmVmZXJuY2UiLCJncm9vbWluZ1NlcnZpY2VEaXNjb3VudCIsImdldEdyb29taW5nUHJldmlldyIsImJvYXJkaW5nU2VydmljZUZlZSIsImJvYXJkaW5nUHJlZmVyZW5jZSIsImJvYXJkaW5nRGlzY291bnQiLCJnZXRCb2FyZGluZ0luZm8iLCJnZXRCb2FyZGluZ1ByZXZpZXciLCJnZXRIb3VzZVNpdHRpbmdJbmZvIiwiaG91c2VTaXR0aW5nU2VydmljZUZlZSIsImhvdXNlU2l0dGluZ0Rpc2NvdW50IiwiaG91c2VTaXR0aW5nUHJlZmVyZW5jZSIsImdldEhvdXNlU2l0dGluZ1ByZXZpZXciLCJnZXREcm9wSW5WaXNpdHNJbmZvIiwiZHJvcEluVmlzaXRzU2VydmljZUZlZSIsImRyb3BJblZpc2l0UHJlZmVyZW5jZSIsImRyb3BJblZpc2l0RGlzY291bnRzIiwiZ2V0RHJvcEluVmlzaXRzUHJldmlldyIsImdldFBldERheUNhcmVJbmZvIiwicGV0RGF5Q2F0ZVNlcnZpY2VGZWUiLCJwZXREYXlDYXJlUHJlZmVyZW5jZSIsInBldERheUNhcmVEaXNjb3VudCIsImdldFBldERheUNhcmVQcmV2aWV3IiwiZ2V0RG9nV2Fsa2luZ0luZm8iLCJEb2dXYWxraW5nU2VydmljZUZlZSIsImRvZ1dhbGtpbmdQcmVmZXJlbmNlIiwiZG9nV2Fsa2luZ0Rpc2NvdW50IiwiZ2V0RG9nV2Fsa2luZ1ByZXZpZXciLCJwZXRBZGRpdGlvbmFsU2VydmljZXMiLCJwZXRBbW91bnRDYWxjdWxhdGlvbiIsInNpdHRlclJlcXVlc3QiLCJjaGFuZ2VSZXF1ZXN0U3RhdHVzIiwicGV0U2VydmljZUF2YWlsYWJpbGl0eSIsImdldFNpdHRlclJlc2VydmV0aW9ucyIsInBhZ2UiLCJnZXRVc2VyUmVzZXJ2YXRpb25zIiwic2VuZE1lc3NhZ2UiLCJjaGF0QWN0aW9uIiwiZ2V0VGhyZWFkQm9va2luZyIsImFycmFuZ2VNZWV0dXAiLCJ1cGRhdGVNZWV0dXBTdGF0dXMiLCJnZXRNZWV0dXBSZXF1ZXN0IiwiZ2V0VHJhbnNwb3J0Q2hhcmdlUmVxdWVzdCIsImFkZFRyYW5zcG9ydENoYXJnZVJlcXVlc3QiLCJ1cGRhdGVSZXF1ZXN0U3RhdHVzIiwidXBkYXRlUmVhZFN0YXR1cyIsImdldENvdXRpcmVzIiwiZ2V0Q2l0aWVzIiwiZ2V0UGV0cyIsImdldEJyZWVkV2l0aFR5cGUiLCJ1cGxvYWRGaWxlIiwiZ2V0RmlsdGVyZWRBdmlhbGFibGVTaXR0ZXIiLCJnZXRGYXZvcml0ZVNpdHRlcnMiLCJ1cGxvYWRQcm9maWxlUGljdHVyZSIsInVwbG9hZERvY3VtZW50IiwiZ2V0UGV0U3BvdHNDYXRlZ29yeSIsImdldFBldFNwb3RzIiwibWFya1VubWFya1Nwb3QiLCJnZXRQZXRTcG90RGV0YWlscyIsImdldFBheW1lbnRNZXRob2RzIiwiZ2V0UmVzZXJ2YXRpb25UeXBlcyIsImdldFNtb2tpbmdDZXNzaW9uIiwiZ2V0UGFya2luZyIsImdldExhbmdhdWdlcyIsImFkZFNwb3QiLCJ1cGRhdGVTcG90IiwicmF0ZVNpdHRlciIsImdldFNpbmdsZVNpdHRlciIsIm1hcmtVbm1hcmtTaXR0ZXIiLCJnZXRBbGxTcG90cyIsImdldEZhdm9yaXRlU3BvdHMiLCJkZWxldGVTcG90IiwiZ2V0U2luZ2xlU3BvdCIsImdldFNpdHRlckF2YWlsYWJpbGl0eSIsInJhdGVSZXZpZXdTcG90IiwiYWRkTmV3Q2FyZCIsImdldEFsbENhcmQiLCJkZWxldGVDYXJkIiwiYWRkTmV3QmFua0FjY291bnQiLCJnZXRBbGxCYW5rQWNjb3VudCIsImdldEFsbEJhbmtBY2NvdW50RGV0YWlscyIsIm1hcmtDYXJkQXNEZWZhdWx0IiwibWFrZUJhbmtBc0RlZmF1bHQiLCJkZWxldGVCYW5rQWNjb3VudCIsImdldFNpbmdsZVJlcXVlc3REZXRhaWwiLCJjb25maXJtUGF5bWVudCIsInBheW1lbnRIaXN0b3J5IiwiYXBwbHlDb3Vwb24iLCJyZW1vdmVDb3Vwb24iLCJnZXRDb3Vwb25zIiwidHlwZSIsImdldE5ld3MiLCJnZXRFdmVudHMiLCJnZXRTaW5nbGVOZXdzIiwiU3VjY2Vzc09wdGlvbnMiLCJwb3NpdGlvbiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImNsb3NlU3R5bGUiLCJGYWlsdXJlT3B0aW9ucyIsIkxpbmsiLCJzdHJpbmdzIiwiUmVhY3QiLCJlcnJvck9wdGlvbnMiLCJzdWNjZXNzT3B0aW9ucyIsInVzZVNuYWNrYmFyIiwiYXBpIiwiU2l0dGVyT2JqZWN0IiwicHJvcHMiLCJzZXJ2aWNlSWQiLCJnZXRTaXR0ZXIiLCJwZXRUeXBlIiwib3BlblN1Y2Nlc3MiLCJjbG9zZVN1Y2Nlc3MiLCJvcGVuRXJyb3IiLCJjbG9zZUVycm9yIiwiZ2V0VHJpbW1lZEFkZHJlc3MiLCJhZGRyZXNzIiwibGVuZ3RoIiwibmV3U3RyaW5nIiwic3Vic3RyaW5nIiwiaGFuZGxlQm9va21hcmtTaXR0ZXIiLCJzaXR0ZXJfaWQiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiaXNfZmF2b3JpdGUiLCJ1bm1hcmtTaXR0ZXIiLCJib29rbWFya1NpdHRlciIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJwcm9maWxlX3BpY3R1cmUiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImhpZGVfYWRkcmVzcyIsImNpdHkiLCJwb3N0Y29kZSIsImxpdmVfaW5faG91c2UiLCJub25fc21va2luZ19ob3VzZWhvbGQiLCJkb2dfb3RoZXJfcGV0cyIsImZlbmNlZF95YXJkIiwicXVlcnkiLCJzaXR0ZXJJZCIsInNlcnZpY2UiLCJuYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsIm92ZXJhbGxfcmF0ZSIsInRvdGFsX3JldmlldyIsInByaWNlIiwic3R5bGVzIiwiTG9hZGVyIiwiYWxpZ25TZWxmIiwiZmxleCIsImRpc3BsYXkiLCJsb2FkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsIndpdGhTY3JpcHRqcyIsIndpdGhHb29nbGVNYXAiLCJHb29nbGVNYXAiLCJNYXJrZXIiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlN0YW5kYWxvbmVTZWFyY2hCb3giLCJyZXF1aXJlIiwiTXlNYXBDb21wb25lbnQiLCJsYXRsb25nIiwicGFyc2UiLCJsYXRsbmciLCJsYXQiLCJsbmciLCJzaG93SW5mbyIsInNldFNob3dJbmZvIiwiaW5mbyIsInNldEluZm8iLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsImluZGV4IiwicHVzaCIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlRXhpdCIsIm9uQ2hhbmdlTGF0TG5nIiwibWFwIiwiZHJhZ2dhYmxlIiwiZSIsImJvcmRlckJvdHRvbSIsInRvcCIsImxlZnQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiekluZGV4IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwiaXNMb2NhbFVSTCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwic2xpY2UiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiU2VsZWN0IiwiRGF5UGlja2VySW5wdXQiLCJwZXQiLCJwZXRDb3VudCIsInBldFNpemUiLCJwcmljZXMiLCJzZXJ2aWNlRGF0YSIsIlNlcnZpY2VUaW1lIiwiQXV0b2NvbXBsZXRlIiwiQXBwQ29udGV4dCIsIm1vbWVudCIsIlNsaWRlciIsImNyZWF0ZVNsaWRlcldpdGhUb29sdGlwIiwiUmFuZ2UiLCJTZWFyY2hTaXR0ZXIiLCJvcHRpb24iLCJwcm92aWRlZCIsImNvbnRyb2wiLCJzaW5nbGVWYWx1ZSIsImZvbnRXZWlnaHQiLCJzaXR0ZXJzIiwiY2hlY2tJbkRhdGUiLCJjaGVja091dERhdGUiLCJzZXJ2aWNlVGltZSIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJhbGxQcmljZSIsImxvYWRpbmciLCJkZWZhdWx0VmFsdWUiLCJ0cmFuc3BvcnRhdGlvbiIsImNsb3Nlc3Rfc2l0dGVyIiwidXNlcl9pZCIsInNhdmVTZWFyY2giLCJoYW5kbGVQZXRDaGFuZ2UiLCJoYW5kbGVTZXJ2aWNlVGltZUNoYW5nZSIsImhhbmRsZVBldENvdW50Q2hhbmdlIiwiaGFuZGxlUGV0U2l6ZUNoYW5nZSIsImhhbmRsZVNlcnZpY2VDaGFuZ2UiLCJoYW5kbGVDaGVja291dENsaWNrIiwiaGFuZGxlQ2hlY2tJbkRheUNsaWNrIiwib25UZXh0Q2hhbmdlIiwicmVzZXRGaWx0ZXIiLCJnZXRGaWx0ZXJlZEF2YWlsYWJsZVNpdHRlciIsImNvbXBvbmVudERpZE1vdW50Iiwic2VhcmNoRGF0YSIsImxvY2FsU3RvcmFnZSIsInNldFN0YXRlIiwic3RhdGljRGF0YSIsInNwbGljZSIsImNvbnRleHQiLCJTdHJpbmciLCJmaW5kIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsInByZXZTdGF0ZSIsIm5leHRTdGF0ZSIsImRheSIsImNoZWNrIiwicGV0X3R5cGUiLCJzZXJ2aWNlX2lkIiwiYXZhaWxhYmlsaXR5X3N0YXJ0IiwiYXZhaWxhYmlsaXR5X2VuZCIsIm51bWJlcl9vZl9wZXRzIiwicGV0X3NpemUiLCJmb3JfYWxsX3ByaWNlcyIsIm1pbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwidGhhdCIsInJlc3BvbnNlIiwicGFyc2VGbG9hdCIsIm1hcF9sYXRpdHVkZSIsIm1hcF9sb25naXR1ZGUiLCJyZW5kZXIiLCJkYXRlIiwiZm9ybWF0IiwiY3VzdG9tU3R5bGVzIiwic2VydmljZVR5cGUiLCJtb2RpZmllcnMiLCJiZWZvcmUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwicmVhZE9ubHkiLCJsYWJlbCIsIkhvd21hbnlwZXRzIiwiQWRkcmVzcyIsInBsYWNlIiwiZ2VvbWV0cnkiLCJjb21wb25lbnRSZXN0cmljdGlvbnMiLCJjb3VudHJ5IiwiU2F2ZVNlYXJjaCIsImFsaWduSXRlbXMiLCJ1cGRhdGVXaGVuSU1vdmVUaGVNYXAiLCJub1NpdHRlckZvdW5kIiwibGFuZ3VhZ2UiLCJmb250RmFtaWx5Iiwic2VydmljZUZlZU9iamVjdCIsImNhcGFjaXR5IiwicGV0X3NpemVfaWQiLCJzZXJ2aWNlX2NoYXJnZSIsImVhcm5pbmdfYW1vdW50IiwiY2l0aWVzIiwicGV0cyIsIm5ld3NBbmRFdmVudHMiLCJwb3N0ZWQiLCJwb3N0IiwiZmFxIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJkdXJhdGlvbnMiLCJzb3J0IiwibXlQZXRzIiwiYWdlIiwiaW1hZ2UiLCJ3ZWlnaHQiLCJyZXZpZXdTdGF0ZURhdGEiLCJyYXRpbmciLCJjbGVhbmxpbmVzcyIsImFjY3VyYWN5IiwiY29tbXVuaWNhdGlvbiIsImNoZWNrSW4iLCJyZXZpZXdPYmplY3REYXRhIiwidXNlckltYWdlIiwidXNlck5hbWUiLCJ0aW1lIiwicmV2aWV3IiwidXNlckltYWdlcyIsInVzZXJDb3VudCIsInNpdHRlclJlc3BvbnNlIiwic2l0dGVyUmVwbHkiLCJzaXR0ZXJJbWFnZSIsInNpdHRlck5hbWUiLCJzaXR0ZXJTZXJ2aWNlcyIsImRlc2NyaXB0aW9uIiwicGVyaW9kIiwic2l0dGVyU3RhdGVzIiwiYm9va2luZ0Zvck1lIiwiYm9va2luZ0J5TWUiLCJwQm9va2luZ0Zvck1lIiwicEJvb2tpbmdCeU1lIiwicFRvdGFsQm9va2luZyIsInRvdGFsRWFybmluZyIsInBUb3RhbEVhcm5pbmciLCJ0b3RhbFJlZmVycmFsIiwicFRvdGFsUmVmZXJyYWwiLCJyZXF1ZXN0c0FycmF5IiwiZnJvbSIsInRvIiwidG90YWwiLCJtZWV0aW5nUmVxdWVzdHMiLCJjbGllbnROYW1lIiwicmVzZXJ2YXRpb25SZXF1ZXN0cyIsInBheW1lbnRTdGF0dXMiLCJteVNlcnZpY2VzIiwic2VydmljZU5hbWUiLCJhY3RpdmUiLCJpbnN0YW50Qm9va2luZyIsInNwZWNpZmljYXRpb25zIiwic3BvdHMiLCJpbWFnZXMiLCJhdmFpbGFibGVGb3IiLCJyZXBlYXRlZENsaWVudCIsInJldmlld3MiLCJnZW5kZXIiLCJMb2NhbGl6ZWRTdHJpbmdzIiwiZW5nIiwic2VhcmNoU2l0dGVyIiwiYmVjb21lQVNpdHRlciIsIm91clNlcnZpY2VzIiwic2lnblVwIiwic2lnbkluIiwiaGVscCIsImV4cGxvcmUiLCJjb21wYW55IiwiYWJvdXRVcyIsImNvbnRhY3QiLCJjYXJlZXIiLCJwcml2YWN5UG9saWN5IiwidGVybXNPZlVzZXIiLCJjb29raWVQb2xpY3kiLCJwZXRTcG90cyIsImJsb2dzIiwiZmFxcyIsInNhZmV0eSIsIm5ld3NBbmRTYWZldHkiLCJuZXdzcm9vbSIsImV2ZW50c0FuZFVwZGF0ZXMiLCJzdGF5Q29ubmVjdGVkIiwic3Vic2NyaWJlIiwiZm9sbG93UGV0Y2F0aW9uIiwiYWRkWW91clBldFNwb3QiLCJhbGxSaWdodHNSZXNlcnZlZCIsImxvdmVDYXJlQW5kQWxsTmVlZHNGb3JQZXRzIiwiYm9va1RydXN0ZWRTaXR0ZXJzIiwieW91clBldCIsInlhYVBldExvdmVycyIsIndlTWFkZUl0U3VwZXJFYXN5VGl0bGUiLCJwZXRCb2FyZGluZyIsIndlTWFkZUl0U3VwZXJFYXp5UGV0Qm9hcmRpbmciLCJob3VzZVNpdHRpbmciLCJkcm9wSW5WaXNpdHMiLCJwZXREYXlDYXJlIiwiZG9nV2Fsa2luZyIsImhvdXNlQ2FsbCIsImdyb29taW5nIiwiYm9va1dpdGhQcm9mZXNzaW9uYWxQZXRTaXR0ZXIiLCJ2ZXJpZmllZFBldFNpdHRlcnMiLCJBbGxTaXR0ZXJQYXNzQUJhc2ljQ2hlY2siLCJrbm93U2l0dGVyUGVyc29uYWxseSIsIkFsbFNpdHRlcnNQcm92aWRlIiwiQ2VydGlmaWVkUGV0U2l0dGVycyIsIkFsbFNpdHRlcnNIYXZlQW5pbWFsQ2VydGlmaWNhdGlvbnMiLCJib29rWW91clBldGNhdGlvblNpdHRlciIsInBldGNhdGlvbkd1YXJhbnRlZSIsIkFsbFNlcnZpY2VzQm9va2VkT25QZXRjYXRpb24iLCJ3aHlDaG9vc2VQZXRjYXRpb24iLCJmaW5kVGhlUGVyZmVjdEhvdXNlS2VlcGVyIiwidmVyaWZpZWRTaXR0ZXJzIiwiYWxsUGV0Y2F0aW9uU2l0dGVyc0hhdmVQYXNzZWRPdXIiLCJwcm9mZXNzaW9uYWxDYXJlIiwieW91clBldHNTYWZldHlJc091clRvcFByaW9yaXR5IiwiczI0N3N1cHBvcnQiLCJXZUFyZUhlcmVUb0hlbHBZb3VBbmRZb3VyUGV0IiwicGV0Y2l0YXRpb25mb3JQZXRPd25lcnMiLCJzZWFyY2hBbmRDb25uZWN0V2l0aFRydXN0ZWQiLCJmaW5kQVZlcmlmaWVkUGV0U2l0dGVyIiwic2VhcmNoQW5kRmluZEV4cGVyaWVuY2VkTG9jYWwiLCJhcnJhbmdlQU1lZXRHcmVldCIsImdldFRvS25vd1lvdXJTaXR0ZXIiLCJib29rU2FmZWx5T25saW5lUGF5bWVudHMiLCJib29rWW91clNpdHRlclRocm91Z2hPdXJTYWZlT25saW5lIiwicHJvcGVyVXBkYXRlcyIsIm9uY2VKb2JDb21wbGV0ZXNZb3VDYW5SYXRlIiwicmF0aW5nQW5kUmV2aWV3cyIsImV4cGxvcmVPdXJTaXR0ZXIiLCJwZXRjYXRpb25Gb3JQZXRTaXR0ZXJzIiwid2FubmFCZVBhcnRuZXJXaXRoVXMiLCJ3aGF0RXZlclBldFNlcnZpY2VZb3VQcm92aWRlIiwiczEwMFZlcmlmaWVkam9icyIsIkVhc3lwcm9maWxldmVyaWZpY2F0aW9ucyIsIkluc3RhbnRwYXlvdXRzIiwiTGlzdHlvdXJib2FyZGluZyIsIkJlY29tZWFwZXRzaXR0ZXIiLCJhcHBseSIsIm1vcmUiLCJBbGxQcmljZXMiLCJEb2dzaXplIiwiUGV0dHlwZXMiLCJIb3dvZnRlbnlvdXdhbnRzZXJ2aWNlIiwiQ2hlY2tfb3V0IiwiQ2hlY2tfaW4iLCJQZXRjYXRpb25WZXJpZmllZCIsIlBldGNhdGlvbk5vdFZlcmlmaWVkIiwiT25saW5lbm93IiwiUGV0c3Rha2VuY2FyZSIsIkhhcHB5Q3VzdG9tZXJzIiwiUmVoaXJlcmF0ZSIsIkV4cGVyaWVuY2UiLCJNeXBldHMiLCJBYm91dHBsYWNlIiwiQWRkaXRpb25hbFNraWxscyIsIlJldmlld3MiLCJPdmVyYWxscmF0aW5nIiwiQ2xlYW5saW5lc3MiLCJBY2N1cmFjeSIsIkNvbW11bmljYXRpb24iLCJMb2NhdGlvbiIsIlZhbHVlIiwiQXZhaWxhYmlsaXR5IiwiQXZhaWxhYmxlIiwiVW5hdmFpbGFibGUiLCJCb2FyZGluZ0NhbmNlbGxhdGlvbnBvbGljeSIsIkV4dHJhaW5mb2Fib3V0bG9jYWxpdHkiLCJEYXNoYm9hcmQiLCJSZXNlcnZhdGlvbnMiLCJNeXByb2ZpbGUiLCJNeVNlcnZpY2VzIiwiRmF2b3VyaXRlU2l0dGVycyIsIk15c3BvdHMiLCJQYXNzd29yZEFuZFNlY3VyaXR5IiwiUGF5bWVudHNBbmRwYXlvdXRzIiwiUGF5bWVudGhpc3RvcnkiLCJHbG9iYWxwcmVmZXJlbmNlcyIsIlBvaW50c0FuZGNvdXBvbiIsIlRvdGFsQm9va2luZ3MiLCJXZWVrIiwiVG90YWxFYXJuaW5ncyIsIlRvdGFsUmVmZXJyYWwiLCJMYXRlc3RCb29raW5nUmVxdWVzdHMiLCJWaWV3QWxsIiwiRnJvbSIsIlRvIiwiVG90YWwiLCJBY2NlcHQiLCJQZW5kaW5nIiwiTWFrZVBheW1lbnQiLCJFZGl0IiwiUmVtb3ZlIiwiTWVldGluZ1JlcXVlc3RzIiwiTXlQb3J0Zm9saW8iLCJhcmVZb3VTdXJlIiwiYWRkQXZhaWxhYmlsaXR5IiwiQWRkbW9yZWltYWdlcyIsIk5ld3NGZWVkcyIsIkV4Y2VsbGVudCIsIlZpZXdQcm9maWxlIiwiRXhwbG9yZWFtYXppbmdwbGFjZXMiLCJQZXRjYXJlIiwiU2VlYWxsIiwiS21zZnJvbXlvdXJjdXJyZW50bG9jYXRpb24iLCJyZXNwb25zZXJhdGUiLCJTZWVhdmFpbGFiaWxpdHkiLCJTZWVBZGRpdGlvbmFsU2VydmljZXNSYXRlcyIsIkNsaWVudCIsIk1lZXRhdCIsIlJlamVjdCIsIkNhbmNlbCIsIlJlamVjdGVkIiwiUGF5bWVudCIsIkJhc2ljaW5mbyIsIkFkZHJlc3NJbmZvIiwiRGVmYXVsdGF2YWlsYWJpbGl0eSIsIk1vbmRheSIsIlR1ZXNkYXkiLCJXZWRuZXNkYXkiLCJUaHVyc2RheSIsIkZyaWRheSIsIkFkZHNsb3QiLCJTYXR1cmRheSIsIlNhdmUiLCJIb21lQWRkcmVzc0xpbmUiLCJBcHRIb3VzZU5vIiwiQ2l0eSIsIlN0YXRlb3Jwcm92aW5jZSIsIlpJUHBvc3RhbHBvc3Rjb2RlIiwiRnVsbG5hbWUiLCJFbWFpbGFkZHJlc3MiLCJlbnRlckVtYWlsQWRkcmVzcyIsImVudGVyT3RwIiwiZW50ZXJOZXdQYXNzd29yZCIsImVudGVyT2xkUGFzc3dvcmQiLCJlbnRlckNvbmZpcm1QYXNzd29yZCIsIm90cCIsIm5ld1Bhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJDb250YWN0bnVtYmVyIiwiQmlydGhkYXRlIiwiYWRkU2VydmljZUZpcnN0IiwiUHJvZmlsZXZlcmlmaWNhdGlvbiIsInVwbG9hZEltYWdlVGV4dCIsIlNlbGVjdElEY2FyZHR5cGUiLCJQYXNzcG9ydCIsIlZlcmlmeW15cHJvZmlsZSIsIkxpc2NlbnNldmVyaWZpY2F0aW9uIiwidXBsb2FkbGlzY2Vuc2VUZXh0IiwiQWRkbmV3cGV0IiwiSWhhdmUiLCJEb2ciLCJDYXQiLCJCaXJkcyIsIlJlcHRpbGVzIiwiU21hbGxhbmltYWxzIiwiTmFtZSIsIldlaWdodCIsIkFnZSIsIkJyZWFkIiwiU2V4IiwiV2hpY2hzZXJ2aWNlc3dvdWxkeW91bGlrZXRvb2ZmZXIiLCJTZXRzZXJ2aWNlc3RvY2F0aXZlIiwiU2F2ZWFuZENvbnRpbnVlIiwiQUNUSVZFIiwiSU5TVEFOVEJPT0tJTkciLCJNYW5hZ2UiLCJBbGxzZXJ2aWNlcyIsIkJvYXJkaW5nIiwiU2VydmljZSIsIldoYXRpcyIsIm9uUGV0Y2F0aW9uIiwiU2VydmljZUFuZEZlZXMiLCJQcmVmZXJlbmNlcyIsIkRpc2NvdW50cyIsIlNwZWNpYWxkaXNjb3VudGZvcnlvdXJndWVzdHMiLCJvZmZvbmZpcnN0Ym9va2luZ3dpdGh5b3UiLCJBbGxvd29mb25ib29raW5nYW1vdW50IiwiTm9vZmZlcm9udGhpc3NlcnZpY2UiLCJMZW5ndGhvZnN0YXlkaXNjb3VudCIsIldlZWtseWRpc2NvdW50IiwiVGhpc2Rpc2NvdW50d2lsbGFwcGx5dG9hbnlyZXNlcnZhdGlvbiIsIk1vbnRobHlkaXNjb3VudCIsIllvdXJhdmFpbGFiaWxpdHl3aGlsZXBldGlzYXRib2FyZGluZyIsIllvdWNhbnNlbGVjdGZyb210aGVvcHRpb25zcGFydHMiLCJ3aGVuaG9zdGluZ3BldHNpbnlvdXJob21laG93ZnJlcXVlbnRseWNhbnlvdXByb3ZpZGVicmVha3MiLCJob3dmcmVxdWVudGx5Y2FueW91cHJvdmlkZXBvdHR5YnJlYWtzIiwiQ2FueW91cGlja3VwcGV0ZnJvbWNsaWVudHBsYWNlIiwiV2VsY29tZWFnYWluIiwiUmVtZW1iZXJtZSIsIkZvcmdvdHBhc3N3b3JkIiwicmVzZW5kIiwiTG9naW4iLCJvciIsIkNvbnRpbnVld2l0aEZhY2Vib29rIiwiQ29udGludWV3aXRoR29vZ2xlIiwiQ29udGludWV3aXRoVHdpdHRlciIsIkNvbnRpbnVld2l0aExpbmUiLCJEb250aGF2ZWFuYWNjb3VudCIsIlJlZ2lzdGVybm93IiwiQ3JlYXRleW91cmZyZWVhY2NvdW50dG9kYXkiLCJGaXJzdG5hbWUiLCJMYXN0bmFtZSIsIkRhdGVvZkJpcnRoIiwicmVnaXN0ZXJUZXJtIiwiSm9pbm5vdyIsIkFscmVhZHloYXZlYW5hY2NvdW50IiwiRm9yZ290eW91cnBhc3N3b3JkIiwiUmVzZXR5b3VycGFzc3dvcmQiLCJmb3Jnb3RQYXNzd29yZEluc3RydWN0aW9uIiwicmVzZXRQYXNzd29yZEluc3RydWN0aW9uIiwiU3VibWl0IiwiQm9va2luZ2J5bWUiLCJCb29raW5nZm9ybWUiLCJSZXF1ZXN0YnltZSIsIlJlcXVlc3Rmb3JtZSIsIlNpdHRlcnJlc2VydmF0aW9ucyIsIkNsaWVudHJlc2VydmF0aW9ucyIsIk15RmF2b3VyaXRlcyIsIk15UmV2aWV3cyIsIlNwb3RzIiwiQWRkbmV3c3BvdCIsIkF2YWlsYWJsZWZvciIsIlJlcGVhdENsaWVudHMiLCJTb3J0YnkiLCJSZWNlbnRseUFkZGVkIiwiQ3JlYXRlbmV3cGV0c3BvdCIsIkdlbmVyIiwiR2VuZGVyIiwiaWRJbWFnZSIsIkxpc2NlbnNlTnVtYmVyIiwidmVyaWZ5TXlDZXJ0aWZpY2F0ZSIsImNsaWNrVG9VcGxvYWQiLCJTZWxlY3RzcG90Y2F0ZWdvcnkiLCJiYXNpY2luZm8iLCJTcG90aW1hZ2VzIiwiQWRkbW9yZSIsIkNvbmZpcm0iLCJEZXRhaWxlZGluZm9BbWVuaXRpZXMiLCJSZXNlcnZhdGlvbnBvc3NpYmxlIiwiQnVkZ2V0UGF5bWVudCIsIkJ1ZGdldCIsIkNhcmRzIiwic2VydmljZUNocmFnZSIsIm1ldGhvZE9mUGF5bWVudCIsIkJhbmtpbmdJbmZvIiwiRGVsZXRlQ2FyZCIsIlNldERlZmF1bHQiLCJBZGRuZXdjYXJkIiwiYmFua1BheW1lbnQiLCJFbnRlckhlcmUiLCJSZWplY3RSZXF1ZXN0IiwicGFzc3BvcnROdW1iZXIiLCJwYXltZW50Tm90ZSIsIm5vQ2FyZEFkZGVkVGl0bGUiLCJub1Jlc2VydmF0aW9uIiwibm9Db3Vwb25zIiwibm9QZXRzIiwibm9SZXF1ZXN0Iiwibm9CYW5rQWRkZWRUaXRsZSIsImFkZENhcmRVc2luZ0Zvcm0iLCJhZGRCYW5rVXNpbmdGb3JtIiwibm9Nc2dZZXQiLCJlbnRlckNhcmROdW1iZXIiLCJOYW1lb25jYXJkIiwic2V0RGVmYXVsdENhcmQiLCJDYXJkbnVtYmVyIiwiRXhwaXJhdGlvbiIsIkFkZGNhcmQiLCJBZGRuZXdiYW5rYWNjb3VudCIsIlR5cGVvZmFjY291bnQiLCJQZXJzb25hbEFjY291bnQiLCJCdXNpbmVzc0FjY291bnQiLCJCYW5rQ291bnRyeSIsIkJhbmtDdXJyZW5jeSIsIkJhbmtOYW1lIiwiQnJhbmNoTmFtZSIsIkVudGVyQWNjb3VudE51bWJlciIsIlJvdXRpbmdOdW1iZXIiLCJFbnRlclJvdXRpbmdOdW1iZXIiLCJCYW5rQ29kZSIsIkJhbmtOYW1lSGVyZSIsIkFjY291bnRIb2xkZXJOYW1lIiwiQWNjb3VudEhvbGRlck5hbWVIZXJlIiwiQnJhbmNoQ29kZSIsIkFjY291bnROdW1iZXIiLCJBY2NvdW50VHlwZSIsIkJhbmtBY2NvdW50VHlwZSIsIkFkZG5ld2FjY291bnQiLCJCYW5rQWNjb3VudE51bWJlciIsIlBheW1lbnRIaXN0b3J5IiwiV2l0aGRyYXdNb25leSIsIkVhcm5pbmdzIiwiUGVuZGluZ0Vhcm5pbmdzIiwiV2l0aGRyYXdhbHMiLCJQYXltZW50cyIsIk90aGVyIiwiWW91ckV4cGVjdGVkRWFybmluZ3MiLCJ0b3RhbFBheWFibGVBbW91bnQiLCJDb250YWN0bm93IiwiVmlld2RldGFpbHMiLCJMb29raW5nZm9yYVBldFNwb3QiLCJTZWFyY2giLCJQcm92aWRlc3BvdGluZm9ybWF0aW9uIiwiUHJvdmlkZXNwb3QiLCJpbmZvcm1hdGlvbiIsIkNhdGVnb3JpZXMiLCJGaW5kYmVzdHBldHNwb3RzIiwiUmVzdGF1cmFudENhZmUiLCJEb2dydW5zIiwiUGV0R3Jvb21pbmciLCJMZWlzdXJlT3V0ZG9vciIsIlBldGZyaWVuZGx5SG90ZWwiLCJQYXJrIiwiVHJhdmVsIiwiQW5pbWFsU2hlbHRlciIsIllvdWNhbmZpbmRzcG90c2lucGxhY2VzIiwiVG9reW8iLCJPc2FrYSIsIkt5b3RvIiwiU2FwcG9ybyIsIk5hZ295YSIsIktvYmUiLCJTZW5kYWkiLCJDaGliYSIsIkZlYXR1cmVkU3BvdHMiLCJMb2FkbW9yZSIsIk1hcmt5b3VyYXZhaWxhYmlsaXR5IiwiTm90aWZpY2F0aW9ucyIsIlJlY2VpdmVtZXNzYWdlc2Zyb21ob3N0cyIsIkVtYWlsIiwiVGV4dG1lc3NhZ2UiLCJCcm93c2Vybm90aWZpY2F0aW9uIiwiWW91Y2FubWFya3BpY2t1cHNlcnZpY2VlbmFibGUiLCJSZW1pbmRlcnMiLCJSZWNlaXZlYm9va2luZ3JlbWluZGVycyIsIlByb21vdGlvbnNhbmR0aXBzIiwiUGhvbmVjYWxscyIsIkdlbmVyYWxwcmVmZXJlbmNlcyIsIkxhbmd1YWdlIiwiU2V0eW91cnByZWZlcmVkbGFuZ3VhZ2Vmb3JQZXRjYXRpYW9uIiwiQ291bnRyeSIsIkN1cnJlbmN5IiwiU2VsZWN0Y3VycmVuY3lmb3JhbGx5b3VydHJhbnNhY3Rpb25zIiwiUGFzc3dvcmRzZXR0aW5ncyIsIldoYXRwZXRzd291bGR5b3VwcmVmZXJmb3J0aGlzc2VydmljZSIsImJvYXJkaW5nU2VydmljZWRlc2NyaXB0aW9uIiwiRmxleGlibGUiLCJNb2RlcmF0ZSIsIlN0cmljdCIsIkRveW91Y2hhcmdldHJhbnNwb3J0YXRpb25mZWUiLCJNaW5QcmljZSIsIk1heFByaWNlIiwiTWFrZWJvb2tpbmd3aXRoIiwiQm9va2luZ2ZvciIsIk5lZWRzaXR0ZXJ0b3BpY2t1cG15cGV0cyIsIlF1ZXN0aW9ucyIsIlNlbGVjdHNraWxscyIsInJlc3RhdXJhbnROYW1lIiwiYXdhcmRzIiwiZ2VuZXIiLCJzcG90SG9saWRheXMiLCJzZXJ2aWNlQ2hhcmdlcyIsInJlc2VydmF0aW9ucyIsInNtb2tpbmciLCJwYXJraW5nIiwic2VydmljZUFtZW5pdGllcyIsImFkZGVkQmFua0FjY291bnQiLCJsYW5ndWFnZXMiLCJub29uQ2hhcmdlcyIsIm5pZ2h0Q2hhcmdlcyIsImVudGVyQmFua05hbWUiLCJicmFuY2hOYW1lIiwiYnJhbmNoQ29kZSIsImFjY291bnRIb2xkZXJOYW1lIiwiYWNjb3VudE51bWJlciIsInJvdXRpbmdOdW1iZXIiLCJlbnRlckxvY2F0aW9uIiwiYmFua0NvZGUiLCJlbnRlclppcENvZGUiLCJwb3N0YWxDb2RlIiwibG9jYXRpb25LYW5hIiwibG9jYXRpb25LYW5qaSIsImVycm9yVXBkYXRpbmdTdGF0dXMiLCJwYXkiLCJhY2NlcHRlZEJ5U2l0dGVyIiwiYWNjZXB0ZWRCeVlvdSIsInBheW1lbnRQZW5kaW5nIiwicGF5bWVudERvbmUiLCJwYXltZW50SW5mb3JtYXRpb24iLCJzZWxlY3RQYXltZW50TWV0aG9kIiwic2F2ZWRDYXJkcyIsImRvWW91SGF2ZUNvdXBvbiIsImNvdXBvbkRldGFpbCIsImNvbmZpcm1Cb29raW5nIiwiYm9va2luZ0RldGFpbHMiLCJ0b3RhbEFtb3VudCIsInRyYW5zcG9ydEZlZSIsImRpc2NvdW50IiwidGF4Iiwic3ViVG90YWwiLCJib29raW5nU3VjY2VzcyIsImJvb2tlZEZvciIsImlzU3VjY2Vzc2Z1bCIsImNvbXBsZXRlZCIsImFkZGl0aW9uYWxTZXJ2aWNlIiwidHJhbnNwb3J0YXRpb25GZWUiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==
(() => {
var exports = {};
exports.id = "pages/sitter-profile/[id]";
exports.ids = ["pages/sitter-profile/[id]"];
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

/***/ "./components/sitterProfile/ExtraInfoLocality.tsx":
/*!********************************************************!*\
  !*** ./components/sitterProfile/ExtraInfoLocality.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtraInfoLocality)
/* harmony export */ });
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\sitterProfile\\ExtraInfoLocality.tsx";



function ExtraInfoLocality(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "bg-white main-background about-place locality",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
      className: "font-semibold mb-3 font-20",
      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Extrainfoaboutlocality
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: "locality-describe",
      children: props.address.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [props.address.live_in_house == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "Lives in a House"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 45
      }, this) : null, props.address.non_smoking_household == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "Non-Smoking Household"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this) : null, props.address.no_children_present == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "No Children Present"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this) : null, props.address.fenced_yard == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "Has a Fenced Yard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 43
      }, this) : null, props.address.dog_other_pets == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "Has pet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 46
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/sitterProfile/GalleryView.tsx":
/*!**************************************************!*\
  !*** ./components/sitterProfile/GalleryView.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GalleryView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\sitterProfile\\GalleryView.tsx";


function GalleryView(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "bg-white main-background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row gallery-view1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "gallery-img1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "first-img",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: props.images.length > 0 ? props.images[0].path : null,
            className: "img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "gallery-img1",
        children: [props.images.slice(1, 4).map((value, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "image1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: value.path,
              className: "img-fluid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this);
        }), props.images.length > 4 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "image1 spot-image pb-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: props.images[4].path,
            className: "img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "overlay",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              className: "mb-0",
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this) : null, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/sitterProfile/MyPets.tsx":
/*!*********************************************!*\
  !*** ./components/sitterProfile/MyPets.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\sitterProfile\\MyPets.tsx";




const MyPets = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "bg-white main-background",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
      className: "font-semibold mb-3 font-20",
      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Mypets
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "row",
      children: props.pets ? props.pets.map((value, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "col-12 col-md-6 col-lg-6 col-xl-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "mypet-details",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "mb-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: value.pet_image,
                className: "img-fluid"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
              className: "mb-0",
              children: [value.pet_name + "  ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: "text-muted",
                children: value.age_year + " years old"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              className: "mb-0",
              children: value.breed.breed + " , " + value.weight + "kgs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, undefined);
      }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "text-center padding",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "font-13 mb-0 font-italic",
          children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.noPets
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 12
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPets);

/***/ }),

/***/ "./components/sitterProfile/Reviews.tsx":
/*!**********************************************!*\
  !*** ./components/sitterProfile/Reviews.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_appData_AppData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/appData/AppData */ "./public/appData/AppData.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\sitterProfile\\Reviews.tsx";





const Reviews = props => {
  console.log('props.data', props.data);
  const {
    0: reviewState,
    1: setReviewState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_public_appData_AppData__WEBPACK_IMPORTED_MODULE_2__.reviewStateData);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "bg-white main-background",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h5", {
      className: "font-semibold font-20 mb-3",
      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Reviews
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "basic-info",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "col-12 col-md-3 col-lg-3 col-xl-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "overall-ratings",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
                className: "font-semibold",
                children: reviewState.rating
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                className: "mb-0 font-14 font-semibold text-white",
                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Overallrating
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "col-12 col-md-9 col-lg-9 col-xl-9",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "ratings-score",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "col-12 col-md-6 col-lg-6 col-xl-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "score score1",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-details",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                      className: "mb-0",
                      children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Cleanliness, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        children: reviewState.cleanliness + "/ 5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "rSlider",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        className: "slide",
                        style: {
                          width: `${reviewState.cleanliness * 20}%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        id: "range",
                        type: "range",
                        min: "0",
                        max: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "col-12 col-md-6 col-lg-6 col-xl-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "score score1",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-details",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                      className: "mb-0",
                      children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Accuracy, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        children: reviewState.accuracy + " / 5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "rSlider",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        className: "slide",
                        style: {
                          width: `${reviewState.accuracy * 20}%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        id: "range",
                        type: "range",
                        min: "0",
                        max: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "col-12 col-md-6 col-lg-6 col-xl-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "score score1",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-details",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                      className: "mb-0",
                      children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Communication, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        children: reviewState.communication + "/ 5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "rSlider",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        className: "slide",
                        style: {
                          width: `${reviewState.communication * 20}%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        id: "range",
                        type: "range",
                        min: "0",
                        max: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "col-12 col-md-6 col-lg-6 col-xl-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "score score1",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-details",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                      className: "mb-0",
                      children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Location, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        children: reviewState.location + "/ 5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "rSlider",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        className: "slide",
                        style: {
                          width: `${reviewState.location * 20}%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        id: "range",
                        type: "range",
                        min: "0",
                        max: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "col-12 col-md-6 col-lg-6 col-xl-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "score score1 mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-details",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                      className: "mb-0",
                      children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Check_in, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        children: reviewState.checkIn + "/ 5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "rSlider",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        className: "slide",
                        style: {
                          width: `${reviewState.checkIn * 20}%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        id: "range",
                        type: "range",
                        min: "0",
                        max: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "col-12 col-md-6 col-lg-6 col-xl-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "score score1 mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-details",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h6", {
                      className: "mb-0",
                      children: [_public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.Value, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        children: reviewState.value + " / 5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "score-bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "rSlider",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                        className: "slide",
                        style: {
                          width: `${reviewState.value * 20}%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                        id: "range",
                        type: "range",
                        min: "0",
                        max: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "sitter-review-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "read-more",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "#",
          children: "+ Read more reviews"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

/***/ }),

/***/ "./components/sitterProfile/SitterAvailability.tsx":
/*!*********************************************************!*\
  !*** ./components/sitterProfile/SitterAvailability.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SitterAvailablity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker */ "react-day-picker");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/Api */ "./api/Api.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\sitterProfile\\SitterAvailability.tsx";










const api = new _api_Api__WEBPACK_IMPORTED_MODULE_6__.default();
function SitterAvailablity({
  services
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    0: type,
    1: setType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: disabledDates,
    1: setDisabledDates
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: selectedService,
    1: setSelectedService
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(services[0]);

  function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;

    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.addDays)(currentDate, 1);
    }

    return dateArray;
  }

  const getServiceAvailability = () => {
    let data = {
      sitter_id: router.query.id,
      service_id: selectedService.service.id,
      is_available: type
    };
    api.getSitterAvailability(data).then(res => {
      let dates = res.data.response.map(value => new Date(value.Timestamp * 1000));
      let data = getDates(new Date(), (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.addMonths)(new Date(), 2));
      let newData = data.filter(date => !dates.find(d => (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isSameDay)(d, date)));
      setDisabledDates(newData);
    }).catch(error => {});
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getServiceAvailability();
  }, [selectedService, type]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "bg-white main-background",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h5", {
      className: "font-semibold mb-3 font-20",
      children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.Availability
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "form-group",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
        isSearchable: false,
        options: services,
        value: selectedService,
        onChange: setSelectedService,
        getOptionLabel: option => option.service.name,
        getOptionValue: option => option.service.id.toString()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "calendar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_day_picker__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Selectable",
        numberOfMonths: 1,
        fromMonth: new Date(),
        toMonth: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.addMonths)(new Date(), 2),
        selectedDays: null,
        disabledDays: [...disabledDates, {
          before: new Date()
        }]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "availability-check",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "custom-check mb-1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          className: "check",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "radio",
            name: "sitter",
            onChange: () => setType(1),
            checked: type == 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "checkmark"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.Available]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "custom-check mb-1",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
          className: "check",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            onChange: () => setType(0),
            checked: type == 0,
            type: "radio",
            name: "sitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "checkmark"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), _public_lang_Strings__WEBPACK_IMPORTED_MODULE_2__.strings.Unavailable]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "mt-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h6", {
        className: "font-semibold font-12 mb-0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/sitterProfile/SitterProfileHeader.tsx":
/*!**********************************************************!*\
  !*** ./components/sitterProfile/SitterProfileHeader.tsx ***!
  \**********************************************************/
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\sitterProfile\\SitterProfileHeader.tsx";





const SitterProfileHeader = props => {
  console.log(props.review);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "bg-white single-spot main-background",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "col-12 col-md-12 col-lg-8 col-xl-9",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "col-12 col-md-3 col-lg-3 col-xl-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "user-profile-img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                src: props.profile_pic
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "col-12 col-md-9 col-lg-9 col-xl-10",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "user-profile-details",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "d-flex",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                    className: "font-semibold mb-1",
                    children: props.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "my-auto ml-3",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    src: "/images/icons2.png"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 21
                  }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    children: props.isVerified === 1 ? _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.PetcationVerified : _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.PetcationNotVerified
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined), props.hide_address === 1 ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "main-padding",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  className: "text-muted font-14 mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    children: props.location
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, undefined), " |", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    children: props.distance + "  " + _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Kmsfromyourcurrentlocation
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 48
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "d-flex justify-content-between",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "rate-details",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "fal",
                    "data-icon": "check-double",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 448 512",
                    className: "svg-inline--fa fa-check-double fa-w-14 fa-2x",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                      fill: "currentColor",
                      d: "M444.96 159l-12.16-11c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L131.77 428 31.42 329c-2.03-2.67-4.72-4-8.11-4s-6.08 1.33-8.11 4L3.04 340C1.01 342.67 0 345.67 0 349s1.01 6 3.04 8l120.62 119c2.69 2.67 5.57 4 8.62 4s5.92-1.33 8.62-4l304.07-300c2.03-2 3.04-4.67 3.04-8s-1.02-6.33-3.05-9zM127.17 284.03c2.65 2.65 5.48 3.97 8.47 3.97s5.82-1.32 8.47-3.97L365.01 63.8c1.99-2 2.99-4.65 2.99-7.96s-1-6.29-2.99-8.94l-11.96-10.93c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97L135.14 236.34l-72.25-72.03c-1.99-2.65-4.64-3.97-7.97-3.97s-5.98 1.32-7.97 3.97l-11.96 10.93C33 177.89 32 180.87 32 184.18s1 5.96 2.99 7.95l92.18 91.9z",
                      className: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                    className: "d-inline font-14",
                    children: ["\xA0", props.responseRate + "%" + _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.responserate]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "rate-details",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "far",
                    "data-icon": "clock",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    className: "svg-inline--fa fa-clock fa-w-16 fa-2x",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                      fill: "currentColor",
                      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
                      className: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                    className: "d-inline font-14",
                    children: ["\xA0Responds within ", props.responseWithin]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "rate-details",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "far",
                    "data-icon": "camera",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    className: "svg-inline--fa fa-camera fa-w-16 fa-2x",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                      fill: "currentColor",
                      d: "M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z",
                      className: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                    className: "d-inline font-14",
                    children: ["\xA0", props.jobCompletion, "% Jobs with pics"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "col-12 col-md-4 col-lg-4 col-xl-3 my-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "d-flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "contact-now instant-button",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: {
                  pathname: "/booking",
                  query: {
                    sitterId: props.id,
                    name: props.name,
                    service: props.serviceId
                  }
                },
                as: "/booking",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
                  className: "btn btn-primary",
                  children: "Contact now"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text-center availability",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                onClick: props.onAvailableClick,
                className: "font-14",
                children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Seeavailability
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "d-flex profile-share-icon",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                onClick: props.markUnmark,
                children: [props.isFavorite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                  viewBox: "0 0 512 512",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    fill: "#ffc107",
                    d: "M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 39
                }, undefined), !props.isFavorite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                    d: "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "profile-share-drop",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "dropdown",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    className: "dropdown-toggle",
                    href: "#",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                      "aria-hidden": "true",
                      focusable: "false",
                      "data-prefix": "fas",
                      "data-icon": "share",
                      role: "img",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512",
                      className: "svg-inline--fa fa-share fa-w-16 fa-2x",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                        fill: "currentColor",
                        d: "M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z",
                        className: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "dropdown-menu",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                      children: "Share this profile"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "py-3",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                        className: "dropdown-item",
                        href: "#",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                          src: "/images/social-img4.png"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 27
                        }, undefined), " via email"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                        className: "dropdown-item",
                        href: "#",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                          src: "/images/social-img3.png"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 200,
                          columnNumber: 27
                        }, undefined), " via whatsapp"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                        className: "dropdown-item",
                        href: "#",
                        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                          src: "/images/social-img2.png"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 205,
                          columnNumber: 27
                        }, undefined), " via line"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                        className: "dropdown-item",
                        href: "#",
                        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                          src: "/images/social-img1.png"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 210,
                          columnNumber: 27
                        }, undefined), " via messenger"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "col-xl-7",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "sitter-availability",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
              className: "mb-0 font-semibold",
              children: props.petTakenCare
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              className: "font-12 mb-0",
              children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Petstakencare
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "sitter-availability",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
              className: "mb-0 font-semibold",
              children: props.happyCustomers + "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              className: "font-12 mb-0",
              children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.HappyCustomers
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "sitter-availability",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
              className: "mb-0 font-semibold",
              children: props.rehireRate + "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              className: "font-12 mb-0",
              children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_1__.strings.Rehirerate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "col-xl-3 offset-xl-2 featured-details my-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "d-flex justify-content-end hotel-rating sitter-rating",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "rating-star",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "active",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "fas",
                "data-icon": "star",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 576 512",
                className: "svg-inline--fa fa-star fa-w-18 fa-2x",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
                  fill: "currentColor",
                  d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
                  className: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
              className: "font-semibold mb-0",
              children: [props.rating, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: "font-14 font-normal",
                children: "(" + props.review + " reviews)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitterProfileHeader);

/***/ }),

/***/ "./components/sitterProfile/SitterServices.tsx":
/*!*****************************************************!*\
  !*** ./components/sitterProfile/SitterServices.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SitterServices)
/* harmony export */ });
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\components\\sitterProfile\\SitterServices.tsx";


function SitterServices(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "bg-white main-background p-0 pb-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sitter-services",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "mb-0",
        children: [`${props.name}’s Service`, "s"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "sitter-services-details",
      children: props.service.map((v, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "row mb-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-12 col-md-6 col-lg-6 col-xl-8",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
              className: "font-semibold",
              children: v.service.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "mb-0 font-14",
              children: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "col-12 col-md-6 col-lg-6 col-xl-4 alignment",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
              className: "font-semibold",
              children: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "font-14 mb-0",
              children: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "read-more",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: "#",
          children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_0__.strings.SeeAdditionalServicesRates
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: "font-12",
          children: "Pick-up & drop-off, bathing / Grooming... "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
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

/***/ "./pages/sitter-profile/[id].tsx":
/*!***************************************!*\
  !*** ./pages/sitter-profile/[id].tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/Api */ "./api/Api.ts");
/* harmony import */ var _components_sitterProfile_ExtraInfoLocality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sitterProfile/ExtraInfoLocality */ "./components/sitterProfile/ExtraInfoLocality.tsx");
/* harmony import */ var _components_sitterProfile_GalleryView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sitterProfile/GalleryView */ "./components/sitterProfile/GalleryView.tsx");
/* harmony import */ var _components_sitterProfile_MyPets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sitterProfile/MyPets */ "./components/sitterProfile/MyPets.tsx");
/* harmony import */ var _components_sitterProfile_Reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/sitterProfile/Reviews */ "./components/sitterProfile/Reviews.tsx");
/* harmony import */ var _components_sitterProfile_SitterAvailability__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/sitterProfile/SitterAvailability */ "./components/sitterProfile/SitterAvailability.tsx");
/* harmony import */ var _components_sitterProfile_SitterProfileHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/sitterProfile/SitterProfileHeader */ "./components/sitterProfile/SitterProfileHeader.tsx");
/* harmony import */ var _components_sitterProfile_SitterServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/sitterProfile/SitterServices */ "./components/sitterProfile/SitterServices.tsx");
/* harmony import */ var _components_user_myProfile_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/user/myProfile/Map */ "./components/user/myProfile/Map.tsx");
/* harmony import */ var _public_lang_Strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/lang/Strings */ "./public/lang/Strings.js");
/* harmony import */ var _utils_Helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/Helper */ "./utils/Helper.tsx");
/* harmony import */ var _api_Constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../api/Constants */ "./api/Constants.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\xampp7_4\\htdocs\\petcation\\pages\\sitter-profile\\[id].tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















let api = new _api_Api__WEBPACK_IMPORTED_MODULE_1__.default();

class SitterProfile extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "myRef", void 0);

    this.state = {
      data: null,
      serviceId: ''
    };
    this.myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    this.handleBookmarkSitter = this.handleBookmarkSitter.bind(this);
    this.getSitterDetails = this.getSitterDetails.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: null
    });

    if (this.props.data) {
      this.setState({
        data: (0,_utils_Helper__WEBPACK_IMPORTED_MODULE_11__.deepClone)(this.props.data)
      });
    } // if(router){
    //   if(router.query) {
    //     this.setState({
    //       serviceId: String(router.query.serviceId)
    //     })
    //   }
    // }

  }

  handleBookmarkSitter() {
    api.markUnmarkSitter({
      sitter_id: this.state.data.id
    }).then(res => {
      if (res.data.status === 200) {
        if (this.state.data.is_favorite == 1) {
          alert(_public_lang_Strings__WEBPACK_IMPORTED_MODULE_10__.strings.unmarkSitter);
        } else {
          alert(_public_lang_Strings__WEBPACK_IMPORTED_MODULE_10__.strings.bookmarkSitter);
        }

        this.getSitterDetails(this.state.data.id);
      }
    }).catch(error => {
      alert(_public_lang_Strings__WEBPACK_IMPORTED_MODULE_10__.strings.errorUpdatingStatus);
    });
  }

  getSitterDetails(id) {
    api.getSingleSitter(id).then(res => {
      this.setState({
        data: res.data.response
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const {
      data
    } = this.state;
    const {
      query
    } = this.props.router;

    if (this.state.data) {
      var _data$preference$rehi;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "main-wrapper bottom mt-0",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "main-image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("img", {
              src: "/images/banner2.png",
              className: "img-fluid",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_sitterProfile_SitterProfileHeader__WEBPACK_IMPORTED_MODULE_7__.default, {
              location: data.address.address,
              hide_address: data.address.hide_address,
              name: data.firstname + " " + data.lastname,
              isVerified: data.is_verified,
              distance: data.address.distance,
              responseRate: data.preference.response_rate,
              responseWithin: data.preference.response_within,
              jobCompletion: data.preference.job_completion,
              isFavorite: data.is_favorite,
              rehireRate: (_data$preference$rehi = data.preference.rehire_rate) !== null && _data$preference$rehi !== void 0 ? _data$preference$rehi : 0,
              experience: data.preference.experience,
              petTakenCare: data.preference.pets_care,
              happyCustomers: data.preference.happy_customers,
              online: data.preference.online,
              rating: data.overall_rate,
              review: data.total_review,
              id: data.id,
              profile_pic: this.state.data.profile_picture,
              markUnmark: this.handleBookmarkSitter,
              serviceId: query.serviceId,
              onAvailableClick: () => {
                this.myRef.current.scrollIntoView();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "col-12 col-md-8 col-lg-8 col-xl-8",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_sitterProfile_GalleryView__WEBPACK_IMPORTED_MODULE_3__.default, {
                  images: this.state.data.images
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                  className: "bg-white main-background",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                    className: "font-semibold font-20 mb-3",
                    children: `I’m ${this.state.data.firstname}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                    children: ["description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("a", {
                      href: "#",
                      children: "\xA0\xA0Read more"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                  className: "bg-white main-background about-pet",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                    className: "font-semibold mb-3 font-20",
                    children: ` What ${this.state.data.firstname} would like to know about your pet`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    className: "booking-for",
                    children: this.state.data.questions.map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: [value.question, " "]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 49
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    className: "col-12 col-md-6 col-lg-6 col-xl-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                      className: "bg-white main-background about-place",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                        className: "font-semibold mb-3 font-20",
                        children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_10__.strings.Aboutplace
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        children: [this.state.data.address.live_in_house == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                          children: "Lives in a House"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 57
                        }, this) : null, this.state.data.address.non_smoking_household == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                          children: "Non-Smoking Household"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 173,
                          columnNumber: 57
                        }, this) : null, this.state.data.address.no_children_present == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                          children: "No Children Present"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 57
                        }, this) : null, this.state.data.address.fenced_yard == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                          children: "Has a Fenced Yard"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 179,
                          columnNumber: 57
                        }, this) : null, this.state.data.address.dog_other_pets == 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                          children: "Has pet."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 182,
                          columnNumber: 57
                        }, this) : null]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    className: "col-12 col-md-6 col-lg-6 col-xl-6",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                      className: "bg-white main-background about-place",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                        className: "font-semibold mb-3 font-20",
                        children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_10__.strings.AdditionalSkills
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        children: this.state.data.skills.map((value, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                          children: value.skill
                        }, index, false, {
                          fileName: _jsxFileName,
                          lineNumber: 194,
                          columnNumber: 57
                        }, this))
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 192,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 37
                }, this), this.state.data.pets.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_sitterProfile_MyPets__WEBPACK_IMPORTED_MODULE_4__.default, {
                  pets: this.state.data.pets
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 68
                }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_sitterProfile_Reviews__WEBPACK_IMPORTED_MODULE_5__.default, {
                  data: data
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "col-12 col-md-4 col-lg-4 col-xl-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_sitterProfile_SitterServices__WEBPACK_IMPORTED_MODULE_8__.default, {
                  name: this.state.data.firstname,
                  service: this.state.data.active_services
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                  ref: this.myRef,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_sitterProfile_SitterAvailability__WEBPACK_IMPORTED_MODULE_6__.default, {
                    services: this.state.data.active_services
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                  className: "bg-white main-background policy",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                    className: "font-semibold mb-3 font-20",
                    children: _public_lang_Strings__WEBPACK_IMPORTED_MODULE_10__.strings.BoardingCancellationpolicy
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 41
                  }, this), data.cancellation_policy == 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: "You\u2019ll get a full refund if you cancel before the day\u2019s service is delivered."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: "If you cancel after the stay or walk begins, you'll get a 50% refund for the first seven cancelled days and a 100% refund for any additional cancelled days."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true), data.cancellation_policy == 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: "You cancel within 48 hours of booking."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: "The reservation you\u2019re cancelling doesn\u2019t overlap with another reservation in your account When refund, any promo code (coupon) and points will be available to use immediately."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: "If you cancel after 12:00 noon 3 days before the stay begins, you'll get a 50% refund for the first seven cancelled days and a 100% refund for any additional cancelled days."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true), data.cancellation_policy == 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: "If you cancel after 12:00 noon one week before the stay begins, you'll get a 50% refund for the first seven cancelled days and a 100% refund for any additional day."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 241,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("li", {
                      children: "If you cancel after 12:00 noon one week before the stay begins, you'll get a 50% refund for the first seven cancelled days and a 100% refund for any additional day."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                  className: "bg-white main-background",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                    className: "font-semibold font-20 mb-3",
                    children: `${this.state.data.firstname} can host`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                      className: "d-flex justify-content-between mb-3",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "text-center host-details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("svg", {
                          "aria-hidden": "true",
                          focusable: "false",
                          "data-prefix": "fas",
                          "data-icon": "cat",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                          className: "svg-inline--fa fa-cat fa-w-16 fa-2x",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("path", {
                            fill: "currentColor",
                            d: "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 259,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h6", {
                          className: "mb-0 font-normal",
                          children: " Dogs"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 274,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "text-center  host-details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("svg", {
                          "aria-hidden": "true",
                          focusable: "false",
                          "data-prefix": "fas",
                          "data-icon": "cat",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                          className: "svg-inline--fa fa-cat fa-w-16 fa-2x",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("path", {
                            fill: "currentColor",
                            d: "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z",
                            className: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 287,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 277,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h6", {
                          className: "mb-0 font-normal",
                          children: "0-15Kg"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 293,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "text-center  host-details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("svg", {
                          "aria-hidden": "true",
                          focusable: "false",
                          "data-prefix": "fas",
                          "data-icon": "cat",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                          className: "svg-inline--fa fa-cat fa-w-16 fa-2x",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("path", {
                            fill: "currentColor",
                            d: "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z",
                            className: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 306,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 296,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h6", {
                          className: "mb-0 font-normal",
                          children: "16-40Kg"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 312,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 295,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                      className: "about-place",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                        className: "mb-2",
                        children: "Spayed and Neutered Dogs "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 316,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
                        children: "No Females in Heat"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 317,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 315,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("hr", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                      className: "d-flex justify-content-between",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "text-center host-details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("svg", {
                          "aria-hidden": "true",
                          focusable: "false",
                          "data-prefix": "fas",
                          "data-icon": "cat",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                          className: "svg-inline--fa fa-cat fa-w-16 fa-2x",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("path", {
                            fill: "currentColor",
                            d: "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z",
                            className: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 333,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 323,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h6", {
                          className: "mb-0 font-normal",
                          children: "Cats"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 339,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 322,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "text-center  host-details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("svg", {
                          "aria-hidden": "true",
                          focusable: "false",
                          "data-prefix": "fas",
                          "data-icon": "cat",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                          className: "svg-inline--fa fa-cat fa-w-16 fa-2x",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("path", {
                            fill: "currentColor",
                            d: "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z",
                            className: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 352,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 342,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h6", {
                          className: "mb-0 font-normal",
                          children: "0-15Kg"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 358,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 341,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        className: "text-center  host-details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("svg", {
                          "aria-hidden": "true",
                          focusable: "false",
                          "data-prefix": "fas",
                          "data-icon": "cat",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 512 512",
                          className: "svg-inline--fa fa-cat fa-w-16 fa-2x",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("path", {
                            fill: "currentColor",
                            d: "M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z",
                            className: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 371,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 361,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h6", {
                          className: "mb-0 font-normal",
                          children: "16-40Kg"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 377,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 360,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                  className: "bg-white main-background",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h4", {
                    className: "font-semibold mb-3",
                    children: "Location"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 383,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                    className: "mapouter mb-3",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_user_myProfile_Map__WEBPACK_IMPORTED_MODULE_9__.default, {
                      bootstrapURLKeys: {
                        key: _api_Constants__WEBPACK_IMPORTED_MODULE_12__.GOOGLE_PLACES_API,
                        language: "en"
                      },
                      draggable: false,
                      onChangeLatLng: e => {},
                      isMarkerShown: true,
                      latlng: {
                        lat: Number(this.state.data.address.map_latitude),
                        lng: Number(this.state.data.address.map_longitude)
                      },
                      googleMapURL: `https://maps.google.com/maps/api/js?key=${_api_Constants__WEBPACK_IMPORTED_MODULE_12__.GOOGLE_PLACES_API}&amp;libraries=geometry,drawing,places`,
                      loadingElement: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        style: {
                          height: `100%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 399,
                        columnNumber: 65
                      }, this),
                      containerElement: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        style: {
                          height: `400px`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 400,
                        columnNumber: 67
                      }, this),
                      mapElement: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                        style: {
                          height: `100%`
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 401,
                        columnNumber: 61
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 41
                  }, this), this.state.data.address && this.state.data.address.hide_address == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h5", {
                    className: "mb-2",
                    children: [this.state.data.address.house_number + " " + this.state.data.address.address, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 405,
                    columnNumber: 45
                  }, this) : ""]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_sitterProfile_ExtraInfoLocality__WEBPACK_IMPORTED_MODULE_2__.default, {
                  address: this.state.data.address
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 415,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this);
    } else {
      return null;
    }
  }

  static async getInitialProps({
    query: {
      id
    }
  }) {
    const api = new _api_Api__WEBPACK_IMPORTED_MODULE_1__.default();
    let data = null;
    await api.getSingleSitter(id).then(res => {
      data = res.data.response;
    }).catch(error => {
      console.log(error);
    });
    return {
      data: data
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_13__.withRouter)(SitterProfile));

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

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

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

/***/ "react-day-picker":
/*!***********************************!*\
  !*** external "react-day-picker" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-day-picker");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sitter-profile/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BldGNhdGlvbi8uL2FwaS9BcGkudHMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vYXBpL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9jb21wb25lbnRzL3NpdHRlclByb2ZpbGUvRXh0cmFJbmZvTG9jYWxpdHkudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL2NvbXBvbmVudHMvc2l0dGVyUHJvZmlsZS9HYWxsZXJ5Vmlldy50c3giLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vY29tcG9uZW50cy9zaXR0ZXJQcm9maWxlL015UGV0cy50c3giLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vY29tcG9uZW50cy9zaXR0ZXJQcm9maWxlL1Jldmlld3MudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL2NvbXBvbmVudHMvc2l0dGVyUHJvZmlsZS9TaXR0ZXJBdmFpbGFiaWxpdHkudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL2NvbXBvbmVudHMvc2l0dGVyUHJvZmlsZS9TaXR0ZXJQcm9maWxlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9jb21wb25lbnRzL3NpdHRlclByb2ZpbGUvU2l0dGVyU2VydmljZXMudHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL2NvbXBvbmVudHMvdXNlci9teVByb2ZpbGUvTWFwLnRzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL3BhZ2VzL3NpdHRlci1wcm9maWxlL1tpZF0udHN4Iiwid2VicGFjazovL3BldGNhdGlvbi8uL3B1YmxpYy9hcHBEYXRhL0FwcERhdGEudHMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vcHVibGljL2xhbmcvU3RyaW5ncy5qcyIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9wdWJsaWMvbGFuZy9lbmcuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vdXRpbHMvSGVscGVyLnRzeCIsIndlYnBhY2s6Ly9wZXRjYXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3BldGNhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LWRheS1waWNrZXJcIiIsIndlYnBhY2s6Ly9wZXRjYXRpb24vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbWFwc1wiIiwid2VicGFjazovL3BldGNhdGlvbi9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94XCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3QtbG9jYWxpemF0aW9uXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcGV0Y2F0aW9uL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIiwid2VicGFjazovL3BldGNhdGlvbi9pZ25vcmVkfEM6XFx4YW1wcDdfNFxcaHRkb2NzXFxwZXRjYXRpb25cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIFVfQUNUSVZFX0JPQVJESU5HLFxyXG4gIFVfQUNUSVZFX0RBWV9DQVJFLFxyXG4gIFVfQUNUSVZFX0RST1BfSU5fVklTSVRTLFxyXG4gIFVfQUNUSVZFX0dST09NSU5HLFxyXG4gIFVfQUNUSVZFX0hPVVNFX0NBTEwsXHJcbiAgVV9BQ1RJVkVfSE9VU0VfU0lUVElORyxcclxuICBVX0FDVElWRV9QRVRfV0FMS0lORyxcclxuICBVX0FERF9QRVQsXHJcbiAgVV9BRERfUVVFU1RJT04sXHJcbiAgVV9BRERfU0tJTEwsXHJcbiAgVV9BRERfU1BPVCxcclxuICBVX0FSUkFOR19NRUVUVVAsXHJcbiAgVV9CT0FSRElOR19ESVNDT1VOVFMsXHJcbiAgVV9CT0FSRElOR19QRVRfU0VSVklDRV9GRUUsXHJcbiAgVV9CT0FSRElOR19QUkVGRVJFTkNFLFxyXG4gIFVfQ0hBTkdFX1JFUVVFU1RfU1RBVFVTLFxyXG4gIFVfREVMRVRFX1BFVCxcclxuICBVX0RFTEVURV9RVUVTVElPTixcclxuICBVX0RFTEVURV9TUE9ULFxyXG4gIFVfRE9HX1dBTEtJTkdfRElTQ09VTlQsXHJcbiAgVV9ET0dfV0FMS0lOR19JTkZPLFxyXG4gIFVfRE9HX1dBTEtJTkdfU0VSVklDRV9GRUUsXHJcbiAgVV9ET0dfV0FMS0lOR19TRVJWSUNFX1BSRUZFUkVOQ0UsXHJcbiAgVV9EUk9QX0lOX1ZJU0lURVNfUFJFRkVSRU5DRSxcclxuICBVX0RST1BfSU5fVklTSVRTX0RJU0NPVU5UUyxcclxuICBVX0RST1BfSU5fVklTSVRTX1NFUlZJQ0VfRkVFLFxyXG4gIFVfRklMVEVSRURfQVZBSUxBQkxFX1NJVFRFUixcclxuICBVX0dFVF9BRERSRVNTLFxyXG4gIFVfR0VUX0FMTF9QRVRTLFxyXG4gIFVfR0VUX0FMTF9TUE9ULFxyXG4gIFVfR0VUX0FWQUlMQUJJTElUWSxcclxuICBVX0dFVF9BVkFJTEFCSUxJVFlfQllfREFURVMsXHJcbiAgVV9HRVRfQVZBSUxBQkxFX1NFUlZJQ0VTLFxyXG4gIFVfR0VUX0JBU0lDX0lORk8sXHJcbiAgVV9HRVRfQk9BUkRJTkdfSU5GTyxcclxuICBVX0dFVF9CT0FSRElOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0JSRUVEX1dJVEhfVFlQRSxcclxuICBVX0dFVF9DSVRJRVMsXHJcbiAgVV9HRVRfQ09VVFJJRVMsXHJcbiAgVV9HRVRfREFTSEJPQVJELFxyXG4gIFVfR0VUX0RPR19XQUxLSU5HX1BSRVZJRVcsXHJcbiAgVV9HRVRfRFJPUF9JTl9QUkVWSUVXLFxyXG4gIFVfR0VUX0RST1BfSU5fVklTSVRTX0lORk8sXHJcbiAgVV9HRVRfR1JPT01JTkdfSU5GTyxcclxuICBVX0dFVF9HUk9PTUlOR19QUkVWSUVXLFxyXG4gIFVfR0VUX0hPVVNFX0NBTExfSU5GTyxcclxuICBVX0dFVF9IT1VTRV9DQUxMX1BSRVZJRVcsXHJcbiAgVV9HRVRfSE9VU0VfQ0FMTF9TRVJWSUNFLFxyXG4gIFVfR0VUX0hPVVNFX1NJVFRJTkdfSU5GTyxcclxuICBVX0dFVF9IT1VTRV9TSVRUSU5HX1BSRVZJRVcsXHJcbiAgVV9HRVRfTEFOR0FVR0VTLFxyXG4gIFVfR0VUX1BBUktJTkcsXHJcbiAgVV9HRVRfUEFZTUVOVF9NRVRIT0RTLFxyXG4gIFVfR0VUX1BFVFMsXHJcbiAgVV9HRVRfUEVUX0RBWV9DQVJFX1BSRVZJRVcsXHJcbiAgVV9HRVRfUEVUX1NFUlZJQ0UsXHJcbiAgVV9HRVRfUEVUX1NQT1RTLFxyXG4gIFVfR0VUX1FVRVNUSU9OUyxcclxuICBVX0dFVF9SRVNFUlZBVElPTl9UWVBFUyxcclxuICBVX0dFVF9TRVJWSUNFUyxcclxuICBVX0dFVF9TSU5HTEVfU0lUVEVSLFxyXG4gIFVfR0VUX1NJTkdMRV9TUE9ULFxyXG4gIFVfR0VUX1NJVFRFUl9BVkFJTEFCSUxJVFksXHJcbiAgVV9HRVRfU0lUVEVSX1JFU0VSVkFUSU9OUyxcclxuICBVX0dFVF9TS0lMTFMsXHJcbiAgVV9HRVRfU01PS0lOR19DRVNTSU9OUyxcclxuICBVX0dFVF9USFJFQURfQk9PS0lORyxcclxuICBVX0dFVF9VU0VSX1JFU0VSVkFUSU9OUyxcclxuICBVX0dFVF9VU0VSX1NLSUxMUyxcclxuICBVX0dST09NSU5HX1NFUlZJQ0VfRElTQ09VTlQsXHJcbiAgVV9HUk9PTUlOR19TRVJWSUNFX0ZFRSxcclxuICBVX0dST09NSU5HX1NFUlZJQ0VfUFJFRkVSRU5DRSxcclxuICBVX0hPVVNFX0NBTExfRElTQ09VTlQsXHJcbiAgVV9IT1VTRV9DQUxMX1BSRUZFUkVOQ0UsXHJcbiAgVV9IT1VTRV9DQUxMX1NFUlZJQ0VfRkVFLFxyXG4gIFVfSE9VU0VfU0lUVElOR19ESVNDT1VOVFMsXHJcbiAgVV9IT1VTRV9TSVRUSU5HX1BSRUZFUkVOQ0UsXHJcbiAgVV9IT1VTRV9TSVRUSU5HX1NFUlZJQ0VfRkVFLFxyXG4gIFVfSU1BR0VfVVBMT0FELFxyXG4gIFVfUEVUX0FERElUSU9OQUxfUkVRVUVTVCxcclxuICBVX1BFVF9BTU9VTlRfQ0FMQ1VMQVRJT04sXHJcbiAgVV9QRVRfREFZX0NBUkVfRElTQ09VTlQsXHJcbiAgVV9QRVRfREFZX0NBUkVfSU5GTyxcclxuICBVX1BFVF9EQVlfQ0FSRV9QUkVGRVJFTkNFLFxyXG4gIFVfUEVUX0RBWV9DQVJFX1NFUlZJQ0VfRkVFUyxcclxuICBVX1BFVF9TRVJWSUNFX0FWQUlBTEFCSUxJVFksXHJcbiAgVV9QRVRfU1BPVF9DQVRFR09SSUVTLFxyXG4gIFVfUkFURV9TSVRURVIsXHJcbiAgVV9SRVFVRVNUX1NJVFRFUixcclxuICBVX1NBVkVfQUREUkVTUyxcclxuICBVX1NBVkVfQkFTSUNfSU5GTyxcclxuICBVX1NBVkVfTE9DQUxJVFksXHJcbiAgVV9TQVZFX1BPUlRGT0xJTyxcclxuICBVX1NFTkRfTUVTU0FHRSxcclxuICBVX1NFVF9BVkFJTEFCTEVfU0VSVklDRVMsXHJcbiAgVV9TSU5HTEVfUEVULFxyXG4gIFVfVVBEQVRFX1BFVCxcclxuICBVX1VQREFURV9TUE9ULFxyXG4gIFVfVVBMT0FEX1BST0ZJTEVfUElDVFVSRSxcclxuICBVX1VTRVJfTE9HSU4sXHJcbiAgVV9VU0VSX1JFR0lTVEVSLFxyXG4gIFVfQUREX0NBUkQsXHJcbiAgVV9HRVRfQ0FSRCxcclxuICBVX0RFTEVURV9DQVJELFxyXG4gIFVfQUREX0JBTktfQUNDT1VOVCxcclxuICBVX0dFVF9CQU5LX0FDQ09VTlQsXHJcbiAgVV9HRVRfQkFOS19ERVRBSUxTLFxyXG4gIFVfREVMRVRFX0JBTktfQUNDT1VOVCxcclxuICBVX0dFVF9QRVRfU1BPVF9ERVRBSUxTLFxyXG4gIEdPT0dMRV9QTEFDRVNfQkFTRV9VUkwsXHJcbiAgR09PR0xFX1BMQUNFU19BUEksXHJcbiAgVV9VUExPQURfRE9DVU1FTlRTLFxyXG4gIFVfR0VUX1RSQU5TUE9SVF9DSEFSR0VTLFxyXG4gIFVfQUREX1RSQU5TUE9SVF9DSEFSR0VTLFxyXG4gIFVfVVBEQVRFX1JFUVVFU1RfU1RBVFVTLFxyXG4gIFVfQk9PS01BUktfU0lUVEVSLFxyXG4gIFVfR0VUX1JFUVVFU1RfREVUQUlMLFxyXG4gIFVfQ09ORklSTV9QQVlNRU5ULFxyXG4gIFVfUEFZTUVOVF9ISVNUT1JZLFxyXG4gIFVfR0VUX0ZBVk9SSVRFX1NJVFRFUixcclxuICBVX0NIQU5HRV9NRUVUVVBfU1RBVFVTLFxyXG4gIFVfR0VUX01FRVRVUFMsXHJcbiAgVV9DSEFUX0FDVElPTixcclxuICBVX0dFVF9GQVZPUklURV9TUE9ULFxyXG4gIFVfTUFSS19VTk1BUktfU1BPVCxcclxuICBVX01BS0VfQ0FSRF9fREVGQVVMVCxcclxuICBVX01BS0VfQkFOS19ERUZBVUxULFxyXG4gIFVfUkVTRVRfUEFTU1dPUkQsXHJcbiAgVV9DSEFOR0VfUEFTU1dPUkQsXHJcbiAgVV9GT1JHT1RfUEFTU1dPUkQsXHJcbiAgVV9BUFBMWV9DT1VQT04sXHJcbiAgVV9SRU1PVkVfQ09VUE9OLCBVX0dFVF9DT1VQT04sXHJcbiAgVV9SRUFEX1NUQVRVUywgVV9SRVZJRVdfU1BPVCxcclxuICBVX0dFVF9ORVdTLFxyXG4gIFVfR0VUX0VWRU5ULFxyXG4gIFVfR0VUX1NJTkdMRV9ORVdTLFxyXG5cclxufSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcInVuaXZlcnNhbC1jb29raWVcIjtcclxuaW1wb3J0IG5leHRDb29raWUgZnJvbSBcIm5leHQtY29va2llc1wiO1xyXG5cclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cDovLzU0LjE1MS4xNjAuODMvcGV0ZWNhdGlvbi9wdWJsaWMvYXBpL1wiO1xyXG4vL2NvbnN0IGJhc2VVUkwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuMjYvcGV0ZWNhdGlvbi9wdWJsaWMvYXBpL1wiO1xyXG5cclxuY29uc3QgaGVhZGVycyA9ICh0b2tlbikgPT4ge1xyXG4gIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gIH07XHJcbiAgcmV0dXJuIGhlYWRlcnM7XHJcbn07XHJcblxyXG5jb25zdCByZXF1ZXN0ID0gKG1ldGhvZCwgcGF0aCwgYm9keSA9IG51bGwsIGN0eCA9IG51bGwpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfSR7cGF0aH1gO1xyXG4gIHZhciB0b2tlbiA9IG51bGw7XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcbiAgdG9rZW4gPSBjb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gIGlmICh0b2tlbiA9PSBudWxsICYmIGN0eCkge1xyXG4gICAgdG9rZW4gPSBuZXh0Q29va2llKGN0eCk7XHJcbiAgfVxyXG4gIHZhciBvcHRpb25zID0geyBtZXRob2QsIHVybCwgaGVhZGVyczogaGVhZGVycyh0b2tlbikgfTtcclxuXHJcbiAgaWYgKGJvZHkpIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHsgZGF0YTogYm9keSB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBheGlvcyhvcHRpb25zKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XHJcbiAgcmVnaXN0ZXJVc2VyKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VTRVJfUkVHSVNURVIsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Vc2VyKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VTRVJfTE9HSU4sIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRQYXNzd29yZChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRVNFVF9QQVNTV09SRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYXNzd29yZChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9DSEFOR0VfUEFTU1dPUkQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZm9yZ290UGFzc3dvcmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRk9SR09UX1BBU1NXT1JEICwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXNoYm9hcmQoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9EQVNIQk9BUkQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFzaWNJbmZvKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQkFTSUNfSU5GTyk7XHJcbiAgfVxyXG5cclxuICBnZXRBZGRyZXNzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQUREUkVTUyk7XHJcbiAgfVxyXG5cclxuICBzYXZlQmFzaWNJbmZvKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1NBVkVfQkFTSUNfSU5GTywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzYXZlQWRkcmVzcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TQVZFX0FERFJFU1MsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYWRkUXVlc3Rpb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUREX1FVRVNUSU9OLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVF1ZXN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJERUxFVEVcIiwgVV9ERUxFVEVfUVVFU1RJT04gKyB2YWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlc3Rpb25zKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUVVFU1RJT05TKTtcclxuICB9XHJcblxyXG4gIGdldFNraWxscygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1NLSUxMUyk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyU2tpbGxzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfVVNFUl9TS0lMTFMpO1xyXG4gIH1cclxuXHJcbiAgYWRkU2tpbGwoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUREX1NLSUxMLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHNhdmVMb2NhbGl0eUluZm8oZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfU0FWRV9MT0NBTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzYXZlUG9ydGZvbGlvKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1NBVkVfUE9SVEZPTElPLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8vQVZBSUxBQklMSVRZXHJcbiAgZ2V0QXZhaWxhYmxlU2VydmljZXMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9BVkFJTEFCTEVfU0VSVklDRVMpO1xyXG4gIH1cclxuXHJcbiAgc2V0QXZhaWxhYmxlU2VydmljZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9TRVRfQVZBSUxBQkxFX1NFUlZJQ0VTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJpbGl0eShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfQVZBSUxBQklMSVRZLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEF2YWlsYWJpbGl0eUJ5RGF0ZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfQVZBSUxBQklMSVRZX0JZX0RBVEVTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8vTVkgUEVUU1xyXG4gIGFkZFBldChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BRERfUEVULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEFsbFBldHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9BTExfUEVUUyk7XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVQZXRzKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX1NJTkdMRV9QRVQgKyBpZCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQZXQoZGF0YSwgaWQpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQREFURV9QRVQgKyBpZCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQZXQoaWQpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiREVMRVRFXCIsIFVfREVMRVRFX1BFVCArIGlkKTtcclxuICB9XHJcblxyXG4gIC8vU2VydmljZVxyXG4gIGdldFNlcnZpY2UoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TRVJWSUNFUyk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVCb2FyZGluZyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfQk9BUkRJTkcsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlRGF5Q2FyZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfREFZX0NBUkUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlSG91c2VTaXR0aW5nKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FDVElWRV9IT1VTRV9TSVRUSU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZURyb3BJblZpc2l0cyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfRFJPUF9JTl9WSVNJVFMsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlUGV0V2Fsa2luZyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfUEVUX1dBTEtJTkcsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZlR3Jvb21pbmcoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUNUSVZFX0dST09NSU5HLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFjdGl2ZUhvdXNlQ2FsbChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9BQ1RJVkVfSE9VU0VfQ0FMTCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0hvdXNlIGNhbGxcclxuICBnZXRIb3VzZUNhbGxJbmZvKHZhbCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfSE9VU0VfQ0FMTF9JTkZPICsgdmFsKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXNlQ2FsbFNlcnZpY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0hPVVNFX0NBTExfU0VSVklDRSwgZGF0YSk7XHJcbiAgfVxyXG4gIGhvdXNlQ2FsbFNlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfQ0FMTF9TRVJWSUNFX0ZFRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBob3VzZUNhbGxQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX0NBTExfUFJFRkVSRU5DRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBob3VzZUNhbGxEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9DQUxMX0RJU0NPVU5ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXNlQ2FsbFByZXZpZXcoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9IT1VTRV9DQUxMX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9Hcm9vbWluZ1xyXG4gIGdldEdyb29taW5nU2VydmljZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfUEVUX1NFUlZJQ0UsIGRhdGEpO1xyXG4gIH1cclxuICBnZXRHcm9vbWluZ0luZm8odmFsKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9HUk9PTUlOR19JTkZPICsgdmFsKTtcclxuICB9XHJcblxyXG4gIGdyb29taW5nU2VydmljZUZlZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HUk9PTUlOR19TRVJWSUNFX0ZFRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBncm9vbWluZ1NlcnZpY2VQcmVmZXJuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR1JPT01JTkdfU0VSVklDRV9QUkVGRVJFTkNFLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdyb29taW5nU2VydmljZURpc2NvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dST09NSU5HX1NFUlZJQ0VfRElTQ09VTlQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R3Jvb21pbmdQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfR1JPT01JTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL0JPQVJESU5HXHJcbiAgYm9hcmRpbmdTZXJ2aWNlRmVlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0JPQVJESU5HX1BFVF9TRVJWSUNFX0ZFRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBib2FyZGluZ1ByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQk9BUkRJTkdfUFJFRkVSRU5DRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBib2FyZGluZ0Rpc2NvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0JPQVJESU5HX0RJU0NPVU5UUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRCb2FyZGluZ0luZm8oaWQpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0JPQVJESU5HX0lORk8gKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRCb2FyZGluZ1ByZXZpZXcoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9CT0FSRElOR19QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vSE9VU0UgU0lUVElOR1xyXG4gIGdldEhvdXNlU2l0dGluZ0luZm8oaWQpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0hPVVNFX1NJVFRJTkdfSU5GTyArIGlkKTtcclxuICB9XHJcblxyXG4gIGhvdXNlU2l0dGluZ1NlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfSE9VU0VfU0lUVElOR19TRVJWSUNFX0ZFRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBob3VzZVNpdHRpbmdEaXNjb3VudChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9IT1VTRV9TSVRUSU5HX0RJU0NPVU5UUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBob3VzZVNpdHRpbmdQcmVmZXJlbmNlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0hPVVNFX1NJVFRJTkdfUFJFRkVSRU5DRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRIb3VzZVNpdHRpbmdQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfSE9VU0VfU0lUVElOR19QUkVWSUVXKTtcclxuICB9XHJcblxyXG4gIC8vRHJvcCBpbiB2aXNpdHNcclxuICBnZXREcm9wSW5WaXNpdHNJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZHJvcEluVmlzaXRzU2VydmljZUZlZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9EUk9QX0lOX1ZJU0lUU19TRVJWSUNFX0ZFRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBkcm9wSW5WaXNpdFByZWZlcmVuY2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRFJPUF9JTl9WSVNJVEVTX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZHJvcEluVmlzaXREaXNjb3VudHMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfRFJPUF9JTl9WSVNJVFNfRElTQ09VTlRTLCBkYXRhKTtcclxuICB9XHJcbiAgZ2V0RHJvcEluVmlzaXRzUHJldmlldygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0RST1BfSU5fUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL1BldCBkYXkgY2FyZVxyXG4gIGdldFBldERheUNhcmVJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX1BFVF9EQVlfQ0FSRV9JTkZPICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgcGV0RGF5Q2F0ZVNlcnZpY2VGZWUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEVUX0RBWV9DQVJFX1NFUlZJQ0VfRkVFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwZXREYXlDYXJlUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9QRVRfREFZX0NBUkVfUFJFRkVSRU5DRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwZXREYXlDYXJlRGlzY291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEVUX0RBWV9DQVJFX0RJU0NPVU5ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldFBldERheUNhcmVQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUEVUX0RBWV9DQVJFX1BSRVZJRVcpO1xyXG4gIH1cclxuXHJcbiAgLy9Eb2cgd2Fsa2luZ1xyXG4gIGdldERvZ1dhbGtpbmdJbmZvKGlkKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0RPR19XQUxLSU5HX0lORk8gKyBpZCk7XHJcbiAgfVxyXG5cclxuICBEb2dXYWxraW5nU2VydmljZUZlZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ET0dfV0FMS0lOR19TRVJWSUNFX0ZFRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBkb2dXYWxraW5nUHJlZmVyZW5jZShkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9ET0dfV0FMS0lOR19TRVJWSUNFX1BSRUZFUkVOQ0UsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZG9nV2Fsa2luZ0Rpc2NvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RPR19XQUxLSU5HX0RJU0NPVU5ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldERvZ1dhbGtpbmdQcmV2aWV3KCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRE9HX1dBTEtJTkdfUFJFVklFVyk7XHJcbiAgfVxyXG5cclxuICAvL1NJVFRFUiBSRVFVRVNUXHJcbiAgcGV0QWRkaXRpb25hbFNlcnZpY2VzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1BFVF9BRERJVElPTkFMX1JFUVVFU1QsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGV0QW1vdW50Q2FsY3VsYXRpb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEVUX0FNT1VOVF9DQUxDVUxBVElPTiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzaXR0ZXJSZXF1ZXN0KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1JFUVVFU1RfU0lUVEVSLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVJlcXVlc3RTdGF0dXMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQ0hBTkdFX1JFUVVFU1RfU1RBVFVTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHBldFNlcnZpY2VBdmFpbGFiaWxpdHkoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfUEVUX1NFUlZJQ0VfQVZBSUFMQUJJTElUWSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0RBU0hPQk9BUkRcclxuICBnZXRTaXR0ZXJSZXNlcnZldGlvbnMoZGF0YSwgcGFnZSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX1NJVFRFUl9SRVNFUlZBVElPTlMgKyBcIj9wYWdlPVwiICsgcGFnZSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyUmVzZXJ2YXRpb25zKGRhdGEsIHBhZ2UpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9VU0VSX1JFU0VSVkFUSU9OUyArIFwiP3BhZ2U9XCIgKyBwYWdlLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8vQ0hBVFxyXG4gIHNlbmRNZXNzYWdlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1NFTkRfTUVTU0FHRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGF0QWN0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NIQVRfQUNUSU9OLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldFRocmVhZEJvb2tpbmcodmFsKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9USFJFQURfQk9PS0lORyArIHZhbCk7XHJcbiAgfVxyXG5cclxuICBhcnJhbmdlTWVldHVwKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FSUkFOR19NRUVUVVAsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWVldHVwU3RhdHVzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0NIQU5HRV9NRUVUVVBfU1RBVFVTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldE1lZXR1cFJlcXVlc3QoaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfTUVFVFVQUyArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFRyYW5zcG9ydENoYXJnZVJlcXVlc3QoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9UUkFOU1BPUlRfQ0hBUkdFUyArIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYWRkVHJhbnNwb3J0Q2hhcmdlUmVxdWVzdChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9UUkFOU1BPUlRfQ0hBUkdFUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZXF1ZXN0U3RhdHVzKGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfVVBEQVRFX1JFUVVFU1RfU1RBVFVTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlYWRTdGF0dXMoZGF0YSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SRUFEX1NUQVRVUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL0NPTU1PTlxyXG4gIGdldENvdXRpcmVzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQ09VVFJJRVMpO1xyXG4gIH1cclxuICBnZXRDaXRpZXMoaWQpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NJVElFUyArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFBldHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9QRVRTKTtcclxuICB9XHJcblxyXG4gIGdldEJyZWVkV2l0aFR5cGUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0JSRUVEX1dJVEhfVFlQRSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0lNQUdFX1VQTE9BRCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJlZEF2aWFsYWJsZVNpdHRlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9GSUxURVJFRF9BVkFJTEFCTEVfU0lUVEVSLCBkYXRhKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRGYXZvcml0ZVNpdHRlcnMoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfR0VUX0ZBVk9SSVRFX1NJVFRFUixkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwbG9hZFByb2ZpbGVQaWN0dXJlKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQTE9BRF9QUk9GSUxFX1BJQ1RVUkUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkRG9jdW1lbnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfVVBMT0FEX0RPQ1VNRU5UUywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvL1Nwb3RzXHJcbiAgZ2V0UGV0U3BvdHNDYXRlZ29yeSgpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfUEVUX1NQT1RfQ0FURUdPUklFUyk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXRTcG90cyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9HRVRfUEVUX1NQT1RTLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIG1hcmtVbm1hcmtTcG90KGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfTUFSS19VTk1BUktfU1BPVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXRTcG90RGV0YWlscyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9QRVRfU1BPVF9ERVRBSUxTICsgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXltZW50TWV0aG9kcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1BBWU1FTlRfTUVUSE9EUyk7XHJcbiAgfVxyXG5cclxuICBnZXRSZXNlcnZhdGlvblR5cGVzKCkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfUkVTRVJWQVRJT05fVFlQRVMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U21va2luZ0Nlc3Npb24oKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9TTU9LSU5HX0NFU1NJT05TKTtcclxuICB9XHJcblxyXG4gIGdldFBhcmtpbmcoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9QQVJLSU5HKTtcclxuICB9XHJcblxyXG4gIGdldExhbmdhdWdlcygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0xBTkdBVUdFUyk7XHJcbiAgfVxyXG5cclxuICBhZGRTcG90KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9TUE9ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNwb3QoaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1VQREFURV9TUE9UICsgaWQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmF0ZVNpdHRlcihkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9SQVRFX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVTaXR0ZXIoaWQpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1NJTkdMRV9TSVRURVIgKyBpZCk7XHJcbiAgfVxyXG5cclxuICBtYXJrVW5tYXJrU2l0dGVyKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0JPT0tNQVJLX1NJVFRFUiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxTcG90cygpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0FMTF9TUE9UKTtcclxuICB9XHJcblxyXG4gIGdldEZhdm9yaXRlU3BvdHMoKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9GQVZPUklURV9TUE9UKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVNwb3QodmFsKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkRFTEVURVwiLCBVX0RFTEVURV9TUE9UICsgdmFsKTtcclxuICB9XHJcblxyXG4gIGdldFNpbmdsZVNwb3QoaWQpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1NJTkdMRV9TUE9UICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2l0dGVyQXZhaWxhYmlsaXR5KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0dFVF9TSVRURVJfQVZBSUxBQklMSVRZLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJhdGVSZXZpZXdTcG90KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX1JFVklFV19TUE9ULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8vUGF5bWVudCBhbmQgQmFuayBhY2NvdW50XHJcbiAgYWRkTmV3Q2FyZChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0FERF9DQVJELCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldEFsbENhcmQoKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX0NBUkQpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2FyZChkYXRhKXtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiUE9TVFwiLCBVX0RFTEVURV9DQVJELCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGFkZE5ld0JhbmtBY2NvdW50KGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQUREX0JBTktfQUNDT1VOVCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxCYW5rQWNjb3VudCgpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQkFOS19BQ0NPVU5UKTtcclxuICB9XHJcblxyXG4gIGdldEFsbEJhbmtBY2NvdW50RGV0YWlscygpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQkFOS19ERVRBSUxTKTtcclxuICB9XHJcblxyXG4gIG1hcmtDYXJkQXNEZWZhdWx0KGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfTUFLRV9DQVJEX19ERUZBVUxULCBkYXRhKTtcclxuICB9XHJcblxyXG4gIG1ha2VCYW5rQXNEZWZhdWx0KGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfTUFLRV9CQU5LX0RFRkFVTFQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQmFua0FjY291bnQoaWQpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9ERUxFVEVfQkFOS19BQ0NPVU5UICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlUmVxdWVzdERldGFpbChpZCl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX0dFVF9SRVFVRVNUX0RFVEFJTCArIGlkKTtcclxuICB9XHJcblxyXG4gIGNvbmZpcm1QYXltZW50KGlkLGRhdGEpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQ09ORklSTV9QQVlNRU5UICsgaWQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcGF5bWVudEhpc3RvcnkoZGF0YSwgcGFnZSl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIlBPU1RcIiwgVV9QQVlNRU5UX0hJU1RPUlkgKyBgP3BhZ2U9JHtwYWdlfWAsZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXR0ZWRBZGRyZXNzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBgJHtHT09HTEVfUExBQ0VTX0JBU0VfVVJMfS9kZXRhaWxzL2pzb24/cGxhY2VpZD0ke2lkfSZrZXk9JHtHT09HTEVfUExBQ0VTX0FQSX1gO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogYXBpVXJsLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgYXBwbHlDb3Vwb24oZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJQT1NUXCIsIFVfQVBQTFlfQ09VUE9OLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNvdXBvbihpZCl7XHJcbiAgICByZXR1cm4gcmVxdWVzdChcIkdFVFwiLCBVX1JFTU9WRV9DT1VQT04gKyBpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb3Vwb25zKHR5cGUpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfQ09VUE9OICsgdHlwZSApO1xyXG4gIH1cclxuICAvL05ld3NcclxuXHJcbiAgZ2V0TmV3cygpe1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfTkVXUyAgKTtcclxuICB9XHJcblxyXG4gIGdldEV2ZW50cygpXHJcbiAge1xyXG4gICAgcmV0dXJuIHJlcXVlc3QoXCJHRVRcIiwgVV9HRVRfRVZFTlQgICk7XHJcbiAgfVxyXG4gIGdldFNpbmdsZU5ld3MoKVxyXG4gIHtcclxuICAgIHJldHVybiByZXF1ZXN0KFwiR0VUXCIsIFVfR0VUX1NJTkdMRV9ORVdTKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgVV9VU0VSX1JFR0lTVEVSID0gXCJ1c2VyLXJlZ2lzdGVyXCI7XHJcbmV4cG9ydCBjb25zdCBVX1VTRVJfTE9HSU4gPSBcInVzZXItbG9naW5cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0RBU0hCT0FSRCA9IFwidXNlci9kYXNoYm9hcmRcIjtcclxuZXhwb3J0IGNvbnN0IFVfU0FWRV9CQVNJQ19JTkZPID0gXCJ1c2VyL3NhdmUtYmFzaWMtaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVV9TQVZFX0FERFJFU1MgPSBcInVzZXIvc2F2ZS1hZGRyZXNzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9CQVNJQ19JTkZPID0gXCJ1c2VyL2dldC1iYXNpYy1pbmZvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BRERSRVNTID0gXCJ1c2VyL2dldC1hZGRyZXNzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVV9GT1JHT1RfUEFTU1dPUkQgPSBcImZvcmdldC1wYXNzd29yZFwiO1xyXG5leHBvcnQgY29uc3QgVV9DSEFOR0VfUEFTU1dPUkQgPSBcInVzZXIvY2hhbmdlLXBhc3N3b3JkXCI7XHJcbmV4cG9ydCBjb25zdCBVX1JFU0VUX1BBU1NXT1JEID0gXCJyZXNldC1wYXNzd29yZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfQUREX1FVRVNUSU9OID0gXCJ1c2VyL2FkZC1xdWVzdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfREVMRVRFX1FVRVNUSU9OID0gXCJ1c2VyL2RlbGV0ZS1xdWVzdGlvbi9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1FVRVNUSU9OUyA9IFwidXNlci9nZXQtcXVlc3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVV9HRVRfU0tJTExTID0gXCJnZXQtc2tpbGxzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9VU0VSX1NLSUxMUyA9IFwidXNlci9nZXQtc2tpbGxzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0FERF9TS0lMTCA9IFwidXNlci9hZGQtc2tpbGxzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NBVkVfTE9DQUxJVFkgPSBcInVzZXIvc2F2ZS1sb2NhbGl0eS1pbmZvXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NBVkVfUE9SVEZPTElPID0gXCJ1c2VyL3NhdmUtcG9ydGZvbGlvLWltYWdlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdPT0dMRV9QTEFDRVNfQkFTRV9VUkwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZVwiO1xyXG5leHBvcnQgY29uc3QgR09PR0xFX1BMQUNFU19BUEkgPSBcIkFJemFTeUJobG01ZGZzd0NuM2VQTGJIZ2lWMUV1UTQ4azlTZFlDd1wiO1xyXG4vL2V4cG9ydCBjb25zdCBHT09HTEVfUExBQ0VTX0FQSSA9IFwiQUl6YVN5QUd6YkQtYld5U0NIaHZwS3RpXzQwSnN2dGkzVGxqeEI4XCI7XHJcblxyXG4vL01ZIFBFVFNcclxuZXhwb3J0IGNvbnN0IFVfQUREX1BFVCA9IFwidXNlci9hZGQtbmV3LXBldFwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQUxMX1BFVFMgPSBcInVzZXIvZ2V0LWFsbC1wZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1NJTkdMRV9QRVQgPSBcInVzZXIvZ2V0LXNpbmdsZS1wZXQvXCI7XHJcbmV4cG9ydCBjb25zdCBVX1VQREFURV9QRVQgPSBcInVzZXIvdXBkYXRlLXBldC1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9ERUxFVEVfUEVUID0gXCJ1c2VyL2RlbGV0ZS1wZXQtaW5mby9cIjtcclxuXHJcbi8vTVkgU2VydmljZVxyXG5leHBvcnQgY29uc3QgVV9HRVRfU0VSVklDRVMgPSBcImdldC1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQVZBSUxBQkxFX1NFUlZJQ0VTID0gXCJzaXR0ZXIvc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfU0VUX0FWQUlMQUJMRV9TRVJWSUNFUyA9IFwic2l0dGVyL3NlcnZpY2UtYXZhaWxhYmlsaXR5XCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9BVkFJTEFCSUxJVFkgPSBcInNpdHRlci9hdmFpbGFiaWxpdHktc2VydmljZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FWQUlMQUJJTElUWV9CWV9EQVRFUyA9IFwic2l0dGVyL2RhdGUtYXZhaWxhYmlsaXR5LXNlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0JPT0tNQVJLX1NJVFRFUiA9IFwibWFyay1hcy1mYXZvcml0ZVwiXHJcblxyXG4vL0JvYXJkaW5nXHJcbmV4cG9ydCBjb25zdCBVX0FDVElWRV9CT0FSRElORyA9IFwidXNlci9ib2FyZGluZy1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9CT0FSRElOR19QRVRfU0VSVklDRV9GRUUgPSBcInVzZXIvYm9hcmRpbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0JPQVJESU5HX1BSRUZFUkVOQ0UgPSBcInVzZXIvYm9hcmRpbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9CT0FSRElOR19ESVNDT1VOVFMgPSBcInVzZXIvYm9hcmRpbmctc2VydmljZS1kaXNjb3VudHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0JPQVJESU5HX0lORk8gPSBcInVzZXIvYm9hcmRpbmctc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQk9BUkRJTkdfUFJFVklFVyA9IFwidXNlci9hbGwtYm9hcmRpbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL0hvdXNlIHNpdHRpbmdcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0hPVVNFX1NJVFRJTkcgPSBcInVzZXIvaG91c2Utc2l0dGluZy1zZXJ2aWNlLW1hbmFnZVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfSE9VU0VfU0lUVElOR19JTkZPID0gXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9TSVRUSU5HX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX1NJVFRJTkdfRElTQ09VTlRTID0gXCJ1c2VyL2hvdXNlLXNpdHRpbmctc2VydmljZS1kaXNjb3VudHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfU0lUVElOR19QUkVGRVJFTkNFID1cclxuICBcInVzZXIvaG91c2Utc2l0dGluZy1zZXJ2aWNlLXByZWZlcmVuY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9IT1VTRV9TSVRUSU5HX1BSRVZJRVcgPVxyXG4gIFwidXNlci9hbGwtaG91c2Utc2l0dGluZy1zZXJ2aWNlLWluZm9cIjtcclxuXHJcbi8vREFZIGNhcmVcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0RBWV9DQVJFID0gXCJ1c2VyL2RheS1jYXJlLXNlcnZpY2UtbWFuYWdlXCI7XHJcblxyXG4vL0Ryb3AtaW4gdmlzaXRcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX0RST1BfSU5fVklTSVRTID0gXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0RST1BfSU5fVklTSVRTX0lORk8gPSBcInVzZXIvZHJvcC1pbi12aXNpdC1zZXJ2aWNlLWluZm8vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RST1BfSU5fVklTSVRTX1NFUlZJQ0VfRkVFID0gXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RST1BfSU5fVklTSVRFU19QUkVGRVJFTkNFID1cclxuICBcInVzZXIvZHJvcC1pbi12aXNpdC1zZXJ2aWNlLXByZWZlcmVuY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RST1BfSU5fVklTSVRTX0RJU0NPVU5UUyA9XHJcbiAgXCJ1c2VyL2Ryb3AtaW4tdmlzaXQtc2VydmljZS1kaXNjb3VudHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0RST1BfSU5fUFJFVklFVyA9IFwidXNlci9hbGwtZHJvcC1pbi12aXNpdC1zZXJ2aWNlLWluZm9cIjtcclxuXHJcbi8vUEVUIHdhbGtpbmcgdmlzaXRzXHJcblxyXG5leHBvcnQgY29uc3QgVV9QRVRfREFZX0NBUkVfSU5GTyA9IFwidXNlci9kYXktY2FyZS1zZXJ2aWNlLWluZm8vXCI7XHJcbmV4cG9ydCBjb25zdCBVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMgPSBcInVzZXIvZGF5LWNhcmUtc2VydmljZS1mZWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1BFVF9EQVlfQ0FSRV9QUkVGRVJFTkNFID0gXCJ1c2VyL2RheS1jYXJlLXNlcnZpY2UtcHJlZmVyZW5jZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUEVUX0RBWV9DQVJFX0RJU0NPVU5UID0gXCJ1c2VyL2RheS1jYXJlLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QRVRfREFZX0NBUkVfUFJFVklFVyA9IFwidXNlci9hbGwtZGF5LWNhcmUtc2VydmljZS1pbmZvXCI7XHJcblxyXG4vLyAgRG9nIHdhbGtpbmdcclxuZXhwb3J0IGNvbnN0IFVfQUNUSVZFX1BFVF9XQUxLSU5HID0gXCJ1c2VyL3dhbGtpbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfRE9HX1dBTEtJTkdfSU5GTyA9IFwidXNlci93YWxraW5nLXNlcnZpY2UtaW5mby9cIjtcclxuZXhwb3J0IGNvbnN0IFVfRE9HX1dBTEtJTkdfU0VSVklDRV9GRUUgPSBcInVzZXIvd2Fsa2luZy1zZXJ2aWNlLWZlZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfRE9HX1dBTEtJTkdfU0VSVklDRV9QUkVGRVJFTkNFID1cclxuICBcInVzZXIvd2Fsa2luZy1zZXJ2aWNlLXByZWZlcmVuY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RPR19XQUxLSU5HX0RJU0NPVU5UID0gXCJ1c2VyL3dhbGtpbmctc2VydmljZS1kaXNjb3VudHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0RPR19XQUxLSU5HX1BSRVZJRVcgPSBcInVzZXIvYWxsLXdhbGtpbmctc2VydmljZS1pbmZvXCI7XHJcblxyXG4vL1NpdHRlciBSZXF1ZXN0XHJcbmV4cG9ydCBjb25zdCBVX1BFVF9BRERJVElPTkFMX1JFUVVFU1QgPSBcInNpdHRlci9wZXQtYWRkaXRpb25hbC1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfQU1PVU5UX0NBTENVTEFUSU9OID0gXCJzaXR0ZXIvcGV0LWFtb3VudC1jYWxjdWxhdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfUkVRVUVTVF9TSVRURVIgPSBcInNpdHRlci9wZXQtcmVxdWVzdFwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUkVRVUVTVF9ERVRBSUwgPSBcInNpdHRlci9wZXQtcmVxdWVzdC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfQ0hBTkdFX1JFUVVFU1RfU1RBVFVTID0gXCJjaGFuZ2Utc2l0dGVyLXJlcXVlc3Qtc3RhdHVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX1BFVF9TRVJWSUNFX0FWQUlBTEFCSUxJVFkgPSBcInNpdHRlci9wZXQtc2VydmljZS1hdmFpbGFiaWxpdHlcIjtcclxuZXhwb3J0IGNvbnN0IFVfQ09ORklSTV9QQVlNRU5UID0gXCJzaXR0ZXIvY29uZmlybS1wYXltZW50L1wiO1xyXG5leHBvcnQgY29uc3QgVV9QQVlNRU5UX0hJU1RPUlkgPSBcInBheW1lbnQtaGlzdG9yeVwiO1xyXG5cclxuLy9HUk9PTUlOR1xyXG5leHBvcnQgY29uc3QgVV9BQ1RJVkVfR1JPT01JTkcgPSBcInVzZXIvZ3Jvb21pbmctc2VydmljZS1tYW5hZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0dST09NSU5HX0lORk8gPSBcInVzZXIvZ3Jvb21pbmctc2VydmljZS1pbmZvL1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX1NFUlZJQ0UgPSBcImdldC1ncm9vbWluZy1zZXJ2aWNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HUk9PTUlOR19TRVJWSUNFX0ZFRSA9IFwidXNlci9ncm9vbWluZy1zZXJ2aWNlLWZlZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR1JPT01JTkdfU0VSVklDRV9QUkVGRVJFTkNFID1cclxuICBcInVzZXIvZ3Jvb21pbmctc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5UID0gXCJ1c2VyL2dyb29taW5nLXNlcnZpY2UtZGlzY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9HUk9PTUlOR19QUkVWSUVXID0gXCJ1c2VyL2FsbC1ncm9vbWluZy1zZXJ2aWNlLWluZm9cIjtcclxuXHJcbi8vSG91c2UgY2FsbFxyXG5leHBvcnQgY29uc3QgVV9BQ1RJVkVfSE9VU0VfQ0FMTCA9IFwidXNlci9ob3VzZS1jYWxsLXNlcnZpY2UtbWFuYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9IT1VTRV9DQUxMX0lORk8gPSBcInVzZXIvaG91c2UtY2FsbC1zZXJ2aWNlLWluZm8vXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9IT1VTRV9DQUxMX1NFUlZJQ0UgPSBcImdldC1ob3VzZS1jYWxsLXNlcnZpY2VzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0hPVVNFX0NBTExfU0VSVklDRV9GRUUgPSBcInVzZXIvaG91c2UtY2FsbC1zZXJ2aWNlLWZlZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfSE9VU0VfQ0FMTF9QUkVGRVJFTkNFID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1wcmVmZXJlbmNlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9IT1VTRV9DQUxMX0RJU0NPVU5UID0gXCJ1c2VyL2hvdXNlLWNhbGwtc2VydmljZS1kaXNjb3VudHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0hPVVNFX0NBTExfUFJFVklFVyA9IFwidXNlci9hbGwtaG91c2UtY2FsbC1zZXJ2aWNlLWluZm9cIjtcclxuXHJcbi8vRGFzaGJvYXJkXHJcbmV4cG9ydCBjb25zdCBVX0dFVF9TSVRURVJfUkVTRVJWQVRJT05TID0gXCJnZXQtc2l0dGVyLXJlc2VydmF0aW9uc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfVVNFUl9SRVNFUlZBVElPTlMgPSBcImdldC11c2VyLXJlc2VydmF0aW9uc1wiO1xyXG5cclxuLy9DSEFUXHJcbmV4cG9ydCBjb25zdCBVX1NFTkRfTUVTU0FHRSA9IFwic2VuZC1tZXNzYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBVX1JFQURfU1RBVFVTID0gXCJ0aHJlYWQtcmVhZC1zdGF0dXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1RIUkVBRF9CT09LSU5HID0gXCJnZXQtdGhyZWFkLWJvb2tpbmdzL1wiO1xyXG5leHBvcnQgY29uc3QgVV9BUlJBTkdfTUVFVFVQID0gXCJjcmVhdGUtbWVldC11cFwiO1xyXG5leHBvcnQgY29uc3QgVV9DSEFOR0VfTUVFVFVQX1NUQVRVUyA9IFwibWVldC11cC1zdGF0dXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX01FRVRVUFMgPSBcImdldC1tZWV0LXVwL1wiO1xyXG5leHBvcnQgY29uc3QgVV9DSEFUX0FDVElPTiA9IFwiY2hhdC10aHJlYWQtc3RhdHVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVfR0VUX1RSQU5TUE9SVF9DSEFSR0VTID0gXCJzaXR0ZXIvcmVxdWVzdC10cmFuc3BvcnQtYW1vdW50L1wiO1xyXG5leHBvcnQgY29uc3QgVV9BRERfVFJBTlNQT1JUX0NIQVJHRVMgPSBcInNpdHRlci9yZXF1ZXN0LXRyYW5zcG9ydC1hbW91bnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCAgVV9VUERBVEVfUkVRVUVTVF9TVEFUVVMgPSBcImNoYW5nZS1zaXR0ZXItcmVxdWVzdC1zdGF0dXNcIjtcclxuXHJcbi8vUEVUIFNQT1RcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0FMTF9TUE9UID0gXCJzaXR0ZXIvc3BvdHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0ZBVk9SSVRFX1NQT1QgPSBcImdldC1mYXZvcml0ZS1zcG90c1wiO1xyXG5leHBvcnQgY29uc3QgVV9QRVRfU1BPVF9DQVRFR09SSUVTID0gXCJnZXQtc3BvdC1jYXRlZ29yaWVzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QRVRfU1BPVFMgPSBcImdldC1zcG90c1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUEVUX1NQT1RfREVUQUlMUyA9IFwic3BvdC9cIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BBWU1FTlRfTUVUSE9EUyA9IFwiZ2V0LXBheW1lbnQtbWV0aG9kc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfUkVTRVJWQVRJT05fVFlQRVMgPSBcImdldC1yZXNlcnZhdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1NNT0tJTkdfQ0VTU0lPTlMgPSBcImdldC1zbW9raW5nLWNlc3Npb25zXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9QQVJLSU5HID0gXCJnZXQtcGFya2luZ3NcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0xBTkdBVUdFUyA9IFwiZ2V0LWxhbmd1YWdlc1wiO1xyXG5leHBvcnQgY29uc3QgVV9BRERfU1BPVCA9IFwic2l0dGVyL2NyZWF0ZS1zcG90XCI7XHJcbmV4cG9ydCBjb25zdCBVX1VQREFURV9TUE9UID0gXCJzaXR0ZXIvdXBkYXRlLXNwb3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9TUE9UID0gXCJzaXR0ZXIvcmVtb3ZlLXNwb3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9TSU5HTEVfU1BPVCA9IFwic2l0dGVyL3Nwb3QvXCI7XHJcbmV4cG9ydCBjb25zdCBVX01BUktfVU5NQVJLX1NQT1QgPSBcIm1hcmstc3BvdC1hcy1mYXZvcml0ZVwiO1xyXG5leHBvcnQgY29uc3QgVV9SRVZJRVdfU1BPVCA9IFwic3BvdC1yZXZpZXctcmF0ZVwiO1xyXG5cclxuLy9DT01NT05cclxuZXhwb3J0IGNvbnN0IFVfUkFURV9TSVRURVIgPSBcInNpdHRlci1yZXZpZXctcmF0ZVwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQ0lUSUVTID0gXCJnZXQtY2l0aWVzL1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfQ09VVFJJRVMgPSBcImdldC1jb3VudHJpZXNcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX1BFVFMgPSBcImdldC1wZXRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9CUkVFRF9XSVRIX1RZUEUgPSBcImdldC1icmVlZHNcIjtcclxuZXhwb3J0IGNvbnN0IFVfSU1BR0VfVVBMT0FEID0gXCJ1cGxvYWRcIjtcclxuZXhwb3J0IGNvbnN0IFVfVVBMT0FEX1BST0ZJTEVfUElDVFVSRSA9IFwidXNlci9zYXZlLXByb2ZpbGUtcGljXCI7XHJcbmV4cG9ydCBjb25zdCBVX0ZJTFRFUkVEX0FWQUlMQUJMRV9TSVRURVIgPSBcImdldC1hdmFpbGFibGUtc2l0dGVyc1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lOR0xFX1NJVFRFUiA9IFwiZ2V0LXNpdHRlci1wcm9maWxlL1wiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfU0lUVEVSX0FWQUlMQUJJTElUWSA9IFwic2l0dGVyL3BldC1zZXJ2aWNlLWF2YWlsYWJpbGl0eVwiO1xyXG5leHBvcnQgY29uc3QgVV9VUExPQURfRE9DVU1FTlRTID0gXCJ1c2VyL3VwbG9hZC1kb2N1bWVudFwiO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfRkFWT1JJVEVfU0lUVEVSID0gXCJnZXQtZmF2b3JpdGUtc2l0dGVyc1wiO1xyXG5cclxuLy9QYXltZW50IENhcmQgJiBCYW5rIGRldGFpbHNcclxuZXhwb3J0IGNvbnN0IFVfQUREX0NBUkQgPSBcInVzZXIvYWRkLWNhcmRcIjtcclxuZXhwb3J0IGNvbnN0IFVfR0VUX0NBUkQgPSBcInVzZXIvZ2V0LWNhcmRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0RFTEVURV9DQVJEID0gXCJ1c2VyL2RlbGV0ZS1jYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgIFVfQUREX0JBTktfQUNDT1VOVCA9IFwidXNlci9jcmVhdGUtYmFuay1hY2NvdW50XCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9CQU5LX0FDQ09VTlQgPSBcInVzZXIvZ2V0LWFsbC1iYW5rLWFjY291bnRzXCI7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9CQU5LX0RFVEFJTFMgPSBcInVzZXIvZ2V0LWJhbmstZGV0YWlscy9cIjtcclxuZXhwb3J0IGNvbnN0IFVfREVMRVRFX0JBTktfQUNDT1VOVCA9IFwidXNlci9kZWxldGUtYmFuay1hY2NvdW50L1wiO1xyXG5leHBvcnQgY29uc3QgVV9NQUtFX0JBTktfREVGQVVMVCA9ICd1c2VyL2RlZmF1bHQtYmFuay1hY2NvdW50JztcclxuZXhwb3J0IGNvbnN0IFVfTUFLRV9DQVJEX19ERUZBVUxUID0gJ3VzZXIvbWFrZS1kZWZhdWx0LWNhcmQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVfQVBQTFlfQ09VUE9OID0gJ3NpdHRlci9hcHBseS1jb3Vwb24nO1xyXG5leHBvcnQgY29uc3QgVV9SRU1PVkVfQ09VUE9OID0gJ3NpdHRlci9yZW1vdmUtY291cG9uLyc7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9DT1VQT04gPSAndXNlci9nZXQtc2F2ZWQtY291cG9ucy8nO1xyXG5leHBvcnQgY29uc3QgVV9HRVRfTkVXUyA9ICdnZXQtbmV3cy1ldmVudHMvMSc7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9FVkVOVCA9ICdnZXQtbmV3cy1ldmVudHMvMic7XHJcbmV4cG9ydCBjb25zdCBVX0dFVF9TSU5HTEVfTkVXUz1cInNpbmdsZS1uZXdzLWV2ZW50LzJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWNjZXNzT3B0aW9ucyA9IHtcclxuICAgIHBvc2l0aW9uOiAnYm90dG9tLWNlbnRlcicsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ21pZG5pZ2h0Ymx1ZScsXHJcblxyXG4gICAgICAgIGNvbG9yOiAnbWlkbmlnaHRibHVlJyxcclxuICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgY2xvc2VTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnbGlnaHRjb3JhbCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGYWlsdXJlT3B0aW9ucyA9IHtcclxuICAgIHBvc2l0aW9uOiAnYm90dG9tLWNlbnRlcicsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ21pZG5pZ2h0Ymx1ZScsXHJcblxyXG4gICAgICAgIGNvbG9yOiAnbGlnaHRibHVlJyxcclxuICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgY2xvc2VTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnbGlnaHRjb3JhbCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIH0sXHJcbn1cclxuIiwiaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi8uLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4dHJhSW5mb0xvY2FsaXR5KHByb3BzOiBhbnkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYWluLWJhY2tncm91bmQgYWJvdXQtcGxhY2UgbG9jYWxpdHlcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMyBmb250LTIwXCI+XHJcbiAgICAgICAge3N0cmluZ3MuRXh0cmFpbmZvYWJvdXRsb2NhbGl0eX1cclxuICAgICAgPC9oNT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibG9jYWxpdHktZGVzY3JpYmVcIj57cHJvcHMuYWRkcmVzcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3Byb3BzLmFkZHJlc3MubGl2ZV9pbl9ob3VzZSA9PSAxID8gPHA+TGl2ZXMgaW4gYSBIb3VzZTwvcD4gOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy5hZGRyZXNzLm5vbl9zbW9raW5nX2hvdXNlaG9sZCA9PSAxID8gKFxyXG4gICAgICAgICAgPHA+Tm9uLVNtb2tpbmcgSG91c2Vob2xkPC9wPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy5hZGRyZXNzLm5vX2NoaWxkcmVuX3ByZXNlbnQgPT0gMSA/IChcclxuICAgICAgICAgIDxwPk5vIENoaWxkcmVuIFByZXNlbnQ8L3A+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLmFkZHJlc3MuZmVuY2VkX3lhcmQgPT0gMSA/IDxwPkhhcyBhIEZlbmNlZCBZYXJkPC9wPiA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLmFkZHJlc3MuZG9nX290aGVyX3BldHMgPT0gMSA/IDxwPkhhcyBwZXQuPC9wPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSXByb3BzIHtcclxuICBpbWFnZXM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVZpZXcocHJvcHM6IElwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG1haW4tYmFja2dyb3VuZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnYWxsZXJ5LXZpZXcxXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWltZzFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtaW1nXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlcy5sZW5ndGggPiAwID8gcHJvcHMuaW1hZ2VzWzBdLnBhdGggOiBudWxsfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LWltZzFcIj5cclxuICAgICAgICAgIHtwcm9wcy5pbWFnZXMuc2xpY2UoMSwgNCkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlMVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLnBhdGh9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIHtwcm9wcy5pbWFnZXMubGVuZ3RoID4gNCA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZTEgc3BvdC1pbWFnZSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlc1s0XS5wYXRofSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj4rPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH17XCIgXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElfU0lOR0xFX1NJVFRFUiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc2l0dGVyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBwZXQgfSBmcm9tIFwiLi4vLi4vcHVibGljL2FwcERhdGEvQXBwRGF0YVwiO1xyXG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uLy4uL3B1YmxpYy9sYW5nL1N0cmluZ3NcIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIHBldHM6IGFueTtcclxufVxyXG5cclxuY29uc3QgTXlQZXRzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYWluLWJhY2tncm91bmRcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMyBmb250LTIwXCI+e3N0cmluZ3MuTXlwZXRzfTwvaDU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge3Byb3BzLnBldHMgPyBwcm9wcy5wZXRzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlwZXQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5wZXRfaW1hZ2V9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWx1ZS5wZXRfbmFtZSArIFwiICBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5hZ2VfeWVhciArIFwiIHllYXJzIG9sZFwifVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dmFsdWUuYnJlZWQuYnJlZWQgKyBcIiAsIFwiICsgdmFsdWUud2VpZ2h0ICsgXCJrZ3NcIn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pOjxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LTEzIG1iLTAgZm9udC1pdGFsaWNcIj57c3RyaW5ncy5ub1BldHN9PC9wPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlQZXRzO1xyXG4iLCJpbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uLy4uL3B1YmxpYy9sYW5nL1N0cmluZ3NcIjtcclxuaW1wb3J0IFJldmlld09iamVjdCBmcm9tIFwiLi9SZXZpZXdPYmplY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgcmV2aWV3T2JqZWN0RGF0YSxcclxuICByZXZpZXdTdGF0ZURhdGEsXHJcbn0gZnJvbSBcIi4uLy4uL3B1YmxpYy9hcHBEYXRhL0FwcERhdGFcIjtcclxuXHJcbnR5cGUgUmV2aWV3U3RhdGUgPSB7XHJcbiAgcmF0aW5nOiBudW1iZXI7XHJcbiAgY2xlYW5saW5lc3M6IG51bWJlcjtcclxuICBhY2N1cmFjeTogbnVtYmVyO1xyXG4gIGNvbW11bmljYXRpb246IG51bWJlcjtcclxuICBsb2NhdGlvbjogbnVtYmVyO1xyXG4gIGNoZWNrSW46IG51bWJlcjtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgUmV2aWV3cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdwcm9wcy5kYXRhJywgcHJvcHMuZGF0YSlcclxuICBjb25zdCBbcmV2aWV3U3RhdGUsIHNldFJldmlld1N0YXRlXSA9IHVzZVN0YXRlPFJldmlld1N0YXRlPihyZXZpZXdTdGF0ZURhdGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYWluLWJhY2tncm91bmRcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC0yMCBtYi0zXCI+e3N0cmluZ3MuUmV2aWV3c308L2g1PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0zIGNvbC1sZy0zIGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmFsbC1yYXRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e3Jldmlld1N0YXRlLnJhdGluZ308L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LTE0IGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7c3RyaW5ncy5PdmVyYWxscmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbC1sZy05IGNvbC14bC05XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncy1zY29yZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlIHNjb3JlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuQ2xlYW5saW5lc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZXZpZXdTdGF0ZS5jbGVhbmxpbmVzcyArIFwiLyA1XCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyU2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7cmV2aWV3U3RhdGUuY2xlYW5saW5lc3MgKiAyMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCI1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUgc2NvcmUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaW5ncy5BY2N1cmFjeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jldmlld1N0YXRlLmFjY3VyYWN5ICsgXCIgLyA1XCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyU2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtyZXZpZXdTdGF0ZS5hY2N1cmFjeSAqIDIwfSVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZSBzY29yZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkNvbW11bmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZXZpZXdTdGF0ZS5jb21tdW5pY2F0aW9uICsgXCIvIDVcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJTbGlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtyZXZpZXdTdGF0ZS5jb21tdW5pY2F0aW9uICogMjB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmFuZ2VcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlIHNjb3JlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuTG9jYXRpb259e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmV2aWV3U3RhdGUubG9jYXRpb24gKyBcIi8gNVwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiclNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cmV2aWV3U3RhdGUubG9jYXRpb24gKiAyMH0lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCI1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZSBzY29yZTEgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmluZ3MuQ2hlY2tfaW59e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmV2aWV3U3RhdGUuY2hlY2tJbiArIFwiLyA1XCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyU2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtyZXZpZXdTdGF0ZS5jaGVja0luICogMjB9JWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmFuZ2VcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUgc2NvcmUxIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLlZhbHVlfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Jldmlld1N0YXRlLnZhbHVlICsgXCIgLyA1XCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlLWJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyU2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtyZXZpZXdTdGF0ZS52YWx1ZSAqIDIwfSVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXR0ZXItcmV2aWV3LXNlY3Rpb25cIj5cclxuICAgICAgICB7Lyo8UmV2aWV3T2JqZWN0IHJldmlldz17cmV2aWV3T2JqZWN0RGF0YX0gLz4qL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbW9yZVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj4rIFJlYWQgbW9yZSByZXZpZXdzPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi8uLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcbmltcG9ydCBEYXlQaWNrZXIsIHtEYXRlVXRpbHN9IGZyb20gXCJyZWFjdC1kYXktcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBhZGREYXlzLCBhZGRNb250aHMsIGZvcm1hdCwgaXNTYW1lRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4uLy4uL2FwaS9BcGlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElfUFJPUFMge1xyXG4gIHNlcnZpY2VzOiB7XHJcbiAgICBzZXJ2aWNlOiB7XHJcbiAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgIH07XHJcbiAgfVtdO1xyXG59XHJcbmNvbnN0IGFwaSA9IG5ldyBBUEkoKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gICAgIFNpdHRlckF2YWlsYWJsaXR5KHsgc2VydmljZXMgfTogSV9QUk9QUykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTwwIHwgMT4oMSk7XHJcbiAgY29uc3QgW2Rpc2FibGVkRGF0ZXMsIHNldERpc2FibGVkRGF0ZXNdID0gdXNlU3RhdGU8RGF0ZVtdPihbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkU2VydmljZSwgc2V0U2VsZWN0ZWRTZXJ2aWNlXSA9IHVzZVN0YXRlPGFueT4oc2VydmljZXNbMF0pO1xyXG5cclxuICBmdW5jdGlvbiBnZXREYXRlcyhzdGFydERhdGUsIHN0b3BEYXRlKSB7XHJcbiAgICB2YXIgZGF0ZUFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgY3VycmVudERhdGUgPSBzdGFydERhdGU7XHJcbiAgICB3aGlsZSAoY3VycmVudERhdGUgPD0gc3RvcERhdGUpIHtcclxuICAgICAgZGF0ZUFycmF5LnB1c2gobmV3IERhdGUoY3VycmVudERhdGUpKTtcclxuICAgICAgY3VycmVudERhdGUgPSBhZGREYXlzKGN1cnJlbnREYXRlLCAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlQXJyYXk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTZXJ2aWNlQXZhaWxhYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHNpdHRlcl9pZDogcm91dGVyLnF1ZXJ5LmlkLFxyXG4gICAgICBzZXJ2aWNlX2lkOiBzZWxlY3RlZFNlcnZpY2Uuc2VydmljZS5pZCxcclxuICAgICAgaXNfYXZhaWxhYmxlOiB0eXBlLFxyXG4gICAgfTtcclxuICAgIGFwaVxyXG4gICAgICAuZ2V0U2l0dGVyQXZhaWxhYmlsaXR5KGRhdGEpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgZGF0ZXMgPSByZXMuZGF0YS5yZXNwb25zZS5tYXAoXHJcbiAgICAgICAgICAodmFsdWUpID0+IG5ldyBEYXRlKHZhbHVlLlRpbWVzdGFtcCAqIDEwMDApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBnZXREYXRlcyhuZXcgRGF0ZSgpLCBhZGRNb250aHMobmV3IERhdGUoKSwgMikpO1xyXG4gICAgICAgIGxldCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgICAoZGF0ZSkgPT4gIWRhdGVzLmZpbmQoKGQpID0+IGlzU2FtZURheShkLCBkYXRlKSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZXREaXNhYmxlZERhdGVzKG5ld0RhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRTZXJ2aWNlQXZhaWxhYmlsaXR5KCk7XHJcbiAgfSwgW3NlbGVjdGVkU2VydmljZSwgdHlwZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYWluLWJhY2tncm91bmRcIj5cclxuICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMyBmb250LTIwXCI+e3N0cmluZ3MuQXZhaWxhYmlsaXR5fTwvaDU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICBvcHRpb25zPXtzZXJ2aWNlc31cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFNlcnZpY2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17c2V0U2VsZWN0ZWRTZXJ2aWNlfVxyXG4gICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5zZXJ2aWNlLm5hbWV9XHJcbiAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KG9wdGlvbikgPT4gb3B0aW9uLnNlcnZpY2UuaWQudG9TdHJpbmcoKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICA8RGF5UGlja2VyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJTZWxlY3RhYmxlXCJcclxuICAgICAgICAgIG51bWJlck9mTW9udGhzPXsxfVxyXG4gICAgICAgICAgZnJvbU1vbnRoPXtuZXcgRGF0ZSgpfVxyXG4gICAgICAgICAgdG9Nb250aD17YWRkTW9udGhzKG5ldyBEYXRlKCksIDIpfVxyXG4gICAgICAgICAgc2VsZWN0ZWREYXlzPXtudWxsfVxyXG4gICAgICAgICAgZGlzYWJsZWREYXlzPXtbXHJcbiAgICAgICAgICAgIC4uLmRpc2FibGVkRGF0ZXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiZWZvcmU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmFpbGFiaWxpdHktY2hlY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jaGVjayBtYi0xXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2l0dGVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0VHlwZSgxKX1cclxuICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09IDF9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAge3N0cmluZ3MuQXZhaWxhYmxlfVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jaGVjayBtYi0xXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFR5cGUoMCl9XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PSAwfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNpdHRlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAge3N0cmluZ3MuVW5hdmFpbGFibGV9XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC0xMiBtYi0wXCI+PC9oNj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi8uLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG50eXBlIElQcm9wcyA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBkaXN0YW5jZTogc3RyaW5nO1xyXG4gIHJlc3BvbnNlUmF0ZTogbnVtYmVyO1xyXG4gIG9ubGluZTogYm9vbGVhbjtcclxuICBwZXRUYWtlbkNhcmU6IG51bWJlcjtcclxuICBoYXBweUN1c3RvbWVyczogbnVtYmVyO1xyXG4gIHJlaGlyZVJhdGU6IG51bWJlcjtcclxuICBleHBlcmllbmNlOiBudW1iZXI7XHJcbiAgcmF0aW5nOiBudW1iZXI7XHJcbiAgcmV2aWV3OiBudW1iZXI7XHJcbiAgcHJvZmlsZV9waWM6IHN0cmluZztcclxuICByZXNwb25zZVdpdGhpbjogc3RyaW5nO1xyXG4gIGpvYkNvbXBsZXRpb246IG51bWJlcjtcclxuICBpc0Zhdm9yaXRlOiBudW1iZXI7XHJcbiAgaXNWZXJpZmllZDogbnVtYmVyO1xyXG4gIGhpZGVfYWRkcmVzczogbnVtYmVyO1xyXG4gIG1hcmtVbm1hcms/OiBhbnk7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBzZXJ2aWNlSWQ6IHN0cmluZztcclxuICBvbkF2YWlsYWJsZUNsaWNrOiBhbnk7XHJcbn07XHJcbmNvbnN0IFNpdHRlclByb2ZpbGVIZWFkZXI6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xyXG5jb25zb2xlLmxvZyhwcm9wcy5yZXZpZXcpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNpbmdsZS1zcG90IG1haW4tYmFja2dyb3VuZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMiBjb2wtbGctOCBjb2wteGwtOVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTMgY29sLWxnLTMgY29sLXhsLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wcm9maWxlX3BpY30gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbC1sZy05IGNvbC14bC0xMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMVwiPntwcm9wcy5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG8gbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uczIucG5nXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmlzVmVyaWZpZWQ9PT0xID8gc3RyaW5ncy5QZXRjYXRpb25WZXJpZmllZDpzdHJpbmdzLlBldGNhdGlvbk5vdFZlcmlmaWVkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5oaWRlX2FkZHJlc3M9PT0xID8gbnVsbDo8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGZvbnQtMTQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5sb2NhdGlvbn08L3NwYW4+IHx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGlzdGFuY2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdzLkttc2Zyb215b3VyY3VycmVudGxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiY2hlY2stZG91YmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2hlY2stZG91YmxlIGZhLXctMTQgZmEtMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ0NC45NiAxNTlsLTEyLjE2LTExYy0yLjAzLTIuNjctNC43Mi00LTguMTEtNHMtNi4wOCAxLjMzLTguMTEgNEwxMzEuNzcgNDI4IDMxLjQyIDMyOWMtMi4wMy0yLjY3LTQuNzItNC04LjExLTRzLTYuMDggMS4zMy04LjExIDRMMy4wNCAzNDBDMS4wMSAzNDIuNjcgMCAzNDUuNjcgMCAzNDlzMS4wMSA2IDMuMDQgOGwxMjAuNjIgMTE5YzIuNjkgMi42NyA1LjU3IDQgOC42MiA0czUuOTItMS4zMyA4LjYyLTRsMzA0LjA3LTMwMGMyLjAzLTIgMy4wNC00LjY3IDMuMDQtOHMtMS4wMi02LjMzLTMuMDUtOXpNMTI3LjE3IDI4NC4wM2MyLjY1IDIuNjUgNS40OCAzLjk3IDguNDcgMy45N3M1LjgyLTEuMzIgOC40Ny0zLjk3TDM2NS4wMSA2My44YzEuOTktMiAyLjk5LTQuNjUgMi45OS03Ljk2cy0xLTYuMjktMi45OS04Ljk0bC0xMS45Ni0xMC45M2MtMS45OS0yLjY1LTQuNjQtMy45Ny03Ljk3LTMuOTdzLTUuOTggMS4zMi03Ljk3IDMuOTdMMTM1LjE0IDIzNi4zNGwtNzIuMjUtNzIuMDNjLTEuOTktMi42NS00LjY0LTMuOTctNy45Ny0zLjk3cy01Ljk4IDEuMzItNy45NyAzLjk3bC0xMS45NiAxMC45M0MzMyAxNzcuODkgMzIgMTgwLjg3IDMyIDE4NC4xOHMxIDUuOTYgMi45OSA3Ljk1bDkyLjE4IDkxLjl6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUgZm9udC0xNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgJm5ic3A7e3Byb3BzLnJlc3BvbnNlUmF0ZSArIFwiJVwiICsgc3RyaW5ncy5yZXNwb25zZXJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiY2xvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jbG9jayBmYS13LTE2IGZhLTJ4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0wIDQ0OGMtMTEwLjUgMC0yMDAtODkuNS0yMDAtMjAwUzE0NS41IDU2IDI1NiA1NnMyMDAgODkuNSAyMDAgMjAwLTg5LjUgMjAwLTIwMCAyMDB6bTYxLjgtMTA0LjRsLTg0LjktNjEuN2MtMy4xLTIuMy00LjktNS45LTQuOS05LjdWMTE2YzAtNi42IDUuNC0xMiAxMi0xMmgzMmM2LjYgMCAxMiA1LjQgMTIgMTJ2MTQxLjdsNjYuOCA0OC42YzUuNCAzLjkgNi41IDExLjQgMi42IDE2LjhMMzM0LjYgMzQ5Yy0zLjkgNS4zLTExLjQgNi41LTE2LjggMi42elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImQtaW5saW5lIGZvbnQtMTRcIj4mbmJzcDtSZXNwb25kcyB3aXRoaW4ge3Byb3BzLnJlc3BvbnNlV2l0aGlufTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cImNhbWVyYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhbWVyYSBmYS13LTE2IGZhLTJ4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zNDIuNyAxNDRINDY0djI4OEg0OFYxNDRoMTIxLjNsMjQtNjRoMTI1LjVsMjMuOSA2NHpNMzI0LjMgMzJoLTEzMWMtMjAgMC0zNy45IDEyLjQtNDQuOSAzMS4xTDEzNiA5Nkg0OGMtMjYuNSAwLTQ4IDIxLjUtNDggNDh2Mjg4YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDQxNmMyNi41IDAgNDgtMjEuNSA0OC00OFYxNDRjMC0yNi41LTIxLjUtNDgtNDgtNDhoLTg4bC0xNC4zLTM4Yy01LjgtMTUuNy0yMC43LTI2LTM3LjQtMjZ6TTI1NiA0MDhjLTY2LjIgMC0xMjAtNTMuOC0xMjAtMTIwczUzLjgtMTIwIDEyMC0xMjAgMTIwIDUzLjggMTIwIDEyMC01My44IDEyMC0xMjAgMTIwem0wLTE5MmMtMzkuNyAwLTcyIDMyLjMtNzIgNzJzMzIuMyA3MiA3MiA3MiA3Mi0zMi4zIDcyLTcyLTMyLjMtNzItNzItNzJ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUgZm9udC0xNFwiPiZuYnNwO3twcm9wcy5qb2JDb21wbGV0aW9ufSUgSm9icyB3aXRoIHBpY3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTQgY29sLWxnLTQgY29sLXhsLTMgbXktYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Qtbm93IGluc3RhbnQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9ib29raW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXR0ZXJJZDogcHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2U6IHByb3BzLnNlcnZpY2VJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtcIi9ib29raW5nXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+Q29udGFjdCBub3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+SW5zdGFudCBCb29rPC9idXR0b24+Ki99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBhdmFpbGFiaWxpdHlcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLm9uQXZhaWxhYmxlQ2xpY2t9IGNsYXNzTmFtZT1cImZvbnQtMTRcIj5cclxuICAgICAgICAgICAgICAgICAge3N0cmluZ3MuU2VlYXZhaWxhYmlsaXR5fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggcHJvZmlsZS1zaGFyZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtwcm9wcy5tYXJrVW5tYXJrfT5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmlzRmF2b3JpdGUmJiA8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1wiI2ZmYzEwN1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTAgMTkwLjlWMTg1LjFDMCAxMTUuMiA1MC41MiA1NS41OCAxMTkuNCA0NC4xQzE2NC4xIDM2LjUxIDIxMS40IDUxLjM3IDI0NCA4NC4wMkwyNTYgOTZMMjY3LjEgODQuMDJDMzAwLjYgNTEuMzcgMzQ3IDM2LjUxIDM5Mi42IDQ0LjFDNDYxLjUgNTUuNTggNTEyIDExNS4yIDUxMiAxODUuMVYxOTAuOUM1MTIgMjMyLjQgNDk0LjggMjcyLjEgNDY0LjQgMzAwLjRMMjgzLjcgNDY5LjFDMjc2LjIgNDc2LjEgMjY2LjMgNDgwIDI1NiA0ODBDMjQ1LjcgNDgwIDIzNS44IDQ3Ni4xIDIyOC4zIDQ2OS4xTDQ3LjU5IDMwMC40QzE3LjIzIDI3Mi4xIC4wMDAzIDIzMi40IC4wMDAzIDE5MC45TDAgMTkwLjl6XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz59XHJcbiAgICAgICAgICAgICAgICAgIHshcHJvcHMuaXNGYXZvcml0ZSAmJiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0NCA4NEwyNTUuMSA5NkwyNjcuMSA4NC4wMkMzMDAuNiA1MS4zNyAzNDcgMzYuNTEgMzkyLjYgNDQuMUM0NjEuNSA1NS41OCA1MTIgMTE1LjIgNTEyIDE4NS4xVjE5MC45QzUxMiAyMzIuNCA0OTQuOCAyNzIuMSA0NjQuNCAzMDAuNEwyODMuNyA0NjkuMUMyNzYuMiA0NzYuMSAyNjYuMyA0ODAgMjU2IDQ4MEMyNDUuNyA0ODAgMjM1LjggNDc2LjEgMjI4LjMgNDY5LjFMNDcuNTkgMzAwLjRDMTcuMjMgMjcyLjEgMCAyMzIuNCAwIDE5MC45VjE4NS4xQzAgMTE1LjIgNTAuNTIgNTUuNTggMTE5LjQgNDQuMUMxNjQuMSAzNi41MSAyMTEuNCA1MS4zNyAyNDQgODRDMjQzLjEgODQgMjQ0IDg0LjAxIDI0NCA4NEwyNDQgODR6TTI1NS4xIDE2My45TDIxMC4xIDExNy4xQzE4OC40IDk2LjI4IDE1Ny42IDg2LjQgMTI3LjMgOTEuNDRDODEuNTUgOTkuMDcgNDggMTM4LjcgNDggMTg1LjFWMTkwLjlDNDggMjE5LjEgNTkuNzEgMjQ2LjEgODAuMzQgMjY1LjNMMjU2IDQyOS4zTDQzMS43IDI2NS4zQzQ1Mi4zIDI0Ni4xIDQ2NCAyMTkuMSA0NjQgMTkwLjlWMTg1LjFDNDY0IDEzOC43IDQzMC40IDk5LjA3IDM4NC43IDkxLjQ0QzM1NC40IDg2LjQgMzIzLjYgOTYuMjggMzAxLjkgMTE3LjFMMjU1LjEgMTYzLjl6XCIvPjwvc3ZnPn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1zaGFyZS1kcm9wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwic2hhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXNoYXJlIGZhLXctMTYgZmEtMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTAzLjY5MSAxODkuODM2TDMyNy42ODcgMzcuODUxQzMxMi4yODEgMjQuNTQ2IDI4OCAzNS4zNDcgMjg4IDU2LjAxNXY4MC4wNTNDMTI3LjM3MSAxMzcuOTA3IDAgMTcwLjEgMCAzMjIuMzI2YzAgNjEuNDQxIDM5LjU4MSAxMjIuMzA5IDgzLjMzMyAxNTQuMTMyIDEzLjY1MyA5LjkzMSAzMy4xMTEtMi41MzMgMjguMDc3LTE4LjYzMUM2Ni4wNjYgMzEyLjgxNCAxMzIuOTE3IDI3NC4zMTYgMjg4IDI3Mi4wODVWMzYwYzAgMjAuNyAyNC4zIDMxLjQ1MyAzOS42ODcgMTguMTY0bDE3Ni4wMDQtMTUyYzExLjA3MS05LjU2MiAxMS4wODYtMjYuNzUzIDAtMzYuMzI4elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlNoYXJlIHRoaXMgcHJvZmlsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29jaWFsLWltZzQucG5nXCIgLz4gdmlhIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zb2NpYWwtaW1nMy5wbmdcIiAvPiB2aWEgd2hhdHNhcHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zb2NpYWwtaW1nMi5wbmdcIiAvPiB2aWEgbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NvY2lhbC1pbWcxLnBuZ1wiIC8+IHZpYSBtZXNzZW5nZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC03XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInNpdHRlci1hdmFpbGFiaWxpdHlcIj4qL31cclxuICAgICAgICAgICAgey8qICA8c3ZnKi99XHJcbiAgICAgICAgICAgIHsvKiAgICBhcmlhLWhpZGRlbj1cInRydWVcIiovfVxyXG4gICAgICAgICAgICB7LyogICAgZm9jdXNhYmxlPVwiZmFsc2VcIiovfVxyXG4gICAgICAgICAgICB7LyogICAgZGF0YS1wcmVmaXg9XCJmYXJcIiovfVxyXG4gICAgICAgICAgICB7LyogICAgZGF0YS1pY29uPVwiY2xvY2tcIiovfVxyXG4gICAgICAgICAgICB7LyogICAgcm9sZT1cImltZ1wiKi99XHJcbiAgICAgICAgICAgIHsvKiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIqL31cclxuICAgICAgICAgICAgey8qICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiKi99XHJcbiAgICAgICAgICAgIHsvKiAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jbG9jayBmYS13LTE2IGZhLTJ4XCIqL31cclxuICAgICAgICAgICAgey8qICA+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgICA8cGF0aCovfVxyXG4gICAgICAgICAgICB7LyogICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIqL31cclxuICAgICAgICAgICAgey8qICAgICAgZD1cIk0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0wIDQ0OGMtMTEwLjUgMC0yMDAtODkuNS0yMDAtMjAwUzE0NS41IDU2IDI1NiA1NnMyMDAgODkuNSAyMDAgMjAwLTg5LjUgMjAwLTIwMCAyMDB6bTYxLjgtMTA0LjRsLTg0LjktNjEuN2MtMy4xLTIuMy00LjktNS45LTQuOS05LjdWMTE2YzAtNi42IDUuNC0xMiAxMi0xMmgzMmM2LjYgMCAxMiA1LjQgMTIgMTJ2MTQxLjdsNjYuOCA0OC42YzUuNCAzLjkgNi41IDExLjQgMi42IDE2LjhMMzM0LjYgMzQ5Yy0zLjkgNS4zLTExLjQgNi41LTE2LjggMi42elwiKi99XHJcbiAgICAgICAgICAgIHsvKiAgICAgIGNsYXNzTmFtZT1cIlwiKi99XHJcbiAgICAgICAgICAgIHsvKiAgICA+PC9wYXRoPiovfVxyXG4gICAgICAgICAgICB7LyogIDwvc3ZnPiovfVxyXG4gICAgICAgICAgICB7LyogIDxwIGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMFwiPntzdHJpbmdzLk9ubGluZW5vd308L3A+Ki99XHJcbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdHRlci1hdmFpbGFiaWxpdHlcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMCBmb250LXNlbWlib2xkXCI+e3Byb3BzLnBldFRha2VuQ2FyZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMFwiPntzdHJpbmdzLlBldHN0YWtlbmNhcmV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXR0ZXItYXZhaWxhYmlsaXR5XCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmhhcHB5Q3VzdG9tZXJzICsgXCIlXCJ9XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LTEyIG1iLTBcIj57c3RyaW5ncy5IYXBweUN1c3RvbWVyc308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdHRlci1hdmFpbGFiaWxpdHlcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMCBmb250LXNlbWlib2xkXCI+e3Byb3BzLnJlaGlyZVJhdGUgKyBcIiVcIn08L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMFwiPntzdHJpbmdzLlJlaGlyZXJhdGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJzaXR0ZXItYXZhaWxhYmlsaXR5XCI+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgPGgzIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zZW1pYm9sZFwiPntwcm9wcy5leHBlcmllbmNlICsgXCJ5cnNcIn08L2gzPiovfVxyXG4gICAgICAgICAgICB7LyogIDxwIGNsYXNzTmFtZT1cImZvbnQtMTIgbWItMFwiPntzdHJpbmdzLkV4cGVyaWVuY2V9PC9wPiovfVxyXG4gICAgICAgICAgICB7Lyo8L2Rpdj4qL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgb2Zmc2V0LXhsLTIgZmVhdHVyZWQtZGV0YWlscyBteS1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGhvdGVsLXJhdGluZyBzaXR0ZXItcmF0aW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLXN0YXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJhY3RpdmVcIn0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJzdGFyXCJcclxuICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1zdGFyIGZhLXctMTggZmEtMnhcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjU5LjMgMTcuOEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNkwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDB6XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5yYXRpbmd9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC0xNCBmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIoXCIgKyBwcm9wcy5yZXZpZXcgKyBcIiByZXZpZXdzKVwifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpdHRlclByb2ZpbGVIZWFkZXI7XHJcbiIsImltcG9ydCB7IHNpdHRlclNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3B1YmxpYy9hcHBEYXRhL0FwcERhdGFcIjtcclxuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi8uLi9wdWJsaWMvbGFuZy9TdHJpbmdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaXR0ZXJTZXJ2aWNlcyhwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbWFpbi1iYWNrZ3JvdW5kIHAtMCBwYi0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0dGVyLXNlcnZpY2VzXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj57YCR7cHJvcHMubmFtZX3igJlzIFNlcnZpY2VgfXM8L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXR0ZXItc2VydmljZXMtZGV0YWlsc1wiPlxyXG4gICAgICAgIHtwcm9wcy5zZXJ2aWNlLm1hcCgodixpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC04XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt2LnNlcnZpY2UubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LTE0XCI+e1wiXCJ9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC00IGFsaWdubWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57XCJcIn08L2g1PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0xNCBtYi0wXCI+e1wiXCJ9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLW1vcmVcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3N0cmluZ3MuU2VlQWRkaXRpb25hbFNlcnZpY2VzUmF0ZXN9PC9hPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0xMlwiPlBpY2stdXAgJiBkcm9wLW9mZiwgYmF0aGluZyAvIEdyb29taW5nLi4uIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgd2l0aFNjcmlwdGpzLFxyXG4gIHdpdGhHb29nbGVNYXAsXHJcbiAgR29vZ2xlTWFwLFxyXG4gIE1hcmtlcixcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuaW1wb3J0IFJlYWN0ICwgeyB1c2VTdGF0ZSAgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcImRvbS1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge0lfU0VBUkNIX1NJVFRFUn0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9zZWFyY2hTaXR0ZXIuaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCB7XHJcbiAgU3RhbmRhbG9uZVNlYXJjaEJveCxcclxufSA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9wbGFjZXMvU3RhbmRhbG9uZVNlYXJjaEJveFwiKTtcclxuaW50ZXJmYWNlIElfUFJPUFMge1xyXG4gICAgcHJvcHM6IElfU0VBUkNIX1NJVFRFUjtcclxuICAgIHNlcnZpY2VJZDogYW55O1xyXG4gICAgZ2V0U2l0dGVyOiBhbnk7XHJcbiAgICBwZXRUeXBlOiBhbnk7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgTXlNYXBDb21wb25lbnQgPSB3aXRoU2NyaXB0anMoXHJcbiAgd2l0aEdvb2dsZU1hcCgocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgbGV0IGxhdGxvbmcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb3BzLmxhdGxuZyA/IHByb3BzLmxhdGxuZy5sZW5ndGggPyBwcm9wcy5sYXRsbmdbMF0gOiBwcm9wcy5sYXRsbmc6IHsgbGF0OiAtMzQuMzk3LCBsbmc6IDE1MC42NDQgfSkpO1xyXG4gICAgY29uc3QgW3Nob3dJbmZvICwgc2V0U2hvd0luZm9dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAgIGNvbnN0IFtpbmZvICwgc2V0SW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXgpID0+e1xyXG4gICAgICAgbGV0IHBhdGggPSB7IHBhdGhuYW1lOiBcIi9zaXR0ZXItcHJvZmlsZS9cIiArIHByb3BzLmRhdGFbaW5kZXhdLmlkLCBxdWVyeToge3NlcnZpY2VJZDogcHJvcHMuc2VydmljZUlkfSAgfVxyXG4gICAgICAgcm91dGVyLnB1c2gocGF0aClcclxuICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hvd0luZm8odHJ1ZSlcclxuICAgICAgICBzZXRJbmZvKHByb3BzLmRhdGFbaW5kZXhdLmZpcnN0bmFtZStwcm9wcy5kYXRhW2luZGV4XS5sYXN0bmFtZSlcclxuXHJcbiAgICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRXhpdCA9ICgpID0+e1xyXG4gICAgICAgIHNldFNob3dJbmZvKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxNX1cclxuICAgICAgICB6b29tPXsxNX1cclxuICAgICAgICBjZW50ZXI9e2xhdGxvbmd9XHJcbiAgICAgICAgb25DbGljaz17cHJvcHMub25DaGFuZ2VMYXRMbmd9XHJcbiAgICAgID5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3Byb3BzLmxhdGxuZyAmJiBwcm9wcy5sYXRsbmcubGVuZ3RoID8gcHJvcHMubGF0bG5nLm1hcCgodmFsLCBpbmRleCk9PlxyXG4gICAgICAgICAgICAgICAgICA8TWFya2VyXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBvbkRyYWdFbmQ9e3Byb3BzLm9uQ2hhbmdlTGF0TG5nfVxyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbj17Mn1cclxuICAgICAgICAgICAgICBkcmFnZ2FibGU9e3Byb3BzLmRyYWdnYWJsZX1cclxuICAgICAgICAgICAgICBwb3NpdGlvbj17dmFsfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSk9PmhhbmRsZU1vdXNlT3ZlcihpbmRleCl9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2VFeGl0fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+e2hhbmRsZUNsaWNrKGluZGV4KX19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk6PE1hcmtlclxyXG4gICAgICAgICAgICAgIG9uRHJhZ0VuZD17cHJvcHMub25DaGFuZ2VMYXRMbmd9XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uPXsyfVxyXG4gICAgICAgICAgICAgIGRyYWdnYWJsZT17cHJvcHMuZHJhZ2dhYmxlfVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtsYXRsb25nfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dJbmZvICYmIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IGRvdHRlZCBibGFja1wifX0+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3dpZHRoOiBcIjEyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDpcIi0zMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6XCIzMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDBcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IFwiMVwifX0+IHtpbmZvfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0dvb2dsZU1hcD5cclxuICAgICk7XHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TWFwQ29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4uLy4uL2FwaS9BcGlcIjtcclxuaW1wb3J0IEV4dHJhSW5mb0xvY2FsaXR5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpdHRlclByb2ZpbGUvRXh0cmFJbmZvTG9jYWxpdHlcIjtcclxuaW1wb3J0IEdhbGxlcnlWaWV3IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpdHRlclByb2ZpbGUvR2FsbGVyeVZpZXdcIjtcclxuaW1wb3J0IE15UGV0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaXR0ZXJQcm9maWxlL015UGV0c1wiO1xyXG5pbXBvcnQgUmV2aWV3cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaXR0ZXJQcm9maWxlL1Jldmlld3NcIjtcclxuaW1wb3J0IFNpdHRlckF2YWlsYWJsaXR5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpdHRlclByb2ZpbGUvU2l0dGVyQXZhaWxhYmlsaXR5XCI7XHJcbmltcG9ydCBTaXR0ZXJQcm9maWxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpdHRlclByb2ZpbGUvU2l0dGVyUHJvZmlsZUhlYWRlclwiO1xyXG5pbXBvcnQgU2l0dGVyU2VydmljZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2l0dGVyUHJvZmlsZS9TaXR0ZXJTZXJ2aWNlc1wiO1xyXG5pbXBvcnQgTXlNYXBDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlci9teVByb2ZpbGUvTWFwXCI7XHJcbmltcG9ydCB7SV9TSU5HTEVfU0lUVEVSfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NpdHRlci5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtzdHJpbmdzfSBmcm9tIFwiLi4vLi4vcHVibGljL2xhbmcvU3RyaW5nc1wiO1xyXG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSBcIi4uLy4uL3V0aWxzL0hlbHBlclwiO1xyXG5pbXBvcnQge0dPT0dMRV9QTEFDRVNfQVBJfSBmcm9tIFwiLi4vLi4vYXBpL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBJcHJvcHMge1xyXG4gICAgZGF0YTogSV9TSU5HTEVfU0lUVEVSO1xyXG4gICAgb3BlblNuYWNrYmFyOiBhbnksXHJcbiAgICByb3V0ZXI6IGFueSxcclxuICAgIG15UmVmOiBhbnksXHJcbn1cclxuXHJcbmludGVyZmFjZSBJc3RhdGUge1xyXG4gICAgZGF0YTogSV9TSU5HTEVfU0lUVEVSO1xyXG4gICAgc2VydmljZUlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmxldCBhcGkgPSBuZXcgQVBJKCk7XHJcblxyXG5cclxuY2xhc3MgU2l0dGVyUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJcHJvcHMsIElzdGF0ZT4ge1xyXG4gICAgcHJpdmF0ZSBteVJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSXByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIHNlcnZpY2VJZDogJydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm15UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQm9va21hcmtTaXR0ZXIgPSB0aGlzLmhhbmRsZUJvb2ttYXJrU2l0dGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRTaXR0ZXJEZXRhaWxzID0gdGhpcy5nZXRTaXR0ZXJEZXRhaWxzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkZWVwQ2xvbmUodGhpcy5wcm9wcy5kYXRhKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZihyb3V0ZXIpe1xyXG4gICAgICAgIC8vICAgaWYocm91dGVyLnF1ZXJ5KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgIHNlcnZpY2VJZDogU3RyaW5nKHJvdXRlci5xdWVyeS5zZXJ2aWNlSWQpXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCb29rbWFya1NpdHRlcigpIHtcclxuICAgICAgICBhcGkubWFya1VubWFya1NpdHRlcih7c2l0dGVyX2lkOiB0aGlzLnN0YXRlLmRhdGEuaWR9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRhLmlzX2Zhdm9yaXRlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChzdHJpbmdzLnVubWFya1NpdHRlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGVydChzdHJpbmdzLmJvb2ttYXJrU2l0dGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l0dGVyRGV0YWlscyh0aGlzLnN0YXRlLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHN0cmluZ3MuZXJyb3JVcGRhdGluZ1N0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaXR0ZXJEZXRhaWxzKGlkKSB7XHJcbiAgICAgICAgYXBpXHJcbiAgICAgICAgICAgIC5nZXRTaW5nbGVTaXR0ZXIoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlcy5kYXRhLnJlc3BvbnNlfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7cXVlcnl9ID0gdGhpcy5wcm9wcy5yb3V0ZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXdyYXBwZXIgYm90dG9tIG10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYmFubmVyMi5wbmdcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpdHRlclByb2ZpbGVIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17ZGF0YS5hZGRyZXNzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hZGRyZXNzPXtkYXRhLmFkZHJlc3MuaGlkZV9hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0bmFtZSArIFwiIFwiICsgZGF0YS5sYXN0bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZlcmlmaWVkPXtkYXRhLmlzX3ZlcmlmaWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlPXtkYXRhLmFkZHJlc3MuZGlzdGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VSYXRlPXtkYXRhLnByZWZlcmVuY2UucmVzcG9uc2VfcmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVdpdGhpbj17ZGF0YS5wcmVmZXJlbmNlLnJlc3BvbnNlX3dpdGhpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JDb21wbGV0aW9uPXtkYXRhLnByZWZlcmVuY2Uuam9iX2NvbXBsZXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGYXZvcml0ZT17ZGF0YS5pc19mYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWhpcmVSYXRlPXtkYXRhLnByZWZlcmVuY2UucmVoaXJlX3JhdGUgPz8gMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlPXtkYXRhLnByZWZlcmVuY2UuZXhwZXJpZW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXRUYWtlbkNhcmU9e2RhdGEucHJlZmVyZW5jZS5wZXRzX2NhcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFwcHlDdXN0b21lcnM9e2RhdGEucHJlZmVyZW5jZS5oYXBweV9jdXN0b21lcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25saW5lPXtkYXRhLnByZWZlcmVuY2Uub25saW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17ZGF0YS5vdmVyYWxsX3JhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3PXtkYXRhLnRvdGFsX3Jldmlld31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlX3BpYz17dGhpcy5zdGF0ZS5kYXRhLnByb2ZpbGVfcGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrVW5tYXJrPXt0aGlzLmhhbmRsZUJvb2ttYXJrU2l0dGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJZD17cXVlcnkuc2VydmljZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQXZhaWxhYmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctOCBjb2wteGwtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FsbGVyeVZpZXcgaW1hZ2VzPXt0aGlzLnN0YXRlLmRhdGEuaW1hZ2VzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbWFpbi1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LTIwIG1iLTNcIj57YEnigJltICR7dGhpcy5zdGF0ZS5kYXRhLmZpcnN0bmFtZX1gfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJkZXNjcmlwdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Jm5ic3A7Jm5ic3A7UmVhZCBtb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbWFpbi1iYWNrZ3JvdW5kIGFib3V0LXBldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMyBmb250LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgV2hhdCAke3RoaXMuc3RhdGUuZGF0YS5maXJzdG5hbWV9IHdvdWxkIGxpa2UgdG8ga25vdyBhYm91dCB5b3VyIHBldGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLWZvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEucXVlc3Rpb25zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57dmFsdWUucXVlc3Rpb259IDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG1haW4tYmFja2dyb3VuZCBhYm91dC1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0zIGZvbnQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkFib3V0cGxhY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFkZHJlc3MubGl2ZV9pbl9ob3VzZSA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxpdmVzIGluIGEgSG91c2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYWRkcmVzcy5ub25fc21va2luZ19ob3VzZWhvbGQgPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm9uLVNtb2tpbmcgSG91c2Vob2xkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFkZHJlc3Mubm9fY2hpbGRyZW5fcHJlc2VudCA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vIENoaWxkcmVuIFByZXNlbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYWRkcmVzcy5mZW5jZWRfeWFyZCA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhcyBhIEZlbmNlZCBZYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFkZHJlc3MuZG9nX290aGVyX3BldHMgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYXMgcGV0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG1haW4tYmFja2dyb3VuZCBhYm91dC1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0zIGZvbnQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkFkZGl0aW9uYWxTa2lsbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLnNraWxscy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aW5kZXh9Pnt2YWx1ZS5za2lsbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLnBldHMubGVuZ3RoID8gPE15UGV0cyBwZXRzPXt0aGlzLnN0YXRlLmRhdGEucGV0c30vPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdzIGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBjb2wtbGctNCBjb2wteGwtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2l0dGVyU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuZGF0YS5maXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPXt0aGlzLnN0YXRlLmRhdGEuYWN0aXZlX3NlcnZpY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5teVJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2l0dGVyQXZhaWxhYmxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlcz17dGhpcy5zdGF0ZS5kYXRhLmFjdGl2ZV9zZXJ2aWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG1haW4tYmFja2dyb3VuZCBwb2xpY3lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG1iLTMgZm9udC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJpbmdzLkJvYXJkaW5nQ2FuY2VsbGF0aW9ucG9saWN5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNhbmNlbGxhdGlvbl9wb2xpY3kgPT0gMSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Zb3XigJlsbCBnZXQgYSBmdWxsIHJlZnVuZCBpZiB5b3UgY2FuY2VsIGJlZm9yZSB0aGUgZGF54oCZcyBzZXJ2aWNlIGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JZiB5b3UgY2FuY2VsIGFmdGVyIHRoZSBzdGF5IG9yIHdhbGsgYmVnaW5zLCB5b3UnbGwgZ2V0IGEgNTAlIHJlZnVuZCBmb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZpcnN0IHNldmVuIGNhbmNlbGxlZCBkYXlzIGFuZCBhIDEwMCUgcmVmdW5kIGZvciBhbnkgYWRkaXRpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZWQgZGF5cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jYW5jZWxsYXRpb25fcG9saWN5ID09IDIgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+WW91IGNhbmNlbCB3aXRoaW4gNDggaG91cnMgb2YgYm9va2luZy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaGUgcmVzZXJ2YXRpb24geW914oCZcmUgY2FuY2VsbGluZyBkb2VzbuKAmXQgb3ZlcmxhcCB3aXRoIGFub3RoZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb24gaW4geW91ciBhY2NvdW50IFdoZW4gcmVmdW5kLCBhbnkgcHJvbW8gY29kZSAoY291cG9uKSBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzIHdpbGwgYmUgYXZhaWxhYmxlIHRvIHVzZSBpbW1lZGlhdGVseS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JZiB5b3UgY2FuY2VsIGFmdGVyIDEyOjAwIG5vb24gMyBkYXlzIGJlZm9yZSB0aGUgc3RheSBiZWdpbnMsIHlvdSdsbCBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA1MCUgcmVmdW5kIGZvciB0aGUgZmlyc3Qgc2V2ZW4gY2FuY2VsbGVkIGRheXMgYW5kIGEgMTAwJSByZWZ1bmQgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueSBhZGRpdGlvbmFsIGNhbmNlbGxlZCBkYXlzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNhbmNlbGxhdGlvbl9wb2xpY3kgPT0gMyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JZiB5b3UgY2FuY2VsIGFmdGVyIDEyOjAwIG5vb24gb25lIHdlZWsgYmVmb3JlIHRoZSBzdGF5IGJlZ2lucywgeW91J2xsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldCBhIDUwJSByZWZ1bmQgZm9yIHRoZSBmaXJzdCBzZXZlbiBjYW5jZWxsZWQgZGF5cyBhbmQgYSAxMDAlIHJlZnVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgYW55IGFkZGl0aW9uYWwgZGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklmIHlvdSBjYW5jZWwgYWZ0ZXIgMTI6MDAgbm9vbiBvbmUgd2VlayBiZWZvcmUgdGhlIHN0YXkgYmVnaW5zLCB5b3UnbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0IGEgNTAlIHJlZnVuZCBmb3IgdGhlIGZpcnN0IHNldmVuIGNhbmNlbGxlZCBkYXlzIGFuZCBhIDEwMCUgcmVmdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciBhbnkgYWRkaXRpb25hbCBkYXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtYWluLWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGZvbnQtMjAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHt0aGlzLnN0YXRlLmRhdGEuZmlyc3RuYW1lfSBjYW4gaG9zdGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaG9zdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cImNhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXQgZmEtdy0xNiBmYS0yeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjkwLjU5IDE5MmMtMjAuMTggMC0xMDYuODIgMS45OC0xNjIuNTkgODUuOTVWMTkyYzAtNTIuOTQtNDMuMDYtOTYtOTYtOTYtMTcuNjcgMC0zMiAxNC4zMy0zMiAzMnMxNC4zMyAzMiAzMiAzMmMxNy42NCAwIDMyIDE0LjM2IDMyIDMydjI1NmMwIDM1LjMgMjguNyA2NCA2NCA2NGgxNzZjOC44NCAwIDE2LTcuMTYgMTYtMTZ2LTE2YzAtMTcuNjctMTQuMzMtMzItMzItMzJoLTMybDEyOC05NnYxNDRjMCA4Ljg0IDcuMTYgMTYgMTYgMTZoMzJjOC44NCAwIDE2LTcuMTYgMTYtMTZWMjg5Ljg2Yy0xMC4yOSAyLjY3LTIwLjg5IDQuNTQtMzIgNC41NC02MS44MSAwLTExMy41Mi00NC4wNS0xMjUuNDEtMTAyLjR6TTQ0OCA5NmgtNjRsLTY0LTY0djEzNC40YzAgNTMuMDIgNDIuOTggOTYgOTYgOTZzOTYtNDIuOTggOTYtOTZWMzJsLTY0IDY0em0tNzIgODBjLTguODQgMC0xNi03LjE2LTE2LTE2czcuMTYtMTYgMTYtMTYgMTYgNy4xNiAxNiAxNi03LjE2IDE2LTE2IDE2em04MCAwYy04Ljg0IDAtMTYtNy4xNi0xNi0xNnM3LjE2LTE2IDE2LTE2IDE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wIGZvbnQtbm9ybWFsXCI+IERvZ3M8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciAgaG9zdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWNvbj1cImNhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jYXQgZmEtdy0xNiBmYS0yeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjkwLjU5IDE5MmMtMjAuMTggMC0xMDYuODIgMS45OC0xNjIuNTkgODUuOTVWMTkyYzAtNTIuOTQtNDMuMDYtOTYtOTYtOTYtMTcuNjcgMC0zMiAxNC4zMy0zMiAzMnMxNC4zMyAzMiAzMiAzMmMxNy42NCAwIDMyIDE0LjM2IDMyIDMydjI1NmMwIDM1LjMgMjguNyA2NCA2NCA2NGgxNzZjOC44NCAwIDE2LTcuMTYgMTYtMTZ2LTE2YzAtMTcuNjctMTQuMzMtMzItMzItMzJoLTMybDEyOC05NnYxNDRjMCA4Ljg0IDcuMTYgMTYgMTYgMTZoMzJjOC44NCAwIDE2LTcuMTYgMTYtMTZWMjg5Ljg2Yy0xMC4yOSAyLjY3LTIwLjg5IDQuNTQtMzIgNC41NC02MS44MSAwLTExMy41Mi00NC4wNS0xMjUuNDEtMTAyLjR6TTQ0OCA5NmgtNjRsLTY0LTY0djEzNC40YzAgNTMuMDIgNDIuOTggOTYgOTYgOTZzOTYtNDIuOTggOTYtOTZWMzJsLTY0IDY0em0tNzIgODBjLTguODQgMC0xNi03LjE2LTE2LTE2czcuMTYtMTYgMTYtMTYgMTYgNy4xNiAxNiAxNi03LjE2IDE2LTE2IDE2em04MCAwYy04Ljg0IDAtMTYtNy4xNi0xNi0xNnM3LjE2LTE2IDE2LTE2IDE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYi0wIGZvbnQtbm9ybWFsXCI+MC0xNUtnPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgIGhvc3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJjYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2F0IGZhLXctMTYgZmEtMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI5MC41OSAxOTJjLTIwLjE4IDAtMTA2LjgyIDEuOTgtMTYyLjU5IDg1Ljk1VjE5MmMwLTUyLjk0LTQzLjA2LTk2LTk2LTk2LTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJzMTQuMzMgMzIgMzIgMzJjMTcuNjQgMCAzMiAxNC4zNiAzMiAzMnYyNTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRoMTc2YzguODQgMCAxNi03LjE2IDE2LTE2di0xNmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyaC0zMmwxMjgtOTZ2MTQ0YzAgOC44NCA3LjE2IDE2IDE2IDE2aDMyYzguODQgMCAxNi03LjE2IDE2LTE2VjI4OS44NmMtMTAuMjkgMi42Ny0yMC44OSA0LjU0LTMyIDQuNTQtNjEuODEgMC0xMTMuNTItNDQuMDUtMTI1LjQxLTEwMi40ek00NDggOTZoLTY0bC02NC02NHYxMzQuNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2czk2LTQyLjk4IDk2LTk2VjMybC02NCA2NHptLTcyIDgwYy04Ljg0IDAtMTYtNy4xNi0xNi0xNnM3LjE2LTE2IDE2LTE2IDE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnptODAgMGMtOC44NCAwLTE2LTcuMTYtMTYtMTZzNy4xNi0xNiAxNi0xNiAxNiA3LjE2IDE2IDE2LTcuMTYgMTYtMTYgMTZ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMCBmb250LW5vcm1hbFwiPjE2LTQwS2c8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5TcGF5ZWQgYW5kIE5ldXRlcmVkIERvZ3MgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ObyBGZW1hbGVzIGluIEhlYXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBob3N0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiY2F0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhdCBmYS13LTE2IGZhLTJ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yOTAuNTkgMTkyYy0yMC4xOCAwLTEwNi44MiAxLjk4LTE2Mi41OSA4NS45NVYxOTJjMC01Mi45NC00My4wNi05Ni05Ni05Ni0xNy42NyAwLTMyIDE0LjMzLTMyIDMyczE0LjMzIDMyIDMyIDMyYzE3LjY0IDAgMzIgMTQuMzYgMzIgMzJ2MjU2YzAgMzUuMyAyOC43IDY0IDY0IDY0aDE3NmM4Ljg0IDAgMTYtNy4xNiAxNi0xNnYtMTZjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMzJsMTI4LTk2djE0NGMwIDguODQgNy4xNiAxNiAxNiAxNmgzMmM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyODkuODZjLTEwLjI5IDIuNjctMjAuODkgNC41NC0zMiA0LjU0LTYxLjgxIDAtMTEzLjUyLTQ0LjA1LTEyNS40MS0xMDIuNHpNNDQ4IDk2aC02NGwtNjQtNjR2MTM0LjRjMCA1My4wMiA0Mi45OCA5NiA5NiA5NnM5Ni00Mi45OCA5Ni05NlYzMmwtNjQgNjR6bS03MiA4MGMtOC44NCAwLTE2LTcuMTYtMTYtMTZzNy4xNi0xNiAxNi0xNiAxNiA3LjE2IDE2IDE2LTcuMTYgMTYtMTYgMTZ6bTgwIDBjLTguODQgMC0xNi03LjE2LTE2LTE2czcuMTYtMTYgMTYtMTYgMTYgNy4xNiAxNiAxNi03LjE2IDE2LTE2IDE2elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTAgZm9udC1ub3JtYWxcIj5DYXRzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgIGhvc3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWljb249XCJjYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtY2F0IGZhLXctMTYgZmEtMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI5MC41OSAxOTJjLTIwLjE4IDAtMTA2LjgyIDEuOTgtMTYyLjU5IDg1Ljk1VjE5MmMwLTUyLjk0LTQzLjA2LTk2LTk2LTk2LTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJzMTQuMzMgMzIgMzIgMzJjMTcuNjQgMCAzMiAxNC4zNiAzMiAzMnYyNTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRoMTc2YzguODQgMCAxNi03LjE2IDE2LTE2di0xNmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyaC0zMmwxMjgtOTZ2MTQ0YzAgOC44NCA3LjE2IDE2IDE2IDE2aDMyYzguODQgMCAxNi03LjE2IDE2LTE2VjI4OS44NmMtMTAuMjkgMi42Ny0yMC44OSA0LjU0LTMyIDQuNTQtNjEuODEgMC0xMTMuNTItNDQuMDUtMTI1LjQxLTEwMi40ek00NDggOTZoLTY0bC02NC02NHYxMzQuNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2czk2LTQyLjk4IDk2LTk2VjMybC02NCA2NHptLTcyIDgwYy04Ljg0IDAtMTYtNy4xNi0xNi0xNnM3LjE2LTE2IDE2LTE2IDE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnptODAgMGMtOC44NCAwLTE2LTcuMTYtMTYtMTZzNy4xNi0xNiAxNi0xNiAxNiA3LjE2IDE2IDE2LTcuMTYgMTYtMTYgMTZ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItMCBmb250LW5vcm1hbFwiPjAtMTVLZzwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyICBob3N0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pY29uPVwiY2F0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWNhdCBmYS13LTE2IGZhLTJ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yOTAuNTkgMTkyYy0yMC4xOCAwLTEwNi44MiAxLjk4LTE2Mi41OSA4NS45NVYxOTJjMC01Mi45NC00My4wNi05Ni05Ni05Ni0xNy42NyAwLTMyIDE0LjMzLTMyIDMyczE0LjMzIDMyIDMyIDMyYzE3LjY0IDAgMzIgMTQuMzYgMzIgMzJ2MjU2YzAgMzUuMyAyOC43IDY0IDY0IDY0aDE3NmM4Ljg0IDAgMTYtNy4xNiAxNi0xNnYtMTZjMC0xNy42Ny0xNC4zMy0zMi0zMi0zMmgtMzJsMTI4LTk2djE0NGMwIDguODQgNy4xNiAxNiAxNiAxNmgzMmM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyODkuODZjLTEwLjI5IDIuNjctMjAuODkgNC41NC0zMiA0LjU0LTYxLjgxIDAtMTEzLjUyLTQ0LjA1LTEyNS40MS0xMDIuNHpNNDQ4IDk2aC02NGwtNjQtNjR2MTM0LjRjMCA1My4wMiA0Mi45OCA5NiA5NiA5NnM5Ni00Mi45OCA5Ni05NlYzMmwtNjQgNjR6bS03MiA4MGMtOC44NCAwLTE2LTcuMTYtMTYtMTZzNy4xNi0xNiAxNi0xNiAxNiA3LjE2IDE2IDE2LTcuMTYgMTYtMTYgMTZ6bTgwIDBjLTguODQgMC0xNi03LjE2LTE2LTE2czcuMTYtMTYgMTYtMTYgMTYgNy4xNiAxNiAxNi03LjE2IDE2LTE2IDE2elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1iLTAgZm9udC1ub3JtYWxcIj4xNi00MEtnPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbWFpbi1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBtYi0zXCI+TG9jYXRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBvdXRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15TWFwQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogR09PR0xFX1BMQUNFU19BUEksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUxhdExuZz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXJrZXJTaG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRsbmc9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogTnVtYmVyKHRoaXMuc3RhdGUuZGF0YS5hZGRyZXNzLm1hcF9sYXRpdHVkZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IE51bWJlcih0aGlzLnN0YXRlLmRhdGEuYWRkcmVzcy5tYXBfbG9uZ2l0dWRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlTWFwVVJMPXtgaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcy9hcGkvanM/a2V5PSR7R09PR0xFX1BMQUNFU19BUEl9JmFtcDtsaWJyYXJpZXM9Z2VvbWV0cnksZHJhd2luZyxwbGFjZXNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRWxlbWVudD17PGRpdiBzdHlsZT17e2hlaWdodDogYDEwMCVgfX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17e2hlaWdodDogYDQwMHB4YH19Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEVsZW1lbnQ9ezxkaXYgc3R5bGU9e3toZWlnaHQ6IGAxMDAlYH19Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hZGRyZXNzICYmIHRoaXMuc3RhdGUuZGF0YS5hZGRyZXNzLmhpZGVfYWRkcmVzcyA9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEuYWRkcmVzcy5hZGRyZXNzfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJtYi0wIGZvbnQtMTJcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgVGhlIGNpcmNsZSBhcmVhIG9uIG1hcCBzaG93cyBzZXJ2aWNlYWJsZSBhcmVhIHNpdHRlciBpcyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBjb21mb3J0YWJsZSB3aXRoLiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9wPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4dHJhSW5mb0xvY2FsaXR5IGFkZHJlc3M9e3RoaXMuc3RhdGUuZGF0YS5hZGRyZXNzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnk6IHtpZH19KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFwaSA9IG5ldyBBUEkoKTtcclxuICAgICAgICBsZXQgZGF0YSA9IG51bGw7XHJcbiAgICAgICAgYXdhaXQgYXBpXHJcbiAgICAgICAgICAgIC5nZXRTaW5nbGVTaXR0ZXIoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSByZXMuZGF0YS5yZXNwb25zZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNpdHRlclByb2ZpbGUpXHJcbiIsImltcG9ydCB7IHNlcnZpY2VzVmVyc2lvbiB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XHJcblxyXG5leHBvcnQgdHlwZSBzZWxlY3QgPSB7XHJcbiAga2V5OiBudW1iZXI7XHJcbiAgdmFsdWU6IGFueTtcclxuICBsYWJlbDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgcGV0ID0ge1xyXG4gIGFnZTogbnVtYmVyO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgd2VpZ2h0OiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3VjY2Vzc09wdGlvbnMgPSB7XHJcbiAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXHJcbiAgc3R5bGU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIGZvbnRGYW1pbHk6IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgY2xvc2VTdHlsZToge1xyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9yT3B0aW9ucyA9IHtcclxuICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcclxuICB6SW5kZXg6IDEwMixcclxuICBzdHlsZToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxyXG4gICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgekluZGV4OiAxMDIsXHJcbiAgfSxcclxuICBjbG9zZVN0eWxlOiB7XHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VGZWVPYmplY3QgPSB7XHJcbiAgY2FwYWNpdHk6IDEsXHJcbiAgcGV0X3NpemVfaWQ6IDEsXHJcbiAgc2VydmljZV9jaGFyZ2U6IFwiXCIsXHJcbiAgZWFybmluZ19hbW91bnQ6IFwiXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2l0aWVzOiBzZWxlY3RbXSA9IFtcclxuICB7IGtleTogMSwgbGFiZWw6IFwiU2hpbmp1a3UgQ2l0eVwiLCB2YWx1ZTogXCJTaGluanVrdSBDaXR5XCIgfSxcclxuICB7IGtleTogMiwgbGFiZWw6IFwiQW5vdGhlciBDaXR5XCIsIHZhbHVlOiBcIkFub3RoZXIgQ2l0eVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcGV0cyA9IFtcclxuICB7IGtleTogMSwgbGFiZWw6IFwiRG9nXCIsIHZhbHVlOiAxIH0sXHJcbiAgeyBrZXk6IDIsIGxhYmVsOiBcIkNhdFwiLCB2YWx1ZTogMiB9LFxyXG4gIHsga2V5OiAzLCBsYWJlbDogXCJCaXJkc1wiLCB2YWx1ZTogMyB9LFxyXG4gIHsga2V5OiA0LCBsYWJlbDogXCJSZXB0aWxlc1wiLCB2YWx1ZTogNCB9LFxyXG4gIHsga2V5OiA1LCBsYWJlbDogXCJTbWFsbCBhbmltYWxzXCIsIHZhbHVlOiA1IH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0FuZEV2ZW50cyA9IFtcclxuICB7XHJcbiAgICBrZXk6IDEsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDIsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDMsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDQsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDUsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IDYsXHJcbiAgICBwb3N0ZWQ6IFwiMDcvMTAvMjAyMSwgM1BNXCIsXHJcbiAgICBwb3N0OiBcIlBldGNpdGF0aW9uIHdlYnNpdGUgd2lsbCBiZSBvbiBtYWludGVuYW5jZSBmcm9tIDNQTSB0byA2UE0gb24gMjFKdWx5IDIwMjEoSmFwYW4gVGltZSkuV2UgYXBvbG9naXNlIGZvciB0aGUgaW5jb252aW5pZW5jZSBjYXVzZWQuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYXEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwiMVwiLFxyXG4gICAgcXVlc3Rpb246IFwiMS4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiMlwiLFxyXG4gICAgcXVlc3Rpb246IFwiMi4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiM1wiLFxyXG4gICAgcXVlc3Rpb246IFwiMy4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiNFwiLFxyXG4gICAgcXVlc3Rpb246IFwiNC4gSG93IGRvIEkgYXNzdXJlIHBldCBzaXR0ZXIgaXMgYSBnZW51aW5lIHBlcnNvbj9cIixcclxuICAgIGFuc3dlcjpcclxuICAgICAgXCJXZSBhZHZpc2Ugb3VyIHN0dWRlbnRzIHRvIHN0YXJ0IGF0IGxlYXN0IDE1IG1vbnRocyBwcmlvciB0byB0aGUgaW50YWtlIHBlcmlvZCBvZiBhbiBlZHVjYXRpb25hbCBpbnN0aXR1dGUuIFRoaXMgYWxsb3dzIHN1ZmZjaWVudCB0aW1lIHRvIGJ1aWxkIGFuIGlkZWFsIHByb2ZpbGUgYW5kIHByb2Nlc3MgdGhlIGFwcGxpY2F0aW9uLlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG50eXBlIHNlcnZpY2UgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlRGF0YTogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCJCb2FyZGluZ1wiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiAyLCBsYWJlbDogXCJIb3VzZSBTaXR0aW5nXCIgfSxcclxuICB7IGtleTogMywgdmFsdWU6IDMsIGxhYmVsOiBcIkRyb3AtaW4tdmlzaXRzXCIgfSxcclxuICB7IGtleTogNCwgdmFsdWU6IDQsIGxhYmVsOiBcIlBldCBEYXkgY2FyZVwiIH0sXHJcbiAgeyBrZXk6IDUsIHZhbHVlOiA1LCBsYWJlbDogXCJEb2cgd2Fsa2luZ1wiIH0sXHJcbiAgeyBrZXk6IDYsIHZhbHVlOiA2LCBsYWJlbDogXCJQZXQgZ3Jvb21pbmdcIiB9LFxyXG4gIHsga2V5OiA3LCB2YWx1ZTogNywgbGFiZWw6IFwiSG91c2UgY2FsbFwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcGV0VHlwZTogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiBcIkRvZyBCb2FyZGluZ1wiLCBsYWJlbDogXCJEb2cgQm9hcmRpbmdcIiB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogXCJIb3VzZSBTaXR0aW5nXCIsIGxhYmVsOiBcIkhvdXNlIFNpdHRpbmdcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogXCJEcm9wLWluLXZpc2l0c1wiLCBsYWJlbDogXCJEcm9wLWluLXZpc2l0c1wiIH0sXHJcbiAgeyBrZXk6IDQsIHZhbHVlOiBcIkRvZ2d5IERheSBjYXJlXCIsIGxhYmVsOiBcIkRvZ2d5IERheSBjYXJlXCIgfSxcclxuICB7IGtleTogNSwgdmFsdWU6IFwiRG9nIHdhbGtpbmdcIiwgbGFiZWw6IFwiRG9nIHdhbGtpbmdcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaWNlczogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCJBbGwgUHJpY2VzXCIgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IDIsIGxhYmVsOiBcIjEwMDAwLTIwMDAwXCIgfSxcclxuICB7IGtleTogMywgdmFsdWU6IDMsIGxhYmVsOiBcIjIwMDAwLTMwMDAwXCIgfSxcclxuICB7IGtleTogNCwgdmFsdWU6IDQsIGxhYmVsOiBcIjUwMDAwIC0gbW9yZVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmljZVRpbWU6IHNlbGVjdFtdID0gW1xyXG4gIHsga2V5OiAxLCB2YWx1ZTogXCJPbmUgVGltZVwiLCBsYWJlbDogXCJPbmUgVGltZVwiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBcIlJlcGVhdCBXZWVrbHlcIiwgbGFiZWw6IFwiUmVwZWF0IFdlZWtseVwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcGV0U2l6ZTogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCIwIC0gNSBrZ1wiIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiAyLCBsYWJlbDogXCI1IC0gMTAga2dcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogMywgbGFiZWw6IFwiMTAgLSAyNSBrZ1wiIH0sXHJcbiAgeyBrZXk6IDQsIHZhbHVlOiA0LCBsYWJlbDogXCIyNSAtIDQwIGtnXCIgfSxcclxuICB7IGtleTogNSwgdmFsdWU6IDUsIGxhYmVsOiBcIjQwKyBrZ1wiIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBkdXJhdGlvbnM6IHNlbGVjdFtdID0gW1xyXG4gIHsga2V5OiAxLCB2YWx1ZTogMzAsIGxhYmVsOiBcIjMwIG1pbnNcIiB9LFxyXG4gIHsga2V5OiAyLCB2YWx1ZTogNjAsIGxhYmVsOiBcIjYwIG1pbnNcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogOTAsIGxhYmVsOiBcIjkwIG1pbnNcIiB9LFxyXG4gIHsga2V5OiA0LCB2YWx1ZTogMTIwLCBsYWJlbDogXCIxMjAgbWluc1wiIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBwZXRDb3VudDogc2VsZWN0W10gPSBbXHJcbiAgeyBrZXk6IDEsIHZhbHVlOiAxLCBsYWJlbDogXCIxXCIgfSxcclxuICB7IGtleTogMiwgdmFsdWU6IDIsIGxhYmVsOiBcIjJcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogMywgbGFiZWw6IFwiM1wiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydDogc2VsZWN0W10gPSBbXHJcbiAge1xyXG4gICAga2V5OiAxLFxyXG4gICAgdmFsdWU6IFwiRGlzdGFuY2UgY2xvc2VzdCB0byBmdXJ0aGVzdFwiLFxyXG4gICAgbGFiZWw6IFwiRGlzdGFuY2UgY2xvc2VzdCB0byBmdXJ0aGVzdFwiLFxyXG4gIH0sXHJcbiAgeyBrZXk6IDIsIHZhbHVlOiBcIkhpZ2hlciB0byBsb3dlclwiLCBsYWJlbDogXCJIaWdoZXIgdG8gbG93ZXJcIiB9LFxyXG4gIHsga2V5OiAzLCB2YWx1ZTogXCJMb3dlciB0byBoaWdoZXJcIiwgbGFiZWw6IFwibG93ZXIgdG8gaGlnaGVyXCIgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwZXQ6IHNlbGVjdFtdID0gW1xyXG4gIHsga2V5OiAxLCBsYWJlbDogXCJEb2dcIiwgdmFsdWU6IFwiMVwiIH0sXHJcbiAgeyBrZXk6IDIsIGxhYmVsOiBcIkNhdFwiLCB2YWx1ZTogXCIyXCIgfSxcclxuICB7IGtleTogMywgbGFiZWw6IFwiQmlyZHNcIiwgdmFsdWU6IFwiM1wiIH0sXHJcbiAgeyBrZXk6IDQsIGxhYmVsOiBcIlJlcHRpbGVzXCIsIHZhbHVlOiBcIjRcIiB9LFxyXG4gIHsga2V5OiA1LCBsYWJlbDogXCJTbWFsbCBhbmltYWxzXCIsIHZhbHVlOiBcIjVcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG15UGV0czogcGV0W10gPSBbXHJcbiAge1xyXG4gICAgYWdlOiA3LFxyXG4gICAgaW1hZ2U6IFwiL1wiLFxyXG4gICAgbmFtZTogXCJNaWxvXCIsXHJcbiAgICBsb2NhdGlvbjogXCJTaWJlcmlhbiBodXNreVwiLFxyXG4gICAgd2VpZ2h0OiAxNixcclxuICB9LFxyXG4gIHtcclxuICAgIGFnZTogNyxcclxuICAgIGltYWdlOiBcIi9cIixcclxuICAgIG5hbWU6IFwiTWlsb1wiLFxyXG4gICAgbG9jYXRpb246IFwiU2liZXJpYW4gaHVza3lcIixcclxuICAgIHdlaWdodDogMTYsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZpZXdTdGF0ZURhdGEgPSB7XHJcbiAgcmF0aW5nOiA0LFxyXG4gIGNsZWFubGluZXNzOiA0LFxyXG4gIGFjY3VyYWN5OiA0LFxyXG4gIGNvbW11bmljYXRpb246IDQsXHJcbiAgbG9jYXRpb246IDQsXHJcbiAgY2hlY2tJbjogNCxcclxuICB2YWx1ZTogNSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZpZXdPYmplY3REYXRhID0ge1xyXG4gIHVzZXJJbWFnZTogXCIvXCIsXHJcbiAgdXNlck5hbWU6IFwiTWFyayBFdmFuc1wiLFxyXG4gIGRhdGU6IFwiSnVuZSAxMCwgMjAyMVwiLFxyXG4gIHRpbWU6IFwiNzozMHBtXCIsXHJcbiAgcmV2aWV3OlxyXG4gICAgXCLigJxBYmJleSBpcyB0aGUgYmVzdCBkb2cgbW9tIEnigJl2ZSBldmVyIGtub3duISBSZXNwb25zaWJsZSwgYXR0ZW50aXZlLCBwbGF5ZnVsLCBhbmQgbG92aW5nLiBJIG1ldCBoZXIgd2hlbiBzaGUgd2FzIHZvbHVudGVlcmluZyB0byBoZWxwIHNoZWx0ZXIgYW5pbWFscyAtIGhlciBlbXBhdGh5IGZvciBhbmltYWwgc291bHMgaXMgbGltaXRsZXNzLuKAnVwiLFxyXG4gIHJhdGluZzogNCxcclxuICB1c2VySW1hZ2VzOiBbXCIvXCIsIFwiL1wiLCBcIi9cIiwgXCIvXCJdLFxyXG4gIHVzZXJDb3VudDogMTAsXHJcbiAgc2l0dGVyUmVzcG9uc2U6IHRydWUsXHJcbiAgc2l0dGVyUmVwbHk6IFwiVGhhbmsgeW91IGZvciB5b3VyIGtpbmQgd29yZHMgTWFyayFcIixcclxuICBzaXR0ZXJJbWFnZTogXCIvXCIsXHJcbiAgc2l0dGVyTmFtZTogXCJSZWJlY2NhIFcuXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0dGVyU2VydmljZXMgPSBbXHJcbiAge1xyXG4gICAgc2VydmljZTogXCJCb2FyZGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiaW4gdGhlIHNpdHRlcidzIGhvbWVcIixcclxuICAgIHByaWNlOiBcIsKlNDBcIixcclxuICAgIHBlcmlvZDogXCJwZXIgbmlnaHRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2U6IFwiSG91c2UgU2l0dGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiaW4gdGhlIGhvbWVcIixcclxuICAgIHByaWNlOiBcIsKlNDBcIixcclxuICAgIHBlcmlvZDogXCJwZXIgbmlnaHRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2U6IFwiRHJvcC1JbiBWaXNpdHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInZpc2l0IGluIHlvdXIgaG9tZVwiLFxyXG4gICAgcHJpY2U6IFwiwqU0MFwiLFxyXG4gICAgcGVyaW9kOiBcInBlciBuaWdodFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZTogXCJEb2dneSBEYXkgQ2FyZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiaW4gdGhlIHNpdHRlcidzIGhvbWVcIixcclxuICAgIHByaWNlOiBcIsKlNDBcIixcclxuICAgIHBlcmlvZDogXCJwZXIgbmlnaHRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtpbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcImluIHlvdXIgbmVpZ2hib3Job29kXCIsXHJcbiAgICBwcmljZTogXCLCpTQwXCIsXHJcbiAgICBwZXJpb2Q6IFwicGVyIG5pZ2h0XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaXR0ZXJTdGF0ZXMgPSB7XHJcbiAgYm9va2luZ0Zvck1lOiAxMDAsXHJcbiAgYm9va2luZ0J5TWU6IDUwLFxyXG4gIHBCb29raW5nRm9yTWU6IDIwLFxyXG4gIHBCb29raW5nQnlNZTogMTUsXHJcbiAgcFRvdGFsQm9va2luZzogMjUsXHJcbiAgdG90YWxFYXJuaW5nOiAzNDAwMCxcclxuICBwVG90YWxFYXJuaW5nOiAtMjUsXHJcbiAgdG90YWxSZWZlcnJhbDogMTAsXHJcbiAgcFRvdGFsUmVmZXJyYWw6IDEwLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RzQXJyYXkgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM1MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM2MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM3MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGaW5jaOKAmXNcIixcclxuICAgIHNlcnZpY2U6IFwiRG9nIFdhbGtcIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjFcIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxXCIsXHJcbiAgICB0b3RhbDogXCLCpTM4MFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbWVldGluZ1JlcXVlc3RzID0gW1xyXG4gIHtcclxuICAgIGRhdGU6IDAsXHJcbiAgICBzZXJ2aWNlOiBcIkRheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIiBWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogMCxcclxuICAgIHNlcnZpY2U6IFwiRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiIFZhbmNvdXZlciwgV0EsIDk4Njg3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAwLFxyXG4gICAgc2VydmljZTogXCJEYXkgQ2FyZVwiLFxyXG4gICAgY2xpZW50TmFtZTogXCJEYXZpZCBULlwiLFxyXG4gICAgYWRkcmVzczogXCIgVmFuY291dmVyLCBXQSwgOTg2ODhcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6IDAsXHJcbiAgICBzZXJ2aWNlOiBcIkRheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIiBWYW5jb3V2ZXIsIFdBLCA5ODY4OSBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2VydmF0aW9uUmVxdWVzdHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmcm9tOiBcIjI5IEp1biAyMDIxLCAzUE1cIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxLCAzUE1cIixcclxuICAgIHBheW1lbnRTdGF0dXM6IFwiUEFJRFwiLFxyXG4gICAgdG90YWw6IFwiwqUzNTBcIixcclxuICAgIG5hbWU6IFwiTW9sbHnigJlzIC0gRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGltYWdlOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICB0bzogXCIzMCBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICBwYXltZW50U3RhdHVzOiBcIlBBSURcIixcclxuICAgIHRvdGFsOiBcIsKlMzUwXCIsXHJcbiAgICBuYW1lOiBcIk1vbGx54oCZcyAtIERheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIlZhbmNvdXZlciwgV0EsIDk4Njg2XCIsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGZyb206IFwiMjkgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgdG86IFwiMzAgSnVuIDIwMjEsIDNQTVwiLFxyXG4gICAgcGF5bWVudFN0YXR1czogXCJQQUlEXCIsXHJcbiAgICB0b3RhbDogXCLCpTM1MFwiLFxyXG4gICAgbmFtZTogXCJNb2xseeKAmXMgLSBEYXkgQ2FyZVwiLFxyXG4gICAgY2xpZW50TmFtZTogXCJEYXZpZCBULlwiLFxyXG4gICAgYWRkcmVzczogXCJWYW5jb3V2ZXIsIFdBLCA5ODY4NlwiLFxyXG4gICAgaW1hZ2U6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBmcm9tOiBcIjI5IEp1biAyMDIxLCAzUE1cIixcclxuICAgIHRvOiBcIjMwIEp1biAyMDIxLCAzUE1cIixcclxuICAgIHBheW1lbnRTdGF0dXM6IFwiUEFJRFwiLFxyXG4gICAgdG90YWw6IFwiwqUzNTBcIixcclxuICAgIG5hbWU6IFwiTW9sbHnigJlzIC0gRGF5IENhcmVcIixcclxuICAgIGNsaWVudE5hbWU6IFwiRGF2aWQgVC5cIixcclxuICAgIGFkZHJlc3M6IFwiVmFuY291dmVyLCBXQSwgOTg2ODZcIixcclxuICAgIGltYWdlOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgZnJvbTogXCIyOSBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICB0bzogXCIzMCBKdW4gMjAyMSwgM1BNXCIsXHJcbiAgICBwYXltZW50U3RhdHVzOiBcIlBBSURcIixcclxuICAgIHRvdGFsOiBcIsKlMzUwXCIsXHJcbiAgICBuYW1lOiBcIk1vbGx54oCZcyAtIERheSBDYXJlXCIsXHJcbiAgICBjbGllbnROYW1lOiBcIkRhdmlkIFQuXCIsXHJcbiAgICBhZGRyZXNzOiBcIlZhbmNvdXZlciwgV0EsIDk4Njg2XCIsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vSW1wb3J0YW50XHJcblxyXG5leHBvcnQgY29uc3QgbXlTZXJ2aWNlcyA9IFtcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJCb2FyZGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiWW91ciBjbGllbnTigJlzIHBldHMgY29tZSB0byB5b3VyIGhvbWUgYW5kIHN0YXkgb3Zlcm5pZ2h0LlwiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IGZhbHNlLFxyXG4gICAgc3BlY2lmaWNhdGlvbnM6IFtcclxuICAgICAgXCJMaXZlcyBpbiBhIEhvdXNlXCIsXHJcbiAgICAgIFwiR2V0IHlvdXIgZmlyc3QgYm9va2luZyBzb29uZXJcIixcclxuICAgICAgXCJNYWtlIG1vcmUgbW9uZXkgb24gdGhlIHdlZWtlbmRzIChUaHUtU3VuKVwiLFxyXG4gICAgXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJHcm9vbWluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnQgY2FuIGNvbWUgb3IgeW91IGNhbiBnbyBmb3IgZ3Jvb21pbmcgc2VydmljZXMgb2YgdGhlaXIgcGV0c1wiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IHRydWUsXHJcbiAgICBzcGVjaWZpY2F0aW9uczogW10sXHJcbiAgICByb3V0ZTogXCIvdXNlci9teS1zZXJ2aWNlcy9ncm9vbWluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZU5hbWU6IFwiSG91c2UgU2l0dGluZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91IGdvIHRvIHlvdXIgY2xpZW504oCZcyBob21lIGFuZCBzdGF5IG92ZXJuaWdodCwgdGFraW5nIGNhcmUgb2YgdGhlaXIgZG9ncyBhbmQgaG9tZS5cIixcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJEcm9wLUluIFZpc2l0c1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnRzIGFzayB5b3UgdG8gZG8gNjAtbWludXRlIGhvbWUgdmlzaXRzIHRvIGZlZWQgYW5kIHBsYXkgd2l0aCB0aGVpciBwZXRzXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJQZXQgRGF5IENhcmVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIllvdXIgY2xpZW504oCZcyBwZXRzIHN0YXkgYXQgeW91ciBob21lIGR1cmluZyB0aGUgZGF5LCBEcm9wIG9mZnMgYXJlIGFyb3VuZCA3LTlhbSwgYW5kIHBpY2sgdXBzIGFyZSBhcm91bmQgNC02cG0uXCIsXHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICBpbnN0YW50Qm9va2luZzogdHJ1ZSxcclxuICAgIHNwZWNpZmljYXRpb25zOiBbXSxcclxuICAgIHJvdXRlOiBcIi91c2VyL215LXNlcnZpY2VzL2JvYXJkaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBzZXJ2aWNlTmFtZTogXCJEb2cgV2Fsa2luZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnRzIHJlcXVlc3QgMzAtbWludXRlIGRvZyB3YWxrIGluIHRoZWlyIG5laWdoYm9yaG9vZFwiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IHRydWUsXHJcbiAgICBzcGVjaWZpY2F0aW9uczogW10sXHJcbiAgICByb3V0ZTogXCIvdXNlci9teS1zZXJ2aWNlcy9ib2FyZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2VydmljZU5hbWU6IFwiSG91c2UgQ2FsbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBjbGllbnTigJlzIGFzayB5b3UgdG8gYnJpbmcgdmV0ZXJpbmFyeSBjYXJlIGludG8gY2xpZW504oCZcyBob21lLlwiLFxyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgaW5zdGFudEJvb2tpbmc6IHRydWUsXHJcbiAgICBzcGVjaWZpY2F0aW9uczogW10sXHJcbiAgICByb3V0ZTogXCIvdXNlci9teS1zZXJ2aWNlcy9ib2FyZGluZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc3BvdHMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2VzOiBbXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcIlBldHMgSG9tZSBTdGF5XCIsXHJcbiAgICBsb2NhdGlvbjogXCJTaGluanVrdSBDaXR5LCBUb2t5b1wiLFxyXG4gICAgYXZhaWxhYmxlRm9yOiBbXCJEb2dcIiwgXCJDYXRcIl0sXHJcbiAgICByYXRpbmc6IFwiNC42OVwiLFxyXG4gICAgcmV2aWV3OiAxMCxcclxuICAgIHJlcGVhdGVkQ2xpZW50OiA0MyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlczogW1xyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICAgIFwiL2ltYWdlcy9pbWc5LnBuZ1wiLFxyXG4gICAgICBcIi9pbWFnZXMvaW1nOS5wbmdcIixcclxuICAgICAgXCIvaW1hZ2VzL2ltZzkucG5nXCIsXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJQZXRzIEhvbWUgU3RheVwiLFxyXG4gICAgbG9jYXRpb246IFwiU2hpbmp1a3UgQ2l0eSwgVG9reW9cIixcclxuICAgIGF2YWlsYWJsZUZvcjogW1wiRG9nXCIsIFwiQ2F0XCJdLFxyXG4gICAgcmF0aW5nOiBcIjQuNjlcIixcclxuICAgIHJldmlldzogMTAsXHJcbiAgICByZXBlYXRlZENsaWVudDogNDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZpZXdzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiRG9nZ3l0YWxlcyBIb21lIFN0YXlcIixcclxuICAgIHBsYWNlOiBcIlBldCBmcmllbmRseSBIb3RlbFwiLFxyXG4gICAgYWRkcmVzczogXCJTaGluanVrdSBDaXR5LCBUb2t5b1wiLFxyXG4gICAgcmV2aWV3OlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFxyXG4gICAgcmF0aW5nOiA0LjUsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Jldmlldy1pbWcxLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEb2dneXRhbGVzIEhvbWUgU3RheVwiLFxyXG4gICAgcGxhY2U6IFwiUGV0IGZyaWVuZGx5IEhvdGVsXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNoaW5qdWt1IENpdHksIFRva3lvXCIsXHJcbiAgICByZXZpZXc6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXHJcbiAgICByYXRpbmc6IDQsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Jldmlldy1pbWcxLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEb2dneXRhbGVzIEhvbWUgU3RheVwiLFxyXG4gICAgcGxhY2U6IFwiUGV0IGZyaWVuZGx5IEhvdGVsXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNoaW5qdWt1IENpdHksIFRva3lvXCIsXHJcbiAgICByZXZpZXc6XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXHJcbiAgICByYXRpbmc6IDMuNSxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2aWV3LWltZzEucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRvZ2d5dGFsZXMgSG9tZSBTdGF5XCIsXHJcbiAgICBwbGFjZTogXCJQZXQgZnJpZW5kbHkgSG90ZWxcIixcclxuICAgIGFkZHJlc3M6IFwiU2hpbmp1a3UgQ2l0eSwgVG9reW9cIixcclxuICAgIHJldmlldzpcclxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC5cIixcclxuICAgIHJhdGluZzogNSxcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvcmV2aWV3LWltZzEucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5kZXIgPSBbXHJcbiAgeyBsYWJlbDogXCJNYWxlXCIsIHZhbHVlOiAwIH0sXHJcbiAgeyBsYWJlbDogXCJGZW1hbGVcIiwgdmFsdWU6IDEgfSxcclxuXTtcclxuIiwiaW1wb3J0IExvY2FsaXplZFN0cmluZ3MgZnJvbSBcInJlYWN0LWxvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBlbmcgfSBmcm9tIFwiLi9lbmdcIjtcclxuXHJcbmV4cG9ydCBsZXQgc3RyaW5ncyA9IG5ldyBMb2NhbGl6ZWRTdHJpbmdzKHsgZW5nIH0pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW5nID0ge1xyXG4gIHNlYXJjaFNpdHRlcjogXCJTZWFyY2ggU2l0dGVyXCIsXHJcbiAgYmVjb21lQVNpdHRlcjogXCJCZWNvbWUgYSBTaXR0ZXJcIixcclxuICBvdXJTZXJ2aWNlczogXCJPdXIgU2VydmljZXNcIixcclxuICBzaWduVXA6IFwiU2lnbiBVcFwiLFxyXG4gIHNpZ25JbjogXCJTaWduIEluXCIsXHJcbiAgaGVscDogXCJIZWxwXCIsXHJcbiAgZXhwbG9yZTogXCJFeHBsb3JlXCIsXHJcbiAgY29tcGFueTogXCJDT01QQU5ZXCIsXHJcbiAgYWJvdXRVczogXCJBYm91dCBVc1wiLFxyXG4gIGNvbnRhY3Q6IFwiQ29udGFjdFwiLFxyXG4gIGNhcmVlcjogXCJDYXJlZXJcIixcclxuICBwcml2YWN5UG9saWN5OiBcIlByaXZhY3kgUG9saWN5XCIsXHJcbiAgdGVybXNPZlVzZXI6IFwiVGVybXMgb2YgVXNlXCIsXHJcbiAgY29va2llUG9saWN5OiBcIkNvb2tpZSBQb2xpY3lcIixcclxuICBwZXRTcG90czogXCJQZXQgU3BvdHNcIixcclxuICBibG9nczogXCJCbG9nc1wiLFxyXG4gIGZhcXM6IFwiRkFRc1wiLFxyXG4gIHNhZmV0eTogXCJTYWZldHlcIixcclxuICBuZXdzQW5kU2FmZXR5OiBcIk5ld3MgJiBFdmVudHNcIixcclxuICBuZXdzcm9vbTogXCJOZXdzcm9vbVwiLFxyXG4gIGV2ZW50c0FuZFVwZGF0ZXM6IFwiRXZlbnRzICYgVXBkYXRlXCIsXHJcbiAgc3RheUNvbm5lY3RlZDogXCJTdGF5IENvbm5lY3RlZFwiLFxyXG4gIHN1YnNjcmliZTogXCJTdWJzY3JpYmVcIixcclxuICBmb2xsb3dQZXRjYXRpb246IFwiRm9sbG93IFBldGNhdGlvblwiLFxyXG4gIGFkZFlvdXJQZXRTcG90OiBcIkFkZCBZb3VyIHBldCBzcG90XCIsXHJcbiAgYWxsUmlnaHRzUmVzZXJ2ZWQ6IFwiwqkgcGV0Y2F0aW9uLmNvbSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlwiLFxyXG4gIGxvdmVDYXJlQW5kQWxsTmVlZHNGb3JQZXRzOiBcIkxvdmUsIGNhcmUgYW5kIGFsbCBuZWVkcyBmb3IgcGV0c1wiLFxyXG4gIGJvb2tUcnVzdGVkU2l0dGVyczpcclxuICAgIFwiIEJvb2sgdHJ1c3RlZCBzaXR0ZXJzIGFuZCBkb2cgd2Fsa2VycyAmIG11Y2ggbW9yZSB3aXRoIHBldGNhdGlvbi5cIixcclxuICB5b3VyUGV0OiBcIllvdXIgcGV0OiBcIixcclxuICB5YWFQZXRMb3ZlcnM6IFwiWWFhLSEgUGV0IExvdmVyc1wiLFxyXG4gIHdlTWFkZUl0U3VwZXJFYXN5VGl0bGU6XHJcbiAgICBcIiBXZeKAmXZlIG1hZGUgaXQgc3VwZXIgZWFzeSBmb3IgeW91IHRvIO+sgW5kIGEgbG92ZWx5LHRydXN0ZWQgcGV0IHNpdHRlciwgcGV0IGJvYXJkaW5nLCBkb2cgd2Fsa2luZyAmIG11Y2ggbW9yZSBpbiB5b3VyIG5laWdoYm91cmhvb2QuXCIsXHJcbiAgcGV0Qm9hcmRpbmc6IFwiUGV0IEJvYXJkaW5nXCIsXHJcbiAgd2VNYWRlSXRTdXBlckVhenlQZXRCb2FyZGluZzpcclxuICAgIFwiV2XigJl2ZSBtYWRlIGl0IHN1cGVyIGVhc3kgZm9yIHlvdSB0byDvrIFuZCBhIGxvdmVseSx0cnVzdGVkIHBldCBzaXR0ZXIsIHBldCBib2FyZGluZy5cIixcclxuICBob3VzZVNpdHRpbmc6IFwiSG91c2UgU2l0dGluZ1wiLFxyXG4gIGRyb3BJblZpc2l0czogXCJEcm9wLUluIFZpc2l0c1wiLFxyXG4gIHBldERheUNhcmU6IFwiUGV0IERheSBDYXJlXCIsXHJcbiAgZG9nV2Fsa2luZzogXCJEb2cgV2FsbGtpbmdcIixcclxuICBob3VzZUNhbGw6IFwiSG91c2UgQ2FsbFwiLFxyXG4gIGdyb29taW5nOiBcIkdyb29taW5nXCIsXHJcbiAgYm9va1dpdGhQcm9mZXNzaW9uYWxQZXRTaXR0ZXI6XHJcbiAgICBcIkJvb2sgd2l0aCBwcm9mZXNzaW9uYWwgcGV0IHNpdHRlcnMgeW91IGNhbiB0cnVzdC5cIixcclxuICB2ZXJpZmllZFBldFNpdHRlcnM6IFwiVmVyaWZpZWQgcGV0IHNpdHRlcnNcIixcclxuICBBbGxTaXR0ZXJQYXNzQUJhc2ljQ2hlY2s6IFwiQWxsIHNpdHRlcnMgcGFzcyBhIGJhc2ljIGJhY2tncm91bmQgY2hlY2tcIixcclxuICBrbm93U2l0dGVyUGVyc29uYWxseTogXCJLbm93IHNpdHRlciBwZXJzb25hbGx5XCIsXHJcbiAgQWxsU2l0dGVyc1Byb3ZpZGU6XHJcbiAgICBcIkFsbCBzaXR0ZXJzIHByb3ZpZGUgYSBkZXRhaWxlZCBwcm9maWxlIGFuZCBwZXJzb25hbCBpbmZvcm1hdGlvblwiLFxyXG4gIENlcnRpZmllZFBldFNpdHRlcnM6IFwiQ2VydGlmaWVkIHBldCBzaXR0ZXJzXCIsXHJcbiAgQWxsU2l0dGVyc0hhdmVBbmltYWxDZXJ0aWZpY2F0aW9uczogXCJBbGwgc2l0dGVycyBoYXZlIGFuaW1hbCBjZXJ0aWZpY2F0aW9ucy5cIixcclxuICBib29rWW91clBldGNhdGlvblNpdHRlcjogXCJCb29rIHlvdXIgcGV0Y2F0aW9uIHNpdHRlciFcIixcclxuICBwZXRjYXRpb25HdWFyYW50ZWU6IFwiUGV0Y2F0aW9uIEd1YXJhbnRlZVwiLFxyXG4gIEFsbFNlcnZpY2VzQm9va2VkT25QZXRjYXRpb246XHJcbiAgICBcIkFsbCBzZXJ2aWNlcyBib29rZWQgb24gUGV0Y2F0aW9uIGFyZSBiYWNrZWQgYnkgdGhlICBQZXRjYXRpb24gR3VhcmFudGVlLlwiLFxyXG4gIHdoeUNob29zZVBldGNhdGlvbjogXCJXaHkgQ2hvb3NlIFBldGNhdGlvblwiLFxyXG4gIGZpbmRUaGVQZXJmZWN0SG91c2VLZWVwZXI6XHJcbiAgICBcIkZpbmQgdGhlIFBlcmZlY3QgSG91c2VrZWVwZXIgbmVhciB5b3VyIG5laWdoYm9yaG9vZCAgYW55dGltZS4gU2FmZXR5IGFuZCBTZWN1cml0eSBhcmUgb3VyIHRvcCBwcmlvcml0eVwiLFxyXG4gIHZlcmlmaWVkU2l0dGVyczogXCJWZXJpZmllZCBzaXR0ZXJzXCIsXHJcbiAgYWxsUGV0Y2F0aW9uU2l0dGVyc0hhdmVQYXNzZWRPdXI6XHJcbiAgICBcIkFsbCBQZXRjYXRpb24gc2l0dGVycyBoYXZlIHBhc3NlZCBvdXIgc3RyaW5nZW50IHNlbGVjdGlvbiBwcm9jZXNzIGFuZCBoYWQgdGhlaXIgaWRlbnRpdHkgdmVyaWZpZWQuXCIsXHJcbiAgcHJvZmVzc2lvbmFsQ2FyZTogXCJQcm9mZXNzaW9uYWwgQ2FyZVwiLFxyXG4gIHlvdXJQZXRzU2FmZXR5SXNPdXJUb3BQcmlvcml0eTpcclxuICAgIFwiWW91ciBwZXTigJlzIHNhZmV0eSBpcyBvdXIgdG9wIHByaW9yaXR5LiBFdmVyeSBzaXR0ZXIgaXMgd2VsbCBlcXVpcHBlZCB3aXRoIGNlcnRpZmljYXRpb25zICYgZmlyc3QtYWlkIHRyYWluaW5nLlwiLFxyXG4gIHMyNDdzdXBwb3J0OiBcIjI0Lzcgc3VwcG9ydFwiLFxyXG4gIFdlQXJlSGVyZVRvSGVscFlvdUFuZFlvdXJQZXQ6XHJcbiAgICBcIiBXZSdyZSBoZXJlIHRvIGhlbHAgeW91IGFuZCB5b3VyIHBldCB3aGVuZXZlciB5b3UgbmVlZCB1cy4gU2l0dGVycyBhbHNvIGhhdmUgYWNjZXNzIHRvIHZldGVuYXJ5IHNwZWNpYWxpc3RzLlwiLFxyXG4gIHBldGNpdGF0aW9uZm9yUGV0T3duZXJzOiBcIlBldGNhdGlvbiBmb3IgUGV0IE93bmVyc1wiLFxyXG4gIHNlYXJjaEFuZENvbm5lY3RXaXRoVHJ1c3RlZDpcclxuICAgIFwiU2VhcmNoIGFuZCBjb25uZWN0IHdpdGggdHJ1c3RlZCBwZXQgc2l0dGVycy4gSXQncyBlYXN5ICBhcyAxLCAyLCAzLlwiLFxyXG4gIGZpbmRBVmVyaWZpZWRQZXRTaXR0ZXI6IFwiRmluZCBhIHZlcmlmaWVkIHBldCBzaXR0ZXJcIixcclxuICBzZWFyY2hBbmRGaW5kRXhwZXJpZW5jZWRMb2NhbDpcclxuICAgIFwiU2VhcmNoIGFuZCBmaW5kIGV4cGVyaWVuY2VkIGxvY2FsIHBldCBzaXR0ZXJzICBuZWFyYnlcIixcclxuICBhcnJhbmdlQU1lZXRHcmVldDogXCJBcnJhbmdlIGEgbWVldCAmIGdyZWV0XCIsXHJcbiAgZ2V0VG9Lbm93WW91clNpdHRlcjogXCJHZXQgdG8ga25vdyB5b3VyIHNpdHRlciBpbiBwZXJzb24sIG9ibGlnYXRpb24tZnJlZS5cIixcclxuICBib29rU2FmZWx5T25saW5lUGF5bWVudHM6IFwiQm9vayBzYWZlbHkgb25saW5lIHBheW1lbnRzXCIsXHJcbiAgYm9va1lvdXJTaXR0ZXJUaHJvdWdoT3VyU2FmZU9ubGluZTpcclxuICAgIFwiQm9vayB5b3VyIHNpdHRlciB0aHJvdWdoIG91ciBzYWZlIG9ubGluZSBzeXN0ZW0sd2l0aCBmbGV4aWJsZSBjYW5jZWxsYXRpb25zIGFzIHBlciBzaXR0ZXJzIHBvbGljeS5cIixcclxuICBwcm9wZXJVcGRhdGVzOiBcIlByb3BlciBVcGRhdGVzXCIsXHJcbiAgb25jZUpvYkNvbXBsZXRlc1lvdUNhblJhdGU6XHJcbiAgICBcIk9uY2Ugam9iIGNvbXBsZXRlcyB5b3UgY2FuIHJhdGUgJiByZXZpZXcgeW91ciBzaXR0ZXJcIixcclxuICByYXRpbmdBbmRSZXZpZXdzOiBcIlJhdGluZyAmIFJldmlld3NcIixcclxuICBleHBsb3JlT3VyU2l0dGVyOiBcIkV4cGxvcmUgT3VyIFNpdHRlcnNcIixcclxuICBwZXRjYXRpb25Gb3JQZXRTaXR0ZXJzOiBcIlBldGNhdGlvbiBmb3IgUGV0IFNpdHRlcnNcIixcclxuICB3YW5uYUJlUGFydG5lcldpdGhVczogXCJXYW5uYSBiZSBQYXJ0bmVyIHdpdGggdXM/XCIsXHJcbiAgd2hhdEV2ZXJQZXRTZXJ2aWNlWW91UHJvdmlkZTpcclxuICAgIFwiIFdoYXRldmVyIHBldCBzZXJ2aWNlIHlvdSBwcm92aWRlLCB3ZSdsbCBmaW5kIHRoZSBwZXQgc2l0dGVyLCBncm9vbWVyLCBib2FyZGluZyBvciBkb2cgd2Fsa2VyIGpvYnMgeW91IG5lZWQuXCIsXHJcbiAgczEwMFZlcmlmaWVkam9iczogXCIxMDAlIFZlcmlmaWVkIGpvYnNcIixcclxuICBFYXN5cHJvZmlsZXZlcmlmaWNhdGlvbnM6IFwiRWFzeSBwcm9maWxlIHZlcmlmaWNhdGlvbnNcIixcclxuICBJbnN0YW50cGF5b3V0czogXCJJbnN0YW50IHBheW91dHNcIixcclxuICBMaXN0eW91cmJvYXJkaW5nOiBcIkxpc3QgeW91ciBib2FyZGluZ1wiLFxyXG4gIEJlY29tZWFwZXRzaXR0ZXI6IFwiQmVjb21lIGEgcGV0IHNpdHRlclwiLFxyXG4gIHVwZGF0ZVdoZW5JTW92ZVRoZU1hcDogXCJVcGRhdGUgd2hlbiBJIG1vdmUgdGhlIG1hcFwiLFxyXG4gIFNhdmVTZWFyY2g6IFwiU2F2ZSBTZWFyY2hcIixcclxuICBhcHBseTogXCJBcHBseVwiLFxyXG5cclxuICBtb3JlOiBcIk1vcmVcIixcclxuICBBbGxQcmljZXM6IFwiQWxsIFByaWNlc1wiLFxyXG4gIEhvd21hbnlwZXRzOiBcIkhvdyBtYW55IHBldHM/XCIsXHJcbiAgRG9nc2l6ZTogXCJEb2cgc2l6ZShsYnMpXCIsXHJcbiAgUGV0dHlwZXM6IFwiUGV0IHR5cGUocylcIixcclxuICBIb3dvZnRlbnlvdXdhbnRzZXJ2aWNlOiBcIkhvdyBvZnRlbiB5b3Ugd2FudCBzZXJ2aWNlP1wiLFxyXG4gIENoZWNrX291dDogXCJDaGVjay1vdXRcIixcclxuICBDaGVja19pbjogXCJDaGVjay1pblwiLFxyXG4gIFBldGNhdGlvblZlcmlmaWVkOiBcIlBldGNhdGlvbiBWZXJpZmllZFwiLFxyXG4gIFBldGNhdGlvbk5vdFZlcmlmaWVkOiBcIlBldGNhdGlvbiBub3QgVmVyaWZpZWRcIixcclxuICBPbmxpbmVub3c6IFwiT25saW5lIG5vd1wiLFxyXG4gIFBldHN0YWtlbmNhcmU6IFwiUGV0cyB0YWtlbiBjYXJlXCIsXHJcbiAgSGFwcHlDdXN0b21lcnM6IFwiSGFwcHkgQ3VzdG9tZXJzXCIsXHJcbiAgUmVoaXJlcmF0ZTogXCJSZWhpcmUgcmF0ZVwiLFxyXG4gIEV4cGVyaWVuY2U6IFwiRXhwZXJpZW5jZVwiLFxyXG4gIE15cGV0czogXCJNeSBwZXRzXCIsXHJcbiAgQWJvdXRwbGFjZTogXCJBYm91dCBwbGFjZVwiLFxyXG4gIEFkZGl0aW9uYWxTa2lsbHM6IFwiQWRkaXRpb25hbCBTa2lsbHNcIixcclxuICBSZXZpZXdzOiBcIlJldmlld3NcIixcclxuICBPdmVyYWxscmF0aW5nOiBcIk92ZXJhbGwgcmF0aW5nXCIsXHJcbiAgQ2xlYW5saW5lc3M6IFwiQ2xlYW5saW5lc3NcIixcclxuICBBY2N1cmFjeTogXCJBY2N1cmFjeVwiLFxyXG4gIENvbW11bmljYXRpb246IFwiQ29tbXVuaWNhdGlvblwiLFxyXG4gIExvY2F0aW9uOiBcIkxvY2F0aW9uXCIsXHJcbiAgVmFsdWU6IFwiVmFsdWVcIixcclxuICBBdmFpbGFiaWxpdHk6IFwiQXZhaWxhYmlsaXR5XCIsXHJcbiAgQXZhaWxhYmxlOiBcIkF2YWlsYWJsZVwiLFxyXG4gIFVuYXZhaWxhYmxlOiBcIlVuYXZhaWxhYmxlXCIsXHJcbiAgQm9hcmRpbmdDYW5jZWxsYXRpb25wb2xpY3k6IFwiQm9hcmRpbmcgQ2FuY2VsbGF0aW9uIHBvbGljeVwiLFxyXG4gIEV4dHJhaW5mb2Fib3V0bG9jYWxpdHk6IFwiRXh0cmEgaW5mbyBhYm91dCBsb2NhbGl0eVwiLFxyXG4gIERhc2hib2FyZDogXCJEYXNoYm9hcmRcIixcclxuICBSZXNlcnZhdGlvbnM6IFwiUmVzZXJ2YXRpb25zXCIsXHJcbiAgTXlwcm9maWxlOiBcIk15IHByb2ZpbGVcIixcclxuICBNeVNlcnZpY2VzOiBcIk15IFNlcnZpY2VzXCIsXHJcbiAgRmF2b3VyaXRlU2l0dGVyczogXCJGYXZvdXJpdGUgU2l0dGVyc1wiLFxyXG4gIE15c3BvdHM6IFwiTXkgc3BvdHNcIixcclxuICBQYXNzd29yZEFuZFNlY3VyaXR5OiBcIlBhc3N3b3JkICYgU2VjdXJpdHlcIixcclxuICBQYXltZW50c0FuZHBheW91dHM6IFwiUGF5bWVudHMgJiBwYXlvdXRzXCIsXHJcbiAgUGF5bWVudGhpc3Rvcnk6IFwiUGF5bWVudCBoaXN0b3J5XCIsXHJcbiAgR2xvYmFscHJlZmVyZW5jZXM6IFwiR2xvYmFsIHByZWZlcmVuY2VzXCIsXHJcbiAgUG9pbnRzQW5kY291cG9uOiBcIlBvaW50cyAmIGNvdXBvblwiLFxyXG4gIFRvdGFsQm9va2luZ3M6IFwiVG90YWwgQm9va2luZ3NcIixcclxuICBXZWVrOiBcIldlZWtcIixcclxuICBUb3RhbEVhcm5pbmdzOiBcIlRvdGFsIEVhcm5pbmdzXCIsXHJcbiAgVG90YWxSZWZlcnJhbDogXCJUb3RhbCBSZWZlcnJhbFwiLFxyXG4gIExhdGVzdEJvb2tpbmdSZXF1ZXN0czogXCJMYXRlc3QgQm9va2luZyBSZXF1ZXN0c1wiLFxyXG4gIFZpZXdBbGw6IFwiVmlldyBBbGxcIixcclxuICBGcm9tOiBcIkZyb21cIixcclxuICBUbzogXCJUb1wiLFxyXG4gIFRvdGFsOiBcIlRvdGFsXCIsXHJcbiAgQWNjZXB0OiBcIkFjY2VwdFwiLFxyXG4gIFBlbmRpbmc6IFwiUGVuZGluZ1wiLFxyXG4gIE1ha2VQYXltZW50OiBcIk1ha2UgcGF5bWVudFwiLFxyXG4gIEVkaXQ6IFwiRWRpdFwiLFxyXG4gIFJlbW92ZTogXCJSZW1vdmVcIixcclxuICBNZWV0aW5nUmVxdWVzdHM6IFwiTWVldGluZyBSZXF1ZXN0c1wiLFxyXG4gIE15UG9ydGZvbGlvOiBcIk15IFBvcnRmb2xpb1wiLFxyXG4gIGRlbGV0ZVBldDogXCJEZWxldGUgcGV0XCIsXHJcbiAgYXJlWW91U3VyZTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gIGFkZEF2YWlsYWJpbGl0eTogXCJBZGQgYXZhaWxhYmlsaXR5XCIsXHJcbiAgQWRkbW9yZWltYWdlczogXCIgQWRkIG1vcmUgaW1hZ2VzXCIsXHJcbiAgTmV3c0ZlZWRzOiBcIk5ld3MgRmVlZHNcIixcclxuICBFeGNlbGxlbnQ6IFwiRXhjZWxsZW50XCIsXHJcbiAgVmlld1Byb2ZpbGU6IFwiVmlldyBQcm9maWxlXCIsXHJcbiAgRXhwbG9yZWFtYXppbmdwbGFjZXM6IFwiIEV4cGxvcmUgYW1hemluZyBwbGFjZXMgdG8gdmlzaXQgd2l0aCB5b3VyIHBldHNcIixcclxuICBQZXRjYXJlOiBcIlBldGNhcmVcIixcclxuICBTZWVhbGw6IFwiU2VlIGFsbFwiLFxyXG4gIEttc2Zyb215b3VyY3VycmVudGxvY2F0aW9uOiBcImZyb20geW91ciBjdXJyZW50IGxvY2F0aW9uXCIsXHJcbiAgcmVzcG9uc2VyYXRlOiBcInJlc3BvbnNlIHJhdGVcIixcclxuICBTZWVhdmFpbGFiaWxpdHk6IFwiU2VlIGF2YWlsYWJpbGl0eVwiLFxyXG4gIFNlZUFkZGl0aW9uYWxTZXJ2aWNlc1JhdGVzOiBcIlNlZSBBZGRpdGlvbmFsIFNlcnZpY2VzICYgcmF0aW5nQW5kUmV2aWV3c1wiLFxyXG4gIEFkZHJlc3M6IFwiQWRkcmVzc1wiLFxyXG4gIENsaWVudDogXCJDbGllbnRcIixcclxuICBNZWV0YXQ6IFwiTWVldCBhdFwiLFxyXG4gIFJlamVjdDogXCJSZWplY3RcIixcclxuICBDYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgUmVqZWN0ZWQ6IFwiUmVqZWN0ZWRcIixcclxuICBQYXltZW50OiBcIlBheW1lbnRcIixcclxuICBCYXNpY2luZm86IFwiQmFzaWMgaW5mb1wiLFxyXG4gIEFkZHJlc3NJbmZvOiBcIkFkZHJlc3MgSW5mb1wiLFxyXG4gIERlZmF1bHRhdmFpbGFiaWxpdHk6IFwiRGVmYXVsdCBhdmFpbGFiaWxpdHlcIixcclxuICBNb25kYXk6IFwiTW9uZGF5XCIsXHJcbiAgVHVlc2RheTogXCJUdWVzZGF5XCIsXHJcbiAgV2VkbmVzZGF5OiBcIldlZG5lc2RheVwiLFxyXG4gIFRodXJzZGF5OiBcIlRodXJzZGF5XCIsXHJcbiAgRnJpZGF5OiBcIkZyaWRheVwiLFxyXG4gIEFkZHNsb3Q6IFwiQWRkIHNsb3RcIixcclxuICBTYXR1cmRheTogXCJTYXR1cmRheVwiLFxyXG4gIFNhdmU6IFwiU2F2ZVwiLFxyXG4gIEhvbWVBZGRyZXNzTGluZTogXCJIb21lIEFkZHJlc3MgTGluZVwiLFxyXG4gIEFwdEhvdXNlTm86IFwiQXB0Li9Ib3VzZSBOby5cIixcclxuICBDaXR5OiBcIkNpdHlcIixcclxuICBTdGF0ZW9ycHJvdmluY2U6IFwiU3RhdGUgb3IgcHJvdmluY2VcIixcclxuICBaSVBwb3N0YWxwb3N0Y29kZTogXCJaSVAvcG9zdGFsL3Bvc3Rjb2RlXCIsXHJcbiAgRnVsbG5hbWU6IFwiRnVsbCBuYW1lXCIsXHJcbiAgRW1haWxhZGRyZXNzOiBcIkVtYWlsIGFkZHJlc3NcIixcclxuICBlbnRlckVtYWlsQWRkcmVzczogJ0VudGVyIHlvdXIgcmVnaXN0ZXJlZCBlbWFpbCBhZGRyZXNzJyxcclxuICBlbnRlck90cDogJ0VudGVyIE9UUCcsXHJcbiAgZW50ZXJOZXdQYXNzd29yZDogJ0VudGVyIG5ldyBwYXNzd29yZCcsXHJcbiAgZW50ZXJPbGRQYXNzd29yZDogJ0VudGVyIGN1cnJlbnQgcGFzc3dvcmQnLFxyXG4gIGVudGVyQ29uZmlybVBhc3N3b3JkOiAnRW50ZXIgY29uZmlybSBwYXNzd29yZCcsXHJcbiAgb3RwOiAnT1RQJyxcclxuICBuZXdQYXNzd29yZDogJ05ldyBQYXNzd29yZCcsXHJcbiAgb2xkUGFzc3dvcmQ6ICdPbGQgUGFzc3dvcmQnLFxyXG4gIGNvbmZpcm1QYXNzd29yZDogJ0NvbmZpcm0gUGFzc3dvcmQnLFxyXG5cclxuICBDb250YWN0bnVtYmVyOiBcIkNvbnRhY3QgbnVtYmVyXCIsXHJcbiAgQmlydGhkYXRlOiBcIkJpcnRoIGRhdGVcIixcclxuICBhZGRTZXJ2aWNlRmlyc3Q6IFwiWW91IG5lZWQgdG8gYWRkIGEgc2VydmljZSBmaXJzdCBcIixcclxuICBQcm9maWxldmVyaWZpY2F0aW9uOiBcIlByb2ZpbGUgdmVyaWZpY2F0aW9uXCIsXHJcbiAgdXBsb2FkSW1hZ2VUZXh0OlxyXG4gICAgXCJVcGxhb2QgeW91ciBJRCBpbWFnZXMgdG8gdmVyaWZ5IHlvdXIgcHJvZmlsZSwgbWFrZSBzdXJlIHRoZSBkZWF0aXNsIHlvdSBlbnRlcmQgb24geW91ciBwcm9maWxlIHNob3VsZCBtYXRjaCB0aGUgaW5mb3JtYXRpb24gaW4gSUQgY2FyZFwiLFxyXG4gIFNlbGVjdElEY2FyZHR5cGU6IFwiU2VsZWN0IElEIGNhcmQgdHlwZVwiLFxyXG4gIFBhc3Nwb3J0OiBcIlBhc3Nwb3J0XCIsXHJcbiAgVmVyaWZ5bXlwcm9maWxlOiBcIlZlcmlmeSBteSBwcm9maWxlXCIsXHJcbiAgTGlzY2Vuc2V2ZXJpZmljYXRpb246IFwiTGlzY2Vuc2UgdmVyaWZpY2F0aW9uXCIsXHJcbiAgdXBsb2FkbGlzY2Vuc2VUZXh0OlxyXG4gICAgXCJVcGxhb2QgeW91ciBsaXNjZW5zZSBpbWFnZXMgdG8gdmVyaWZ5IHRoYXQgeW91IGFyZSBhY2VydGlmaWVkIHNpdHRlciwgdGhlc2UgbGlzY2Vuc2VzIHdpbGwgYmUgdmVyaWZpZWQgYnkgb3VyIHRlYW0gZm9yIHRoZSBzYWZ0ZXkgb2YgcGV0cy5cIixcclxuICBBZGRuZXdwZXQ6IFwiQWRkIG5ldyBwZXRcIixcclxuICBJaGF2ZTogXCJJIGhhdmVcIixcclxuICBEb2c6IFwiRG9nXCIsXHJcbiAgQ2F0OiBcIkNhdFwiLFxyXG4gIEJpcmRzOiBcIkJpcmRzXCIsXHJcbiAgUmVwdGlsZXM6IFwiUmVwdGlsZXNcIixcclxuICBTbWFsbGFuaW1hbHM6IFwiU21hbGwgYW5pbWFsc1wiLFxyXG4gIE5hbWU6IFwiTmFtZVwiLFxyXG4gIFdlaWdodDogXCJXZWlnaHRcIixcclxuICBBZ2U6IFwiQWdlXCIsXHJcbiAgQnJlYWQ6IFwiQnJlYWRcIixcclxuICBTZXg6IFwiU2V4XCIsXHJcbiAgV2hpY2hzZXJ2aWNlc3dvdWxkeW91bGlrZXRvb2ZmZXI6IFwiV2hpY2ggc2VydmljZXMgd291bGQgeW91IGxpa2UgdG8gb2ZmZXJcIixcclxuICBTZXRzZXJ2aWNlc3RvY2F0aXZlOlxyXG4gICAgXCJTZXQgc2VydmljZXMgdG8gY2F0aXZlIHRoYXQgeW91IHdhbnQgdG8gYXBwZWFyIGluIHRoZSBzZWFyY2ggYW5kIHJlY2VpdmUgbmV3IGJ1c2luZXNzIGZvci4gVXNlIGF3YXkgbW9kZSB3aGVuIHlvdSBhcmUgb24gdmFjYXRpb24sIG9yIGNhbuKAmXQgcmVzcG9uZCB0byBuZXcuIHJlcXVlc3RzXCIsXHJcbiAgU2F2ZWFuZENvbnRpbnVlOiBcIlNhdmUgJiBDb250aW51ZVwiLFxyXG4gIEFDVElWRTogXCJBQ1RJVkVcIixcclxuICBJTlNUQU5UQk9PS0lORzogXCJJTlNUQU5UIEJPT0tJTkdcIixcclxuICBNYW5hZ2U6IFwiTWFuYWdlXCIsXHJcbiAgQWxsc2VydmljZXM6IFwiQWxsIHNlcnZpY2VzXCIsXHJcbiAgQm9hcmRpbmc6IFwiQm9hcmRpbmdcIixcclxuICBTZXJ2aWNlOiBcIlNlcnZpY2VcIixcclxuICBXaGF0aXM6IFwiV2hhdCBpc1wiLFxyXG4gIG9uUGV0Y2F0aW9uOiBcIm9uIFBldGNhdGlvbj9cIixcclxuICBTZXJ2aWNlQW5kRmVlczogXCJTZXJ2aWNlICYgRmVlc1wiLFxyXG4gIFByZWZlcmVuY2VzOiBcIlByZWZlcmVuY2VzXCIsXHJcbiAgRGlzY291bnRzOiBcIkRpc2NvdW50c1wiLFxyXG4gIFNwZWNpYWxkaXNjb3VudGZvcnlvdXJndWVzdHM6IFwiU3BlY2lhbCBkaXNjb3VudCBmb3IgeW91ciBndWVzdHNcIixcclxuICBvZmZvbmZpcnN0Ym9va2luZ3dpdGh5b3U6IFwiMjAlIG9mZiBvbiBmaXJzdCBib29raW5nIHdpdGggeW91XCIsXHJcbiAgQWxsb3dvZm9uYm9va2luZ2Ftb3VudDpcclxuICAgIFwiIEFsbG93IDIwJSBvZiBvbiBib29raW5nIGFtb3VudCBmb3IgdGhlIGZpcnN0IHRpbWUgZ3Vlc3RzLiBUaGlzIG9mZmVycyBjYW4gYXR0cmFjdCBuZXcgZ3Vlc3RzIGFuZCBoZWxwIHlvdSB0byBlYXJuIG1vcmUgcG9pbnRzIGFuZCByZXZpZXdzXCIsXHJcbiAgTm9vZmZlcm9udGhpc3NlcnZpY2U6IFwiTm8gb2ZmZXIgb24gdGhpcyBzZXJ2aWNlXCIsXHJcbiAgTGVuZ3Rob2ZzdGF5ZGlzY291bnQ6IFwiTGVuZ3RoLW9mLXN0YXkgZGlzY291bnRcIixcclxuICBXZWVrbHlkaXNjb3VudDogXCJXZWVrbHkgZGlzY291bnRcIixcclxuICBUaGlzZGlzY291bnR3aWxsYXBwbHl0b2FueXJlc2VydmF0aW9uOlxyXG4gICAgXCJUaGlzIGRpc2NvdW50IHdpbGwgYXBwbHkgdG8gYW55IHJlc2VydmF0aW9uIG9mIDcgdG8gMTIgbmlnaHRzXCIsXHJcbiAgTW9udGhseWRpc2NvdW50OiBcIiBNb250aGx5IGRpc2NvdW50XCIsXHJcbiAgWW91cmF2YWlsYWJpbGl0eXdoaWxlcGV0aXNhdGJvYXJkaW5nOlxyXG4gICAgXCJZb3VyIGF2YWlsYWJpbGl0eSB3aGlsZSBwZXQgaXMgYXQgYm9hcmRpbmdcIixcclxuICBZb3VjYW5zZWxlY3Rmcm9tdGhlb3B0aW9uc3BhcnRzOlxyXG4gICAgXCJZb3UgY2FuIHNlbGVjdCBmcm9tIHRoZSBvcHRpb25zIHBhcnQtdGltZSAmIGZ1bGx0aW1lIHNlbGVjdGluZyBmdWxsLXRpbWUgbWVhbnMgeW91IGFyZSBhdmFpbGFibGUgYWxsIHRoZSB0aW1lIGF0IGhvbWUgd2hlbiBib2FyZGluZyB0aGUgcGV0LlwiLFxyXG4gIHdoZW5ob3N0aW5ncGV0c2lueW91cmhvbWVob3dmcmVxdWVudGx5Y2FueW91cHJvdmlkZWJyZWFrczpcclxuICAgIFwiV2hlbiBob3N0aW5nIHBldHMgaW4geW91ciBob21lLCBob3cgZnJlcXVlbnRseSBjYW4geW91IHByb3ZpZGUgYnJlYWtzP1wiLFxyXG4gIGhvd2ZyZXF1ZW50bHljYW55b3Vwcm92aWRlcG90dHlicmVha3M6XHJcbiAgICBcIldoZW4gaG9zdGluZyBwZXRzIGluIHlvdXIgaG9tZSwgaG93IGZyZXF1ZW50bHkgY2FuIHlvdSBwcm92aWRlIHBvdHR5IGJyZWFrcywgb3Igd2Fsa3MsIG9yIGZlZWRzIGluIGNhc2UuXCIsXHJcbiAgQ2FueW91cGlja3VwcGV0ZnJvbWNsaWVudHBsYWNlOiBcIkNhbiB5b3UgcGlja3VwIHBldCBmcm9tIGNsaWVudOKAmXMgcGxhY2U/XCIsXHJcbiAgcGV0VHlwZTogXCJQZXQgdHlwZVwiLFxyXG4gIHNlcnZpY2VUeXBlOiBcIlNlcnZpY2UgVHlwZVwiLFxyXG4gIFdlbGNvbWVhZ2FpbjogXCJXZWxjb21lIGFnYWluXCIsXHJcbiAgUmVtZW1iZXJtZTogXCJSZW1lbWJlciBtZVwiLFxyXG4gIEZvcmdvdHBhc3N3b3JkOiBcIkZvcmdvdCBwYXNzd29yZD9cIixcclxuICByZXNlbmQ6IFwiUmVzZW50XCIsXHJcbiAgTG9naW46IFwiTG9naW5cIixcclxuICBvcjogXCJvclwiLFxyXG4gIENvbnRpbnVld2l0aEZhY2Vib29rOiBcIkNvbnRpbnVlIHdpdGggRmFjZWJvb2tcIixcclxuICBDb250aW51ZXdpdGhHb29nbGU6IFwiQ29udGludWUgd2l0aCBHb29nbGVcIixcclxuICBDb250aW51ZXdpdGhUd2l0dGVyOiBcIkNvbnRpbnVlIHdpdGggVHdpdHRlclwiLFxyXG4gIENvbnRpbnVld2l0aExpbmU6IFwiQ29udGludWUgd2l0aCBMaW5lXCIsXHJcbiAgRG9udGhhdmVhbmFjY291bnQ6IFwiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50ID8gXCIsXHJcbiAgUmVnaXN0ZXJub3c6IFwiUmVnaXN0ZXIgbm93XCIsXHJcbiAgQ3JlYXRleW91cmZyZWVhY2NvdW50dG9kYXk6IFwiQ3JlYXRlIHlvdXIgZnJlZSBhY2NvdW50IHRvZGF5XCIsXHJcbiAgRmlyc3RuYW1lOiBcIkZpcnN0IG5hbWVcIixcclxuICBMYXN0bmFtZTogXCJMYXN0IG5hbWVcIixcclxuICBEYXRlb2ZCaXJ0aDogXCJEYXRlIG9mIEJpcnRoXCIsXHJcbiAgcmVnaXN0ZXJUZXJtOlxyXG4gICAgXCIsIGNvbmZpcm0gdGhhdCBJIGFtIDEzIHllYXJzIG9mIGFnZSBvciBvbGRlciwgYW5kIGNvbnNlbnQgdG8gcmVjZWl2aW5nIGVtYWlsIGNvbW11bmljYXRpb25cIixcclxuICBKb2lubm93OiBcIkpvaW4gbm93XCIsXHJcbiAgQWxyZWFkeWhhdmVhbmFjY291bnQ6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQgPyBcIixcclxuICBGb3Jnb3R5b3VycGFzc3dvcmQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIsXHJcbiAgUmVzZXR5b3VycGFzc3dvcmQ6IFwiRm9yZ290IHlvdXIgcGFzc3dvcmQ/XCIsXHJcbiAgZm9yZ290UGFzc3dvcmRJbnN0cnVjdGlvbjpcclxuICAgIFwiVG8gcmVzZXQgeW91ciBwYXNzd29yZCBlbnRlciB5b3VyIHJlZ2lzdGVyZWQgZW1haWwgYWRkcmVzcywgd2XigJlsbCBzZW5kIGFuIGVtYWlsIHdpdGggbGluayB0byByZXNldCB5b3UgcGFzc3dvcmRcIixcclxuICByZXNldFBhc3N3b3JkSW5zdHJ1Y3Rpb246IFwiQW4gb3RwIGlzIHNlbnQsIHRvIHByb3ZpZGVkIGVtYWlsIGFkZHJlc3MsIHBsZWFzZSB2ZXJpZnkgYW5kIHJlc2V0IHlvdXIgcGFzc3dvcmRcIixcclxuICBTdWJtaXQ6IFwiU3VibWl0XCIsXHJcbiAgcmVzZXRQYXNzd29yZDogXCJSZXNldCBQYXNzd29yZFwiLFxyXG4gIEJvb2tpbmdieW1lOiBcIkJvb2tpbmcgYnkgbWVcIixcclxuICBCb29raW5nZm9ybWU6IFwiQm9va2luZyBmb3IgbWVcIixcclxuICBSZXF1ZXN0YnltZTogXCJSZXF1ZXN0IGJ5IG1lXCIsXHJcbiAgUmVxdWVzdGZvcm1lOiBcIiBSZXF1ZXN0IGZvciBtZVwiLFxyXG4gIFNpdHRlcnJlc2VydmF0aW9uczogXCJTaXR0ZXIgcmVzZXJ2YXRpb25zXCIsXHJcbiAgQ2xpZW50cmVzZXJ2YXRpb25zOiBcIkNsaWVudCByZXNlcnZhdGlvbnNcIixcclxuICBNeUZhdm91cml0ZXM6IFwiTXkgRmF2b3VyaXRlc1wiLFxyXG4gIE15UmV2aWV3czogXCJNeSBSZXZpZXdzXCIsXHJcbiAgU3BvdHM6IFwiU3BvdHNcIixcclxuICBBZGRuZXdzcG90OiBcIkFkZCBuZXcgc3BvdFwiLFxyXG4gIEF2YWlsYWJsZWZvcjogXCJBdmFpbGFibGUgZm9yXCIsXHJcbiAgUmVwZWF0Q2xpZW50czogXCJSZXBlYXQgQ2xpZW50c1wiLFxyXG4gIFNvcnRieTogXCJTb3J0IGJ5XCIsXHJcbiAgUmVjZW50bHlBZGRlZDogXCJSZWNlbnRseSBBZGRlZFwiLFxyXG4gIENyZWF0ZW5ld3BldHNwb3Q6IFwiQ3JlYXRlIG5ldyBwZXQgc3BvdFwiLFxyXG4gIEdlbmVyOiBcIkdlbnJlXCIsXHJcbiAgR2VuZGVyOiBcIkdlbmRlclwiLFxyXG4gIGlkSW1hZ2U6IFwiSUQgaW1hZ2UgKC5qcGVnLCAuanBnLCAucG5nLCAuZG9jLCAucGRmKVwiLFxyXG4gIExpc2NlbnNlTnVtYmVyOiBcIkxpc2NlbnNlIE51bWJlclwiLFxyXG4gIHZlcmlmeU15Q2VydGlmaWNhdGU6IFwiVmVyaWZ5IG15IGNlcnRpZmljYXRlXCIsXHJcbiAgY2xpY2tUb1VwbG9hZDogXCJDbGljayB0byB1cGxhb2QgeW91clwiLFxyXG4gIFNlbGVjdHNwb3RjYXRlZ29yeTogXCJTZWxlY3Qgc3BvdCBjYXRlZ29yeVwiLFxyXG4gIGJhc2ljaW5mbzogXCJCYXNpYyBpbmZvXCIsXHJcbiAgU3BvdGltYWdlczogXCJTcG90IGltYWdlc1wiLFxyXG4gIEFkZG1vcmU6IFwiQWRkIG1vcmVcIixcclxuICBDb25maXJtOiBcIkNvbmZpcm1cIixcclxuICBEZXRhaWxlZGluZm9BbWVuaXRpZXM6IFwiRGV0YWlsZWQgaW5mbyAmIEFtZW5pdGllc1wiLFxyXG4gIFJlc2VydmF0aW9ucG9zc2libGU6IFwiUmVzZXJ2YXRpb24gcG9zc2libGVcIixcclxuICBCdWRnZXRQYXltZW50OiBcIkJ1ZGdldCAmIFBheW1lbnRcIixcclxuICBCdWRnZXQ6IFwiQnVkZ2V0XCIsXHJcbiAgQ2FyZHM6IFwiQ2FyZHNcIixcclxuICBzZXJ2aWNlQ2hyYWdlOiBcIlNlcnZpY2UgQ2hhcmdlXCIsXHJcbiAgbWV0aG9kT2ZQYXltZW50OiBcIk1ldGhvZCBvZiBQYXltZW50XCIsXHJcbiAgQmFua2luZ0luZm86IFwiQmFua2luZyBJbmZvXCIsXHJcbiAgRGVsZXRlQ2FyZDogXCJEZWxldGUgQ2FyZFwiLFxyXG4gIFNldERlZmF1bHQ6IFwiU2V0IGRlZmF1bHRcIixcclxuICBBZGRuZXdjYXJkOiBcIkFkZCBuZXcgY2FyZFwiLFxyXG4gIGJhbmtQYXltZW50OiBcIkJhbmsgUGF5bWVudFwiLFxyXG4gIEVudGVySGVyZTogXCJFbnRlciBoZXJlXCIsXHJcbiAgUmVqZWN0UmVxdWVzdDogXCJSZWplY3QgUmVxdWVzdFwiLFxyXG4gIHBhc3Nwb3J0TnVtYmVyIDpcIlBhc3Nwb3J0IE51bWJlclwiLFxyXG4gIHBheW1lbnROb3RlOlxyXG4gICAgXCIgTm90ZTogQWxsIHBheW1lbnQgbWV0aG9kIGFyZSBzZWN1cmVkIHdpdGggYWR2YW5jZWQgc2VjdXJpdHkgc3lzdGVtcyBhbmQgd2UgZG9u4oCZdCBzdG9yZSB5b3VyIGNhcmQgaW5mby5cIixcclxuICBub0NhcmRBZGRlZFRpdGxlOlwiTm8gQ2FyZHMgYXJlIGFkZGVkIHlldC5cIixcclxuICBub1Jlc2VydmF0aW9uOiBcIk5vIHJlc2VydmF0aW9uIGZvdW5kIVwiLFxyXG4gIG5vQ291cG9uczogXCJObyBjb3Vwb25zIGZvdW5kIVwiLFxyXG4gIG5vUGV0czogXCJObyBwZXRzIGZvdW5kIVwiLFxyXG4gIG5vUmVxdWVzdDogXCJObyByZXF1ZXN0cyBmb3VuZCFcIixcclxuICBub0JhbmtBZGRlZFRpdGxlOlwiTm8gQmFuayBkZXRhaWxzIGFyZSBhZGRlZCB5ZXQuXCIsXHJcbiAgYWRkQ2FyZFVzaW5nRm9ybTogXCJQbGVhc2UgYWRkIGEgY2FyZCB1c2luZyBiZWxvdyBmb3JtLlwiLFxyXG4gIGFkZEJhbmtVc2luZ0Zvcm06IFwiUGxlYXNlIGFkZCBiYW5rIGluZm8gdXNpbmcgYmVsb3cgZm9ybS5cIixcclxuICBub01zZ1lldDogXCJObyBtZXNzYWdlIHJlY2VpdmVkIHlldFwiLFxyXG4gIGVudGVyQ2FyZE51bWJlcjogXCJFbnRlciBjYXJkIG51bWJlciBoZXJlXCIsXHJcbiAgTmFtZW9uY2FyZDogXCJOYW1lIG9uIGNhcmRcIixcclxuICBzZXREZWZhdWx0Q2FyZDogXCJTZXQgYXMgZGVmYXVsdCBjYXJkXCIsXHJcbiAgQ2FyZG51bWJlcjogXCJDYXJkIG51bWJlclwiLFxyXG4gIEV4cGlyYXRpb246IFwiRXhwaXJhdGlvblwiLFxyXG4gIEFkZGNhcmQ6IFwiQWRkIGNhcmRcIixcclxuICBBZGRuZXdiYW5rYWNjb3VudDogXCJBZGQgbmV3IGJhbmsgYWNjb3VudFwiLFxyXG4gIFR5cGVvZmFjY291bnQ6IFwiVHlwZSBvZiBhY2NvdW50OlwiLFxyXG4gIFBlcnNvbmFsQWNjb3VudDogXCJQZXJzb25hbCBBY2NvdW50XCIsXHJcbiAgQnVzaW5lc3NBY2NvdW50OiBcIkJ1c2luZXNzIEFjY291bnRcIixcclxuICBCYW5rQ291bnRyeTogXCJCYW5rIENvdW50cnlcIixcclxuICBCYW5rQ3VycmVuY3k6IFwiQmFuayBDdXJyZW5jeVwiLFxyXG4gIEJhbmtOYW1lOiBcIkJhbmsgTmFtZVwiLFxyXG4gIEJyYW5jaE5hbWU6IFwiQnJhbmNoIE5hbWVcIixcclxuICBFbnRlckFjY291bnROdW1iZXI6XCJFbnRlciBBY2NvdW50IE51bWJlclwiLFxyXG4gIFJvdXRpbmdOdW1iZXI6XCJSb3V0aW5nIE51bWJlclwiLFxyXG4gIEVudGVyUm91dGluZ051bWJlcjogXCJFbnRlciBSb3V0aW5nIE51bWJlclwiLFxyXG4gIEJhbmtDb2RlOiBcIkJhbmsgQ29kZVwiLFxyXG4gIEJhbmtOYW1lSGVyZTogXCJCYW5rIG5hbWUgaGVyZVwiLFxyXG4gIEFjY291bnRIb2xkZXJOYW1lOiBcIkFjY291bnQgSG9sZGVyIE5hbWVcIixcclxuICBBY2NvdW50SG9sZGVyTmFtZUhlcmU6IFwiQWNjb3VudCBob2xkZXIgbmFtZSBoZXJlXCIsXHJcbiAgQnJhbmNoQ29kZTogXCJCcmFuY2ggQ29kZVwiLFxyXG4gIEFjY291bnROdW1iZXI6IFwiQWNjb3VudCBOdW1iZXJcIixcclxuICBBY2NvdW50VHlwZTogXCJBY2NvdW50IFR5cGVcIixcclxuICBCYW5rQWNjb3VudFR5cGU6IFwiQmFuayBBY2NvdW50IFR5cGVcIixcclxuICBBZGRuZXdhY2NvdW50OiBcIkFkZCBuZXcgYWNjb3VudFwiLFxyXG4gIEJhbmtBY2NvdW50TnVtYmVyOiBcIkJhbmsgQWNjb3VudCBOdW1iZXJcIixcclxuICBQYXltZW50SGlzdG9yeTogXCJQYXltZW50IEhpc3RvcnlcIixcclxuICBXaXRoZHJhd01vbmV5OiBcIiBXaXRoZHJhdyBNb25leVwiLFxyXG4gIEVhcm5pbmdzOiBcIkVhcm5pbmdzXCIsXHJcbiAgUGVuZGluZ0Vhcm5pbmdzOiBcIlBlbmRpbmcgRWFybmluZ3NcIixcclxuICBXaXRoZHJhd2FsczogXCJXaXRoZHJhd2Fsc1wiLFxyXG4gIFBheW1lbnRzOiBcIlBheW1lbnRzXCIsXHJcbiAgT3RoZXI6IFwiT3RoZXJcIixcclxuICBZb3VyRXhwZWN0ZWRFYXJuaW5nczogXCJZb3VyIEV4cGVjdGVkIEVhcm5pbmdzXCIsXHJcbiAgdG90YWxQYXlhYmxlQW1vdW50OiBcIlRvdGFsIHBheWFibGUgYW1vdW50XCIsXHJcbiAgQ29udGFjdG5vdzogXCJDb250YWN0IG5vd1wiLFxyXG4gIFZpZXdkZXRhaWxzOiBcIlZpZXcgZGV0YWlsc1wiLFxyXG4gIExvb2tpbmdmb3JhUGV0U3BvdDogXCJMb29raW5nIGZvciBhIFBldCBTcG90XCIsXHJcbiAgU2VhcmNoOiBcIlNlYXJjaFwiLFxyXG4gIFByb3ZpZGVzcG90aW5mb3JtYXRpb246IFwiUHJvdmlkZSBzcG90IGluZm9ybWF0aW9uXCIsXHJcbiAgUHJvdmlkZXNwb3Q6IFwiUHJvdmlkZSBzcG90XCIsXHJcbiAgaW5mb3JtYXRpb246IFwiaW5mb3JtYXRpb25cIixcclxuICBDYXRlZ29yaWVzOiBcIkNhdGVnb3JpZXNcIixcclxuICBGaW5kYmVzdHBldHNwb3RzOiBcIiBGaW5kIGJlc3QgcGV0IHNwb3RzIGZvciB5b3VyIHBldHMgdG8gc3BlbmQgYSBkYXkuXCIsXHJcbiAgUmVzdGF1cmFudENhZmU6IFwiUmVzdGF1cmFudC9DYWZlXCIsXHJcbiAgRG9ncnVuczogXCJEb2cgcnVuc1wiLFxyXG4gIFBldEdyb29taW5nOiBcIlBldCBHcm9vbWluZ1wiLFxyXG4gIExlaXN1cmVPdXRkb29yOiBcIkxlaXN1cmUgLyBPdXRkb29yXCIsXHJcbiAgUGV0ZnJpZW5kbHlIb3RlbDogXCJQZXQgZnJpZW5kbHkgSG90ZWxcIixcclxuICBQYXJrOiBcIlBhcmtcIixcclxuICBUcmF2ZWw6IFwiVHJhdmVsXCIsXHJcbiAgQW5pbWFsU2hlbHRlcjogXCJBbmltYWwgU2hlbHRlclwiLFxyXG4gIFlvdWNhbmZpbmRzcG90c2lucGxhY2VzOiBcIllvdSBjYW4gZmluZCBzcG90cyBpbiBwbGFjZXMgeW91IHdhbnQuXCIsXHJcbiAgVG9reW86IFwiVG9reW9cIixcclxuICBPc2FrYTogXCJPc2FrYVwiLFxyXG4gIEt5b3RvOiBcIkt5b3RvXCIsXHJcbiAgU2FwcG9ybzogXCJTYXBwb3JvXCIsXHJcbiAgTmFnb3lhOiBcIk5hZ295YVwiLFxyXG4gIEtvYmU6IFwiS29iZVwiLFxyXG4gIFNlbmRhaTogXCJTZW5kYWlcIixcclxuICBDaGliYTogXCJDaGliYVwiLFxyXG4gIEZlYXR1cmVkU3BvdHM6IFwiRmVhdHVyZWQgU3BvdHNcIixcclxuICBMb2FkbW9yZTogXCJMb2FkIG1vcmVcIixcclxuICBNYXJreW91cmF2YWlsYWJpbGl0eTpcclxuICAgIFwiIE1hcmsgeW91ciBhdmFpbGFiaWxpdHkgZm9yIHVzZXIgZm9yIGFsbCB5b3VyIHNlcnZpY2VzLlwiLFxyXG4gIE5vdGlmaWNhdGlvbnM6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gIG5vU2l0dGVyRm91bmQ6IFwiV2UgY291bGRuJ3QgZmluZCBhbnkgc2l0dGVycyB0aGF0IG1hdGNoZWQgeW91ciBjcml0ZXJpYS5cIixcclxuICBSZWNlaXZlbWVzc2FnZXNmcm9taG9zdHM6XHJcbiAgICBcIlJlY2VpdmUgbWVzc2FnZXMgZnJvbSBob3N0cyBhbmQgZ3Vlc3RzLCBpbmNsdWRpbmcgYm9va2luZyByZXF1ZXN0LlwiLFxyXG4gIEVtYWlsOiBcIkVtYWlsXCIsXHJcbiAgVGV4dG1lc3NhZ2U6IFwiVGV4dCBtZXNzYWdlXCIsXHJcbiAgQnJvd3Nlcm5vdGlmaWNhdGlvbjogXCJCcm93c2VyIG5vdGlmaWNhdGlvblwiLFxyXG4gIFlvdWNhbm1hcmtwaWNrdXBzZXJ2aWNlZW5hYmxlOlxyXG4gICAgXCIgWW91IGNhbiBtYXJrIHBpY2t1cCBzZXJ2aWNlIGVuYWJsZSAvIGRpc2FibGUgZm9yIGFsbCBzZXJ2aWNlIGZyb20gaGVyZVwiLFxyXG4gIFJlbWluZGVyczogXCJSZW1pbmRlcnNcIixcclxuICBSZWNlaXZlYm9va2luZ3JlbWluZGVyczpcclxuICAgIFwiUmVjZWl2ZSBib29raW5nIHJlbWluZGVycywgcmVxdWVzdHMgdG8gd3JpdGUgYSByZXZpZXcsIHByaWNpbmcgbm90aWNlLCBhbmQgb3RoZXIgcmVtaW5kZXJzIHJlbGF0ZWQgdG8geW91ciBhY3Rpdml0aWVzXCIsXHJcbiAgUHJvbW90aW9uc2FuZHRpcHM6IFwiUHJvbW90aW9ucyBhbmQgdGlwc1wiLFxyXG4gIFBob25lY2FsbHM6IFwiUGhvbmUgY2FsbHNcIixcclxuICBHZW5lcmFscHJlZmVyZW5jZXM6IFwiR2VuZXJhbCBwcmVmZXJlbmNlc1wiLFxyXG4gIExhbmd1YWdlOiBcIkxhbmd1YWdlXCIsXHJcbiAgU2V0eW91cnByZWZlcmVkbGFuZ3VhZ2Vmb3JQZXRjYXRpYW9uOlxyXG4gICAgXCJTZXQgeW91ciBwcmVmZXJlZCBsYW5ndWFnZSBmb3IgUGV0Y2F0aWFvblwiLFxyXG4gIENvdW50cnk6IFwiQ291bnRyeVwiLFxyXG4gIEN1cnJlbmN5OiBcIkN1cnJlbmN5XCIsXHJcbiAgU2VsZWN0Y3VycmVuY3lmb3JhbGx5b3VydHJhbnNhY3Rpb25zOlxyXG4gICAgXCJTZWxlY3QgY3VycmVuY3kgZm9yIGFsbCB5b3VyIHRyYW5zYWN0aW9ucyB3aXRoIFBldGNhdGlvbi5cIixcclxuICBQYXNzd29yZHNldHRpbmdzOiBcIlBhc3N3b3JkIHNldHRpbmdzXCIsXHJcbiAgV2hhdHBldHN3b3VsZHlvdXByZWZlcmZvcnRoaXNzZXJ2aWNlOlxyXG4gICAgXCJXaGF0IHBldHMgd291bGQgeW91IHByZWZlciBmb3IgdGhpcyBzZXJ2aWNlP1wiLFxyXG4gIGJvYXJkaW5nU2VydmljZWRlc2NyaXB0aW9uOlxyXG4gICAgXCJTZWxlY3QgdGhlIHBldHMgeW91IHdpbGwgYmUgd2lsbGluZyB0byBzZXJ2aWNlIGZvciBuaWdodCBib2FyZGluZy5cIixcclxuICBGbGV4aWJsZTogXCJGbGV4aWJsZVwiLFxyXG4gIE1vZGVyYXRlOiBcIk1vZGVyYXRlXCIsXHJcbiAgU3RyaWN0OiBcIlN0cmljdFwiLFxyXG4gIERveW91Y2hhcmdldHJhbnNwb3J0YXRpb25mZWU6IFwiIERvIHlvdSBjaGFyZ2UgdHJhbnNwb3J0YXRpb24gZmVlP1wiLFxyXG4gIE1pblByaWNlOiBcIk1pbiBQcmljZVwiLFxyXG4gIE1heFByaWNlOiBcIk1heCBQcmljZVwiLFxyXG4gIE1ha2Vib29raW5nd2l0aDogXCJNYWtlIGJvb2tpbmcgd2l0aFwiLFxyXG4gIEJvb2tpbmdmb3I6IFwiQm9va2luZyBmb3JcIixcclxuICBOZWVkc2l0dGVydG9waWNrdXBteXBldHM6IFwiTmVlZCBzaXR0ZXIgdG8gcGljayB1cCBteSBwZXRzXCIsXHJcbiAgUXVlc3Rpb25zOiBcIlF1ZXN0aW9uc1wiLFxyXG4gIFNlbGVjdHNraWxsczogXCJTZWxlY3Qgc2tpbGxzXCIsXHJcbiAgcmVzdGF1cmFudE5hbWU6ICdSZXN0YXVyYW50IG5hbWUnLFxyXG4gIHJldmlld3M6ICdyZXZpZXdzJyxcclxuICBhd2FyZHM6ICdBd2FyZHMnLFxyXG4gIGdlbmVyOiAnR2VucmUnLFxyXG4gIHRyYW5zcG9ydGF0aW9uOiAnVHJhbnNwb3J0YXRpb24nLFxyXG4gIHNwb3RIb2xpZGF5czogJ1Nwb3QgaG9saWRheXMnLFxyXG4gIHNlcnZpY2VDaGFyZ2VzOiAnU2VydmljZSBjaGFyZ2VzJyxcclxuICByZXNlcnZhdGlvbnM6ICdSZXNlcnZhdGlvbnMnLFxyXG4gIHNtb2tpbmc6ICdTbW9raW5nIGNlc3NhdGlvbiAvIHNtb2tpbmcnLFxyXG4gIHBhcmtpbmc6ICdQYXJraW5nJyxcclxuICBzZXJ2aWNlQW1lbml0aWVzOiAnU2VydmljZSAmIEFtZW5pdGllcycsXHJcbiAgYWRkZWRCYW5rQWNjb3VudDogXCJBZGRlZCBiYW5rIGFjY291bnRcIixcclxuICBsYW5ndWFnZXM6IFwiTGFuZ3VhZ2VzXCIsXHJcbiAgbm9vbkNoYXJnZXM6IFwiTm9vbiBjaGFyZ2VzXCIsXHJcbiAgbmlnaHRDaGFyZ2VzOiBcIk5pZ2h0IENoYXJnZXNcIixcclxuICBlbnRlckJhbmtOYW1lOiBcIkVudGVyIEJhbmsgbmFtZVwiLFxyXG4gIGJyYW5jaE5hbWU6IFwiRW50ZXIgQnJhbmNoIG5hbWVcIixcclxuICBicmFuY2hDb2RlOiBcIkVudGVyIEJyYW5jaCBjb2RlXCIsXHJcbiAgYWNjb3VudEhvbGRlck5hbWU6IFwiRW50ZXIgQWNjb3VudCBob2xkZXIgbmFtZVwiLFxyXG4gIGFjY291bnROdW1iZXI6IFwiRW50ZXIgQWNjb3VudCBudW1iZXJcIixcclxuICByb3V0aW5nTnVtYmVyOiBcIkVudGVyIFJvdXRpbmcgbnVtYmVyXCIsXHJcbiAgZW50ZXJMb2NhdGlvbjogXCJFbnRlciBMb2NhdGlvblwiLFxyXG4gIGJhbmtDb2RlOiBcIkVudGVyIEJhbmsgY29kZVwiLFxyXG4gIGVudGVyWmlwQ29kZTogXCJFbnRlciB6aXAgY29kZVwiLFxyXG4gIHBvc3RhbENvZGU6IFwiUG9zdGFsIGNvZGVcIixcclxuICBsb2NhdGlvbkthbmE6IFwiTG9jYXRpb24gS2FuYVwiLFxyXG4gIGxvY2F0aW9uS2Fuamk6IFwiTG9jYXRpb24ga2FuamlcIixcclxuICBib29rbWFya1NpdHRlcjogXCJTdWNjZXNzZnVsbHkgbWFya2VkIHNpdHRlciBhcyBmYXZvdXJpdGVcIixcclxuICB1bm1hcmtTaXR0ZXI6IFwiU3VjY2Vzc2Z1bGx5IHVubWFya2VkIHNpdHRlciBhcyBmYXZvdXJpdGVcIixcclxuICBlcnJvclVwZGF0aW5nU3RhdHVzOlwiRXJyb3IgdXBkYXRpbmcgc3RhdHVzXCIsXHJcbiAgcGF5OiBcIlBheVwiLFxyXG4gIGFjY2VwdGVkQnlTaXR0ZXI6IFwiQWNjZXB0ZWQgYnkgc2l0dGVyXCIsXHJcbiAgYWNjZXB0ZWRCeVlvdTogXCJBY2NlcHRlZCBieSB5b3VcIixcclxuICBwYXltZW50UGVuZGluZzogXCJQYXltZW50IFBlbmRpbmdcIixcclxuICBwYXltZW50RG9uZTogXCJQYWlkXCIsXHJcbiAgc3RhdHVzOiAnU3RhdHVzJyxcclxuICBwYXltZW50SW5mb3JtYXRpb246ICdQYXltZW50IEluZm9ybWF0aW9uJyxcclxuICBzZWxlY3RQYXltZW50TWV0aG9kOiBcIlNlbGVjdCBwYXltZW50IG1ldGhvZFwiLFxyXG4gIHNhdmVkQ2FyZHM6IFwiU2F2ZWQgQ2FyZHNcIixcclxuICBkb1lvdUhhdmVDb3Vwb246ICdEbyB5b3UgaGF2ZSBhIGNvdXBvbiBjb2RlID8nLFxyXG4gIGNvdXBvbkRldGFpbDogJyBFbnRlciB5b3VyIGNvdXBvbiBjb2RlIGhlcmUgdG8gYXZhaWwgZGlzY291bnQgb24geW91IGJvb2tpbmcuJyxcclxuICBjb25maXJtQm9va2luZzogJ0NvbmZpcm0gYm9va2luZycsXHJcbiAgYm9va2luZ0RldGFpbHM6ICdCb29raW5nIERldGFpbHMnLFxyXG4gIHRvdGFsQW1vdW50OiAnVG90YWwgQW1vdW50JyxcclxuICB0cmFuc3BvcnRGZWU6IFwiVHJhbnNwb3J0YXRpb24gZmVlXCIsXHJcbiAgZGlzY291bnQ6IFwiRGlzY291bnRcIixcclxuICB0YXg6ICdUYXgnLFxyXG4gIHN1YlRvdGFsOiAnU3VidG90YWwnLFxyXG4gIGJvb2tpbmdTdWNjZXNzOiAnQm9va2luZyBTdWNjZXNzZnVsJyxcclxuICBib29rZWRGb3I6ICdZb3VyIGJvb2tpbmcgZm9yICcsXHJcbiAgaXNTdWNjZXNzZnVsOiAnIGlzIHN1Y2Nlc3NmdWwuJyxcclxuICBjb21wbGV0ZWQ6ICdDb21wbGV0ZWQnLFxyXG4gIGNhbmNlbGxlZDogJ0NhbmNlbGxlZCcsXHJcbiAgYWRkaXRpb25hbFNlcnZpY2U6IFwiQWRkaXRpb25hbCBzZXJ2aWNlc1wiLFxyXG4gIHRyYW5zcG9ydGF0aW9uRmVlOiAnVHJhbnNwb3J0YXRpb24gZmVlJ1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IGNvb2tpZXMgZnJvbSAnbmV4dC1jb29raWVzJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUoZGF0YSkge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmNlbnQodmFsKSB7XHJcbiAgcmV0dXJuIHZhbCAqIDAuODtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuICB2YXIgcmUgPVxyXG4gICAgL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmljZU9iamVjdCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwZXRfdHlwZTogaWQsXHJcbiAgICBjdXN0b21fc2VydmljZXM6IFtdLFxyXG4gICAgZmVlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY2FwYWNpdHk6IDEsXHJcbiAgICAgICAgcGV0X3NpemVfaWQ6IDEsXHJcbiAgICAgICAgc2VydmljZV9jaGFyZ2U6IFwiMTAwMFwiLFxyXG4gICAgICAgIGVhcm5pbmdfYW1vdW50OiBcIjgwMFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERyb3BJblNlcnZpY2VPYmplY3QgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGV0X3R5cGU6IGlkLFxyXG4gICAgY3VzdG9tX3NlcnZpY2VzOiBbXSxcclxuICAgIGZlZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNhcGFjaXR5OiAxLFxyXG4gICAgICAgIHBldF9zaXplX2lkOiAxLFxyXG4gICAgICAgIHNlcnZpY2VfY2hhcmdlOiBcIjEwMDBcIixcclxuICAgICAgICBlYXJuaW5nX2Ftb3VudDogXCI4MDBcIixcclxuICAgICAgICBkdXJhdGlvbjogMzAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R3Jvb21pbmdTZXJ2aWNlT2JqZWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBldF90eXBlOiBpZCxcclxuICAgIGN1c3RvbV9zZXJ2aWNlczogW10sXHJcbiAgICBmZWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBncm9vbWluZ19zZXJ2aWNlX2lkOiAxLFxyXG4gICAgICAgIHNlcnZpY2VfY2hhcmdlOiBcIjEwMDBcIixcclxuICAgICAgICBlYXJuaW5nX2Ftb3VudDogXCI4MDBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb3VzZUNhbGxTZXJ2aWNlT2JqZWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBldF90eXBlOiBpZCxcclxuICAgIGN1c3RvbV9zZXJ2aWNlczogW10sXHJcbiAgICBmZWVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBtZWRpY2FsX3NlcnZpY2VfaWQ6IDEsXHJcbiAgICAgICAgc2VydmljZV9jaGFyZ2U6IFwiMTAwMFwiLFxyXG4gICAgICAgIGVhcm5pbmdfYW1vdW50OiBcIjgwMFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhbGVuZGFyU3ZnID0gKGlkKSA9PiB7XHJcbiAgdmFyIHN2ZztcclxuICBzd2l0Y2ggKGlkKSB7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIHN2ZyA9IChcclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY29sb3IxXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWxcIlxyXG4gICAgICAgICAgICBkYXRhLWljb249XCJicmllZmNhc2VcIlxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWJyaWVmY2FzZSBmYS13LTE2IGZhLTJ4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwiTTQ2NCAxMjhIMzUyVjU2YzAtMTMuMjYtMTAuNzQtMjQtMjQtMjRIMTg0Yy0xMy4yNiAwLTI0IDEwLjc0LTI0IDI0djcySDQ4Yy0yNi41MSAwLTQ4IDIxLjQ5LTQ4IDQ4djI1NmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjE3NmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4ek0xOTIgNjRoMTI4djY0SDE5MlY2NHptMjg4IDM2OGMwIDguODItNy4xOCAxNi0xNiAxNkg0OGMtOC44MiAwLTE2LTcuMTgtMTYtMTZWMjg4aDE2MHY0MGMwIDEzLjI1IDEwLjc1IDI0IDI0IDI0aDgwYzEzLjI1IDAgMjQtMTAuNzUgMjQtMjR2LTQwaDE2MHYxNDR6TTIyNCAzMjB2LTMyaDY0djMyaC02NHptMjU2LTY0SDMydi04MGMwLTguODIgNy4xOC0xNiAxNi0xNmg0MTZjOC44MiAwIDE2IDcuMTggMTYgMTZ2ODB6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjpcclxuICAgICAgc3ZnID0gKFxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xvcjJcIj5cclxuICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhbFwiIGRhdGEtaWNvbj1cImhvbWUtbGctYWx0XCIgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIlxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1ob21lLWxnLWFsdCBmYS13LTE4IGZhLTJ4XCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTU3My40OCAyMTkuOTFMMzEwLjYgOGEzNS44NSAzNS44NSAwIDAgMC00NS4xOSAwTDIuNTMgMjE5LjkxYTYuNzEgNi43MSAwIDAgMC0xIDkuNWwxNC4yIDE3LjVhNi44MiA2LjgyIDAgMCAwIDkuNiAxTDY0IDIxNi43MlY0OTZhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2VjIxNi44MmwzOC44IDMxLjI5YTYuODMgNi44MyAwIDAgMCA5LjYtMWwxNC4xOS0xNy41YTcuMTQgNy4xNCAwIDAgMC0xLjExLTkuN3pNMjQwIDQ4MFYzMjBoOTZ2MTYwem0yNDAgMEgzNjhWMzA0YTE2IDE2IDAgMCAwLTE2LTE2SDIyNGExNiAxNiAwIDAgMC0xNiAxNnYxNzZIOTZWMTkwLjkybDE4Ny43MS0xNTEuNGE2LjYzIDYuNjMgMCAwIDEgOC40IDBMNDgwIDE5MXpcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzpcclxuICAgICAgc3ZnID0gKFxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xvcjNcIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhclwiXHJcbiAgICAgICAgICAgIGRhdGEtaWNvbj1cInBlbm5hbnRcIlxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLXBlbm5hbnQgZmEtdy0xOCBmYS0yeFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZD1cIk01NDIuMyAxODMuNWMtMjEuOSA0LjgtMTA0LjcgMTQuMS0yNDYuNC02Mi44LTc0LjYtNDAuNC0xMzcuNS01MC40LTE4Ni43LTQ4QzEyMS41IDMzLjcgOTAuOSAwIDU2IDAgMjUuMSAwIDAgMjUuMSAwIDU2YzAgMjIuMyAxMy4yIDQxLjQgMzIgNTAuNFY1MDRjMCA0LjQgMy42IDggOCA4aDMyYzQuNCAwIDgtMy42IDgtOHYtNzUuNmM4MC44LTU0LjMgMTU2LjQtNTUuNyAxNjUuOC01Ni4yIDI4LjItMS40IDc0LjUtNS45IDEzNS4xLTE5IDQuNC0xIDEwOS0yNC41IDE4OC45LTEyNC43IDE2LjEtMjAuMi0xLjUtNTAuMy0yNy41LTQ1ek0zNzAuOCAzMDYuM2MtNTcuNSAxMi40LTEwMSAxNi42LTEyNy40IDE4LTY5LjYgMy41LTEyNS42IDI2LjMtMTYzLjQgNDcuOVYxMjRjNDQuMS04LjYgMTA5LjYtNi4zIDE5MyAzOC45IDEwMS40IDU0LjkgMTc3IDY5LjggMjI1LjkgNzEuNS02MS44IDU2LjYtMTI3LjQgNzEuNy0xMjguMSA3MS45elwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2g2PlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNDpcclxuICAgICAgc3ZnID0gKFxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xvcjRcIj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXByZWZpeD1cImZhbFwiXHJcbiAgICAgICAgICAgIGRhdGEtaWNvbj1cImNsb3VkLXN1bi1yYWluXCJcclxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0MCA1MTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jbG91ZC1zdW4tcmFpbiBmYS13LTIwIGZhLTJ4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwiTTI5OC4yIDQxOC4xYy03LjYtNC4zLTE3LjQtMS44LTIxLjggNmwtMzYuNiA2NGMtNC40IDcuNy0xLjcgMTcuNCA2IDIxLjggMi41IDEuNCA1LjIgMi4xIDcuOSAyLjEgNS41IDAgMTAuOS0yLjkgMTMuOS04LjFsMzYuNi02NGM0LjQtNy43IDEuNy0xNy40LTYtMjEuOHpNMTkyIDE0MGMyNi40IDAgNDggMjAgNTEuMSA0NS42IDQuOC0zLjYgOS44LTYuOSAxNS4xLTkuOSAxLjUtOC40IDMuOS0xNi41IDYuOC0yNC4zLTE0LjMtMjUuNy00MS41LTQzLjQtNzMtNDMuNC00Ni4yIDAtODMuNyAzNy42LTgzLjcgODMuOHMzNy41IDgzLjggODMuNyA4My44Yy4zIDAgLjYtLjEuOS0uMSAxLjEtMTEuNCAzLjctMjIuNCA3LjctMzIuOC0yLjguNS01LjYuOS04LjUuOS0yOC41IDAtNTEuNy0yMy4yLTUxLjctNTEuNy0uMS0yOC42IDIzLjEtNTEuOSA1MS42LTUxLjl6bS0zMS43IDE1MS43Yy0zLjYtNS4zLTkuOS04LjEtMTYuNC02LjhsLTU2IDExLjFMOTkgMjQwYzEuMi02LjQtMS40LTEyLjgtNi44LTE2LjRsLTQ3LjQtMzEuOEw5Mi4yIDE2MGM1LjQtMy42IDgtMTAuMSA2LjgtMTYuNGwtMTEuMS01NiA1NiAxMS4xYzYuNSAxLjMgMTIuOC0xLjQgMTYuNC02LjhMMTkyIDQ0LjRsMzEuOCA0Ny41YzMuNiA1LjMgMTAgOC4xIDE2LjQgNi44TDMxOS42IDgzYzguNy0xLjcgMTQuMy0xMC4xIDEyLjYtMTguOC0xLjctOC43LTEwLjMtMTQuNS0xOC44LTEyLjZsLTY4LjkgMTMuNi0zOS4yLTU4LjVjLTUuOS04LjktMjAuNi04LjktMjYuNiAwbC0zOS4xIDU4LjUtNjktMTMuN2MtNS4zLTEuMS0xMC43LjYtMTQuNCA0LjQtMy44IDMuOC01LjQgOS4yLTQuNCAxNC41bDEzLjcgNjktNTguNCAzOS4xYy00LjQgMy03LjEgNy45LTcuMSAxMy4zIDAgNS4zIDIuNyAxMC4zIDcuMSAxMy4zbDU4LjQgMzkuMS0xMy43IDY5Yy0xIDUuMy42IDEwLjcgNC40IDE0LjUgMy44IDMuOCA5IDUuNSAxNC40IDQuNGw2OC45LTEzLjcgMzkuMSA1OC41YzMuMSA0LjYgOC4yIDcuMSAxMy4zIDcuMSAzLjEgMCA2LjItLjkgOC45LTIuNyA3LjMtNC45IDkuMy0xNC45IDQuNC0yMi4ybC00NC45LTY3LjR6bTMyOS45IDEyNi40Yy03LjYtNC4zLTE3LjQtMS44LTIxLjggNmwtMzYuNiA2NGMtNC40IDcuNy0xLjcgMTcuNCA2IDIxLjggMi41IDEuNCA1LjIgMi4xIDcuOSAyLjEgNS41IDAgMTAuOS0yLjkgMTMuOS04LjFsMzYuNi02NGM0LjQtNy43IDEuNy0xNy40LTYtMjEuOHptODUuMS0yMjAuOEM1NzAgMTU4LjIgNTM2LjUgMTI4IDQ5NiAxMjhjLTguNiAwLTE3IDEuNC0yNS4yIDQuM0M0NTEuMSAxMDkuNCA0MjIuNiA5NiAzOTIgOTZjLTU2LjUgMC0xMDIuNyA0NS4zLTEwNCAxMDEuNi0zNy44IDEzLjMtNjQgNDkuMy02NCA5MC40IDAgNTIuOSA0My4xIDk2IDk2IDk2aDIyNGM1Mi45IDAgOTYtNDMuMSA5Ni05NiAwLTQxLjMtMjYuNi03Ny42LTY0LjctOTAuN3pNNTYwIDIwOC44ek01NDQgMzUySDMyMGMtMzUuMyAwLTY0LTI4LjctNjQtNjQgMC0zMC42IDIxLjgtNTcgNTItNjIuOGwxNC41LTIuOC0yLTE4Yy0uMi0xLjUtLjQtMi45LS40LTQuNCAwLTM5LjcgMzIuMy03MiA3Mi03MiAyNC4zIDAgNDYuOCAxMi4yIDYwLjIgMzIuOGw4LjEgMTIuNCAxMy03LjFjMzIuNy0xNy44IDcwLjcgOC4yIDcwLjggNDAuNGwtLjIgMTYuMiAxMi44IDIuNmMyOS44IDYgNTEuMyAzMi4zIDUxLjMgNjIuNy0uMSAzNS4zLTI4LjggNjQtNjQuMSA2NHptNDIuMiA2Ni4xYy03LjYtNC4zLTE3LjQtMS44LTIxLjggNmwtMzYuNiA2NGMtNC40IDcuNy0xLjcgMTcuNCA2IDIxLjggMi41IDEuNCA1LjIgMi4xIDcuOSAyLjEgNS41IDAgMTAuOS0yLjkgMTMuOS04LjFsMzYuNi02NGM0LjQtNy43IDEuNy0xNy40LTYtMjEuOHptLTE5MiAwYy03LjYtNC4zLTE3LjQtMS44LTIxLjggNmwtMzYuNiA2NGMtNC40IDcuNy0xLjcgMTcuNCA2IDIxLjggMi41IDEuNCA1LjIgMi4xIDcuOSAyLjEgNS41IDAgMTAuOS0yLjkgMTMuOS04LjFsMzYuNi02NGM0LjQtNy43IDEuNy0xNy40LTYtMjEuOHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDU6XHJcbiAgICAgIHN2ZyA9IChcclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY29sb3I1XCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWxcIlxyXG4gICAgICAgICAgICBkYXRhLWljb249XCJkb2ctbGVhc2hlZFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NzYgNTEyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZG9nLWxlYXNoZWQgZmEtdy0xOCBmYS0yeFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZD1cIk01NDQsMTEydjY0YTY0LDY0LDAsMCwxLTY0LDY0SDQ0OFY0ODBhMzIsMzIsMCwwLDEtMzIsMzJIMzUyYTMyLDMyLDAsMCwxLTMyLTMyVjM4NEgyMjR2OTZhMzIsMzIsMCwwLDEtMzIsMzJIMTI4YTMyLDMyLDAsMCwxLTMyLTMyVjMyMGE5NSw5NSwwLDAsMSwxMy40Ni00OC4yNkE4MCw4MCwwLDAsMSwzMiwxOTJhMTYsMTYsMCwwLDEsMzIsMCw0OC4wNSw0OC4wNSwwLDAsMCw0OCw0OGgyNy4wNUE5NS40OCw5NS40OCwwLDAsMSwxOTIsMjI0aDc5Ljk0TDM0Ljg4LDI2LjQ1YTgsOCwwLDAsMS0xLTExLjI3TDQ0LjExLDIuODhhOCw4LDAsMCwxLDExLjI3LTFMMzA0LDIwOVY0OGExNiwxNiwwLDAsMSwxNi4xMi0xNiwxNS42NywxNS42NywwLDAsMSwxMS4yLDQuNzJMMzU4LjYsNjRoNjkuNjJjMTAuOTIsMCwyMy43NCw3LjkzLDI4LjYyLDE3LjY5TDQ2NCw5Nmg2NEExNiwxNiwwLDAsMSw1NDQsMTEyWk0yODgsMjU2SDE5MmE2NC4wNyw2NC4wNywwLDAsMC02NCw2NFY0ODBoNjRWMzUyaDk2Wm0xMjgsMjYuNDgtOTYtMjRWMzUyaDMyVjQ4MGg2NFpNNTEyLDEyOEg0NDQuMjJsLTE2LTMySDM0NS4zNEwzMzYsODYuNjZWMjI5LjUybDgwLDIwVjIwOGg2NGEzMiwzMiwwLDAsMCwzMi0zMlptLTk2LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsNDE2LDEyOFpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDY6XHJcbiAgICAgIHN2ZyA9IChcclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY29sb3I2XCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWxcIlxyXG4gICAgICAgICAgICBkYXRhLWljb249XCJjdXRcIlxyXG4gICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWN1dCBmYS13LTE0IGZhLTJ4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBkPVwiTTI0OS41MiAyNTZMNDQ2LjgzIDU4LjgzYTMuOTk2IDMuOTk2IDAgMCAwIDAtNS42NWMtMTIuNS0xMi41LTMyLjc2LTEyLjUtNDUuMjUgMEwyMjQuMDYgMjMwLjU2bC00OC42NC00OC42MUMxODUuODggMTY2LjU3IDE5MiAxNDggMTkyIDEyOGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2UzAgNzQuOTggMCAxMjhzNDIuOTggOTYgOTYgOTZjMjAuMDEgMCAzOC41OC02LjEyIDUzLjk2LTE2LjZsNDguNjMgNDguNi00OC42MyA0OC42QzEzNC41OCAyOTQuMTIgMTE2LjAxIDI4OCA5NiAyODhjLTUzLjAyIDAtOTYgNDIuOTgtOTYgOTZzNDIuOTggOTYgOTYgOTYgOTYtNDIuOTggOTYtOTZjMC0yMC02LjEyLTM4LjU3LTE2LjU4LTUzLjk1bDQ4LjY0LTQ4LjYxIDE3Ny41MiAxNzcuMzhjMTIuNSAxMi41IDMyLjc2IDEyLjUgNDUuMjUgMGEzLjk5NiAzLjk5NiAwIDAgMCAwLTUuNjVMMjQ5LjUyIDI1NnpNOTYgMTkyYy0zNS4yOSAwLTY0LTI4LjcxLTY0LTY0czI4LjcxLTY0IDY0LTY0IDY0IDI4LjcxIDY0IDY0LTI4LjcxIDY0LTY0IDY0em0wIDI1NmMtMzUuMjkgMC02NC0yOC43MS02NC02NHMyOC43MS02NCA2NC02NCA2NCAyOC43MSA2NCA2NC0yOC43MSA2NC02NCA2NHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDc6XHJcbiAgICAgIHN2ZyA9IChcclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY29sb3I3XCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYWxcIlxyXG4gICAgICAgICAgICBkYXRhLWljb249XCJob3VzZVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NzYgNTEyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtaG91c2UgZmEtdy0xOCBmYS0yeFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZD1cIk01NzAuNTMsMjQyLDUxMiwxOTAuNzVWNDhhMTYsMTYsMCwwLDAtMTYtMTZINDAwYTE2LDE2LDAsMCwwLTE2LDE2Vjc4Ljc1TDI5OC41Myw0YTE2LDE2LDAsMCwwLTIxLjA2LDBMNS40NywyNDJhMTYsMTYsMCwwLDAsMjEuMDcsMjQuMDlMNjQsMjMzLjI3VjQ2NGE0OC4wNSw0OC4wNSwwLDAsMCw0OCw0OEg0NjRhNDguMDUsNDguMDUsMCwwLDAsNDgtNDhWMjMzLjI3bDM3LjQ2LDMyLjc5QTE2LDE2LDAsMCwwLDU3MC41MywyNDJaTTQ4MCw0NjRhMTYsMTYsMCwwLDEtMTYsMTZIMTEyYTE2LDE2LDAsMCwxLTE2LTE2VjIwNS4yN2wxOTItMTY4LDE5MiwxNjhabTAtMzAxLjI1LTY0LTU2VjY0aDY0Wk0yMDgsMjE4LjY3VjMyNS4zNEEyNi43NSwyNi43NSwwLDAsMCwyMzQuNjYsMzUySDM0MS4zQTI2Ljc2LDI2Ljc2LDAsMCwwLDM2OCwzMjUuMzRWMjE4LjY3QTI2Ljc1LDI2Ljc1LDAsMCwwLDM0MS4zLDE5MkgyMzQuNjZBMjYuNzQsMjYuNzQsMCwwLDAsMjA4LDIxOC42N1pNMjQwLDIyNGg5NnY5NkgyNDBaXCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA4OlxyXG4gICAgICBzdmcgPSAoXHJcbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFsXCJcclxuICAgICAgICAgICAgZGF0YS1pY29uPVwiY3V0XCJcclxuICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1jdXQgZmEtdy0xNCBmYS0yeFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZD1cIk0yNDkuNTIgMjU2TDQ0Ni44MyA1OC44M2EzLjk5NiAzLjk5NiAwIDAgMCAwLTUuNjVjLTEyLjUtMTIuNS0zMi43Ni0xMi41LTQ1LjI1IDBMMjI0LjA2IDIzMC41NmwtNDguNjQtNDguNjFDMTg1Ljg4IDE2Ni41NyAxOTIgMTQ4IDE5MiAxMjhjMC01My4wMi00Mi45OC05Ni05Ni05NlMwIDc0Ljk4IDAgMTI4czQyLjk4IDk2IDk2IDk2YzIwLjAxIDAgMzguNTgtNi4xMiA1My45Ni0xNi42bDQ4LjYzIDQ4LjYtNDguNjMgNDguNkMxMzQuNTggMjk0LjEyIDExNi4wMSAyODggOTYgMjg4Yy01My4wMiAwLTk2IDQyLjk4LTk2IDk2czQyLjk4IDk2IDk2IDk2IDk2LTQyLjk4IDk2LTk2YzAtMjAtNi4xMi0zOC41Ny0xNi41OC01My45NWw0OC42NC00OC42MSAxNzcuNTIgMTc3LjM4YzEyLjUgMTIuNSAzMi43NiAxMi41IDQ1LjI1IDBhMy45OTYgMy45OTYgMCAwIDAgMC01LjY1TDI0OS41MiAyNTZ6TTk2IDE5MmMtMzUuMjkgMC02NC0yOC43MS02NC02NHMyOC43MS02NCA2NC02NCA2NCAyOC43MSA2NCA2NC0yOC43MSA2NC02NCA2NHptMCAyNTZjLTM1LjI5IDAtNjQtMjguNzEtNjQtNjRzMjguNzEtNjQgNjQtNjQgNjQgMjguNzEgNjQgNjQtMjguNzEgNjQtNjQgNjR6XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG51bWJlcklucHV0ID0gKGV2ZW50KSA9PiB7XHJcbiAgaWYgKCEvWzAtOV0vLnRlc3QoZXZlbnQua2V5KSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YVVSTHRvRmlsZShkYXRhdXJsLCBmaWxlbmFtZSkge1xyXG4gIHZhciBhcnIgPSBkYXRhdXJsLnNwbGl0KFwiLFwiKSxcclxuICAgIG1pbWUgPSBhcnJbMF0ubWF0Y2goLzooLio/KTsvKVsxXSxcclxuICAgIGJzdHIgPSBhdG9iKGFyclsxXSksXHJcbiAgICBuID0gYnN0ci5sZW5ndGgsXHJcbiAgICB1OGFyciA9IG5ldyBVaW50OEFycmF5KG4pO1xyXG5cclxuICB3aGlsZSAobi0tKSB7XHJcbiAgICB1OGFycltuXSA9IGJzdHIuY2hhckNvZGVBdChuKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgRmlsZShbdThhcnJdLCBmaWxlbmFtZSwgeyB0eXBlOiBtaW1lIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgIGRlbGV0ZUNvb2tpZSA9IChuYW1lKSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09OyBwYXRoPS87IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVRgO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5hbWVJbml0aWFscyA9IChuYW1lKSA9PiB7XHJcbiAgbGV0IHJneCA9IG5ldyBSZWdFeHAoLyhcXHB7TH17MX0pXFxwe0x9Ky8sIFwiZ3VcIik7XHJcblxyXG4gIGxldCBpbml0aWFscyA9IFsuLi5uYW1lLm1hdGNoQWxsKHJneCldIHx8IFtdO1xyXG5cclxuICBpbml0aWFscyA9IChcclxuICAgICAgKGluaXRpYWxzLnNoaWZ0KCk/LlsxXSB8fCBcIlwiKSArIChpbml0aWFscy5wb3AoKT8uWzFdIHx8IFwiXCIpXHJcbiAgKS50b1VwcGVyQ2FzZSgpO1xyXG4gIHJldHVybiBpbml0aWFscztcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRheS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvcGxhY2VzL1N0YW5kYWxvbmVTZWFyY2hCb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9jYWxpemF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiYXhpb3MiLCJVX0FDVElWRV9CT0FSRElORyIsIlVfQUNUSVZFX0RBWV9DQVJFIiwiVV9BQ1RJVkVfRFJPUF9JTl9WSVNJVFMiLCJVX0FDVElWRV9HUk9PTUlORyIsIlVfQUNUSVZFX0hPVVNFX0NBTEwiLCJVX0FDVElWRV9IT1VTRV9TSVRUSU5HIiwiVV9BQ1RJVkVfUEVUX1dBTEtJTkciLCJVX0FERF9QRVQiLCJVX0FERF9RVUVTVElPTiIsIlVfQUREX1NLSUxMIiwiVV9BRERfU1BPVCIsIlVfQVJSQU5HX01FRVRVUCIsIlVfQk9BUkRJTkdfRElTQ09VTlRTIiwiVV9CT0FSRElOR19QRVRfU0VSVklDRV9GRUUiLCJVX0JPQVJESU5HX1BSRUZFUkVOQ0UiLCJVX0NIQU5HRV9SRVFVRVNUX1NUQVRVUyIsIlVfREVMRVRFX1BFVCIsIlVfREVMRVRFX1FVRVNUSU9OIiwiVV9ERUxFVEVfU1BPVCIsIlVfRE9HX1dBTEtJTkdfRElTQ09VTlQiLCJVX0RPR19XQUxLSU5HX0lORk8iLCJVX0RPR19XQUxLSU5HX1NFUlZJQ0VfRkVFIiwiVV9ET0dfV0FMS0lOR19TRVJWSUNFX1BSRUZFUkVOQ0UiLCJVX0RST1BfSU5fVklTSVRFU19QUkVGRVJFTkNFIiwiVV9EUk9QX0lOX1ZJU0lUU19ESVNDT1VOVFMiLCJVX0RST1BfSU5fVklTSVRTX1NFUlZJQ0VfRkVFIiwiVV9GSUxURVJFRF9BVkFJTEFCTEVfU0lUVEVSIiwiVV9HRVRfQUREUkVTUyIsIlVfR0VUX0FMTF9QRVRTIiwiVV9HRVRfQUxMX1NQT1QiLCJVX0dFVF9BVkFJTEFCSUxJVFkiLCJVX0dFVF9BVkFJTEFCSUxJVFlfQllfREFURVMiLCJVX0dFVF9BVkFJTEFCTEVfU0VSVklDRVMiLCJVX0dFVF9CQVNJQ19JTkZPIiwiVV9HRVRfQk9BUkRJTkdfSU5GTyIsIlVfR0VUX0JPQVJESU5HX1BSRVZJRVciLCJVX0dFVF9CUkVFRF9XSVRIX1RZUEUiLCJVX0dFVF9DSVRJRVMiLCJVX0dFVF9DT1VUUklFUyIsIlVfR0VUX0RBU0hCT0FSRCIsIlVfR0VUX0RPR19XQUxLSU5HX1BSRVZJRVciLCJVX0dFVF9EUk9QX0lOX1BSRVZJRVciLCJVX0dFVF9EUk9QX0lOX1ZJU0lUU19JTkZPIiwiVV9HRVRfR1JPT01JTkdfSU5GTyIsIlVfR0VUX0dST09NSU5HX1BSRVZJRVciLCJVX0dFVF9IT1VTRV9DQUxMX0lORk8iLCJVX0dFVF9IT1VTRV9DQUxMX1BSRVZJRVciLCJVX0dFVF9IT1VTRV9DQUxMX1NFUlZJQ0UiLCJVX0dFVF9IT1VTRV9TSVRUSU5HX0lORk8iLCJVX0dFVF9IT1VTRV9TSVRUSU5HX1BSRVZJRVciLCJVX0dFVF9MQU5HQVVHRVMiLCJVX0dFVF9QQVJLSU5HIiwiVV9HRVRfUEFZTUVOVF9NRVRIT0RTIiwiVV9HRVRfUEVUUyIsIlVfR0VUX1BFVF9EQVlfQ0FSRV9QUkVWSUVXIiwiVV9HRVRfUEVUX1NFUlZJQ0UiLCJVX0dFVF9QRVRfU1BPVFMiLCJVX0dFVF9RVUVTVElPTlMiLCJVX0dFVF9SRVNFUlZBVElPTl9UWVBFUyIsIlVfR0VUX1NFUlZJQ0VTIiwiVV9HRVRfU0lOR0xFX1NJVFRFUiIsIlVfR0VUX1NJTkdMRV9TUE9UIiwiVV9HRVRfU0lUVEVSX0FWQUlMQUJJTElUWSIsIlVfR0VUX1NJVFRFUl9SRVNFUlZBVElPTlMiLCJVX0dFVF9TS0lMTFMiLCJVX0dFVF9TTU9LSU5HX0NFU1NJT05TIiwiVV9HRVRfVEhSRUFEX0JPT0tJTkciLCJVX0dFVF9VU0VSX1JFU0VSVkFUSU9OUyIsIlVfR0VUX1VTRVJfU0tJTExTIiwiVV9HUk9PTUlOR19TRVJWSUNFX0RJU0NPVU5UIiwiVV9HUk9PTUlOR19TRVJWSUNFX0ZFRSIsIlVfR1JPT01JTkdfU0VSVklDRV9QUkVGRVJFTkNFIiwiVV9IT1VTRV9DQUxMX0RJU0NPVU5UIiwiVV9IT1VTRV9DQUxMX1BSRUZFUkVOQ0UiLCJVX0hPVVNFX0NBTExfU0VSVklDRV9GRUUiLCJVX0hPVVNFX1NJVFRJTkdfRElTQ09VTlRTIiwiVV9IT1VTRV9TSVRUSU5HX1BSRUZFUkVOQ0UiLCJVX0hPVVNFX1NJVFRJTkdfU0VSVklDRV9GRUUiLCJVX0lNQUdFX1VQTE9BRCIsIlVfUEVUX0FERElUSU9OQUxfUkVRVUVTVCIsIlVfUEVUX0FNT1VOVF9DQUxDVUxBVElPTiIsIlVfUEVUX0RBWV9DQVJFX0RJU0NPVU5UIiwiVV9QRVRfREFZX0NBUkVfSU5GTyIsIlVfUEVUX0RBWV9DQVJFX1BSRUZFUkVOQ0UiLCJVX1BFVF9EQVlfQ0FSRV9TRVJWSUNFX0ZFRVMiLCJVX1BFVF9TRVJWSUNFX0FWQUlBTEFCSUxJVFkiLCJVX1BFVF9TUE9UX0NBVEVHT1JJRVMiLCJVX1JBVEVfU0lUVEVSIiwiVV9SRVFVRVNUX1NJVFRFUiIsIlVfU0FWRV9BRERSRVNTIiwiVV9TQVZFX0JBU0lDX0lORk8iLCJVX1NBVkVfTE9DQUxJVFkiLCJVX1NBVkVfUE9SVEZPTElPIiwiVV9TRU5EX01FU1NBR0UiLCJVX1NFVF9BVkFJTEFCTEVfU0VSVklDRVMiLCJVX1NJTkdMRV9QRVQiLCJVX1VQREFURV9QRVQiLCJVX1VQREFURV9TUE9UIiwiVV9VUExPQURfUFJPRklMRV9QSUNUVVJFIiwiVV9VU0VSX0xPR0lOIiwiVV9VU0VSX1JFR0lTVEVSIiwiVV9BRERfQ0FSRCIsIlVfR0VUX0NBUkQiLCJVX0RFTEVURV9DQVJEIiwiVV9BRERfQkFOS19BQ0NPVU5UIiwiVV9HRVRfQkFOS19BQ0NPVU5UIiwiVV9HRVRfQkFOS19ERVRBSUxTIiwiVV9ERUxFVEVfQkFOS19BQ0NPVU5UIiwiVV9HRVRfUEVUX1NQT1RfREVUQUlMUyIsIkdPT0dMRV9QTEFDRVNfQkFTRV9VUkwiLCJHT09HTEVfUExBQ0VTX0FQSSIsIlVfVVBMT0FEX0RPQ1VNRU5UUyIsIlVfR0VUX1RSQU5TUE9SVF9DSEFSR0VTIiwiVV9BRERfVFJBTlNQT1JUX0NIQVJHRVMiLCJVX1VQREFURV9SRVFVRVNUX1NUQVRVUyIsIlVfQk9PS01BUktfU0lUVEVSIiwiVV9HRVRfUkVRVUVTVF9ERVRBSUwiLCJVX0NPTkZJUk1fUEFZTUVOVCIsIlVfUEFZTUVOVF9ISVNUT1JZIiwiVV9HRVRfRkFWT1JJVEVfU0lUVEVSIiwiVV9DSEFOR0VfTUVFVFVQX1NUQVRVUyIsIlVfR0VUX01FRVRVUFMiLCJVX0NIQVRfQUNUSU9OIiwiVV9HRVRfRkFWT1JJVEVfU1BPVCIsIlVfTUFSS19VTk1BUktfU1BPVCIsIlVfTUFLRV9DQVJEX19ERUZBVUxUIiwiVV9NQUtFX0JBTktfREVGQVVMVCIsIlVfUkVTRVRfUEFTU1dPUkQiLCJVX0NIQU5HRV9QQVNTV09SRCIsIlVfRk9SR09UX1BBU1NXT1JEIiwiVV9BUFBMWV9DT1VQT04iLCJVX1JFTU9WRV9DT1VQT04iLCJVX0dFVF9DT1VQT04iLCJVX1JFQURfU1RBVFVTIiwiVV9SRVZJRVdfU1BPVCIsIlVfR0VUX05FV1MiLCJVX0dFVF9FVkVOVCIsIlVfR0VUX1NJTkdMRV9ORVdTIiwiQ29va2llcyIsIm5leHRDb29raWUiLCJiYXNlVVJMIiwiaGVhZGVycyIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXRoIiwiYm9keSIsImN0eCIsInVybCIsImNvb2tpZXMiLCJnZXQiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsIkFQSSIsImlkIiwiYXBpVXJsIiwicmVzdWx0IiwicmVnaXN0ZXJVc2VyIiwibG9naW5Vc2VyIiwicmVzZXRQYXNzd29yZCIsImNoYW5nZVBhc3N3b3JkIiwiZm9yZ290UGFzc3dvcmQiLCJnZXREYXNoYm9hcmQiLCJnZXRCYXNpY0luZm8iLCJnZXRBZGRyZXNzIiwic2F2ZUJhc2ljSW5mbyIsInNhdmVBZGRyZXNzIiwiYWRkUXVlc3Rpb24iLCJkZWxldGVRdWVzdGlvbiIsInZhbCIsImdldFF1ZXN0aW9ucyIsImdldFNraWxscyIsImdldFVzZXJTa2lsbHMiLCJhZGRTa2lsbCIsInNhdmVMb2NhbGl0eUluZm8iLCJzYXZlUG9ydGZvbGlvIiwiZ2V0QXZhaWxhYmxlU2VydmljZXMiLCJzZXRBdmFpbGFibGVTZXJ2aWNlIiwiZ2V0QXZhaWxhYmlsaXR5IiwiZ2V0QXZhaWxhYmlsaXR5QnlEYXRlIiwiYWRkUGV0IiwiZ2V0QWxsUGV0cyIsImdldFNpbmdsZVBldHMiLCJ1cGRhdGVQZXQiLCJkZWxldGVQZXQiLCJnZXRTZXJ2aWNlIiwiYWN0aXZlQm9hcmRpbmciLCJhY3RpdmVEYXlDYXJlIiwiYWN0aXZlSG91c2VTaXR0aW5nIiwiYWN0aXZlRHJvcEluVmlzaXRzIiwiYWN0aXZlUGV0V2Fsa2luZyIsImFjdGl2ZUdyb29taW5nIiwiYWN0aXZlSG91c2VDYWxsIiwiZ2V0SG91c2VDYWxsSW5mbyIsImdldEhvdXNlQ2FsbFNlcnZpY2UiLCJob3VzZUNhbGxTZXJ2aWNlRmVlIiwiaG91c2VDYWxsUHJlZmVyZW5jZSIsImhvdXNlQ2FsbERpc2NvdW50IiwiZ2V0SG91c2VDYWxsUHJldmlldyIsImdldEdyb29taW5nU2VydmljZSIsImdldEdyb29taW5nSW5mbyIsImdyb29taW5nU2VydmljZUZlZSIsImdyb29taW5nU2VydmljZVByZWZlcm5jZSIsImdyb29taW5nU2VydmljZURpc2NvdW50IiwiZ2V0R3Jvb21pbmdQcmV2aWV3IiwiYm9hcmRpbmdTZXJ2aWNlRmVlIiwiYm9hcmRpbmdQcmVmZXJlbmNlIiwiYm9hcmRpbmdEaXNjb3VudCIsImdldEJvYXJkaW5nSW5mbyIsImdldEJvYXJkaW5nUHJldmlldyIsImdldEhvdXNlU2l0dGluZ0luZm8iLCJob3VzZVNpdHRpbmdTZXJ2aWNlRmVlIiwiaG91c2VTaXR0aW5nRGlzY291bnQiLCJob3VzZVNpdHRpbmdQcmVmZXJlbmNlIiwiZ2V0SG91c2VTaXR0aW5nUHJldmlldyIsImdldERyb3BJblZpc2l0c0luZm8iLCJkcm9wSW5WaXNpdHNTZXJ2aWNlRmVlIiwiZHJvcEluVmlzaXRQcmVmZXJlbmNlIiwiZHJvcEluVmlzaXREaXNjb3VudHMiLCJnZXREcm9wSW5WaXNpdHNQcmV2aWV3IiwiZ2V0UGV0RGF5Q2FyZUluZm8iLCJwZXREYXlDYXRlU2VydmljZUZlZSIsInBldERheUNhcmVQcmVmZXJlbmNlIiwicGV0RGF5Q2FyZURpc2NvdW50IiwiZ2V0UGV0RGF5Q2FyZVByZXZpZXciLCJnZXREb2dXYWxraW5nSW5mbyIsIkRvZ1dhbGtpbmdTZXJ2aWNlRmVlIiwiZG9nV2Fsa2luZ1ByZWZlcmVuY2UiLCJkb2dXYWxraW5nRGlzY291bnQiLCJnZXREb2dXYWxraW5nUHJldmlldyIsInBldEFkZGl0aW9uYWxTZXJ2aWNlcyIsInBldEFtb3VudENhbGN1bGF0aW9uIiwic2l0dGVyUmVxdWVzdCIsImNoYW5nZVJlcXVlc3RTdGF0dXMiLCJwZXRTZXJ2aWNlQXZhaWxhYmlsaXR5IiwiZ2V0U2l0dGVyUmVzZXJ2ZXRpb25zIiwicGFnZSIsImdldFVzZXJSZXNlcnZhdGlvbnMiLCJzZW5kTWVzc2FnZSIsImNoYXRBY3Rpb24iLCJnZXRUaHJlYWRCb29raW5nIiwiYXJyYW5nZU1lZXR1cCIsInVwZGF0ZU1lZXR1cFN0YXR1cyIsImdldE1lZXR1cFJlcXVlc3QiLCJnZXRUcmFuc3BvcnRDaGFyZ2VSZXF1ZXN0IiwiYWRkVHJhbnNwb3J0Q2hhcmdlUmVxdWVzdCIsInVwZGF0ZVJlcXVlc3RTdGF0dXMiLCJ1cGRhdGVSZWFkU3RhdHVzIiwiZ2V0Q291dGlyZXMiLCJnZXRDaXRpZXMiLCJnZXRQZXRzIiwiZ2V0QnJlZWRXaXRoVHlwZSIsInVwbG9hZEZpbGUiLCJnZXRGaWx0ZXJlZEF2aWFsYWJsZVNpdHRlciIsImdldEZhdm9yaXRlU2l0dGVycyIsInVwbG9hZFByb2ZpbGVQaWN0dXJlIiwidXBsb2FkRG9jdW1lbnQiLCJnZXRQZXRTcG90c0NhdGVnb3J5IiwiZ2V0UGV0U3BvdHMiLCJtYXJrVW5tYXJrU3BvdCIsImdldFBldFNwb3REZXRhaWxzIiwiZ2V0UGF5bWVudE1ldGhvZHMiLCJnZXRSZXNlcnZhdGlvblR5cGVzIiwiZ2V0U21va2luZ0Nlc3Npb24iLCJnZXRQYXJraW5nIiwiZ2V0TGFuZ2F1Z2VzIiwiYWRkU3BvdCIsInVwZGF0ZVNwb3QiLCJyYXRlU2l0dGVyIiwiZ2V0U2luZ2xlU2l0dGVyIiwibWFya1VubWFya1NpdHRlciIsImdldEFsbFNwb3RzIiwiZ2V0RmF2b3JpdGVTcG90cyIsImRlbGV0ZVNwb3QiLCJnZXRTaW5nbGVTcG90IiwiZ2V0U2l0dGVyQXZhaWxhYmlsaXR5IiwicmF0ZVJldmlld1Nwb3QiLCJhZGROZXdDYXJkIiwiZ2V0QWxsQ2FyZCIsImRlbGV0ZUNhcmQiLCJhZGROZXdCYW5rQWNjb3VudCIsImdldEFsbEJhbmtBY2NvdW50IiwiZ2V0QWxsQmFua0FjY291bnREZXRhaWxzIiwibWFya0NhcmRBc0RlZmF1bHQiLCJtYWtlQmFua0FzRGVmYXVsdCIsImRlbGV0ZUJhbmtBY2NvdW50IiwiZ2V0U2luZ2xlUmVxdWVzdERldGFpbCIsImNvbmZpcm1QYXltZW50IiwicGF5bWVudEhpc3RvcnkiLCJhcHBseUNvdXBvbiIsInJlbW92ZUNvdXBvbiIsImdldENvdXBvbnMiLCJ0eXBlIiwiZ2V0TmV3cyIsImdldEV2ZW50cyIsImdldFNpbmdsZU5ld3MiLCJTdWNjZXNzT3B0aW9ucyIsInBvc2l0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiY2xvc2VTdHlsZSIsIkZhaWx1cmVPcHRpb25zIiwic3RyaW5ncyIsIlJlYWN0IiwiRXh0cmFJbmZvTG9jYWxpdHkiLCJwcm9wcyIsIkV4dHJhaW5mb2Fib3V0bG9jYWxpdHkiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJsaXZlX2luX2hvdXNlIiwibm9uX3Ntb2tpbmdfaG91c2Vob2xkIiwibm9fY2hpbGRyZW5fcHJlc2VudCIsImZlbmNlZF95YXJkIiwiZG9nX290aGVyX3BldHMiLCJHYWxsZXJ5VmlldyIsImltYWdlcyIsImxlbmd0aCIsInNsaWNlIiwibWFwIiwidmFsdWUiLCJpbmRleCIsIk15UGV0cyIsIk15cGV0cyIsInBldHMiLCJwZXRfaW1hZ2UiLCJwZXRfbmFtZSIsImFnZV95ZWFyIiwiYnJlZWQiLCJ3ZWlnaHQiLCJub1BldHMiLCJ1c2VTdGF0ZSIsInJldmlld1N0YXRlRGF0YSIsIlJldmlld3MiLCJjb25zb2xlIiwibG9nIiwicmV2aWV3U3RhdGUiLCJzZXRSZXZpZXdTdGF0ZSIsInJhdGluZyIsIk92ZXJhbGxyYXRpbmciLCJDbGVhbmxpbmVzcyIsImNsZWFubGluZXNzIiwid2lkdGgiLCJBY2N1cmFjeSIsImFjY3VyYWN5IiwiQ29tbXVuaWNhdGlvbiIsImNvbW11bmljYXRpb24iLCJMb2NhdGlvbiIsImxvY2F0aW9uIiwiQ2hlY2tfaW4iLCJjaGVja0luIiwiVmFsdWUiLCJTZWxlY3QiLCJEYXlQaWNrZXIiLCJhZGREYXlzIiwiYWRkTW9udGhzIiwiaXNTYW1lRGF5IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiYXBpIiwiU2l0dGVyQXZhaWxhYmxpdHkiLCJzZXJ2aWNlcyIsInJvdXRlciIsInNldFR5cGUiLCJkaXNhYmxlZERhdGVzIiwic2V0RGlzYWJsZWREYXRlcyIsInNlbGVjdGVkU2VydmljZSIsInNldFNlbGVjdGVkU2VydmljZSIsImdldERhdGVzIiwic3RhcnREYXRlIiwic3RvcERhdGUiLCJkYXRlQXJyYXkiLCJBcnJheSIsImN1cnJlbnREYXRlIiwicHVzaCIsIkRhdGUiLCJnZXRTZXJ2aWNlQXZhaWxhYmlsaXR5Iiwic2l0dGVyX2lkIiwicXVlcnkiLCJzZXJ2aWNlX2lkIiwic2VydmljZSIsImlzX2F2YWlsYWJsZSIsInRoZW4iLCJyZXMiLCJkYXRlcyIsInJlc3BvbnNlIiwiVGltZXN0YW1wIiwibmV3RGF0YSIsImZpbHRlciIsImRhdGUiLCJmaW5kIiwiZCIsImNhdGNoIiwiZXJyb3IiLCJBdmFpbGFiaWxpdHkiLCJvcHRpb24iLCJuYW1lIiwidG9TdHJpbmciLCJiZWZvcmUiLCJBdmFpbGFibGUiLCJVbmF2YWlsYWJsZSIsIkxpbmsiLCJTaXR0ZXJQcm9maWxlSGVhZGVyIiwicmV2aWV3IiwicHJvZmlsZV9waWMiLCJpc1ZlcmlmaWVkIiwiUGV0Y2F0aW9uVmVyaWZpZWQiLCJQZXRjYXRpb25Ob3RWZXJpZmllZCIsImhpZGVfYWRkcmVzcyIsImRpc3RhbmNlIiwiS21zZnJvbXlvdXJjdXJyZW50bG9jYXRpb24iLCJyZXNwb25zZVJhdGUiLCJyZXNwb25zZXJhdGUiLCJyZXNwb25zZVdpdGhpbiIsImpvYkNvbXBsZXRpb24iLCJwYXRobmFtZSIsInNpdHRlcklkIiwic2VydmljZUlkIiwib25BdmFpbGFibGVDbGljayIsIlNlZWF2YWlsYWJpbGl0eSIsIm1hcmtVbm1hcmsiLCJpc0Zhdm9yaXRlIiwicGV0VGFrZW5DYXJlIiwiUGV0c3Rha2VuY2FyZSIsImhhcHB5Q3VzdG9tZXJzIiwiSGFwcHlDdXN0b21lcnMiLCJyZWhpcmVSYXRlIiwiUmVoaXJlcmF0ZSIsIlNpdHRlclNlcnZpY2VzIiwidiIsIlNlZUFkZGl0aW9uYWxTZXJ2aWNlc1JhdGVzIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsIkdvb2dsZU1hcCIsIk1hcmtlciIsIlN0YW5kYWxvbmVTZWFyY2hCb3giLCJyZXF1aXJlIiwiTXlNYXBDb21wb25lbnQiLCJsYXRsb25nIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibGF0bG5nIiwibGF0IiwibG5nIiwic2hvd0luZm8iLCJzZXRTaG93SW5mbyIsImluZm8iLCJzZXRJbmZvIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZU92ZXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImhhbmRsZU1vdXNlRXhpdCIsIm9uQ2hhbmdlTGF0TG5nIiwiZHJhZ2dhYmxlIiwiZSIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ0b3AiLCJsZWZ0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJpc0xvY2FsVVJMIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZGVlcENsb25lIiwiU2l0dGVyUHJvZmlsZSIsIm15UmVmIiwiY3JlYXRlUmVmIiwiaGFuZGxlQm9va21hcmtTaXR0ZXIiLCJnZXRTaXR0ZXJEZXRhaWxzIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsImlzX2Zhdm9yaXRlIiwiYWxlcnQiLCJ1bm1hcmtTaXR0ZXIiLCJib29rbWFya1NpdHRlciIsImVycm9yVXBkYXRpbmdTdGF0dXMiLCJyZW5kZXIiLCJpc192ZXJpZmllZCIsInByZWZlcmVuY2UiLCJyZXNwb25zZV9yYXRlIiwicmVzcG9uc2Vfd2l0aGluIiwiam9iX2NvbXBsZXRpb24iLCJyZWhpcmVfcmF0ZSIsImV4cGVyaWVuY2UiLCJwZXRzX2NhcmUiLCJoYXBweV9jdXN0b21lcnMiLCJvbmxpbmUiLCJvdmVyYWxsX3JhdGUiLCJ0b3RhbF9yZXZpZXciLCJwcm9maWxlX3BpY3R1cmUiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIkFib3V0cGxhY2UiLCJBZGRpdGlvbmFsU2tpbGxzIiwic2tpbGxzIiwic2tpbGwiLCJhY3RpdmVfc2VydmljZXMiLCJCb2FyZGluZ0NhbmNlbGxhdGlvbnBvbGljeSIsImNhbmNlbGxhdGlvbl9wb2xpY3kiLCJsYW5ndWFnZSIsIk51bWJlciIsIm1hcF9sYXRpdHVkZSIsIm1hcF9sb25naXR1ZGUiLCJoZWlnaHQiLCJob3VzZV9udW1iZXIiLCJzdWNjZXNzT3B0aW9ucyIsImZvbnRGYW1pbHkiLCJlcnJvck9wdGlvbnMiLCJzZXJ2aWNlRmVlT2JqZWN0IiwiY2FwYWNpdHkiLCJwZXRfc2l6ZV9pZCIsInNlcnZpY2VfY2hhcmdlIiwiZWFybmluZ19hbW91bnQiLCJjaXRpZXMiLCJsYWJlbCIsIm5ld3NBbmRFdmVudHMiLCJwb3N0ZWQiLCJwb3N0IiwiZmFxIiwiYW5zd2VyIiwic2VydmljZURhdGEiLCJwZXRUeXBlIiwicHJpY2VzIiwiU2VydmljZVRpbWUiLCJwZXRTaXplIiwiZHVyYXRpb25zIiwicGV0Q291bnQiLCJzb3J0IiwicGV0IiwibXlQZXRzIiwiYWdlIiwiaW1hZ2UiLCJyZXZpZXdPYmplY3REYXRhIiwidXNlckltYWdlIiwidXNlck5hbWUiLCJ0aW1lIiwidXNlckltYWdlcyIsInVzZXJDb3VudCIsInNpdHRlclJlc3BvbnNlIiwic2l0dGVyUmVwbHkiLCJzaXR0ZXJJbWFnZSIsInNpdHRlck5hbWUiLCJzaXR0ZXJTZXJ2aWNlcyIsInByaWNlIiwicGVyaW9kIiwic2l0dGVyU3RhdGVzIiwiYm9va2luZ0Zvck1lIiwiYm9va2luZ0J5TWUiLCJwQm9va2luZ0Zvck1lIiwicEJvb2tpbmdCeU1lIiwicFRvdGFsQm9va2luZyIsInRvdGFsRWFybmluZyIsInBUb3RhbEVhcm5pbmciLCJ0b3RhbFJlZmVycmFsIiwicFRvdGFsUmVmZXJyYWwiLCJyZXF1ZXN0c0FycmF5IiwiZnJvbSIsInRvIiwidG90YWwiLCJtZWV0aW5nUmVxdWVzdHMiLCJjbGllbnROYW1lIiwicmVzZXJ2YXRpb25SZXF1ZXN0cyIsInBheW1lbnRTdGF0dXMiLCJteVNlcnZpY2VzIiwic2VydmljZU5hbWUiLCJhY3RpdmUiLCJpbnN0YW50Qm9va2luZyIsInNwZWNpZmljYXRpb25zIiwic3BvdHMiLCJhdmFpbGFibGVGb3IiLCJyZXBlYXRlZENsaWVudCIsInJldmlld3MiLCJwbGFjZSIsImdlbmRlciIsIkxvY2FsaXplZFN0cmluZ3MiLCJlbmciLCJzZWFyY2hTaXR0ZXIiLCJiZWNvbWVBU2l0dGVyIiwib3VyU2VydmljZXMiLCJzaWduVXAiLCJzaWduSW4iLCJoZWxwIiwiZXhwbG9yZSIsImNvbXBhbnkiLCJhYm91dFVzIiwiY29udGFjdCIsImNhcmVlciIsInByaXZhY3lQb2xpY3kiLCJ0ZXJtc09mVXNlciIsImNvb2tpZVBvbGljeSIsInBldFNwb3RzIiwiYmxvZ3MiLCJmYXFzIiwic2FmZXR5IiwibmV3c0FuZFNhZmV0eSIsIm5ld3Nyb29tIiwiZXZlbnRzQW5kVXBkYXRlcyIsInN0YXlDb25uZWN0ZWQiLCJzdWJzY3JpYmUiLCJmb2xsb3dQZXRjYXRpb24iLCJhZGRZb3VyUGV0U3BvdCIsImFsbFJpZ2h0c1Jlc2VydmVkIiwibG92ZUNhcmVBbmRBbGxOZWVkc0ZvclBldHMiLCJib29rVHJ1c3RlZFNpdHRlcnMiLCJ5b3VyUGV0IiwieWFhUGV0TG92ZXJzIiwid2VNYWRlSXRTdXBlckVhc3lUaXRsZSIsInBldEJvYXJkaW5nIiwid2VNYWRlSXRTdXBlckVhenlQZXRCb2FyZGluZyIsImhvdXNlU2l0dGluZyIsImRyb3BJblZpc2l0cyIsInBldERheUNhcmUiLCJkb2dXYWxraW5nIiwiaG91c2VDYWxsIiwiZ3Jvb21pbmciLCJib29rV2l0aFByb2Zlc3Npb25hbFBldFNpdHRlciIsInZlcmlmaWVkUGV0U2l0dGVycyIsIkFsbFNpdHRlclBhc3NBQmFzaWNDaGVjayIsImtub3dTaXR0ZXJQZXJzb25hbGx5IiwiQWxsU2l0dGVyc1Byb3ZpZGUiLCJDZXJ0aWZpZWRQZXRTaXR0ZXJzIiwiQWxsU2l0dGVyc0hhdmVBbmltYWxDZXJ0aWZpY2F0aW9ucyIsImJvb2tZb3VyUGV0Y2F0aW9uU2l0dGVyIiwicGV0Y2F0aW9uR3VhcmFudGVlIiwiQWxsU2VydmljZXNCb29rZWRPblBldGNhdGlvbiIsIndoeUNob29zZVBldGNhdGlvbiIsImZpbmRUaGVQZXJmZWN0SG91c2VLZWVwZXIiLCJ2ZXJpZmllZFNpdHRlcnMiLCJhbGxQZXRjYXRpb25TaXR0ZXJzSGF2ZVBhc3NlZE91ciIsInByb2Zlc3Npb25hbENhcmUiLCJ5b3VyUGV0c1NhZmV0eUlzT3VyVG9wUHJpb3JpdHkiLCJzMjQ3c3VwcG9ydCIsIldlQXJlSGVyZVRvSGVscFlvdUFuZFlvdXJQZXQiLCJwZXRjaXRhdGlvbmZvclBldE93bmVycyIsInNlYXJjaEFuZENvbm5lY3RXaXRoVHJ1c3RlZCIsImZpbmRBVmVyaWZpZWRQZXRTaXR0ZXIiLCJzZWFyY2hBbmRGaW5kRXhwZXJpZW5jZWRMb2NhbCIsImFycmFuZ2VBTWVldEdyZWV0IiwiZ2V0VG9Lbm93WW91clNpdHRlciIsImJvb2tTYWZlbHlPbmxpbmVQYXltZW50cyIsImJvb2tZb3VyU2l0dGVyVGhyb3VnaE91clNhZmVPbmxpbmUiLCJwcm9wZXJVcGRhdGVzIiwib25jZUpvYkNvbXBsZXRlc1lvdUNhblJhdGUiLCJyYXRpbmdBbmRSZXZpZXdzIiwiZXhwbG9yZU91clNpdHRlciIsInBldGNhdGlvbkZvclBldFNpdHRlcnMiLCJ3YW5uYUJlUGFydG5lcldpdGhVcyIsIndoYXRFdmVyUGV0U2VydmljZVlvdVByb3ZpZGUiLCJzMTAwVmVyaWZpZWRqb2JzIiwiRWFzeXByb2ZpbGV2ZXJpZmljYXRpb25zIiwiSW5zdGFudHBheW91dHMiLCJMaXN0eW91cmJvYXJkaW5nIiwiQmVjb21lYXBldHNpdHRlciIsInVwZGF0ZVdoZW5JTW92ZVRoZU1hcCIsIlNhdmVTZWFyY2giLCJhcHBseSIsIm1vcmUiLCJBbGxQcmljZXMiLCJIb3dtYW55cGV0cyIsIkRvZ3NpemUiLCJQZXR0eXBlcyIsIkhvd29mdGVueW91d2FudHNlcnZpY2UiLCJDaGVja19vdXQiLCJPbmxpbmVub3ciLCJFeHBlcmllbmNlIiwiRGFzaGJvYXJkIiwiUmVzZXJ2YXRpb25zIiwiTXlwcm9maWxlIiwiTXlTZXJ2aWNlcyIsIkZhdm91cml0ZVNpdHRlcnMiLCJNeXNwb3RzIiwiUGFzc3dvcmRBbmRTZWN1cml0eSIsIlBheW1lbnRzQW5kcGF5b3V0cyIsIlBheW1lbnRoaXN0b3J5IiwiR2xvYmFscHJlZmVyZW5jZXMiLCJQb2ludHNBbmRjb3Vwb24iLCJUb3RhbEJvb2tpbmdzIiwiV2VlayIsIlRvdGFsRWFybmluZ3MiLCJUb3RhbFJlZmVycmFsIiwiTGF0ZXN0Qm9va2luZ1JlcXVlc3RzIiwiVmlld0FsbCIsIkZyb20iLCJUbyIsIlRvdGFsIiwiQWNjZXB0IiwiUGVuZGluZyIsIk1ha2VQYXltZW50IiwiRWRpdCIsIlJlbW92ZSIsIk1lZXRpbmdSZXF1ZXN0cyIsIk15UG9ydGZvbGlvIiwiYXJlWW91U3VyZSIsImFkZEF2YWlsYWJpbGl0eSIsIkFkZG1vcmVpbWFnZXMiLCJOZXdzRmVlZHMiLCJFeGNlbGxlbnQiLCJWaWV3UHJvZmlsZSIsIkV4cGxvcmVhbWF6aW5ncGxhY2VzIiwiUGV0Y2FyZSIsIlNlZWFsbCIsIkFkZHJlc3MiLCJDbGllbnQiLCJNZWV0YXQiLCJSZWplY3QiLCJDYW5jZWwiLCJSZWplY3RlZCIsIlBheW1lbnQiLCJCYXNpY2luZm8iLCJBZGRyZXNzSW5mbyIsIkRlZmF1bHRhdmFpbGFiaWxpdHkiLCJNb25kYXkiLCJUdWVzZGF5IiwiV2VkbmVzZGF5IiwiVGh1cnNkYXkiLCJGcmlkYXkiLCJBZGRzbG90IiwiU2F0dXJkYXkiLCJTYXZlIiwiSG9tZUFkZHJlc3NMaW5lIiwiQXB0SG91c2VObyIsIkNpdHkiLCJTdGF0ZW9ycHJvdmluY2UiLCJaSVBwb3N0YWxwb3N0Y29kZSIsIkZ1bGxuYW1lIiwiRW1haWxhZGRyZXNzIiwiZW50ZXJFbWFpbEFkZHJlc3MiLCJlbnRlck90cCIsImVudGVyTmV3UGFzc3dvcmQiLCJlbnRlck9sZFBhc3N3b3JkIiwiZW50ZXJDb25maXJtUGFzc3dvcmQiLCJvdHAiLCJuZXdQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiQ29udGFjdG51bWJlciIsIkJpcnRoZGF0ZSIsImFkZFNlcnZpY2VGaXJzdCIsIlByb2ZpbGV2ZXJpZmljYXRpb24iLCJ1cGxvYWRJbWFnZVRleHQiLCJTZWxlY3RJRGNhcmR0eXBlIiwiUGFzc3BvcnQiLCJWZXJpZnlteXByb2ZpbGUiLCJMaXNjZW5zZXZlcmlmaWNhdGlvbiIsInVwbG9hZGxpc2NlbnNlVGV4dCIsIkFkZG5ld3BldCIsIkloYXZlIiwiRG9nIiwiQ2F0IiwiQmlyZHMiLCJSZXB0aWxlcyIsIlNtYWxsYW5pbWFscyIsIk5hbWUiLCJXZWlnaHQiLCJBZ2UiLCJCcmVhZCIsIlNleCIsIldoaWNoc2VydmljZXN3b3VsZHlvdWxpa2V0b29mZmVyIiwiU2V0c2VydmljZXN0b2NhdGl2ZSIsIlNhdmVhbmRDb250aW51ZSIsIkFDVElWRSIsIklOU1RBTlRCT09LSU5HIiwiTWFuYWdlIiwiQWxsc2VydmljZXMiLCJCb2FyZGluZyIsIlNlcnZpY2UiLCJXaGF0aXMiLCJvblBldGNhdGlvbiIsIlNlcnZpY2VBbmRGZWVzIiwiUHJlZmVyZW5jZXMiLCJEaXNjb3VudHMiLCJTcGVjaWFsZGlzY291bnRmb3J5b3VyZ3Vlc3RzIiwib2Zmb25maXJzdGJvb2tpbmd3aXRoeW91IiwiQWxsb3dvZm9uYm9va2luZ2Ftb3VudCIsIk5vb2ZmZXJvbnRoaXNzZXJ2aWNlIiwiTGVuZ3Rob2ZzdGF5ZGlzY291bnQiLCJXZWVrbHlkaXNjb3VudCIsIlRoaXNkaXNjb3VudHdpbGxhcHBseXRvYW55cmVzZXJ2YXRpb24iLCJNb250aGx5ZGlzY291bnQiLCJZb3VyYXZhaWxhYmlsaXR5d2hpbGVwZXRpc2F0Ym9hcmRpbmciLCJZb3VjYW5zZWxlY3Rmcm9tdGhlb3B0aW9uc3BhcnRzIiwid2hlbmhvc3RpbmdwZXRzaW55b3VyaG9tZWhvd2ZyZXF1ZW50bHljYW55b3Vwcm92aWRlYnJlYWtzIiwiaG93ZnJlcXVlbnRseWNhbnlvdXByb3ZpZGVwb3R0eWJyZWFrcyIsIkNhbnlvdXBpY2t1cHBldGZyb21jbGllbnRwbGFjZSIsInNlcnZpY2VUeXBlIiwiV2VsY29tZWFnYWluIiwiUmVtZW1iZXJtZSIsIkZvcmdvdHBhc3N3b3JkIiwicmVzZW5kIiwiTG9naW4iLCJvciIsIkNvbnRpbnVld2l0aEZhY2Vib29rIiwiQ29udGludWV3aXRoR29vZ2xlIiwiQ29udGludWV3aXRoVHdpdHRlciIsIkNvbnRpbnVld2l0aExpbmUiLCJEb250aGF2ZWFuYWNjb3VudCIsIlJlZ2lzdGVybm93IiwiQ3JlYXRleW91cmZyZWVhY2NvdW50dG9kYXkiLCJGaXJzdG5hbWUiLCJMYXN0bmFtZSIsIkRhdGVvZkJpcnRoIiwicmVnaXN0ZXJUZXJtIiwiSm9pbm5vdyIsIkFscmVhZHloYXZlYW5hY2NvdW50IiwiRm9yZ290eW91cnBhc3N3b3JkIiwiUmVzZXR5b3VycGFzc3dvcmQiLCJmb3Jnb3RQYXNzd29yZEluc3RydWN0aW9uIiwicmVzZXRQYXNzd29yZEluc3RydWN0aW9uIiwiU3VibWl0IiwiQm9va2luZ2J5bWUiLCJCb29raW5nZm9ybWUiLCJSZXF1ZXN0YnltZSIsIlJlcXVlc3Rmb3JtZSIsIlNpdHRlcnJlc2VydmF0aW9ucyIsIkNsaWVudHJlc2VydmF0aW9ucyIsIk15RmF2b3VyaXRlcyIsIk15UmV2aWV3cyIsIlNwb3RzIiwiQWRkbmV3c3BvdCIsIkF2YWlsYWJsZWZvciIsIlJlcGVhdENsaWVudHMiLCJTb3J0YnkiLCJSZWNlbnRseUFkZGVkIiwiQ3JlYXRlbmV3cGV0c3BvdCIsIkdlbmVyIiwiR2VuZGVyIiwiaWRJbWFnZSIsIkxpc2NlbnNlTnVtYmVyIiwidmVyaWZ5TXlDZXJ0aWZpY2F0ZSIsImNsaWNrVG9VcGxvYWQiLCJTZWxlY3RzcG90Y2F0ZWdvcnkiLCJiYXNpY2luZm8iLCJTcG90aW1hZ2VzIiwiQWRkbW9yZSIsIkNvbmZpcm0iLCJEZXRhaWxlZGluZm9BbWVuaXRpZXMiLCJSZXNlcnZhdGlvbnBvc3NpYmxlIiwiQnVkZ2V0UGF5bWVudCIsIkJ1ZGdldCIsIkNhcmRzIiwic2VydmljZUNocmFnZSIsIm1ldGhvZE9mUGF5bWVudCIsIkJhbmtpbmdJbmZvIiwiRGVsZXRlQ2FyZCIsIlNldERlZmF1bHQiLCJBZGRuZXdjYXJkIiwiYmFua1BheW1lbnQiLCJFbnRlckhlcmUiLCJSZWplY3RSZXF1ZXN0IiwicGFzc3BvcnROdW1iZXIiLCJwYXltZW50Tm90ZSIsIm5vQ2FyZEFkZGVkVGl0bGUiLCJub1Jlc2VydmF0aW9uIiwibm9Db3Vwb25zIiwibm9SZXF1ZXN0Iiwibm9CYW5rQWRkZWRUaXRsZSIsImFkZENhcmRVc2luZ0Zvcm0iLCJhZGRCYW5rVXNpbmdGb3JtIiwibm9Nc2dZZXQiLCJlbnRlckNhcmROdW1iZXIiLCJOYW1lb25jYXJkIiwic2V0RGVmYXVsdENhcmQiLCJDYXJkbnVtYmVyIiwiRXhwaXJhdGlvbiIsIkFkZGNhcmQiLCJBZGRuZXdiYW5rYWNjb3VudCIsIlR5cGVvZmFjY291bnQiLCJQZXJzb25hbEFjY291bnQiLCJCdXNpbmVzc0FjY291bnQiLCJCYW5rQ291bnRyeSIsIkJhbmtDdXJyZW5jeSIsIkJhbmtOYW1lIiwiQnJhbmNoTmFtZSIsIkVudGVyQWNjb3VudE51bWJlciIsIlJvdXRpbmdOdW1iZXIiLCJFbnRlclJvdXRpbmdOdW1iZXIiLCJCYW5rQ29kZSIsIkJhbmtOYW1lSGVyZSIsIkFjY291bnRIb2xkZXJOYW1lIiwiQWNjb3VudEhvbGRlck5hbWVIZXJlIiwiQnJhbmNoQ29kZSIsIkFjY291bnROdW1iZXIiLCJBY2NvdW50VHlwZSIsIkJhbmtBY2NvdW50VHlwZSIsIkFkZG5ld2FjY291bnQiLCJCYW5rQWNjb3VudE51bWJlciIsIlBheW1lbnRIaXN0b3J5IiwiV2l0aGRyYXdNb25leSIsIkVhcm5pbmdzIiwiUGVuZGluZ0Vhcm5pbmdzIiwiV2l0aGRyYXdhbHMiLCJQYXltZW50cyIsIk90aGVyIiwiWW91ckV4cGVjdGVkRWFybmluZ3MiLCJ0b3RhbFBheWFibGVBbW91bnQiLCJDb250YWN0bm93IiwiVmlld2RldGFpbHMiLCJMb29raW5nZm9yYVBldFNwb3QiLCJTZWFyY2giLCJQcm92aWRlc3BvdGluZm9ybWF0aW9uIiwiUHJvdmlkZXNwb3QiLCJpbmZvcm1hdGlvbiIsIkNhdGVnb3JpZXMiLCJGaW5kYmVzdHBldHNwb3RzIiwiUmVzdGF1cmFudENhZmUiLCJEb2dydW5zIiwiUGV0R3Jvb21pbmciLCJMZWlzdXJlT3V0ZG9vciIsIlBldGZyaWVuZGx5SG90ZWwiLCJQYXJrIiwiVHJhdmVsIiwiQW5pbWFsU2hlbHRlciIsIllvdWNhbmZpbmRzcG90c2lucGxhY2VzIiwiVG9reW8iLCJPc2FrYSIsIkt5b3RvIiwiU2FwcG9ybyIsIk5hZ295YSIsIktvYmUiLCJTZW5kYWkiLCJDaGliYSIsIkZlYXR1cmVkU3BvdHMiLCJMb2FkbW9yZSIsIk1hcmt5b3VyYXZhaWxhYmlsaXR5IiwiTm90aWZpY2F0aW9ucyIsIm5vU2l0dGVyRm91bmQiLCJSZWNlaXZlbWVzc2FnZXNmcm9taG9zdHMiLCJFbWFpbCIsIlRleHRtZXNzYWdlIiwiQnJvd3Nlcm5vdGlmaWNhdGlvbiIsIllvdWNhbm1hcmtwaWNrdXBzZXJ2aWNlZW5hYmxlIiwiUmVtaW5kZXJzIiwiUmVjZWl2ZWJvb2tpbmdyZW1pbmRlcnMiLCJQcm9tb3Rpb25zYW5kdGlwcyIsIlBob25lY2FsbHMiLCJHZW5lcmFscHJlZmVyZW5jZXMiLCJMYW5ndWFnZSIsIlNldHlvdXJwcmVmZXJlZGxhbmd1YWdlZm9yUGV0Y2F0aWFvbiIsIkNvdW50cnkiLCJDdXJyZW5jeSIsIlNlbGVjdGN1cnJlbmN5Zm9yYWxseW91cnRyYW5zYWN0aW9ucyIsIlBhc3N3b3Jkc2V0dGluZ3MiLCJXaGF0cGV0c3dvdWxkeW91cHJlZmVyZm9ydGhpc3NlcnZpY2UiLCJib2FyZGluZ1NlcnZpY2VkZXNjcmlwdGlvbiIsIkZsZXhpYmxlIiwiTW9kZXJhdGUiLCJTdHJpY3QiLCJEb3lvdWNoYXJnZXRyYW5zcG9ydGF0aW9uZmVlIiwiTWluUHJpY2UiLCJNYXhQcmljZSIsIk1ha2Vib29raW5nd2l0aCIsIkJvb2tpbmdmb3IiLCJOZWVkc2l0dGVydG9waWNrdXBteXBldHMiLCJRdWVzdGlvbnMiLCJTZWxlY3Rza2lsbHMiLCJyZXN0YXVyYW50TmFtZSIsImF3YXJkcyIsImdlbmVyIiwidHJhbnNwb3J0YXRpb24iLCJzcG90SG9saWRheXMiLCJzZXJ2aWNlQ2hhcmdlcyIsInJlc2VydmF0aW9ucyIsInNtb2tpbmciLCJwYXJraW5nIiwic2VydmljZUFtZW5pdGllcyIsImFkZGVkQmFua0FjY291bnQiLCJsYW5ndWFnZXMiLCJub29uQ2hhcmdlcyIsIm5pZ2h0Q2hhcmdlcyIsImVudGVyQmFua05hbWUiLCJicmFuY2hOYW1lIiwiYnJhbmNoQ29kZSIsImFjY291bnRIb2xkZXJOYW1lIiwiYWNjb3VudE51bWJlciIsInJvdXRpbmdOdW1iZXIiLCJlbnRlckxvY2F0aW9uIiwiYmFua0NvZGUiLCJlbnRlclppcENvZGUiLCJwb3N0YWxDb2RlIiwibG9jYXRpb25LYW5hIiwibG9jYXRpb25LYW5qaSIsInBheSIsImFjY2VwdGVkQnlTaXR0ZXIiLCJhY2NlcHRlZEJ5WW91IiwicGF5bWVudFBlbmRpbmciLCJwYXltZW50RG9uZSIsInBheW1lbnRJbmZvcm1hdGlvbiIsInNlbGVjdFBheW1lbnRNZXRob2QiLCJzYXZlZENhcmRzIiwiZG9Zb3VIYXZlQ291cG9uIiwiY291cG9uRGV0YWlsIiwiY29uZmlybUJvb2tpbmciLCJib29raW5nRGV0YWlscyIsInRvdGFsQW1vdW50IiwidHJhbnNwb3J0RmVlIiwiZGlzY291bnQiLCJ0YXgiLCJzdWJUb3RhbCIsImJvb2tpbmdTdWNjZXNzIiwiYm9va2VkRm9yIiwiaXNTdWNjZXNzZnVsIiwiY29tcGxldGVkIiwiYWRkaXRpb25hbFNlcnZpY2UiLCJ0cmFuc3BvcnRhdGlvbkZlZSIsImdldFBlcmNlbnQiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWwiLCJnZXRTZXJ2aWNlT2JqZWN0IiwicGV0X3R5cGUiLCJjdXN0b21fc2VydmljZXMiLCJmZWVzIiwiZ2V0RHJvcEluU2VydmljZU9iamVjdCIsImR1cmF0aW9uIiwiZ2V0R3Jvb21pbmdTZXJ2aWNlT2JqZWN0IiwiZ3Jvb21pbmdfc2VydmljZV9pZCIsImdldEhvdXNlQ2FsbFNlcnZpY2VPYmplY3QiLCJtZWRpY2FsX3NlcnZpY2VfaWQiLCJnZXRDYWxlbmRhclN2ZyIsInN2ZyIsIm51bWJlcklucHV0IiwiZGF0YVVSTHRvRmlsZSIsImRhdGF1cmwiLCJmaWxlbmFtZSIsImFyciIsIm1pbWUiLCJic3RyIiwiYXRvYiIsInU4YXJyIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJGaWxlIiwiZGVsZXRlQ29va2llIiwiY29va2llIiwiZ2V0TmFtZUluaXRpYWxzIiwicmd4IiwiUmVnRXhwIiwiaW5pdGlhbHMiLCJtYXRjaEFsbCIsInNoaWZ0IiwicG9wIl0sInNvdXJjZVJvb3QiOiIifQ==
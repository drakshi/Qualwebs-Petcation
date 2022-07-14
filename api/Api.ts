import axios from "axios";
import {
  U_ACTIVE_BOARDING,
  U_ACTIVE_DAY_CARE,
  U_ACTIVE_DROP_IN_VISITS,
  U_ACTIVE_GROOMING,
  U_ACTIVE_HOUSE_CALL,
  U_ACTIVE_HOUSE_SITTING,
  U_ACTIVE_PET_WALKING,
  U_ADD_PET,
  U_ADD_QUESTION,
  U_ADD_SKILL,
  U_ADD_SPOT,
  U_ARRANG_MEETUP,
  U_BOARDING_DISCOUNTS,
  U_BOARDING_PET_SERVICE_FEE,
  U_BOARDING_PREFERENCE,
  U_CHANGE_REQUEST_STATUS,
  U_DELETE_PET,
  U_DELETE_QUESTION,
  U_DELETE_SPOT,
  U_DOG_WALKING_DISCOUNT,
  U_DOG_WALKING_INFO,
  U_DOG_WALKING_SERVICE_FEE,
  U_DOG_WALKING_SERVICE_PREFERENCE,
  U_DROP_IN_VISITES_PREFERENCE,
  U_DROP_IN_VISITS_DISCOUNTS,
  U_DROP_IN_VISITS_SERVICE_FEE,
  U_FILTERED_AVAILABLE_SITTER,
  U_GET_ADDRESS,
  U_GET_ALL_PETS,
  U_GET_ALL_SPOT,
  U_GET_AVAILABILITY,
  U_GET_AVAILABILITY_BY_DATES,
  U_GET_AVAILABLE_SERVICES,
  U_GET_BASIC_INFO,
  U_GET_BOARDING_INFO,
  U_GET_BOARDING_PREVIEW,
  U_GET_BREED_WITH_TYPE,
  U_GET_CITIES,
  U_GET_COUTRIES,
  U_GET_DASHBOARD,
  U_GET_DOG_WALKING_PREVIEW,
  U_GET_DROP_IN_PREVIEW,
  U_GET_DROP_IN_VISITS_INFO,
  U_GET_GROOMING_INFO,
  U_GET_GROOMING_PREVIEW,
  U_GET_HOUSE_CALL_INFO,
  U_GET_HOUSE_CALL_PREVIEW,
  U_GET_HOUSE_CALL_SERVICE,
  U_GET_HOUSE_SITTING_INFO,
  U_GET_HOUSE_SITTING_PREVIEW,
  U_GET_LANGAUGES,
  U_GET_PARKING,
  U_GET_PAYMENT_METHODS,
  U_GET_PETS,
  U_GET_PET_DAY_CARE_PREVIEW,
  U_GET_PET_SERVICE,
  U_GET_PET_SPOTS,
  U_GET_QUESTIONS,
  U_GET_RESERVATION_TYPES,
  U_GET_SERVICES,
  U_GET_SINGLE_SITTER,
  U_GET_SINGLE_SPOT,
  U_GET_SITTER_AVAILABILITY,
  U_GET_SITTER_RESERVATIONS,
  U_GET_SKILLS,
  U_GET_SMOKING_CESSIONS,
  U_GET_THREAD_BOOKING,
  U_GET_USER_RESERVATIONS,
  U_GET_USER_SKILLS,
  U_GROOMING_SERVICE_DISCOUNT,
  U_GROOMING_SERVICE_FEE,
  U_GROOMING_SERVICE_PREFERENCE,
  U_HOUSE_CALL_DISCOUNT,
  U_HOUSE_CALL_PREFERENCE,
  U_HOUSE_CALL_SERVICE_FEE,
  U_HOUSE_SITTING_DISCOUNTS,
  U_HOUSE_SITTING_PREFERENCE,
  U_HOUSE_SITTING_SERVICE_FEE,
  U_IMAGE_UPLOAD,
  U_PET_ADDITIONAL_REQUEST,
  U_PET_AMOUNT_CALCULATION,
  U_PET_DAY_CARE_DISCOUNT,
  U_PET_DAY_CARE_INFO,
  U_PET_DAY_CARE_PREFERENCE,
  U_PET_DAY_CARE_SERVICE_FEES,
  U_PET_SERVICE_AVAIALABILITY,
  U_PET_SPOT_CATEGORIES,
  U_RATE_SITTER,
  U_REQUEST_SITTER,
  U_SAVE_ADDRESS,
  U_SAVE_BASIC_INFO,
  U_SAVE_LOCALITY,
  U_SAVE_PORTFOLIO,
  U_SEND_MESSAGE,
  U_SET_AVAILABLE_SERVICES,
  U_SINGLE_PET,
  U_UPDATE_PET,
  U_UPDATE_SPOT,
  U_UPLOAD_PROFILE_PICTURE,
  U_USER_LOGIN,
  U_USER_REGISTER,
  U_ADD_CARD,
  U_GET_CARD,
  U_DELETE_CARD,
  U_ADD_BANK_ACCOUNT,
  U_GET_BANK_ACCOUNT,
  U_GET_BANK_DETAILS,
  U_DELETE_BANK_ACCOUNT,
  U_GET_PET_SPOT_DETAILS,
  GOOGLE_PLACES_BASE_URL,
  GOOGLE_PLACES_API,
  U_UPLOAD_DOCUMENTS,
  U_GET_TRANSPORT_CHARGES,
  U_ADD_TRANSPORT_CHARGES,
  U_UPDATE_REQUEST_STATUS,
  U_BOOKMARK_SITTER,
  U_GET_REQUEST_DETAIL,
  U_CONFIRM_PAYMENT,
  U_PAYMENT_HISTORY,
  U_GET_FAVORITE_SITTER,
  U_CHANGE_MEETUP_STATUS,
  U_GET_MEETUPS,
  U_CHAT_ACTION,
  U_GET_FAVORITE_SPOT,
  U_MARK_UNMARK_SPOT,
  U_MAKE_CARD__DEFAULT,
  U_MAKE_BANK_DEFAULT,
  U_RESET_PASSWORD,
  U_CHANGE_PASSWORD,
  U_FORGOT_PASSWORD,
  U_APPLY_COUPON,
  U_REMOVE_COUPON, U_GET_COUPON,
  U_READ_STATUS, U_REVIEW_SPOT,
  U_GET_NEWS,
  U_GET_EVENT,
  U_GET_SINGLE_NEWS,

} from "./Constants";
import Cookies from "universal-cookie";
import nextCookie from "next-cookies";

const baseURL = "http://54.151.160.83/petecation/public/api/";
//const baseURL = "http://192.168.1.26/petecation/public/api/";

const headers = (token) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return headers;
};

const request = (method, path, body = null, ctx = null) => {
  const url = `${baseURL}${path}`;
  var token = null;
  const cookies = new Cookies();
  token = cookies.get("token");
  if (token == null && ctx) {
    token = nextCookie(ctx);
  }
  var options = { method, url, headers: headers(token) };

  if (body) {
    options = Object.assign(options, { data: body });
  }

  return axios(options);
};

export default class API {
  registerUser(data) {
    return request("POST", U_USER_REGISTER, data);
  }

  loginUser(data) {
    return request("POST", U_USER_LOGIN, data);
  }

  resetPassword(data) {
    return request("POST", U_RESET_PASSWORD, data);
  }

  changePassword(data) {
    return request("POST", U_CHANGE_PASSWORD, data);
  }

  forgotPassword(data) {
    return request("POST", U_FORGOT_PASSWORD , data);
  }

  getDashboard() {
    return request("GET", U_GET_DASHBOARD);
  }

  getBasicInfo() {
    return request("GET", U_GET_BASIC_INFO);
  }

  getAddress() {
    return request("GET", U_GET_ADDRESS);
  }

  saveBasicInfo(data) {
    return request("POST", U_SAVE_BASIC_INFO, data);
  }

  saveAddress(data) {
    return request("POST", U_SAVE_ADDRESS, data);
  }

  addQuestion(data) {
    return request("POST", U_ADD_QUESTION, data);
  }

  deleteQuestion(val) {
    return request("DELETE", U_DELETE_QUESTION + val);
  }

  getQuestions() {
    return request("GET", U_GET_QUESTIONS);
  }

  getSkills() {
    return request("GET", U_GET_SKILLS);
  }

  getUserSkills() {
    return request("GET", U_GET_USER_SKILLS);
  }

  addSkill(data) {
    return request("POST", U_ADD_SKILL, data);
  }

  saveLocalityInfo(data) {
    return request("POST", U_SAVE_LOCALITY, data);
  }

  savePortfolio(data) {
    return request("POST", U_SAVE_PORTFOLIO, data);
  }

  //AVAILABILITY
  getAvailableServices() {
    return request("GET", U_GET_AVAILABLE_SERVICES);
  }

  setAvailableService(data) {
    return request("POST", U_SET_AVAILABLE_SERVICES, data);
  }

  getAvailability(data) {
    return request("POST", U_GET_AVAILABILITY, data);
  }

  getAvailabilityByDate(data) {
    return request("POST", U_GET_AVAILABILITY_BY_DATES, data);
  }

  //MY PETS
  addPet(data) {
    return request("POST", U_ADD_PET, data);
  }

  getAllPets() {
    return request("GET", U_GET_ALL_PETS);
  }

  getSinglePets(id) {
    return request("GET", U_SINGLE_PET + id);
  }

  updatePet(data, id) {
    return request("POST", U_UPDATE_PET + id, data);
  }

  deletePet(id) {
    return request("DELETE", U_DELETE_PET + id);
  }

  //Service
  getService() {
    return request("GET", U_GET_SERVICES);
  }

  activeBoarding(data) {
    return request("POST", U_ACTIVE_BOARDING, data);
  }

  activeDayCare(data) {
    return request("POST", U_ACTIVE_DAY_CARE, data);
  }

  activeHouseSitting(data) {
    return request("POST", U_ACTIVE_HOUSE_SITTING, data);
  }

  activeDropInVisits(data) {
    return request("POST", U_ACTIVE_DROP_IN_VISITS, data);
  }

  activePetWalking(data) {
    return request("POST", U_ACTIVE_PET_WALKING, data);
  }

  activeGrooming(data) {
    return request("POST", U_ACTIVE_GROOMING, data);
  }

  activeHouseCall(data) {
    return request("POST", U_ACTIVE_HOUSE_CALL, data);
  }

  //House call
  getHouseCallInfo(val) {
    return request("GET", U_GET_HOUSE_CALL_INFO + val);
  }

  getHouseCallService(data) {
    return request("POST", U_GET_HOUSE_CALL_SERVICE, data);
  }
  houseCallServiceFee(data) {
    return request("POST", U_HOUSE_CALL_SERVICE_FEE, data);
  }

  houseCallPreference(data) {
    return request("POST", U_HOUSE_CALL_PREFERENCE, data);
  }

  houseCallDiscount(data) {
    return request("POST", U_HOUSE_CALL_DISCOUNT, data);
  }

  getHouseCallPreview() {
    return request("GET", U_GET_HOUSE_CALL_PREVIEW);
  }

  //Grooming
  getGroomingService(data) {
    return request("POST", U_GET_PET_SERVICE, data);
  }
  getGroomingInfo(val) {
    return request("GET", U_GET_GROOMING_INFO + val);
  }

  groomingServiceFee(data) {
    return request("POST", U_GROOMING_SERVICE_FEE, data);
  }

  groomingServicePrefernce(data) {
    return request("POST", U_GROOMING_SERVICE_PREFERENCE, data);
  }

  groomingServiceDiscount(data) {
    return request("POST", U_GROOMING_SERVICE_DISCOUNT, data);
  }

  getGroomingPreview() {
    return request("GET", U_GET_GROOMING_PREVIEW);
  }

  //BOARDING
  boardingServiceFee(data) {
    return request("POST", U_BOARDING_PET_SERVICE_FEE, data);
  }

  boardingPreference(data) {
    return request("POST", U_BOARDING_PREFERENCE, data);
  }

  boardingDiscount(data) {
    return request("POST", U_BOARDING_DISCOUNTS, data);
  }

  getBoardingInfo(id) {
    return request("GET", U_GET_BOARDING_INFO + id);
  }

  getBoardingPreview() {
    return request("GET", U_GET_BOARDING_PREVIEW);
  }

  //HOUSE SITTING
  getHouseSittingInfo(id) {
    return request("GET", U_GET_HOUSE_SITTING_INFO + id);
  }

  houseSittingServiceFee(data) {
    return request("POST", U_HOUSE_SITTING_SERVICE_FEE, data);
  }

  houseSittingDiscount(data) {
    return request("POST", U_HOUSE_SITTING_DISCOUNTS, data);
  }

  houseSittingPreference(data) {
    return request("POST", U_HOUSE_SITTING_PREFERENCE, data);
  }

  getHouseSittingPreview() {
    return request("GET", U_GET_HOUSE_SITTING_PREVIEW);
  }

  //Drop in visits
  getDropInVisitsInfo(id) {
    return request("GET", U_GET_DROP_IN_VISITS_INFO + id);
  }

  dropInVisitsServiceFee(data) {
    return request("POST", U_DROP_IN_VISITS_SERVICE_FEE, data);
  }

  dropInVisitPreference(data) {
    return request("POST", U_DROP_IN_VISITES_PREFERENCE, data);
  }

  dropInVisitDiscounts(data) {
    return request("POST", U_DROP_IN_VISITS_DISCOUNTS, data);
  }
  getDropInVisitsPreview() {
    return request("GET", U_GET_DROP_IN_PREVIEW);
  }

  //Pet day care
  getPetDayCareInfo(id) {
    return request("GET", U_PET_DAY_CARE_INFO + id);
  }

  petDayCateServiceFee(data) {
    return request("POST", U_PET_DAY_CARE_SERVICE_FEES, data);
  }

  petDayCarePreference(data) {
    return request("POST", U_PET_DAY_CARE_PREFERENCE, data);
  }

  petDayCareDiscount(data) {
    return request("POST", U_PET_DAY_CARE_DISCOUNT, data);
  }

  getPetDayCarePreview() {
    return request("GET", U_GET_PET_DAY_CARE_PREVIEW);
  }

  //Dog walking
  getDogWalkingInfo(id) {
    return request("GET", U_DOG_WALKING_INFO + id);
  }

  DogWalkingServiceFee(data) {
    return request("POST", U_DOG_WALKING_SERVICE_FEE, data);
  }

  dogWalkingPreference(data) {
    return request("POST", U_DOG_WALKING_SERVICE_PREFERENCE, data);
  }

  dogWalkingDiscount(data) {
    return request("POST", U_DOG_WALKING_DISCOUNT, data);
  }

  getDogWalkingPreview() {
    return request("GET", U_GET_DOG_WALKING_PREVIEW);
  }

  //SITTER REQUEST
  petAdditionalServices(data) {
    return request("POST", U_PET_ADDITIONAL_REQUEST, data);
  }

  petAmountCalculation(data) {
    return request("POST", U_PET_AMOUNT_CALCULATION, data);
  }

  sitterRequest(data) {
    return request("POST", U_REQUEST_SITTER, data);
  }

  changeRequestStatus(data) {
    return request("POST", U_CHANGE_REQUEST_STATUS, data);
  }

  petServiceAvailability(data) {
    return request("POST", U_PET_SERVICE_AVAIALABILITY, data);
  }

  //DASHOBOARD
  getSitterReservetions(data, page) {
    return request("POST", U_GET_SITTER_RESERVATIONS + "?page=" + page, data);
  }

  getUserReservations(data, page) {
    return request("POST", U_GET_USER_RESERVATIONS + "?page=" + page, data);
  }

  //CHAT
  sendMessage(data) {
    return request("POST", U_SEND_MESSAGE, data);
  }

  chatAction(data) {
    return request("POST", U_CHAT_ACTION, data);
  }

  getThreadBooking(val) {
    return request("GET", U_GET_THREAD_BOOKING + val);
  }

  arrangeMeetup(data) {
    return request("POST", U_ARRANG_MEETUP, data);
  }

  updateMeetupStatus(data) {
    return request("POST", U_CHANGE_MEETUP_STATUS, data);
  }

  getMeetupRequest(id){
    return request("GET", U_GET_MEETUPS + id);
  }

  getTransportChargeRequest(data){
    return request("GET", U_GET_TRANSPORT_CHARGES + data);
  }

  addTransportChargeRequest(data){
    return request("POST", U_ADD_TRANSPORT_CHARGES, data);
  }

  updateRequestStatus(data){
    return request("POST", U_UPDATE_REQUEST_STATUS, data);
  }

  updateReadStatus(data){
    return request("POST", U_READ_STATUS, data);
  }

  //COMMON
  getCoutires() {
    return request("GET", U_GET_COUTRIES);
  }
  getCities(id) {
    return request("GET", U_GET_CITIES + id);
  }

  getPets() {
    return request("GET", U_GET_PETS);
  }

  getBreedWithType(data) {
    return request("POST", U_GET_BREED_WITH_TYPE, data);
  }

  uploadFile(data) {
    return request("POST", U_IMAGE_UPLOAD, data);
  }

  getFilteredAvialableSitter(data) {
    return request("POST", U_FILTERED_AVAILABLE_SITTER, data);
  }


  getFavoriteSitters(data) {
    return request("POST", U_GET_FAVORITE_SITTER,data);
  }

  uploadProfilePicture(data) {
    return request("POST", U_UPLOAD_PROFILE_PICTURE, data);
  }

  uploadDocument(data) {
    return request("POST", U_UPLOAD_DOCUMENTS, data);
  }

  //Spots
  getPetSpotsCategory() {
    return request("GET", U_PET_SPOT_CATEGORIES);
  }

  getPetSpots(data) {
    return request("POST", U_GET_PET_SPOTS, data);
  }

  markUnmarkSpot(data){
    return request("POST", U_MARK_UNMARK_SPOT, data);
  }

  getPetSpotDetails(data) {
    return request("GET", U_GET_PET_SPOT_DETAILS + data);
  }

  getPaymentMethods() {
    return request("GET", U_GET_PAYMENT_METHODS);
  }

  getReservationTypes() {
    return request("GET", U_GET_RESERVATION_TYPES);
  }

  getSmokingCession() {
    return request("GET", U_GET_SMOKING_CESSIONS);
  }

  getParking() {
    return request("GET", U_GET_PARKING);
  }

  getLangauges() {
    return request("GET", U_GET_LANGAUGES);
  }

  addSpot(data) {
    return request("POST", U_ADD_SPOT, data);
  }

  updateSpot(id, data) {
    return request("POST", U_UPDATE_SPOT + id, data);
  }

  rateSitter(data) {
    return request("POST", U_RATE_SITTER, data);
  }

  getSingleSitter(id) {
    return request("GET", U_GET_SINGLE_SITTER + id);
  }

  markUnmarkSitter(data) {
    return request("POST", U_BOOKMARK_SITTER, data);
  }

  getAllSpots() {
    return request("GET", U_GET_ALL_SPOT);
  }

  getFavoriteSpots() {
    return request("GET", U_GET_FAVORITE_SPOT);
  }

  deleteSpot(val) {
    return request("DELETE", U_DELETE_SPOT + val);
  }

  getSingleSpot(id) {
    return request("GET", U_GET_SINGLE_SPOT + id);
  }

  getSitterAvailability(data) {
    return request("POST", U_GET_SITTER_AVAILABILITY, data);
  }

  rateReviewSpot(data) {
    return request("POST", U_REVIEW_SPOT, data);
  }

  //Payment and Bank account
  addNewCard(data){
    return request("POST", U_ADD_CARD, data);
  }

  getAllCard(){
    return request("GET", U_GET_CARD);
  }

  deleteCard(data){
    return request("POST", U_DELETE_CARD, data);
  }

  addNewBankAccount(data){
    return request("POST", U_ADD_BANK_ACCOUNT, data);
  }

  getAllBankAccount(){
    return request("GET", U_GET_BANK_ACCOUNT);
  }

  getAllBankAccountDetails(){
    return request("GET", U_GET_BANK_DETAILS);
  }

  markCardAsDefault(data){
    return request("POST", U_MAKE_CARD__DEFAULT, data);
  }

  makeBankAsDefault(data){
    return request("POST", U_MAKE_BANK_DEFAULT, data);
  }

  deleteBankAccount(id){
    return request("GET", U_DELETE_BANK_ACCOUNT + id);
  }

  getSingleRequestDetail(id){
    return request("GET", U_GET_REQUEST_DETAIL + id);
  }

  confirmPayment(id,data){
    return request("POST", U_CONFIRM_PAYMENT + id, data);
  }

  paymentHistory(data, page){
    return request("POST", U_PAYMENT_HISTORY + `?page=${page}`,data);
  }

  getFormattedAddress = async (id) => {
    const apiUrl = `${GOOGLE_PLACES_BASE_URL}/details/json?placeid=${id}&key=${GOOGLE_PLACES_API}`;
    const result = await axios.request({
      method: "post",
      url: apiUrl,
    });
    return result;
  }

  applyCoupon(data) {
    return request("POST", U_APPLY_COUPON, data);
  }

  removeCoupon(id){
    return request("GET", U_REMOVE_COUPON + id);
  }

  getCoupons(type){
    return request("GET", U_GET_COUPON + type );
  }
  //News

  getNews(){
    return request("GET", U_GET_NEWS  );
  }

  getEvents()
  {
    return request("GET", U_GET_EVENT  );
  }
  getSingleNews()
  {
    return request("GET", U_GET_SINGLE_NEWS)
  }
}

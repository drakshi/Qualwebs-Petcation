import {I_BOARDING_SERVICE, I_PET_ADDITIONAL_SERVICE} from "./boardingService.interface";
import I_PET from "./pet.interface";
import I_AVAILABLE_SERVICE from "./availableService.interface";
import {I_CHAT_PARTICIPANTS} from "./chat.interface";

export default interface I_REQUEST_DATA {
  sitter_pets: number[];
  my_pets: I_PET[];
  additional_services: I_PET_ADDITIONAL_SERVICE[];
}

export interface I_CALCULATED_AMOUNT {
  pets: {
    name: string;
    fee: number;
  }[];

  custom: {
    name: string;
    fee: number;
  }[];

  transportation: {
    price_start_from: string;
    status: number;
    transport_mode_id: number;
  }[];
  total: number;
}


export default interface I_SINGLE_REQUEST_DETAIL {
  coupon_code: string;
  id: number;
  booking_user_id: number;
  pets: {
    pet_name: string;
    fee: number;
    pet_image: string;
    age_year: number;
    age_month: number;
  }[];
  service: I_PET_ADDITIONAL_SERVICE;
  user: {
  id: number;
  firstname: string;
  lastname: string;
  profile_picture: string;
   },
  pet_type: number,
  tax: string,
  discount: string,
  sub_total: string,
  total_paid_amount: string,
  amend_amount: string,
  platform_commission: number,
  drop_of_date: string;
  drop_of_time_from: string;
  drop_of_time_to: string;
  pickup_up_date: string;
  pickup_up_time_from: string;
  pickup_up_time_to: string;
}


export default  interface I_CARD_DETAILS {
  // @ts-ignore
  id: string;
  last4: string;
  is_default: number;
  exp_year: number;
  exp_month: number;
  brand:string;
}

export default  interface I_BANK_DETAILS {
  id: number;
  account_number: string;
  account_type: number;
  bank_account_id: string;
  bank_name: string;
  user_id: number
}

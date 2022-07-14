import { I_PET_ADDITIONAL_SERVICE } from "./boardingService.interface";
import I_BREED from "./breed.interface";
import I_REQUEST_DATA from "./requestSitter.interface";

export interface I_CHAT_PARTICIPANTS {
  disconnect: number;
  status: number;
  id: number;
  last_message: string;
  last_timestamp: string;
  unread_count: number;
  user: {
    firstname: string;
    id: number;
    lastname: string;
    profile_picture: string;
  };
  created_at: string;
}

export interface I_CHAT_MESSAGE {
  disconnect: number;
  status: number;
  chat_thread_id: number;
  contain_meet_up: number;
  has_document: number;
  contain_request:number;
  id: number;
  message: string;
  read_status: number;
  send_timestamp: string;
  sender: {
    firstname: string;
    id: number;
    lastname: string;
  };
  meet_up: {
    chat_line_id: number;
    chat_thread_id: number;
    created_at: string;
    date: string;
    id: number;
    location: string;
    message: string;
    requested_by: number;
    status: number;
    time: string;
  };
  request: I_CHAT_BOOKING;
  sender_id: number;
  created_at: string;
}

export interface I_CHAT_BOOKING {
  id: number;
  booking_user_id: number;
  chat_thread_id: number;
  pet_type: number;
  drop_of_date: string;
  drop_of_time_from: string;
  drop_of_time_to: string;
  pickup_up_date: string;
  pickup_up_time_from: string;
  pickup_up_time_to: string;
  need_sitter_pickup: number;
  message: string;
  want_to_receive_media: number;
  tax: string;
  discount: string;
  sub_total: string;
  total_paid_amount: string;
  amend_amount: string;
  payment_status: number;
  status: number;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    profile_picture: string;
    address: {
      id: number;
      house_number: string;
      address: string;
      city: string;
      postcode: string;
    };
  };
  service: { id: number; name: string };
  pets: {
    id: number;
    pet_booking_id: number;
    breed_id: number;
    breed: I_BREED;
    pet_image: string;
    pet_name: string;
    weight: number;
    age_year: number;
    age_month: number;
    sex: number;
    created_at: string;
    updated_at: string;
  }[];
  additional_services: I_PET_ADDITIONAL_SERVICE[];
}

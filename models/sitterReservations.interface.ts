export default interface I_SITTER_RESERVATION {
  id: number;
  booking_user_id: number;
  drop_of_date: string;
  drop_of_time_from: string;
  pickup_up_date: string;
  pickup_up_time_to: string;
  total_paid_amount: string;
  amend_amount: string;
  payment_status: number;
  cancellation_policy:number;
  status: number;
  sitter?: {
    id: number;
    firstname: string;
    lastname: string;
    profile_picture: string;
    address: {
      id: number;
      house_number: string;
      address: string;
      city_id: number;
      postcode: string;
      city: {
        id: number;
        name: string;
      };
    };
  };
  user?: {
    id: number;
    firstname: string;
    lastname: string;
    profile_picture: string;
    address: {
      id: number;
      house_number: string;
      address: string;
      city_id: number;
      postcode: string;
      city: {
        id: number;
        name: string;
      };
    };
  };
  service: {
    id: number;
    name: string;
  };
}

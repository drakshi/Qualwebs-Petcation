export interface I_SEARCH_SITTER {
  address: Address;
  firstname: string;
  id: number;
  lastname: string;
  price: number;
  profile_picture: string;
  overall_rate: number;
  total_review: number;
  is_favorite: boolean;

}

type Address = {
  address: string;
  city: { id: number; name: string };
  city_id: 7;
  description: string;
  dog_other_pets: number;
  fenced_yard: number;
  hide_address: number;
  house_number: string;
  id: number;
  live_in_house: number;
  no_children_present: number;
  non_smoking_household: number;
  postcode: string;
  updated_at: string;
  map_latitude:string;
  map_longitude:string;
};

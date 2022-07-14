import I_BREED from "./breed.interface";

export default interface I_PET {
  id: number;
  pet_type: {
    id: number;
    name: string;
    status: number;
    created_at: null;
    updated_at: null;
  };
  user_id: number;
  breed_id: number;
  pet_image: string;
  pet_name: string;
  weight: {
    id: number;
    name: string;
  };
  age_year: number;
  age_month: number;
  sex: 0 | 1;
  created_at: string;
  updated_at: string;
  breed: I_BREED;
}

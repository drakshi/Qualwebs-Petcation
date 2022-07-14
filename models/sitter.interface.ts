import SitterProfileHeader from "../components/sitterProfile/SitterProfileHeader";
import React from "react";
import {number} from "prop-types";

export interface I_SINGLE_SITTER {
  id: number;
  firstname: string;
  total_review: number;
  overall_rate: number;
  lastname: string;
  is_favorite:number;
  profile_picture: string;
  is_verified: number;
  cancellation_policy: number;
  preference: {
    online: boolean;
    pets_care: number;
    happy_customers: number;
    experience: number;
    rehire_rate: number;
    response_within: string;
    job_completion: number;
    response_rate: number;

  };
  pets: {
    id: number;
    pet_type: {
      id: number;
      name: string;
    };
    user_id: number;
    breed_id: number;
    pet_image: string;
    pet_name: string;
    weight: number;
    age_year: number;
    age_month: number;
    sex: number;
    created_at: string;
    updated_at: string;
    breed: {
      id: number;
      breed: string;
    };
  }[];
  address: {
    id: number;
    house_number: string;
    address: string;
    longitude: string;
    latitude: string;
    city: string;
    postcode: string;
    description: string;
    hide_address: number;
    live_in_house: number;
    non_smoking_household: number;
    no_children_present: number;
    fenced_yard: number;
    dog_other_pets: number;
    updated_at: string;
    is_address_completed: number;
    map_latitude: string;
    map_longitude: string;
    distance: string;
  };
  skills: {
    id: number;
    skill: string;
  }[];
  questions: {
    id: number;
    question: string;
  }[];
  images: string[];
  active_services: {
    service: {
      id: number;
      name: string;
    };
  }[];
}

export interface I_HOUSE_CALL_SERVICE {
  id?: number;
  service_pets: I_HOUSE_CALL_PET[];
  holiday_extra_charges: number;
  cancellation_policy: number;
  sitter_grooming_service_id?: number;
}

export interface I_PET_ADDITIONAL_SERVICE {
  id?: number;
  name: string;
  description: string;
  price: number;
}

export interface I_HOUSE_CALL_PET {
  pet_type: number;
  fees: I_FEES[];
  custom_services?: I_PET_ADDITIONAL_SERVICE[];
  id?: number;
}

interface I_FEES {
  id?: number;
  medical_service_id: number;
  service_charge: string;
  earning_amount: string;
}

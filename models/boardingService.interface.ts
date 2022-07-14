export interface I_BOARDING_SERVICE {
  id?: number;
  service_pets: I_BOARDING_SERVICE_PET[];
  holiday_extra_charges: number;
  cancellation_policy: number;
  boarding_service_id: number;
  sitter_boarding_service_id?: number;
}

export interface I_PET_ADDITIONAL_SERVICE {
  id?: number;
  name: string;
  description: string;
  price: number;
}

export interface I_BOARDING_SERVICE_PET {
  pet_type: number;
  fees: I_FEES[];
  custom_services?: I_PET_ADDITIONAL_SERVICE[];
  id?: number;
}

interface I_FEES {
  id?: number;
  capacity: number;
  pet_size_id: number;
  service_charge: string;
  earning_amount: string;
}

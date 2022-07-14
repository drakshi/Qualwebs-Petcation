export default interface I_AVIALABILITY {
  data: availability[];
}

export type availability = {
  ScheduleDate: string;
  Day: string;
  Timestamp: number;
  Services: {
    data: {
      service_id: number;
      is_available: number;
      number_of_bookings: number;
    }[];
  };
};

export default interface I_AVAILABLE_SERVICE {
  service: {
    id: number;
    name: string;
    availability: {
      weekday_id: number;
    }[];
  };
}

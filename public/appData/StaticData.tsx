import { select } from "./AppData";

export const D_WALK_COUNT: select[] = [
  {
    value: 1,
    label: "1 Dog",
    key: 1,
  },
  {
    value: 2,
    label: "2 Dogs",
    key: 2,
  },
  {
    value: 3,
    label: "3 Dogs",
    key: 3,
  },
  {
    value: 4,
    label: "4 Dogs",
    key: 4,
  },
  {
    value: 5,
    label: "5 Dogs",
    key: 5,
  },
  {
    value: 6,
    label: "6 Dogs",
    key: 6,
  },
];

export const D_FLEXIBILITY: select[] = [
  {
    value: 1,
    label: "Flexible",
    key: 1,
  },
  {
    value: 2,
    label: "Full-Time",
    key: 2,
  },
  {
    value: 3,
    label: "Part-Time",
    key: 3,
  },
];

export const D_FREQUENT_BREAKS: select[] = [
  {
    value: 1,
    label: "0 - 2 Hrs",
    key: 1,
  },
  {
    value: 2,
    label: "2 - 4 Hrs",
    key: 2,
  },
];

export const D_BOOLEAN: select[] = [
  {
    value: true,
    label: "Yes",
    key: 1,
  },
  {
    value: false,
    label: "No",
    key: 2,
  },
];

export const D_TRANSPORTATION: select[] = [
  {
    value: 1,
    label: "Car",
    key: 1,
  },
  {
    value: 2,
    label: "Bus",
    key: 2,
  },
  {
    value: 3,
    label: "Train",
    key: 3,
  },
  {
    value: 4,
    label: "Walk",
    key: 4,
  },
];

export const D_DISTANCE: select[] = [
  { value: 7, label: "300 m", key: 7 },
  { value: 8, label: "500 m", key: 8 },
  { value: 9, label: "800 m", key: 9 },
  { value: 1, label: "1 km", key: 1 },
  { value: 2, label: "3 km", key: 2 },
  { value: 3, label: "5 km", key: 3 },
  { value: 4, label: "10 km", key: 4 },
  { value: 5, label: "15 km", key: 5 },
  { value: 6, label: "20 km", key: 6 },
];

export const D_BUDGET: select[] = [
  { value: 0, label: "none", key: 0 },
    { value: 1, label: "~ ¥ 999", key: 1 },
  { value: 2, label: "¥ 1,000 ~ ¥ 1,999", key: 2 },
  { value: 3, label: "¥ 2,000 ~ ¥ 2,999", key: 3 },
  { value: 4, label: "¥ 3,000 ~ ¥ 3,999", key: 4 },
  { value: 5, label: "¥ 4,000 ~ ¥ 4,999", key: 5 },
  { value: 6, label: "¥ 5,000 ~ ¥ 5,999", key: 6 },
  { value: 7, label: "¥ 6,000 ~ ¥ 6,999", key: 7 },
];

export const D_SERVICE_AND_AMENITIES = [
  { name: "Dog run", id: 1 },
  { name: "Has Pet Menu", id: 2 },
  { name: "Cage Free", id: 3 },
  { name: "Has pick-up service", id: 4 },
  { name: "Has pets good shop", id: 5 },
  { name: "Photograph Service", id: 6 },
  { name: "Provide water", id: 7 },
  { name: "others", id: 8 },
];

export const D_TRANSPORTATION_PREFERENCE = [
  {transport_mode_id:1,price_start_from:'0',status: 0},
  {transport_mode_id:2,price_start_from:'0',status: 0},
  {transport_mode_id:3,price_start_from:'0',status: 0},
  {transport_mode_id:4,price_start_from:'0',status: 0},
]

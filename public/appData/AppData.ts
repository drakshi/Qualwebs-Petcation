import { servicesVersion } from "typescript";

export type select = {
  key: number;
  value: any;
  label: string;
};

export type pet = {
  age: number;
  image: string;
  name: string;
  location: string;
  weight: number;
};

export const successOptions = {
  position: "top-right",
  style: {
    backgroundColor: "white",
    color: "green",
    fontFamily: "Menlo, monospace",
    fontSize: "16px",
    textAlign: "center",
  },
  closeStyle: {
    color: "green",
    fontSize: "16px",
  },
};

export const errorOptions = {
  position: "top-right",
  zIndex: 102,
  style: {
    backgroundColor: "white",
    color: "red",
    fontFamily: "Menlo, monospace",
    fontSize: "16px",
    textAlign: "center",
    zIndex: 102,
  },
  closeStyle: {
    color: "red",
    fontSize: "16px",
  },
};

export const serviceFeeObject = {
  capacity: 1,
  pet_size_id: 1,
  service_charge: "",
  earning_amount: "",
};

export const cities: select[] = [
  { key: 1, label: "Shinjuku City", value: "Shinjuku City" },
  { key: 2, label: "Another City", value: "Another City" },
];

export const pets = [
  { key: 1, label: "Dog", value: 1 },
  { key: 2, label: "Cat", value: 2 },
  { key: 3, label: "Birds", value: 3 },
  { key: 4, label: "Reptiles", value: 4 },
  { key: 5, label: "Small animals", value: 5 },
];

export const newsAndEvents = [
  {
    key: 1,
    posted: "07/10/2021, 3PM",
    post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused.",
  },
  {
    key: 2,
    posted: "07/10/2021, 3PM",
    post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused.",
  },
  {
    key: 3,
    posted: "07/10/2021, 3PM",
    post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused.",
  },
  {
    key: 4,
    posted: "07/10/2021, 3PM",
    post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused.",
  },
  {
    key: 5,
    posted: "07/10/2021, 3PM",
    post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused.",
  },
  {
    key: 6,
    posted: "07/10/2021, 3PM",
    post: "Petcitation website will be on maintenance from 3PM to 6PM on 21July 2021(Japan Time).We apologise for the inconvinience caused.",
  },
];

export const faq = [
  {
    id: "1",
    question: "1. How do I assure pet sitter is a genuine person?",
    answer:
      "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application.",
  },
  {
    id: "2",
    question: "2. How do I assure pet sitter is a genuine person?",
    answer:
      "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application.",
  },
  {
    id: "3",
    question: "3. How do I assure pet sitter is a genuine person?",
    answer:
      "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application.",
  },
  {
    id: "4",
    question: "4. How do I assure pet sitter is a genuine person?",
    answer:
      "We advise our students to start at least 15 months prior to the intake period of an educational institute. This allows suffcient time to build an ideal profile and process the application.",
  },
];

type service = {
  name: string;
  description: string;
  id: number;
};

export const serviceData: select[] = [
  { key: 1, value: 1, label: "Boarding" },
  { key: 2, value: 2, label: "House Sitting" },
  { key: 3, value: 3, label: "Drop-in-visits" },
  { key: 4, value: 4, label: "Pet Day care" },
  { key: 5, value: 5, label: "Dog walking" },
  { key: 6, value: 6, label: "Pet grooming" },
  { key: 7, value: 7, label: "House call" },
];

export const petType: select[] = [
  { key: 1, value: "Dog Boarding", label: "Dog Boarding" },
  { key: 2, value: "House Sitting", label: "House Sitting" },
  { key: 3, value: "Drop-in-visits", label: "Drop-in-visits" },
  { key: 4, value: "Doggy Day care", label: "Doggy Day care" },
  { key: 5, value: "Dog walking", label: "Dog walking" },
];

export const prices: select[] = [
  { key: 1, value: 1, label: "All Prices" },
  { key: 2, value: 2, label: "10000-20000" },
  { key: 3, value: 3, label: "20000-30000" },
  { key: 4, value: 4, label: "50000 - more" },
];

export const ServiceTime: select[] = [
  { key: 1, value: "One Time", label: "One Time" },
  { key: 2, value: "Repeat Weekly", label: "Repeat Weekly" },
];

export const petSize: select[] = [
  { key: 1, value: 1, label: "0 - 5 kg" },
  { key: 2, value: 2, label: "5 - 10 kg" },
  { key: 3, value: 3, label: "10 - 25 kg" },
  { key: 4, value: 4, label: "25 - 40 kg" },
  { key: 5, value: 5, label: "40+ kg" },
];
export const durations: select[] = [
  { key: 1, value: 30, label: "30 mins" },
  { key: 2, value: 60, label: "60 mins" },
  { key: 3, value: 90, label: "90 mins" },
  { key: 4, value: 120, label: "120 mins" },
];
export const petCount: select[] = [
  { key: 1, value: 1, label: "1" },
  { key: 2, value: 2, label: "2" },
  { key: 3, value: 3, label: "3" },
];

export const sort: select[] = [
  {
    key: 1,
    value: "Distance closest to furthest",
    label: "Distance closest to furthest",
  },
  { key: 2, value: "Higher to lower", label: "Higher to lower" },
  { key: 3, value: "Lower to higher", label: "lower to higher" },
];

export const pet: select[] = [
  { key: 1, label: "Dog", value: "1" },
  { key: 2, label: "Cat", value: "2" },
  { key: 3, label: "Birds", value: "3" },
  { key: 4, label: "Reptiles", value: "4" },
  { key: 5, label: "Small animals", value: "5" },
];

export const myPets: pet[] = [
  {
    age: 7,
    image: "/",
    name: "Milo",
    location: "Siberian husky",
    weight: 16,
  },
  {
    age: 7,
    image: "/",
    name: "Milo",
    location: "Siberian husky",
    weight: 16,
  },
];

export const reviewStateData = {
  rating: 4,
  cleanliness: 4,
  accuracy: 4,
  communication: 4,
  location: 4,
  checkIn: 4,
  value: 5,
};

export const reviewObjectData = {
  userImage: "/",
  userName: "Mark Evans",
  date: "June 10, 2021",
  time: "7:30pm",
  review:
    "“Abbey is the best dog mom I’ve ever known! Responsible, attentive, playful, and loving. I met her when she was volunteering to help shelter animals - her empathy for animal souls is limitless.”",
  rating: 4,
  userImages: ["/", "/", "/", "/"],
  userCount: 10,
  sitterResponse: true,
  sitterReply: "Thank you for your kind words Mark!",
  sitterImage: "/",
  sitterName: "Rebecca W.",
};

export const sitterServices = [
  {
    service: "Boarding",
    description: "in the sitter's home",
    price: "¥40",
    period: "per night",
  },
  {
    service: "House Sitting",
    description: "in the home",
    price: "¥40",
    period: "per night",
  },
  {
    service: "Drop-In Visits",
    description: "visit in your home",
    price: "¥40",
    period: "per night",
  },
  {
    service: "Doggy Day Care",
    description: "in the sitter's home",
    price: "¥40",
    period: "per night",
  },
  {
    service: "Dog Walking",
    description: "in your neighborhood",
    price: "¥40",
    period: "per night",
  },
];

export const sitterStates = {
  bookingForMe: 100,
  bookingByMe: 50,
  pBookingForMe: 20,
  pBookingByMe: 15,
  pTotalBooking: 25,
  totalEarning: 34000,
  pTotalEarning: -25,
  totalReferral: 10,
  pTotalReferral: 10,
};

export const requestsArray = [
  {
    name: "Finch’s",
    service: "Dog Walk",
    address: "Vancouver, WA, 98686",
    from: "29 Jun 2021",
    to: "30 Jun 2021",
    total: "¥350",
  },
  {
    name: "Finch’s",
    service: "Dog Walk",
    address: "Vancouver, WA, 98686",
    from: "29 Jun 2021",
    to: "30 Jun 2021",
    total: "¥360",
  },
  {
    name: "Finch’s",
    service: "Dog Walk",
    address: "Vancouver, WA, 98686",
    from: "29 Jun 2021",
    to: "30 Jun 2021",
    total: "¥370",
  },
  {
    name: "Finch’s",
    service: "Dog Walk",
    address: "Vancouver, WA, 98686",
    from: "29 Jun 2021",
    to: "30 Jun 2021",
    total: "¥380",
  },
];

export const meetingRequests = [
  {
    date: 0,
    service: "Day Care",
    clientName: "David T.",
    address: " Vancouver, WA, 98686",
  },
  {
    date: 0,
    service: "Day Care",
    clientName: "David T.",
    address: " Vancouver, WA, 98687",
  },
  {
    date: 0,
    service: "Day Care",
    clientName: "David T.",
    address: " Vancouver, WA, 98688",
  },
  {
    date: 0,
    service: "Day Care",
    clientName: "David T.",
    address: " Vancouver, WA, 98689 ",
  },
];

export const reservationRequests = [
  {
    id: 1,
    from: "29 Jun 2021, 3PM",
    to: "30 Jun 2021, 3PM",
    paymentStatus: "PAID",
    total: "¥350",
    name: "Molly’s - Day Care",
    clientName: "David T.",
    address: "Vancouver, WA, 98686",
    image: "/",
  },
  {
    id: 1,
    from: "29 Jun 2021, 3PM",
    to: "30 Jun 2021, 3PM",
    paymentStatus: "PAID",
    total: "¥350",
    name: "Molly’s - Day Care",
    clientName: "David T.",
    address: "Vancouver, WA, 98686",
    image: "/",
  },
  {
    id: 1,
    from: "29 Jun 2021, 3PM",
    to: "30 Jun 2021, 3PM",
    paymentStatus: "PAID",
    total: "¥350",
    name: "Molly’s - Day Care",
    clientName: "David T.",
    address: "Vancouver, WA, 98686",
    image: "/",
  },
  {
    id: 1,
    from: "29 Jun 2021, 3PM",
    to: "30 Jun 2021, 3PM",
    paymentStatus: "PAID",
    total: "¥350",
    name: "Molly’s - Day Care",
    clientName: "David T.",
    address: "Vancouver, WA, 98686",
    image: "/",
  },
  {
    id: 1,
    from: "29 Jun 2021, 3PM",
    to: "30 Jun 2021, 3PM",
    paymentStatus: "PAID",
    total: "¥350",
    name: "Molly’s - Day Care",
    clientName: "David T.",
    address: "Vancouver, WA, 98686",
    image: "/",
  },
];

//Important

export const myServices = [
  {
    serviceName: "Boarding",
    description: "Your client’s pets come to your home and stay overnight.",
    active: true,
    instantBooking: false,
    specifications: [
      "Lives in a House",
      "Get your first booking sooner",
      "Make more money on the weekends (Thu-Sun)",
    ],
    route: "/user/my-services/boarding",
  },
  {
    serviceName: "Grooming",
    description:
      "Your client can come or you can go for grooming services of their pets",
    active: true,
    instantBooking: true,
    specifications: [],
    route: "/user/my-services/grooming",
  },
  {
    serviceName: "House Sitting",
    description:
      "You go to your client’s home and stay overnight, taking care of their dogs and home.",
    active: false,
    instantBooking: true,
    specifications: [],
    route: "/user/my-services/boarding",
  },
  {
    serviceName: "Drop-In Visits",
    description:
      "Your clients ask you to do 60-minute home visits to feed and play with their pets",
    active: true,
    instantBooking: true,
    specifications: [],
    route: "/user/my-services/boarding",
  },
  {
    serviceName: "Pet Day Care",
    description:
      "Your client’s pets stay at your home during the day, Drop offs are around 7-9am, and pick ups are around 4-6pm.",
    active: true,
    instantBooking: true,
    specifications: [],
    route: "/user/my-services/boarding",
  },
  {
    serviceName: "Dog Walking",
    description:
      "Your clients request 30-minute dog walk in their neighborhood",
    active: true,
    instantBooking: true,
    specifications: [],
    route: "/user/my-services/boarding",
  },
  {
    serviceName: "House Call",
    description:
      "Your client’s ask you to bring veterinary care into client’s home.",
    active: true,
    instantBooking: true,
    specifications: [],
    route: "/user/my-services/boarding",
  },
];

export const spots = [
  {
    images: [
      "/images/img9.png",
      "/images/img9.png",
      "/images/img9.png",
      "/images/img9.png",
      "/images/img9.png",
    ],
    name: "Pets Home Stay",
    location: "Shinjuku City, Tokyo",
    availableFor: ["Dog", "Cat"],
    rating: "4.69",
    review: 10,
    repeatedClient: 43,
  },
  {
    images: [
      "/images/img9.png",
      "/images/img9.png",
      "/images/img9.png",
      "/images/img9.png",
      "/images/img9.png",
    ],
    name: "Pets Home Stay",
    location: "Shinjuku City, Tokyo",
    availableFor: ["Dog", "Cat"],
    rating: "4.69",
    review: 10,
    repeatedClient: 43,
  },
];

export const reviews = [
  {
    name: "Doggytales Home Stay",
    place: "Pet friendly Hotel",
    address: "Shinjuku City, Tokyo",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.5,
    image: "/images/review-img1.png",
  },
  {
    name: "Doggytales Home Stay",
    place: "Pet friendly Hotel",
    address: "Shinjuku City, Tokyo",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
    image: "/images/review-img1.png",
  },
  {
    name: "Doggytales Home Stay",
    place: "Pet friendly Hotel",
    address: "Shinjuku City, Tokyo",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 3.5,
    image: "/images/review-img1.png",
  },
  {
    name: "Doggytales Home Stay",
    place: "Pet friendly Hotel",
    address: "Shinjuku City, Tokyo",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
    image: "/images/review-img1.png",
  },
];

export const gender = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];

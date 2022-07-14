interface IDashboard {
  id: number;
  firstname: string;
  lastname: string;
  description:string,
  email: string;
  email_verified_at: any;
  facebook_id: string;
  google_id: string;
  twitter_id: string;
  line_id: string;
  phone_number: number;
  dob: string;
  images?: {
    id: number;
    user_id: number;
    path: string;
  }[];
  address?: {
    id: number;
    address: string;
    longitude: string;
    latitude: string;
    city: string;
    postcode: string;
  };
  profile_picture: string;
  primary_contact_person: any;
  primary_contact_number: any;
  secondary_contact_person: any;
  secondary_contact_number: any;
  created_at: string;
  updated_at: string;
  passport_image: string;
  liscense_image:string;
  passport_number: string;
  liscense_number: string;
  is_verified: number;
  user_document: {
    document_number: string;
    path: string;
    document_type: number;
    id: number;
    status: number;
  }[],
}

export default IDashboard;

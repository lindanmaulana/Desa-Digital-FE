import type { Image } from "../images/image.types";

export type  Gender = ["MALE", "FEMALE"]
export type Marital = ["SINGLE", "MARRIED"]

export interface HeadOfFamily {
  id: string
  user_id: string;
  identity_number?: string;
  gender: Gender;
  date_of_birth?: string;
  phone_number?: string;
  occupation?: string;
  marital_status: Marital;

  image: Image
  
  created_at: Date;
  updated_at: Date;
}

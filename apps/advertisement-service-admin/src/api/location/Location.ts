import { Advertisement } from "../advertisement/Advertisement";
import { User } from "../user/User";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  country: string | null;
  state: string | null;
  city: string | null;
  postalCode: string | null;
  advertisements?: Array<Advertisement>;
  users?: Array<User>;
};

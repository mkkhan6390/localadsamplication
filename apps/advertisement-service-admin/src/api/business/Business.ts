import { Advertisement } from "../advertisement/Advertisement";
import { JsonValue } from "type-fest";

export type Business = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  advertisements?: Array<Advertisement>;
  contactDetails: JsonValue;
};

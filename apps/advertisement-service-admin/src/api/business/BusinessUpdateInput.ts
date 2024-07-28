import { AdvertisementUpdateManyWithoutBusinessesInput } from "./AdvertisementUpdateManyWithoutBusinessesInput";
import { InputJsonValue } from "../../types";

export type BusinessUpdateInput = {
  name?: string | null;
  description?: string | null;
  advertisements?: AdvertisementUpdateManyWithoutBusinessesInput;
  contactDetails?: InputJsonValue;
};

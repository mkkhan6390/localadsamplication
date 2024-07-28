import { AdvertisementCreateNestedManyWithoutBusinessesInput } from "./AdvertisementCreateNestedManyWithoutBusinessesInput";
import { InputJsonValue } from "../../types";

export type BusinessCreateInput = {
  name?: string | null;
  description?: string | null;
  advertisements?: AdvertisementCreateNestedManyWithoutBusinessesInput;
  contactDetails?: InputJsonValue;
};

import { AdvertisementCreateNestedManyWithoutLocationsInput } from "./AdvertisementCreateNestedManyWithoutLocationsInput";
import { UserCreateNestedManyWithoutLocationsInput } from "./UserCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  country?: string | null;
  state?: string | null;
  city?: string | null;
  postalCode?: string | null;
  advertisements?: AdvertisementCreateNestedManyWithoutLocationsInput;
  users?: UserCreateNestedManyWithoutLocationsInput;
};

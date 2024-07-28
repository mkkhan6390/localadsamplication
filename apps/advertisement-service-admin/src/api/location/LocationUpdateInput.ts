import { AdvertisementUpdateManyWithoutLocationsInput } from "./AdvertisementUpdateManyWithoutLocationsInput";
import { UserUpdateManyWithoutLocationsInput } from "./UserUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  country?: string | null;
  state?: string | null;
  city?: string | null;
  postalCode?: string | null;
  advertisements?: AdvertisementUpdateManyWithoutLocationsInput;
  users?: UserUpdateManyWithoutLocationsInput;
};

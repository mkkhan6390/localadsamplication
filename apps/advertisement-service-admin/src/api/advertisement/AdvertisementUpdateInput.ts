import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type AdvertisementUpdateInput = {
  typeField?: string | null;
  contentUrl?: string | null;
  business?: BusinessWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
};

import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type AdvertisementCreateInput = {
  typeField?: string | null;
  contentUrl?: string | null;
  business?: BusinessWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
};

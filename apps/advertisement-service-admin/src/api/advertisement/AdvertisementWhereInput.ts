import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type AdvertisementWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  contentUrl?: StringNullableFilter;
  business?: BusinessWhereUniqueInput;
  location?: LocationWhereUniqueInput;
};

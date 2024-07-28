import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdvertisementListRelationFilter } from "../advertisement/AdvertisementListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  country?: StringNullableFilter;
  state?: StringNullableFilter;
  city?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  advertisements?: AdvertisementListRelationFilter;
  users?: UserListRelationFilter;
};

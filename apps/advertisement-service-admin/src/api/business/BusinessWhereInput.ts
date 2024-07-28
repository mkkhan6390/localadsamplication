import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdvertisementListRelationFilter } from "../advertisement/AdvertisementListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BusinessWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  advertisements?: AdvertisementListRelationFilter;
  contactDetails?: JsonFilter;
};

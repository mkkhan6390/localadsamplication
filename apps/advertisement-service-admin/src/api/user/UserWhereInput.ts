import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  emailContact?: StringNullableFilter;
  location?: LocationWhereUniqueInput;
};

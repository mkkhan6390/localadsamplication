import { InputJsonValue } from "../../types";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  emailContact?: string | null;
  location?: LocationWhereUniqueInput | null;
};

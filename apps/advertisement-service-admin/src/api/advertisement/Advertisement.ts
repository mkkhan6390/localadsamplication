import { Business } from "../business/Business";
import { Location } from "../location/Location";

export type Advertisement = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  contentUrl: string | null;
  business?: Business | null;
  location?: Location | null;
};

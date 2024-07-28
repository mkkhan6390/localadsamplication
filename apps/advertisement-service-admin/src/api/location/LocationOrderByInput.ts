import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  country?: SortOrder;
  state?: SortOrder;
  city?: SortOrder;
  postalCode?: SortOrder;
};

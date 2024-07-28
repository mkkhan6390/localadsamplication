import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  contactDetails?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type AdvertisementOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  contentUrl?: SortOrder;
  businessId?: SortOrder;
  locationId?: SortOrder;
};

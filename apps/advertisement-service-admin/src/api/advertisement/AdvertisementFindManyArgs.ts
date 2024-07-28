import { AdvertisementWhereInput } from "./AdvertisementWhereInput";
import { AdvertisementOrderByInput } from "./AdvertisementOrderByInput";

export type AdvertisementFindManyArgs = {
  where?: AdvertisementWhereInput;
  orderBy?: Array<AdvertisementOrderByInput>;
  skip?: number;
  take?: number;
};

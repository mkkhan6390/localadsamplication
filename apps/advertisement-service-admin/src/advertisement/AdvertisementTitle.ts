import { Advertisement as TAdvertisement } from "../api/advertisement/Advertisement";

export const ADVERTISEMENT_TITLE_FIELD = "typeField";

export const AdvertisementTitle = (record: TAdvertisement): string => {
  return record.typeField?.toString() || String(record.id);
};

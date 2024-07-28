import { Location as TLocation } from "../api/location/Location";

export const LOCATION_TITLE_FIELD = "country";

export const LocationTitle = (record: TLocation): string => {
  return record.country?.toString() || String(record.id);
};

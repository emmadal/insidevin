import { VehicleRecordType, VehicleTitleBrandType } from "../types/index";

export const vehicle_record: VehicleRecordType = {
  title_brand: "The vehicle has a branded title",
  odometer: "The vehicle has no mileage discrepancy",
  accident: "3 accident record(s) found.",
  damage: "2 record(s) of damage are found for the vehicle",
  event: "The vehicle has 1 specific event reported",
  service_repair: "The vehicle has no service & repair record(s)",
  auction: "The vehicle has no auction record(s)",
  lien_loan: "The vehicle has no lien or loan record(s)",
  theft: "The vehicle has no stolen or theft record(s)",
  recall: "The vehicle has no open recalls record",
};
export const vehicle_brand_check: VehicleTitleBrandType = {
  fire_brand: "The vehicle title has no fire damage record",
  hail_brand: "The vehicle title has no hail damage record",
  flood_brand: "The vehicle title has no flood damage record",
  junk_brand: "The vehicle title has no auction junk record",
  manufacturer: "The vehicle title has no manufacturer buyback record",
  lemon_brand: "The vehicle title has no lemon brand record",
  salvage_brand: "The vehicle title has salvage brand record",
  rebuilt_brand: "The vehicle title has no rebuilt or rebuildable record",
  odemeter_brand: "The vehicle title has no mileage discrepancy record",
  auction_brand: "The vehicle has no open recalls record",
};

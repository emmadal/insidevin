export type Summary = {
  id: string;
  name: string;
  last?: boolean;
};

export type VehicleReportType = {
  trim: string;
  engine: string;
  fuel_type: string;
  transmission: string;
  drive_type: string;
  doors: number;
  curb_weight: string;
  msrp: string;
  body_type: string;
  vehicle_type: string;
  vehicle_size: string;
  country: string;
  standard_seating: number;
};

export type VehicleRecordType = {
  title_brand: string;
  odometer: string;
  accident: string;
  damage: string;
  event: string;
  service_repair: string;
  auction: string;
  lien_loan: string;
  theft: string;
  recall: string;
};
export type VehicleTitleBrandType = {
  fire_brand: string;
  hail_brand: string;
  flood_brand: string;
  junk_brand: string;
  manufacturer: string;
  lemon_brand: string;
  salvage_brand: string;
  rebuilt_brand: string;
  odemeter_brand: string;
  auction_brand: string;
};

export type VehicleOwnerShipType = {
  id?: number;
  purchased_on: string;
  located_in: string;
  owned_from: string;
  duration: string;
};

export type VehicleMileageType = {
  id?: number;
  date: string;
  mileage: string;
};

export type VehicleInformationType = {
  odometer: string;
  condition: string;
  primary_damage: string;
  secondary_damage: string;
  exterior_color: string;
  repair_cost: number;
};

export type VehicleConditionType = {
  seller_type: string;
  sales_document: string;
  primary_damage: string;
  secondary_damage: string;
  exterior_color: string;
  repair_cost: number;
};

export type VehicleAccidentType = {
  id?: number;
  reported: string;
  located?: string;
};

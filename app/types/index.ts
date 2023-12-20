export type Summary = {
  id?: number | string;
  name: string;
  last?: boolean;
};

export type VehicleReportType = {
  id?: number | string;
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
  id?: number | string;
  title: string;
  description: string;
  isrecord?: boolean;
};
export type VehicleTitleBrandType = {
  id?: number | string;
  title: string;
  description: string;
  isrecord?: boolean;
};

export type VehicleOwnerShipType = {
  id?: number | string;
  purchased_on: string;
  located_in: string;
  owned_from: string;
  duration: string;
};

export type VehicleMileageType = {
  id?: number | string;
  date: string;
  mileage: string;
};

export type VehicleInformationType = {
  id?: number | string;
  odometer: string;
  condition: string;
  primary_damage: string;
  secondary_damage: string;
  exterior_color: string;
  repair_cost: number;
};

export type VehicleConditionType = {
  id?: number | string;
  seller_type: string;
  sales_document: string;
  primary_damage: string;
  secondary_damage: string;
  exterior_color: string;
  repair_cost: number;
};

export type VehicleAccidentType = {
  id?: number | string;
  reported: string;
  located?: string;
};

export type VehicleDamageType = {
  id?: number | string;
  title: string;
  description?: string;
  isrecord?: boolean;
};

export type VehicleHistoryType = {
  id?: number | string;
  date: string;
  source: string;
  location: string;
  odometer: string;
  details: string;
};

export type VehicleRepairCostType = {
  id?: number | string;
  title: string;
  parts: string;
  labor: string;
  description: string;
};

export type VehicleWarrantyType = {
  id?: number | string;
  warranty: string;
  months: string;
};

export type VehicleEventType = {
  id?: number | string;
  title: string;
  description: string;
  isrecord?: boolean;
};

export type VehicleUsageType = {
  id?: number | string;
  title: string;
  isrecord?: boolean;
};

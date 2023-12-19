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

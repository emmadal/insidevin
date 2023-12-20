import {
  VehicleAccidentType,
  VehicleDamageType,
  VehicleInformationType,
  VehicleConditionType,
  VehicleHistoryType,
  VehicleMileageType,
  VehicleOwnerShipType,
  VehicleRecordType,
  VehicleTitleBrandType,
  VehicleReportType,
  Summary,
  VehicleRepairCostType,
  VehicleEventType,
  VehicleWarrantyType,
  VehicleUsageType,
} from "../types/index";

import { v4 as uuidv4 } from "uuid";

export const vehicle_accident: VehicleAccidentType[] = [
  {
    id: 1,
    reported: "03/01/2018",
  },
  {
    id: 2,
    reported: "08/24/2018",
    located: "OH",
  },
  {
    id: 3,
    reported: "04/30/2021",
    located: "THOMASVILLE, GA",
  },
];

export const vehicle_damage: VehicleDamageType[] = [
  {
    title: "Non-title fire damaged",
    description: "The vehicle has Insurance Loss record",
  },
  {
    title: "Non-title hail damaged",
    description: "The vehicle title has no hail damage record",
  },
  {
    title: "Non-title flood damaged",
    description: "The vehicle title has no flood damage record",
  },
  {
    title: "Auction junk or scrapped",
    description: "The vehicle title has no record of auction junk",
  },
  {
    title: "Recycling facility",
    description: "The vehicle title has no record of recycling facility",
  },
  {
    title: "Structural alteration",
    description: "The vehicle title has no structural damage record",
  },
  {
    title: "Salvage auction",
    description: "The vehicle has salvage auction record",
    isrecord: true,
  },
  {
    title: "Auction rebuildable",
    description: "The vehicle title has no auction rebuildable record",
  },
  {
    title: "Minor/Major damage incident",
    description: "The vehicle has minor/major damage incident",
    isrecord: true,
  },
  {
    title: "Dent and Scratches",
    description: "The vehicle title has no dent and scratches record",
  },
];

export const vehicle_information: VehicleInformationType = {
  odometer: "81,352",
  condition: "RUNS AND DRIVES",
  primary_damage: "FRONT END",
  secondary_damage: "REAR END",
  exterior_color: "SILVER",
  repair_cost: 13235,
};

export const vehicle_condition: VehicleConditionType = {
  seller_type: "Auction",
  sales_document: "CERT OF TITLE-SALVAGE",
  primary_damage: "FRONT END",
  secondary_damage: "REAR END",
  exterior_color: "SILVER",
  repair_cost: 13235,
};

export const vehicle_history: VehicleHistoryType[] = [
  {
    date: "2013",
    source: "Independent Source",
    location: "COLUMBUS, OH",
    odometer: "N/A",
    details: "Vehicle Manufactured And Shipped To Dealer",
  },
  {
    date: "2017",
    source: "Independent Source",
    location: "COLUMBUS, OH",
    odometer: "N/A",
    details: "Vehicle Manufactured And Shipped To Dealer",
  },
  {
    date: "2015",
    source: "Independent Source",
    location: "COLUMBUS, OH",
    odometer: "N/A",
    details: "Vehicle Manufactured And Shipped To Dealer",
  },
  {
    date: "2018",
    source: "Independent Source",
    location: "COLUMBUS, OH",
    odometer: "N/A",
    details: "Vehicle Manufactured And Shipped To Dealer",
  },
  {
    date: "2020",
    source: "Independent Source",
    location: "COLUMBUS, OH",
    odometer: "N/A",
    details: "Vehicle Manufactured And Shipped To Dealer",
  },
  {
    date: "2021",
    source: "Independent Source",
    location: "COLUMBUS, OH",
    odometer: "N/A",
    details: "Vehicle Manufactured And Shipped To Dealer",
  },
  {
    date: "2023",
    source: "Independent Source",
    location: "COLUMBUS, OH",
    odometer: "N/A",
    details: "Vehicle Manufactured And Shipped To Dealer",
  },
];

export const vehicle_ownership: VehicleOwnerShipType[] = [
  {
    id: 1,
    purchased_on: "2015",
    located_in: "OH",
    owned_from: "01/2015 - 01/2017",
    duration: "2 year(s)",
  },
  {
    id: 2,
    purchased_on: "2015",
    located_in: "OH",
    owned_from: "01/2015 - 01/2017",
    duration: "2 year(s)",
  },
  {
    id: 3,
    purchased_on: "2015",
    located_in: "OH",
    owned_from: "01/2015 - 01/2017",
    duration: "2 year(s)",
  },
  {
    id: 4,
    purchased_on: "2015",
    located_in: "OH",
    owned_from: "01/2015 - 01/2017",
    duration: "2 year(s)",
  },
  {
    purchased_on: "2015",
    located_in: "OH",
    owned_from: "01/2015 - 01/2017",
    duration: "2 year(s)",
  },
];

export const vehicle_mileage: VehicleMileageType[] = [
  {
    id: 1,
    date: "01/06/2015",
    mileage: "3",
  },
  {
    id: 2,
    date: "01/10/2017",
    mileage: "19,915",
  },
  {
    id: 3,
    date: "03/01/2018",
    mileage: "81,352",
  },
  {
    id: 4,
    date: "08/14/2018",
    mileage: "81,352",
  },
];

export const vehicle_record: VehicleRecordType[] = [
  {
    title: "Title Brand",
    description: "The vehicle has a branded title",
    isrecord: true,
  },
  {
    title: "Odometer",
    description: "The vehicle has no mileage discrepancy",
  },
  {
    title: "Accident",
    description: "3 accident record(s) found.",
    isrecord: true,
  },
  {
    title: "Damage",
    description: "2 record(s) of damage are found for the vehicle",
    isrecord: true,
  },
  {
    title: "Event",
    description: "The vehicle has 1 specific event reported",
    isrecord: true,
  },
  {
    title: "Service & Repair",
    description: "The vehicle has no service & repair record(s)",
  },
  {
    title: "Auction",
    description: "The vehicle has no auction record(s)",
  },
  {
    title: "Lien/Loan",
    description: "The vehicle has no lien or loan record(s)",
  },
  {
    title: "Theft",
    description: "The vehicle has no stolen or theft record(s)",
  },
  {
    title: "Recall",
    description: "The vehicle has no open recalls record",
  },
];

export const vehicle_brand_check: VehicleTitleBrandType[] = [
  {
    title: "Fire Brand",
    description: "The vehicle title has no fire damage record",
  },
  {
    title: "Hail Brand",
    description: "The vehicle title has no hail damage record",
  },
  {
    title: "Flood Brand",
    description: "The vehicle title has no flood damage record",
  },
  {
    title: "Junk or scrapped brand",
    description: "The vehicle title has no auction junk record",
  },
  {
    title: "Manufacturer buyback",
    description: "The vehicle title has no manufacturer buyback record",
  },
  {
    title: "Lemon brand",
    description: "The vehicle title has no lemon brand record",
  },
  {
    title: "Salvage brand",
    description: "The vehicle title has salvage brand record",
    isrecord: true,
  },
  {
    title: "Rebuilt or rebuildable brand",
    description: "The vehicle title has no rebuilt or rebuildable record",
  },
  {
    title: "Odometer Brand",
    description: "The vehicle title has no mileage discrepancy record",
  },
  {
    title: "Auction brand",
    description: "The vehicle title has no auction record",
  },
];

export const vehicle: VehicleReportType = {
  trim: "L",
  engine: "1.8L L4 DOHC 16V",
  fuel_type: "Gasoline",
  transmission: "4-Speed Automatic",
  drive_type: "FWD",
  doors: 4,
  curb_weight: "2820 Lbs",
  msrp: "$17,500",
  body_type: "SEDAN 4-DR",
  vehicle_type: "Passenger Car",
  vehicle_size: "Compact Car",
  country: "Canada",
  standard_seating: 5,
};

export const summary: Summary[] = [
  {
    id: uuidv4(),
    name: "Vehicle Usage History",
  },
  {
    id: uuidv4(),
    name: "Ownership History",
  },
  {
    id: uuidv4(),
    name: "Sales Listing History",
  },
  {
    id: uuidv4(),
    name: "Title Brand Check",
  },
  {
    id: uuidv4(),
    name: "Event Verification",
  },
  {
    id: uuidv4(),
    name: "Mileage Records",
  },
  {
    id: uuidv4(),
    name: "Accident Records",
  },
  {
    id: uuidv4(),
    name: "Damage Verification",
  },
  {
    id: uuidv4(),
    name: "Detailed Vehicle History",
  },
  {
    id: uuidv4(),
    name: "Repair Costs",
  },
  {
    id: uuidv4(),
    name: "Warranty Status/Coverage",
    last: true,
  },
];

export const vehicle_repair: VehicleRepairCostType[] = [
  {
    id: 1,
    title: "Air Conditioning - Replace Compressor",
    parts: "$643 - $871 in parts",
    labor: "$527 - $713 in labor",
    description:
      "When temperatures rise, your vehicle’s air conditioning system has to work harder to keep you cool. Over time, the A/C may not blow as cold as you want, even though the control is at the coldest setting. Eventually, the compressor will wear out and need to be replaced. Probably the most important part of the air conditioning system, the compressor ensures a constant flow of refrigerant to cool the air channeled into the passenger cabin. Lack of cold air plus noises from clattering bearings or a squealing belt are signs of compressor failure. Although this repair is relatively straightforward, it’s best done by a professional versed in evacuating and recharging the compressor’s refrigerant.",
  },
  {
    id: 2,
    title: "Air Conditioning - Replace Compressor",
    parts: "$643 - $871 in parts",
    labor: "$527 - $720 in labor",
    description:
      "When temperatures rise, your vehicle’s air conditioning system has to work harder to keep you cool. Over time, the A/C may not blow as cold as you want, even though the control is at the coldest setting. Eventually, the compressor will wear out and need to be replaced. Probably the most important part of the air conditioning system, the compressor ensures a constant flow of refrigerant to cool the air channeled into the passenger cabin. Lack of cold air plus noises from clattering bearings or a squealing belt are signs of compressor failure. Although this repair is relatively straightforward, it’s best done by a professional versed in evacuating and recharging the compressor’s refrigerant.",
  },
  {
    id: 3,
    title: "Air Conditioning - Replace Compressor",
    parts: "$643 - $871 in parts",
    labor: "$527 - $720 in labor",
    description:
      "When temperatures rise, your vehicle’s air conditioning system has to work harder to keep you cool. Over time, the A/C may not blow as cold as you want, even though the control is at the coldest setting. Eventually, the compressor will wear out and need to be replaced. Probably the most important part of the air conditioning system, the compressor ensures a constant flow of refrigerant to cool the air channeled into the passenger cabin. Lack of cold air plus noises from clattering bearings or a squealing belt are signs of compressor failure. Although this repair is relatively straightforward, it’s best done by a professional versed in evacuating and recharging the compressor’s refrigerant.",
  },
];

export const vehicle_warranty: VehicleWarrantyType[] = [
  {
    id: 1,
    warranty: "Basic (months/miles)",
    months: "36/36,000",
  },
  {
    id: 2,
    warranty: "Powertrain (months/miles)",
    months: "60/60,000",
  },
  {
    id: 3,
    warranty: "Corrosion perforation (months/miles)",
    months: "60/unlimited",
  },
  {
    id: 4,
    warranty: "Roadside assistance (months/miles)",
    months: "24/unlimited",
  },
  {
    id: 5,
    warranty: "Maintenance (months/miles)",
    months: "24/25,000",
  },
];

export const vehicle_event: VehicleEventType[] = [
  {
    title: "Insurance Loss record",
    description: "The vehicle has Insurance Loss record",
    isrecord: true,
  },
  {
    title: "Titled to an insurance company record",
    description: "The vehicle has no titled to an insurance company record",
  },
  {
    title: "Auction Lemon record/Manufacturer Buyback",
    description: "The vehicle title has no auction lemon record",
  },
  {
    title: "Abandoned title record",
    description: "The vehicle has no abandoned title record",
  },
  {
    title: "Grey market title record",
    description: "The vehicle has no grey market title record",
  },
  {
    title: "Loan/Lien record",
    description: "The vehicle has no loan/lien record",
  },
  {
    title: "Repossessed record",
    description: "The vehicle has no repossessed record",
  },
  {
    title: "Corrected title record",
    description: "The vehicle has no corrected title record",
  },
  {
    title: "Duplicate title record",
    description: "The vehicle has no duplicate title record",
  },
  {
    title: "Theft record",
    description: "The vehicle has no theft record",
  },
];

export const vehicle_usage: VehicleUsageType[] = [
  {
    title: "Personal",
  },
  {
    title: "Lease",
    isrecord: true,
  },
  {
    title: "Rental",
  },
  {
    title: "Taxi",
  },
  {
    title: "Police",
  },
  {
    title: "Fleet",
  },
  {
    title: "Commercial",
  },
  {
    title: "Government",
  },
];

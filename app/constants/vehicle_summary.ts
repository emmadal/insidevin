import { Summary } from "../types/index";
import { v4 as uuidv4 } from "uuid";

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

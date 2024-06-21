import { Icountry } from "./icountry";
import { Idepartment } from "./idepartment";

export interface Istudent {
    id: number;
    name: string;
    email: string;
    country_id: number;
    dept_id: number
    country: Icountry;
    department: Idepartment;
}

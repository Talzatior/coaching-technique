import { People } from "./models/people";

export interface IPeopleService {
    getAll(): People[];
}
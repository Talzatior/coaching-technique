import { People } from "./models/people";

export interface PeopleService {
    getAll(): People[];
}
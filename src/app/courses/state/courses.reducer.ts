import { createReducer, on } from "@ngrx/store";
import { initialCoursesState } from "./courses.state";
import { getCourses } from "./courses.actions";

export const coursesReducer = createReducer(
     initialCoursesState);
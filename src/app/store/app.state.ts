import { counterReducer } from "../counter/states/counter.reducer";
import { CounterState } from "../counter/states/counter.state";
import { coursesReducer } from "../courses/state/courses.reducer";
import { CoursesState } from "../courses/state/courses.state";

export interface AppState {
     counter : CounterState;
     courses: CoursesState;
}

export const appReducers = {
  counter: counterReducer,
  courses: coursesReducer
};
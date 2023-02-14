import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import employeesReducer from "./slice/employeeSlice";
import userReducer from "./slice/authSlice";
import createSagaMiddleware from "redux-saga";
import sagas from "../store/sagas/saga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    user: userReducer,
  },
  middleware: [saga],
});
saga.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

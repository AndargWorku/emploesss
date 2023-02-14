/*eslint-disable*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { RootState } from "../store";

// Define a type for the slice state
export interface employee {
  _id?: string;
  profile_img?: string;
  full_name: string;
  date_of_birth: string;
  gender: string;
  salary: number;
  email?: string;
  address?: string;
  joined_date?: string;
  position?: string;
}

interface EmployeeState {
  employees: employee[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  employees: [],
  isLoading: false,
  error: null,
};

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    getEmployeesFetch: (state) => {
      state.isLoading = true;
    },
    getEmployeesSuccess: (state, action: PayloadAction<employee[]>) => {
      state.employees = action.payload;
      state.isLoading = false;
    },
    getEmployeesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    addEmployeeStart: (state, action: PayloadAction<employee>) => {
      state.isLoading = true;
    },
    addEmployeeSuccess: (state, action: PayloadAction<employee>) => {
      state.employees.push(action.payload);
      state.isLoading = false;
    },
    addEmployeeFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    updateEmployeeStart: (
      state,
      action: PayloadAction<{
        id: string | undefined;
        data: employee;
      }>
    ) => {
      state.isLoading = true;
    },
    updateEmployeeSuccess: (
      state,
      action: PayloadAction<{ id: string; data: employee; response: string }>
    ) => {
      //TODO: update function

      state.employees.find((employee, index) => {
        if (employee._id === action.payload.id) {
          state.employees[index] = action.payload.data;
        }
      });

      toast(action.payload.response, {
        autoClose: 1000,
        closeOnClick: true,
      });
      state.isLoading = false;
    },
    updateEmployeeFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    deleteEmployeeStart: (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = true;
    },
    deleteEmployeeSuccess: (state, action: PayloadAction<string>) => {
      //TODO: delete function
      state.employees = state.employees.filter(
        (employee) => employee._id !== action.payload
      );

      state.isLoading = false;
    },
    deleteEmployeeFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getEmployeesFetch,
  getEmployeesSuccess,
  getEmployeesFailure,
  addEmployeeStart,
  addEmployeeSuccess,
  addEmployeeFailure,
  updateEmployeeStart,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
} = employeeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getEmployee = (state: RootState) => state.employees;

export default employeeSlice.reducer;

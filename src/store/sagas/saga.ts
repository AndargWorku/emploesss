import { AxiosResponse } from "axios";
import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import employeeApi from "../../api/employee-api";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addEmployeeFailure,
  addEmployeeSuccess,
  deleteEmployeeFailure,
  deleteEmployeeSuccess,
  employee,
  getEmployeesFailure,
  getEmployeesSuccess,
  updateEmployeeFailure,
  updateEmployeeSuccess,
} from "../slice/employeeSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function* employeeSaga(): Generator<StrictEffect> {
  yield takeEvery("employees/getEmployeesFetch", getEmployeesFetch);
  yield takeEvery("employees/addEmployeeStart", addEmployee);
  yield takeEvery("employees/deleteEmployeeStart", deleteEmployee);
  yield takeEvery("employees/updateEmployeeStart", updateEmployee);
}

function* addEmployee(action: PayloadAction<employee>) {
  try {
    const response: AxiosResponse<string> = yield call(
      employeeApi.post,
      "employee",
      action.payload
    );
    yield toast(response.data, {
      autoClose: 1000,
      closeOnClick: true,
    });
    yield put(addEmployeeSuccess(action.payload));
  } catch (error) {
    yield put(addEmployeeFailure((error as Error).message));
  }
}
function* deleteEmployee(action: PayloadAction<string>) {
  try {
    const response: AxiosResponse<string> = yield call(
      employeeApi.delete,
      `employee/${action.payload}`
    );
    yield toast(response.data, {
      autoClose: 1000,
      closeOnClick: true,
    });
    yield put(deleteEmployeeSuccess(action.payload));
  } catch (error) {
    yield put(deleteEmployeeFailure((error as Error).message));
  }
}
function* updateEmployee(
  action: PayloadAction<{ id: string; data: employee }>
) {
  try {
    const response: AxiosResponse<string> = yield call(
      employeeApi.put,
      `employee/${action.payload.id}`,
      action.payload.data
    );

    yield put(
      updateEmployeeSuccess({
        id: action.payload.id,
        data: action.payload.data,
        response: response.data,
      })
    );
  } catch (error) {
    yield put(updateEmployeeFailure((error as Error).message));
  }
}
function* getEmployeesFetch() {
  try {
    const { data }: AxiosResponse = yield call(employeeApi.get, "employee");
    yield put(getEmployeesSuccess(data));
  } catch (error) {
    yield put(getEmployeesFailure((error as Error).message));
  }
}

export default employeeSaga;

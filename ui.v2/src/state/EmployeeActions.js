import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEmployeeSvc, deleteEmployeeSvc, fetchEmployeeById, fetchEmployees, updateEmployeeSvc } from '../services/EmployeeService'

export const fetchEmployeesAction = createAsyncThunk('employees/fetchAll', async () => {
    return await fetchEmployees();
})

export const fetchEmployeeByIdAction = createAsyncThunk('employees/byId', async (id) => {
   return id !== undefined ?  await fetchEmployeeById(id) : {};
})

export const updateEmployeeAction = createAsyncThunk('employee/update', async (data) => {
    return await updateEmployeeSvc(data);
 })

 export const createEmployeeAction = createAsyncThunk('employee/create', async (data) => {
    return await createEmployeeSvc(data);
 })

 export const deleteEmployeeAction = createAsyncThunk('employee/delete', async (id) => {
    await deleteEmployeeSvc(id);
    return id;
 })


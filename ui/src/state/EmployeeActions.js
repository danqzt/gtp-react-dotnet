import React from 'react'
import { fetchEmployees, fetchEmployeeById, updateEmployeeSvc, createEmployeeSvc, deleteEmployeeSvc } from '../Services/EmployeeService';
import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, FETCHING_DATA, GET_ALL_EMPLOYEES, GET_EMPLOYEE, HAS_ERROR, UPDATE_EMPLOYEE } from './Constants';

export const getAllEmployees = (callback) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCHING_DATA});
            const response = await fetchEmployees();
            dispatch({
                type: GET_ALL_EMPLOYEES,
                payload: {
                    data: response,
                }
            });
            callback(true);
        }
        catch(error){
            dispatch({type: HAS_ERROR, 
                payload: {
                   data : error
            }});

        }
    }
}

export const getEmployeeById = (id, callback) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCHING_DATA});
            const response = id !== undefined ?  await fetchEmployeeById(id) : {};
            dispatch({
                type: GET_EMPLOYEE,
                payload: {
                    data: response,
                }
            });
            callback(true);
        }
        catch(error){
            dispatch({type: HAS_ERROR, 
                payload: {
                   data : error
            }});

        }
    }
}

export const updateEmployee = (data, callback) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCHING_DATA});
            const response = await updateEmployeeSvc(data);
            dispatch({
                type: UPDATE_EMPLOYEE,
                payload: {
                    data: response,
                }
            });
            callback(true, response.Id);
        }
        catch(error){
            dispatch({type: HAS_ERROR, 
                payload: {
                   data : error
            }});
            callback(false);

        }
    }
}

export const createEmployee = (data, callback) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCHING_DATA});
            const response = await createEmployeeSvc(data);
            dispatch({
                type: CREATE_EMPLOYEE,
                payload: {
                    data: response,
                }
            });
            callback(true, response.Id);
        }
        catch(error){
            dispatch({type: HAS_ERROR, 
                payload: {
                   data : error
            }});
            callback(false);

        }
    }
}

export const deleteEmployee = (id, callback) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCHING_DATA});
            await deleteEmployeeSvc(id);
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: {
                    data: id,
                }
            });
            callback(true, id);
        }
        catch(error){
            dispatch({type: HAS_ERROR, 
                payload: {
                   data : error
            }});
            callback(false);

        }
    }
}



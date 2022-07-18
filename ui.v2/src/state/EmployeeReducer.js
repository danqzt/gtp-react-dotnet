import { createSlice } from "@reduxjs/toolkit"
import { fetchEmployeesAction, deleteEmployeeAction } from "./EmployeeActions";

const initialState = {
    employees: [],
    current: {},
    error: '',
    loading: true
}

const setFinishLoad = (state) => {
    state.loading = false;
    state.error = '';
}

const setErrorData = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.payload.data.message
    }
}

const setLoadingData = (state) => {
    state.loading = true;
    state.error = '';
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        getEmployee: (state, action) => {
            state.current = action.payload.data;
            setFinishLoad(state);
        },
        createEmployee: (state, action) => {
            state.current = action.payload.data;
            setFinishLoad(state);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchEmployeesAction.pending, (state, action) => setLoadingData(state))
            .addCase(fetchEmployeesAction.rejected, (state, action) => setErrorData(state, action))
            .addCase(fetchEmployeesAction.fulfilled, (state, action) => {
                state.employees = action.payload;
                setFinishLoad(state);
            })
            .addCase(deleteEmployeeAction.rejected, (state, action) => setErrorData(state, action))
            .addCase(deleteEmployeeAction.fulfilled, (state, action) => {
                state.employees = state.employees.filter(e => e.id != action.payload);
                setFinishLoad(state);
            })

    }
})

export const { fetchingData, getAllEmployees, getEmployee, createEmployee, deleteEmployee, hasError } = employeeSlice.actions;

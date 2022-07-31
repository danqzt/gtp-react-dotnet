import { createEntityAdapter } from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ApiSlice = createApi({
   reducerPath: 'employeeApi',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5240'}),
   tagTypes: ['Employees'],
   endpoints: builder => ({})
});

const employeeAdapter = createEntityAdapter({
   selectId: (emp) => emp.id,
});

const initialState = employeeAdapter.getInitialState();

const EmployeeApiSlice = ApiSlice.injectEndpoints({
   endpoints: builder => ({
      getEmployees: builder.query({
         query : () => '/employees',
         transformResponse: resp => employeeAdapter.setAll(initialState, resp),
         providesTags: (result, error, args) => 
           [{type: 'Employees', id: 'LIST'},
           ...result.ids.map(id => {type: 'Employees', id})]
      })
   })

});

export const { useGetEmployeesQuery } = ApiSlice

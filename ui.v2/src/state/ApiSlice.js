import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ApiSlice = createApi({
   reducerPath: 'employeeApi',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5240'}),
   tagTypes: ['Employees'],
   endpoints: builder => ({})
});


export const EmployeeApiSlice = ApiSlice.injectEndpoints({
   endpoints: builder => ({
      getEmployees: builder.query({
         query : () => '/employees',
         providesTags: [{type: "Employees", id: "LIST"}]
      }),
      deleteEmployee: builder.mutation({
         query: ({id}) => ({
            url: `/employees/${id}`,
            method: 'DELETE',
            body: { id }
         }),
         invalidatesTags: [{type: "Employees", id: "LIST"}]
      })
   })

});

export const { useGetEmployeesQuery, useDeleteEmployeeMutation } = EmployeeApiSlice

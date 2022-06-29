import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, FETCHING_DATA, GET_ALL_EMPLOYEES, GET_EMPLOYEE, HAS_ERROR, UPDATE_EMPLOYEE } from "./Constants"

const initialState = {
  employees: [],
  current: {},
  error: '',
  loading: true
}
export const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA: {
      return {
        ...state,
        loading: true,
        error : ''
      };
    };
    case GET_ALL_EMPLOYEES: {
      return {
        ...state,
        employees: action.payload.data,
        loading: false,
        error : ''
      };
    };
    case GET_EMPLOYEE: {
      return {
        ...state,
        current: action.payload.data,
        loading: false,
        error : ''
      };
    }
    case CREATE_EMPLOYEE: {
      return {
        ...state,
        current: action.payload.data,
        loading: false,
        error : ''
      };
    }
    case UPDATE_EMPLOYEE: {
      return {
        ...state,
        current: action.payload.data,
        loading: false,
        error : ''
      };
    }
    case DELETE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.filter(e => e.id != action.payload.data),
        loading: false,
        error : ''
      };
    }
    case HAS_ERROR: {
      return {
        ...state,
        error: action.payload.data.message,
        loading: false,
      };
    }
    default: return state;
  }
}
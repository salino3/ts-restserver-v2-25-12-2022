// Tipo que representa todas las acciones posibles del reducer
import { AllActions } from "./Interfaces";

//?
export function MyReducer(state: any, action: AllActions) {

 //* Actions Loading 
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        datos: action.payload,
      };
    case "LOAD_USER_CHECK":
      return {
        ...state,
        userCheck: action.payload,
      };
    //* Actions Changing
    case "UPDATE_USER_CHECK_TRUE":
      return {
        ...state,
        userCheck: action.payload,
      };
    case "UPDATE_USER_CHECK_FALSE":
      return {
        ...state,
        userCheck: action.payload,
      };

    default:
      return state;
  }
}

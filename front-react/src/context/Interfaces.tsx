
export type AllActions =
  | LoadDataAction
  | Load_USER_CHECK
  | UPDATE_Action_TRUE
  | UPDATE_Action_FALSE

// Acción para cargar los datos de la API en el estado del reducer
 interface LoadDataAction {
  type: "LOAD_DATA";
  payload: any;
}

 interface Load_USER_CHECK {
   type: "LOAD_USER_CHECK";
   payload: any;
 }

 interface  UPDATE_Action_TRUE {
  type: "UPDATE_USER_CHECK_TRUE";
  payload: any;
}

 interface UPDATE_Action_FALSE {
   type: "UPDATE_USER_CHECK_FALSE";
   payload: any;
 }

export type T = number | string;



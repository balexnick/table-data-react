import * as CONSTANT from "../constant";
export const initialState = {
  token: "",
  workers: [],
  openModal: false,
  openEditModal: false,
  editUserObj: {}
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case CONSTANT.WORKERS_ARR:
      return {
        ...state,
        workers: action.payload
      };
    case CONSTANT.OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload
      };
    case CONSTANT.OPEN_EDIT_MODAL:
      return {
        ...state,
        openEditModal: action.payload
      };
    case CONSTANT.EDIT_USER_OBJECT:
      return {
        ...state,
        editUserObj: action.payload
      };
    default:
      return state;
  }
}

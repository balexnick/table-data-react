import * as CONSTANT from "../constant";
export const initialState = {
  token: "",
  workers: [],
  isOpen: false,
  isOpenEdit: false,
  editUserObj: {},
  clearUserState: false,
  page: 0,
  pages: 0
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
        isOpen: action.payload
      };
    case CONSTANT.OPEN_EDIT_MODAL:
      return {
        ...state,
        isOpenEdit: action.payload
      };
    case CONSTANT.EDIT_USER_OBJECT:
      return {
        ...state,
        editUserObj: action.payload
      };
    case CONSTANT.TABLE_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case CONSTANT.ALL_TABLE_PAGES:
      return {
        ...state,
        pages: action.payload
      };
    default:
      return state;
  }
}

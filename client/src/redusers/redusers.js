import * as CONSTANT from "../constant";
export const initialState = {
  token: ""
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

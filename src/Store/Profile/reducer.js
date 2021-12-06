import { CHECK_USER_NAME_ACTION } from "./constants";

const initialState = {
  showName: false,
  message: "выбор сделан",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_NAME_ACTION: {
      return { ...state, showName: !state.showName };
    }
    default:
      return state;
  }
};

import { userActionType } from "./UserType";
const initilalState = {
  currentUser: null,
};
const userReducer = (state = initilalState, action) => {
  switch (action.type) {
    case userActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

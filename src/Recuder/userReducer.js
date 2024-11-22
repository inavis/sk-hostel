//USER REDUCER

const initialUser = {
  user: "admin",
};

export const userUpdateReducer = (state = initialUser, action) => {
  //action has type and payload with data that can be passed
  switch (action.type) {
    case "CHANGEUSER":
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

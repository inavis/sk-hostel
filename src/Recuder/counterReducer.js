//COUNTER REDUCER

const initialCounter = {
  counter: 0,
};

export const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

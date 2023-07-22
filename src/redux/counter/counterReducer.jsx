import { INCREMENT, DECREMENT } from "./counterType";

let initial = {
  value: 0,
};

export const counterReducer = (state = initial, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};

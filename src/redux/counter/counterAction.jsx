import { DECREMENT, INCREMENT } from "./counterType";

export const inc = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

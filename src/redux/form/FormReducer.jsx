import { SubmitForm } from "./FormType";

const initial = {
  name: "empty",
  age: 0,
};

export const formReducer = (state = initial, { type, payLoad }) => {
  switch (type) {
    case SubmitForm:
      return {
        ...state,
        name: payLoad.uname,
        age: payLoad.uage,
      };

    default:
      return state;
  }
};

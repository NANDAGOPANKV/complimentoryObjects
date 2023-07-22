import { SubmitForm } from "../form/FormType";

export const submitForm = ({ uname, uage }) => {
  return {
    type: SubmitForm,
    payLoad: { uname, uage },
  };
};

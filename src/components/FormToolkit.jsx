import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitForm } from "../redux/form/FormAction";

export const FormToolkit = () => {
  const { name, age } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [uname, setName] = useState("");
  const [uage, setAge] = useState(0);

  return (
    <div className="w-full h-full text-center">
      <h1>Form</h1>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <div className="grid gap-2 grid-rows-2 mx-[40%] rounded-3xl shadow-2xl p-3 items-center">
        <input
          className="border-2 p-2"
          type="text"
          placeholder="enter name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 p-2"
          type="text"
          defaultValue={0}
          onChange={(e) => setAge(e.target.value)}
        />
        <button
          onClick={() => dispatch(submitForm({ uname, uage }))}
          type="submit"
          className="bg-black text-white font-bold w-[25%] p-3 rounded-lg mx-auto "
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

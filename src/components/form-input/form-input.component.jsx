import React from "react";

const FormInput = ({ label, ...remainingProps }) => {
  //   console.log(remainingProps);
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...remainingProps} />
    </div>
  );
};

export default FormInput;

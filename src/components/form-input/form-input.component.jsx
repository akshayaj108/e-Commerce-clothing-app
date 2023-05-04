import "./form-input.styles.scss";

const FormInput = ({ label, ...remainingProps }) => {
  //   console.log(remainingProps);
  return (
    <div className="group">
      <input className="form-input" {...remainingProps} />
      {label && (
        <label
          htmlFor=""
          className={`${
            remainingProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

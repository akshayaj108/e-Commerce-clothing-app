import "./button.styles.scss";
const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};
export const Button = ({ children, buttonTypeFromProps, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonTypeFromProps]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;

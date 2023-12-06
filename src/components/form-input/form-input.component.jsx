import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...remainingProps }) => {
  //   console.log(remainingProps);
  return (
    <Group>
      <Input {...remainingProps} />
      {label && (
        <FormInputLabel shrink={remainingProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

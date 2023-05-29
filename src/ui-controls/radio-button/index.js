const RadioButton = ({
  id,
  placeholder,
  isChecked = false,
  onChange,
  ...rest
}) => {
  return (
    <div className="">
      <input
        id={id}
        type="radio"
        checked={isChecked}
        onChange={() => {}}
        onClick={() => onChange?.(!isChecked)}
        {...rest}
      />
      <label
        htmlFor={id}
        onClick={(e) => {
          e.preventDefault();
          onChange?.(!isChecked);
        }}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default RadioButton;

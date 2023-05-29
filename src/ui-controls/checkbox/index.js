const Checkbox = ({
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
        type="checkbox"
        onChange={() => {}}
        checked={isChecked}
        onClick={(e) => {
          onChange?.(!isChecked);
        }}
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

export default Checkbox;

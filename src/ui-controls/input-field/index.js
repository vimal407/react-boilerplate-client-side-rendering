import React from 'react';
import classNames from 'classnames';
import { any, bool, func, string } from 'prop-types';
import './styles.css';

const InputField = ({
  placeholder,
  onChange,
  type,
  value = '',
  required,
  disabled,
  ...rest
}) => {
  const onInputChange = ({ target }) => {
    onChange(target.value, target.name);
  };

  const onClick = ({ target }) => {
    if (target.value?.trim?.() === '0') {
      onChange('', target.name);
    }
  };

  return (
    <div className="input-block">
      <input
        id="input-field"
        type={type}
        onChange={onInputChange}
        onClick={onClick}
        value={value}
        required={required}
        disabled={disabled}
        {...rest}
      />
      {placeholder ? (
        <span
          className={classNames('placeholder', {
            'required ': required,
            'complete-disable': disabled,
          })}
        >
          {placeholder}
        </span>
      ) : null}
    </div>
  );
};

InputField.propTypes = {
  placeholder: string,
  onChange: func,
  type: string,
  required: bool,
  value: any,
  disabled: bool,
};

InputField.defaultProps = {
  placeholder: '',
  onChange: () => {},
  type: 'text',
  required: false,
  value: '',
  disabled: false,
};
export default InputField;

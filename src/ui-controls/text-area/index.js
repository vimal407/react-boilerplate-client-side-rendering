import React from 'react';
import classNames from 'classnames';
import './styles.css';

const TextArea = ({ placeholder, onChange, value = '', required, ...rest }) => {
  const onInputChange = ({ target }) => {
    onChange && onChange(target.value, target.name);
  };

  return (
    <div className="input-block">
      <textarea
        id="text-area"
        rows="4"
        onChange={onInputChange}
        value={value}
        {...rest}
      />
      <span
        className={classNames('placeholder', {
          'required ': required,
        })}
      >
        {placeholder}
      </span>
    </div>
  );
};
export default TextArea;

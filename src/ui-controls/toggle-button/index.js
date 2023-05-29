import React from 'react';
import './styles.css';

const ToggleButton = ({ onChange, isChecked = false, id, ...rest }) => {
  const _onChange = ({ target }) => {
    onChange?.(target.checked);
  };
  return (
    <div className="d-flex toggle-block" style={{ paddingTop: '10px' }}>
      <label className="toggle">
        <input
          id={id}
          className="toggle-checkbox"
          type="checkbox"
          onChange={_onChange}
          checked={isChecked}
          {...rest}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label"></span>
      </label>
    </div>
  );
};

export default ToggleButton;

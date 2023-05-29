import React from 'react';
import './styles.css';

const ToggleTabs = ({
  options = [],
  activeTab = '',
  onChange,
  className = '',
}) => {
  return (
    <div className={className + ' sort-button'}>
      <button
        onClick={() => onChange(options[0]?.code)}
        className={
          activeTab === options[0]?.code
            ? 'sort-btn-active sort-btn'
            : 'sort-btn'
        }
      >
        {options[0]?.name}
      </button>

      <button
        onClick={() => onChange(options[1].code)}
        className={
          activeTab === options[1]?.code
            ? 'sort-btn-asc sort-btn-asc-active'
            : 'sort-btn-asc'
        }
      >
        {options[1]?.name}
      </button>
    </div>
  );
};

export default ToggleTabs;

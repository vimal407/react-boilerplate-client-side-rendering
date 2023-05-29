import React from 'react';
import Select from 'react-select';
import { any, array, bool, func, oneOf, string } from 'prop-types';

const Dropdown = ({ value = '', ...rest }) => {
  return <Select value={value} {...rest} />;
};
export default Dropdown;

Dropdown.propTypes = {
  autoFocus: bool,
  className: string,
  classNamePrefix: oneOf([null, string]),
  isDisabled: bool,
  isMulti: bool,
  isSearchable: bool,
  isClearable: bool,
  name: string,
  onChange: func.isRequired,
  getOptionLabel: func.isRequired,
  getOptionValue: func.isRequired,
  options: array.isRequired,
  placeholder: string,
  noOptionsMessage: func,
  value: any,
};

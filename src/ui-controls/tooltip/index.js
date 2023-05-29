import { Fragment } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Tooltip = ({ id, children, label }) => {
  return (
    <Fragment key={id}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a data-tooltip-id={id}>{label}</a>
      <ReactTooltip id={id}>{children}</ReactTooltip>
    </Fragment>
  );
};

export default Tooltip;
Tooltip.defaultProps = {
  id: 'tool-tip',
};

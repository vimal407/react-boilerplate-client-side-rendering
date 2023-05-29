import React from 'react';
import ReactDrawer from 'react-modern-drawer';
import { bool, string, node, func } from 'prop-types';
import 'react-modern-drawer/dist/index.css';
import './styles.css';
import { IoIosClose } from 'react-icons/io';

const Bottomsheet = ({
  id,
  children,
  isOpen,
  title,
  onClose,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <ReactDrawer id={id} open={isOpen} direction="bottom" {...rest}>
        <div className="drawer-title-wrap">
          <h4 className="drawer-title">{title}</h4>
          <div className="drawer-close">
            <IoIosClose onClick={onClose} style={{ fontSize: '30px' }} />
          </div>
        </div>
        {children}
      </ReactDrawer>
    </div>
  );
};

Bottomsheet.propTypes = {
  id: string,
  isOpen: bool.isRequired,
  children: node,
  title: string,
  onClose: func,
};

Bottomsheet.defaultProps = {
  id: 'modern-drawer',
  isDrawerOpen: false,
  title: 'drawer',
  onClose: () => {},
};
export default Bottomsheet;

import React from 'react';
import ReactDrawer from 'react-modern-drawer';
import { oneOf, bool, string, node, func } from 'prop-types';
import 'react-modern-drawer/dist/index.css';
import './styles.css';
import { IoIosClose } from 'react-icons/io';

const Drawer = ({
  id,
  children,
  isDrawerOpen,
  title,
  onClose,
  subTitle,
  direction,
  drawerWidth,
  ...rest
}) => {
  return (
    <div className={drawerWidth}>
      <ReactDrawer id={id} open={isDrawerOpen} direction={direction} {...rest}>
        <div className="drawer-title-wrap">
          <div>
            <h4 className="drawer-title">{title}</h4>
            {subTitle ? <h6 className="drawer-subtitle">{subTitle}</h6> : null}
          </div>
          <div className="drawer-close">
            <IoIosClose onClick={onClose} style={{ fontSize: '30px' }} />
          </div>
        </div>
        {children}
      </ReactDrawer>
    </div>
  );
};

Drawer.propTypes = {
  id: string,
  isDrawerOpen: bool.isRequired,
  direction: oneOf(['left', 'right', 'top', 'bottom']),
  children: node,
  title: string,
  subTitle: string,
  onClose: func,
};

Drawer.defaultProps = {
  id: 'modern-drawer',
  isDrawerOpen: false,
  direction: 'right',
  title: 'drawer',
  subTitle: '',
  onClose: () => {},
};
export default Drawer;

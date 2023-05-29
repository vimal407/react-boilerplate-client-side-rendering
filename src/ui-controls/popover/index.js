import React from 'react';
import { any, node } from 'prop-types';
import { Root, Portal, Trigger, Content, Arrow } from '@radix-ui/react-popover';
import './styles.css';

const Popover = ({ button, children, buttonRef, contentStyle, className }) => (
  <Root>
    <Trigger asChild ref={buttonRef} className={className}>
      {button}
    </Trigger>

    <Portal>
      <div className="popover-wrap">
        <Content
          className={
            contentStyle ? `${contentStyle} PopoverContent` : 'PopoverContent'
          }
          sideOffset={5}
          data-side="left"
        >
          {children}
          <Arrow className="PopoverArrow" />
        </Content>
      </div>
    </Portal>
  </Root>
);

Popover.propTypes = {
  button: any,
  children: node,
};
Popover.defaultProps = {
  button: <button>Open</button>,
};
export default Popover;

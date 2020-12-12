import React, { forwardRef } from 'react';
import './Button.css';

const Button = forwardRef(function Button(props, ref) {
  const { className, ...passthroughProps } = props;
  return (
    <button ref={ref} className={`Button ${className || ''}`} {...passthroughProps}>
      {props.children}
    </button>
  );
})


export default Button;

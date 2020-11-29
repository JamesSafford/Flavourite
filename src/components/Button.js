import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className={`Button ${props.className || ''}`} type="submit">
      {props.children}
    </button>
  );
}


export default Button;

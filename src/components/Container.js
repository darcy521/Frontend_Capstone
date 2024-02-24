import React from 'react';
import './component.css';

export default function Container(props) {

  return (
    <div className='component-container' style={{background: props.backgroundColor}}>
        {props.children}
    </div>
  )
}

import React from 'react';
import '../styles/ToggleSwitch.css';

function ToggleSwitch({ onChange }) {
  return (
    <label>
    <input type='checkbox' onChange={onChange}/>
    <span className='toggle' />
    </label>
  )
}

export default ToggleSwitch;
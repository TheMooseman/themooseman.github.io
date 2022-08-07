import React from 'react';
import '../styles/ToggleSwitch.css';

function ToggleSwitch({ onChange }) {
  return (
    <label className='toggleLabel'>
    <input type='checkbox' className='toggleComp' onChange={onChange}/>
    <span className='toggle' />
    </label>
  )
}

export default ToggleSwitch;
import React from 'react';

const IconSwitch = (props) => {
  const { icon, onSwitch } = props;

  return (
    <div className='icon-container'>
      <div className='material-icons icon' onClick={onSwitch}>{icon}</div>
    </div>
  );
};

export default IconSwitch;

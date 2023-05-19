import React from 'react';
import Button from './Button';


const Main = () => {
  const handleButton1Click = () => {
    alert('I am Button 1 clicked');
  };

  const handleButton2Click = () => {
    alert('I am Button 2 clicked');
  };

  return (
    <div className='button'>
      <Button
        buttonText="Button 1"
        buttonStyle={{ backgroundColor: 'red' }}
        onClick={handleButton1Click}
      />

      <Button
        buttonText="Button 2"
        buttonStyle={{ backgroundColor: 'blue' }}
        onClick={handleButton2Click}
      />
    </div>
  );
};

export default Main;

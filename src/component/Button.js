import React from 'react';

const Button = ({ buttonText, buttonStyle, onClick }) => {
  const buttonStyles = {
    color: 'white',
    backgroundColor: buttonStyle.backgroundColor,
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;

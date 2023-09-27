import React from 'react';
import './CSS/Popup.css'
const SuccessPopUp = ({ message }) => {
  return (
    <div className="success-popup">
      <p>{message}</p>
    </div>
  );
};

export default SuccessPopUp;

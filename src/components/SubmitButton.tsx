import React from 'react';
import '../styles/components/submit-button.css'

interface SubmitButtonProps{
  title: string;
}

function SubmitButton ({title}:SubmitButtonProps){
  return(
    <button className="confirm-button" type="submit">
      {title}
    </button>
)}

export default SubmitButton;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/button.css'

interface ButtonProps{
  title: string;
  destination: string;
}

function Button ({title, destination}:ButtonProps){
  return(
    <Link to={destination} className="enter-app-button">
      {title}
    </Link>
  )
}

export default Button;
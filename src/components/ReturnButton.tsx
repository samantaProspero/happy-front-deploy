import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/components/return-button.css'

interface ReturnButtonProps{
  destination: string;
}

function ReturnButton ({destination}:ReturnButtonProps){
  return(
    <Link to={destination}className="link-home">
      <FiArrowLeft size={32} color="#15b6d6"/>
    </Link>
  )
}

export default ReturnButton;
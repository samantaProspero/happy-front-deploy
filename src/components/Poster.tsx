import React from 'react';
import '../styles/components/poster.css';
import logoDashboard from '../images/logo-dashboard.svg';

function Poster (){
  return (
    <div id="poster-dashboard">
      <header>
        <img src={logoDashboard} alt="Happy"/>
      </header>

      <footer>
        <strong>São Bernardo do Campo</strong>
        <span>São Paulo</span>
      </footer>
    </div>

  )
}

export default Poster;
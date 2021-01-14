import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/signup-completed.css';



function SignupCompleted() {
  return(
    <div id="page-signup-completed">
      <div className="content-wrapper">
        <main>
          <h1>Ebaaa!</h1>
          <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. <br/>
            Agora é só esperar :) </p>
          <Link to="/users" className="enter-app">
            Voltar para o login
          </Link>
        </main>
      </div>
    </div>
  );
} 
export default SignupCompleted;
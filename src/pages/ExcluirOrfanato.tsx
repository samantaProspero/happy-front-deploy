import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/excluir-orfanato.css';



function ExcluirOrfanato() {
  return(
    <div id="page-signup-completed">
      <div className="content-wrapper">
        <main>
          <h1>Excluir!</h1>
          <p>Você tem certeza que quer excluir Orf. Esperança? </p>
          <Link to="/app" className="enter-app">
            Voltar para o mapa
          </Link>
        </main>
      </div>
    </div>
  );
} 
export default ExcluirOrfanato;
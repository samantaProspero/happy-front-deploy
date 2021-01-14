import { constants } from 'crypto';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Poster from '../../components/Poster';
import ReturnButton from '../../components/ReturnButton';
import SubmitButton from '../../components/SubmitButton';
import '../../styles/pages/forgot-user.css';


function ForgotUser(){
  const [email, setEmail] = useState('')
  return(
    <div id="page-forgot">
    <Poster />

    <ReturnButton destination="/"/>

      <main>

      <form onSubmit={()=>{}} className="forgot-form">
        <fieldset>
          <legend>Esqueci minha senha</legend>
          <p>Sua redefinição de senha será enviada para o e-mail cadastrado</p>
          <Input 
            type="text"
            label="Email"
            id="email"
            value={email}
            setValue={setEmail}

          />
        </fieldset>

        <SubmitButton title="Entrar"/>
      </form>
    </main>
  </div>
  )
}

export default ForgotUser;
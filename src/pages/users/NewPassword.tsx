import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Poster from '../../components/Poster';
import ReturnButton from '../../components/ReturnButton';
import SubmitButton from '../../components/SubmitButton';
import '../../styles/pages/new-password.css';


function NewPassword(){
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return(
    <div id="page-new-password">
    <Poster />

    <ReturnButton destination="/"/>

      <main>

      <form onSubmit={()=>{}} className="new-password-form">
        <fieldset>
          <legend>Redefinição de senha</legend>
          <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>
          <Input 
            type="password"
            label="Nova senha"
            id="password"
            value={password}
            setValue={setPassword}

          />
          <Input 
            type="password"
            label="Repetir senha"
            id="repeat-password"
            value={newPassword}
            setValue={setNewPassword}
          />
        </fieldset>

        <SubmitButton title="Entrar"/>
      </form>
    </main>
  </div>
  )
}

export default NewPassword;
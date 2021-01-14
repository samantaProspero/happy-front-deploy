import React, { FormEvent, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { Location } from 'history'

import '../../styles/pages/login-user.css';
import api from '../../services/api';
import Poster from '../../components/Poster';
import SubmitButton from '../../components/SubmitButton';
import ReturnButton from '../../components/ReturnButton';
import Input from '../../components/Input';
import { useAuth } from '../../contexts/auth';

function LoginUser() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [remember, setRemember] = useState('');

  const { signIn } = useAuth();

  async function handleSign(event: FormEvent){
    try {
      event.preventDefault();
      const response = await api.post('/auth', {email, password})
      const{ user, token } = response.data
      signIn(user, token)

      alert('Login realizado com sucesso!')
      history.push('/dashboard')
  
    } catch (error) {
      alert('Login deu ruim!')
      history.push('/')

    }
  }


  return(
    <div id="page-login">
      <Poster />

      <ReturnButton destination="/"/>

      <main>

        <form onSubmit={handleSign} className="login-form">
          <fieldset>
            <legend>Fazer login</legend>

            <Input type="email" label="Email" id="email" value={email} setValue={setEmail}/>

            <Input type="password" label="Senha" id="password" value={password} setValue={setPassword}/>

            {/* <div className="input-checkbox input-block">
              <Input type="checkbox" label="Lembrar-me" id="remember" value={remember} setValue={setRemember}/>
            </div> */}
          </fieldset>

          <Link to="/users/create" className="signup-button">
            Cadastrar
          </Link>
          <Link to="/users/forgot" className="forgot-button">
            Esqueci minha senha
          </Link>
          <SubmitButton title="Entrar"/>
        </form>
      </main>
    </div>
  )
};

export default LoginUser;
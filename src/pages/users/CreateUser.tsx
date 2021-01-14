import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


import '../../styles/pages/create-user.css';
import api from '../../services/api';
import Poster from '../../components/Poster';
import SubmitButton from '../../components/SubmitButton';
import ReturnButton from '../../components/ReturnButton';
import Input from '../../components/Input';

export default function CreateUser() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    api.post('users',{
      name,
      email,
      password
    }).then(()=>{
      alert('Cadastro realizado com sucesso')
      history.push('/users/success')
    }).catch(() => {
      alert('Erro no cadastro')
    })
  }

  return(
    <div id="page-create-user">
        <Poster />
        <ReturnButton destination="/"/>
      <main>

        <form onSubmit={handleSubmit} className="login-form">
          <fieldset>
            <legend>Cadastrar Usuário</legend>
            <Input   type="text" label="Nome" id="name" value={name} setValue={setName}/>

            <Input type="email" label="Email" id="email" value={email} setValue={setEmail}/>

            <Input type="password" label="Senha" id="password" value={password} setValue={setPassword}/>
          </fieldset>

          <SubmitButton title="Cadastrar"/>
        </form>
      </main>

    </div>
  )
};

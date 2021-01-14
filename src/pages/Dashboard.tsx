import React from 'react';
import { Link } from 'react-router-dom';

import {useAuth} from '../contexts/auth';


import '../styles/pages/dashboard.css';

function Dashboard (){
  const {signOut} = useAuth();

  function handleSignOut() {   
    signOut();
  }
  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      <Link to="/users" className="voltar">
        <p>Voltar para login</p>        
      </Link>
      <button onClick={handleSignOut} >LogOut</button>
    </div>
    )
}
export default Dashboard;
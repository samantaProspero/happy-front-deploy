import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanage';
import SignupCompleted from '../pages/SignupCompleted';
import Excluir from '../pages/ExcluirOrfanato';
import LoginUser from '../pages/users/LoginUser';
import CreateUser from '../pages/users/CreateUser';
import ForgotUser from '../pages/users/ForgotUser';
import NewPassword from '../pages/users/NewPassword';
// import Dashboard from '../pages/Dashboard';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/excluir" component={Excluir} />
        <Route path="/users" exact component={LoginUser} />
        <Route path="/users/create" component={CreateUser} />
        <Route path="/users/forgot" component={ForgotUser} />
        <Route path="/users/password" component={NewPassword} />
        <Route path="/users/success" component={SignupCompleted} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
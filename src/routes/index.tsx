import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'

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
import Dashboard from '../pages/Dashboard';

import { AuthProvider } from '../contexts/auth'

// TODO: Prevent user from access login pages when already logged
// TODO: Prevent user from access redefine password by himself
const Routes: React.FC = () => {
    return (
        <AuthProvider>
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
                  <PrivateRoutes path="/dashboard" component={Dashboard} />

                  <Route render={ ({ location }) => <Redirect to={{ pathname: '/', state: { from: location } }} />} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default Routes






// import React from 'react';

// import { useAuth } from '../contexts/auth';

// import AppRoutes from './AppRoutes';
// import PrivateRoutes from './PrivateRoutes';


// const Routes: React.FC = () => {
//   const {signed} = useAuth();
//   console.log("signed", signed)
//   return signed ? <PrivateRoutes/> : <AppRoutes/>
// }

// export default Routes;
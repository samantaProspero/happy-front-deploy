import React, {createContext, useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

interface User {
  id: string;
  name?: string | null;
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  // loading: boolean;
  signIn(user: User, token:(string) ): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  // const [loading, setLoading] = useState(true);
  const history = useHistory();



  useEffect(() => {
    function loadStorageData() {
      const storagedUser = localStorage.getItem('@Happy:user');
      const storagedToken = localStorage.getItem('@Happy:token');
      
      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
        
        setUser(JSON.parse(storagedUser));
        
      }
    }

    loadStorageData();
  },[]);


  function signIn(user: User, token: string) {

    setUser(user)
    
    api.defaults.headers.Authorization = `Baerer ${token}`;
    
    localStorage.setItem('@Happy:user', JSON.stringify(user));
    localStorage.setItem('@Happy:token', token);
    
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    history.push('/users')
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};

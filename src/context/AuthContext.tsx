import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import { signInService, User } from '../services/auth';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthState {
  jwt: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (signInCredentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const { jwt, user } = await signInService(email, password);

    await AsyncStorage.multiSet([
      ['@Fakkiter:jwt', jwt],
      ['@Fakkiter:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.common.Authorization = `Bearer ${jwt}`;

    setData({ jwt, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Fakkiter:jwt', '@Fakkiter:user']);
    api.defaults.headers.common.Authorization = false;

    setData({} as AuthState);
  }, []);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [jwt, user] = await AsyncStorage.multiGet([
        '@Fakkiter:jwt',
        '@Fakkiter:user',
      ]);

      if (jwt[1] && user[1]) {
        setData({ jwt: jwt[1], user: JSON.parse(user[1]) });
        api.defaults.headers.common.Authorization = `Bearer ${jwt[1]}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => useContext(AuthContext);

export { AuthProvider, useAuth };

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { firebaseApp } from '@/firebase/index';
import { LoginCredentials } from '@/http/dto/auth';

const auth = getAuth(firebaseApp);

export const getAuthObserver = (
  processUserCb: Parameters<typeof onAuthStateChanged>[1],
) => onAuthStateChanged(auth, processUserCb);

export const login = (credentials: LoginCredentials) =>
  signInWithEmailAndPassword(auth, credentials.login, credentials.pass);

export const logout = () => signOut(auth);

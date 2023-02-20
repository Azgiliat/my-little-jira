import { login, logout } from '@/firebase/auth';
import { LoginCredentials } from '@/http/dto/auth';

export function tryLogin(options: LoginCredentials) {
  return login(options);
}

export function tryLogout() {
  return logout();
}

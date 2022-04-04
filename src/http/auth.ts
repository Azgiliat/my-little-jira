import { USERS } from '@/mocks/users';

export function login(options: { login: string; pass: string }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find((userObj) => userObj.login === options.login);
      user ? resolve('success') : reject('fail');
    }, 2500);
  });
}

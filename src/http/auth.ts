import { UserData, USERS, USERS_DATA } from '@/mocks/users';

export type LoginOptions = { login: string; pass: string };
export function login(options: LoginOptions): Promise<UserData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find((userObj) => userObj.login === options.login);
      if (!user) {
        reject('Bad login');
        return;
      }
      if (user.pass === options.pass) {
        resolve(USERS_DATA[options.login]);
      } else {
        reject('Bad pass');
      }
      reject('Bad request');
    }, 2500);
  });
}

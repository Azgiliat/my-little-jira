export type UserAuth = {
  login: string;
  pass: string;
};
export type UserData = {
  login: string;
  firstName: string;
  lastName?: string;
};

export const USERS: UserAuth[] = [
  {
    login: 'admin',
    pass: 'admin',
  },
];
export const USERS_DATA: Record<string, UserData> = {
  admin: {
    login: 'admin',
    firstName: 'Admin',
  },
};

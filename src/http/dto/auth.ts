export type User = {
  login: string;
  firstName: string;
  lastName?: string;
};

export type UserAuth = {
  login: string;
  pass: string;
};

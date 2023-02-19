import { User } from 'firebase/auth';

type UserAuth = {
  login: string;
  pass: string;
};

export type { User, UserAuth };

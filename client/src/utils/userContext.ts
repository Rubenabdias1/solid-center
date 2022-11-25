import { createContext } from 'react';
import { User } from '../graphql/generated/graphql';

export const UserContext = createContext<{
  user?: User;
  login?: (user: User) => void;
  logout?: () => void;
}>({});
export const retrieveUser = () => {
  const stored = localStorage.getItem('user');
  return stored ? (JSON.parse(stored) as User) : undefined;
};

export const saveUser = (user: User | undefined) =>
  localStorage.setItem('user', JSON.stringify(user));

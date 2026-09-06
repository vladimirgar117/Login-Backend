import type { User } from '../interfaces/user.js';
import { users } from '../data/users-datasource.js';

export const authenticateUser = (
  username: string,
  password: string
): User | undefined => {
  return users.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password
  );
};
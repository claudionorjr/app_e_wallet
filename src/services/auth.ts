import { AccountObject } from '../@types/AccountObject';
import { toLogin, toLogout } from '../api';

const login = (
  email: string,
  password: string,
): Promise<{ user: AccountObject }> => {
  return toLogin(email, password)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};


const logout = (): Promise<any> => {
  return toLogout()
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export default { login, logout };

import { AccountObject } from '../@types/AccountObject';
import { toLogin, toLogout } from '../api';

const login = (email: string, password: string): string => {
  let response = toLogin(email, password)
  return response
}

const logout = (): void => {
  return toLogout()
}

export default { login, logout }

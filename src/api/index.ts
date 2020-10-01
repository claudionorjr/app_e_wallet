import { validateUser } from '../requirements/Login/auth'

export const toLogin = (email, password): string => {
  const response = validateUser(email, password)
  if (response.message == 'authenticated') {
    return 'authenticated'
  } else {
    return 'Invalid Daties'
  }
}

export const toLogout = () => {

}
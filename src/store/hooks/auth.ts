import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../ducks'
import { AuthState, loginRequestAction } from '../ducks/auth'

export const useAuthState = (): AuthState => {
  return useSelector((state: RootState) => state.auth)
}

export const useLogin = () => {
  const dispatch = useDispatch()

  return useCallback(
    (email, password) => {
      dispatch(loginRequestAction(email, password))
    },
    [dispatch],
  )
}

export const useIsAuthenticated = (): boolean => {
  const state = useAuthState()
  return state != null
}

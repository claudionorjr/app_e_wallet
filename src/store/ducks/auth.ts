import { AccountObject } from '../../@types/AccountObject';

export const LOGIN_REQUEST = '@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS';
export const LOGIN_FAILED = '@auth/LOGIN_FAILED';

export const LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST';

export type LoginRequestAction = {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
};

export const loginRequestAction = (
  email: string,
  password: string,
): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export type LoginFailedAction = {
  type: typeof LOGIN_FAILED;
  payload: {
    error: Error;
  };
};

export const loginFailedAction = (error: Error): LoginFailedAction => ({
  type: LOGIN_FAILED,
  payload: {
    error,
  },
});

export type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  payload: {
    user: AccountObject;
  };
};

export const loginSuccessAction = (
  user: AccountObject,
): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
  },
});

export type LogoutRequestAction = {
  type: typeof LOGOUT_REQUEST;
};

export const logoutRequestAction = (): LogoutRequestAction => ({
  type: LOGOUT_REQUEST,
});

export type Action =
  | LoginRequestAction
  | LoginFailedAction
  | LoginSuccessAction
  | LogoutRequestAction;

export type AuthState = {
  user: AccountObject | null;
  error: Error | null;
  loading: boolean;
};

const INITIAL_STATE: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state: AuthState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        user,
        loading: false,
      };
    }
    case LOGIN_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logged: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;

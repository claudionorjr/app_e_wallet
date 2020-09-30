import { combineReducers } from 'redux'

import auth from "./auth";

const rootReducers = combineReducers({
  auth,
})

export type RootState = ReturnType<typeof rootReducers>

export default rootReducers

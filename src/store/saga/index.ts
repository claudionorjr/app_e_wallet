import { all } from 'redux-saga/effects'

import authEffects from './auth';

export default function* rootSaga() {
  return yield all([...authEffects])
}

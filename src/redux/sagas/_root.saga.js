import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import createSaga from './create.saga';
import saveSaga from './save.saga';
import detailsSaga from './details.saga';
import workoutsSaga from './workouts.saga';
import deleteWorkout from './deleteWorkout.saga';
import grabEditDetailsSaga from './grabDetails.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    createSaga(),
    saveSaga(),
    detailsSaga(),
    workoutsSaga(),
    deleteWorkout(),
    grabEditDetailsSaga(),
  ]);
}

import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Success', 'Profile updated successfully!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert(
      'Update failure',
      'Error ocurred when updating profile, verify your credentials'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

export function updateProfileRequest(data) {
  return {
    type: '@auth/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@auth/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@auth/UPDATE_PROFILE_FAILURE',
  };
}

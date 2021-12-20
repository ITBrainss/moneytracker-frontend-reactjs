export const getAuthState = state => state.auth
export const getToken = state => getAuthState(state).token

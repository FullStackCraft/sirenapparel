// initial state
const initState = {
  sSite: ''
}

// actions
const SITE_LOCATION_FOUND = 'SITE_LOCATION_FOUND'

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    case SITE_LOCATION_FOUND:
      return {...state, sSite: action.payload}
    default:
      return state
  }
}

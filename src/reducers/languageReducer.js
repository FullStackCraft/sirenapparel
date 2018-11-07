// initial state
const initState = {
  sLanguage: ''
}

// actions
const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED'

// reducer
export default (state = initState, action) => {
  switch (action.type) {
    case LANGUAGE_CHANGED:
      return {...state, sLanguage: action.payload.sLanguage, sFullLanguage: action.payload.sFullLanguage}
    default:
      return state
  }
}

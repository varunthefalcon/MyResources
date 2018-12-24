import { HANDLE_LANGUAGE_INPUT } from "../actions"

export default (state = [], action) => {
  switch (action.type) {
    case HANDLE_LANGUAGE_INPUT:
      return Object.assign({}, state, action.payload);

    default:
      break;
  }
  return state;
}
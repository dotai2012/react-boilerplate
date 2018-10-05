// import { INFO_USER } from '../actions/type';

export default function (state = {}, action) {
  switch (action.type) {
    case 'INFO_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

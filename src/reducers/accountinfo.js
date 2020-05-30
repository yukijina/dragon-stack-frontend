import { ACCOUNT_INFO } from '../actions/types';
import fetchStates from './fetchStates';


const accountInfo = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_INFO.FETCH:
      return { ...state, status: fetchStatess.fetching };
    case ACCOUNT_INFO.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message };
    case ACCOUNT_INFO_FETCH.SUCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        ...action.inform
      };
      default:
        return state;
  }
}
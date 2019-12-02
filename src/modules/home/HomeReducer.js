import { combineReducers } from "redux";
import { HOME_ACTION_TYPES } from "./HomeActions";
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    status: null,
    error: null,
    items: []
});

const listings = (state =initialState ,action) =>{
  switch (action.type) {
    case HOME_ACTION_TYPES.MAP_ACTION:
      return state
            .set('status', 'success')
            .set('error', null)
            .set('items', action.payload)
    default:
      return state;
  }
};


export default combineReducers({
  listings
});

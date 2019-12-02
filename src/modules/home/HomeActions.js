import { push } from "connected-react-router";
import listingsData from '../../utils/listings.json';
export const HOME_ACTION_TYPES = {
  MAP_ACTION: "MAP_ACTION"
};

const mapActionCreator = data => ({
  type: HOME_ACTION_TYPES.MAP_ACTION,
  payload: data
});

export const mapAction = param => dispatch => {
  //Data will be fetched using API Call. 
  let data = listingsData;
  dispatch(mapActionCreator(data));
};
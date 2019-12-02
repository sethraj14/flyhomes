import { createSelector } from 'reselect';

export const listingSelector = state => {
	return state.home.listings.get("items");
}


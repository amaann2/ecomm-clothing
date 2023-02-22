import { createSelector } from "reselect";

const shopData = (state) => state.shop;

export const selectShop = createSelector([shopData], (shop) => shop.collection);

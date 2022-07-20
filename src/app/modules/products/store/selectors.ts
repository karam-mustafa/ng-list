import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from "./state";

const getProducts = createFeatureSelector<ProductState>('products');

export const ALL = createSelector(getProducts, state => state.items);

export const SEARCH = (key: any) => createSelector(
  getProducts, state => key !== '' ? applyFilter(state.items, key) : state.items
);

function applyFilter(items: any, key: any) {
  return items.filter((item: any) => JSON.stringify(item).toLowerCase().includes(key.toLowerCase()));
}

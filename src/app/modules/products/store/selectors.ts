import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from "./state";

const getProducts = createFeatureSelector<ProductState>('store1');

export const getItems = createSelector(
  getProducts,
  state => state.items
);

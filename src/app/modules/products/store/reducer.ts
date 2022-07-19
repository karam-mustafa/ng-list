import { ProductActionTypes, ProductsAction } from './actions';
import { ProductState, initialState } from './state';

export function reducer(state = initialState, action: ProductsAction): ProductState {
  switch (action.type) {
    case ProductActionTypes.SetItems:
    {
      return { ...state, items: action.payload };
    }

    default:
      return state;
  }
}

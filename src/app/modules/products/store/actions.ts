import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  GetItems = 'Get Items',
  SetItems = 'Set Items'
}

export class GetItems implements Action {
  readonly type = ProductActionTypes.GetItems;
  constructor() { }
}
export class SetItems implements Action {
  readonly type = ProductActionTypes.SetItems;
  constructor(public payload: any ) { }
}

export type ProductsAction = GetItems | SetItems

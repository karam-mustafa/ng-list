import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';
import {exhaustMap, map} from 'rxjs/operators';
import {ProductActionTypes} from './actions';
import * as ProductAction from './actions';
import {ProductsService} from "../services/products.service";

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
  }

  @Effect()
  getItem$ = this.actions$.pipe(
    ofType(ProductActionTypes.GetItems),
    exhaustMap(() => this.productsService.getAll().pipe(
      map((data) => {
          return new ProductAction.SetItems(data)
        }
      )
      )
    )
  );
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import {ProductActionTypes} from './actions';
import * as Store1StateActions from './actions';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions) { }

  @Effect()
  getItem$ = this.actions$.pipe(
    ofType(ProductActionTypes.GetItems),
    exhaustMap(() =>
      of([{ id: 1, name: 'karam' }, { id: 2, name: 'karam' }, { id: 3, name: 'karam' }, { id: 4, name: 'karam' }, { id: 5, name: 'karam2' }]).pipe(
        map((data)=>
          new Store1StateActions.SetItems(data)
        )
      )
    )
  );
}

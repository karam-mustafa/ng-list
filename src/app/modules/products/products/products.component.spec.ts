import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsComponent} from './products.component';
import {HttpClient} from "@angular/common/http";
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store,
  StoreModule
} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Overlay, OverlayModule} from "@angular/cdk/overlay";
import {MAT_SELECT_SCROLL_STRATEGY_PROVIDER} from "@angular/material/select";
import {MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER} from "@angular/material/tooltip";
import {MAT_AUTOCOMPLETE_SCROLL_STRATEGY} from "@angular/material/autocomplete";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [HttpClient,
        Store,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
        provideMockStore({}),
        MatDialogModule,
        MatDialog,
        {
          provide: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
          deps: [Overlay],
        },{
          provide: MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
          deps: [Overlay],
        },
        Overlay,
        {provide: MatDialogRef, useValue: {}},
        {
          provide: MAT_DIALOG_DATA, useValue: {
            myData: {
              id: 1,
              title: 'any',
              description: 'any'
            }
          }
        },
        {
          provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
          deps: [Overlay],
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render products', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toContain('Mete');
  });
});

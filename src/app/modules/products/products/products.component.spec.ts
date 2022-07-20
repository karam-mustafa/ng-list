import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {ProductsComponent} from './products.component';
import {HttpClient} from "@angular/common/http";
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher, select,
  StateObservable,
  Store,
  StoreModule
} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";
import {ALL} from "../store/selectors";
import {BehaviorSubject} from "rxjs/dist/types";
import {By} from "@angular/platform-browser";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  const mockedValue = [
    {
      id: 1,
      title: 1,
      image: 1,
      description: 1,
      category: 1,
    }
  ];

  const storeSubjectMock = new BehaviorSubject(mockedValue);
  const mockedStore = {
    pipe: () => storeSubjectMock.asObservable(),
  };

  let t = beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [
        MatDialogModule,
      ],
      providers: [HttpClient,
        {provide: Store, useValue: mockedStore},
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
        provideMockStore({}),
        MatDialog,
        Overlay,

        {provide: MatDialogRef, useValue: {}},
        {
          provide: MAT_DIALOG_DATA, useValue: {}
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


  it('should return an unaltered value', () => {
    t.variableReferencingStore
      .pipe(select(ALL))
      .subscribe((val: any) => expect(val).toBe(mockedValue))
  });


  it('should render products', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled)
    expect(compiled.querySelector('.card-title')?.textContent).toContain('mens');
  });

  it('should change search input', () => {
    setInputValue('.search-input', 'mens');

  });


  function setInputValue(selector: string, value: string) {
    fixture.detectChanges();
    tick();
    let input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }

});

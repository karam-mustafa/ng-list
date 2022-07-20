import {Component, OnInit} from '@angular/core';
import * as StoreActions from "../../../core/ngrx/root-store/actions";
import {ProductState} from "../store/state";
import {ALL, SEARCH} from "../store/selectors";
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {InfoDisplaying} from "../../shared/components/dialog/info-displaying";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items$: any;
  allCount: number = 0;
  currentCount: number = 0;
  otherPipes: any;

  constructor(private productStore: Store<ProductState>, public dialog: MatDialog) {
    this.productStore.dispatch(new StoreActions.GetItems());

    this.resolveSelection(ALL, true);
  }

  openDialog(data: any): void {
    this.dialog.open(InfoDisplaying, {
      width: '700px',
      height: '600px',
      data
    });
  }

  ngOnInit(): void {
  }

  search(string: any) {
    return this.resolveSelection(SEARCH(string));
  }

  private resolveSelection(selection: any, all = false) {
    this.items$ = this.productStore.select(selection).pipe(this.resolveIncomingData(all), map((data) => {
      return data;
    }))
  }

  resolveIncomingData(all = false) {
    return map((data: Array<any>) => {
      this.allCount = all ? data.length : this.allCount;
      this.currentCount = data.length;
      return data;
    })
  }
}

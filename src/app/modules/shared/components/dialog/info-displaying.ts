import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Component, Inject, Input} from "@angular/core";

@Component({
  selector: 'info-displaying',
  templateUrl: 'info-displaying.html',
  styleUrls: ['./info-displaying.css']

})
export class InfoDisplaying {

  @Input() resources: any;

  constructor(
    public dialogRef: MatDialogRef<InfoDisplaying>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }
}

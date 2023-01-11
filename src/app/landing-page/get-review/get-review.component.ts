import {AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-get-review',
  templateUrl: './get-review.component.html',
  styleUrls: ['./get-review.component.scss']
})
export class GetReviewComponent {
  
  step = 1;

  constructor(
    // public dialogRef: MatDialogRef<GetReviewDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  // onCancel(): void {
  //   this.dialogRef.close();
  // }

  formSubmitted() {
    this.step = 2;
  }
}

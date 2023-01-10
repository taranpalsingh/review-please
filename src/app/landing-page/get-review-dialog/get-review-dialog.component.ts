import {AfterViewInit, Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/types/enums/category.enum';
import { SubCategory } from 'src/app/types/enums/sub-category';
import { DialogData } from '../landing-page.component';

@Component({
  selector: 'app-get-review-dialog',
  templateUrl: './get-review-dialog.component.html',
  styleUrls: ['./get-review-dialog.component.scss']
})
export class GetReviewDialogComponent {
  
  step = 1;

  constructor(
    public dialogRef: MatDialogRef<GetReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  formSubmitted() {
    this.step = 2;
  }
}

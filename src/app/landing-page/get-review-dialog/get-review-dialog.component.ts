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
  
  // selectedCategory: string;
  // selectedSubCategory: string;
  // title = '';
  // description = '';

  // categories = [
  //   {value: 'Document', viewValue: 'Document', disabled: false}, 
  //   {value: 'Art', viewValue: 'Art', disabled: false}, 
  //   {value: 'Code', viewValue: 'Code', disabled: true}, 
  // ];

  // subCategories  = [];

  constructor(
    public dialogRef: MatDialogRef<GetReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  // categoryUpdated() {
  //   switch(this.selectedCategory) {
  //     case Category.Document:
  //       this.subCategories = [
  //         {value: 'Resume', viewValue: 'Resume', disabled: false}, 
  //         {value: 'CoverLetter', viewValue: 'Cover Letter', disabled: false}, 
  //         {value: 'Legal', viewValue: 'Legal', disabled: false}, 
  //         {value: 'Applications', viewValue: 'Applications', disabled: false}, 
  //         {value: 'Other', viewValue: 'Other', disabled: false},
  //       ]
  //       break;
  //     case Category.Art:
  //       this.subCategories = [
  //         {value: 'Photograph', viewValue: 'Photograph', disabled: false}, 
  //         {value: 'Music', viewValue: 'Music', disabled: true}, 
  //         {value: 'Dance', viewValue: 'Dance', disabled: true}, 
  //       ]
  //       break;
  //     default:
  //       this.subCategories = [
  //         {value: 'Resume', viewValue: 'Resume', disabled: false}, 
  //         {value: 'CoverLetter', viewValue: 'Cover Letter', disabled: false}, 
  //         {value: 'Legal', viewValue: 'Legal', disabled: false}, 
  //         {value: 'Applications', viewValue: 'Applications', disabled: false}, 
  //         {value: 'Other', viewValue: 'Other', disabled: false},
  //       ]
  //   }
  // }

  onCancel(): void {
    this.dialogRef.close();
  }

  // onSubmit() {
  //   const newReviewRequest = {
  //     category: this.selectedCategory,
  //     subCategory: this.selectedSubCategory,
  //     title: this.title,
  //     description: this.description,
  //   }
  //   console.log(newReviewRequest);
  //   alert('printed');
  // }
}

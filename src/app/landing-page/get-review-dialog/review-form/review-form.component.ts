import {AfterViewInit, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/types/enums/category.enum';
import { SubCategory } from 'src/app/types/enums/sub-category';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnDestroy {

  @Output() closeDialog = new EventEmitter();
  @Output() formSubmitted = new EventEmitter();
  
  selectedCategory: string;
  selectedSubCategory: string;
  title = '';
  description = '';

  categories = [
    {value: Category.Document, viewValue: 'Document', disabled: false}, 
    {value: Category.Art, viewValue: 'Art', disabled: false}, 
    {value: Category.Code, viewValue: 'Code', disabled: true}, 
  ];

  subCategories  = [];


  constructor() {}
  
  
  categoryUpdated() {
    switch(this.selectedCategory) {
      case Category.Document:
        this.subCategories = [
          {value: SubCategory.Resume, viewValue: 'Resume', disabled: false}, 
          {value: SubCategory.CoverLetter, viewValue: 'Cover Letter', disabled: false}, 
          {value: SubCategory.Legal, viewValue: 'Legal', disabled: false}, 
          {value: SubCategory.Applications, viewValue: 'Applications', disabled: false}, 
          {value: SubCategory.Other, viewValue: 'Other', disabled: false},
        ]
        break;
      case Category.Art:
        this.subCategories = [
          {value: SubCategory.Photograph, viewValue: 'Photograph', disabled: false}, 
          {value: SubCategory.Music, viewValue: 'Music', disabled: true}, 
          {value: SubCategory.Dance, viewValue: 'Dance', disabled: true}, 
        ]
        break;
      default:
        this.subCategories = [
          {value: SubCategory.Resume, viewValue: 'Resume', disabled: false}, 
          {value: SubCategory.CoverLetter, viewValue: 'Cover Letter', disabled: false}, 
          {value: SubCategory.Legal, viewValue: 'Legal', disabled: false}, 
          {value: SubCategory.Applications, viewValue: 'Applications', disabled: false}, 
          {value: SubCategory.Other, viewValue: 'Other', disabled: false},
        ]
    }
  }

  onSubmit() {
    const newReviewRequest = {
      category: this.selectedCategory,
      subCategory: this.selectedSubCategory,
      title: this.title,
      description: this.description,
    }
    console.log(newReviewRequest);
    alert('printed');
    this.formSubmitted.emit(true);
  }

  onCancel() {
    this.closeDialog.emit();
  }

  ngOnDestroy() {
  }

}

import {AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { GetReviewDialogComponent } from './get-review-dialog/get-review-dialog.component';

export interface DialogData {
  animal: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnDestroy {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(GetReviewDialogComponent, {
      data: {animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  giveReview() {

  }

  getReview() {
    this.openDialog();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

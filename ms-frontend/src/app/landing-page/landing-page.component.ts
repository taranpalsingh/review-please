import {AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
    // this.openDialog();
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(GetReviewDialogComponent, {
  //     data: {animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  // giveReview() {
  //   this.router.navigateByUrl('/open-requests');
  // }

  // getReview() {
  //   this.openDialog();
  // }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

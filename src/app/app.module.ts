import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GetReviewDialogComponent } from './landing-page/get-review-dialog/get-review-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ReviewFormComponent } from './landing-page/get-review-dialog/review-form/review-form.component';
import { SuggestedReviewersComponent } from './landing-page/get-review-dialog/suggested-reviewers/suggested-reviewers.component';
import { ReviewerCardComponent } from './reviewer-card/reviewer-card.component';
import { MatCardModule } from '@angular/material/card';
import { OpenRequestsComponent } from './open-requests/open-requests.component';
import { AdCardComponent } from './open-requests/ad-card/ad-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    LandingPageComponent,
    LoaderComponent,
    GetReviewDialogComponent,
    ReviewFormComponent,
    SuggestedReviewersComponent,
    ReviewerCardComponent,
    OpenRequestsComponent,
    AdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

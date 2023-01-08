import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreAuthComponent } from './pre-auth/pre-auth.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PreAuthComponent,
    DropdownComponent,
    LandingPageComponent,
    LoaderComponent,
    GetReviewDialogComponent,
    ReviewFormComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

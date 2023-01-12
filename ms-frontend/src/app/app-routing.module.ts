import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetReviewComponent } from './landing-page/get-review/get-review.component';
import { SuggestedReviewersComponent } from './landing-page/get-review/suggested-reviewers/suggested-reviewers.component';
import { OpenRequestsComponent } from './open-requests/open-requests.component';
import { ReviewersComponent } from './reviewers/reviewers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'give-review',
    pathMatch: 'full',
    // component: OpenRequestsComponent,
  },
  {
    path: 'give-review',
    component: OpenRequestsComponent,
  },
  {
    path: 'get-review',
    component: GetReviewComponent,
  },
  {
    path: 'reviewers',
    component: ReviewersComponent,
  },
  {
    path: '**',
    redirectTo: 'give-review',
    // pathMatch: 'full',
    // component: OpenRequestsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

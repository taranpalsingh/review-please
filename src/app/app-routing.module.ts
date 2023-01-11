import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetReviewComponent } from './landing-page/get-review/get-review.component';
import { OpenRequestsComponent } from './open-requests/open-requests.component';

const routes: Routes = [
  {
    path: 'give-review',
    component: OpenRequestsComponent,
  },
  {
    path: 'get-review',
    component: GetReviewComponent,
  },
  {
    path: '*',
    component: OpenRequestsComponent,
  },
  {
    path: '',
    component: OpenRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

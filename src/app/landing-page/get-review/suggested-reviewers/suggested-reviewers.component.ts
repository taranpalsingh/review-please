import {AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-suggested-reviewers',
  templateUrl: './suggested-reviewers.component.html',
  styleUrls: ['./suggested-reviewers.component.scss']
})
export class SuggestedReviewersComponent implements OnDestroy {

  reviewers = [
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
    {
      name: 'Taran Pal Singh',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 23,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb ebejnejfnjenfenfe efjhejfnkenfe fefefbjebfjnejf'
    },
  ];

  constructor() {}


  ngOnDestroy() {
  }

}

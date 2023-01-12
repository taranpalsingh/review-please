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
      name: 'Brian L.',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Legal Advisor',
      rating: 4.8,
      location: 'Quebec, Canada',
      rate: 17,
      jobsCompleted: 11,
      // tags: ['Java', 'Javascript']
      description: 'He is a great lawyer and is currently available full time to review your legal documents'
    },
    {
      name: 'John H.',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Resume Advisor',
      rating: 4.9,
      location: 'Alberta, Canada',
      rate: 29,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'Have worked as a Resume reviewer in multiple Employment Firms for years.'
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
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb fefefbjebfjnejf'
    },
    
    {
      name: 'Jacky Sean',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Web Developer',
      rating: 4.2,
      location: 'Ontario, Canada',
      rate: 27,
      jobsCompleted: 132,
      // tags: ['Java', 'Javascript']
      description: 'A great Web Developer with more than 5 years of experience'
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
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb fefefbjebfjnejf'
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
      description: 'He is a greatdjwns dnwdnwjdnwjdnj wdnjwndjnwdj bwhdvjhwdja vchfjabhjcbahj cbajebcffjfb fefefbjebfjnejf'
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

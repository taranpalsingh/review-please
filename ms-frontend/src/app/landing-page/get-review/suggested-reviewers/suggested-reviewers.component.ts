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
      name: 'Karen H.',
      imageUrl: 'reviewer2.jfif',
      profile: 'Legal Document Reviewer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 21,
      jobsCompleted: 83,
      description: 'I will read, review, and give feedback on any piece of legal document! I am professionally qualified with a PhD in International Law'
    },
    {
      name: 'Brian L.',
      imageUrl: 'reviewer3.jfif',
      profile: 'Legal Advisor',
      rating: 4.8,
      location: 'Quebec, Canada',
      rate: 17,
      jobsCompleted: 11,
      // tags: ['Java', 'Javascript']
      description: 'He is a great lawyer and is currently available full time to review your legal documents'
    },
    {
      name: 'Jaqueline M.',
      imageUrl: 'reviewer4.jfif',
      profile: 'Resume Advisor',
      rating: 4.9,
      location: 'Alberta, Canada',
      rate: 29,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: ' I provide interview-winning resume writing services for those seeking entry-level, professional, and executive roles'
    },
    {
      name: 'Johnn Depp',
      imageUrl: 'reviewer-dummy1.webp',
      profile: 'Web Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 20,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'With an experience of more than 10 years in IT, I have reviewed code everyday and would love to help you out'
    },
    {
      name: 'Terry D.',
      imageUrl: 'reviewer5.jfif',
      profile: 'Legal Advisor',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 33,
      jobsCompleted: 131,
      description: 'I will read, review, and give feedback on any piece of legal document! I am professionally qualified with a PhD in International Law'
    },
    {
      name: 'Garett Simmons',
      imageUrl: 'reviewer6.jfif',
      profile: 'Full Stack Developer',
      rating: 4.8,
      location: 'Ontario, Canada',
      rate: 50,
      jobsCompleted: 131,
      // tags: ['Java', 'Javascript']
      description: 'With an experience of more than 10 years in IT, I have reviewed code everyday and would love to help you out'
    },
    {
      name: 'Glenn F',
      imageUrl: 'reviewer5.jfif',
      profile: 'Resume Reviewer',
      rating: 4.2,
      location: 'Ontario, Canada',
      rate: 19,
      jobsCompleted: 132,
      // tags: ['Java', 'Javascript']
      description: 'Have worked as a Resume reviewer in multiple Employment Firms for years.'
    },
    {
      name: 'Amy Santiago',
      imageUrl: 'reviewer4.jfif',
      profile: 'Resume Advisor',
      rating: 4.9,
      location: 'Alberta, Canada',
      rate: 20,
      jobsCompleted: 13,
      // tags: ['Java', 'Javascript']
      description: 'Have worked as a Resume reviewer in multiple Employment Firms for years.'
    },
  ];

  constructor() {}


  ngOnDestroy() {
  }

}

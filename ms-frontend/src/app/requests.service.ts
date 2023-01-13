import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {


  requests = [
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Job', 
      description: 'I need help with Cover Letter for my dream job at Microsoft. I have given multiple interviews but I believe that I need to give better impression by my resume.',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' Just Now',
    },  
    {
      category: 'Document', 
      subCategory: 'Legal', 
      title: 'Legal review for Job Offer Letter', 
      description: 'I need someone to go through my offer letter once and let me know if there is any loophole that I am missing here. It is an offer letter for the role of Consultant for a small startup based in Greece. I just want to double check if it is in my best interests or not.',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 2 hours ago',
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Jobs ', 
      description: 'I need help with Cover Letter for my dream job at Microsoft. I have given multiple interviews but I believe that I need to give better impression by my resume.',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 2 hours ago'
    },
    {
      category: 'Document', 
      subCategory: 'Legal', 
      title: 'Legal document review for Contract', 
      description: 'I need someone to go through my offer letter once and let me know if there is any loophole that I am missing here. It is an offer letter for the role of Consultant for a small startup based in Greece. I just want to double check if it is in my best interests or not.',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 1 day ago'
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for Mechanical Jobs', 
      description: 'I need help with Cover Letter for my dream job at Microsoft. I have given multiple interviews but I believe that I need to give better impression by my resume.',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 2 days ago'
    },
    {
      category: 'Document', 
      subCategory: 'Legal', 
      title: 'Legal document review for Contract', 
      description: 'I need someone to go through my offer letter once and let me know if there is any loophole that I am missing here. It is an offer letter for the role of Consultant for a small startup based in Greece. I just want to double check if it is in my best interests or not.',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 5 days ago'
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for Management Jobs', 
      description: 'I need help with Cover Letter for my dream job at Microsoft. I have given multiple interviews but I believe that I need to give better impression by my resume.',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 6 days ago'
    },
  ]

  constructor() { }

  addRequest(json) {
    this.requests = [json, ...this.requests];
  }
}

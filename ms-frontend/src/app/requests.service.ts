import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {


  requests = [
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Jobsddddddddd ', 
      description: 'I need help with sdnjwdnwmd Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Verita',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' Just Now',
      
    },  
    {
      category: 'Document', 
      subCategory: 'Legal', 
      title: 'Legal review for Job Offer Letter', 
      description: 'I needI need help dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam with sdnjwdnwmdI need help with sdnjwdnwmd help with sdnjwdnwmd',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 2 hours ago',
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Jobs ', 
      description: 'I need help with sdnjwdnwmd dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam  dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 2 hours ago'
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Jobs ', 
      description: 'I need help with sdnjwdnwmd  dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi  dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquamrepudiandae consequuntur voluptatum laborum numquam',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 1 day ago'
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Jobs ', 
      description: 'I need help with sd dolor sit amet consectetur  dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquamadipisicing elit. Maxime molestiae quas vel sint commodi repudiandae ',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 2 days ago'
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Jobs ', 
      description: 'I need help wit  dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam dolor sit amet consectetur adipisicing elit. Maxime molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam h sdnjwdnwmd',
      location: 'ON, Canada',
      willingToPay: true,
      timestamp: ' 5 days ago'
    },
    {
      category: 'Document', 
      subCategory: 'Resume', 
      title: 'Resume review for IT Jobs ', 
      description: 'I need help with sdnjwdnwmd',
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

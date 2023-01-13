import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})
export class AdCardComponent implements OnInit {

  @Input() ad;
  tags = [];
  // time = '';

  constructor() { }

  ngOnInit(): void {
    this.addTags();
    // this.calculateTime();
  }

  // calculateTime() {
  //   const endTime = new Date();
  //   let timeDiff = endTime.getTime() - this.ad['timestamp'];
    
  //   timeDiff /= 1000;
  
  //   if (timeDiff <= 60) {
  //     this.time = 'Just Now';
  //   } else if (timeDiff < (24 * 60)) {
  //     // hour
  //     this.time = Math.ceil(timeDiff/60).toString(); 
      
  //   } 
  //   // get seconds 
  //   var seconds = Math.round(timeDiff);
  //   console.log(seconds + " seconds");
  // }

  addTags() {
    if (this.ad['category'])
      this.tags.push(this.ad['category']);
    
    if (this.ad['subCategory'])
      this.tags.push(this.ad['subCategory']);

    (this.ad['willingToPay']) ? this.tags.push('Paid'): this.tags.push('Unpaid')
  }

}

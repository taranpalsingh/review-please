import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})
export class AdCardComponent implements OnInit {

  @Input() ad;
  tags = [];

  constructor() { }

  ngOnInit(): void {
    this.addTags();
  }

  addTags() {

    (this.ad['willingToPay']) ? this.tags.push('Paid'): this.tags.push('Unpaid')

    if (this.ad['category'])
      this.tags.push(this.ad['category'])
      
    if (this.ad['subCategory'])
      this.tags.push(this.ad['subCategory'])
  }

}

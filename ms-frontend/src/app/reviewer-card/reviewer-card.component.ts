import {AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-reviewer-card',
  templateUrl: './reviewer-card.component.html',
  styleUrls: ['./reviewer-card.component.scss']
})
export class ReviewerCardComponent implements AfterViewInit, OnDestroy {

  @Input() reviewer;
  
  assetsBaseUrl = '../../assets/Images/';

  constructor(private navigator: NavigationService) {}

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

}

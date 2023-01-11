import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Constants } from './app.constants';
import { ApiService } from './api.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  
  darkColor = '#6026a8';
  dark1Color = '#5c21a6';
  dark2Color = '#7557b8';
  light3Color = '#967edd';
  light2Color = '#c3b9f8';
  light1Color = '#e8e5fc';
  lightColor = '#fafafe';
  backgroundColor = '#fff';
  

  constants = Constants;
  @ViewChild('tabs', {static: false}) tabGroup: MatTabGroup;
  
  constructor(
    private apiService: ApiService,
    @Inject(DOCUMENT) private document: any,
    private router: Router
  ) {
    document.documentElement.style.setProperty('--dark-color', this.darkColor);
    document.documentElement.style.setProperty('--dark1-color', this.dark1Color);
    document.documentElement.style.setProperty('--dark2-color', this.dark2Color);
    document.documentElement.style.setProperty('--light-color', this.lightColor);
    document.documentElement.style.setProperty('--light1-color', this.light1Color);
    document.documentElement.style.setProperty('--light2-color', this.light2Color);
    document.documentElement.style.setProperty('--light3-color', this.light3Color);
    this.apiService.API_URL = 'http://dev.tab.kitecash.in/simulator/fis/transaction';
  }

  
  giveReview() {
    this.router.navigateByUrl('');
  }

  getReview() {
    this.router.navigateByUrl('/get-review');
    // this.openDialog();
  }

  ngAfterViewInit() {
  }
}

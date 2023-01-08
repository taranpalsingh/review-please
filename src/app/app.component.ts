import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Constants } from './app.constants';
import { ApiService } from './api.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constants = Constants;
  @ViewChild('tabs', {static: false}) tabGroup: MatTabGroup;
  
  constructor(
    private apiService: ApiService,
    @Inject(DOCUMENT) private document: any
  ) {    
    this.apiService.API_URL = 'http://dev.tab.kitecash.in/simulator/fis/transaction';
  }

  ngAfterViewInit() {
  }
}

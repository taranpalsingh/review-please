import {AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit, OnDestroy {

  show: boolean = false;
  private subscription: Subscription;

  constructor(private navigator: NavigationService) {}

  ngAfterViewInit() {
    this.subscription = this.navigator.getLoader()
      .subscribe(event => {
        this.show = event;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

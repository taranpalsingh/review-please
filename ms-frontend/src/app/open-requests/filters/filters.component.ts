import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  Resume = true;
  Legal = false;
  CoverLetter = false;
  Applications = false;
  Other = false;
  Photograph = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateCategory(str) {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  Resume = true;
  Legal = true;
  CoverLetter = false;
  Applications = true;
  Other = false;
  Photograph = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateCategory(str) {

  }

}

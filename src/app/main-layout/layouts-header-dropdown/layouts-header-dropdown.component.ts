import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts-header-dropdown',
  templateUrl: './layouts-header-dropdown.component.html',
  styleUrls: ['./layouts-header-dropdown.component.scss']
})
export class LayoutsHeaderDropdownComponent implements OnInit {
  sidebg = '#131313';
  sidecolor = '#fff';
  headerbg = 'rgb(243 244 246 / 1)';
  headercolor = '#fff';
  constructor() { }

  ngOnInit(): void {
  }

}

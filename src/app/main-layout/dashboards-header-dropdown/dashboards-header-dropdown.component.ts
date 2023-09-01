import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../main-layout.service';

@Component({
  selector: 'app-dashboards-header-dropdown',
  templateUrl: './dashboards-header-dropdown.component.html',
  styleUrls: ['./dashboards-header-dropdown.component.scss']
})
export class DashboardsHeaderDropdownComponent implements OnInit {
  sidebg = '#131313';
  sidecolor = '#fff';
  headerbg = 'rgb(243 244 246 / 1)';
  headercolor = '#fff';
  constructor(public layoutService:MainLayoutService) { }

  ngOnInit(): void {
  }

}

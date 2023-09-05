import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../main-layout.service';
import { Router } from '@angular/router';

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
  constructor(public layoutService:MainLayoutService,public router:Router) { }

  ngOnInit(): void {
  }

  headerMenu=[
    {
      link:'/main-layout/dashboard',
      heading:'Default',
      subheading:'Reports & statistics',
    },
    {
      link:'',
      heading:'eCommerce',
      subheading:'Sales reports',
    },
    {
      link:'',
      heading:'Projects',
      subheading:'Tasts, graphs & charts',
    },
    {
      link:'',
      heading:'Online Courses',
      subheading:'Student progress',
    },
    {
      link:'',
      heading:'Marketing',
      subheading:'Campaigns & conversions',
    },
    {
      link:'',
      heading:'Bidding',
      subheading:'Campaigns & conversions',
    },
    {
      link:'',
      heading:'POS System',
      subheading:'Campaigns & conversions',
    },
    {
      link:'',
      heading:'Call center',
      subheading:'Campaigns & conversions',
    }
  ]

  dashboards=[
    {
      heading:'Logistics'
    },
    {
      heading:'Website Analytics'
    },
    {
      heading:'Finance Performance'
    },
    {
      heading:'Store Analytics'
    },
    {
      heading:'Social'
    },
    {
      heading:'Delivery'
    },
    {
      heading:'Crypto'
    },
    {
      heading:'School'
    },
    {
      heading:'Podcast'
    },
  ]
}

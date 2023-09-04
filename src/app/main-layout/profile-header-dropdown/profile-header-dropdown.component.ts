import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../main-layout.service';

@Component({
  selector: 'app-profile-header-dropdown',
  templateUrl: './profile-header-dropdown.component.html',
  styleUrls: ['./profile-header-dropdown.component.scss']
})
export class ProfileHeaderDropdownComponent implements OnInit {
  // userEmail=localStorage.getItem('LoggedInUser');
  userEmail="john@doe.com";
  constructor(public layoutService:MainLayoutService) { }

  ngOnInit(): void {
  }

}

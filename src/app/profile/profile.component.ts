import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainLayoutService } from '../main-layout/main-layout.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    // console.log('dark mode',this.layoutService.darkMode);
  }
  constructor(public layoutService:MainLayoutService,public router:Router){}
  openTab!:number;
  openTabName!:string;
  toggleTabs($tabNumber: number,name:string){
    this.openTab = $tabNumber;
    this.openTabName=name;
  }

}

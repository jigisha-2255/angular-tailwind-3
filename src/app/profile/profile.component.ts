import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
  }
  openTab!:number;
  openTabName!:string;
  constructor(public router:Router){}
  toggleTabs($tabNumber: number,name:string){
    this.openTab = $tabNumber;
    this.openTabName=name;
  }

}

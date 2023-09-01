import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-header-dropdown',
  templateUrl: './pages-header-dropdown.component.html',
  styleUrls: ['./pages-header-dropdown.component.scss']
})
export class PagesHeaderDropdownComponent implements OnInit {
  sidebg = '#131313';
  sidecolor = '#fff';
  headerbg = 'rgb(243 244 246 / 1)';
  headercolor = '#fff';
  constructor() { }

  ngOnInit(): void {
  }
  openTab:number=1;
  openTabName!:string;
  toggleTabs($tabNumber: number,name:string){
    this.openTab = $tabNumber;
    this.openTabName=name;
  }

}

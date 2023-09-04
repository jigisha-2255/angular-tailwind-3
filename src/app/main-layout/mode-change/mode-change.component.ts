import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../main-layout.service';

@Component({
  selector: 'app-mode-change',
  templateUrl: './mode-change.component.html',
  styleUrls: ['./mode-change.component.scss']
})
export class ModeChangeComponent implements OnInit {
  direction='ltr';
  constructor(public layoutService:MainLayoutService) { 
  }

  ngOnInit(): void {
    this.layoutService.darkMode=JSON.parse(localStorage.getItem('mode') || '{}');
    // console.log(typeof(this.layoutService.darkMode));
  }
  changeMode(){
    this.layoutService.darkMode=!this.layoutService.darkMode;
    localStorage.setItem('mode',new Boolean(this.layoutService.darkMode).toString());
  }

}

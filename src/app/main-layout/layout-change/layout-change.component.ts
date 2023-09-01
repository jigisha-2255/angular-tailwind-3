import { Component, OnInit } from '@angular/core';
import { MainLayoutService } from '../main-layout.service';

@Component({
  selector: 'app-layout-change',
  templateUrl: './layout-change.component.html',
  styleUrls: ['./layout-change.component.scss']
})
export class LayoutChangeComponent implements OnInit {
  direction='ltr';
  constructor(public layoutService:MainLayoutService) { }

  ngOnInit(): void {
  }

  changeLayout(){
    if(this.layoutService.direction=='ltr'){
      this.layoutService.direction='rtl';
      localStorage.setItem('direction',this.layoutService.direction);
      console.log(this.layoutService.direction);
    } else{
      this.layoutService.direction='ltr';
      console.log(this.layoutService.direction);
      localStorage.setItem('direction',this.layoutService.direction);
    }
  }

}

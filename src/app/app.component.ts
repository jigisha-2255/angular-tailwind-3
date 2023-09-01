import { Component } from '@angular/core';
import { MainLayoutService } from './main-layout/main-layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tailwind-3';
  constructor(public layoutService:MainLayoutService){}
   
}

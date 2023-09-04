import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainLayoutService {
  darkMode:boolean=false;
  openSidebar: boolean = true;
  direction:string|null = 'ltr';
  constructor() {
    this.darkMode=JSON.parse(localStorage.getItem('mode') || '{}');
    this.direction=localStorage.getItem('direction');
    this.openSidebar=JSON.parse(localStorage.getItem('sidebar') || '{}');
  }
}

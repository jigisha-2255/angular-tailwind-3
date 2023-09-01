import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsHeaderDropdownComponent } from './apps-header-dropdown/apps-header-dropdown.component';
import { HelpHeaderDropdownComponent } from './help-header-dropdown/help-header-dropdown.component';
import { LayoutsHeaderDropdownComponent } from './layouts-header-dropdown/layouts-header-dropdown.component';
import { PagesHeaderDropdownComponent } from './pages-header-dropdown/pages-header-dropdown.component';
import { DashboardsHeaderDropdownComponent } from './dashboards-header-dropdown/dashboards-header-dropdown.component';
import { ModeChangeComponent } from './mode-change/mode-change.component';
import { LayoutChangeComponent } from './layout-change/layout-change.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ProfileHeaderDropdownComponent } from './profile-header-dropdown/profile-header-dropdown.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AppsHeaderDropdownComponent,
    HelpHeaderDropdownComponent,
    LayoutsHeaderDropdownComponent,
    PagesHeaderDropdownComponent,
    DashboardsHeaderDropdownComponent,
    ModeChangeComponent,
    LayoutChangeComponent,
    SidemenuComponent,
    ProfileHeaderDropdownComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainLayoutModule { }

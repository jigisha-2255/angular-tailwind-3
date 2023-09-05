import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main-layout/dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ActivityComponent } from './profile/activity/activity.component';
import { FollowersComponent } from './profile/followers/followers.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { FormsModule } from '@angular/forms';
// import { ChartsModule, NgChartsModule } from 'ng2-charts';
import { RadarChartsComponent } from './radar-chart/radar-chart';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentsComponent,
    ConnectionsComponent,
    ActivityComponent,
    FollowersComponent,
    RadarChartComponent,
    RadarChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    // ChartsModule, 
    // NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

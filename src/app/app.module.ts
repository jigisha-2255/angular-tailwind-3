import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main-layout/dashboard/dashboard.component';
import { DocumentsComponent } from './documents/documents.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ActivityComponent } from './profile/activity/activity.component';
import { FollowersComponent } from './profile/followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentsComponent,
    ConnectionsComponent,
    ActivityComponent,
    FollowersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

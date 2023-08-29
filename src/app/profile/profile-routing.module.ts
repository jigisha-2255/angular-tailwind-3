import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { OverviewComponent } from './overview/overview.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { ProjectsComponent } from './projects/projects.component';
import { DocumentsComponent } from '../documents/documents.component';
import { ConnectionsComponent } from '../connections/connections.component';
import { ActivityComponent } from './activity/activity.component';
import { FollowersComponent } from './followers/followers.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:'',
        redirectTo:'overview',
        pathMatch:'full'
      },
      {
        path:'overview',
        component:OverviewComponent
      },
      {
        path:'projects',
        component:ProjectsComponent
      },
      {
        path:'campaigns',
        component:CampaignsComponent
      },
      {
        path:'documents',
        component:DocumentsComponent
      },
      {
        path:'followers',
        component:FollowersComponent
      },
      {
        path:'activity',
        component:ActivityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

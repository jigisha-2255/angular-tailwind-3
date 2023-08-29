import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main-layout',
    pathMatch:'full'
  },
  {
    path:'main-layout',
    loadChildren: () => import('./main-layout/main-layout.module').then(m => m.MainLayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

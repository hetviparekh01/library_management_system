import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getallauthors',
    pathMatch:'full'
  },
  {
    path:'getallauthors',
    component:GetUsersComponent,
  },
  {
    path:'addauthors',
    component:AddUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

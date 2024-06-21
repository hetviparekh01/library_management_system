import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getallusers',
    pathMatch:'full'
  },
  {
    path:'getallusers',
    component:GetUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAuthorsComponent } from './get-authors/get-authors.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getallauthors',
    pathMatch:'full'
  },
  {
    path:'getallauthors',
    component:GetAuthorsComponent,
  },
  {
    path:'addauthors',
    component:AddAuthorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'books',
    loadChildren:()=>import('./books/books.module').then(m=>m.BooksModule)
  },
  {
    path:'authors',
    loadChildren:()=>import('./authors/authors.module').then(m=>m.AuthorsModule)
  },
  {
    path:'category',
    loadChildren:()=>import('./categories/categories.module').then(m=>m.CategoriesModule)
  },
  {
    path:'users',
    loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { GetBooksComponent } from './get-books/get-books.component';

const routes: Routes = [
      {
        path:'',
        redirectTo:'getallBooks',
        pathMatch:'full'
      },
      {
        path:'getallBooks',
        component:GetBooksComponent,
      },
      {
        path:'addbooks',
        component:AddBooksComponent,
      },
      {
        path:'editbooks/:id',
        component:AddBooksComponent
      }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }


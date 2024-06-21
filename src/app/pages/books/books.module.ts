import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { AddBooksComponent } from './add-books/add-books.component';
import { GetBooksComponent } from './get-books/get-books.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    AddBooksComponent,
    GetBooksComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AgGridModule
  ]
})
export class BooksModule { }

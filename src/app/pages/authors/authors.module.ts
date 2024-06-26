import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { GetAuthorsComponent } from './get-authors/get-authors.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddAuthorsComponent,
    GetAuthorsComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    AgGridModule,
    SharedModule
  ]
})
export class AuthorsModule { }

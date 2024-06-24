import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { GetCategoryComponent } from './get-category/get-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GetCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AgGridModule,
    SharedModule
  ]
})
export class CategoriesModule { }

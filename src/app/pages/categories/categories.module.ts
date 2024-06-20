import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { GetCategoryComponent } from './get-category/get-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    GetCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }

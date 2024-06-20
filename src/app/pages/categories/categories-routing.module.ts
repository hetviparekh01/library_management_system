import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCategoryComponent } from './get-category/get-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'getallcategory',
    pathMatch:'full'
  },
  {
    path:'getallcategory',
    component:GetCategoryComponent,
  },
  {
    path:'addcategory',
    component:AddCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CategoryService } from 'src/app/core/services/category.service';
import { CustomRendererComponent } from 'src/app/shared/cellrenderer/custom-renderer/custom-renderer.component';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.scss']
})
export class GetCategoryComponent {

  constructor(private categoryService:CategoryService){}
  categoryData: any
  rowData: any = [];
  columnDefs: ColDef[] = [
  { headerName: 'CategoryName', field: 'name', flex: 3 },
  { headerName: 'Action', cellRenderer: CustomRendererComponent,cellRendererParams:{
      deleteFun:(id:string)=>this.deleteCategoryFn(id),
      update:(id:string)=>this.updateCategoryFn(id)
  } },
];
ngOnInit(): void {  
  this.getCategory()
}
updateCategoryFn(id: string) {
  console.log(id);
}
deleteCategoryFn(id: string) {
  console.log(id);
}
getCategory() {
  this.categoryService.getCategory().subscribe({
    next: (response:any) => {
      this.categoryData = response.content;
    },
    error: (err) => {
      // console.log(err);
    },
  });
}
}

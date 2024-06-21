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
  { headerName: 'Action', cellRenderer: CustomRendererComponent },
];
ngOnInit(): void {  
  this.getCategory()
}
getCategory() {
  this.categoryService.getCategory().subscribe({
    next: (response:any) => {
      this.categoryData = response.content;
      console.log(this.categoryData);
      console.log(response);
    },
    error: (err) => {
      console.log(err);
    },
  });
}
}

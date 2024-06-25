import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  @Input() columnDefs!: ColDef[]
  @Input() rowData: any
  pagesize:boolean=true
  gridOptions = {
    rowHeight: 65,
  }
}

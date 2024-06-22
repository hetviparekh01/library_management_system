import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRendererComponent } from './cellrenderer/custom-renderer/custom-renderer.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    CustomRendererComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports:[
    CustomRendererComponent,
    DatatableComponent
  ]
})
export class SharedModule { }

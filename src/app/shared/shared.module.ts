import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomRendererComponent } from './cellrenderer/custom-renderer/custom-renderer.component';
import { DatatableComponent } from './datatable/datatable.component';
import { AgGridModule } from 'ag-grid-angular';
import { CustomfilterationComponent } from './customfilteration/customfilteration.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    CustomRendererComponent,
    DatatableComponent,
    CustomfilterationComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports:[
    CustomRendererComponent,
    DatatableComponent,
    CustomfilterationComponent
  ]
})
export class SharedModule { }

import { Component } from '@angular/core';
import { ICellEditorAngularComp, ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-renderer',
  templateUrl: './custom-renderer.component.html',
  styleUrls: ['./custom-renderer.component.scss']
})
export class CustomRendererComponent implements ICellRendererAngularComp {
  public params: any;
  public label: string | undefined;

  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label || 'Delete';
  }
  refresh(params: any): boolean { 
    this.params = params;
    return true;
  }
 
}

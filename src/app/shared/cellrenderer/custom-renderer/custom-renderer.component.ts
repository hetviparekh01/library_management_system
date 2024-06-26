import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-custom-renderer',
  templateUrl: './custom-renderer.component.html',
  styleUrls: ['./custom-renderer.component.scss'],
})
export class CustomRendererComponent implements ICellRendererAngularComp {
  constructor(private tokenService:TokenService){}
  role=this.tokenService.getRole() as string
  public params: any;
  public label: string | undefined;

  agInit(params: any): void {
    this.params = params;
  }
  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
  deleteFun() {
    this.params.deleteFun(this.params.data._id);
  }
  update() {
    this.params.update(this.params.data._id);
  }
}

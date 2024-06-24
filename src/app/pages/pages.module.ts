import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'primeng/api';
import { CustomfilterationComponent } from '../shared/customfilteration/customfilteration.component';
import { RoughComponent } from './rough/rough.component';



@NgModule({
  declarations: [
    DashboardComponent,
    RoughComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }

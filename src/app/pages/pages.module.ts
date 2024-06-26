import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomfilterationComponent } from '../shared/customfilteration/customfilteration.component';
import { RoughComponent } from './rough/rough.component';
import { TotalUserComponent } from './dashboard/total-user/total-user.component';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    DashboardComponent,
    RoughComponent,
    TotalUserComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ChartModule
  ]
})
export class PagesModule { }

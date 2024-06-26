import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GetUsersComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AgGridModule,
    SharedModule
  ]
})
export class UsersModule { }

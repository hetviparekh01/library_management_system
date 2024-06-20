import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    HorizontalComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class LayoutModule { }

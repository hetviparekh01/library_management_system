import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from './layout/horizontal/horizontal.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { authGuard } from './guard/auth.guard';
import { loginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path:"",
    component:HorizontalComponent,
    loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule),
    canActivate:[authGuard]
  },
  {
    path:"auth",
    component:AuthLayoutComponent,
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule),
    canActivate:[loginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

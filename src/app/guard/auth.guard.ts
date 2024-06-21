import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../core/services/token.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenservice=inject(TokenService);
  const routes=inject(Router);
  if(!tokenservice.getToken()){
    routes.navigate(['/auth/login'])
    return false;
  }
  return true;
};


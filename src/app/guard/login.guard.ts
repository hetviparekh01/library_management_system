import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '../core/services/token.service';
import {Location} from '@angular/common'

export const loginGuard: CanActivateFn = (route, state) => {
  const tokenservice=inject(TokenService);
  const locationservice=inject(Location);
  if (tokenservice.getToken()) {
    locationservice.back();
    return false;
  } else {
    return true;
  }
};

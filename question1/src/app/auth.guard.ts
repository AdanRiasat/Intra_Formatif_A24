import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const userService = inject(UserService)

  if (localStorage.getItem(userService.USER_KEY) == null){
    return router.createUrlTree(['/login'])
  }
  
  
  return true;
};

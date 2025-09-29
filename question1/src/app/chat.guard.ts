import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const chatGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const userService = inject(UserService)
  const userData = localStorage.getItem(userService.USER_KEY)
  
  if (userData == null) return router.createUrlTree(['/login'])

  let user = JSON.parse(userData)
  if (!user.prefercat){
    return router.createUrlTree(['/dog'])
  }
  

  return true;
};

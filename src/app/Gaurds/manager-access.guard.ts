import { CanActivateFn, Router } from '@angular/router';

export const managerAccessGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    if (user.role === 2 || user.role === 3) { // Manager, or Admin role
      return true;
    }
  }
  router.navigate(['/un-authorized']);
  return false;
};

import { CanActivateFn, Router } from '@angular/router';

export const employeeAccessGuard: CanActivateFn = (route, state) => {
  const router = new Router();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.role === 1 || user.role===2 ) {
        return true;
      }
    }
    router.navigate(['/un-authorized']);
    return false;
};

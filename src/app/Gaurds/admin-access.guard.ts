import { CanActivateFn } from '@angular/router';
import { UserDetails } from '../Models/UserDetails';

export const adminAccessGuard: CanActivateFn = (route, state) => {
  let user: UserDetails | null = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  if (user) {
    if (user.role === 3) {
      return true;
    }
  }
  return false;
}

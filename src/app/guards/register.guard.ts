import { CanActivateFn } from '@angular/router';
import { RegisterService } from '../services/auth-service/register.service';
import { inject } from '@angular/core';

export const registerGuard: CanActivateFn = (route, state) => {
  const registerService = inject(RegisterService)
    
  if(registerService.isRegister()){
      return true
    } 
      return false
};

import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PettrnValidationService {

static pettranValidation(regExp: RegExp, error: ValidationErrors):ValidatorFn{
return (control:AbstractControl):{[key:string]:any} | null =>{
    if((control.value)){
      return null;
    }
    const valid =  regExp.test(control.value)
    return valid? null : error;
  }
}
}

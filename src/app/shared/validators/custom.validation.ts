/* import { AbstractControl, ValidationErrors } from "@angular/forms";

export const PasswordStrengthValidator = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value || '';

  if (!value) {
    return null;
  }

  const upperCaseCharacters = /[A-Z]+/g;
  const lowerCaseCharacters = /[a-z]+/g;
  const numberCharacters = /[0-9]+/g;
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (
    !upperCaseCharacters.test(value) ||
    !lowerCaseCharacters.test(value) ||
    !numberCharacters.test(value) ||
    !specialCharacters.test(value)
  ) {
    return {
      passwordStrength: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    };
  }

  return null;
};
 */

export const PasswordStrengthValidator: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
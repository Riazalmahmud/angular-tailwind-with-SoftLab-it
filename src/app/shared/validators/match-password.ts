import { AbstractControl } from "@angular/forms";

export function passwordMatchValidator(password: string, confirmPassword: string){
    return function (form: AbstractControl){
        const passwords = form.get(password)?.value;
        const confirmPasswords = form.get(confirmPassword)?.value;
        if (passwords != confirmPasswords) {
            return null
        }
        return {passwordMisMatchError: true}
    }
}


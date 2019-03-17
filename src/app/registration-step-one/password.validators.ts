import { AbstractControl } from '@angular/forms';

export class PasswordValidators {

    static isPasswordTheSame(control: AbstractControl) {
        const password = control.get('password');
        const checkPassword = control.get('password-check');

        if (password.value !== checkPassword.value) {
            return { isPasswordTheSame: true };
        }
        return null;
    }
}

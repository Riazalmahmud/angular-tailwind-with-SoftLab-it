import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordStrengthValidator } from 'src/app/shared/validators/custom.validation';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  passwordTextType!: boolean;
  show = false;
  password: any;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router) {}

  ngOnInit(): void {
    this.password = 'password';
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        null,
        {
          validators: [Validators.required, Validators.pattern(PasswordStrengthValidator)],
        },
      ],
    });
  }

  get email() {
    return this.form.get('email');
  }
  get formPassword() {
    return this.form.get('password');
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
   
    console.log(this.form.value);
    // stop here if form is invalid
    if (this.form.invalid) {

      for (const control of Object.keys(this.form.controls)) {
        this.form.controls[control].markAsTouched();
      }
      alert('Please enter a valid password and username')
      return;
    }
    console.log('correct password');
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}

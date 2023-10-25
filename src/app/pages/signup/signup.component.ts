import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, () => this.validateDomain()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: [() => this.comparePasswords()]
      // validators: [this.test.bind(this)]
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].errors && this.form.controls[controlName].errors![errorName];
  }

  comparePasswords() {
    if(!this.form) return null;

    const { password, confirm } = this.form.getRawValue();
    if (password === confirm) {
      return null;
    } else {
      return {
        match: true
      }
    }
  }

  validateDomain() {
    if(!this.form) return null;

    // const { email } = this.form.getRawValue();
    const email = this.form.controls['email'].value;

    const domain = email.split('@')[1];

    if(domain !== 'iteso.mx') {
      return {
        domain: { required: 'iteso.mx', current: domain }
      };
    }

    return null;

  }

  signup() {
    console.log(this.form);
  }
}

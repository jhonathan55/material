import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  private _fb = inject(FormBuilder)
  hide = true;
  private isValidEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  // Validators.pattern(this.isValidEmail)
  loginForm = this._fb.group({
    email: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', Validators.required]
  })

  onLogin() {
    console.log(this.loginForm.value);
  }
  //valida los input
  isValidField(field: string): string {
    const validatedField = this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

}

import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';
import { UserI } from './user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  private _fb = inject(FormBuilder)
  private _authSvc = inject(AuthService)
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
    const user:UserI={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this._authSvc.login(user).pipe(
      tap((res) => {
        console.log(res);
      })
    ).subscribe();
  }
  //valida los input
  isValidField(field: string): string {
    const validatedField = this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched) ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

}

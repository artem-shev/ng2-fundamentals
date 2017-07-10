import { Component } from '@angular/core'
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  templateUrl: './login.html',
  styles: [`
    .error { color: red; float: right; }
  `],
})
export class LoginComponent {
  isSubmited: boolean;
  isRequired = true;
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  login(event, form) {
    this.isSubmited = true;
    if (form.invalid) {
      event.preventDefault();
      return;
    }
    this.auth.loginUser(form.value.userName, form.value.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
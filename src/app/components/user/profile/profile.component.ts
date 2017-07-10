import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { TOASTR_TOKEN } from '../../../shared/toastr.service'

@Component({
  templateUrl: './profile.html',
  styles: [`
    em { color: red; }
  `],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr,
  ) {}

  ngOnInit() {
    let firstName = new FormControl(
      this.authService.currentUser.firstName,
      [
        Validators.required,
        Validators.pattern('[a-zA-Z].*'),
      ],
    );
    let lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required,
    );

    let formGroup = { firstName, lastName };

    Object.assign(this, formGroup);
    this.profileForm = new FormGroup(formGroup);
  }

  saveProfile(formValue) {
    if (this.profileForm.invalid) return;
    this.authService.updateProfile(formValue);
    this.toastr.success('Profile was updated');
  }

  validateFields(fieldName) {
    return this[fieldName].valid; 
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
import { Injectable } from '@angular/core';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor() {
    this.loginUser('artem', 'asdfasdf');
  }

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      firstName: 'Artem',
      lastName: 'Shev',
      userName,
    };
  }

  isAuthorizated() {
    return !!this.currentUser;
  }

  updateProfile(profileSettings) {
    Object.assign(this.currentUser, profileSettings);
  }
}
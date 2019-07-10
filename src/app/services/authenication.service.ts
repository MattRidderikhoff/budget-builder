import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {
  authenicationState = new BehaviorSubject(false);
  constructor(private storage: Storage, private plt: Platform) {
    // TODO: Add an expired token check here.
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenicationState.next(true);
      }
    });
  }

  login() {
    return this.storage.set(TOKEN_KEY, 'Bearer 12345').then(() => {
      this.authenicationState.next(true);
    });
  }
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenicationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenicationState.value;
  }
}


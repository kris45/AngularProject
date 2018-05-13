import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  isSignedIn = false;

  redirectUrl: string;

  constructor()  { }

  signIn(): Observable<boolean> {
    return of(true)
      .pipe(
        tap(val => this.isSignedIn = true)
    );
  }

  signOut() {
    this.isSignedIn = false;
  }

}

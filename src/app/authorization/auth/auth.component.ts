import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  signIn() {
    this.sub = this.authService.signIn().subscribe(() => {
      if (this.authService.isSignedIn) {

        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigate(['/personalInfo'], navigationExtras);
      }
    });
  }

  signOut() {
    this.authService.signOut();
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };

    this.router.navigate(['/Home'], navigationExtras);
  }
}

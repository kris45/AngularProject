import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  @Input() brandSearch = '';

  personalInfo;

  authForm: FormGroup = new FormGroup({
    'name': new FormControl(),
    'password': new FormControl()
  });

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  authorize() {
    const name = this.authForm.get('name').value;
    const password = this.authForm.get('password').value;
    this.authorizationService.getPersonalInfo(name, password).subscribe(personalData => {
      this.personalInfo = personalData;
      console.log(personalData);
    });
  }

}

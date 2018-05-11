import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient)  { }

  getPersonalInfo(name, password): Observable<any> {
    return this.http.get('/assets/UserInfo.json');
  }

}

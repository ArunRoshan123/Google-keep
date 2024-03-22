import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;

  constructor(private httpservice: HttpService) {}

  register(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    return this.httpservice.postService(
      'https://localhost:44362/api/User/Reg',
      reqData,
      false,
      header
    );
  }

  login(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };

    return this.httpservice.postService(
      'https://localhost:44362/api/User/Log',
      reqData,
      false,
      header
    );
  }

  forget(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/',
      }),
    };
    return this.httpservice.postService(
      'https://localhost:44362/api/User/ForgotPassword?Email=' + reqData.userEmail,
      {},
      false,
      header
    );
  }

  reset(reqData: any, token: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpservice.postServiceReset(
      'https://localhost:44362/api/User/reset',
      reqData,
      true,
      header
    );
  }
}

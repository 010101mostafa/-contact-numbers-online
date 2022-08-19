import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { verifiedUser } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class UerService {

  constructor(private httpClient:HttpClient) { }
  login(username:string,password:string):Observable<verifiedUser>{
    return this.httpClient.post<verifiedUser>("/user/login",{username,password})
  }
}

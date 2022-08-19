import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { Observable } from 'rxjs';

import { verifiedUser } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class UerService {

  constructor(private httpClient:HttpClient) { }
  login(username:String,password:String):Observable<verifiedUser>{
    return this.httpClient.post<verifiedUser>("/user/login",{username,password})
  }
}

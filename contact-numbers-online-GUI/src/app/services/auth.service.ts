import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isauth = new BehaviorSubject<boolean>(false);
  constructor() { }

  setAuthState(state: boolean) {
    this._isauth.next(state);
  }
  isauth: Observable<boolean> = this._isauth.asObservable();
  token:String|null="";
  authenticate() {
    this.token = localStorage.getItem("token")
    if (this.token == null || this.token.match(/^ *$/))
      this.setAuthState(false);
    else
       this.setAuthState(true);
  }
}

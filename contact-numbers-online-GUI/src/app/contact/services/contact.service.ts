import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Contact } from '../../types';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private httpClient: HttpClient) { }
  get(index: number, limit: number, obj?: object): Observable<Contact[]> {
    if (obj == undefined)
      obj = {}
    return this.httpClient.post<Contact[]>(`/contact/${index}/${limit}`, obj);
  }
  add(newContact: Contact): Observable<void> {
    return this.httpClient.post<void>('/contact/', newContact);
  }
  delete(Id: string): Observable<void> {
    return this.httpClient.delete<void>(`/contact/${Id}`);
  }
  update(newContact: Contact): Observable<void> {
    return this.httpClient.put<void>('/contact/', newContact);
  }
  count(obj?: object): Observable<{count:number}> {
    if (obj == undefined)
      obj = {} 
    return this.httpClient.post<{count:number}>(`/contact/count`, obj);
  }
}

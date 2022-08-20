import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Contact } from '../../types';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private httpClient: HttpClient) { }
  get(lId: string, limit: number, obj?: object): Observable<Contact[]> {
    if (obj == null) {
      return this.httpClient.get<Contact[]>(`/contact/${lId}/${limit}`);
    } else {
      return this.httpClient.post<Contact[]>(`/contact/${lId}/${limit}`, obj);
    }
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
}

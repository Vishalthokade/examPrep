import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private httpClient : HttpClient
  ) { }
    url ="http://localhost:3000/contact/getAllContacts";
  getContacts() {
     return this.httpClient.get(this.url)
    }
}
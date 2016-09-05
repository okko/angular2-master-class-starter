import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

const API_ENDPOINT = 'http://localhost:4201/api/contacts';

@Injectable()
export class ContactsService {
  constructor(private http: Http) {
  }

  getContacts() {
    return this.http.get(API_ENDPOINT)
      .map(res => res.json())
      .map(data => data.items )
    ;
  }

  getContact(id: number | string) {
    return this.http.get(API_ENDPOINT + '/' + id)
      .map(res => res.json())
      .map(data => data.item); //  this.getContacts().find(contact => contact.id == id);
  }

  updateContact(contact: Contact) {
    let url = API_ENDPOINT + '/' + `${contact.id}`;
    return this.http.put(url, contact);
  }

}

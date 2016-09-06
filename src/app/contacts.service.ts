import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';


const API_ENDPOINT = 'http://localhost:4201/api/contacts';
const API_ENDPOINT_SEARCH = 'http://localhost:4201/api/search';


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

  search(terms: Observable<string>, debounceMs = 400) {
    return terms.debounceTime(debounceMs).distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
      .merge(this.getContacts())
    ;
  }

  rawSearch(term: string) {
    // todo construct URL properly
    return this.http.get(API_ENDPOINT_SEARCH + `?text=${term}`)
      .map(res => res.json())
      .map(data => data.items)
    ;
  }

}

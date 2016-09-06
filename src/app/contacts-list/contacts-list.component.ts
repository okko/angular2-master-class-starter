import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }

  private searchInput(term: string) {
    this.contacts = this.contactsService.search(term);
  }

  ngOnInit() {
    this.terms$.debounceTime(400)
               .distinctUntilChanged()
               .subscribe(term => this.searchInput(term));
  }

}

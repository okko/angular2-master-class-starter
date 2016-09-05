import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }

  ngOnInit() {
    // this.contactsService.getContacts().subscribe();
  }

}

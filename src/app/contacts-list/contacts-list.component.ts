import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Rx';;

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Array<Contact>;

  constructor(private contactsService: ContactsService) {
    contactsService.getContacts()
    .subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    // this.contactsService.getContacts().subscribe();
  }

}

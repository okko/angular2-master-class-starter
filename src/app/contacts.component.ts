import { Component } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';
import { Contact } from './models/contact';

import { CONTACT_DATA } from './data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})

export class ContactsAppComponent {
  private contacts: Array<Contact> = CONTACT_DATA;

}

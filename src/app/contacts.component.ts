import { Component } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';
import { Contact } from './models/contact';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  private contact: Contact;

  constructor() {
    this.contact = {
      id: 7,
      name: 'Diana Ellis',
      email: '',
      phone: '',
      birthday: '',
      website: '',
      image: '/assets/images/7.jpg',
      address: {
        street: '6554 park lane',
        zip: '43378',
        city: 'Rush',
        country: 'United States'
      }
    };
  }
}

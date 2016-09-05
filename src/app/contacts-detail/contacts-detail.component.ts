import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  private contact: Contact;

  // Create a contact property in ContactsDetailComponent and use ActivatedRoute and ContactsService to retrieve the requested contact

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {
    this.contact = this.contactsService.getContact(this.route.snapshot.params['id']);
  }

}

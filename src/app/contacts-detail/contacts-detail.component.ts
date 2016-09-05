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
  private contact: Contact;// Contact

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
    .subscribe(contact => this.contact = contact);
  }

}

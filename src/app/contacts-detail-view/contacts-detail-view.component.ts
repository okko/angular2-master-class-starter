import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;

  constructor(private activatedRoute: ActivatedRoute, private contactsService: ContactsService, private router: Router, private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.contactsService.getContact(this.activatedRoute.snapshot.params['id'])
    .subscribe(contact => {
      this.contact = contact;
      this.eventBusService.emit('appTitleChange', contact.name);
    });
  }

  navigateToEditor() {
    this.router.navigate(['/contact', this.contact.id, 'edit']);
  }

  navigateToList() {
    this.router.navigate(['/']);
  }

}

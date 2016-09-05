import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Response } from '@angular/http';


@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})

export class ContactsEditorComponent implements OnInit {
  // private contact: any;// Contact
  private contact: Contact = <Contact>{ address: {}};

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) {
  }

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
    .subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact).subscribe((response: Response) => {
      this.router.navigate(['/contact', contact.id]);
    });
  }
}

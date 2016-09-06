import { Component, OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { ContactsHeaderComponent } from './contacts-header';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})

export class ContactsAppComponent implements OnInit {
  title: string;

  constructor(private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.eventBusService.observe('appTitleChange').subscribe(title => this.title = title);
  }
}

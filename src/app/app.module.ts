import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactsAppRoutes } from './app.routes';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent
  ],
  providers: [ContactsService],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}

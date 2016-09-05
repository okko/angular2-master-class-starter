import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { Contact } from './models/contact';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent],
  providers: [ContactsService],
  imports: [BrowserModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}

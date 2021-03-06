import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';

import { ContactsAppRoutes } from './app.routes';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { Contact } from './models/contact';

import { ContactsService } from './contacts.service';
import { EventBusArgs } from './models/event-bus-args';
import { EventBusService } from './event-bus.service';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    ContactsDashboardComponent,
    AboutComponent
  ],
  providers: [ContactsService, EventBusService],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}

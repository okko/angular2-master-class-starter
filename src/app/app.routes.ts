import { ContactsListComponent } from './contacts-list';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorComponent } from './contacts-editor';

export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailViewComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent }
];

import { ContactsListComponent } from './contacts-list';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorComponent } from './contacts-editor';
import { ContactsDashboardComponent } from './contacts-dashboard';
import { AboutComponent } from './about';

export const ContactsAppRoutes = [
    {
      path: '',
      component: ContactsDashboardComponent,
      children: [
        { path: '', redirectTo: 'contact/0' },
        { path: 'contact/:id', component: ContactsDetailViewComponent },
        { path: 'contact/:id/edit', component: ContactsEditorComponent }
      ]
  },
  { path: 'about', component: AboutComponent }

];

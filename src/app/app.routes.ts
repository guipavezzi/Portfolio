import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CompaniesWorkedComponent } from './components/companies-worked/companies-worked.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'companies-worked', component: CompaniesWorkedComponent},
    {path: 'contacts', component: ContactsComponent},
];

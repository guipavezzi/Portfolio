import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CompaniesWorkedComponent } from './components/companies-worked/companies-worked.component';


export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'companies-worked', component: CompaniesWorkedComponent},
];

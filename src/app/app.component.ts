import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { CompaniesWorkedComponent } from './components/companies-worked/companies-worked.component';
import { SidebarService } from './components/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, IntroComponent, AboutComponent, CompaniesWorkedComponent, ProjectsComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSidebarOpen = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarStatus$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
    });
  }

  title = 'portfolio';
}

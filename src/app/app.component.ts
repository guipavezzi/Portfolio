import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { CompaniesWorkedComponent } from './components/companies-worked/companies-worked.component';
import { SidebarService } from './components/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { FooterComponent } from "./components/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';
import { LanguageComponent } from "./components/language/language.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, IntroComponent, AboutComponent, CompaniesWorkedComponent, ProjectsComponent, TechnologiesComponent, FooterComponent, LanguageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarOpen = false;

  constructor(private sidebarService: SidebarService, private translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');
    
    this.sidebarService.sidebarStatus$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
    });

  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  title = 'portfolio';
}

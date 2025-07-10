import { Component, Host } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {
  constructor(@Host() private app: AppComponent) {}

  changeLang(lang: string) {
    this.app.changeLang(lang);
  }
}

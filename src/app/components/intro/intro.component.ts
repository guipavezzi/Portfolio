import { Component } from '@angular/core';
import { addIconSelectors } from '@iconify/tailwind'
import { TranslateModule } from '@ngx-translate/core';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TranslateModule, CdkMenuModule, ClipboardModule],
  providers: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  email = 'gui.pavezzi07@gmail.com';

  constructor(private clipboard: Clipboard) { }

  copyEmail() {
    this.clipboard.copy(this.email);
  }
}

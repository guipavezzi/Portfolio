import { Component } from '@angular/core';
import { addIconSelectors } from '@iconify/tailwind'
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TranslateModule],
  providers: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
}

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

  downloadCurriculo(): void{
    const file = '../../../assets/Guilherme_Pavezzi_Curriculo.pdf'
    const link = document.createElement('a');
    link.href = file;
    link.download = 'curriculo_guilherme.pdf';
    link.click();
  }
}

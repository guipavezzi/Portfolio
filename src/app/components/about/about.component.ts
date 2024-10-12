import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  about: string = 'Meu nome é Guilherme Fernandes Pavezi e sou um desenvolvedor de software full stack, tenho um profundo amor por tecnologia e pela arte de '+ 
  'construir soluções digitais. Com uma sólida formação em desenvolvimento de software em C# e Angular com uma paixão ' +
    'constante por aprender novas tecnologias, estou sempre em busca de oportunidades para aplicar minhas '+
      'habilidades em projetos inovadores. Minha experiência abrange em criações e melhorias de APIs e microsserviços ' + 
      'e na criações de telas'
}

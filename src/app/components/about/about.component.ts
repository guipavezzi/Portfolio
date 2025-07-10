import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  about: string = 'Sou um desenvolvedor de software full stack com paixão por tecnologia e pela arte ' + 
  'de criar soluções digitais. Estudo desenvolvimento de software desde 2020 e, desde então, venho aprimorando '+
  'minhas habilidades em C#, Angular e outras tecnologias. Tenho experiência na criação e melhoria de APIs, '+
  'microsserviços e interfaces web, sempre buscando aplicar boas práticas e entregar soluções funcionais. ' +
  'Estou em constante aprendizado e motivado por desafios que me permitam evoluir e contribuir para projetos ' +
  'inovadores.'
}

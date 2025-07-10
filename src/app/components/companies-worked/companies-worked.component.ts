import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-worked',
  standalone: true,
  imports: [],
  templateUrl: './companies-worked.component.html',
  styleUrl: './companies-worked.component.scss'
})
export class CompaniesWorkedComponent {


  onlineApplications: string = 
  "Atuei como Estagiário e, posteriormente, como Desenvolvedor Júnior na Online Applications, contribuindo para o desenvolvimento de soluções na área de EDI (Electronic Data Interchange), com foco no sistema da Azul Linhas Aéreas. Desenvolvi microsserviços em C#, participando de todo o fluxo de integração, desde o recebimento e processamento de notas fiscais — com leitura de arquivos nos formatos NOTFIS, JSON e XML — até o envio de arquivos EDI como OCOREN, CONEMB e DOCCOB para os parceiros comerciais da Azul. Também tive envolvimento na análise e correção de falhas, implementação de melhorias e na garantia da qualidade dos dados transmitidos entre os sistemas."

  dnaxisInformatica: string = 
  "Atuei como Desenvolvedor Júnior na Dnaxis, na equipe responsável por sistemas tintométricos, com foco no desenvolvimento e manutenção de APIs e interfaces web. Contribuí ativamente na criação e correção de APIs em C# e ASP.NET MVC, implementando novas funcionalidades para atender às necessidades de clientes em novos projetos. Além disso, participei do desenvolvimento de interfaces com Angular, assegurando uma comunicação eficiente entre front-end e back-end. Trabalhei em um ambiente colaborativo, buscando sempre a melhoria contínua do código, aderência a boas práticas de desenvolvimento e entregas com qualidade e alinhadas aos prazos estabelecidos."
}

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
  "Estagiário e Desenvolvedor Junior C# na Online Applications na área do EDI desenvolvendo microsserviços. " +
  "Desenvolvia desde o recebimento da nota fiscal fazendo a leitura de NOTFIS, JSON E XML até o envio de " +
  "Arquivos EDI's para os clientes da Azul Linhas Aéreas como OCOREN, CONEMB, DOCCOB."

  dnaxisInformatica: string = 
  "Desenvolvedor Junior C# e Angular na Dnaxis na área de tintométricos desenvolvendo e corrigindo API's. " +
  "Desenvolvia e corrigia API's do sistema e no desenvolvimento de novos projetos para os novos clientes " + 
  "em MVC "

}

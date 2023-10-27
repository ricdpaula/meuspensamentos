import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { Router } from '@angular/router';
import { PensamentosService } from '../pensamentos.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit nec nibh consequat varius a nec neque. In vel maximus metus. Suspendisse et nisl mi. Fusce non volutpat mi. Praesent tristique elementum nulla, id imperdiet sapien sagittis quis. Sed id dolor et est aliquam lacinia. ',
    autoria: 'Ricardo de Paula Silva',
    modelo: 'modelo1'
  }

  constructor(private router: Router, private service: PensamentosService) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert('Pensamento criado com sucesso!')
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listagem-pensamentos'])
    })
  }
  cancelar(){
    alert('Pensamento cancelado!')
    this.router.navigate(['/listagem-pensamentos'])
  }

}

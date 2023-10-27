import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentosService } from '../pensamentos.service';

@Component({
  selector: 'app-listagem-pensamentos',
  templateUrl: './listagem-pensamentos.component.html',
  styleUrls: ['./listagem-pensamentos.component.css']
})
export class ListagemPensamentosComponent implements OnInit {

  listarPensamentos: Pensamento[] = []

  constructor(private service: PensamentosService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pensamentosAPI)=>{
      this.listarPensamentos = pensamentosAPI
    })
  }

  excluirPensamento(){
    alert ('Pensamento deletado com sucesso!')
  }
  editarPensamento(){
    alert ('Redirecionando para a edição...')
  }

}

import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentosService } from '../pensamentos.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PensamentosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((idRecuperado)=>{
      this.pensamento = idRecuperado
    })
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(()=>{
      this.router.navigate(['./listagem-pensamentos'])
    })
  }
  cancelar(){
    alert('cancelado')
  }

}

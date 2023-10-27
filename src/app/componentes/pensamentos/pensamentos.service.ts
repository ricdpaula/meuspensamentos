import { Injectable } from '@angular/core';
import { Pensamento } from './pensamentos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }
  criar(pensamento: Pensamento): Observable<Pensamento[]>{
    return this.http.post<Pensamento[]>(this.API, pensamento)
  }
  excluir(id: Number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }
  buscarPorId(id: Number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

}

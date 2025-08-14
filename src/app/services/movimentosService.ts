import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovimentoManual } from '../model/movimento-manual';
import { Produto } from '../model/produto';

@Injectable({ providedIn: 'root' })
export class MovimentosService {

  private apiUrl = 'https://localhost:7138/api/Movimento'; 
  
  constructor(private http: HttpClient) {}

  listar(): Observable<MovimentoManual[]> {
    return this.http.get<MovimentoManual[]>(this.apiUrl);
  }

  salvar(movimento: MovimentoManual): Observable<any> {
    return this.http.post(this.apiUrl, movimento);
  }
  
  listarProdutos(): Observable<any[]> {
    return this.http.get<any[]>('/api/produtos');
  }
  
  listarCosifs(codigoProduto: string): Observable<{ data: Produto; message?: string }> {
    const url = `${this.apiUrl}/BuscarVenda/${codigoProduto}`;
    return this.http.get<{ data: Produto; message?: string }>(url);
  }
  
}
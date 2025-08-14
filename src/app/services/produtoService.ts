import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { ApiResponse } from '../model/api-response';

@Injectable({ providedIn: 'root' })
export class ProdutoService {

  private apiUrl = 'https://localhost:7138/api/Produto'; 
  
  constructor(private http: HttpClient) {}

  carregarProdutos(): Observable<ApiResponse<Produto[]>> {
    return this.http.get<ApiResponse<Produto[]>>(`${this.apiUrl}/CarregarProdutos`);
 }
  
}
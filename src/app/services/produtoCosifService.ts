import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoCosif } from '../model/produto-cosif';
import { ApiResponse } from '../model/api-response';

@Injectable({ providedIn: 'root' })
export class ProdutoCosifService {

  private apiUrl = 'https://localhost:7138/api/ ProdutoCosif'; 
  
  constructor(private http: HttpClient) {}

  carregarProdutosCosifs(codigoProduto: string): Observable<ApiResponse<ProdutoCosif[]>> {
    return this.http.get<ApiResponse<ProdutoCosif[]>>(`${this.apiUrl}/CarregarProdutoCosif`);
  }
 
}
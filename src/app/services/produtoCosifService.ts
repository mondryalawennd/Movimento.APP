import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoCosif } from '../model/produto-cosif';
import { ApiResponse } from '../model/api-response';

@Injectable({ providedIn: 'root' })
export class ProdutoCosifService {

  private apiUrl = 'https://localhost:7138/api/ProdutoCosif'; 
  
  constructor(private http: HttpClient) {}

  carregarProdutosCosifs(codigoProduto: string): Observable<ProdutoCosif[]> {
    const params = new HttpParams().set('codigoProduto', codigoProduto);
  
    return this.http.get<ProdutoCosif[]>(
      `${this.apiUrl}/CarregarProdutoCosif`, { params }  );
  }
  
}
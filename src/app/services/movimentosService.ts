import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovimentoManual } from '../model/movimento-manual';
import { Produto } from '../model/produto';

@Injectable({ providedIn: 'root' })
export class MovimentosService {

  private apiUrl = 'https://localhost:7138/api/Movimento'; 
  
  constructor(private http: HttpClient) {}


  carregarMovimentos(): Observable<MovimentoManual[]> {
    return this.http.get<MovimentoManual[]>(`${this.apiUrl}/ConsultarMovimentos`);
  }

  salvarMovimento(movimento: MovimentoManual): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/InserirMovimento`, movimento);
  }
  
 
  
}
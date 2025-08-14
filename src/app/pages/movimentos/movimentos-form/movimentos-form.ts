import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, NgModule, OnInit } from '@angular/core';
import { MovimentoManual } from '../../../model/movimento-manual';
import { Produto } from '../../../model/produto';
import { ProdutoCosif } from '../../../model/produto-cosif';
import { MovimentosService } from '../../../services/movimentosService';
import { ProdutoCosifService } from '../../../services/produtoCosifService';
import { ProdutoService } from '../../../services/produtoService';
import { FormsModule, NgForm  } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-movimentos-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './movimentos-form.html',
  styleUrls: ['./movimentos-form.scss']
})
export class MovimentosForm implements OnInit{
  constructor(private cdRef: ChangeDetectorRef, private service: MovimentosService, private produtoCosifService: ProdutoCosifService, private produtoService: ProdutoService) {}

  camposHabilitados = false;
  movimento!: MovimentoManual;
 
  produtos: Produto[] = [];
  cosifs: ProdutoCosif[] = [];

  ngOnInit(): void {
    this.carregarProdutos();

  }
  
  carregarProdutos(): void {
    this.produtoService.carregarProdutos().subscribe({
      next: (response) => {
        this.produtos = response.data;
          this.cdRef.detectChanges(); // garante atualização
      },
      error: (err) => {
        console.error('Erro ao buscar produtos:', err);
      }
    });
  }


  carregarCosifsPorProduto(produtoId: string): void {
    this.cosifs = [];
    this.movimento.cosifId = '';

    if (!produtoId) {
      return; 
    }
  
    this.produtoCosifService.carregarProdutosCosifs(produtoId).subscribe({
      next: (response) => {
        this.cosifs = response.data;
        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao buscar produtos cosifs:', err);
      }
    });
  }

  habilitarCampos() {
    this.camposHabilitados = true;
  }
  

}

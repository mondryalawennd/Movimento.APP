import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovimentoManual } from '../../model/movimento-manual';
import { Produto } from '../../model/produto';
import { ProdutoCosif } from '../../model/produto-cosif';
import { MovimentosService } from '../../services/movimentosService';
import { ProdutoCosifService } from '../../services/produtoCosifService';
import { ProdutoService } from '../../services/produtoService';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-movimentos',
  standalone:true,
  imports: [FormsModule, CommonModule, NgxMaskDirective],
  providers: [provideNgxMask()], 
  templateUrl: './movimentos.html',
  styleUrl: './movimentos.scss'
})
export class Movimentos implements OnInit {
  constructor(private cdRef: ChangeDetectorRef, private service: MovimentosService, private produtoCosifService: ProdutoCosifService, private produtoService: ProdutoService) {}

  carregando: boolean = true;
  camposHabilitados = false;
  movimento: MovimentoManual = {} as MovimentoManual;
 
  produtos: Produto[] = [];
  cosifs: ProdutoCosif[] = [];
  lstmovimentos: MovimentoManual[] = [];
 
   ngOnInit(): void {
      this.movimento = {          
          codigoProduto: '',
          codigoCosif: '',          
          descricaoMovimento: '',
          dataMovimento: new Date(),
          descricaoProduto: ''
        };

       this.carregarProdutos();
       setTimeout(() => this.loadMovimentos(), 0);
       this.loadMovimentos();
 
     }

     loadMovimentos(): void {
      this.service.carregarMovimentos().subscribe({
        next: (response) => {
          this.lstmovimentos = response;        
          this.cdRef.detectChanges(); // garante atualização da view
          this.carregando = false;
        },
        error: (err) => {
          console.error('Erro ao buscar movimentos:', err);
        }
      });
    }

     carregarProdutos(): void {
      this.produtoService.carregarProdutos().subscribe({
        next: (response) => {
          this.produtos = response;
            this.cdRef.detectChanges(); // garante atualização
        },
        error: (err) => {
          console.error('Erro ao buscar produtos:', err);
        }
      });
    }
    
    carregarCosifsPorProduto(produtoId: string): void {
      this.cosifs = [];
      this.movimento.codigoCosif = '';
  
      if (!produtoId) {
        return; 
      }
    
      this.produtoCosifService.carregarProdutosCosifs(produtoId).subscribe({
        next: (response) => {
          this.cosifs = response;
          this.cdRef.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao buscar produtos cosifs:', err);
        }
      });
    }
  
    habilitarCampos(): void {
      this.camposHabilitados = true;
    }

    limparFormulario(): void {
      this.movimento = {} as MovimentoManual;
    }
    
    salvarMovimento(): void {
      this.service.salvarMovimento(this.movimento).subscribe({
        next: (res) => {
          alert('Movimento inserido com sucesso!');
          this.camposHabilitados = false; // desabilita campos
          this.loadMovimentos();            // atualiza grid
          this.limparFormulario();
        },
        error: (err) => {
          console.error('Erro ao salvar movimento:', err);
          alert('Erro ao salvar movimento!');
        }
      });
    }
  
  }
  
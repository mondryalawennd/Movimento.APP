import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';
import { MovimentoManual } from '../../model/movimento-manual';
import { MovimentosService } from '../../services/movimentosService';
import { MovimentosForm } from './movimentos-form/movimentos-form';
import { MovimentosGrid } from './movimentos-grid/movimentos-grid';


@Component({
  standalone:true,
  selector: 'app-movimentos',
  imports: [FormsModule, MovimentosForm, CommonModule, MovimentosGrid],
  templateUrl: './movimentos.html',
  styleUrl: './movimentos.scss'
})

export class Movimentos implements OnInit {

  constructor(private service: MovimentosService) {}

  movimentos: MovimentoManual[] = [];

  ngOnInit() {
    this.carregar();
  }

  carregar() {
  //  this.service.listar().subscribe(d => this.movimentos = d);
  }

  

}

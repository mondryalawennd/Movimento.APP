import { CommonModule } from '@angular/common';
import { Component, NgModule, Input } from '@angular/core';
import { MovimentoManual } from '../../../model/movimento-manual';

@Component({
  standalone:true,
  selector: 'app-movimentos-grid',
  imports: [CommonModule],
  templateUrl: './movimentos-grid.html',
  styleUrl: './movimentos-grid.scss'
})
export class MovimentosGrid {
  @Input() movimentos: MovimentoManual[] = [];
}

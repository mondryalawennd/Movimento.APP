import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Nav } from './shared/components/nav/nav';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Header, Nav, CommonModule, AppRoutingModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Movimentos Manuais';
}

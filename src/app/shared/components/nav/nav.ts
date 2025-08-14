import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

}

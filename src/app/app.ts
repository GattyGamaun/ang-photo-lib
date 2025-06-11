import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <button [routerLink]="'/'" routerLinkActive="active">Photos</button>
      <button [routerLink]="'/favorites'" routerLinkActive="active">
        Favorites
      </button>
    </nav>
    <router-outlet />
  `,
  styleUrl: './app.css',
})
export class App {}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="wrapper flex mt-1 mb-1">
      <button
        routerLink=""
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        Photos
      </button>
      <button routerLink="/favorites" routerLinkActive="active">
        Favorites
      </button>
    </nav>
    <router-outlet />
  `,
  styles: `
    .wrapper {
      justify-content: space-around;
    }
  `,
})
export class App {}

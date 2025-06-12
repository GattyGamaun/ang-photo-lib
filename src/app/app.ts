import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header test-id="header" class="f-center">
      <nav class="wrapper flex mt-1 mb-1">
        <button
          test-id="photos"
          routerLink=""
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          Photos
        </button>
        <button
          test-id="favorites"
          routerLink="/favorites"
          routerLinkActive="active"
        >
          Favorites
        </button>
      </nav>
    </header>
    <router-outlet />
  `,
  styles: `
    .wrapper {
      justify-content: space-around;
      width: 50%;
    }
  `,
})
export class App {}

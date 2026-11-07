import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  menuOpen = signal(false);

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }
}

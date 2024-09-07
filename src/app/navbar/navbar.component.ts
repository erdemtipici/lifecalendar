import { Component, EventEmitter, Output  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatButtonModule } from '@angular/material/button'; // Import Button Module
import { MatListModule } from '@angular/material/list'; // <-- Import MatListModule


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatSidenavModule, MatButtonModule, MatListModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() menuToggle = new EventEmitter<void>();

  onToggleMenu() {
    this.menuToggle.emit(); // Emit event to toggle sidenav
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  menuList = [
    { link: 'home', text: 'Home', icon: 'fa-home' },
    { link: 'about-us', text: 'About us', icon: 'fa-user' },
    { link: 'services', text: 'Services', icon: 'fa-handshake' },
    { link: 'reviews', text: 'Reviews', icon: 'fa-star' },
    { link: 'contact-us', text: 'Contact us', icon: 'fa-envelope' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}

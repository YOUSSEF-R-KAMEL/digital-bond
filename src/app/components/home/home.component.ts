import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ScrollUpComponent } from '../../shared/scroll-up/scroll-up.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutUsComponent,
    ServicesComponent,
    ReviewsComponent,
    ContactUsComponent,
    FooterComponent,
    ScrollUpComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

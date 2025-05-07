import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  servicesList = [
    { img: 'se_01.png', text: 'BRANDING', amimatioType: 'fade-down-right' },
    { img: 'se_02.png', text: 'SOCIAL MEDIA', amimatioType: 'fade-down' },
    { img: 'se_03.png', text: 'INFLUENCERS MARKETING & Digital PR', amimatioType: 'fade-down-left' },
    { img: 'se_04.png', text: 'VIDEO PRODUCTION', amimatioType: 'fade-right' },
    { img: 'se_05.png', text: 'WEB DEVELOPMENT', amimatioType: 'fade-up' },
    { img: 'se_06.png', text: 'SMS CAMPAIGNS', amimatioType: 'fade-left' },
    { img: 'se_07.png', text: 'FOOD STYLING PHOTOGRAPHY', amimatioType: 'fade-up-right' },
    { img: 'se_08.png', text: 'SEO OPTIMIZATION', amimatioType: 'fade-up' },
    { img: 'se_09.png', text: 'PERFORMANCE MARKETING', amimatioType: 'fade-up-left' }
  ];
}

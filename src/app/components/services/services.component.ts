import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  servicesList = [
    { img: 'se_01.png', text: 'BRANDING' },
    { img: 'se_02.png', text: 'SOCIAL MEDIA' },
    { img: 'se_03.png', text: 'INFLUENCERS MARKETING & Digital PR' },
    { img: 'se_04.png', text: 'VIDEO PRODUCTION' },
    { img: 'se_05.png', text: 'WEB DEVELOPMENT' },
    { img: 'se_06.png', text: 'SMS CAMPAIGNS' },
    { img: 'se_07.png', text: 'FOOD STYLING PHOTOGRAPHY' },
    { img: 'se_08.png', text: 'SEO OPTIMIZATION' },
    { img: 'se_09.png', text: 'PERFORMANCE MARKETING' }
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  boxes = [
    {img: "about_01.png", title: "CREATIVE COMMITMENT", content: "We are a bonded family that mix and match creativity and commitment to help brands go beyond the limit. Bonders are a blend of cheerful, uprising and creative peeps working to deliver outstanding services. We are committed and loyalty runs in the veins; when we are put together our results blow minds"},
    {img: "about_02.png", title: "Vision", content: "To become the top agency offering online marketing solutions, digital sales services, and software development in the MENA business sphere."},
    {img: "about_03.png", title: "Values", content: "Accountability, Honesty, Simplicity & Curiosity."},
  ]
}

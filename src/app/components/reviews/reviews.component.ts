import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  imports: [CarouselModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  customOptions: OwlOptions = {
    loop: true,
    rtl: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    // autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dots: false,
    navSpeed: 1000,
    navText: ['<i class="fa-solid fa-angle-right"></i>', '<i class="fa-solid fa-angle-left"></i>'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  reviews = [
    { img: "person_01.jpg", name: "Isabella Young", job: "Marketing Team Leader", content: "They turned our ideas into reality effortlessly. The team understood our vision and delivered outstanding results beyond our expectations." },
    { img: "person_02.jpg", name: "Ethan Harris", job: "Creative Director", content: "Fantastic experience! They adapted quickly to feedback and provided innovative solutions that perfectly matched our brand’s needs and vision." },
    { img: "person_03.jpg", name: "Olivia Davis", job: "Product Manager", content: "Amazing service! The team provided high-quality work, met all deadlines, and successfully captured our vision throughout the process." },
    { img: "person_04.jpg", name: "Lucas Carter", job: "Lead Developer", content: "An excellent team that handled our project efficiently. Their technical skills and creative solutions were exactly what we needed." },
    { img: "person_01.jpg", name: "Ava Miller", job: "Operations Manager", content: "We were extremely satisfied with the project. The team communicated well and delivered everything as promised and on time." },
    { img: "person_02.jpg", name: "Mason Robinson", job: "UI/UX Designer", content: "Working with them was seamless. They created intuitive and visually appealing designs that met all our user experience goals." },
    { img: "person_03.jpg", name: "Sophia Wilson", job: "Marketing Specialist", content: "Their dedication and creativity were unmatched. They understood our needs and crafted a perfect solution that aligned with our objectives." },
    { img: "person_04.jpg", name: "Liam Johnson", job: "Sales Manager", content: "The team provided great solutions and turned our complex ideas into clear, actionable results that helped us achieve our goals." }
  ];
}

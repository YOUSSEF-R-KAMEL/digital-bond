import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = ''
  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }
}

import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousl',
  templateUrl: './carousl.component.html',
  styleUrls: ['./carousl.component.css']
})
export class CarouslComponent {

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    animateIn:true,
    animateOut:true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust if needed
    autoplayHoverPause: true,
    smartSpeed: 400, // Adjust for smoother transitions
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };


  isRTL = false; // Set this based on your language preference

  constructor() {
    // Example logic to set RTL based on language
    this.isRTL = this.checkIfRTL(); // Implement this method to detect RTL language
  }

  checkIfRTL(): boolean {
    // Implement logic to determine if the current language is RTL
    return document.documentElement.getAttribute('dir') === 'rtl';
  }

  // ngAfterViewInit(): void {
  //   const carouselElement = document.querySelector('#carouselExampleControls') as HTMLElement;
  //   if (carouselElement) {
  //     const carousel = new Carousel(carouselElement, {
  //       interval: 3000 // Set interval to 5000ms (5 seconds)
  //     });
  //   }
  // }
}
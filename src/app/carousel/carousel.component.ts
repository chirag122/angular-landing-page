import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  checked = true;
  @ViewChild('slide1') slide1!: ElementRef<HTMLLabelElement>;
  @ViewChild('slide2') slide2!: ElementRef<HTMLLabelElement>;
  @ViewChild('slide3') slide3!: ElementRef<HTMLLabelElement>;
  @ViewChild('slide4') slide4!: ElementRef<HTMLLabelElement>;
  @ViewChild('slide5') slide5!: ElementRef<HTMLLabelElement>;

  constructor() {
    let timeout = 6000;
    let activeSlide = 'slide1';
    setInterval(() => {
      console.log(activeSlide)
      if (activeSlide == 'slide1') {
        this.slide2.nativeElement.click();
        activeSlide = 'slide2';
        console.log('Run 1')
      }
      else if (activeSlide == 'slide2') {
        this.slide3.nativeElement.click();
        activeSlide = 'slide3';
        console.log('Run 2')
      }
      else if (activeSlide == 'slide3') {
        this.slide4.nativeElement.click();
        activeSlide = 'slide4';
        console.log('Run 3')
      }
      else if (activeSlide == 'slide4') {
        this.slide5.nativeElement.click();
        activeSlide = 'slide5';
        console.log('Run 4')
      }
      else {
        this.slide1.nativeElement.click();
        activeSlide = 'slide1';
        console.log('Run 5')
      }
    }, timeout);
  }

  ngOnInit(): void {
  }

}

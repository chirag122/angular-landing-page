import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-project',
  templateUrl: './our-project.component.html',
  styleUrls: ['./our-project.component.scss']
})
export class OurProjectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}

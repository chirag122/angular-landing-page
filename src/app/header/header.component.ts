import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  switchmenu:boolean = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(window.innerWidth < 997){
        this.switchmenu = false;
      } else {
        this.switchmenu = true;
      }
    },500);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  goTo(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

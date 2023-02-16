import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void { }
  setDarkSIde() {
    let back = document.getElementById("mainBack") as HTMLElement;
    let text = document.getElementById("textChange") as HTMLElement;
    let btn = document.getElementById("btn") as HTMLElement;
    back.style.opacity = '0';
    setTimeout(() => {
      back.style.backgroundImage = 'url(https://i.imgur.com/BvPEi5a.jpg)'
      text.innerHTML = "An horrendous adventure";
      setTimeout(() => {
        btn.style.display = 'none';
        back.style.opacity = '';
        setTimeout(() => {
          this.router.navigate(['/lettySnake'])
        }, 2000);
      }, 500);
    }, 700);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  snakeLogo: string = 'https://i.imgur.com/J6NvUqj.png';
  constructor(
    private router: NavController
  ) { }
  ngOnInit(): void { }
  setDarkSIde() {
    let back = document.getElementById("mainBack") as HTMLElement;
    let text = document.getElementById("textChange") as HTMLElement;
    let btn = document.getElementById("btn") as HTMLElement;
    back.style.opacity = '0';
    setTimeout(() => {
      this.snakeLogo = 'https://i.imgur.com/Tp3uDes.png';
      back.style.backgroundImage = 'url(https://i.imgur.com/BvPEi5a.jpg)'
      text.innerHTML = "An horrendous adventure";
      setTimeout(() => {
        btn.style.display = 'none';
        back.style.opacity = '';
        setTimeout(() => {
          // this.router.navigate(['lettySnake'])
          this.router.navigateForward('/lettySnake', {
            // animation: '+-transition',
            // animationDirection: 'back',
            replaceUrl: true // this line will replace the current page with new page
          });
        }, 2000);
      }, 500);
    }, 700);
  }

}

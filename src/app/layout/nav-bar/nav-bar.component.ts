import { Component, OnInit } from '@angular/core';
import { setRootAriaHidden } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  about: boolean = false;
  goTo(section) {
    if (section != 'about') {
      if (!this.about)
        document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' });

      else {
        this.animateHide()
        setTimeout(() => {
          document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' });
          this.about = false;
        }, 700);

      }
    } else {
      this.about = true;
      this.animateShow()
    }
  }
  animateShow() {
    let sCont = document.getElementById('sCont') as HTMLElement;
    let fCont = document.getElementById('fCont') as HTMLElement;
    sCont.style.transform = 'translateX(100vw)';
    setTimeout(() => {
      fCont.style.transform = 'translateX(-100vw)';
      setTimeout(() => {
        fCont.style.display = 'none'
        sCont.style.display = 'flex'
        setTimeout(() => {

          sCont.style.transform = 'translateX(0)';
        }, 200);
      }, 200);
    }, 200);
  }
  animateHide() {
    let sCont = document.getElementById('sCont') as HTMLElement;
    let fCont = document.getElementById('fCont') as HTMLElement;
    if (fCont) {
      sCont.style.transform = 'translateX(100vw)';
      setTimeout(() => {
        fCont.style.transform = 'translateX(-100vw)';
        setTimeout(() => {
          sCont.style.display = 'none'
          fCont.style.display = 'flex'
          setTimeout(() => {

            fCont.style.transform = 'translateX(0)';


          }, 100);
        }, 100);
      }, 100);
    }
  }
}

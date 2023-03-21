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
    if (section != 'sCont' && section != 'tCont') {
      if (!this.about)
        document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' });

      else {
        this.animateHide(this.idSect, 'fCont')
        setTimeout(() => {
          document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center' });
          this.about = false;
        }, 700);
        // this.idSect = 'fCont'
      }
      this.idSect = 'fCont'
    } else {
      this.about = true;
      // this.idSect = section
      this.animateShow(section)
      this.idSect = section
    }
  }
  idSect = 'fCont'
  animateShow(sec) {
    if (this.idSect == 'sCont' && sec == 'tCont')
      return (this.animateHide('sCont', 'tCont'))
    let sCont = document.getElementById(sec) as HTMLElement;
    let cont = document.getElementById(this.idSect) as HTMLElement;
    sCont.style.transform = 'translateX(100vw)';
    setTimeout(() => {
      cont.style.transform = 'translateX(-100vw)';
      setTimeout(() => {
        cont.style.display = 'none'
        sCont.style.display = 'flex'
        setTimeout(() => {

          sCont.style.transform = 'translateX(0)';

        }, 200);
      }, 200);
    }, 200);
  }
  animateHide(sec, f) {
    if (sec == '' && f == '') { }
    let sCont = document.getElementById(sec) as HTMLElement;
    let fCont = document.getElementById(f) as HTMLElement;
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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-render',
  templateUrl: './pdf-render.component.html',
  styleUrls: ['./pdf-render.component.scss'],
})
export class PdfRenderComponent implements OnInit {
  @Input() pdf: string;
  @Input() src: string;
  modalPdfCont: string;
  modalPdf: string;

  constructor() { }

  ngOnInit() {
    this.modalPdfCont = this.pdf + 'modalCont';
    this.modalPdf = this.pdf + 'modalPdf';

  }
  abrirPdf() {
    let back = document.getElementById(this.modalPdfCont) as HTMLElement;
    let modal = document.getElementById(this.modalPdf) as HTMLElement;
    back.style.display = 'flex';

    this.animateShow(modal)
  }
  animateShow(element: HTMLElement) {

    element.style.display = 'block';

    element.style.transform = 'scaleY(.2) scaleX(0)';
    setTimeout(() => {
      element.style.transform = 'scaleY(.2) scaleX(1)';
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 500);
    }, 400);
  }
  zom: any = 1;
  zoom() {
    this.zom = this.zom + .5
  }
  mooz() {
    if (this.zom > 0)
      this.zom = this.zom - .5
  }
  closeModalPdf() {
    let back = document.getElementById(this.modalPdfCont) as HTMLElement;
    let modal = document.getElementById(this.modalPdf) as HTMLElement;
    this.animateRemove(modal)
    setTimeout(() => {
      back.style.display = 'none';
    }, 700);
  }
  animateRemove(element: HTMLElement) {
    element.style.transform = 'scaleX(.2)';
    setTimeout(() => {
      element.style.transform = 'scaleY(0)';
      setTimeout(() => {
        element.style.display = 'none';
      }, 500);
    }, 400);
  }
}

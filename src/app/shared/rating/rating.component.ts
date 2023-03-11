import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() IdR: string;
  @Input() title: string;
  @Output() puntuacion = new EventEmitter<string>();

  idRa0: string
  idRa1: string
  idRa2: string
  idRa3: string
  idRa4: string
  idRa5: string
  emos: string
  constructor() { }

  ngOnInit() {
    this.idRa0 = this.IdR + '-ra0';
    this.idRa1 = this.IdR + '-ra1';
    this.idRa2 = this.IdR + '-ra2';
    this.idRa3 = this.IdR + '-ra3';
    this.idRa4 = this.IdR + '-ra4';
    this.idRa5 = this.IdR + '-ra5';
    this.emos = this.IdR + '-emos'
  }
  radioCheck(id, input) {
    let inp = document.getElementById(input) as HTMLInputElement;
    this.puntuacion.emit(this.IdR + "-" + inp.value);
    let wrap = document.getElementById(this.emos) as HTMLElement;
    if (id == this.idRa1)
      wrap.style.transform = 'translateY(-100px)';
    else if (id == this.idRa2)
      wrap.style.transform = 'translateY(-200px)';
    else if (id == this.idRa3)
      wrap.style.transform = 'translateY(-300px)';
    else if (id == this.idRa4)
      wrap.style.transform = 'translateY(-400px)';
    else
      wrap.style.transform = 'translateY(-500px)';
  }
}

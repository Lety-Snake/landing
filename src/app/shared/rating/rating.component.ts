import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() IdR: string;
  @Input() title: string;

  idRa1: string
  idRa2: string
  idRa3: string
  idRa4: string
  idRa5: string
  constructor() { }

  ngOnInit() {
    this.idRa1 = this.IdR + '-ra1';
    this.idRa2 = this.IdR + '-ra2';
    this.idRa3 = this.IdR + '-ra3';
    this.idRa4 = this.IdR + '-ra4';
    this.idRa5 = this.IdR + '-ra5';
  }

}

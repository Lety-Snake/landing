import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  imgSrc = 'https://th.bing.com/th/id/OIP.QMP71dvZhScaiMLkGDFmDwHaE8?pid=ImgDet&rs=1'

  constructor() { }

  ngOnInit() { }

}

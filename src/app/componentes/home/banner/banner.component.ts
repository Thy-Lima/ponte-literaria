import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  constructor() { }

  public slideOpts = {
    initialSlide: 0,
    speed: 500
  }
  
  ngOnInit() {}

}

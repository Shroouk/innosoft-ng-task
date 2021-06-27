import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  images = [1, 2].map((n) => `../../assets/images/images (${n}).png`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators=true;
  }

  ngOnInit(): void {
  }

}
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
  
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent {
  title = 'ng-carousel-demo';
  
  images = [
    {title: 'منصة الاختبار انوسوفت', short: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',link:'التسجيل في المنصة', src: "../../assets/images/slider1.png"},
    {title: 'منصة الاختبار انوسوفت', short: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',link:'التسجيل في المنصة', src: "../../assets/images/slider1.png"},
    {title: 'منصة الاختبار انوسوفت', short: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.',link:'التسجيل في المنصة', src: "../../assets/images/slider1.png"}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators=true;
  }

}

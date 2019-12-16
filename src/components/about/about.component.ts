import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About';
  backgroundClass: string;
  backgroundStyle: object;
  firstImage: string;
  secondImage: string;

  constructor(private titleService: Title, private imageService: ImageService) {
    this.setTitle(this.title);
   }
  
  ngOnInit() {
    this.initializeComponents();
  }

  initializeComponents() {
    this.backgroundClass = 'paral-about';
    this.backgroundStyle = {'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.imageService.getBannerImage('about') + ')'};
    this.firstImage = this.imageService.getAboutImage('firstImage');
    this.secondImage = this.imageService.getAboutImage('secondImage');
  }

  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
}

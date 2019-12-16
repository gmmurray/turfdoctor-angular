import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  backgroundClass: string;
  backgroundStyle: object;
  jumbotronBtn: boolean;
  jumbtronLeadText: string;
  jumbtronSubtitle: string;
  portfolioCards: object;
  constructor(private titleService: Title, private imageService: ImageService) {
    this.setTitle(this.title);
  }

  public setTitle(pageTitle) {
    this.titleService.setTitle(pageTitle);
  }

  ngOnInit() {
    this.initializeProperties();
  }

  initializeProperties() {
    this.backgroundClass = 'paral-index';
    this.backgroundStyle = { 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.imageService.getBannerImage('home') + ')' };
    this.jumbotronBtn = true;
    this.jumbtronLeadText = 'The perfect prescription for all your outdoor needs';
    this.jumbtronSubtitle = 'Our mission is to make you happy';
    this.portfolioCards = [
      {
        title: 'Residential',
        description: 'We are able to fulfill all of your residential landscaping and lawn needs',
        backgroundImg: this.imageService.getHomeServiceCardImage('residential'),
        filter: "residential"
      },
      {
        title: 'Commercial',
        description: 'We are able to fulfill all of your commercial landscaping and lawn needs',
        backgroundImg: this.imageService.getHomeServiceCardImage('commercial'),
        filter: 'commercial'
      }
    ];
  }
}

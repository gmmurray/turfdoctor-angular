import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title = 'Services';
  backgroundClass: string;
  backgroundStyle: object;
  serviceCards: {}[];
  constructor(private titleService: Title, private imageService: ImageService) {
    this.setTitle(this.title);
   }
  
  ngOnInit() {
    this.initializeProperties();
  }

  initializeProperties() {
    this.backgroundClass = 'paral-services';
    this.backgroundStyle = {'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.imageService.getBannerImage('services') + ')'};
    this.serviceCards = [
      {
        cardImg: this.imageService.getServiceImage('residential'),
        headText: 'Residential Services',
        mainText: 'We can do many residential services including: <ul class="list-group list-group-flush">' +
        '<li class="list-group-item">Residential service example 1</li>' + 
        '<li class="list-group-item">Residential service example 2</li>' + 
        '<li class="list-group-item">Residential service example 3</li></ul>'
      },
      {
        cardImg: this.imageService.getServiceImage('commercial'),
        headText: 'Commercial Services',
        mainText: 'We can do many commercial services including: <ul class="list-group list-group-flush">' +
        '<li class="list-group-item">Commercial service example 1</li>' + 
        '<li class="list-group-item">Commercial service example 2</li>' + 
        '<li class="list-group-item">Commercial service example 3</li></ul>'
      }
    ];
  }

  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
}

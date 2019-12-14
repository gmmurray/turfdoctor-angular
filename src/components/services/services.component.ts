import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title = 'Services';
  background = 'paral-services';
  
  constructor(private titleService: Title) {
    this.setTitle(this.title);
   }
  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
  ngOnInit() {
  }

  serviceCards = [
    {
      cardImg: 'assets/img/services/residential/backyard_stock.jpeg',
      headText: 'Residential Services',
      mainText: 'We can do many residential services including: <ul class="list-group list-group-flush">' +
      '<li class="list-group-item">Residential service example 1</li>' + 
      '<li class="list-group-item">Residential service example 2</li>' + 
      '<li class="list-group-item">Residential service example 3</li></ul>'
    },
    {
      cardImg: 'assets/img/services/commercial/city_stock.jpeg',
      headText: 'Commercial Services',
      mainText: 'We can do many commercial services including: <ul class="list-group list-group-flush">' +
      '<li class="list-group-item">Commercial service example 1</li>' + 
      '<li class="list-group-item">Commercial service example 2</li>' + 
      '<li class="list-group-item">Commercial service example 3</li></ul>'
    }
  ];
}

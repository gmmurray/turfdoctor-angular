import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Email } from 'src/app/EmailModel';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  background = 'paral-index'
  jumbotronBtn = true;
  jumbtronLeadText = 'The perfect prescription for all your outdoor needs';
  jumbtronSubtitle = 'Our mission is to make you happy';
  portfolioCards = [
    {
      title: "Residential", 
      description: "We are able to fulfill all of your residential landscaping and lawn needs", 
      backgroundImg: "assets/img/services/residential/lawnmower_stock.jpg"
    },
    {
      title: "Commercial", 
      description: "We are able to fulfill all of your commercial landscaping and lawn needs", 
      backgroundImg: "assets/img/services/commercial/bulldozer_stock.jpg",
    }
  ];

  model = new Email('', '', '', '', 'Turf Doctor Email Form', '', '');
  submitted = false;
  onSubmit(form: any): void{
    this.http.post<any>('https://mailthis.to/gsoccerm@gmail.com', form);
  }
  //https://mailthis.to/gsoccerm@gmail.com
  constructor(private titleService: Title, private http: HttpClient) {
    this.setTitle(this.title);
   }
  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
  ngOnInit() {
  }

}

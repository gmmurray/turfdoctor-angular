import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio';
  background = "paral-portfolio";
  constructor(private titleService: Title) {
    this.setTitle(this.title);
   }
  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
  ngOnInit() {
  }

}

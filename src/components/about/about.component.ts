import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About';
  background = "paral-about";
  constructor(private titleService: Title) {
    this.setTitle(this.title);
   }
  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
  ngOnInit() {
  }

}

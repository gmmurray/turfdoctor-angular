import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  backgroundClass: string;
  backgroundStyle: object;
  constructor(private titleService: Title, private imageService: ImageService) {
    this.setTitle(this.title);
   }
 
  ngOnInit() {
    this.initializeProperties();
  }

  initializeProperties() {
    this.backgroundClass = 'paral-contact';
    this.backgroundStyle = {'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.imageService.getBannerImage('contact') + ''};
  }

  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
}

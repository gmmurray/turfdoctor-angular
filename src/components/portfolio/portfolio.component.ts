import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GalleryItemComponent } from 'src/components/portfolio/gallery-item/gallery-item.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio';
  background = "paral-portfolio";

  galleryImages : GalleryItemComponent[];
  galleryImagesFilter : GalleryItemComponent[];

  constructor(private titleService: Title) {
    this.setTitle(this.title);
    this.setGalleryImages();
    this.galleryImagesFilter = this.galleryImages;
   }
  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
  ngOnInit() {
  }

  setGalleryImages() {
    this.galleryImages = [
      {
        imageUrl: 'assets/img/gallery/backyard1-stock.jpeg',
        dimensionx: '250',
        dimensiony: '250',
        title: 'Image One',
        description: 'Description One',
        category: 'residential'
      },
      {
        imageUrl: 'assets/img/gallery/flowers-stock.jpeg',
        dimensionx: '250',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'commercial'
      },
      {
        imageUrl: 'assets/img/gallery/heart-stock.jpeg',
        dimensionx: '250',
        dimensiony: '250',
        title: 'Image Three',
        description: 'Description Three',
        category: 'residential'
      },
      {
        imageUrl: 'assets/img/gallery/hills-stock.jpeg',
        dimensionx: '250',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'commercial'
      },
      {
        imageUrl: 'assets/img/gallery/house-stock.jpeg',
        dimensionx: '250',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'residential'
      },
      {
        imageUrl: 'assets/img/gallery/mountains-stock.jpeg',
        dimensionx: '250',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'residential'
      },
    ];
  }

  filter(type){
    var items = [];
    this.galleryImages.forEach(element => {
      if (element.category == type){
        items.push(element);
      }
    });
    this.galleryImagesFilter = items;
  }

  resetGallery() {
    this.galleryImagesFilter = this.galleryImages;
  }
}
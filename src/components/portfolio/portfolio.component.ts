import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GalleryItemComponent } from 'src/components/portfolio/gallery-item/gallery-item.component';
import { ActivatedRoute } from '@angular/router';

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
  currentFilter: string = 'all';
  currentPage: number = 1;

  constructor(private titleService: Title, private route: ActivatedRoute) {
    this.setTitle(this.title);
    
    //this.galleryImagesFilter = this.galleryImages;
   }
  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }
  ngOnInit() {
    this.setGalleryImages();
    this.filter(this.route.snapshot.params.filter);
  }

  setGalleryImages() {
    this.galleryImages = [
      {
        imageUrl: 'assets/img/gallery/backyard1-stock.jpeg',
        dimensionx: '350',
        dimensiony: '250',
        title: 'Image One',
        description: 'Description One',
        category: 'residential'
      },
      {
        imageUrl: 'assets/img/gallery/flowers-stock.jpeg',
        dimensionx: '350',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'commercial'
      },
      {
        imageUrl: 'assets/img/gallery/heart-stock.jpeg',
        dimensionx: '350',
        dimensiony: '250',
        title: 'Image Three',
        description: 'Description Three',
        category: 'residential'
      },
      {
        imageUrl: 'assets/img/gallery/hills-stock.jpeg',
        dimensionx: '350',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'commercial'
      },
      {
        imageUrl: 'assets/img/gallery/house-stock.jpeg',
        dimensionx: '350',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'residential'
      },
      {
        imageUrl: 'assets/img/gallery/mountains-stock.jpeg',
        dimensionx: '350',
        dimensiony: '250',
        title: 'Image Two',
        description: 'Description Two',
        category: 'residential'
      },
    ];
  }

  filter(type){
    if (type == null){
      this.resetGallery();
      return;
    }
    this.currentFilter = type;
    var items = [];
    this.galleryImages.forEach(element => {
      if (element.category == type){
        items.push(element);
      }
    });
    this.galleryImagesFilter = items;
    this.currentPage = 1;
  }

  resetGallery() {
    this.galleryImagesFilter = this.galleryImages;
    this.currentPage = 1;
    this.currentFilter = 'all';
  }
}
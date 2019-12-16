import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GalleryItemComponent } from 'src/components/portfolio/gallery-item/gallery-item.component';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/image.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio';
  backgroundClass: string;
  backgroundStyle: object;
  galleryImages : GalleryItemComponent[];
  galleryImagesFilter : GalleryItemComponent[];
  currentFilter: string = 'all';
  currentPage: number = 1;

  constructor(private titleService: Title, private route: ActivatedRoute, private imageService: ImageService) {
    this.setTitle(this.title);
  }
  
  public setTitle(pageTitle){
    this.titleService.setTitle(pageTitle);
  }

  ngOnInit() {
    this.initializeProperties();
    this.filter(this.route.snapshot.params.filter);
  }

  initializeProperties() {
    this.backgroundClass = 'paral-portfolio';
    this.backgroundStyle = {'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + this.imageService.getBannerImage('portfolio') +')'};
    this.galleryImages = this.imageService.getGalleryImages();
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
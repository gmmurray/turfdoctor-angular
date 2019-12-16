import { Injectable } from '@angular/core';
import { GalleryImages, HomeServiceCardImages, BannerImages, ServiceImages, AboutImages } from './images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getGalleryImages() {
    return GalleryImages;
  }

  getHomeServiceCardImage(key) {
    return HomeServiceCardImages[key];
  }

  getBannerImage(key) {
    return BannerImages[key];
  }

  getServiceImage(key) {
    return ServiceImages[key];
  }

  getAboutImage(key) {
    return AboutImages[key];
  }
}

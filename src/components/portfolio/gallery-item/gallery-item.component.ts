import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {

  @Input() imageUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() category: string;

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit {
  @Input() background: string;
  @Input() homeButton: boolean;
  @Input() leadText: string;
  @Input() subtitle: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() cardImg: string;
  @Input() headText: string;
  @Input() mainText: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {
  @Input() backgroundImg: string;
  @Input() title: string;
  @Input() description: string;
  @Input() filter: string;
  constructor() { }


}

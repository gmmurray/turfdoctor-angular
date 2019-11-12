import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  options: string[] = [
     'Home', 'Services', 'Portfolio', 'About', 'Contact'

  ];
  ref: MDBModalRef;
  constructor() { }

}

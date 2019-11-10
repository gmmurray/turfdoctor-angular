import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  options: string[] = [
     'Home', 'Services', 'Portfolio', 'About', 'Contact'

  ];
  constructor(private location: Location) { }

  ngOnInit() {
  }

}

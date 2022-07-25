import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: String | any;
  @Input() subtitle: String | any;

  constructor() { }

  ngOnInit(): void {
  }

}

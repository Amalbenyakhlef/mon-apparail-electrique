import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css'],
})
export class AppareilComponent implements OnInit {
  /* appareilName: String = 'Machine à laver '; */ //variable for binding
  @Input() appareilName!: String;
  @Input() appareilStatus!: String; //! peut etre de valeur null

  constructor() {}

  ngOnInit(): void {}

  getStatus() {
    return this.appareilStatus;
  }
}

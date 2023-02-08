import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.getData();
  }

  url: string = 'https://api.github.com/users';

  getData() {
    const httpRequestObservable = ajax.get(this.url);
    const observableSub1 = httpRequestObservable.subscribe((userData) => {
      console.log('ObservableSub1: ', userData.response);
    });
  }
}

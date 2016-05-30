import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {

  newsList: Array<any>;

  constructor() {
    this.newsList = [
      { 
        title: 'hello title',
        date: new Date()
      }, {
        title: 'hello title 2',
        date: new Date()
      }
    ];
  }

  getNews() {
    return this.newsList;
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  lsKey: string = 'news';

  constructor() {
    let newsList = [
      {
        title: 'hello title',
        date: new Date(),
        author: 'Yann Lerjen'
      }, {
        title: 'hello title 2',
        date: new Date(),
        author: 'Jacques Chirac'
      }, {
        title: 'Hello world',
        date: new Date(),
        author: 'Bear Grylls'
      }
    ];
    localStorage.setItem(this.lsKey, JSON.stringify(newsList));
  }

  getNews() {
    var newsStr = localStorage.getItem(this.lsKey);
    return JSON.parse(newsStr);
  }

  addNews(news: Object) {
    var newsList = this.getNews();
    newsList.push(news);
    localStorage.setItem(this.lsKey, JSON.stringify(newsList));
  }

}

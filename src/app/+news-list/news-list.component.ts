import { Component, OnInit } from '@angular/core';
import { NewsListItemComponent } from '../news-list-item';

@Component({
  moduleId: module.id,
  selector: 'news-list',
  templateUrl: 'news-list.component.html',
  directives: [NewsListItemComponent],
  styleUrls: ['news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: any = [];
  componentName: string = 'newsList';

  constructor() {
  }

  ngOnInit() {
    this.newsList = [
      {
        title: 'title 1',
        date: new Date()
      }, {
        title: 'title 2',
        date: new Date()
      }
    ];
  }

}

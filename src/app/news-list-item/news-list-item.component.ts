import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'news-list-item',
  inputs: ['item'],
  templateUrl: 'news-list-item.component.html',
  styleUrls: ['news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {
  //@Input () item;
  componentName: string = 'newsList';
  
  constructor() {}

  ngOnInit() {}
}

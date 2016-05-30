import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsListItemComponent } from '../news-list-item';

@Component({
  moduleId: module.id,
  selector: 'news-list',
  templateUrl: 'news-list.component.html',
  providers: [NewsService],
  directives: [NewsListItemComponent],
  styleUrls: ['news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsList: any = [];
  componentName: string = 'newsList';

  constructor(private _newsService: NewsService) {
    this.newsList = _newsService.getNews();
  }

  ngOnInit() {
  }

}

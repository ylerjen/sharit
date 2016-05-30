import { Component } from '@angular/core';
import { NewsListComponent } from './+news-list';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sharit-app',
  templateUrl: 'sharit.component.html',
  styleUrls: ['sharit.component.css'],
  directives: [ROUTER_DIRECTIVES, NewsListComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/news-list', component: NewsListComponent},
  {path: '/', component: NewsListComponent}
])
export class SharitAppComponent {
  title = 'sharit works!';
  componentName = 'Sharit App Component';
}

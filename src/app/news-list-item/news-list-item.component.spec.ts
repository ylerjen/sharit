import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NewsListItemComponent } from './news-list-item.component';

describe('Component: NewsListItem', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [NewsListItemComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([NewsListItemComponent],
      (component: NewsListItemComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NewsListItemComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(NewsListItemComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-news-list-item></app-news-list-item>
  `,
  directives: [NewsListItemComponent]
})
class NewsListItemComponentTestController {
}


import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { NewsService } from './news.service';

describe('News Service', () => {
  beforeEachProviders(() => [NewsService]);

  it('should ...',
      inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));
});

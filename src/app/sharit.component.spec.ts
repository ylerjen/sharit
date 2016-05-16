import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SharitAppComponent } from '../app/sharit.component';

beforeEachProviders(() => [SharitAppComponent]);

describe('App: Sharit', () => {
  it('should create the app',
      inject([SharitAppComponent], (app: SharitAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sharit works!\'',
      inject([SharitAppComponent], (app: SharitAppComponent) => {
    expect(app.title).toEqual('sharit works!');
  }));
});

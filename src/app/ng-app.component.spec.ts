import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgAppAppComponent } from '../app/ng-app.component';

beforeEachProviders(() => [NgAppAppComponent]);

describe('App: NgApp', () => {
  it('should create the app',
      inject([NgAppAppComponent], (app: NgAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-app works!\'',
      inject([NgAppAppComponent], (app: NgAppAppComponent) => {
    expect(app.title).toEqual('ng-app works!');
  }));
});

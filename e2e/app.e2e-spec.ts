import { ReduxAngular2RxJSAndNgrxStorePage } from './app.po';

describe('redux-angular2-rx-jsand-ngrx-store App', () => {
  let page: ReduxAngular2RxJSAndNgrxStorePage;

  beforeEach(() => {
    page = new ReduxAngular2RxJSAndNgrxStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

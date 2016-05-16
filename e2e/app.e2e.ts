import { SharitPage } from './app.po';

describe('sharit App', function() {
  let page: SharitPage;

  beforeEach(() => {
    page = new SharitPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sharit works!');
  });
});

export class SharitPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sharit-app h1')).getText();
  }
}

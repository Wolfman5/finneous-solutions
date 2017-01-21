import { FinneousWebSolutionsPage } from './app.po';

describe('finneous-web-solutions App', function() {
  let page: FinneousWebSolutionsPage;

  beforeEach(() => {
    page = new FinneousWebSolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

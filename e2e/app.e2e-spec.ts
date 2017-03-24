import { KaraPortfolioPage } from './app.po';

describe('kara-portfolio App', () => {
  let page: KaraPortfolioPage;

  beforeEach(() => {
    page = new KaraPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

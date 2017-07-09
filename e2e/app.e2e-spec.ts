import { Ng2FundamentalsPage } from './app.po';

describe('ng2-fundamentals App', () => {
  let page: Ng2FundamentalsPage;

  beforeEach(() => {
    page = new Ng2FundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

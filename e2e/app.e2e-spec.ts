import { CbInitializrUiPage } from './app.po';

describe('cb-initializr-ui App', () => {
  let page: CbInitializrUiPage;

  beforeEach(() => {
    page = new CbInitializrUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

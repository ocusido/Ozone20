import { Ozone2Page } from './app.po';

describe('ozone2 App', function() {
  let page: Ozone2Page;

  beforeEach(() => {
    page = new Ozone2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

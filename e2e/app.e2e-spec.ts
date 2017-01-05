import { LookAtMePage } from './app.po';

describe('look-at-me App', function() {
  let page: LookAtMePage;

  beforeEach(() => {
    page = new LookAtMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

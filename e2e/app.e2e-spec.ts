import { AskMrOtakuWebPage } from './app.po';

describe('ask-mr-otaku-web App', () => {
  let page: AskMrOtakuWebPage;

  beforeEach(() => {
    page = new AskMrOtakuWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

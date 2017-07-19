import { MHECiPage } from './app.po';

describe('mheci App', () => {
  let page: MHECiPage;

  beforeEach(() => {
    page = new MHECiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

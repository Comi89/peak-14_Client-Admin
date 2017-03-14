import { AdminclientPage } from './app.po';

describe('adminclient App', () => {
  let page: AdminclientPage;

  beforeEach(() => {
    page = new AdminclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

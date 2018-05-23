import { AppPage } from './app.po';

describe('mosterei-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display start page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mosterei Bobingen');
  });
});

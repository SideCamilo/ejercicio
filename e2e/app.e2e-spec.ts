import { EjerciciologinPage } from './app.po';

describe('ejerciciologin App', function() {
  let page: EjerciciologinPage;

  beforeEach(() => {
    page = new EjerciciologinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

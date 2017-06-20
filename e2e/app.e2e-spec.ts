import { ServiceSurveyPage } from './app.po';

describe('service-survey App', () => {
  let page: ServiceSurveyPage;

  beforeEach(() => {
    page = new ServiceSurveyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

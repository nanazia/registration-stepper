'use strict'; // necessary for es6 output in node

import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { AppPage } from './app.po';

const expectedH1 = 'Tour of Heroes';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display RegistrationStepper', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('RegistrationStepper');
  });
});

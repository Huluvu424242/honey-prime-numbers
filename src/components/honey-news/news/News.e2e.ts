import {newE2EPage} from '@stencil/core/testing';
import {E2EElement, E2EPage} from "@stencil/core/testing/puppeteer/puppeteer-declarations";

describe('E2E: honey-prime-numbers satisfy', () => {

  describe('simple check for present at page', () => {

    let page: E2EPage;
    let element: E2EElement;

    beforeEach(async () => {
      page = await newE2EPage({html: `<honey-prime-numbers></honey-prime-numbers>`});
      element = await page.find('honey-prime-numbers');
    });

    it('Add Feed Button is present', async () => {
      const el = await page.find('honey-prime-numbers');
      expect(el).not.toBeNull();
    });
  });
});


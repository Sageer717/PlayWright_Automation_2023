import { Page } from '@playwright/test';

export class YahooHomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.yahoo.com');
  }

  async search(query: string) {
    await this.page.fill('input[id="ybar-sbq"]', query);
    await this.page.press('input[id="ybar-sbq"]', 'Enter');
  }

  async getTitle() {
    return this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async getTopStories() {
    // Example function to retrieve top stories, adjust as per Yahoo's homepage structure
    const topStories = await this.page.$$eval('.YDC-Overlay', (elements) => {
      return elements.map((element) => element.textContent?.trim());
    });
    return topStories;
  }
}


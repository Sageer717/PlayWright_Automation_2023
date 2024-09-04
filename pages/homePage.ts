import { Expect, Locator, Page } from "@playwright/test";

export class homePage {
    private page:Page;

    constructor(page: Page)  {
        this.page = page;

    
    }

    async navigate() {
        await this.page.goto('https://www.google.com');
    }
  
    async search(query: string) {
        await this.page.fill('input[name="q"]', query);
        await this.page.press('input[name="q"]', 'Enter');
      }

    async clickSearch(){
        await this.page.click('name=btnK')
    }
}
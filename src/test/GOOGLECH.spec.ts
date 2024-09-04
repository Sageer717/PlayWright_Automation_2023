import { test, expect } from '@playwright/test';
import { YahooHomePage } from '../../pages/googleHomePage';

test('Yahoo search test', async ({ page }) => {
  const yahooPage = new YahooHomePage(page);
  await yahooPage.open();

  // Perform a search
  await yahooPage.search('Page Object Model');

  // Assertions
  const title = await yahooPage.getTitle();
  expect(title).toBe('Page Object Model - Yahoo Search');

  const url = await yahooPage.getUrl();
  expect(url).toContain('p=Page+Object+Model');

  const topStories = await yahooPage.getTopStories();
  expect(topStories.length).toBeGreaterThan(0);
});


import {test,expect } from '@playwright/test';

test('check title', async({page})=>
{
    await page.goto("https://www.w3schools.com/");
    await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
});


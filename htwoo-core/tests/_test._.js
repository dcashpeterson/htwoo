//@ts-check
const {
  test,
  expect
} = require('@playwright/test');


const files = require('./files.json');

files.forEach(element => {
  test(element.filename, async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:51716/'+element.path);
    expect(await page.screenshot()).toMatchSnapshot(element.filename+'.png');
  });
});
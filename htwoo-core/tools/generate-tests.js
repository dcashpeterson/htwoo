const fs = require('fs');

const files = require('../tests/files.json');

let testContent = `
//@ts-check
const {
  test,
  expect
} = require('@playwright/test');
`;

files.forEach(element => {

    testContent +=
        `

test('${element.filename}', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/${element.path}');
    expect(await page.screenshot()).toMatchSnapshot('${element.filename+'.png'}');
  });

`

});


fs.writeFileSync('./tests/patterns.spec.js', testContent);
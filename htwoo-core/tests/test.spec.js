const {
    test,
    describe = test.describe,
    beforeEach = test.beforeEach,
    beforeAll = test.beforeAll,
    expect
} = require('@playwright/test');
const {
    DefaultPage
} = require('./dev-page.js');

console.log("HJJJJJ");

describe("FIRST TEST", () => {

    test('First Pattern', async ({
        page
    }) => {
        const player = new DefaultPage(page);
        await player.goto("/patterns/atoms-global-primary-colors/atoms-global-primary-colors.rendered.html");
        expect(await player.page.screenshot()).toMatchSnapshot('primary.png', { threshold: 0.2, fullpage: true });
        
    });

    test('Second Pattern', async ({
        page
    }) => {
        const player = new DefaultPage(page);
        await player.goto("/patterns/atoms-global-neutral-colors/atoms-global-neutral-colors.rendered.html");
        expect(await player.page.screenshot()).toMatchSnapshot('neutral.png', { threshold: 0.2, fullpage: true });
        
    });

});
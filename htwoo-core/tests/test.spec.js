//@ts-check
const {
    test,
    describe = test.describe,
    beforeEach = test.beforeEach,
    beforeAll = test.beforeAll,
    expect
} = require('@playwright/test');
const {
    injectAxe,
    checkA11y,
    getViolations,
    reportViolations
} = require('axe-playwright');
const {
    DefaultPage
} = require('./dev-page.js');


describe("Primary Colors:", () => {

    test('First Pattern', async ({
        page
    }) => {
        const player = new DefaultPage(page);
        await player.goto("/patterns/atoms-global-primary-colors/atoms-global-primary-colors.rendered.html");
        expect(await player.page.screenshot({
            fullscreen: true
        })).toMatchSnapshot('primary.png', {
            threshold: 0.2
        });

        const snapshot = await page.accessibility.snapshot({
            interestingOnly: true
        });

    });

    test('A11Y', async ({
        page
    }) => {

        const player = new DefaultPage(page);
        await player.goto("/patterns/molecules-menus-breadcrumb/molecules-menus-breadcrumb.rendered.html");
        await injectAxe(player.page);

        const violations = await getViolations(page, 'body', {
            axeOptions: {
                runOnly: {
                    type: 'tag',
                    values: ['wcag21a', 'wcag21aa', 'best-practice']
                }
            }
        })

        expect(violations.length).toBe(0);

        if (violations.length !== 0) {
            console.table(violations);
        }


    });

    test('Second Pattern', async ({
        page
    }) => {
        const player = new DefaultPage(page);
        await player.goto("/patterns/atoms-global-neutral-colors/atoms-global-neutral-colors.rendered.html");
        expect(await player.page.screenshot()).toMatchSnapshot('neutral.png', {
            threshold: 0.2
        });

    });

});
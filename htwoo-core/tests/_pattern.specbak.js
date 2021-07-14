//@ts-check
const {
  test,
  expect
} = require('@playwright/test');


test.describe('Atoms', () => {

  test('atoms-avatar-avatar', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-avatar/atoms-avatar-avatar.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar.png');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-16.png');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-24.png');
  });

  test('atoms-avatar-avatar-16', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-avatar-16/atoms-avatar-avatar-16.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-16.png');
  });



  test('atoms-avatar-avatar-24', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-avatar-24/atoms-avatar-avatar-24.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-24.png');
  });



  test('atoms-avatar-avatar-32', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-avatar-32/atoms-avatar-avatar-32.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-32.png');
  });



  test('atoms-avatar-avatar-40', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-avatar-40/atoms-avatar-avatar-40.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-40.png');
  });



  test('atoms-avatar-avatar-48', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-avatar-48/atoms-avatar-avatar-48.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-48.png');
  });



  test('atoms-avatar-avatar-64', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-avatar-64/atoms-avatar-avatar-64.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-avatar-64.png');
  });



  test('atoms-avatar-presence', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-presence/atoms-avatar-presence.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-presence.png');
  });



  test('atoms-avatar-presence-all', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-avatar-presence-all/atoms-avatar-presence-all.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-avatar-presence-all.png');
  });



  test('atoms-box-effects-elevation', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-box-effects-elevation/atoms-box-effects-elevation.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-box-effects-elevation.png');
  });



  test('atoms-box-effects-elevations', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-box-effects-elevations/atoms-box-effects-elevations.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-box-effects-elevations.png');
  });



  test('atoms-buttons-button-action', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-action/atoms-buttons-button-action.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-action.png');
  });



  test('atoms-buttons-button-cmd', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-cmd/atoms-buttons-button-cmd.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-cmd.png');
  });



  test('atoms-buttons-button-compound-primary', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-compound-primary/atoms-buttons-button-compound-primary.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-compound-primary.png');
  });



  test('atoms-buttons-button-compound-standard', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-compound-standard/atoms-buttons-button-compound-standard.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-compound-standard.png');
  });



  test('atoms-buttons-button-context', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-context/atoms-buttons-button-context.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-context.png');
  });



  test('atoms-buttons-button-hyperlink-primary', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-hyperlink-primary/atoms-buttons-button-hyperlink-primary.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-hyperlink-primary.png');
  });



  test('atoms-buttons-button-hyperlink-standard', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-hyperlink-standard/atoms-buttons-button-hyperlink-standard.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-hyperlink-standard.png');
  });



  test('atoms-buttons-button-icon', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-icon/atoms-buttons-button-icon.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-icon.png');
  });



  test('atoms-buttons-button-icon-overflow', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-icon-overflow/atoms-buttons-button-icon-overflow.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-icon-overflow.png');
  });



  test('atoms-buttons-button-icon-split', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-icon-split/atoms-buttons-button-icon-split.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-icon-split.png');
  });



  test('atoms-buttons-button-pivot', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-pivot/atoms-buttons-button-pivot.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-pivot.png');
  });



  test('atoms-buttons-button-pivot-active', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-pivot-active/atoms-buttons-button-pivot-active.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-pivot-active.png');
  });



  test('atoms-buttons-button-primary', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-primary/atoms-buttons-button-primary.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-primary.png');
  });



  test('atoms-buttons-button-split-primary', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-split-primary/atoms-buttons-button-split-primary.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-split-primary.png');
  });



  test('atoms-buttons-button-split-standard', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-split-standard/atoms-buttons-button-split-standard.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-split-standard.png');
  });



  test('atoms-buttons-button-split-vars', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-split-vars/atoms-buttons-button-split-vars.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-split-vars.png');
  });



  test('atoms-buttons-button-standard', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-button-standard/atoms-buttons-button-standard.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-button-standard.png');
  });



  test('atoms-buttons-menu-flyouts', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-buttons-menu-flyouts/atoms-buttons-menu-flyouts.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-buttons-menu-flyouts.png');
  });



  test('atoms-global-button-colors', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-global-button-colors/atoms-global-button-colors.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-global-button-colors.png');
  });



  test('atoms-global-colors', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-global-colors/atoms-global-colors.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-global-colors.png');
  });



  test('atoms-global-neutral-colors', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-global-neutral-colors/atoms-global-neutral-colors.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-global-neutral-colors.png');
  });



  test('atoms-global-other-colors', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-global-other-colors/atoms-global-other-colors.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-global-other-colors.png');
  });



  test('atoms-global-primary-button-colors', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-global-primary-button-colors/atoms-global-primary-button-colors.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-global-primary-button-colors.png');
  });



  test('atoms-global-primary-colors', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-global-primary-colors/atoms-global-primary-colors.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-global-primary-colors.png');
  });



  test('atoms-grid-grid', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-grid-grid/atoms-grid-grid.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-grid-grid.png');
  });



  test('atoms-icons-icon', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-icons-icon/atoms-icons-icon.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-icons-icon.png');
  });



  test('atoms-icons-icon-svg', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-icons-icon-svg/atoms-icons-icon-svg.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-icons-icon-svg.png');
  });



  test('atoms-images-image', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-images-image/atoms-images-image.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-images-image.png');
  });



  test('atoms-images-image-16by10', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-images-image-16by10/atoms-images-image-16by10.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-images-image-16by10.png');
  });



  test('atoms-images-image-16by9', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-images-image-16by9/atoms-images-image-16by9.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-images-image-16by9.png');
  });



  test('atoms-images-image-1by1', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-images-image-1by1/atoms-images-image-1by1.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-images-image-1by1.png');
  });



  test('atoms-input-checkbox', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-checkbox/atoms-input-checkbox.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-checkbox.png');
  });



  test('atoms-input-checkbox-disabled', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-checkbox-disabled/atoms-input-checkbox-disabled.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-checkbox-disabled.png');
  });



  test('atoms-input-input-prensufix', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-input-prensufix/atoms-input-input-prensufix.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-input-prensufix.png');
  });



  test('atoms-input-input-text', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-input-text/atoms-input-input-text.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-input-text.png');
  });



  test('atoms-input-input-text-disabled', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-input-text-disabled/atoms-input-input-text-disabled.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-input-text-disabled.png');
  });



  test('atoms-input-input-text-invalid', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-input-text-invalid/atoms-input-input-text-invalid.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-input-text-invalid.png');
  });



  test('atoms-input-input-text-prefixed', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-input-text-prefixed/atoms-input-input-text-prefixed.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-input-text-prefixed.png');
  });



  test('atoms-input-input-text-suffixed', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-input-text-suffixed/atoms-input-input-text-suffixed.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-input-text-suffixed.png');
  });



  test('atoms-input-label', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-label/atoms-input-label.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-label.png');
  });



  test('atoms-input-label-disabled', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-label-disabled/atoms-input-label-disabled.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-label-disabled.png');
  });



  test('atoms-input-label-required', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-label-required/atoms-input-label-required.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-label-required.png');
  });



  test('atoms-input-radiobutton', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-radiobutton/atoms-input-radiobutton.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-radiobutton.png');
  });



  test('atoms-input-radiobutton-disabled', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-radiobutton-disabled/atoms-input-radiobutton-disabled.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-radiobutton-disabled.png');
  });



  test('atoms-input-searchbox', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-searchbox/atoms-input-searchbox.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-searchbox.png');
  });



  test('atoms-input-select', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-select/atoms-input-select.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-select.png');
  });



  test('atoms-input-select-drop-down', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-select-drop-down/atoms-input-select-drop-down.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-select-drop-down.png');
  });



  test('atoms-input-toggle', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-input-toggle/atoms-input-toggle.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-input-toggle.png');
  });



  test('atoms-loading-loading', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-loading/atoms-loading-loading.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-loading.png');
  });



  test('atoms-loading-shimmer-circle', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-circle/atoms-loading-shimmer-circle.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-circle.png');
  });



  test('atoms-loading-shimmer-img', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-img/atoms-loading-shimmer-img.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-img.png');
  });



  test('atoms-loading-shimmer-img-16x10', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-img-16x10/atoms-loading-shimmer-img-16x10.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-img-16x10.png');
  });



  test('atoms-loading-shimmer-img-16x9', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-img-16x9/atoms-loading-shimmer-img-16x9.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-img-16x9.png');
  });



  test('atoms-loading-shimmer-img-1x1', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-img-1x1/atoms-loading-shimmer-img-1x1.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-img-1x1.png');
  });



  test('atoms-loading-shimmer-row', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-row/atoms-loading-shimmer-row.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-row.png');
  });



  test('atoms-loading-shimmer-squared', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-squared/atoms-loading-shimmer-squared.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-squared.png');
  });



  test('atoms-loading-shimmer-theme-fancy', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-fancy/atoms-loading-shimmer-theme-fancy.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-fancy.png');
  });



  test('atoms-loading-shimmer-theme-inline-fancy', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-inline-fancy/atoms-loading-shimmer-theme-inline-fancy.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-inline-fancy.png');
  });



  test('atoms-loading-shimmer-theme-inline-neutral', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-inline-neutral/atoms-loading-shimmer-theme-inline-neutral.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-inline-neutral.png');
  });



  test('atoms-loading-shimmer-theme-inline-notheme', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-inline-notheme/atoms-loading-shimmer-theme-inline-notheme.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-inline-notheme.png');
  });



  test('atoms-loading-shimmer-theme-inline-primary', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-inline-primary/atoms-loading-shimmer-theme-inline-primary.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-inline-primary.png');
  });



  test('atoms-loading-shimmer-theme-neutral', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-neutral/atoms-loading-shimmer-theme-neutral.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-neutral.png');
  });



  test('atoms-loading-shimmer-theme-notheme', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-notheme/atoms-loading-shimmer-theme-notheme.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-notheme.png');
  });



  test('atoms-loading-shimmer-theme-primary', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theme-primary/atoms-loading-shimmer-theme-primary.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theme-primary.png');
  });



  test('atoms-loading-shimmer-theming-support', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-loading-shimmer-theming-support/atoms-loading-shimmer-theming-support.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-loading-shimmer-theming-support.png');
  });



  test('atoms-motion-add-n-slide', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-motion-add-n-slide/atoms-motion-add-n-slide.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-motion-add-n-slide.png');
  });



  test('atoms-motion-animation-block', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-motion-animation-block/atoms-motion-animation-block.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-motion-animation-block.png');
  });



  test('atoms-motion-delete-n-slide', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-motion-delete-n-slide/atoms-motion-delete-n-slide.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-motion-delete-n-slide.png');
  });



  test('atoms-table-table', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-table-table/atoms-table-table.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-table-table.png');
  });



  test('atoms-table-table-collapsable', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-table-table-collapsable/atoms-table-table-collapsable.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-table-table-collapsable.png');
  });



  test('atoms-table-table-compact', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-table-table-compact/atoms-table-table-compact.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-table-table-compact.png');
  });



  test('atoms-table-table-compact-colgroup', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-table-table-compact-colgroup/atoms-table-table-compact-colgroup.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-table-table-compact-colgroup.png');
  });



  test('atoms-table-table-sticky', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-table-table-sticky/atoms-table-table-sticky.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-table-table-sticky.png');
  });



  test('atoms-tooltip-tooltip', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-tooltip-tooltip/atoms-tooltip-tooltip.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-tooltip-tooltip.png');
  });



  test('atoms-typography-blockquote', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-typography-blockquote/atoms-typography-blockquote.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-typography-blockquote.png');
  });



  test('atoms-typography-font-sizes', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-typography-font-sizes/atoms-typography-font-sizes.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-typography-font-sizes.png');
  });



  test('atoms-typography-headlines', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-typography-headlines/atoms-typography-headlines.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-typography-headlines.png');
  });



  test('atoms-typography-monospace', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-typography-monospace/atoms-typography-monospace.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-typography-monospace.png');
  });



  test('atoms-typography-paragraph', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-typography-paragraph/atoms-typography-paragraph.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-typography-paragraph.png');
  });



  test('atoms-typography-text-styles', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-typography-text-styles/atoms-typography-text-styles.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-typography-text-styles.png');
  });



  test('atoms-validation-error', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-validation-error/atoms-validation-error.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-validation-error.png');
  });



  test('atoms-validation-success', async ({
    page
  }) => {
    await page.goto('http://127.0.0.1:3000/patterns/atoms-validation-success/atoms-validation-success.rendered.html');
    expect(await page.screenshot()).toMatchSnapshot('atoms-validation-success.png');
  });
});


test('molecules-avatar-with-presence-avatar-presence', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-avatar-with-presence-avatar-presence/molecules-avatar-with-presence-avatar-presence.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-avatar-with-presence-avatar-presence.png');
});



test('molecules-avatar-with-presence-avatar-presence-16', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-avatar-with-presence-avatar-presence-16/molecules-avatar-with-presence-avatar-presence-16.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-avatar-with-presence-avatar-presence-16.png');
});



test('molecules-avatar-with-presence-avatar-presence-24', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-avatar-with-presence-avatar-presence-24/molecules-avatar-with-presence-avatar-presence-24.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-avatar-with-presence-avatar-presence-24.png');
});



test('molecules-avatar-with-presence-avatar-presence-32', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-avatar-with-presence-avatar-presence-32/molecules-avatar-with-presence-avatar-presence-32.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-avatar-with-presence-avatar-presence-32.png');
});



test('molecules-avatar-with-presence-avatar-presence-40', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-avatar-with-presence-avatar-presence-40/molecules-avatar-with-presence-avatar-presence-40.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-avatar-with-presence-avatar-presence-40.png');
});



test('molecules-avatar-with-presence-avatar-presence-48', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-avatar-with-presence-avatar-presence-48/molecules-avatar-with-presence-avatar-presence-48.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-avatar-with-presence-avatar-presence-48.png');
});



test('molecules-avatar-with-presence-avatar-presence-64', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-avatar-with-presence-avatar-presence-64/molecules-avatar-with-presence-avatar-presence-64.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-avatar-with-presence-avatar-presence-64.png');
});



test('molecules-cards-elements-card-footer', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-footer/molecules-cards-elements-card-footer.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-footer.png');
});



test('molecules-cards-elements-card-image', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-image/molecules-cards-elements-card-image.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-image.png');
});



test('molecules-cards-elements-card-image-html', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-image-html/molecules-cards-elements-card-image-html.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-image-html.png');
});



test('molecules-cards-elements-card-location', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-location/molecules-cards-elements-card-location.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-location.png');
});



test('molecules-cards-elements-card-splash-desc', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-splash-desc/molecules-cards-elements-card-splash-desc.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-splash-desc.png');
});



test('molecules-cards-elements-card-splash-footer', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-splash-footer/molecules-cards-elements-card-splash-footer.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-splash-footer.png');
});



test('molecules-cards-elements-card-splash-header', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-splash-header/molecules-cards-elements-card-splash-header.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-splash-header.png');
});



test('molecules-cards-elements-card-splash-title', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-splash-title/molecules-cards-elements-card-splash-title.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-splash-title.png');
});



test('molecules-cards-elements-card-title', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-cards-elements-card-title/molecules-cards-elements-card-title.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-cards-elements-card-title.png');
});



test('molecules-dialogs-dialog-content', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-dialogs-dialog-content/molecules-dialogs-dialog-content.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-dialogs-dialog-content.png');
});



test('molecules-dialogs-dialog-header', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-dialogs-dialog-header/molecules-dialogs-dialog-header.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-dialogs-dialog-header.png');
});



test('molecules-forms-checkbox-group', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-forms-checkbox-group/molecules-forms-checkbox-group.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-forms-checkbox-group.png');
});



test('molecules-forms-radio-button-group', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-forms-radio-button-group/molecules-forms-radio-button-group.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-forms-radio-button-group.png');
});



test('molecules-menus-breadcrumb', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-menus-breadcrumb/molecules-menus-breadcrumb.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-menus-breadcrumb.png');
});



test('molecules-menus-cmdbar', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-menus-cmdbar/molecules-menus-cmdbar.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-menus-cmdbar.png');
});



test('molecules-menus-cmdbar-overflow', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-menus-cmdbar-overflow/molecules-menus-cmdbar-overflow.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-menus-cmdbar-overflow.png');
});



test('molecules-menus-nav', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-menus-nav/molecules-menus-nav.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-menus-nav.png');
});



test('molecules-menus-pivotbar', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-menus-pivotbar/molecules-menus-pivotbar.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-menus-pivotbar.png');
});



test('molecules-menus-pivotbar-overflow', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-menus-pivotbar-overflow/molecules-menus-pivotbar-overflow.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-menus-pivotbar-overflow.png');
});



test('molecules-menus-teams-toolbar', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-menus-teams-toolbar/molecules-menus-teams-toolbar.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-menus-teams-toolbar.png');
});



test('molecules-persona-persona', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-persona-persona/molecules-persona-persona.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-persona-persona.png');
});



test('molecules-persona-persona-100', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-persona-persona-100/molecules-persona-persona-100.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-persona-persona-100.png');
});



test('molecules-persona-persona-24', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-persona-persona-24/molecules-persona-persona-24.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-persona-persona-24.png');
});



test('molecules-persona-persona-32', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-persona-persona-32/molecules-persona-persona-32.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-persona-persona-32.png');
});



test('molecules-persona-persona-40', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-persona-persona-40/molecules-persona-persona-40.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-persona-persona-40.png');
});



test('molecules-persona-persona-48', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-persona-persona-48/molecules-persona-persona-48.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-persona-persona-48.png');
});



test('molecules-persona-persona-72', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-persona-persona-72/molecules-persona-persona-72.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-persona-persona-72.png');
});



test('molecules-webpart-related-webpart-title', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/molecules-webpart-related-webpart-title/molecules-webpart-related-webpart-title.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('molecules-webpart-related-webpart-title.png');
});



test('organism-cards-document-card', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-cards-document-card/organism-cards-document-card.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-cards-document-card.png');
});



test('organism-cards-document-card-html', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-cards-document-card-html/organism-cards-document-card-html.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-cards-document-card-html.png');
});



test('organism-cards-document-card-shimmer', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-cards-document-card-shimmer/organism-cards-document-card-shimmer.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-cards-document-card-shimmer.png');
});



test('organism-cards-teams-splash-card', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-cards-teams-splash-card/organism-cards-teams-splash-card.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-cards-teams-splash-card.png');
});



test('organism-dialogs-modal-dialog', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-modal-dialog/organism-dialogs-modal-dialog.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-modal-dialog.png');
});



test('organism-dialogs-modal-dialog-error', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-modal-dialog-error/organism-dialogs-modal-dialog-error.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-modal-dialog-error.png');
});



test('organism-dialogs-modal-dialog-success', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-modal-dialog-success/organism-dialogs-modal-dialog-success.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-modal-dialog-success.png');
});



test('organism-dialogs-modal-dialog-warning', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-modal-dialog-warning/organism-dialogs-modal-dialog-warning.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-modal-dialog-warning.png');
});



test('organism-dialogs-sidebar-left', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-sidebar-left/organism-dialogs-sidebar-left.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-sidebar-left.png');
});



test('organism-dialogs-sidebar-right', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-sidebar-right/organism-dialogs-sidebar-right.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-sidebar-right.png');
});



test('organism-dialogs-tester-dialog', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-tester-dialog/organism-dialogs-tester-dialog.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-tester-dialog.png');
});



test('organism-dialogs-tester-sidebar', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-dialogs-tester-sidebar/organism-dialogs-tester-sidebar.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-dialogs-tester-sidebar.png');
});



test('organism-facepiles-facepile', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-facepiles-facepile/organism-facepiles-facepile.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-facepiles-facepile.png');
});



test('organism-facepiles-facepile-32', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-facepiles-facepile-32/organism-facepiles-facepile-32.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-facepiles-facepile-32.png');
});



test('organism-facepiles-facepile-40', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-facepiles-facepile-40/organism-facepiles-facepile-40.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-facepiles-facepile-40.png');
});



test('organism-facepiles-facepile-48', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-facepiles-facepile-48/organism-facepiles-facepile-48.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-facepiles-facepile-48.png');
});



test('organism-facepiles-facepile-64', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/organism-facepiles-facepile-64/organism-facepiles-facepile-64.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('organism-facepiles-facepile-64.png');
});



test('pages-teams-teams-splash-screen', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/pages-teams-teams-splash-screen/pages-teams-teams-splash-screen.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('pages-teams-teams-splash-screen.png');
});



test('pages-teams-teams-splash-screen-multi', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/pages-teams-teams-splash-screen-multi/pages-teams-teams-splash-screen-multi.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('pages-teams-teams-splash-screen-multi.png');
});



test('templates-card.grid-card-grid', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/templates-card.grid-card-grid/templates-card.grid-card-grid.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('templates-card.grid-card-grid.png');
});



test('templates-card.grid-card-grid-html', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/templates-card.grid-card-grid-html/templates-card.grid-card-grid-html.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('templates-card.grid-card-grid-html.png');
});



test('templates-teams-teams-dashboard', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/templates-teams-teams-dashboard/templates-teams-teams-dashboard.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('templates-teams-teams-dashboard.png');
});



test('templates-teams-teams-splash-screen', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/templates-teams-teams-splash-screen/templates-teams-teams-splash-screen.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('templates-teams-teams-splash-screen.png');
});



test('templates-teams-teams-splash-screen-multi', async ({
  page
}) => {
  await page.goto('http://127.0.0.1:3000/patterns/templates-teams-teams-splash-screen-multi/templates-teams-teams-splash-screen-multi.rendered.html');
  expect(await page.screenshot()).toMatchSnapshot('templates-teams-teams-splash-screen-multi.png');
});
// playwright-dev-page.js
exports.DefaultPage = class DefaultPage {
  constructor(page) {
    this.page = page;
  }

  async goto(page) {
    await this.page.goto(`http://127.0.0.1:3000${page}`);
  }

}
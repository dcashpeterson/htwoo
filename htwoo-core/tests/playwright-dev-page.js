// playwright-dev-page.js
exports.PlaywrightDevPage = class PlaywrightDevPage {
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('http://localhost:3000');
    }
  

  }
const { expect } = require('@playwright/test');

class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.passwordInput = page.locator('input[data-qa="password"]');
    this.confirmPasswordInput = page.locator('input[data-qa="confirm-password"]');
    this.registerButton = page.locator('button[data-qa="register-button"]');
  }

  async navigate() {
    await this.page.goto('https://www.automationexercise.com/');
    this.registerLink = page.locator('a[href="/register"]');
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async fillRegistrationForm(name, email, password, confirmPassword) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async submitRegistration() {
    await this.registerButton.click();
  }

  async verifyRegistrationSuccess() {
    await expect(this.page.locator('text=Account Created!')).toBeVisible();
  }
}

module.exports = { RegistrationPage };
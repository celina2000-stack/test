const { test } = require('@playwright/test');
const { RegistrationPage } = require('./registrationPage');
const { validUser, invalidUser } = require('./registrationFixture');

test.describe('Registration Tests', () => {
  test.skip('should register a new user successfully', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.navigate();
    await registrationPage.fillRegistrationForm(
      validUser.name,
      validUser.email,
      validUser.password,
      validUser.confirmPassword
    );
    await registrationPage.submitRegistration();
    await registrationPage.verifyRegistrationSuccess();
  });

  test('should fail to register with invalid data', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.navigate();
    await registrationPage.clickRegisterLink();
    await registrationPage.navigate();
    await registrationPage.fillRegistrationForm(
      invalidUser.name,
      invalidUser.email,
      invalidUser.password,
      invalidUser.confirmPassword
    );
    await registrationPage.submitRegistration();
    // Add assertions for failure scenarios
  });
});
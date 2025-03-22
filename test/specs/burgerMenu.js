import loginTestPage from '../pageobjects/loginTestPage';

describe('The login page', () => {
    it('should have the right credentials', async () => {
        await loginTestPage.open()
        await enterCredentials.login('standard_user', 'secret_sauce')
    });
});
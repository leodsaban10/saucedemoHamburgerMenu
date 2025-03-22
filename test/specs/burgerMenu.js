import loggingIn from '../page-objects/loginTestPage.js';



describe('The login page', () => {
    it('should have the right credentials', async () => {
        await loggingIn.open()
        await loggingIn.login('standard_user', 'secret_sauce')
    });
});
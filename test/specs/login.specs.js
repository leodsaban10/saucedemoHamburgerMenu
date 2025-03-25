import { expect } from '@wdio/globals';
import loggingIn from '../pageobjects/loginTestPage.js';

describe('User can log in', () => {
    const usernames = ['standard_user', 'problem_user', 'performance_glitch_user','error_user', 'visual_user'];
    const password = 'secret_sauce';

    before(async () => {
        await loggingIn.open(); // Open login page before running tests
    });

    usernames.forEach((username) => {
        it(`should log in successfully as ${username}`, async () => {
            await loggingIn.firstUserAttempt(username, password); // Logs in with the username and password
            await expect(loggingIn.headerProducts).toExist(); // Validates the successful login
            await loggingIn.hamburgerMenu(); // Opens the hamburger menu
            await loggingIn.logOut(); // Logs out
            await expect(loggingIn.btnSubmit).toExist(); // Ensure user is logged out before next username attempt
        });
    });
    it(`should fail logging in`, async () => {
        await loggingIn.login('locked_out_user', password); // Login attempt
        await expect(loggingIn.lockoutMessage).toExist(); // Validate successful login
        await expect(loggingIn.btnSubmit).toExist(); // Ensure user is logged out before next iteration
    });
});




    
 

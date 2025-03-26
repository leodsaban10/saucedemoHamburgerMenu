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
            await loggingIn.hamburgerMenu(); // Opens the hamburger menu
            await loggingIn.logOut(); // Logs out
        });
    });
});




    
 

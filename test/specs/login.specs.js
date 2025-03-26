import { expect } from '@wdio/globals';
import loggingIn from '../pageobjects/loginTestPage.js';

describe('User can log in', () => {
           it('should log in successfully as', async () => {
            await loggingIn.open(); // Opens the login page
            await loggingIn.firstUserAttempt('standard_user', 'secret_sauce'); // Logs in with the username and password
            await loggingIn.hamburgerMenu(); // Opens the hamburger menu
            await loggingIn.logOut(); // Logs out
            await expect(loggingIn.btnSubmit).toExist(); // Ensure user is logged out before next username attempt
        });
    });
 




    
 

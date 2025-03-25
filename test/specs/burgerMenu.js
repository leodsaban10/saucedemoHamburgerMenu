import loggingIn from '../pageobjects/loginTestPage.js';
import loggingOut from '../pageobjects/logOutTestPage.js';

let users = ['username, password']
    users.forEach((user) => {
        
    })

describe('The login page', () => {
    before(async () => {
        await loggingIn.open(); // Ensure the browser navigates to the login page before the test
    });

    it('should open with the accepted credentials', async () => {
        await loggingIn.login('standard_user', 'secret_sauce'); // Ensure the login function is awaited
    });
   
    // it('check the shopping cart icon is displayed', async () => {
    //     await loggingIn.shoppingCart(); // Ensure the shoppingCart function is awaited
    // });

    it('Menu should be displayed when clicked', async () => {
        await loggingIn.hamburgerMenu(); // Ensure the hamburgerMenu function is awaited
    });

    it('logs out of site', async () => {
        await loggingOut.logOut(); // Ensure the hamburgerMenu function is awaited
    });
});


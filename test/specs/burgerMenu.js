import loggingIn from '../pageobjects/loginTestPage.js';
import loggingOut from '../pageobjects/logOutTestPage.js';



// describe('The login page', () => {
//     it('should have the right credentials', async () => {
//         loggingIn.open()
//         firstUserAttemp.login('standard_user', 'secret_sauce')
//     });
// });

describe('The login page', () => {
    before(async () => {
        await loggingIn.open(); // Ensure the browser navigates to the login page before the test
    });

    it('should have the right credentials', async () => {
        await loggingIn.login('standard_user', 'secret_sauce'); // Ensure the login function is awaited
    });



    
    
    it('should be displayed when clicked', async () => {
        await loggingIn.hamburgerMenu(); // Ensure the hamburgerMenu function is awaited
    });

    it('foo', async () => {
        await loggingOut.logOut(); // Ensure the hamburgerMenu function is awaited
    });
});



import loggingIn from '../pageobjects/loginTestPage.js';

// describe('User can log in', () => {
//            it('should log in and display the Products page along with the hamburger menu', async () => {
//             await loggingIn.open(); // Opens the login page
//             await loggingIn.firstUserAttempt('standard_user', 'secret_sauce'); // Logs in with the username and password
//             await loggingIn.hamburgerMenu(); // Opens the hamburger menu
//             await loggingIn.about(); // Clicks on the about us button
//             await browser.back(); // Navigate back to the previous page
//             await loggingIn.open(); // Opens the login page          
//             await loggingIn.firstUserAttempt('standard_user', 'secret_sauce'); // Logs in with the username and password
//             await loggingIn.hamburgerMenu();
//             await loggingIn.logOut(); // Logs out
//         });
//     });
 
    describe('shopping cart test', () => {
        it('All items inside the shopping cart', async () => {
         await loggingIn.open(); // Opens the login page
         await loggingIn.firstUserAttempt('standard_user', 'secret_sauce'); // Logs in with the username and password
         await loggingIn.shoppingCartIcon(); // Clicks on the shopping cart icon        
         await loggingIn.hamburgerMenu();
         await loggingIn.logOut(); // Logs out
     });
 });



    
 

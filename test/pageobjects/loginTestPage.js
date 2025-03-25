import {$} from '@wdio/globals';
import Page from './page.js';


class loggingIn extends Page {
    get usernameInputField() {
        return $('//*[@id="user-name"]');
    }
    get passwordInputField() {
        return $('#password');
    }
    get btnSubmit () {
        return $('//*[@id="login-button"]');
    }

    get headerProducts () {
        return $('//span[@data-test="title"][contains(text(), "Products")]');
    };

    get hamburgerMenuButton () {
        return $('//*[@id="react-burger-menu-btn"]');
    }
    get menu () {
        return $('.bm-menu');
    }
    get lockoutMessage () {
        return $('.error-button');
    }
    get failedMessage () {
        return $('//h3[contains(text(), "Epic sadface: Username and password do not match any user in this service")]');
    }

    async login (username, password) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.btnSubmit.click();
    }

    async firstUserAttempt (username, password) {
        await this.login(username, password);
        await expect(this.headerProducts).toExist();
    }

    async hamburgerMenu () {
        await this.hamburgerMenuButton.click();
        await expect(this.menu).toBeDisplayed();

    }
    get logOutButton () {
        return $('//*[@id="logout_sidebar_link"]');
    }

    async logOut () {
        await this.logOutButton.click();
    }


    open () {
        return super.open();
    }
}


export default new loggingIn();


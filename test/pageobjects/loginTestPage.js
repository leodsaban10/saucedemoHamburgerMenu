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

    async login (username, password) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.btnSubmit.click();
    }

    async firstUserAttempt () {
        await this.login(username, password);
        await expect(this.headerProducts).toExist();
    }

    async hamburgerMenu () {
        await this.hamburgerMenuButton.click();
        // await expect(this.hamburgerMenu).toExist();
        await expect(this.menu).toBeDisplayed();

    }

    open () {
        return super.open('login');
    }
}


export default new loggingIn();

import {$} from '@wdio/globals';
import Page from './page.js';


class loggingIn extends Page {
    get usernameInputField() {
        return $('#username');
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

    async login (username, password) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.btnSubmit.click();
    }

    async firstUserAttempt () {
        await this.login(username, password);
        await expect(this.headerProducts).toExist();
    }

    open () {
        return super.open('login');
    }
}


export default new loggingIn();

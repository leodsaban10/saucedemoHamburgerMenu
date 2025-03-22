import {$} from '@wdio/globals';
import Page from './page.js';


class loggingIn extends Page {
    get usernameInputField() {
        return $('#user-name');
    }
    get passwordInputField() {
        return $('#password')
    }

    async login (username, password) {
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.btnSubmit.click();
    }

    get headerProducts () {
        return $('//span[@data-test="title"][contains(text(), "Products")]');
    };

    open () {
        return super.open('login');
    }
}


export default loggingIn();

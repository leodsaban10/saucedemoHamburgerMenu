import {$, browser, expect} from '@wdio/globals';
import Page from './page.js';



class loggingIn extends Page {
    get usernameInputField() {
        return $('#user-name');
    }

    get passwordInputField() {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get headerProducts () {
        return $('//span[@data-test="title"][contains(text(), "Products")]');
    }

    get hamburgerMenuButton () {
        return $('#react-burger-menu-btn');
    }

    get menu () {
        return $('.bm-menu');
    }

    get aboutText () {
        return $('#about_sidebar_link');
    }

    get lockoutMessage () {
        return $('.error-button');
    }

    get failedMessage () {
        return $('//h3[contains(text(), "Epic sadface: Username and password do not match any user in this service")]');
    }

    get logOutButton () {
        return $('#logout_sidebar_link');
    }

    get shoppingCartButton () {
        return $('#shopping_cart_container');
    }

    get continueShoppingButton () {
        return $('#continue-shopping');
    }

    get qtyElement () {
        return $('//*[@class="cart_quantity_label"]');
    }

    get descriptionElement () {
        return $('//*[@class="cart_desc_label"]');
    }

    get checkOutButton () {
        return $('#checkout')
    }

    get cancelButton () {
        return $('#cancel')
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

    async about () {
        await this.aboutText.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/')
    }

    async shoppingCartIcon () {
        expect(this.shoppingcartIcon).toExist();
        await this.shoppingCartButton.click();
        await expect(this.qtyElement).toHaveText('QTY');
        await expect(this.descriptionElement).toHaveText('Description');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await this.checkOutButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await this.cancelButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await this.continueShoppingButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    }

    async logOut () {
        await this.logOutButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    }

    open () {
        return super.open();
    }
}


export default new loggingIn();


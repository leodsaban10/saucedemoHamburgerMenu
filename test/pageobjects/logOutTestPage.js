import {$} from '@wdio/globals';
import Page from './page.js';


class loggingOut {
    get hamburgerMenuButton () {
        return $('//*[@id="react-burger-menu-btn"]');
    }
    get menu () {
        return $('.bm-menu');
    }
    get logOutButton () {
        return $('//*[@id="logout_sidebar_link"]');
    }

    async logOut () {
        await this.logOutButton.click();
    }

    async hamburgerMenu () {
        await this.hamburgerMenuButton.click();
        await expect(this.menu).toBeDisplayed();

    }

    open () {
        return super.open();
    }
}


export default new loggingOut();
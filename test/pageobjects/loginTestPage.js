import {$} from '@wdio/globals';
import Page from './page.js';


class loggedIn extends Page {
    get inputUsername() {
        return $('#username');
    }

}


export default new loggedIn();

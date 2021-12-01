const Page = require('./page');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://docs.google.com/spreadsheets/d/1wV_b5TnfUw-9s-KzqhTHluDfVMkb2lQTLNUfty0ufnw/edit#gid=0`)
    }
}

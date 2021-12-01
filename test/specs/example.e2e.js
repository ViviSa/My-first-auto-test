const LoginPage = require('../pageobjects/login.page');
const Page = require(`../pageobjects/page`);
const SecurePage = require('../pageobjects/secure.page');
const page = new Page();
const assert = require(`assert`)
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await page.open();
        //ввести свою почту
        const EmailField = await $('#identifierId');
        await EmailField.setValue(`huidliatesta@gmail.com`);
        //нажать далее
        const NextButton = await $(`div.qhFLie > div > div > button > span`);
        await NextButton.click();

        //

        //нажать "Повторити спробу" (нажать на почту сверху)

        //ввести свой пароль
        const PasswordField = await $('#password > div > div > div > input');
        await PasswordField.setValue(`MrJ2CSulveJWb6`);
        await console.log(444444444444444444444444);
        //нажать далее
        // await browser.debug();

        // const NextButton2 = await $(`div.qhFLie > div > div > button > span`);
        await browser.pause(8000);
        await NextButton.click();
        await browser.pause(3000);
        // await browser.debug();
        await console.log(555555555555555555555555);
        //проверить что текст заглавия статьи "Як увійти в обліковий запис у сумісному веб-переглядачі"
        const title = await $(`#docs-title-widget > input`);

        await console.log(await title.getValue());
        await console.log(66666666666666666666666666666);
        await assert.strictEqual(await title.getTitle(),`Table for autotesting! - Google Таблицы`);

    });
});



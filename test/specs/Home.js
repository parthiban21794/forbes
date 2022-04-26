
import loginPage from "../pages/loginPage";


describe('Check function of the home page', () => {

    it('Check the Function of Cover News',async () => {

        await loginPage.open();
        await browser.maximizeWindow();
        await browser.pause(5000);
        await (await $("[class='preview ratio16x9']")).click();
        await browser.pause(1000);
        var headLineOfCover = (await $("[class='fs-headline speakable-headline font-base font-size should-redesign color-base'")).getText();
        console.log(headLineOfCover);
        var titleOfCoverWindow = await browser.getTitle();
        console.log(titleOfCoverWindow);
        await expect(headLineOfCover).toEqual(titleOfCoverWindow);
        await browser.pause(1000);

    });
    
});
import BreakingNewsPage from "../pages/BreakingNewsPage";


describe('Check The Function Of BreakingNews', () => {

    it('Open The Breaking News By BreakingNews Tag',async () => {
       await BreakingNewsPage.open();
       await browser.maximizeWindow();
        await browser.pause(5000);
        var  breakingnews = await (await $("//a[@data-ga-track='Breaking Article 1']")).getText();
        console.log(breakingnews);
        console.log(bnTitle);
        await browser.pause(2000);
        await (await $("//a[@data-ga-track='Breaking Article 1']")).click();
        await browser.pause(2000);
        await browser.saveScreenshot("./ScreenShot/bn.png");
        await browser.pause(2000);
        var bnTitle = await browser.getTitle();
        
        await browser.pause(2000);
        await expect(bnTitle).toEqual (breakingnews);
    });


});
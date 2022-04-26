import loginPage from "../pages/loginPage";
import logindata, {inValidPassword, password } from "../Data/logindata";

describe('Check the Sign In Functions', () => {

    it.only('Login By without MailId',async () => {

        await loginPage.open();
        await browser.maximizeWindow();
        await browser.pause(2000);
        await (await loginPage.signIn).click();
        await browser.pause(2000);
        var frame = await $('iframe[id^="piano-id"]');
        await browser.switchToFrame(frame);
        await browser.pause(5000);
        await (await loginPage.password).setValue(logindata.password);
        await browser.pause(2000);
        await (await loginPage.loginBtn).click();
        await browser.pause(3000);
        await browser.saveScreenshot("./ScreenShot/loginpageScreenShoots/EmptyUserName.png");
        await browser.pause(3000);

    
    });


    it('Login Without Password',async () => {
        await loginPage.userName(logindata.userName);
        await browser.pause(2000);
        await (await loginPage.loginBtn).click();
        await browser.pause(3000);
        await browser.saveScreenshot("./ScreenShot/loginpageScreenShoots/EmptyPassword.png");
        
    });


    it('Function Of ValidUserName And InValidPassword',async () => {
        
        await loginPage.loginAsValid(logindata.userName,inValidPassword);
        await browser.pause(2000);
        await (await loginPage.loginBtn).click();
        await browser.pause(3000);
        await browser.saveScreenshot("./ScreenShot/loginpageScreenShoots/invalidPass.png");
        
    });

    it('Function Of InValidUserName And ValidPassword',async () => {
        await loginPage.loginAsValid(logindata.inValidUser,password);
        await browser.pause(2000);
        await (await loginPage.loginBtn).click();
        await browser.pause(3000);
        await browser.saveScreenshot("./ScreenShot/loginpageScreenShoots/invaliduser.png");
        
    });
    it('Function Of InValidUserName And InValidPassword',async () => {
        await loginPage.loginAsValid(logindata.inValidUser,inValidPassword);
        await browser.pause(2000);
        await (await loginPage.loginBtn).click();
        await browser.pause(3000);
        await browser.saveScreenshot("./ScreenShot/loginpageScreenShoots/bothInValid.png");
        
    });
    

    it('ValidEmail and ValidPassword',async () => {
        await browser.pause(2000);
        await loginPage.loginAsValid(logindata.userName,password);
        await browser.pause(2000);
        await (await loginPage.loginBtn).click();
        await browser.pause(3000);
        await browser.saveScreenshot("./ScreenShot/loginpageScreenShoots/Loggedin.png");
        
    });

    

    
});
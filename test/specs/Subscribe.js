import logindata from "../Data/logindata";
import SubscriptionPage from "../pages/SubscriptionPage";

describe('Function of the subscription page and SignUp Page', () => {

    it('Check the Subscribe Button', async () => {
        await SubscriptionPage.open();
        await browser.maximizeWindow();        
         await browser.pause(5000);
        await SubscriptionPage.subscribeBtn.click();
        await browser.pause(5000);
        await browser.saveScreenshot("./ScreenShot/SubScribeScreenShots/enterIntoSubscribePage.png"); 
        await browser.pause(5000);  
        await browser.switchWindow('https://account.forbes.com/subscribe?eventSource=header&redirect=https://www.forbes.com/home_asia/');
        await browser.pause(5000);
        await browser.switchToFrame(0);
        await (await SubscriptionPage.subscripeNowBtn).click();
        await browser.pause(5000);
        await browser.switchToFrame(null);
 
    });

    it('Sign up process WithOut Any Data Passing',async () => {
        var frame = await $("//div[@class='tp-iframe-wrapper tp-active']//iframe[starts-with(@id,'offer-')]");
        await browser.switchToFrame(frame);
        await browser.pause(5000);
        var innerframe = await $('iframe[id^="piano-id"]');//iframe[id^="piano-id"]  ///html/body/div[1]/div/div/div[2]/div[5]/div[2]/div[2]/div/piano-id/div/auth-piano-id/iframe
        await browser.switchToFrame(innerframe);
        await browser.pause(5000);
        await (await SubscriptionPage.createAccBtn).click();
        await browser.pause(1000);
        await browser.saveScreenshot("./ScreenShot/SubScribeScreenShots/RequiredFields.png");
 
    });

    it('SignUp Process with Invalid Fname And Lname ',async () => {

        await (await SubscriptionPage.signUpFname).setValue(logindata.InlsignUpFname);
        await (await SubscriptionPage.signUpLname).setValue(logindata.InlsignUpLname);
        await (await SubscriptionPage.jobLevel).click();
        await (await SubscriptionPage.cSuite).click();
        await (await SubscriptionPage.SignUpMail).setValue(logindata.signupValidMail);
        await (await SubscriptionPage.signUpPass).setValue(logindata.signupvalidPass8ok);
        await browser.pause(10000);
        await (await SubscriptionPage.createAccBtn).click();
        await (await $('.error-list')).scrollIntoView();
        await browser.saveScreenshot("./ScreenShot/SubScribeScreenShots/It Accepts Invalid Format Of LName And Fname.png");
        await browser.pause(5000);
        
    });

    it('SignUp Process with exisiting MailId ',async () => {

        await (await SubscriptionPage.signUpFname).setValue(logindata.lsignUpFname);
        await (await SubscriptionPage.signUpLname).setValue(logindata.lsignUpLname);
        await (await SubscriptionPage.jobLevel).click();
        await (await SubscriptionPage.cSuite).click();
        await (await SubscriptionPage.SignUpMail).setValue(logindata.signupValidMail);
        await (await SubscriptionPage.signUpPass).setValue(logindata.signupvalidPass8ok);
        await browser.pause(10000);
        await (await SubscriptionPage.createAccBtn).click();
        await (await $('.error-list')).scrollIntoView();
        await browser.saveScreenshot("./ScreenShot/SubScribeScreenShots/existingEmail.png");
        await browser.pause(5000);
        
        
    });
    
    
});
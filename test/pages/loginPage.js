

class ForbesPage{

    open(){
        return browser.url('/');
    }
    

    get signIn(){

       return $("//button[text()='Sign In']");
    }

    get userName(){

        return $('#email');
    }

    get password(){
        return $('#password');
        
    }
    get loginBtn(){
        return $("//button[text()='Sign In']");
    }

    

    get profileBtn(){
        return ('body > div.main-content.main-content--universal-header > header > nav > div.header__right.isLogged-in > div > span > span > svg');
    }

    get signOut(){
        return $("//button[text()='Sign Out']");
    }

  

    
    // enterUserName(text){
    //     this.userName.waitForDisplayed();
    //     this.userName.setValue(text);
    // }

    // enterPassword(text){
    //     this.password.waitForDisplayed();
    //     this.password.setValue(text);
    // }

    // clickOnLogin(){
    //     this.loginBtn.waitForDisplayed();
    //     this.loginBtn.click();
    // }

    // get CreateAcc(){
    //     return $('#autofill-form > screen-login > div.login-modal__create-account-button > button');
    // }
    
}
export default new ForbesPage
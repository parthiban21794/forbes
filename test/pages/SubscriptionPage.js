class SubscribePage{


    open(){
        return browser.url('/');
    }

    get subscribeBtn(){

     return   $("//a[text()='Subscribe ']");
    }

   get subscripeNowBtn(){

        return $("//*[@class='card-button card-button-middle unbutton']");
    }

    get frameLoc(){
        return $("//div[@class='tp-iframe-wrapper tp-active']//iframe[starts-with(@id,'offer-')]");
    }

    get createAccBtn(){
        return $ ("//button[text()='Create an account']");
    }

    get signUpFname(){
        return $('#first-name');
    }

    get signUpLname(){
        return $("//input[@id='last-name']");
    }

    get jobLevel(){
        return $('//*[@id="autofill-form"]/screen-register/div[2]/custom-field[1]/single-select-custom-field/pn-selectbox/div');
    }

   get cSuite(){
       return $("//div[text()='C-Suite']");
   }
 
   get jobFunction(){
      return $('//*[@id="autofill-form"]/screen-register/div[2]/custom-field[2]/single-select-custom-field/pn-selectbox');
  }

    get SignUpMail(){
return $ ("#email");

    }

    get signUpPass(){
        return $ ('#password');
    }


}
export default new SubscribePage
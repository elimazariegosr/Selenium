const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");


async function example(){
 
    var email = "marcohueco@gmail.com";

    var pass = "e";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://analisis2.tk/Login");
     await driver.sleep(1000);    
     //To send a search query by passing the value in searchString.
     await driver.findElement(By.id("login")).sendKeys(email);
     await driver.sleep(1000);
     await driver.findElement(By.id("password")).sendKeys(pass);
     await driver.sleep(1000);
     await driver.findElement(By.id("ingresar")).click();

     //Verify the page title and print it
     var title = await driver.getTitle();
     console.log('Title is:',title);

     
     //It is always a safe practice to quit the browser after execution

}
example()
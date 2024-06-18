const {Builder, By, Key, until} = require("selenium-webdriver")

async function abrirSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.get("https://www.midastouch.com.br")
        await driver.manage().window().maximize()
        const mainWindowHandle = await driver.getWindowHandle();
        await driver.sleep(3000)

        //Acessando rota não existente
        await driver.get("https://www.midastouch.com.br/naoexisto")
        await driver.sleep(3000)
        await driver.navigate().back()
        await driver.sleep(3000)

        //Navegação
        const navitem1 = await driver.findElement(By.css("a[href='/stayhungry']"))
        await navitem1.click()
        await driver.sleep(3000)
        const navItem2 = await driver.findElement(By.css("a[href='/produtos']"))
        await navItem2.click()
        await driver.sleep(5000)

        //Calcular frete
        await driver.executeScript(`document.evaluate("//a[@href='/produto/midas-knit-321']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        await driver.sleep(5000)
        const inputFrete = await driver.findElement(By.css("input[class='cep']"))
        await inputFrete.sendKeys("69033610")
        await inputFrete.sendKeys(Key.ENTER)
        await driver.sleep(5000)

        //Login
        const account = driver.findElement(By.css("a[href='/conta']"))
        await account.click()
        await driver.sleep(3000)
        const emailInput = driver.findElement(By.id("login-email"))
        await emailInput.sendKeys("aaa")
        const passwordInput = driver.findElement(By.id("login-senha"))
        await passwordInput.sendKeys("aaa")
        await driver.executeScript(`document.querySelector(".btn-submit").click()`)
        await driver.sleep(3000)

        //Redirecionando para o WhatsApp
        await driver.wait(until.elementLocated(By.className("_1AO1ZAEYMFyNkw8GOv_31_ _2Bby3Kx9ViF6_IvQzl9OE-")))
        const whatsApp = driver.findElement(By.className("_1AO1ZAEYMFyNkw8GOv_31_ _2Bby3Kx9ViF6_IvQzl9OE-"))
        await whatsApp.click()
        await driver.wait(until.elementLocated(By.className("_14KJesQSblL6wMfijOPzs")))
        const whatsAppButton = driver.findElement(By.className("_14KJesQSblL6wMfijOPzs"))
        await whatsAppButton.click()
        await driver.sleep(5000)
        await driver.switchTo().window(mainWindowHandle)
        const homePage = await driver.findElement(By.css("a[href='/']"))
        await homePage.click()
    } catch (e) {
        console.log(e)
    }
}

abrirSite()

const { Given, When, Then, After } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I have the calculator APK', async function () {
    this.app = './apk/calculator.apk';
});

When('I install and open the app', async function () {
    await driver.installApp(this.app);
    await driver.execute('mobile: activateApp', { appId: 'com.darkempire78.opencalculator' });
    await driver.pause(2000);
});

Then('The calculator should be displayed', async function () {
    const appPackage = await driver.getCurrentPackage();
    assert.strictEqual(appPackage, 'com.darkempire78.opencalculator');
});

After(async function () {
    await driver.removeApp('com.darkempire78.opencalculator');
});

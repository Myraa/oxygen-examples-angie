var poHomePage = require('../pages/home_page.js');
const homePage = poHomePage.homePage;
var poLoginPage = require('../pages/login_page.js');
const loginPage = poLoginPage.loginPage;

log.info("Running against " + loginPage.url);
loginPage.open();
loginPage.login('${username}', '${password}');
//homePage.assertHomePage();
homePage.launchPhoneIntakePage();
//homePage.PhoneIntakePage.assertPhoneIntakePage();
// const visibleBooks = page.getNumberOfVisibleBooks();
// assert.equal(visibleBooks, 2, "There should only be one book visible");
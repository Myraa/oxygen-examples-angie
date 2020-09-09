var poHomePage = require('../pages/home_page.js');
const homePage = poHomePage.homePage;
var poLoginPage = require('../pages/login_page.js');
const loginPage = poLoginPage.loginPage;
var menuPage = require('../pages/menu_page.js');
const pomenuPage = menuPage.menuPage;

log.info("Running against " + loginPage.url);
loginPage.open();
loginPage.login('${username}', '${password}');
//homePage.assertHomePage();
homePage.launchPhoneIntakePage();
homePage.PhoneIntakePage.assertPhoneIntakePage();
homePage.PhoneIntakePage.gotoAccountsScreen();
homePage.PhoneIntakePage.assertAccountDetailsPage();
homePage.PhoneIntakePage.addClaim('${callBackNumber}');
//logout
pomenuPage.logout();





//homePage.PhoneIntakePage.assertPhoneIntakePage();
// const visibleBooks = page.getNumberOfVisibleBooks();
// assert.equal(visibleBooks, 2, "There should only be one book visible");
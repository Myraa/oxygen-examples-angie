var po = require('../pages/login_page.js');
const loginPage = po.loginPage;

log.info("Running against " + loginPage.url);
loginPage.open();
//loginPage.login("prasad.boddu@nttdata.com", "$pring2020");
loginPage.login('${username}', '${password}');
// const visibleBooks = page.getNumberOfVisibleBooks();
// assert.equal(visibleBooks, 2, "There should only be one book visible");
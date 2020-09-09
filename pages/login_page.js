module.exports = {

    loginPage: {
        url: 'https://test.salesforce.com/',
        username: 'id=username',
        password: 'id=password',

        open: function() {
            web.init()
            web.open(this.url)
        },

        login: function(uname, pword) {
            web.type(this.username, uname)
            web.type(this.password, pword)
            web.click('id=Login');
        },

        // getNumberOfVisibleBooks: function() {
        //     return web.findElements(this.visibleBooks).length
        // }
    }
}
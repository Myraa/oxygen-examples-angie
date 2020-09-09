module.exports = {

    menuPage: {
        logout: function() {
            web.click('//button/div/span[1]/div/span');
            web.click('//a[contains(text(),\'Log Out\')]');
        },

        // getNumberOfVisibleBooks: function() {
        //     return web.findElements(this.visibleBooks).length
        // }
    }
}
module.exports = {

    homePage: {
        username: 'id=username',

        assertHomePage: function() {
            //web.waitForText('//header[@id=\'oneHeader\']/div[3]/div/div[2]/div/div/ul[2]/li[2]/a', 'HomeHome');
            web.assertText('//header[@id=\'oneHeader\']/div[3]/div/div[2]/div/div/ul[2]/li[2]/a/span[2]', 'Home');
        },
        launchPhoneIntakePage: function() {
            // web.click('//button/div/div/div[5]');
            // web.click('//lightning-input/div/input');
            // web.pause(3000);
            // web.type('//lightning-input/div/input', 'phone');
            // web.click('//span/p');
            //web.selectWindow('title=Recently Viewed | Accounts | Salesforce');
            //web.click('//header[@id=\'oneHeader\']/div[3]/div/div[1]/div[1]/div[1]/button/div/div/div[7]');
            web.click('//button/div/div/div[6]');
            web.click('//one-app-launcher-search-bar/lightning-input/div/input');
            web.click('//one-app-launcher-search-bar/lightning-input/div/input');
            web.type('//one-app-launcher-search-bar/lightning-input/div/input', 'phone');
            web.click('//span/p');
        },
        PhoneIntakePage:
        {
            assertPhoneIntakePage: function() {
                //web.waitForText('//header[@id=\'oneHeader\']/div[3]/div/div[2]/div/div/ul[2]/li[2]/a', 'HomeHome');
                web.assertText('//header[@id=\'oneHeader\']/div[3]/div/div[1]/div[1]/div[2]/span', 'GiDP Claims-Phone');
            },
            gotoAccountsScreen: function() {
                //web.selectWindow('title=Recently Viewed | Accounts | Salesforce');
                web.pause(5000);
                var menudropdown = web.findElement('//header[@id=\'oneHeader\']/div[3]/div/div[1]/div[3]/div/button/lightning-primitive-icon');
                menudropdown.click();
                web.pause(3000);
                //web.click('//div[@id=\'navMenuList\']/div/ul/li[1]/div/a/span[2]/span');
                web.click('//li[1]/div/a/span[2]/span');
                web.pause(3000);
                web.click('(//a[contains(@href, \'/lightning/r/0011900000uf6CVAAY/view\')])[1]');
            },
            assertAccountDetailsPage: function() {
                web.assertText('id=customTab2__item', '+ Start New Claim');
            },
            addClaim: function(callBackNumber) {
                web.pause(5000);
                web.click('id=customTab2__item');
                web.click('//flexipage-tab2[@id=\'tab-4\']/slot/flexipage-component2/slot/c-gidp_-os-claim-initiation-phone-intake-c-s-r-english/article/div[2]/c-teststepbottomborder[1]/div[3]/slot/vlocity_ins-omniscript-custom-lwc/slot/c-gidp_lwc-o-s-get-claims-contacts/lightning-radio-group/fieldset/div/span/label');
                web.click('//vlocity_ins-omniscript-telephone/slot/c-masked-input/div/div[2]/input');
                web.sendKeys(callBackNumber);
                web.click('//flexipage-tab2[@id=\'tab-4\']/slot/flexipage-component2/slot/c-gidp_-os-claim-initiation-phone-intake-c-s-r-english/article/div[2]/c-teststepbottomborder[1]/div[3]/slot/vlocity_ins-omniscript-select/slot/c-combobox/div/div/div[2]/div[1]/div/input');
                web.click('//flexipage-tab2[@id=\'tab-4\']/slot/flexipage-component2/slot/c-gidp_-os-claim-initiation-phone-intake-c-s-r-english/article/div[2]/c-teststepbottomborder[1]/div[3]/slot/vlocity_ins-omniscript-select/slot/c-combobox/div/div/div[2]/div[2]/div/ul/li[2]/div/span/span');
                web.click('(//button[@type=\'button\'])[17]');
                web.pause(5000);

                web.click('(//input[@type=\'text\'])[3]');
                web.type('(//input[@type=\'text\'])[3]', 'Annual');
                web.click('//flexipage-tab2[@id=\'tab-4\']/slot/flexipage-component2/slot/c-gidp_-os-claim-initiation-phone-intake-c-s-r-english/article/div[2]/c-teststepbottomborder[2]/div[3]/slot/vlocity_ins-omniscript-typeahead-block/div/slot/vlocity_ins-omniscript-typeahead/slot/div/c-typeahead/div/div[2]/div[2]/div[2]/div/ul/li[1]/div/span/span');
                web.click('(//input[@type=\'text\'])[7]');
                web.click('//flexipage-tab2[@id=\'tab-4\']/slot/flexipage-component2/slot/c-gidp_-os-claim-initiation-phone-intake-c-s-r-english/article/div[2]/c-teststepbottomborder[2]/div[3]/slot/vlocity_ins-omniscript-date/slot/c-input/c-date-picker/div/div/fieldset/div/div/div/div/div/div[3]/table/tbody/tr[2]/td[4]/span');
                // web.click('css=#tab-4 > slot > flexipage-component2 > slot > c-gidp_-os-claim-initiation-phone-intake-c-s-r-english > article > div.omniscript-body.slds-card__body.slds-card__body_inner.slds-m-top_medium.slds-p-right_medium.slds-col.slds-grid.slds-grid_vertical.slds-size_1-of-1.slds-medium-size_2-of-3 > c-teststepbottomborder:nth-child(15) > div.slds-grid.slds-wrap.slds-p-vertical_small.omniscript-step__body > slot > div:nth-child(9) > vlocity_ins-omniscript-edit-block > div > div.slds-box.slds-grid.slds-m-bottom_medium.slds-size_1-of-1 > c-icon > svg > use');
                // web.click('//flexipage-tab2[@id=\'tab-4\']/slot/flexipage-component2/slot/c-gidp_-os-claim-initiation-phone-intake-c-s-r-english/article/div[2]/c-teststepbottomborder[2]/div[3]/slot/div[1]/vlocity_ins-omniscript-edit-block/div/div[2]/article/slot/vlocity_ins-omniscript-select[1]/slot/c-combobox/div/div/div[2]/div[1]/div/input');
                // web.click('//flexipage-tab2[@id=\'tab-4\']/slot/flexipage-component2/slot/c-gidp_-os-claim-initiation-phone-intake-c-s-r-english/article/div[2]/c-teststepbottomborder[2]/div[3]/slot/div[1]/vlocity_ins-omniscript-edit-block/div/div[2]/article/slot/vlocity_ins-omniscript-select[1]/slot/c-combobox/div/div/div[2]/div[2]/div/ul/li[2]/div/span/span');
                //id="httpsnttgxdpgidpcqa01lightningforcecomsldsiconsutilityspritesvgsymbolssvg_add"
                //web.click('id=httpsnttgxdpgidpcqa01lightningforcecomsldsiconsutilityspritesvgsymbolssvg_add');
                web.pause(5000);
            }
        }
    
    }
}
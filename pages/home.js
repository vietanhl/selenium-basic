const By = require("selenium-webdriver").By;

const INVITEE_FORM = "registrar";
const INVITEE_NAME_FIELD = "#registrar input[name='name']";
const TOGGLE_NON_RESPONDER_VISIBILITY = ".main > div input"
inviteeByName = name => `//span[text()="${name}"]/..`;
const REMOVE_BUTTON = "button:last-child";
const CONFIRMED_CHECKBOX = "input[type='checkbox']";
const EDIT_BUTTON = "button:first-of-type";
const NAME_FIELD = "input[type='text']";

class HomePage {
    constructor (driver) {
        this.driver = driver;
    }
    
    open () {
        this.driver.get(process.env.URL);
    }
//locate elements
   getInviteeForm(){
        return this.driver.findElement(By.id(INVITEE_FORM));
   }
   getInviteeNameField(){
        return this.driver.findElement(By.css(INVITEE_NAME_FIELD));
   }
   getToggleNonResponderVisibility(){
        return this.driver.findElement(By.css(TOGGLE_NON_RESPONDER_VISIBILITY));
   }
   getInviteeByName(name) {
       return this.driver.findElement(By.xpath(inviteeByName(name)));
   }
//functions
    async addInvitee (name) {
        await getInviteeNameField().sendKeys(name);
        await getInviteeForm().submit();
    };
    
    async toggleNonRespondersVisibility() {
        await getToggleNonResponderVisibility().click();
    }
    
    //access to our sub page
    async findInviteeByName(name) {
        const el = await getInviteeByName(name);
        return new Invitee(el);
    }
}

//sub page. We do not export it so it is essentially private
class Invitee {
    constructor (element){
        this.element = element;
    }

    getRemoveButton(){
        return this.element.findElement(By.css(REMOVE_BUTTON));
    }
    getConfirmedCheckbox(){
        return this.element.findElement(By.css(CONFIRMED_CHECKBOX));
    }
    getEditButton(){
        return this.element.findElement(By.css(EDIT_BUTTON));
    }
    getNameField(){
        return this.element.findElement(By.css(NAME_FIELD));
    }

    async remove() {
        await getRemoveButton().click();
    }

    async toggleCheckbox() {
        await getConfirmedCheckbox().click();
    }
    async editName(name) {
        const button = await getEditButton();          
        const textField = await getNameField();
        button.click();    
        textField.clear();
        textField.sendKeys(name);
        button.click();
    }
}

module.exports = HomePage;
const selenium = require("selenium-webdriver");
const By = selenium.By;
// const fs = require("fs");
//able to do this because home.js is exported
const HomePage = require('./pages/home.js');


let driver;
let homePage;

async function init(){
driver = await new selenium.Builder().forBrowser("chrome").build();
homePage = new HomePage(driver);
homePage.open();
invitees.forEach(invitee => homePage.addInvitee(invitee));
// homePage.toggleNonRespondersVisibility();
//remove invitee
homePage.findInviteeByName("Shadd Anderson").remove();
//click confirm to checkbox
// homePage.findInviteeByName("Jennifer Nordell").toggleCheckbox();

// //change name
// homePage
//     .findInviteeByName("Gonzalo Torres del Fierro")
//     .editName("Viet Le");

}
init();

const invitees = [
    'Gonzalo Torres del Fierro',
    'Shadd Anderson',
    'George Aparece',
    'Shadab Khan',
    'Joseph Michael Casey',
    'Jennifer Nordell',
    'Faisal Albinali',
    'Taron Foxworth',
    'David Riesz',
    'Maicej Torbus',
    'Martin Luckett',
    'Joel Bardsley',
    'Reuben Varzea',
    'Ken Alger',
    'Amrit Pandey',
    'Rafal Rudzinski',
    'Brian Lynch',
    'Lupe Camacho',
    'Luke Fiji',
    'Sean Christensen',
    'Philip Graf',
    'Mike Norman',
    'Michael Hulet',
    'Brent Suggs'
 ];


// //screenshot
// test().then(driver.takeScreenshot().then((image, err) => {
//     fs.writeFile("weird-layout.png", image, "base64",
//     err => console.log(err));
// }));
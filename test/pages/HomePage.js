const radioButton = "input[name='radioButton'][value='radio1']";
const inputCountry = "#autocomplete";
const countrySelector = "#ui-id-3";
const dropdownButton = "#dropdown-class-example";
const checkboxButton = "#checkBoxOption1";
const openWindowButton = "#openwindow";
const openTabButton = "#opentab";

async function OpenURL() {
  await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
  await expect(browser).toHaveUrl(
    "https://rahulshettyacademy.com/AutomationPractice/"
  );
}

async function ButtonRadio() {
  await $(radioButton).click();
}

async function CountryInput() {
  await $(inputCountry).waitForExist();
  await $(inputCountry).addValue("Ind");
  await $(countrySelector).waitForExist();
  await $(countrySelector).click();
}

async function ButtonDropdown() {
  await $(dropdownButton).click();
  await $(dropdownButton).selectByVisibleText("Option1");
}

async function ButtonCheckbox() {
  await $(checkboxButton).click();
}

async function ButtonOpenWindow() {
  await $(openWindowButton).click();
  await browser.pause(500);
}

async function ButtonOpenTab() {
  await $(openTabButton).click();
  await browser.pause(500);
}

async function ReturnMainPage() {
  await browser.switchWindow("Practice Page");
  await browser.pause(500);
}

module.exports = {
  OpenURL,
  ButtonRadio,
  CountryInput,
  ButtonDropdown,
  ButtonCheckbox,
  ButtonOpenWindow,
  ReturnMainPage,
  ButtonOpenTab,
};

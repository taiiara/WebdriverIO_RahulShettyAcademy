const {
  OpenURL,
  ButtonRadio,
  CountryInput,
  ButtonDropdown,
  ButtonCheckbox,
  ButtonOpenWindow,
  ButtonOpenTab,
  ReturnMainPage,
} = require("../pages/HomePage");
const {
  WindowSwitch,
  ElementGet,
  WindowClose,
} = require("../pages/SwitchPage");

describe("Test", () => {
  it("Generic Test", async () => {
    await OpenURL();
    await ButtonRadio();
    await CountryInput();
    await ButtonDropdown();
    await ButtonCheckbox();
    await ButtonOpenWindow();
    await WindowSwitch();
    await ElementGet();
    await WindowClose();
    await ReturnMainPage();
    await ButtonOpenTab();
    await WindowSwitch();
    await ElementGet();
    await WindowClose();
    await ReturnMainPage();
  });
});

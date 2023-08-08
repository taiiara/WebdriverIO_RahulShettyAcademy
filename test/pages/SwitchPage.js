const elementText = "h2";

async function WindowSwitch() {
  await browser.switchWindow(
    "QAClick Academy - A Testing Academy to Learn, Earn and Shine"
  );
  await browser.pause(500);
}

async function ElementGet() {
  const getElementText = await $(elementText).getText();
  console.log(getElementText);
  await browser.pause(500);
}

async function WindowClose() {
  browser.closeWindow();
  await browser.pause(500);
}

module.exports = {
  WindowSwitch,
  ElementGet,
  WindowClose,
};

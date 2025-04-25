function waitForElement(selector, callback, interval = 100, timeout = 10000) {
  const start = Date.now();

  const check = setInterval(() => {
    const element = document.querySelector(selector);
    if (element) {
      clearInterval(check); // Stop checking the element once its found
      callback(element); // Call the provided function
    } else if (Date.now() - start > timeout) {
      clearInterval(check);
      console.error(`Element ${selector} not found within ${timeout}ms.`);
    }
  }, interval);
}

waitForElement("#i0116", (emailInput) => {
  emailInput.value = "email";
  emailInput.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch an 'input' event to trigger listeners

  waitForElement("#idSIButton9", (nextButton) => {
    nextButton.click();
  });
});

# Microsoft AutoLogin Extension

This extension uses JavaScript to automatically fill in the email field and click the "Next" button on Microsoft's login page, speeding up the login process. It waits for the elements to appear in the DOM, interacts with them, and automates the login process for quicker access.

## Installation

1. **Copy the Script:**
   - Copy the provided script and change your email in `content.js`.
   
2. **Create the Extension:**
   - In your browser, go to the Extensions page (`chrome://extensions` for Chrome).
   - Enable "Developer mode" (for Chrome).
   - Click the "Load unpacked" button (Chrome).
   - Select the directory where you have stored the extension files (including `content.js` and `manifest.json`).
   - 
4. **Activate the Extension:**
   - Once the extension is installed and activated, it will automatically fill in your email and click the "Next" button when you visit Microsoft's login page.

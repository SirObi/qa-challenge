Hubrick QA Challenge
========================

We're excited that you're interested in joining the [Hubrick](https://hubrick.com/) team. Thank you for your time!

# Challenge description
1. Fix `should add Card` test.
2. Please add more tests. For example, `should delete Card` test.
3. Please write several test cases, execute them/ do manual testing and create a description for several functional, UI/UX issues you find.

You can find Webdriverio API here http://webdriver.io/api.html

# Application description
Application has a UI for CRUD operations for Cards entity.

# Installation
- git clone git @https://github.com/hubrick/qa-challenge.git
- `cd qa-challenge`
- install node v 4.3.0 (`brew install node` for MAC, for example). In case you have node installed, you can manage node versions with the nvm https://github.com/creationix/nvm
- `npm install`
- `npm install -g selenium-standalone@6.4.1` & `selenium-standalone install` if you don't have selenium-standalone yet

# Start the application
- `npm run start`

# Start the e2e tests
- Start the application in a separate tab
- `npm run selenium` in a separate tab
- `npm run e2e` in a separate tab.
We recommend to run tests against Firefox v42. You can change the browser here https://github.com/hubrick/qa-challenge/blob/master/wdio.conf.js#L32

# Note
The code, design, tests etc do not represent our production application.

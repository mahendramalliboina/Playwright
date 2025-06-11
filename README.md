# Playwright
A beginner-friendly Playwright automation project to learn end-to-end testing using JavaScript. This repository contains sample test cases, configuration files, and automation scripts for practicing Playwright testing from scratch.

🚀 Initial Setup Steps (From Scratch)
1. Create a Repository and Clone It

->Create a new repository in GitHub (e.g., playwright-tests)
->Clone it to your local machine:
->git clone https://github.com/<your-username>/playwright-tests.git
->cd playwright-tests

2. Set Up Node.js Project

-->npm init -y
->This initializes a package.json file with default values.
->It's required to manage dependencies like Playwright and other npm packages.

3. Install and Set Up Playwright

-->npx create-playwright
->Installs all necessary dependencies.
->Downloads Playwright test runner and browsers (Chromium, Firefox, WebKit).
->Sets up initial folder structure (tests/, playwright.config.ts, etc.)

4. Create a .env File

-->Create a .env file in the root of your project.
->Add environment variables (example: number of workers):
WORKERS=3
->These variables can be accessed in your config file or tests.

5. Install dotenv to Load Environment Variables

-->npm install dotenv
->This package allows your project to load variables from the .env file.
->Helps in managing config, secrets, or dynamic test settings.
->You must import it where needed (like in playwright.config.ts):

//command to install playwright allure
->npm install -D allure-playwright



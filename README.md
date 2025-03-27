# Playwright Swab Labs Automation Project

This repository contains automated test scripts for the Playwright Swab Labs framework. The tests are designed to run in major browsers and generate an HTML report for easy review.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd playwright_swablabs

2. **Install Dependencies: Run the following command to install all required dependencies**:
   npm install

3. **Verify Installation: Ensure Playwright is installed correctly by running**:
  npx playwright install

4. **Running the Tests**
Execute All Tests: Run the following command to execute all test scripts located in the tests folder:
 npx playwright test

5. **View the HTML Report: After the tests are complete, generate and open the HTML report**:
   npx playwright show-report
  This will open the report in your default browser.

**Folder Structure**
**tests**: Contains all test scripts.
**pages**: Contains Page Object Model (POM) classes for modular and reusable code.
**playwright.config.ts**: Configuration file for Playwright, including test settings, browser configurations, and reporters.
Notes
The tests are configured to generate an HTML report in the playwright-report directory.
If you want to share the report, you can zip the playwright-report folder or use a tool like html-inline to create a single HTML file.

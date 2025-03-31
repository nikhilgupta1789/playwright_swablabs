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

**##Test Case Details:**

**1. Login functionality:**
Test case to get login with different users/password - page object model, write once and test many times with different data sets
**2. Add to cart functionality:**
Test case to verify products should be added into cart using add to cart button
**3. Sorting functionality:**
Test case to verify sorting should be applied to the listed products using Price (low to high) and validate products should be listed in ascending order by price
**4. Checkout functionality:**
Test case to verify checkout of the prodcust added into carts and place an order and verify successfully order message
**5. Reset App State:**
Test case to verify Remove button state should change to Add to cart back to original state after performing Reset App State  
   
**Defect(s) Identified:**

**1. Remove button text not changes back into Add to cart after performing Reset App State**
**Actual Behaviour:** Remove button text remains diplayed after performing Reset App state
**Expected Behaviour:** Products button text should be displayed as Add to cart after performing Reset App State

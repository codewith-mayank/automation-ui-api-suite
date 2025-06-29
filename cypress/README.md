# Cypress UI Automation (TypeScript)

This folder contains automated UI test cases built using Cypress with TypeScript.

- All test files are located in the `tests/` directory
- Written in TypeScript for better readability and type safety
- Suitable for end-to-end testing of modern web applications

## Setup

- Initialize project:  
  `npm init -y`

- Install dependencies:  
  `npm install cypress typescript --save-dev`

- Open Cypress Test Runner:  
  `npx cypress open`

- Run tests in headless mode (CI/CD use):  
  `npx cypress run`

## Notes

- Structure is kept minimal for clarity and easy scaling
- Recommended to follow consistent selectors and assertions
- Additional folders like `/fixtures/`, `/support/` can be added as needed

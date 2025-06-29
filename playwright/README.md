# Playwright UI Automation (TypeScript)

This folder contains UI test scripts built using Playwright with TypeScript.

- All test files are placed inside the `tests/` directory
- Supports cross-browser automation (Chromium, Firefox, WebKit)
- Written in TypeScript for type safety and maintainability

## Setup

- Initialize project:  
  `npm init -y`

- Install Playwright:  
  `npm install -D playwright`

- Install browser drivers:  
  `npx playwright install`

- Run all tests:  
  `npx playwright test`

## Notes

- Playwright is suitable for modern applications needing fast and reliable automation
- Supports parallel execution, visual comparisons, and CI integration
- Folder can be extended with `/pages/` and `/fixtures/` as needed

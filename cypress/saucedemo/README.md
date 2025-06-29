# SauceDemo – Cypress Test Suite

This directory contains UI automation tests for [saucedemo.com](https://www.saucedemo.com), a public e-commerce demo site. All tests are written using **Cypress with TypeScript** and follow a structured, maintainable test pattern.

## ✅ Covered Scenarios

- Valid login flow using `standard_user`
- Invalid login attempt using incorrect credentials
- Inventory page validation after successful login

## ⚙️ How to Run Locally

Make sure you have Node.js installed. Then run the following commands:

```bash
npm install
npx cypress open

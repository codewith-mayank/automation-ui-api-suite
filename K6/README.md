
k6 Load Testing Suite
======================

This directory contains multiple k6-based load testing scripts for real-world applications and APIs.
Each subfolder represents a dedicated project or endpoint under test.

Structure
---------

k6/
├── saucedemo/
│   ├── saucedemo-test.js
│   └── README.md
├── reqres/
│   └── reqres-test.js (coming soon)
├── ...

Tool Used
----------

- k6 by Grafana – developer-centric load testing CLI
- JavaScript (ES6)

Install (macOS):
brew install k6

How to Run a Test
------------------

Navigate to the project folder (e.g., saucedemo) and run:

k6 run <test-script>.js

Example:
cd saucedemo
k6 run saucedemo-test.js

Generate JSON output for analysis:
k6 run --out json=results.json saucedemo-test.js


Purpose
--------

These scripts are used to:
- Simulate realistic user traffic
- Detect website or API load capacity
- Capture performance bottlenecks
- Strengthen QA performance portfolio

Maintained by Mayank – Automation + Performance QA

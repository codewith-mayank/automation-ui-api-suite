# Stress Testing: saucedemo.com with k6

This script performs a structured Stress test on [`https://www.saucedemo.com`](https://www.saucedemo.com) using [k6](https://k6.io), simulating real-world user traffic to evaluate performance and stability.

---

## Test Scenario

- Simulates realistic ramp-up and ramp-down of users
- Validates:
  - HTTP 200 response
  - Presence of "Swag Labs" text on homepage
- Measures:
  - Average response time
  - Request throughput
  - System behavior under high Stress

---

## Stress Configuration

js
export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 50 },
    { duration: '1m', target: 100 },
    { duration: '30s', target: 0 },
  ],
};
Total duration: ~3 minutes
Peak users simulated: 100 concurrent

## How to Run
cd scripts
k6 run saucedemo-test.js

# To export JSON results:
k6 run --out json=../results/saucedemo-results.json saucedemo-test.js


## Sample Result Summary

- 7,769 requests made
- 100 concurrent virtual users (VUs)
- Avg response time: 79ms
- Failures: 0%
- 15,538 checks passed (status + content)

## Purpose

# This test helps evaluate:
	•	How much Stress the site can handle before response times degrade
	•	Whether the server can maintain integrity under stress
	•	Real-time functional correctness under peak traffic

 ## Technologies Used
	•	k6: Open-source Stress testing tool (CLI)
	•	JavaScript (ES6)

⸻

Made by: Mayank

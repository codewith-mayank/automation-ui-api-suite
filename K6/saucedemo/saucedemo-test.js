// 📁 scripts/saucedemo-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },   // warm-up users
    { duration: '1m', target: 50 },    // moderate load
    { duration: '1m', target: 100 },   // peak load
    { duration: '30s', target: 0 },    // ramp-down
  ],
};

export default function () {
  const res = http.get('https://www.saucedemo.com');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body includes Swag Labs': (r) => r.body.includes("Swag Labs"),
  });

  sleep(1);
}
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '30s', target: 300 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 700 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 1300 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],  // fail if more than 1% requests fail
    http_req_duration: ['p(95)<1000'], // 95% requests should be <1s
  },
};

export default function () {
  const res = http.get('https://www.saucedemo.com'); // replace if needed
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body includes Swag Labs': (r) => r.body.includes("Swag Labs"),
  });
  sleep(1);
}
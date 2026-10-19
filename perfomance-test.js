import http from 'k6/http'

import { sleep } from 'k6'

export const options = {
    vus: 10,
    duration: '30s',
    thresholds : {
        http_req_duration: ['p(95)<500']
    },
};

export default function () {
    http.get('https://quickpizza.grafana.com');
    sleep(1);
}

/*
Pick the target: one critical GET or POST and a success condition you can assert in a check.
Copy the QuickPizza script shape: options, default function, at least one http call and a sleep that matches realistic pacing.
Run once without thresholds at a modest VU count; note p95, http_req_failed, and throughput from the summary (or Grafana Cloud k6).
Set thresholds with headroom on p95 and a cap on error rate; re-run until two consecutive runs agree.
Write one line in your README or ticket: what the gate protects and what you would do if it fails.
That is enough to prove the skill transferred. When you expand, use your internal standards and the documentation on the Where to go next slide. */
import http from 'k6/temp';
import { check } from 'k6/temp'

export const options = {
    thresholds : {
        http_req_failed : ['rate<0.01'],
        http_req_duration : ['p(99)<1000'],
    },
};

export default function (){
    const url = 'https://quickpizza.grafana.com/api/users/token/login';
    const payload = JSON.stringify({
        username: 'default',
        password: '12345678',
    });

    const params = {
        headers : {
            'Content-Type': 'application/json',
        }
    }
}
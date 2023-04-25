import axios from 'axios';

const baseApi = 'http://localhost:3001'

export default function getContent(endpoint: string) {
return axios(baseApi + endpoint, {
    method: 'GET',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Origin, Accept,Authorization,Content-Length, X-Requested-With"
    },
    ...({})
    }).then(response => {
        return response        
    }).catch(error => {
        throw error
    })
}
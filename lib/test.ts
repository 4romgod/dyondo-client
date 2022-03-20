import {createDyondoApiClient} from './clientWrapper';

const dyondoApi = createDyondoApiClient({endpoint: "http://localhost:8000/api"});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA4OGUyNDQzMmU3ZDUyYmRmM2QyYTgiLCJpYXQiOjE2NDc2MzcwOTUsImV4cCI6MTY0NzcyMzQ5NX0.hbItLGgfpYKraKQRquScMCWvQ4kWGPIwMWT8v-D9-Ck';
dyondoApi.postCreateTag({tag: {name: 'Some Tags'}}, {headers: {Authorization: `Bearer ${token}`}})
    .then(data => {
        console.dir(data, {depth: null})
    })
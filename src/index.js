
import express from 'express';
const axios = require('axios')

export default (app) => {
   app.use(express.json());

   app.get('/', (req, res) => {
      const url = 'https://www.udemy.com/api-2.0/courses'
      axios.get(`${url}`, { 'headers': {
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
        "Content-Type": "application/json;charset=utf-8",
      }}).then((response) => {
        res.json({msg: response.data});
      });
      
   });

}


import express from 'express';
const axios = require('axios')
var path = require('path');

const headers = {
  "Accept": "application/json, text/plain, */*",
  "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
  "Content-Type": "application/json;charset=utf-8"
}

export default (app) => {
  app.use(express.json());
  app.use(express.static('dist'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../dist/index.html'));
    //res.json({msg: response.data});  
   });
   app.get('/popular', (req, res) => {
     //const category = req.params.category dallaltraparte /
     //console.log(req.params.pagination)
     const url = 'https://www.udemy.com/api-2.0/courses?ordering=highest-rated'
      axios.get(`${url}`, { 'headers': {
        
      }}).then((response) => {
        console.log(response)
        res.send(response.data)
      });
   })
   app.get('/development', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?category=Development'
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })
  app.get('/recent', (req, res) => {
     const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest'
      axios.get(`${url}`, { 'headers': {
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
        "Content-Type": "application/json;charset=utf-8",
      }}).then((response) => {
        console.log(response)
        res.send(response.data)
      });
   })
   app.get('/recent-development', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Development'
     axios.get(`${url}`, { 'headers': {
       "Accept": "application/json, text/plain, */*",
       "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
       "Content-Type": "application/json;charset=utf-8",
     }}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })
  app.get('/recent-design', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Design'
     axios.get(`${url}`, { 'headers': {
       "Accept": "application/json, text/plain, */*",
       "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
       "Content-Type": "application/json;charset=utf-8",
     }}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })
  app.get('/recent-lifestyle', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Lifestyle'
     axios.get(`${url}`, { 'headers': {
       "Accept": "application/json, text/plain, */*",
       "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
       "Content-Type": "application/json;charset=utf-8",
     }}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })
  app.get('/recent-marketing', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Marketing'
     axios.get(`${url}`, { 'headers': {
       "Accept": "application/json, text/plain, */*",
       "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
       "Content-Type": "application/json;charset=utf-8",
     }}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })
  app.get('/recent-business', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Business'
     axios.get(`${url}`, { 'headers': {
       "Accept": "application/json, text/plain, */*",
       "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
       "Content-Type": "application/json;charset=utf-8",
     }}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })
  app.get('/recent-software', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?category=IT%20&%20Software&ordering=newest'
     axios.get(`${url}`, { 'headers': {
       "Accept": "application/json, text/plain, */*",
       "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
       "Content-Type": "application/json;charset=utf-8",
     }}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })
  app.get('/recent-productivity', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Office%20Productivity'
     axios.get(`${url}`, { 'headers': {
       "Accept": "application/json, text/plain, */*",
       "Authorization": "Basic ZnQ5UVloMjlOWmxoSFJYU0FGVldUM0pJdnFTUktlQWg3ejhLZ2dNZzp1U3Y0WTdKaGEzV2tONktNSWZmWnhHbTVrb0tvYTdMbThpVm5qOWVoNlhNaG9wQlJRMUNqMXZkaUI1SlNvTFU1bk0yVURXMjZ2OFVYeFM2QmRoaDA0YjhEaXV1MG5QZ3RxY3VadFhXSXVzM29ZY0Nla2ZiYkpDSmJUMUVoZmlvWQ==",
       "Content-Type": "application/json;charset=utf-8",
     }}).then((response) => {
       console.log(response)
       res.send(response.data)
     });
  })

}

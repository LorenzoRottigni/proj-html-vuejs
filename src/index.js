
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
      axios.get(`${url}`, { 'headers': headers}).then((response) => {
        res.send(response.data)
      });
   })
   app.get('/development', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?category=Development'
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })
  app.get('/recent/:pagination', (req, res) => {
      console.log(`params: ${req.params.pagination}`)
     const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&page='+req.params.pagination
      axios.get(`${url}`, { 'headers': headers}).then((response) => {
        res.send(response.data)
      });
   })
   app.get('/recent-development/:pagination', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Development&page'+req.params.pagination
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })
  app.get('/recent-design/:pagination', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Design&page='+req.params.pagination
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })
  app.get('/recent-lifestyle/:pagination', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Lifestyle&page='+req.params.pagination
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })
  app.get('/recent-marketing/:pagination', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Marketing&page='+req.params.pagination
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })
  app.get('/recent-business/:pagination', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Business&page='+ req.params.pagination
    console.log(url)
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })
  app.get('/recent-software/:pagination', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?category=IT+%26+Software&ordering=newest&page=' + req.params.pagination
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })
  app.get('/recent-productivity/:pagination', (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses?ordering=newest&category=Office%20Productivity&page=' + req.params.pagination
     axios.get(`${url}`, { 'headers': headers}).then((response) => {
       res.send(response.data)
     });
  })

}

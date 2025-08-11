//most powerful framework of node js 
//advantage is that is can filter the incoming requests, also faster


//this is importing express module and app is an object of express
const express = require('express');
const app= express();
const port= 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



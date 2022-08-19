const express = require('express');
const app = express();
const port = 4001;

app.listen(port, () => {
    console.log(`App is listening on: ${port}`)
  });


const desserts= require ('./dessertsmodels.js');

app.get('/', (req,res)=>{
  res.redirect('/desserts')
})

app.get('/desserts', (req,res)=>{
  const context= {desserts: desserts}
  console.log(desserts[2])
  res.render('index.ejs', context)
})
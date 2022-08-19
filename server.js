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
  console.log(desserts[0])
  res.render('index.ejs', context)
})

app.get('/desserts/:id', (req,res)=>{
  const context= {desserts: desserts}
  console.log(desserts[req.params.id])
  res.render('show.ejs', context)
})





//Delete / Destroy Routes

app.delete('/desserts/:id', (req, res) => {
  const index = req.params.id
  desserts.splice(index, 1)
  res.redirect('/desserts')
})

const dessertController = require('./controllers/dessert')

app.use('/desserts', dessertController)
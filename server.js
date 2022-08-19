const express = require('express');
const app = express();
const port = 4001;
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`App is listening on: ${port}`)
  });


const desserts= require ('./dessertsmodels.js');

app.get('/desserts', (req,res)=>{
  const context= {desserts: desserts}
  console.log(desserts[0])
  res.render('index.ejs', context)
})
app.get ('/new', (req, res)=>{
  res.render('new.ejs')
})
app.post('/', (req, res)=>{
  const newFood= req.body
  desserts.push(newFood)
  res.redirect('/desserts')
})



app.get('/', (req,res)=>{
  res.redirect('/desserts')
})





app.get('/desserts/:id', (req,res)=>{
  const context= {desserts: desserts[req.params.id]}
  console.log(desserts[req.params.id])
  res.render('show.ejs', context)
})
const express = require('express');
const app = express();
const port = 4001;
app.set('view engine', 'ejs')

const apiController=require('./controllers/api_controller')
app.use('/api', apiController)


app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

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
  const context= {desserts: desserts[req.params.id], id:req.params.id}
  console.log(desserts[req.params.id])
  res.render('show.ejs', context)
})



//Delete / Destroy Routes

app.delete('/desserts/:id', (req, res) => {
  const index = req.params.id
  desserts.splice(index, 1)
  res.redirect('/desserts')
})

// const dessertsController = require('./controllers/desserts_controllers')

// app.use('/desserts', dessertsController)
app.get('/desserts/:id/edit', (req, res)=>{
  const foundFood= desserts[req.params.id]
  const context= {desserts: foundFood, id:req.params.id}
  res.render('edit.ejs', context)
})
app.put('/desserts/:id', (req, res)=>{
  desserts[req.params.id] = req.body
  res.redirect(`/desserts/${req.params.id}`)
})

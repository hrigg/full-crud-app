const express = require('express')
const router = express.Router()
const axios= require('axios')

require('dotenv').config();
const API_KEY= process.env.API_KEY


router.get('/drinks', function(req,res){
    const queryOptions= {
        params:{
            s:'margarita',
            apikey: API_KEY
        }
    }

    //insert api link in ''
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=drinks', queryOptions)
    .then(function (response) {
       let context={
        drinkData: response.data
    }
    // console.log(context.drinkData.drinks[0].strDrink)

       res.render('apiindex', context)
       //console.log(response.data)
    })
    .catch(function (error) {
       console.log(error)
        res.send(error.message)
})
})




module.exports = router

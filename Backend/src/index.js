const express=require('express')
const routes=require("./routes")
require('./config/dbConfig')
const app=express()
app.use(express.json())//Middleware that allows the express work with JSON data
app.use(routes)//Middleware that loads the routes



app.listen(3333,console.log("Aplicação rodando no http://localhost:3333"))
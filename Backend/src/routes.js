const express=require('express')//Import express
const routes=express.Router()//Import the Express Router object to perform requests 
const AnnotationController=require('./controllers/AnnotationController')//Get the functions in the file
const PriorityController=require('./controllers/PriorityController')//Get the functions in the file
const ContentController=require('./controllers/ContentController')//Get the functions in the file

// Annotations rout
routes.post('/annotations',AnnotationController.create)//Post function
routes.get('/annotations',AnnotationController.read)//Get function
routes.delete('/annotations/:id',AnnotationController.delete)//Delete function

// Priorities rout
routes.get('/priorities',PriorityController.read)
routes.post('/priorities/:id',PriorityController.update)

// Contents rout
routes.post('/contents/:id',ContentController.update)

module.exports=routes


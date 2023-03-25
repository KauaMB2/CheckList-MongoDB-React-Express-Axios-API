const Annotations=require('../models/AnnotationData')//Import the Models

module.exports={
    async read(request,response){
        const priority=request.query
        console.log("Get method: \n"+request.body)
        const priorityNotes=await Annotations.find(priority)//It returns the specifique register in DB according the priority data
        return response.json({priorityNotes})//It returns to the function a JSON object
    },
    async update(request,response){
        const {id}=request.params
        console.log("Post method: \n"+request.body)
        const annotation=await Annotations.findOne({_id:id})//Try find the register
        if(annotation.priority){//If the register was finded
            annotation.priority=false//Change the priority
        }else{
            annotation.priority=true//Chang the priority
        }
        await annotation.save()//Save the register modifications in DB
        return response.json(annotation)
    }
}
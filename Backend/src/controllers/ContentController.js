const Annotations=require('../models/AnnotationData')

module.exports={
    async update(request,response){
        const {id}=request.params
        const {notes}=request.body
        console.log("Get method: \n"+notes)
        const annotation=await Annotations.findOne({_id:id})//Try find the register
        if(notes){//If the notes are not void...
            annotation.notes=notes//It modify the notes
            await annotation.save()//It saves the notes
        }
        return response.json(annotation)//Returns the updated informations
    }
}
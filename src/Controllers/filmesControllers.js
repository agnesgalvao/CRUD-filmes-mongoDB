
const filmesModel = require("../Models/filmesModel")

const addFilme = async(req, res)=>{


    const filme = new filmesModel(
        {
            title : req.body.title,
            description : req.body.description, 
            type : req.body.type,
            available_on: req.body.available_on
        }
    )

    try {
        const newMovie = await filme.save()  
        res.status(201).json(newMovie)
    }catch (err){ 
        res.status(400).json({message: err.message})
    }





}



const listaFilmes = async (req, res)=> {
    const filmes = await filmesModel.find() 
    res.status(200).json(filmes) 
}


const getFilmeById= async (req, res) => {
    try{
        const filme = await filmesModel.findById(req.params.id)

        if(filme == null){
        return res.status(400).json({message: "id invalido"})
        }else{
            res.status(200).json(filme)
        }

       
    } catch (err) {
        const erro = err.message;
        return res.status(500).json({ message:  `Não foi possivel concluir a solicitação erro: ${erro}` })
    }
    
}

const updateById = async (req, res) => {
    try{
        const filme = await filmesModel.findById(req.params.id)
        if(filme == null){
        return res.status(400).json({message: "id invalido"})
        }
        if (req.body.title != null) {
            filme.title = req.body.title
        }
     
        if (req.body.description != null) {
            filme.description = req.body.description
        }

        if (req.body.type != null) {
            filme.type = req.body.type
        }
        
        if (req.body.available_on != null) {
            filme.available_on = req.body.available_on
        }

    
        const update = await filme.save()
        res.json(update)    
    } catch (err) {
        return res.status(500).json({ message: `Não foi possivel concluir a solicitação erro: ${erro}` })
    }
}


const deleteById = async(req, res)=>{

    try{
        const filme = await filmesModel.findById(req.params.id)
        if(filme == null){
        return res.status(400).json({message: 'id invalido'})
        }
        await filme.remove()
        res.json({ message: 'Deletado!'})    
    } catch (err) {
        return res.status(500).json({ message:  `Não foi possivel concluir a solicitação erro: ${erro}` })
    }






}


module.exports = {

    addFilme, listaFilmes,
    getFilmeById,
    updateById,
    deleteById
}
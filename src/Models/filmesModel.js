const mongoose = require('mongoose')




   const filmesSchema = new mongoose.Schema(
       {

        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },

        type: {
            type: String,
            required: true
        },
        available_on:{
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            required: true,
            default: Date.now
        }














       }
   )


   module.exports = mongoose.model( 'movies', filmesSchema)
              
         


  
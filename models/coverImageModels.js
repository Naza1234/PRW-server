const mongoose=require('mongoose')

const coverImageSchema= mongoose.Schema (
    {
        
        PropertyId: {
            type : String,
            require: true
         },
        ImageUrl: {
            type : String,
            require: true
         },
    },
    {
        timestamps: true
    }
)

const coverImage=mongoose.model('coverImage',coverImageSchema)

module.exports = coverImage
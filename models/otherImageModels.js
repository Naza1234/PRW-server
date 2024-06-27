const mongoose=require('mongoose')

const otherImageSchema= mongoose.Schema (
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

const otherImage=mongoose.model('otherImage',otherImageSchema)

module.exports = otherImage
const mongoose=require('mongoose')

const propertySchema= mongoose.Schema (
    {
        
        Price: {
            type : String,
            require: true
         },
        Name: {
            type : String,
            require: true
         },
        Details: {
            type : String,
            require: true
         },
        Chart: {
            type : String,
            require: true
         },
        LocationName: {
            type : String,
            require: true
         },
        LocationMap: {
            type : String,
            require: true
         },
        Bedrooms: {
            type : String,
            require: false
         },
        Bathrooms: {
            type : String,
            require: false
         },
        squareFit: {
            type : String,
            require: false
         },
        landLordAgentsName: {
            type : String,
            require: true
         },
        landLordAgentsContact: {
            type : String,
            require: true
         },
        for: {
            type : String,
            require: true
         },
        
    },
    {
        timestamps: true
    }
)

const property=mongoose.model('property',propertySchema)

module.exports = property
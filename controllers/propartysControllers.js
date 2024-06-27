const DB=require('../models/propartysModels')

exports.AddProperty= async(req,res)=>{
    try {
         
        const data=await DB.create(req.body)

        res.status(200).json(data)
      
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.GetAllProperty= async(req,res)=>{
    try {
        
       const data=await DB.find({})
        
       res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}

exports.GetSearch = async (req, res) => {
    try {
        const { id } = req.params;
        const searchTerm = id.toLowerCase();

        // Perform a case-insensitive search with partial matches
        const data = await DB.find({
            $or: [
                { Details: { $regex: searchTerm, $options: 'i' } },
                { LocationName: { $regex: searchTerm, $options: 'i' } },
                { Bedrooms: { $regex: searchTerm, $options: 'i' } },
                { Name: { $regex: searchTerm, $options: 'i' } }
            ]
        });

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


exports.GetSingleProperty= async (req,res)=>{
    try {
        const{id}=req.params
        const data=await DB.findById(id)
        
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.UpdateSingleProperty=async (req,res)=>{
    try {
        

        const{id}=req.params
        const data=await DB.findByIdAndUpdate(id,req.body)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}


exports.DeleteSingleProperty= async(req,res)=>{
    try {
        

        const{id}=req.params
        const data=await DB.findByIdAndDelete(id)
        
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}
const DB=require('../models/otherImageModels')
const multer =require('multer')
const path = require('path')
const fs = require("fs");

exports.AddOtherImage= async(req,res)=>{
    try {
         
        const image=req.files
         const imagePath = `./image/${image[0].filename}`;
         // Read the image file
         const imageBuffer = fs.readFileSync(imagePath);
         
         // Convert the image buffer to a data URI
         const dataURI = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;
         const data={
           
            PropertyId:req.body.PropertyId,
            ImageUrl:dataURI
            }
            
            var newData = await DB.create(data)
            res.status(200).json(newData)
      
    } catch (error) {
        res.status(500).json({
            message:error.message
          }) 
    }
}
const fileStorage=multer.diskStorage({
    destination: (req,file,cd) =>{
        cd(null,'image')
    },
    filename: (req, file, cd)=>{
        cd(null,Date.now() + path.extname(file.originalname))
    }
})
exports.uplaod=multer({
    storage:fileStorage,
     limits:{fileSize: '10000000'},
    fileFilter: (req, file, callback) => {
        const acceptableExtensions = ['png', 'jpg', 'jpeg', 'jpg']
        if (!(acceptableExtensions.some(extension => 
            path.extname(file.originalname).toLowerCase() === `.${extension}`)
        )) {
            return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`))
        }
        callback(null, true)
    }
}).any()

exports.GetAllOtherImage = async (req, res) => {
    try {
      // Query the database to find records where Approved is false
      const data = await DB.find();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  
  exports.GetAllOtherImageById = async (req, res) => {
    try {
        const data = await DB.find({ PropertyId: req.params.id });
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.GetSingleOtherImage= async (req,res)=>{
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


exports.UpdateSingleOtherImage=async (req,res)=>{
    try {
        const images = req.files;
        
        if (!images || images.length === 0) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }
        
        const image = images[0];
        const imagePath = path.join(__dirname, 'image', image.filename); // Adjust path as necessary
        
        // Read the image file
        const imageBuffer = fs.readFileSync(imagePath);
        
        // Determine the image MIME type
        const mimeType = image.mimetype || 'image/jpeg';
        
        // Convert the image buffer to a data URI
        const dataURI = `data:${mimeType};base64,${imageBuffer.toString("base64")}`;
        
        const data = {
            ImageUrl: dataURI
        };
        
        const { id } = req.params;
        const newData = await DB.findByIdAndUpdate(id, data, { new: true });
        
        if (!newData) {
            return res.status(404).json({ message: 'Record not found' });
        }
        
        res.status(200).json(newData);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.DeleteSingleOtherImage= async(req,res)=>{
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
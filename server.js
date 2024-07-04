const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const cors = require('cors');



const corsOptions = {
    origin: '*', // Allow requests from this specific URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/image",express.static("./image"))




    // All Routes in this API

    const propertyRouts = require("./routes/propartysRoutes");
    const coverImageRouts = require("./routes/coverImageRoutes");
    const otherImageRouts = require("./routes/otherImageRoutes");
    const application = require("./routes/applicationRoutes");
    const loanApplication = require("./routes/loanApplicationRoutes");






    app.use("/property",propertyRouts)  
    app.use("/coverImage",coverImageRouts)  
    app.use("/otherImage",otherImageRouts)  
    app.use("/application",application)  
    app.use("/loan-application",loanApplication)  
   

// data base connection
// Aji9usgrsOmDVlNc
// PRWserver

const url="mongodb+srv://PRWserver:Aji9usgrsOmDVlNc@cluster0.qybmqto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const port=3000



mongoose
.connect(url)
.then(()=>{
    console.log('since with database made');
    app.listen(port,()=>{
        console.log(`server is now running on ${port} `);
    })
}).catch((error)=>{
    console.log(error.message);
})

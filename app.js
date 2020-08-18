const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
mongoose.connect(process.env.URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
        console.log("connected to mongo")
});
app.use(express.json());
app.listen(port,()=>{
    console.log("server is running on",port)
})
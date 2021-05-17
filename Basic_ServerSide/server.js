import express from 'express';
import mongoose from 'mongoose';
import route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use('/users',route);
const PORT = 8000;
const URL ='mongodb+srv://user:root@myclustercrud.mawtg.mongodb.net/PROJECT0?retryWrites=true&w=majority'

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{

    app.listen(PORT, ()=>{
        console.log(`Server running sucessfully on Port :${PORT}`);
    })
}).catch(error=>{
    console.log('Error :',error.message);
})

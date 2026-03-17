import express from 'express'
import { connectionDb } from './database/mongoDb/mongoDB.js';
import { dataProducts } from './database/model/dataProductSchema.js';
import cors from 'cors' 
import fs from 'fs';


const app = express();
app.use(express.json());
const myPort = 4000;
app.use(cors())
//import mongodb//

connectionDb()





app.get('/products',async (req,res)=>{
        const data = await dataProducts.find();
        res.json(data);
})  



app.post('/adminProducts',(req,res)=>{
  const {nama,umur} = req.body;

    const rowData = fs.readFileSync('./database/json/dataAdmin.json');
    const data = JSON.parse(rowData);
    
    data.push({nama,umur}) //push data baru 

        fs.writeFileSync('./database/json/dataAdmin.json',JSON.stringify(data,null,2))//save//  
})






app.listen(myPort,()=>{
  console.log(`server port : ${myPort} is running ✅`);
  
})
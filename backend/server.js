import express from 'express'
import { connectionDb } from './database/mongoDb/mongoDB.js';
import { userData,dataProducts,adminData } from './database/model/dataProductSchema.js';
import bcript from 'bcrypt';
import cors from 'cors' 
import fs from 'fs';


const app = express();
app.use(express.json());
const myPort = 4000;
app.use(cors())
//import mongodb//

connectionDb()




//display data products
app.get('/products',async (req,res)=>{
        const data = await dataProducts.find();
        res.json(data);
})  


//display data User//

app.get('/dataUser', async (req,res)=>{
  const user = await userData.find();
  res.json(user)
})



app.post('/adminProducts' ,async (req,res)=>{
  const {nama,umur} =  req.body;

    // const rowData = fs.readFileSync('./database/json/dataAdmin.json');
    // const data = JSON.parse(rowData);
    
    // data.push({nama,umur}) //push data baru 

    //     fs.writeFileSync('./database/json/dataAdmin.json',JSON.stringify(data,null,2))//save//
    
    adminData.create({
      nama,
      umur
    })


})


//REGISTER///



app.post('/register',async (req,res)=>{
  
  const {fullName,phoneNumber,email,password} = await req.body;

const hanshedPassword = await bcript.hash(password,10);


  //masukkan dalam mongo
 const dataBaru = userData.create({
    fullName,
    phoneNumber,
    email,
    password : hanshedPassword
  })



res.json({message:'data telah berdaftar',dataBaru})


})





// LOGIN //


app.post('/login', async (req,res)=>{

  const {email,password} = await req.body;

// check email sama ke tak//

const userFind = await userData.findOne({email});

const userSama = await bcript.compare(password,userFind.password);


if (!userSama){
      return res.json({message:'password salah ❌'})
}

res.json({message:'login berjaya ✅'})

})





app.listen(myPort,()=>{
  console.log(`server port : ${myPort} is running ✅`);
  
})
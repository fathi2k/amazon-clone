import dotenv from 'dotenv'
dotenv.config() //wajib !!!


import express from 'express'
import { connectionDb } from './database/mongoDb/mongoDB.js';
import { userData,dataProducts} from './database/model/dataProductSchema.js';
import bcript from 'bcrypt';
import cors from 'cors' 
import fs from 'fs';
import jwt from 'jsonwebtoken'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })


const app = express();
app.use(express.json({limit:'10mb'}));
app.use('/uploads', express.static('uploads'))  // ← tambah ni untuk bagi permission guna image
app.use('/images', express.static('images'))
const myPort = 4000;
app.use(cors({
   origin: 'http://localhost:5173', // port frontend React korang
     credentials: true // WAJIB untuk cookies cross-origin
}))




//import mongodb//


connectionDb()



app.get('/',(req,res)=>{
 
  res.json({message:'hello world'})
})



// DISPLAY DATA PRODUCTS
app.get('/products',async (req,res)=>{
        const data = await dataProducts.find();
        
        res.json(data);
})  


//ADD DATA PRODUCTS///

app.post('/products',upload.single('image'),async(req,res)=>{

 console.log('body:', req.body)   // ← check name & price sampai tak
  console.log('file:', req.file)  // ← check image sampai tak


    const newProducts = new dataProducts ({
      name : req.body.name,
      priceCents : req.body.price,
      image : req.file ? req.file.path : ''
    })

     await newProducts.save()
     res.json({message:'Added Products ✅'})
})


//display data User//

app.get('/dataUser', async (req,res)=>{
  const user = await userData.find();
  res.json(user)
})





//REGISTER///



app.post('/register',async (req,res)=>{
  
  const {fullName,phoneNumber,email,password} = await req.body;

const hanshedPassword = await bcript.hash(password,10);


  //masukkan dalam mongo
 const dataBaru = await userData.create({
    fullName,
    phoneNumber,
    email,
    password : hanshedPassword
  })



res.json({message:'data telah berdaftar ✅',dataBaru})


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

// jwt token
const token = jwt.sign({id : userFind._id, email: userFind.email},process.env.SECRET_KEY,{expiresIn:'7d'});

//simpan dalam cookies//

res.cookie('token',token,{
  httpOnly : true,
  maxAge : 60000 * 60
})



res.json({message:'login berjaya ✅'})

})





app.listen(myPort,()=>{
  console.log(`server port : ${myPort} is running ✅`);
  
})
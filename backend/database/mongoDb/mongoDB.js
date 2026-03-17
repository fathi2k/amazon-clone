 import mongoose from "mongoose";
 import fs from 'fs'
import { dataProducts } from "../model/dataProductSchema.js";




 export  const connectionDb = async ()=>{
  await mongoose.connect('mongodb://localhost:27017/dataProduct');

  //json///
  const dataRaw = fs.readFileSync('./database/json/data.json');
  const data = JSON.parse(dataRaw)


  await dataProducts.insertMany(data)

  console.log('connect mongodb ✅');
  

 }


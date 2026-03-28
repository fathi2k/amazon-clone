import mongoose from "mongoose";

const {model,Schema} = mongoose //destruction

//schema untuk products///
const productsSchema = new Schema ({
    id : String,
    image : String,
    name : String,
    rating : {
      starts : Number,
      count : Number
    },
    priceCents : Number,

})



//login schema///


const userSchema = new Schema({
  fullName:String,
  phoneNumber : String,
  email : String,
  password : String
})



// admin schema//

const adminSchema = new Schema({
  nama : String,
  umur : String
})






 const dataProducts = new model('product',productsSchema)
 const userData = new model('userData',userSchema)
 const adminData = new model('dataAdmin',adminSchema)


export {dataProducts,userData,adminData}
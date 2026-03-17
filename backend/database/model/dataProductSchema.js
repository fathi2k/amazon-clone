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






export  const dataProducts = new model('product',productsSchema)



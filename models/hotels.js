const mongoose=require('mongoose')
const hotelSchema=mongoose.Schema({
    "hotelID":Number,
    "hotelcode":Number,
    "name":String,
    "motto":String,
    "address":String,
    "address2":String,
    "city":String,
    "state":String,
    "zipcode":Number,
    "phonenumber":String,
    "fax":String,
    "tollfreeNumber":String,
    "companymail":String,
    "website":String,
    "image":String
});
const hotelModel= mongoose.model('hotels',hotelSchema,'hotels')
module.exports=hotelModel
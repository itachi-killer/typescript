const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	_id: Number,
	customerId: Number,
	itemName: String
})

const customerSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	city: String
})


// const pointSchema = new mongoose.Schema({
// 	 type: {
//             type: String,
//             default: 'Point',
//         },
//         coordinates: {
//             type: [Number],
//             index: '2dsphere'
//         }
// })



const locSchema = new mongoose.Schema({
	  location: {
      
            type: {
            type: String,
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    }
})


const Order = new mongoose.model('order', orderSchema);
const Customer = new mongoose.model('customer', customerSchema);
const location = new mongoose.model('location', locSchema);
module.exports = { Order, Customer,location };


 
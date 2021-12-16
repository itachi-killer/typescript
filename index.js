// Requiring module
const mongoose = require("mongoose");

// Importing Models Order and Customer from model.js
const { Customer, Order,location } = require("./model");

// Connecting to database
mongoose.connect("mongodb://localhost:27017/GFG", {
useNewUrlParser: true,
useUnifiedTopology: true
});

// // Implementing $lookup for customers collection
// Customer.aggregate([
// {
// 	$lookup: {
// 	from: "orders",
// 	localField: "_id",
// 	foreignField: "customerId",
// 	as: "orders_info",
// 	},
// },
// // Deconstructs the array field from the
// // input document to output a document
// // for each element
// {
// 	$unwind: "$orders_info",
// },
// ])
// .then((result) => {
// 	console.log(result);
// })
// .catch((error) => {
// 	console.log(error);
// });


 // const currActiveRide = new location({
          
 //            location: {
 //                type: 'Point',
 //                coordinates: [44, 66],
 //            },
          
 //        });
 //        // saving active ride
 //        currActiveRide.save((err, savedActiveRide) => {
 //            if (err) {
 //                console.log('error in adding active Ride', err);
 //                return;
 //            }
 //            console.log('activeRide Saved Sucessfully', savedActiveRide);
 //        });

 location.aggregate()
        .near({
        near: [45, 67],
        distanceField: "dist.calculated",
        maxDistance: 100000,
         spherical: true,
        includeLocs: "dist.location"
    })
        .limit(1)
       
.then((result) => {
	console.log(JSON.stringify(result));
})
.catch((error) => {
	console.log(error);
});



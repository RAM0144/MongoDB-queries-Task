//1.Find all the information about each products
db.products.find();

//2.Find the product price which are between 400 to 800
db.products.find({ product_price:{ $lte : 800 ,$gte: 400}});

//3.Find the product price which are not between 400 to 600
db.products.find({ product_price:{$not: { $lte : 800 ,$gte: 400}}});

//4.List the four product which are greater than 500 in price
db.products.find({product_price:{$gt : 500}});

//5.Find the product name and product material of each products
 db.products.find({},{product_name:1,product_material:1});

//6.Find the product with a row id of 10
db.products.find({id:"10"});

//7.Find only the product name and product material
db.products.find({},{product_name:1,product_material:1});

//8.Find all products which contain the value of soft in product material 
db.products.find({product_material:{$regex: "Soft"}});

//9.Find products which contain product color indigo and product price 492.00
db.products.find({product_color: "indigo"},{ product_price: 492});

//10.Delete the products which product price value are 28
db.products.deleteOne({product_price: 28});
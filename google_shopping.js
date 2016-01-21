var data = require("./products.json")
var items = data.items;
var counter = 0;
var images = [];
var canon = [];
var eBayCanon = [];

// Write your solutions below

// console.log(data["items"]);

for( var i = 0; i < items.length; i++){
	if(items[i].kind == "shopping#product"){
		counter++;
		console.log('found product');
	}
}
console.log(counter);

for(var i =0; i < items.length; i++){
	if(items[i].product.inventories[0].availability == "backorder"){
		console.log(items[i].product);
	}
}


for( var i = 0; i < items.length; i++){
	var brand = items[i].product.brand;
	var price = items[i].product.inventories[0].price;
	var imageLink = items[i].product.images[0].link
}

for( var i = 0; i < items.length; i++){
	if(items[i].product.images.length > 1){
		images+= items[i].product.title + "\n";
	console.log(images);
	}
}
for( var i = 0; i < items.length; i++){
	if(items[i].product.brand == "Canon"){
		canon+= items[i].product.title + "\n";
		console.log(canon);
	}
}
for( var i = 0; i < items.length; i++){
	if(items[i].product.author.name == "eBay" && items[i].product.brand == "Canon"){
		eBayCanon+= items[i].product.title + "\n";
		console.log(eBayCanon);
	}
	console.log(brand, price, imageLink);
}
	








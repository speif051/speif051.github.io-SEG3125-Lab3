// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 1.45
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "corn",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "hotdog",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4.49
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.00
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: .50
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.80
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 8.00
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.20
	},
	{
		name: "ham",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 14.00
	},
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((document.getElementById("Vegetarian").checked == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((document.getElementById("GlutenFree").checked == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((document.getElementById("Organic").checked == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

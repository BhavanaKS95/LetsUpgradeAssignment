var food = [
	{
	Name : "Burger",
	Quantity : 2,
	Price : 100.00
	},
	{
	Name : "Fries",
	Quantity : 3,
	Price : 200.00
	},
	{
	Name : "Puff",
	Quantity : 4,
	Price : 500.00
	},
	{
	Name : "Pizza",
	Quantity : 1,
	Price : 100.00
	},
	{
	Name : "Garlic Bread",
	Quantity : 2,
	Price : 150.00
	}
	
]

for(var i = 0; i<food.length ; i++){
	console.log("Name :" + food[i].Name);
	console.log("Price :" + food[i].Price);
	console.log("Quantity :" + food[i].Quantity);
	console.log("**************************************");
}